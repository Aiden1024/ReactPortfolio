import React from 'react'
import Locale from '../locales/index'
import FaUniversity from 'react-icons/fa'
import {PiGraduationCapDuotone, PiSuitcaseDuotone} from 'react-icons/pi'

function About() {
  return (
    <div name={Locale.NavBar.NavAbout} className=' w-full min-h-screen bg-gradient-to-bl
     from-dark-gray via-black to-dark-gray text-white'>
      <div className=' max-w-screen-lg p-4 mx-auto flex flex-col
        w-full h-full'>

        <div className=' pb-8'>
            <p className=' text-4xl font-bold inline border-b-4
             border-gray-500'>{Locale.About.Title}</p>
             <div className=' pt-4'>
              {Locale.About.Subtitle}
             </div>
        </div>


        {/* Below are the Education section */}
        <div className='flex flex-row items-center pb-2 '>
          <div className='bg-white rounded-sm text-black text-2xl'><PiGraduationCapDuotone/></div>
          <h1 className=' px-2 text-2xl font-bold '>{Locale.About.Education.Title}</h1>
          
        </div>
        <hr />

        {/* Education Card- Undergrad*/}
        <div className=' py-2'>
          <div className='flex flex-col font-bold justify-center items-center sm:flex-row sm:justify-between'>
            <h2 >2019.09 - 2023.05 </h2>
            <a href="https://www.utoronto.ca/" target="_blank" className=' hover:underline underline-offset-2'>
              <h2 className='sm:mx-4'>{Locale.About.Education.School1}</h2>
            </a>
            <h2 >{Locale.About.Education.Edu1}</h2>
          </div>
          <p className=' whitespace-pre-wrap pt-2 sm:pt-0 sm:text-justify text-center'>
          {Locale.About.Education.Description1}
          </p>
        </div>

        {/* Education Card - High School*/}
        <div className=' py-2'>
          <div className='flex flex-col font-bold justify-center sm:flex-row sm:justify-between items-center'>
            <h2 >2016.09 - 2019.05  </h2>
            <a href="https://www.vsb.bc.ca/sir-winston-churchill" target="_blank" className=' hover:underline underline-offset-2'>
              <h2 className='sm:mx-4'>{Locale.About.Education.School2}</h2>
            </a>
            <h2 >{Locale.About.Education.Edu2}</h2>
          </div>
          <p className=' whitespace-pre-wrap pt-2 sm:pt-0 sm:text-justify text-center'>
            {Locale.About.Education.Description2}
          </p>
        </div>

        {/* Below are the WorkExp section */}
        <div className='flex flex-row items-center pb-2 pt-4'>
          <div className='bg-white rounded-sm text-black text-2xl'><PiSuitcaseDuotone/></div>
          <h1 className=' px-2 text-2xl font-bold '>{Locale.About.WorkExp.Title}</h1>
          
        </div>
        <hr />
        {/* Education Card - High School*/}
        <div className=' py-2'>
          <div className='flex flex-col font-bold justify-start sm:flex-row sm:justify-between items-center'>
            <h2 >2023.08 - Now </h2>
            <a href="https://www.szmg.com.cn/" target="_blank" className=' hover:underline underline-offset-2'>
              <h2 className='sm:mx-4'>{Locale.About.WorkExp.Job1}</h2>
            </a>
            <h2 >{Locale.About.WorkExp.Type}</h2>
          </div>
          <p className=' whitespace-pre-wrap pt-2 sm:pt-0 sm:text-justify text-center'>
            {Locale.About.WorkExp.Description1}
          </p>
        </div>


        
      </div>
    </div>
  )
}

export default About
