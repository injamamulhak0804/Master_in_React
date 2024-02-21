import React from 'react'
import {LOADER_ICE} from "../Utils/constants"

const Shimmer = () => {
  return (
    <div className='container mx-auto'>
      <div className='max-w-[30%] bg-gray-200 min-h-[30px] mb-[30px] ml-10'></div> 
       <div className='flex gap-16  flex-wrap justify-center mb-10'>
         <div className='min-w-36 bg-gray-200 rounded-full'></div>
         <div className='w-[150px] h-[150px] bg-gray-200 rounded-full'></div>
         <div className='w-[150px] h-[150px] bg-gray-200 rounded-full'></div>
         <div className='w-[150px] h-[150px] bg-gray-200 rounded-full'></div>
         <div className='w-[150px] h-[150px] bg-gray-200 rounded-full'></div>

       </div>
      
    </div>
  )
}

export default Shimmer