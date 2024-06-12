import { useEffect, useState } from 'react'

export function useScrollPosition<T = number>(selector?: (position: number) => T) {
  const [position, setPosition] = useState(0)

  useEffect(() => {
    function scrollEvent() {
      setPosition(window.scrollY)
    }

    window.addEventListener('scroll', scrollEvent)

    return () => {
      window.removeEventListener('scroll', scrollEvent)
    }
  }, [])

  return selector ? selector(position) : position
}
