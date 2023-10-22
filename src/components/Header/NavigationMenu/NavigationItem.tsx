import { useLinkClickHandler } from 'react-router-dom'
import { RoutePath } from '@/components/Main'
import { MenuItem } from '@/components/DropdownMenu'

interface Props {
  label: string
  route: RoutePath
}

function NavigationItem({ label, route }: Props) {
  const onClick = useLinkClickHandler<HTMLButtonElement>(route, {
    replace: true,
  })

  return <MenuItem label={label} selected={false} onClick={onClick} />
}

export default NavigationItem
