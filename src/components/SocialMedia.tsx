/* eslint-disable @typescript-eslint/no-unused-vars */
import { plus, facebook, instagram, tiktok } from '@/utils/icons'
import { FACEBOOK_URL, INSTAGRAM_URL } from '@/utils/constants'
import { useLayoutEffect, useRef, useState } from 'react'
import { animated, config, easings, useSpring, useSpringRef, useSprings } from '@react-spring/web'
import { useHover } from '@use-gesture/react'
import Icon from '@/components/Shared/Icon'
import { FloatingPortal } from '@floating-ui/react'
import { useBoxSizing } from '@/hooks/useBoxSizing'
import { pixel } from '@/utils'

const cl =
  'button vertical-text fixed left-0 top-10 z-20 items-center justify-center rounded-bl-none rounded-tl-none py-3 pl-2 pr-1 shadow md:top-12 lg:p-4'

const MENU_WIDTH = 200

export default function SocialMedia() {
  const [closed, setClosed] = useState(true)

  const [ref, { width = MENU_WIDTH }] = useBoxSizing<HTMLDivElement>({ handleHeight: false })

  const transformReveal = 'translateX(0px)'
  const transformHidden = `translateX(-${pixel(width + 2)})`

  const animation = useSpring({
    from: {
      transform: transformHidden,
    },
    to: {
      transform: closed ? transformHidden : transformReveal,
    },
    config: {
      ...config.stiff,
      easing: easings.easeOutCubic,
      duration: 300,
    },
  })

  const onToggle = () => setClosed((prev) => !prev)

  return (
    <FloatingPortal id='portal'>
      <div className='fixed left-0 top-4'>
        <animated.div className='flex items-start justify-end' style={animation}>
          <div ref={ref} className='rounded-br border border-l-0 border-russet shadow'>
            <div className='flex flex-col items-center justify-end gap-2 p-4'>
              <span>Facebook</span>
              <span>Instagram</span>
              <span>Tik Tok</span>
            </div>
          </div>
          <div
            role='button'
            onClick={onToggle}
            className='button flex items-center justify-center rounded-l-none py-3 pl-2 pr-1 shadow'>
            <Icon icon={plus} className='text-xs' />
          </div>
        </animated.div>
      </div>
    </FloatingPortal>
  )
}
