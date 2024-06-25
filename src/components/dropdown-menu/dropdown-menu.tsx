import { Fragment, forwardRef, useMemo, useRef, useState } from 'react'
import { DropdownContext } from './context'
import {
  FloatingFocusManager,
  FloatingPortal,
  FloatingList,
  autoUpdate,
  flip,
  offset,
  shift,
  useRole,
  useClick,
  useDismiss,
  useFloating,
  useMergeRefs,
  useTypeahead,
  useInteractions,
  useListNavigation,
} from '@floating-ui/react'

interface Props extends Omit<React.HTMLProps<HTMLButtonElement>, 'label' | 'children'> {
  label: React.ReactNode
  children?: React.ReactNode
}

const DropdownMenu = forwardRef<HTMLButtonElement, Props>(function DropdownMenu(
  { children, label, ...props },
  propRef,
) {
  const [isOpen, setIsOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const elements = useRef<(HTMLButtonElement | null)[]>([])
  const labels = useRef<(string | null)[]>([])

  const { context, refs, floatingStyles } = useFloating<HTMLButtonElement>({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement: 'bottom-start',
    whileElementsMounted: autoUpdate,
    middleware: [offset({ mainAxis: 8, alignmentAxis: -3 }), flip(), shift()],
  })

  const ref = useMergeRefs([refs.setReference, propRef])

  const click = useClick(context, { event: 'mousedown' })
  const dismiss = useDismiss(context, { bubbles: true })
  const role = useRole(context, { role: 'menu' })
  const navigation = useListNavigation(context, {
    listRef: elements,
    activeIndex,
    onNavigate: setActiveIndex,
  })
  const typeahead = useTypeahead(context, {
    listRef: labels,
    onMatch: isOpen ? setActiveIndex : undefined,
    activeIndex,
  })

  const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions([
    click,
    role,
    dismiss,
    navigation,
    typeahead,
  ])

  const dropdownContext: DropdownContext = useMemo(
    () => ({
      isOpen,
      setIsOpen,
      activeIndex,
      setActiveIndex,
      getItemProps,
    }),
    [isOpen, setIsOpen, activeIndex, getItemProps],
  )

  return (
    <Fragment>
      <button
        ref={ref}
        data-open={isOpen}
        className='link data-open:bg-ink-300/50 flex h-8 w-8 place-content-center place-items-center rounded p-1 text-xl active:bg-ink-300/50'
        {...getReferenceProps(props)}>
        {label}
      </button>

      <DropdownContext.Provider value={dropdownContext}>
        <FloatingList elementsRef={elements} labelsRef={labels}>
          {isOpen && (
            <FloatingPortal>
              <FloatingFocusManager context={context} modal={false}>
                <div
                  ref={refs.setFloating}
                  style={floatingStyles}
                  className='flex w-40 flex-col rounded border border-ink-800 bg-wheat-100 p-1 outline-none'
                  {...getFloatingProps({
                    onKeyDown: (event: React.KeyboardEvent<HTMLDivElement>) => {
                      if (event.key === 'Tab') {
                        event.preventDefault()
                        setActiveIndex((index) => {
                          if (index === null) {
                            return 0
                          } else if (event.shiftKey) {
                            return index === 0 ? null : index - 1
                          } else {
                            return index === elements.current.length - 1 ? null : index + 1
                          }
                        })
                      }
                    },
                  })}>
                  {children}
                </div>
              </FloatingFocusManager>
            </FloatingPortal>
          )}
        </FloatingList>
      </DropdownContext.Provider>
    </Fragment>
  )
})

export default DropdownMenu
