import { useMatch, useNavigate } from 'react-router-dom'
import { RoutePath } from '@/components/routes'
import { DropdownMenuItem } from '@/components/DropdownMenu'

interface Props {
  label: string
  route: RoutePath
}

function NavigationItem({ label, route }: Props) {
  const selected = useMatch(route) !== null
  const navigate = useNavigate()

  return <DropdownMenuItem label={label} selected={selected} onClick={() => navigate(route)} />
}

export default NavigationItem
