import SplashImage from './SplashImage'
import Garden from './Garden'
import OurStory from './OurStory'
import Texture from './Texture'

interface Props {
  space: number
}

export default function PageOne({ space }: Props) {
  return (
    <>
      <SplashImage space={space} />
      <Texture />
      <Garden />
      <OurStory />
    </>
  )
}
