import React from 'react'
import { motion } from 'framer-motion'

const Videos = () => {
  return (
    <div className='xl:mx-96 mt-32 flex flex-col gap-12 video-container'>
      <h1 className='my-12 text-6xl font-thin tracking-widest text-center'>
        Videos
      </h1>
      <motion.iframe
        src='https://www.youtube.com/embed/v1VYq2qhAgE'
        title='Deep in Blue - Misirlou (Cover)'
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        allowFullScreen
        className='video self-center xl:self-start w-full md:w-[70%] h-[130px] sm:h-[200px] md:h-[250px] xl:h-[500px]'
        initial={{ opacity: 0, position: 'relative', right: 50 }}
        whileInView={{ opacity: 1, right: 0, transition: { duration: 0.5 } }}
      ></motion.iframe>
      <motion.iframe
        width='1280'
        height='720'
        src='https://www.youtube.com/embed/MV09C8ncicU'
        title='Deep in Blue - Αν θυμηθείς το όνειρό μου/An thimitheis to oneiro mou (Cover)'
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        allowFullScreen
        className='video self-center xl:self-end w-full md:w-[70%] h-[130px] sm:h-[200px] md:h-[250px] xl:h-[500px]'
        initial={{ opacity: 0, position: 'relative', left: 50 }}
        whileInView={{ opacity: 1, left: 0, transition: { duration: 0.5 } }}
      ></motion.iframe>
    </div>
  )
}

export default Videos
