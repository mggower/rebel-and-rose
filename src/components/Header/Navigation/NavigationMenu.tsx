import { DropdownMenu } from '@/components/DropdownMenu'
import { BOOKER_URL } from '@/utils/constants'
import { bars } from '@/utils/icons'
import NavigationItem from './NavigationItem'
import ExternalLink from './ExternalLink'
import Icon from '@/components/Icon'
import routes from '@/utils/routes'

function NavigationMenu() {
  return (
    <nav>
      <DropdownMenu label={<Icon icon={bars} size='xl' />} style={{ width: 36, height: 36 }}>
        <NavigationItem label='Home' route={routes.home} />
        <NavigationItem label='Salon' route={routes.salon} />
        <NavigationItem label='Spa' route={routes.spa} />
        <NavigationItem label='About' route={routes.about} />
        <NavigationItem label='Team' route={routes.team} />
        <NavigationItem label='Contact' route={routes.contact} />
        <NavigationItem label='Policies' route={routes.policies} />

        <ExternalLink label='Book Now' href={BOOKER_URL} />
      </DropdownMenu>
    </nav>
  )
}

export default NavigationMenu
