import React from 'react'
import { Link } from 'react-router-dom'
import image1 from '../../images/slider/image1.jpg'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <div className='flex flex-col md:flex-row gap-4 mt-32 justify-center items-center mx-4 md:mx-20 lg:mx-32 text-center md:text-justify'>
      <motion.div
        initial={{
          opacity: 0,
          position: 'relative',
          top: 100,
        }}
        whileInView={{ opacity: 1, top: 0, transition: { duration: 1 } }}
        className='bg-[#d6d3bb] space-y-12 py-24 px-8 md:px-20 w-[80%]'
      >
        <h1 className='text-2xl md:text-3xl tracking-widest font-light'>
          About Us
        </h1>
        <p className='text-sm md:text-lg font-extralight text-gray-700'>
          “Deep in Blue” is a band consists of musicians that have been
          performing for years in the island of Santorini. Each of us has an
          individual solo career and has been influenced by classical studies
          and by the sounds of greek,mediterranean and balkan culture.
        </p>
        <Link to='/about'>
          <button
            type='button'
            className='rounded-full py-3 px-6 border-2 border-black hover:border-[#d6d3bb] mt-12 text-xs hover:bg-black hover:text-white ease-in duration-300 tracking-widest'
          >
            Learn More
          </button>
        </Link>
      </motion.div>
    </div>
  )
}

export default About

{
  /* <div className='bg-[#d6d3bb] px-20 space-y-12 py-24 h-1/2 absolute top-0 left-3 z-10'>
        <h1 className='text-3xl tracking-widest font-light textx-gray-500'>
          About Us
        </h1>
        <p className='text-center text-lg font-extralight'>
          “Deep in Blue” is a band consists of musicians that have been
          performing for years in the island of Santorini. Each of us has an
          individual solo career and has been influenced by classical studies
          and by the sounds of greek,mediterranean and balkan culture.
        </p>
        <Link to='/about'>
          <button
            type='button'
            className='rounded-full py-3 px-6 border-2 border-black mt-12 text-xs hover:bg-amber-950 hover:text-white ease-in duration-300'
          >
            Learn More
          </button>
        </Link>
      </div> */
}
