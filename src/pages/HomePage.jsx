import React from 'react'
import { motion } from 'framer-motion'
import Slider from '../components/Slider/Slider'
import Social from '../components/Social/Social'
import About from '../components/About/About'
import Videos from '../components/Videos/Videos'
import Contact from '../components/Contact/Contact'
import { TypeAnimation } from 'react-type-animation'

const HomePage = () => {
  return (
    <div className='my-40 flex flex-col items-center'>
      <motion.div
        className='mx-4 sm:mx-24 xl:mx-96'
        initial={{ opacity: 0, position: 'relative', top: 50 }}
        animate={{ opacity: 1, top: 0 }}
      >
        <h1 className='title text-4xl md:text-6xl font-extrabold text-[#0E1F58]]'>
          DEEP IN BLUE
        </h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 2 } }}
      >
        <p className='caption text-gray-500 text-[17px] md:text-[19px] text-center tracking-widest mt-8'>
          <TypeAnimation
            sequence={['A journey into the deep blue colors of Aegean']}
            speed={30}
          />
        </p>
      </motion.div>
      <Slider />
      <Social />
      <About />
      <Videos />
      <Contact />
    </div>
  )
}

export default HomePage
