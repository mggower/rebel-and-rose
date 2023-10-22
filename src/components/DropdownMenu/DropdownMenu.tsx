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

type Props = {
  label: React.ReactNode
  children?: React.ReactNode
} & Omit<React.HTMLProps<HTMLButtonElement>, 'label' | 'children'>

const DropdownMenu = forwardRef<HTMLButtonElement, Props>(function DropdownMenu(
  { children, label, ...props },
  propRef,
) {
  const [isOpen, setIsOpen] = useState(false)
  const [hasFocusInside, setHasFocusInside] = useState(false)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const elements = useRef<(HTMLButtonElement | null)[]>([])
  const labels = useRef<(string | null)[]>([])

  const { context, refs, floatingStyles } = useFloating<HTMLButtonElement>({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement: 'bottom-start',
    whileElementsMounted: autoUpdate,
    middleware: [offset({ mainAxis: 4, alignmentAxis: 0 }), flip(), shift()],
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
      setHasFocusInside,
      getItemProps,
    }),
    [isOpen, setIsOpen, activeIndex, getItemProps],
  )

  return (
    <Fragment>
      <button
        ref={ref}
        data-open={isOpen ? '' : undefined}
        data-focus-inside={hasFocusInside ? '' : undefined}
        {...getReferenceProps({
          ...props,
          onFocus: (event: React.FocusEvent<HTMLButtonElement>) => {
            props.onFocus?.(event)
            setHasFocusInside(true)
          },
        })}>
        {label}
      </button>

      <DropdownContext.Provider value={dropdownContext}>
        <FloatingList elementsRef={elements} labelsRef={labels}>
          {isOpen && (
            <FloatingPortal>
              <FloatingFocusManager context={context} modal={false}>
                <div ref={refs.setFloating} style={floatingStyles} {...getFloatingProps()}>
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
