import React, { useState} from 'react'
import {FaBars, FaTimes} from "react-icons/fa"
import{Link} from 'react-scroll'
// import {HiOutlineLanguage} from 'react-icons/hi2'
import Locale, { changeLang } from '../locales/index'

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id:1,
      link:Locale.NavBar.NavHome
    },
    {
      id:2,
      link:Locale.NavBar.NavAbout
    },
    {
      id:3,
      link:Locale.NavBar.NavPortfolio
    },
    {
      id:4,
      link:Locale.NavBar.NavExp
    },
    {
      id:5,
      link:Locale.NavBar.NavContact
    },
  ]

  return (
    <div className='flex justify-between items-center
    w-full h-20 fixed text-white bg-black px-4 z-[5]'>
      <div className=' flex flex-row items-end justify-center'>
        <button className='text-5xl font-signature ml-2'
         onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          Crimson1
        </button>

        <button className={` ${localStorage.getItem("currLang") === "cn" ? " text-red-500 underline" : "text-white"}
          text-sm hover:text-red-800 border-gray-500 p-2 duration-200 `}
        onClick={() => changeLang('cn')}> 
         <div className=' '>
          中文
         </div>
        </button>

        <button className={` ${localStorage.getItem("currLang") === "en" ? "text-red-500 underline" : "text-white"}
          text-sm hover:text-red-800 border-gray-500 p-2 duration-200 `}
        onClick={() => changeLang('en')}> 
         <div className=' '>
          EN
         </div>
        </button>
      </div>

      <ul className='hidden md:flex'>
        {links.map(({id, link}) => (
          <li key={id} className='px-4 cursor-pointer capitalize
          font-medium text-gray-300 hover:scale-105 duration-200 hover:text-red-500'>
            <Link to={link}  smooth duration={500} offset={-80}> {link}</Link>
        </li>
        ))}


      </ul>

      <div onClick={() => setNav(!nav)} className='cursor-pointer pr-z z-10 text-gray-500 md:hidden'>
        {nav ? <FaTimes size={30}/> : <FaBars size={30}/>}
      </div>

      {/* only if nav is true, SHOW */}
      {<ul className={`flex flex-col justify-center 
        items-center absolute top-0 right-0 w-full h-screen 
        bg-gradient-to-br from-black via-gray-800 to-red-900 text-gray-300 ${nav ? 'translate-x-0' : 'translate-x-full' } ease-in-out duration-300`}>
        {links.map(({id, link}) => (
          <li key={id} className='px-4 cursor-pointer capitalize py-6 text-4xl focus:text-red-800'>
            <Link to={link} onClick={() => setNav(!nav)} smooth duration={500} offset={-80}> {link}</Link>
  
        </li>
        ))}
      

      </ul>} 

      

    </div>
  )
}

export default NavBar
