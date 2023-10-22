import { useListItem, useMergeRefs } from '@floating-ui/react'
import { useDropdownContext } from './context'
import { forwardRef } from 'react'

interface Props {
  label: string
  selected?: boolean
  disabled?: boolean
}

const MenuItem = forwardRef<
  HTMLButtonElement,
  Props & React.ButtonHTMLAttributes<HTMLButtonElement>
>(function MenuItem({ label, selected, disabled, ...props }, propRef) {
  const menu = useDropdownContext()
  const item = useListItem({ label: disabled ? null : label })
  const ref = useMergeRefs([item.ref, propRef])

  const isActive = item.index === menu.activeIndex

  return (
    <button
      {...props}
      ref={ref}
      type='button'
      role='menuitem'
      disabled={disabled}
      tabIndex={isActive ? 0 : -1}
      data-selected={selected ? '' : undefined}
      {...menu.getItemProps({
        onFocus: (event: React.FocusEvent<HTMLButtonElement>) => {
          props.onFocus?.(event)
          menu.setHasFocusInside(true)
        },
      })}>
      {label}
    </button>
  )
})

export default MenuItem
