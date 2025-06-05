import React from 'react'
import image1 from '../images/about/image1.jpg'
import image2 from '../images/about/image2.jpg'
import { motion } from 'framer-motion'

const AboutPage = () => {
  return (
    <div className='mt-16 mb-40'>
      <motion.img
        className='hidden md:block w-full'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        src={image1}
        alt='Deep in Blue Band'
      />
      <img
        className='md:hidden md:block w-full'
        src={image2}
        alt='Deep in Blue Band'
      />
      <div className='mt-16 flex flex-col items-center gap-12'>
        <h1 className='text-4xl md:text-6xl font-thin tracking-widest'>
          About Us
        </h1>
        <div className='space-y-12 mx-4 md:mx-32 2xl:mx-96 text-center md:text-justify p-8 bg-[#D6D3BB] p-4'>
          <p className='text-lg font-light'>
            Live Guitar Music for Unforgettable Moments Versatile.. Soulful..
            Unique..{' '}
          </p>
          <p className='text-lg font-light'>
            Are you looking to elevate your event with live music that blends
            elegance, energy, and emotion?
          </p>
          <p className='text-lg font-light'>
            I'm a professional guitarist specializing in live performances for
            weddings, private events, and special occasions. My repertoire
            features unique arrangements of rock, pop, and funk classics, as
            well as melodic journeys through Greek, Balkan, and Mediterranean
            traditions. I also offer swing-inspired covers and reimagined songs
            with electronic textures—crafted to create an atmosphere that’s both
            stylish and deeply memorable.
          </p>
          <p className='text-lg font-light'>
            Whether you're walking down the aisle, celebrating a milestone, or
            hosting an intimate gathering, I provide a personalized musical
            experience tailored to your vision. You can even request a specific
            song to accompany your most cherished moment—I’ll make it truly
            yours.
          </p>
          <p className='text-lg font-light'>
            Let’s create the perfect soundtrack for your special day.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
