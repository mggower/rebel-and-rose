import { DropdownMenu } from '@/components/DropdownMenu'
import { BOOKER_URL } from '@/utils/constants'
import { bars } from '@/utils/icons'
import NavigationItem from './NavigationItem'
import NavigationLink from './NavigationLink'
import Icon from '@/components/Icon'
import routes from '@/utils/routes'

function NavigationMenu() {
  return (
    <nav>
      <DropdownMenu label={<Icon icon={bars} size='xl' />} style={{ width: 36, height: 36 }}>
        {routes.list.map(({ route, label }) => (
          <NavigationItem key={label} label={label} route={route} />
        ))}

        <NavigationLink label='Book Now' href={BOOKER_URL} />
      </DropdownMenu>
    </nav>
  )
}

export default NavigationMenu
