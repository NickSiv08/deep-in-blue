import React, { useEffect, useState } from 'react'
import Logo from '../../images/logo.png'
import { Link, useLocation } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import { SlClose } from 'react-icons/sl'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(false)

  const { pathname } = useLocation()

  useEffect(() => {
    setActiveMenu(false)
  }, [pathname])

  const highlightIfActive = (path) => (pathname === path ? true : false)

  return (
    <div className='mx-4 sm:mx-24 xl:mx-96'>
      <div className='flex flex-col gap-4 items-center'>
        <div className='border-b-[1px] border-black w-full flex justify-between md:justify-center items-center'>
          <Link to='/'>
            <img
              src={Logo}
              alt='Deep in Blue'
              className='w-[110px] h-[110px]'
            />
          </Link>
          <FaBars
            onClick={() => setActiveMenu(true)}
            size={30}
            className='md:hidden'
          />
        </div>
        {activeMenu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='md:hidden h-screen w-full bg-[#d6d3bb] p-4 flex flex-col items-center gap-4 absolute top-0 left-0 z-10'
          >
            <motion.div
              initial={{
                opacity: 0,
                position: 'relative',
                top: 50,
              }}
              animate={{ opacity: 1, top: 0, transition: { duration: 0.4 } }}
              className='w-[60%] text-center'
            >
              <Link to='/' className=''>
                <p className='text-lg hover:text-gray-600 tracking-widest border-b-[1px] border-black py-4'>
                  Home
                </p>
              </Link>
            </motion.div>
            <motion.div
              initial={{
                opacity: 0,
                position: 'relative',
                top: 50,
              }}
              animate={{ opacity: 1, top: 0, transition: { duration: 0.6 } }}
              className='w-[60%] text-center'
            >
              <Link to='/about' className=''>
                <p className='text-lg hover:text-gray-600 tracking-widest border-b-[1px] border-black py-4'>
                  About
                </p>
              </Link>
            </motion.div>
            <motion.div
              initial={{
                opacity: 0,
                position: 'relative',
                top: 50,
              }}
              animate={{ opacity: 1, top: 0, transition: { duration: 1 } }}
              className='w-[60%] text-center'
            >
              <Link to='/videos' className=''>
                <p className='text-lg hover:text-gray-600 tracking-widest border-b-[1px] border-black py-4'>
                  Videos
                </p>
              </Link>
            </motion.div>
            <motion.div
              initial={{
                opacity: 0,
                position: 'relative',
                top: 50,
              }}
              animate={{ opacity: 1, top: 0, transition: { duration: 1.2 } }}
              className='w-[60%] text-center'
            >
              <Link to='/contact' className=''>
                <p className='text-lg hover:text-gray-600 tracking-widest border-b-[1px] border-black py-4'>
                  Contact
                </p>
              </Link>
            </motion.div>
            <motion.div
              initial={{
                opacity: 0,
                position: 'relative',
                top: 50,
              }}
              animate={{ opacity: 1, top: 0, transition: { duration: 1.4 } }}
            >
              <SlClose
                onClick={() => setActiveMenu(false)}
                size={50}
                className='mt-16 cursor-pointer'
              />
            </motion.div>
          </motion.div>
        )}
        <div className='hidden md:flex gap-8'>
          <Link to='/'>
            <p
              className={`text-sm hover:text-gray-600 pb-2 tracking-widest ${
                highlightIfActive('/') && 'border-b-[1px] pb-2 border-black'
              }`}
            >
              Home
            </p>
          </Link>
          <Link to='/about'>
            <p
              className={`text-sm hover:text-gray-600 tracking-widest ${
                highlightIfActive('/about') &&
                'border-b-[1px] pb-2 border-black'
              }`}
            >
              About
            </p>
          </Link>
          <Link to='/videos'>
            <p
              className={`text-sm hover:text-gray-600 tracking-widest ${
                highlightIfActive('/videos') &&
                'border-b-[1px] pb-2 border-black'
              }`}
            >
              Videos
            </p>
          </Link>
          <Link to='/contact'>
            <p
              className={`text-sm hover:text-gray-600 tracking-widest ${
                highlightIfActive('/contact') &&
                'border-b-[1px] pb-2 border-black'
              }`}
            >
              Contact
            </p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
