import React from 'react'
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { toast } from 'react-toastify'

const ContactPage = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [text, setText] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()

    const options = {
      from_name: name,
      to_name: 'Deep in Blue',
      from_email: email,
      to_email: 'deepinblueband@gmail.com',
      message: text,
    }

    emailjs
      .send(
        'service_bxhbclo',
        'template_3yoap22',
        {
          from_name: name,
          from_email: email,
          message: text,
        },
        '2x7jHrTF3Ip5YsTOn'
      )
      .then(
        (response) =>
          toast.success(
            'Thank you. We will get back to you as soon as possible.'
          ),
        (error) => toast.error(error)
      )

    console.log(name, email, text)
  }

  return (
    <div className='flex flex-col items-center mb-40'>
      <div className='mx-4 sm:mx-24 xl:mx-48 mt-32 flex flex-col lg:flex-row gap-24 lg:gap-80'>
        <div className='flex flex-col gap-6 items-center justify-center'>
          <h1 className='text-5xl font-thin tracking-widest text-center'>
            Get in Touch
          </h1>
          <p className='text-gray-400'>deepinblueband@gmail.com</p>
          <p className='text-gray-400'>Santorini, Greece</p>
        </div>
        <div className=''>
          <form onSubmit={onSubmit} className='space-y-6'>
            <div className='flex flex-col gap-1 w-full'>
              <label htmlFor='name'>Name</label>
              <input
                name='name'
                id='name'
                type='text'
                placeholder='Enter your name'
                className='py-2 px-12 border-[1px] border-gray-300 bg-[#F7F6EF] text-center w-full'
                required
                onChange={(e) => {
                  setName(e.target.value)
                }}
              />
            </div>
            <div className='flex flex-col gap-1'>
              <label htmlFor='email'>Email</label>
              <input
                name='email'
                id='email'
                type='email'
                placeholder='Enter your email'
                className='py-2 px-12 border-[1px] border-gray-300 bg-[#F7F6EF] text-center'
                required
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
              />
            </div>
            <div className='flex flex-col gap-1'>
              <label htmlFor='message'>Message</label>
              <textarea
                name='message'
                id='message'
                placeholder='Enter your message'
                className='py-2 px-12 border-[1px] border-gray-300 bg-[#F7F6EF] text-center'
                required
                onChange={(e) => {
                  setText(e.target.value)
                }}
              />
            </div>
            <button
              type='submit'
              className='bg-black text-white py-3 px-4 tracking-widest w-full rounded-lg'
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
