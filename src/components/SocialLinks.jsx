import React from "react";
import { FaGithub, } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill, BsWechat } from "react-icons/bs";
import Locale from '../locales/index';

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          {Locale.SocialLinks.WeChat} <BsWechat size={30}/>
        </>
      ),

      href: '/WeChatIDCard.jpg',
      style: 'rounded-tr-md'
    },
    {
      id: 2,
      child: (
        <>
          {Locale.SocialLinks.Github} <FaGithub size={30}/>
        </>
      ),

      href: 'https://github.com/Aiden1024',
    },
    {
      id: 3,
      child: (
        <>
          {Locale.SocialLinks.Mail} <HiOutlineMail size={30}/>
        </>
      ),

      href: 'mailto:aiden1024@163.com',
    },
    {
      id: 4,
      child: (
        <>
          {Locale.SocialLinks.Resume} <BsFillPersonLinesFill size={30}/>
        </>
      ),

      href: "/resume_cn.pdf",
      style: 'rounded-br-md',
      download: true,
      
    },
  ]

  return (
    <div className="hidden md:flex flex-col top-[35%] left-0 fixed z-10">
      <ul>
        
        {links.map(({id, child, href, style, download}) => (
          <li key={id} className={` flex justify-between items-center w-40 h-14 px-4 bg-gray-700 ml-[-100px] hover:rounded-md duration-300 hover:ml-[-10px] shadow-lg ${style}` }>
           <a href={href} className="flex justify-between items-center w-full
             text-red-50 z-10" 
            download={download}
            target="_blank"
            rel="noreferrer"
            >
              
             <>
               {child} 
             </>
           </a>
         </li>
        )) }


      </ul>
    </div>
  );
};

export default SocialLinks;