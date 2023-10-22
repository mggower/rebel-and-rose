import { DropdownMenu, DropdownMenuItem } from '@/components/DropdownMenu'
import Icon, { bars } from '@/components/Icon'
import NavigationItem from './Item'
import routes from '@/components/routes'

function NavigationMenu() {
  return (
    <nav>
      <DropdownMenu label={<Icon icon={bars} size='xl' />}>
        <NavigationItem label='Home' route={routes.home} />
        <NavigationItem label='Salon' route={routes.salon} />
        <NavigationItem label='Spa' route={routes.spa} />
        <NavigationItem label='About' route={routes.about} />
        <NavigationItem label='Team' route={routes.team} />
        <NavigationItem label='Contact' route={routes.contact} />
        <NavigationItem label='Policies' route={routes.policies} />
        <DropdownMenuItem label='Book Now' />
      </DropdownMenu>
    </nav>
  )
}

export default NavigationMenu
