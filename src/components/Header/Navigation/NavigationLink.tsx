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
      className='mt-4 rounded-sm border-none px-3 py-1 text-xs uppercase tracking-wider text-russet no-underline outline-none active:bg-blush data-[active=true]:bg-ink-200 active:data-[active=true]:underline'
      {...menu.getItemProps({ ...props, onClick: () => menu.setIsOpen(false) })}>
      {label}
    </a>
  )
}

export default NavigationLink
