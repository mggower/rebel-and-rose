import { forwardRef } from 'react'
import assets from '@/utils/assets'

const UniquelyBeautiful = forwardRef<HTMLImageElement>(function UniquelyBeautiful(_, ref) {
  return (
    <div className='flex flex-col items-center'>
      <div className='contain-content flex flex-col justify-center px-2 md:px-4'>
        <img ref={ref} src={assets.logos.uniquelyBeautiful} alt='uniquely beautiful' />
      </div>
    </div>
  )
})

export default UniquelyBeautiful
