import { DropdownMenu, MenuItem } from '@/components/DropdownMenu'
import { RoutePath } from '@/components/Main/routes'
import Icon, { bars } from '@/components/Icon'
import NavigationItem from './NavigationItem'

function NavigationMenu() {
  return (
    <nav>
      <DropdownMenu label={<Icon icon={bars} size='xl' />}>
        <NavigationItem label='Home' route={RoutePath.HOME} />
        <NavigationItem label='Salon' route={RoutePath.SALON} />
        <NavigationItem label='Spa' route={RoutePath.SPA} />
        <NavigationItem label='About' route={RoutePath.ABOUT} />
        <NavigationItem label='Team' route={RoutePath.TEAM} />
        <NavigationItem label='Contact' route={RoutePath.CONTACT} />
        <NavigationItem label='Policies' route={RoutePath.POLICIES} />
        <MenuItem label='Book Now' />
      </DropdownMenu>
    </nav>
  )
}

export default NavigationMenu
