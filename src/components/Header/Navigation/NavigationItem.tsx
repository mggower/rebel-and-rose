import { useMatch, useNavigate } from 'react-router-dom'
import { useDropdownItem } from '@/components/Shared/DropdownMenu'
import { RoutePath } from '@/utils/routes'

interface Props {
  label: string
  route: RoutePath
}

function NavigationItem({ label, route }: Props) {
  const { ref, menu, props } = useDropdownItem({ label })
  const selected = useMatch(route) !== null
  const navigate = useNavigate()

  return (
    <button
      ref={ref}
      type='button'
      className='rounded-sm border-none px-3 py-1 text-left text-xs uppercase tracking-wider no-underline outline-none data-[active=true]:bg-ink-200 data-[selected=true]:underline active:data-[active=true]:bg-blush'
      data-selected={selected}
      {...menu.getItemProps({
        ...props,
        onClick: () => {
          navigate(route)
          menu.setIsOpen(false)
        },
      })}>
      {label}
    </button>
  )
}

export default NavigationItem
