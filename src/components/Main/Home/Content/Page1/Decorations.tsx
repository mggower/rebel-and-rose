import SplashImage from './SplashImage'
import Garden from './Garden'
import Texture from './Texture'

interface Props {
  space: number
}

export default function Decorations({ space }: Props) {
  return (
    <>
      <SplashImage space={space} />
      <Texture />
      <Garden />
    </>
  )
}
