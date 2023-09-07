import React from 'react'
import {MdKeyboardDoubleArrowRight} from 'react-icons/md'
import Locale from '../locales/index'
import {GrReactjs} from 'react-icons/gr'
import {SiTailwindcss} from 'react-icons/si'
import BottomBar from './BottomBar'

const Contact = () => {
  return (
    <div name={Locale.NavBar.NavContact} className=' w-full h-screen bg-gradient-to-br
     from-black via-black to-red-950 p-4'>
      <div className=' h-full justify-center max-w-screen-lg text-white mx-auto p-4'>
        <div className=' '>
            <p className=' text-4xl font-bold inline border-b-4 border-rose-700'>{Locale.Contact.Title}</p>
            <p className=' py-4'>{Locale.Contact.SubTitle}</p>
        </div>

        <div className='flex justify-between'>
            <form action="https://getform.io/f/6b54f248-0548-4618-8d69-bf1059538f1e" 
            method='POST'
            className=' flex flex-col w-full md:w-1/2'
            id='contactForm'>
                <input type="text" name='name' placeholder={Locale.Contact.Form.NameField} required
                className=' p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
                />

                <input type="text" name='email' placeholder={Locale.Contact.Form.EmailField} required
                className=' p-2 my-4 bg-transparent border-2 rounded-md text-white focus:outline-none'
                />

                <textarea name="message"  cols="30" rows="10" required
                className=' p-2 bg-transparent border-2 rounded-md text-white focus:outline-none resize-none'>

                </textarea>

                <button className='group text-white bg-gradient-to-r from-red-800
                   p-2 w-full md:hidden my-10 mx-auto flex items-center rounded-md'
                  form='contactForm'>
                    {Locale.Contact.Form.Submit}
                    <span className='mx-2 group-hover:translate-x-60 duration-300 group-hover:opacity-0'>
                        <MdKeyboardDoubleArrowRight size={20}/>
                    </span>
                </button>

            </form>

            <div className='md:flex flex-col h-full hidden px-10 mx-auto w-1/3'>
              <div className=' text-4xl lg:text-5xl xl:text-6xl py-12 font-bold justify-between items-start'>
                <h2 className='text-red-500'>TWINBLADES</h2>
                <h2 >DEVELOP</h2>
              </div>

              <button className='group text-white bg-gradient-to-r from-red-800
                 py-3 my-12 px-4 w-full mx-auto flex items-center rounded-md'
                  form='contactForm'>
                    {Locale.Contact.Form.Submit}
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
