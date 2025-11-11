import {
  FloatingFocusManager,
  FloatingList,
  FloatingPortal,
  autoUpdate,
  flip,
  offset,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useListNavigation,
  useMergeRefs,
  useRole,
  useTypeahead,
} from '@floating-ui/react'
import { css } from '@emotion/react'
import theme from '@rebel/theme'
import { Fragment, forwardRef, useMemo, useRef, useState, type HTMLProps, type ReactNode } from 'react'
import { DropdownContext, type DropdownContextValue } from './context'

export interface DropdownMenuProps extends Omit<HTMLProps<HTMLButtonElement>, 'label'> {
  label: ReactNode
  children?: ReactNode
}

const triggerStyles = css(
  {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: theme.spacing(8),
    height: theme.spacing(8),
    borderRadius: theme.rounded.sm,
    padding: theme.spacing(1),
    fontSize: theme.utils.rem(1),
    lineHeight: 1,
    border: `1px solid ${theme.style.alpha(theme.palette.ink[800], 0.1)}`,
    backgroundColor: theme.palette.transparent,
    color: theme.palette.ink.main,
    transition: 'background-color 150ms ease, color 150ms ease, border-color 150ms ease',
    cursor: 'pointer',
    ['&:hover']: {
      backgroundColor: theme.style.alpha(theme.palette.ink[300], 0.35),
    },
    ['&:active']: {
      backgroundColor: theme.style.alpha(theme.palette.ink[300], 0.5),
    },
    ['&[data-open="true"]']: {
      backgroundColor: theme.style.alpha(theme.palette.ink[300], 0.5),
    },
    ['&:focus-visible']: {
      outline: `2px solid ${theme.palette.ink[400]}`,
      outlineOffset: theme.spacing(1),
    },
  },
)

const menuStyles = css({
  display: 'flex',
  flexDirection: 'column',
  width: theme.utils.pixel(160),
  borderRadius: theme.rounded.sm,
  border: `1px solid ${theme.palette.ink[800]}`,
  backgroundColor: theme.palette.wheat[100],
  padding: theme.spacing(1),
  boxShadow: theme.shadow.sm,
  outline: 'none',
  gap: theme.spacing(1),
})

export const DropdownMenu = forwardRef<HTMLButtonElement, DropdownMenuProps>(function DropdownMenu(
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

  const mergedRef = useMergeRefs([refs.setReference, propRef])

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

  const dropdownContext: DropdownContextValue = useMemo(
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
        ref={mergedRef}
        data-open={isOpen}
        css={triggerStyles}
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
                  css={menuStyles}
                  {...getFloatingProps({
                    onKeyDown: (event: React.KeyboardEvent<HTMLDivElement>) => {
                      if (event.key === 'Tab') {
                        event.preventDefault()
                        setActiveIndex((index) => {
                          if (index === null) {
                            return 0
                          }
                          if (event.shiftKey) {
                            return index === 0 ? null : index - 1
                          }
                          return index === elements.current.length - 1 ? null : index + 1
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
