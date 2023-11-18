import { useDropdownItem } from '@/components/Shared/DropdownMenu'

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
      data-palette='secondary'
      className='link mt-4 text-left text-xs'
      {...menu.getItemProps({ ...props, onClick: () => menu.setIsOpen(false) })}>
      {label}
    </a>
  )
}

export default NavigationLink
