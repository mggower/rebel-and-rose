import Background from './Background'
import Border from './Border'
import Haircut from './Haircut'
import Salon from './Salon'

interface Props {
  space: number
}

export default function PageTwo({ space }: Props) {
  return (
    <>
      <Background />
      <Haircut />
      <Salon />
      <Border space={space} />
    </>
  )
}
