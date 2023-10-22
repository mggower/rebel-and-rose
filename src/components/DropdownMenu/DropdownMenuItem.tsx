import { useListItem, useMergeRefs } from '@floating-ui/react'
import { useDropdownContext } from './context'
import { forwardRef } from 'react'
import styles from './styles.module.scss'
interface Props {
  label: string
  selected?: boolean
  disabled?: boolean
}

const MenuItem = forwardRef<
  HTMLButtonElement,
  Props & React.ButtonHTMLAttributes<HTMLButtonElement>
>(function MenuItem({ label, selected, disabled, className, ...props }, propRef) {
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
      data-active={isActive ? '' : undefined}
      data-selected={selected ? '' : undefined}
      className={`${styles.item} ${className ?? ''}`}
      {...menu.getItemProps({
        ...props,
        onClick: (event: React.MouseEvent<HTMLButtonElement>) => {
          props.onClick?.(event)
          menu.setIsOpen(false)
        },
      })}>
      {label}
    </button>
  )
})

export default MenuItem
