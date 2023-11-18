import { DropdownMenu } from '@/components/Shared/DropdownMenu'
import { BOOKER_URL } from '@/utils/constants'
import { bars } from '@/utils/icons'
import NavigationItem from './NavigationItem'
import NavigationLink from './NavigationLink'
import Icon from '@/components/Shared/Icon'
import routes from '@/utils/routes'

function NavigationMenu() {
  return (
    <nav>
      <DropdownMenu label={<Icon icon={bars} />}>
        {routes.list.map(({ route, label }) => (
          <NavigationItem key={label} label={label} route={route} />
        ))}

        <NavigationLink label='Book Now' href={BOOKER_URL} />
      </DropdownMenu>
    </nav>
  )
}

export default NavigationMenu
