import { useListItem, useMergeRefs } from '@floating-ui/react'
import { useDropdownContext } from './context'

export interface DropdownItemProps<El extends HTMLElement = HTMLButtonElement> {
  label: string
  disabled?: boolean
  ref?: React.ForwardedRef<El>
}

export function useDropdownItem<El extends HTMLElement>({
  label,
  disabled = false,
  ...props
}: DropdownItemProps<El>) {
  const menu = useDropdownContext()
  const item = useListItem({ label: disabled ? null : label })
  const ref = useMergeRefs([item.ref, props.ref])
  const active = menu.activeIndex === item.index
  return {
    ref,
    menu,
    active,
    props: {
      disabled,
      role: 'menuitem' as const,
      tabIndex: active ? 0 : -1,
      ['data-active']: active,
    },
  }
}
