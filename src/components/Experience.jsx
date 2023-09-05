import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import reactImage from '../assets/react.png'
import nextjs from '../assets/nextjs.png'
import graphql from '../assets/graphql.png'
import github from '../assets/github.png'
import tailwind from '../assets/tailwind.png'
import Locale from '../locales/index'

const Experience = () => {
    const techs = [
        {
          id: 1,
          src: html,
          title: "HTML",
          style: "hover:shadow-orange-500",
        },
        {
          id: 2,
          src: css,
          title: "CSS",
          style: "hover:shadow-blue-500",
        },
        {
          id: 3,
          src: javascript,
          title: "JavaScript",
          style: "hover:shadow-yellow-500",
        },
        {
          id: 4,
          src: reactImage,
          title: "React",
          style: "hover:shadow-blue-600",
        },
        {
          id: 5,
          src: tailwind,
          title: "Tailwind",
          style: "hover:shadow-sky-400",
        },
        {
          id: 6,
          src: nextjs,
          title: "Next JS",
          style: "hover:shadow-white",
        },
        {
          id: 7,
          src: graphql,
          title: "GraphQL",
          style: "hover:shadow-pink-400",
        },
        {
          id: 8,
          src: github,
          title: "GitHub",
          style: "hover:shadow-gray-400",
        },
      ];

  return (
    <div name={Locale.NavBar.NavExp} className=' bg-gradient-to-b from-dark-gray
     to-black w-full h-screen'>
        <div className=' max-w-screen-lg mx-auto p-4 flex flex-col
         w-full h-full text-white'>
            <div className=' pb-8'>
                <p className=' text-4xl font-bold border-b-4 
                border-rose-700 inline'>{Locale.Experience.Title}</p>
                <p className=' py-4'> {Locale.Experience.SubTitle} </p>
            </div>

            <div className=' w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 md:gap-8 gap-4
             text-center sm:px-0'>
                {
                    techs.map(({id, src, title, style}) =>(
                    <div key={id} className={`hover:shadow-md duration-300
                      py-2 rounded-md bg-[#212121] ${style}`}>
                    <img src={src} alt="" className=' w-20 mx-auto' />
                    <p>{title}</p>
                </div>
                    ))
                }

                
            </div>
        </div>


    </div>
  )
}

export default Experience