import React from 'react'

const ListShimmer = () => {
  return (
    <div className='max-w-[820px] mx-auto'>
        <div className='flex  justify-evenly flex-wrap gap-2'>
            <div className='mb-10 w-full h-[100px] bg-gray-200'></div>

            <div className='w-full h-[3px] bg-gray-200 mb-5'></div>
            <div className='mb-10 w-full h-[70px] rounded bg-gray-200'></div>
            <div className='mb-10 w-full h-[70px] rounded bg-gray-200'></div>
            <div className='mb-10 w-full h-[70px] rounded bg-gray-200'></div>
            <div className='mb-10 w-full h-[70px] rounded bg-gray-200'></div>
            <div className='mb-10 w-full h-[70px] rounded bg-gray-200'></div>
            <div className='mb-10 w-full h-[70px] rounded bg-gray-200'></div>
        </div>
    </div>
  )
}

export default ListShimmer