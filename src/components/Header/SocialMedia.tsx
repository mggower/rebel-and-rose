import { plus, facebook, instagram, tiktok } from '@/utils/icons'
import { animated, useSprings } from '@react-spring/web'
import { useLayoutEffect, useRef } from 'react'
import { useHover } from '@use-gesture/react'
import Icon from '@/components/Shared/Icon'
import { FACEBOOK_URL, INSTAGRAM_URL } from '@/utils/constants'

type Timeout = ReturnType<typeof setTimeout>

const SOCIALS = ['facebook', 'instagram' /**, 'tiktok'  */] as const
const icons = { facebook, instagram, tiktok }
const urls = { facebook: FACEBOOK_URL, instagram: INSTAGRAM_URL }

function getRectX<T extends HTMLElement>(node: T | null) {
  return node?.getBoundingClientRect().x ?? 0
}

export default function SocialMedia() {
  const ref = useRef<HTMLDivElement>(null)
  const avatarRefs = useRef<HTMLAnchorElement[]>([])

  const isVisible = useRef(false)
  const positions = useRef<number[]>([])
  const timeout = useRef<Timeout>()

  const [avatars, api] = useSprings(SOCIALS.length, () => ({ x: 0, opacity: 0 }))

  useLayoutEffect(() => {
    if (positions.current.length === 0) {
      const plusX = getRectX(ref.current)
      positions.current = avatarRefs.current.map((node) => plusX - getRectX(node))
    }

    api.start((index) => ({
      x: positions.current[index],
      opacity: 0,
      immediate: true,
    }))
  }, [api])

  const gestures = useHover(({ hovering }) => {
    if (hovering) {
      if (timeout.current) {
        clearTimeout(timeout.current)
      }

      isVisible.current = true
      api.start({ x: 0, opacity: 1 })
    } else {
      timeout.current = setTimeout(() => {
        api.start((index) => ({
          x: positions.current[index],
          opacity: 0,
          onRest: () => {
            isVisible.current = false
          },
        }))
      }, 2000)
    }
  })

  const { onPointerEnter, onPointerLeave, onPointerDown, ...rest } = gestures()

  return (
    <div className='flex items-center justify-start'>
      <animated.div
        {...rest}
        onPointerLeave={onPointerLeave}
        onPointerDown={(e) => isVisible.current && onPointerDown?.(e)}
        className='absolute flex touch-none items-center gap-4 rounded-md p-4'>
        <animated.div
          {...rest}
          ref={ref}
          role='button'
          tabIndex={0}
          onPointerDown={onPointerDown}
          onPointerEnter={onPointerEnter}
          className='relative z-10 flex h-6 w-6 touch-none items-center  justify-center rounded-full bg-offwhite bg-clip-content focus-visible:outline-offset-2'>
          <Icon icon={plus} />
        </animated.div>
        {avatars.map((animation, index) => (
          <animated.a
            target='_blank'
            rel='noreferrer'
            key={SOCIALS[index]}
            style={animation}
            href={urls[SOCIALS[index]]}
            tabIndex={isVisible.current ? 0 : -1}
            ref={(ref) => (avatarRefs.current[index] = ref!)}
            className='z-0 flex items-center justify-center rounded-full bg-offwhite p-4 hover:text-russet'>
            <Icon icon={icons[SOCIALS[index]]} className='hover:text-russet' />
          </animated.a>
        ))}
      </animated.div>
    </div>
  )
}
