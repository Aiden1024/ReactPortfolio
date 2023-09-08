import React from 'react'
import {GrReactjs} from 'react-icons/gr'
import {SiTailwindcss} from 'react-icons/si'

const BottomBar = () => {
  return (
    <div className=' bg-black w-full text-white h-full'>
      <div className=' flex flex-row justify-center items-center '>
        Powered by
        <span className=' px-1 animate-spin-slow'>
            < GrReactjs/> 
        </span>
        <span className=' px-1'>
            < SiTailwindcss/>
        </span>
      </div>
    </div>
  )
}

export default BottomBar
