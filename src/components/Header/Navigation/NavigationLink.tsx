import { useDropdownItem } from '@/components/Shared/DropdownMenu'
import styles from './Navigation.module.scss'

interface Props {
  label: string
  href: string
}

function NavigationLink({ label, href }: Props) {
  const { ref, menu, props } = useDropdownItem<HTMLAnchorElement>({ label })
  return (
    <a
      ref={ref}
      href={href}
      target='_blank'
      rel='noreferrer'
      className={`${styles.item} ${styles.external}`}
      {...menu.getItemProps({ ...props, onClick: () => menu.setIsOpen(false) })}>
      {label}
    </a>
  )
}

export default NavigationLink
