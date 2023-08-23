import React from 'react'
import HeroImage from "../assets/heroImage.png"
import {HiArrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'

const Home = () => {
  return (
    // To transfer screen template, mobile: flex-col, pc: md:flex-row
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
      <div className='max-w-screen-lg mx-auto flex md:flex-row 
      items-center flex-col justify-center h-full px-4 text-white '>
        <div className='flex flex-col justify-center h-full'>
            <h2 className='text-7xl  font-bold text-white'>
                Welcome to my world
            </h2>
            <p className='text-gray-500 py-4 max-w-md'>
            Battlefield 1 brings you into the dawn of all-out
             warfare, where no battle is ever the same. 
             Join the ranks of Battlefield 1 Revolution and 
             revolutionize your play with access to new maps, 
             new modes, and new conflicts.
            </p>

            <div>
                <Link to="portfolio" smooth duration={500} offset={-80} className='text-white w-fit px-6 py-3 my-2 flex
                    items-center rounded-md bg-gradient-to-r from-red-600
                    curor-pointer group'>
                    Portfolio
                    <span className='mx-2 group-hover:rotate-90 duration-300'  >
                        <HiArrowRight size={20}/>
                    </span>
                </Link>
            </div>
        </div>

        <div>
            <img src={HeroImage} alt="profile pic" 
            className=' mx-auto md:w-full md:flex w-2/3 hidden px-2' 
            style={{width: 400}}/>
        </div>
      </div>
    </div>
  )
}

export default Home
