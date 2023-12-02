import assets from '@/utils/assets'

export default function Garden() {
  return (
    <div className='flex flex-col items-center'>
      <div className='contain-content pl-16'>
        <div
          className='h-[48vh] w-[36vh] overflow-hidden rounded-sm bg-image-2 bg-cover shadow'
          style={{ backgroundPositionX: '75%' }}>
          <img
            src={assets.images.womanInGarden}
            className='h-[48vh] w-[36vh] opacity-0'
            alt='woman in garden'
          />
        </div>
      </div>
    </div>
  )
}
