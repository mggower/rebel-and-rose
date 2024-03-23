import Background from './Background'
import Border from './Border'
import Haircut from './Haircut'

interface Props {
  space: number
}

export default function Decorations({ space }: Props) {
  return (
    <>
      <Background />
      <Haircut />
      <Border space={space} />
    </>
  )
}
