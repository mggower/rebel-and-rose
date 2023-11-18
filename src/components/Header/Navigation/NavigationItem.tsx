import { useDropdownItem } from '@/components/Shared/DropdownMenu'
import { Link, useMatch } from 'react-router-dom'
import { RoutePath } from '@/utils/routes'

interface Props {
  label: string
  route: RoutePath
}

function NavigationItem({ label, route }: Props) {
  const { ref, menu, props } = useDropdownItem({ label })
  const selected = useMatch(route) !== null
  return (
    <Link
      ref={ref}
      to={route}
      data-selected={selected}
      className='link text-left text-xs'
      {...menu.getItemProps({ ...props, onClick: () => menu.setIsOpen(false) })}>
      {label}
    </Link>
  )
}

export default NavigationItem
