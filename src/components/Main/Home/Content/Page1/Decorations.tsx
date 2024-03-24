import HomeSplashImage from './HomeSplashImage'
import Garden from './Garden'
import Texture from './Texture'

interface Props {
  space: number
}

export default function Decorations({ space }: Props) {
  return (
    <>
      <HomeSplashImage space={space} />
      <Texture />
      <Garden />
    </>
  )
}
