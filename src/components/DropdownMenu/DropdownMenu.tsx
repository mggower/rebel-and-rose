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
import styles from './styles.module.scss'

type Props = {
  label: React.ReactNode
  children?: React.ReactNode
} & Omit<React.HTMLProps<HTMLButtonElement>, 'label' | 'children'>

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
        className={styles.menu}
        data-open={isOpen ? '' : undefined}
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
                  className={styles.dropdown}
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
