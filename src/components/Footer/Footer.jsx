import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#d6d3bb] p-12 text-center space-y-8'>
      <p className='text-xl'>Deep in Blue</p>
      <a
        href='mailto:deepinblueband@gmail.com'
        className='font-thin mt-8 block underline hover:no-underline'
      >
        deepinblueband@gmail.com
      </a>
      <p className='mt-4 text-[13px]'>&copy; 2023 by Deep in Blue</p>
    </div>
  )
}

export default Footer
