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
        <h1 className='text-4xl tracking-widest'>About Us</h1>
        <div className='space-y-12 mx-4 md:mx-32 2xl:mx-96 text-center md:text-justify p-8 rounded-xl bg-[#D6D3BB]'>
          <p className='text-lg font-light'>
            “Deep in Blue” is a band that consists of musicians who have been
            performing for years in the island of Santorini. Each of them has an
            individual solo career and has been influenced by classical studies
            and by the sounds of greek,mediterranean and balkan culture.{' '}
          </p>
          <p className='text-lg font-light'>
            Moreover they have gained a lot of experience in playing many genres
            such as pop,rock,jazz and electronic music. They decided to combine
            all these different impacts and create a band to express themselves
            and offer their audience a unique way of entertainment.
          </p>
          <p className='text-lg font-light'>
            Greek ethnic music meets classical and electric guitars,wind
            instruments and traditional greek string instruments,harmonically
            blended with electronic beats. The result is a performance that
            consistently alternates between “lounge” and “upbeat” music based on
            exceptional popular greek compositions,as well as,melodies created
            by the band.
          </p>
          <p className='text-lg font-light'>
            “Strong” and “dark” rhythms,jazzy harmonies,relaxing melodic lines
            and “fusion” solos lead to a music journey into the deep blue colors
            of Aegean..
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
