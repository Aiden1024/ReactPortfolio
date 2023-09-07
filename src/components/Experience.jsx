import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import reactImage from '../assets/react.png'
import github from '../assets/github.png'
import tailwind from '../assets/tailwind.png'

import python from '../assets/python.png'
import java from '../assets/java.png'
import C from '../assets/C.png'
import flutter from '../assets/flutter.png'
import firebase from '../assets/firebase.png'
import JPnote from '../assets/JPnote.png'
import bash from '../assets/bash.png'
import Arduino from '../assets/Arduino.png'
import racket from '../assets/racket.png'
import kali from '../assets/kali.png'


import Locale from '../locales/index'

const Experience = () => {
    const techs = [
        {
          id: 1,
          src: html,
          title: "HTML",
          style: "hover:shadow-orange-700",
        },
        {
          id: 2,
          src: css,
          title: "CSS",
          style: "hover:shadow-blue-700",
        },
        {
          id: 3,
          src: javascript,
          title: "JavaScript",
          style: "hover:shadow-yellow-700",
        },
        {
          id: 4,
          src: reactImage,
          title: "React",
          style: "hover:shadow-blue-300",
        },
        {
          id: 5,
          src: tailwind,
          title: "Tailwind",
          style: "hover:shadow-sky-400",
        },  
        {
          id: 6,
          src: github,
          title: "GitHub",
          style: "hover:shadow-gray-400",
        },
        {
          id: 7,
          src: python,
          title: "Python",
          style: "hover:shadow-yellow-800",
        },
        {
          id: 8,
          src: java,
          title: "Java",
          style: "hover:shadow-gray-400",
        },
        {
          id: 9,
          src: C,
          title: "C",
          style: "hover:shadow-blue-800",
        },
        {
          id: 10,
          src: flutter,
          title: "Flutter",
          style: "hover:shadow-blue-300",
        },
        {
          id: 11,
          src: firebase,
          title: "Google Firebase",
          style: "hover:shadow-sky-300",
        },
        {
          id: 12,
          src: JPnote,
          title: "Jupyter Notebook",
          style: "hover:shadow-orange-400",
        },
        {
          id: 13,
          src: bash,
          title: "Bash",
          style: "hover:shadow-gray-400",
        },
        {
          id: 14,
          src: Arduino,
          title: "Arduino",
          style: "hover:shadow-green-400",
        },
        {
          id: 15,
          src: racket,
          title: "Racket",
          style: "hover:shadow-red-900",
        },
        {
          id: 16,
          src: kali,
          title: "Kali Linux",
          style: "hover:shadow-gray-400",
        },
      ];

  return (
    <div name={Locale.NavBar.NavExp} className=' bg-gradient-to-br
    from-dark-gray via-black to-dark-gray w-full min-h-screen'>
        <div className=' max-w-screen-lg mx-auto p-4 flex flex-col
         w-full h-full text-white'>
            <div className=' pb-8'>
                <p className=' text-4xl font-bold border-b-4 
                border-rose-700 inline'>{Locale.Experience.Title}</p>
                <p className=' py-4'> {Locale.Experience.SubTitle} </p>
            </div>

            <div className=' w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 md:gap-6 gap-4
             text-center sm:px-0'>
                {
                    techs.map(({id, src, title, style}) =>(
                    <div key={id} className={`shadow-md hover:scale-110 duration-300
                      py-2 rounded-md bg-[#212121] hover:shadow-rose-700`}>
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