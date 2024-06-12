import Image from 'next/image'
import splash from '@/assets/images/splash.png'

export default function Home() {
  return (
    <main>
      <Image priority src={splash} alt='splash image' width={1000} />
    </main>
  )
}
