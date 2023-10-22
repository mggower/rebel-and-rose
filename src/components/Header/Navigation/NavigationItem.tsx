import { useMatch, useNavigate } from 'react-router-dom'
import { useDropdownItem } from '@/components/DropdownMenu'
import { RoutePath } from '@/utils/routes'
import styles from './Navigation.module.scss'

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
      className={styles.item}
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
