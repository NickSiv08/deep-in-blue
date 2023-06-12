import React, { useEffect, useState } from 'react'
import sliderImages from '../../constants/constants'
import { motion, AnimatePresence } from 'framer-motion'

const Slider = () => {
  const [image, setImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setImage((prevImage) => (prevImage + 1) % sliderImages.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className='mt-16 border-[2px] border-black mx-4 sm:mx-24 xl:mx-96'>
      <AnimatePresence mode='wait'>
        <motion.img
          key={image}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1 } }}
          exit={{ opacity: 0, transition: { duration: 1 } }}
          src={sliderImages[image]}
          alt='Deep in Blue Band Image'
          className='w-[100%] h-[100%]'
        />
      </AnimatePresence>
    </div>
  )
}

export default Slider
