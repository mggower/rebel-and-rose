import { useMinScreen } from '@/hooks'
import HomeDesktop from './Desktop'
import HomeMobile from './Mobile'

export default function Home() {
  const desktop = useMinScreen()
  return desktop ? <HomeDesktop /> : <HomeMobile />
}
