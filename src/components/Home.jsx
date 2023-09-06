import React from 'react'
import HeroImage from "../assets/heroImage.png"
import {HiArrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'
import Locale from '../locales/index'

const Home = () => {
  return (
    // To transfer screen template, mobile: flex-col, pc: md:flex-row
    <div name={Locale.NavBar.NavHome} className='h-screen w-full bg-gradient-to-br from-red-900 via-black to-dark-gray'>
      <div className='max-w-screen-lg mx-auto flex md:flex-row 
      items-center flex-col justify-center h-full px-4 text-white '>
        <div className='flex flex-col justify-center h-full'>
            <h2 className='sm:text-7xl text-4xl font-bold text-white flex flex-col'>
            <span className=' text-red-500'>TWINBLADES</span> DEVELOP
            </h2>
            <text className=' text-gray-300 py-4 max-w-md whitespace-pre-wrap'>
            {Locale.Home.SubTitle}
            </text>

            <div>
                <Link to={Locale.Portfolio.Title} smooth duration={500} offset={-80} className='text-white w-fit px-6 py-3 my-2 flex
                    items-center rounded-md bg-gradient-to-r from-red-600
                    curor-pointer group cursor-pointer'>
                    {Locale.Home.Button }
                    <span className='mx-2 group-hover:rotate-90 duration-300'  >
                        <HiArrowRight size={20}/>
                    </span>
                </Link>
            </div>
        </div>

        <div className=' relative flex justify-center items-center group'>
            <img src={HeroImage} alt="profile pic" 
            className=' mx-auto lg:flex w-full  hidden px-2 bg-transparent
             duration-300 z-10 ml-4 group-hover:scale-110' 
            style={{width: 600}}/>

            <div className="absolute bg-transparent
                  w-1/2 h-1/2 overflow-hidden border-2
                  opacity-85 transition duration-300 group-hover:rotate-45">

            </div>

            <div className="absolute bg-transparent
                  w-1/2 h-1/2 overflow-hidden border-4
                  opacity-85 transition duration-300 rotate-45 border-red-700 group-hover:bg-gray-200 group-hover:border-gray-200">

            </div>
        </div>
      </div>
    </div>
  )
}

export default Home
