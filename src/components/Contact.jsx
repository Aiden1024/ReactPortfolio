import React from 'react'
import {MdKeyboardDoubleArrowRight} from 'react-icons/md'

const Contact = () => {
  return (
    <div name="contact" className=' w-full h-screen bg-gradient-to-b
     from-black via-black to-red-950 p-4'>
      <div className=' h-full justify-center max-w-screen-lg text-white mx-auto p-4'>
        <div className=' py-6'>
            <p className=' text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
            <p className=' py-6'>Submit the form below to get in touch with me</p>
        </div>

        <div className='flex justify-between'>
            <form action="https://getform.io/f/5396b2d6-2cf7-497e-a46b-1ed383b6fc30" 
            method='POST'
            className=' flex flex-col w-full md:w-1/2'
            id='contactForm'>
                <input type="text" name='name' placeholder='Enter your name' required
                className=' p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
                />

                <input type="text" name='email' placeholder='Enter your email' required
                className=' p-2 my-4 bg-transparent border-2 rounded-md text-white focus:outline-none'
                />

                <textarea name="message"  cols="30" rows="10" required
                className=' p-2 bg-transparent border-2 rounded-md text-white focus:outline-none resize-none'>

                </textarea>

                <button className='group text-white bg-gradient-to-r from-red-800
                   p-2 w-full md:hidden my-10 mx-auto flex items-center rounded-md'
                  form='contactForm'>
                    let's talk
                    <span className='mx-2 group-hover:translate-x-60 duration-300 group-hover:opacity-0'>
                        <MdKeyboardDoubleArrowRight size={20}/>
                    </span>
                </button>

            </form>

            <div className='md:flex flex-col text-center h-full hidden px-10 mx-auto w-1/3'>
              <div className=' text-6xl py-12'>
                <h2 className='text-red-800'>TWINBLADES</h2>
                <h2 >DEVELOP</h2>
              </div>

              <button className='group text-white bg-gradient-to-r from-red-800
                 py-3 my-12 px-4 w-full mx-auto flex items-center rounded-md'
                  form='contactForm'>
                    let's talk
                    <span className='mx-2 group-hover:translate-x-60 duration-300 group-hover:opacity-0'>
                        <MdKeyboardDoubleArrowRight size={20}/>
                    </span>
                </button>
            </div>
        </div>


      </div>

    </div>
  )
}

export default Contact
