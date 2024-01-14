import Image from 'next/image'
import React from 'react'

const Banner = () => {
  return (
    <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[500px]'>
        <Image 
            src="https://images.unsplash.com/photo-1530982011887-3cc11cc85693?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFubmVyJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D"
            alt='banner image'
            className='object-cover object-left'
            fill
        />
        <div className='absolute top-1/2 w-full text-center'>
            <p className='text-sm sm:text-lg'>Not sure where to go? perfect.</p>
            <button type='button' className='text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150'>I am flexible</button>
        </div>
    </div>
  )
}

export default Banner;