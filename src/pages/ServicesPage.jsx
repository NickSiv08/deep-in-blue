import React from 'react'
import image1 from '../images/slider/image1.jpg'
import image2 from '../images/slider/image2.jpg'
import image6 from '../images/slider/image6.jpg'

const ServicesPage = () => {
  return (
    <div className='mt-16 mb-40 space-y-12'>
      <h1 className='text-4xl text-center tracking-widest'>Services</h1>
      <div className='w-full border-y-[1px] border-black'>
        <div className='flex flex-col md:flex-row'>
          <img
            src={image1}
            alt='Deep in Blue Band'
            className='w-full md:w-1/2 md:border-r-[1px] md:border-black'
          />
          <div className='w-full flex flex-col justify-center items-center gap-6 p-20 md:p-0 border-b-[1px] border-black'>
            <h1 className='text-4xl tracking-widest'>Service 1</h1>
            <p className='tracking-widest text-gray-700'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
              dolorem.
            </p>
          </div>
        </div>
        <div className='flex flex-col md:flex-row-reverse'>
          <img
            src={image2}
            alt='Deep in Blue Band'
            className='w-full md:w-1/2 md:border-l-[1px] md:border-black'
          />
          <div className='w-full flex flex-col justify-center items-center p-20 md:p-0 border-b-[1px] border-black'>
            <h1 className='text-2xl'>Service 1</h1>
            <p className=''>Caption</p>
          </div>
        </div>
        <div className='flex flex-col md:flex-row'>
          <img
            src={image6}
            alt='Deep in Blue Band'
            className='w-full md:w-1/2 md:border-r-[1px] md:border-black'
          />
          <div className='w-full flex flex-col justify-center items-center p-20 md:p-0'>
            <h1 className='text-2xl'>Service 1</h1>
            <p className=''>Caption</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicesPage
