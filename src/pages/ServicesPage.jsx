import React from 'react'
import image1 from '../images/slider/image6.jpg'
import image2 from '../images/slider/image12.jpg'
import image3 from '../images/slider/image3.jpg'

const ServicesPage = () => {
  return (
    <div className='mt-32 flex flex-col items-center mx-4 md:mx-80'>
      <h1 className='text-4xl tracking-widest font-thin'>Services</h1>
      <div className='flex flex-col md:flex-row justify-center items-center gap-32 mt-32'>
        <div className='flex flex-col gap-32 items-center w-1/3'>
          <div className='flex flex-col gap-6 items-center'>
            <img src={image1} className='rounded-full w-[100px] h-[100px]' />
            <p className='text-2xl tracking-widest'>Who we are</p>
          </div>
          <p className='font-thin tracking-widest text-center text-gray-500'>
            Our long experience in live performing and our passion for music
            guarantees a high quality result for any type of event that we
            organize.. Giving all of our energy and love to any performance we
            express our creativity and offer our audience a unique way of
            entertainment full of vibes and emotions..
          </p>
        </div>
        <div className='flex flex-col gap-32 items-center w-1/3'>
          <div className='flex flex-col gap-6 items-center'>
            <img src={image2} className='rounded-full w-[100px] h-[100px]' />
            <p className='text-2xl tracking-widest'>Who we are</p>
          </div>
          <p className='font-thin tracking-widest text-center text-gray-500'>
            Building imaginative rhythms on great melodies made by famous
            composers and creating new sounds and musical forms, result in
            atmospheric groovy delicate unforgettable shows.
          </p>
        </div>
        <div className='flex flex-col gap-32 items-center w-1/3'>
          <div className='flex flex-col gap-6 items-center'>
            <img src={image3} className='rounded-full w-[100px] h-[100px]' />
            <p className='text-2xl tracking-widest'>Who we are</p>
          </div>
          <p className='font-thin tracking-widest text-center text-gray-500'>
            Our service catalogue includes: *Wedding parties *Welcome dinners
            *Private parties *Upbeat shows for clubs *Concerts
          </p>
        </div>
      </div>
    </div>
  )
}

export default ServicesPage
