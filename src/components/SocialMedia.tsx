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
import palette from '@/styles/palette'

const MENU_WIDTH = 200
const SOCIALS = ['facebook', 'instagram' /**, 'tiktok'  */] as const
const icons = { facebook, instagram, tiktok }
const urls = { facebook: FACEBOOK_URL, instagram: INSTAGRAM_URL }

export default function SocialMedia() {
  const [closed, setClosed] = useState(true)

  const [ref, { width = MENU_WIDTH }] = useBoxSizing<HTMLDivElement>({ handleHeight: false })

  const transformReveal = 'translateX(0px)'
  const transformHidden = `translateX(-${pixel(width + 1)})`

  const { transform, opacity } = useSpring({
    from: {
      transform: transformHidden,
      opacity: 0,
    },
    to: {
      opacity: closed ? 0 : 1,
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
        <animated.div className='flex items-start justify-end' style={{ transform }}>
          <div ref={ref} className='rounded-r-sm border border-l-0 border-earth shadow'>
            <div className='flex flex-col items-center justify-end gap-2 bg-wheat-200/50 p-2'>
              {SOCIALS.map((social) => (
                <animated.a
                  key={social}
                  target='_blank'
                  rel='noreferrer'
                  href={urls[social]}
                  style={{ opacity }}
                  data-theme='secondary'
                  className='link flex h-10 w-10 items-center justify-center bg-wheat-100 p-0 shadow'>
                  <Icon icon={icons[social]} className='text-sm md:text-base' />
                </animated.a>
              ))}
            </div>
          </div>
          <div
            role='button'
            onClick={onToggle}
            className='button mt-2 flex h-12 w-12 items-center justify-center rounded-l-none rounded-r-sm border border-l-0 border-earth shadow'>
            <Icon icon={plus} className='text-wheat-100' />
          </div>
        </animated.div>
      </div>
    </FloatingPortal>
  )
}
