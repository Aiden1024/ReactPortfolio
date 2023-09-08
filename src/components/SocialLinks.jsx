import React from "react";
import { FaGithub, } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill, BsWechat } from "react-icons/bs";
import Locale from '../locales/index';

export const links = [
  {
    id: 1,
    text:Locale.SocialLinks.WeChat,
    child: (
      <>
        <BsWechat size={30}/>
      </>
    ),

    href: '/weChat_encrypt_tested.jpg',
    style: 'rounded-tr-md',
    download: true,
  },
  {
    id: 2,
    text:Locale.SocialLinks.Github,
    child: (
      <>
         <FaGithub size={30}/>
      </>
    ),

    href: 'https://github.com/Aiden1024',
  },
  {
    id: 3,
    text:Locale.SocialLinks.Mail,
    child: (
      <>
        <HiOutlineMail size={30}/>
      </>
    ),

    href: 'mailto:aiden1024@163.com',
  },
  {
    id: 4,
    text:Locale.SocialLinks.Resume,
    child: (
      <>
        <BsFillPersonLinesFill size={30}/>
      </>
    ),

    href: "/resume_cn.pdf",
    style: 'rounded-br-md',
    download: true,
    
  },
]
const SocialLinks = () => {


  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed z-10">
      <ul>
        
        {links.map(({id, child, href, style, download, text}) => (
          <li key={id} className={` flex justify-between items-center w-40 h-14 px-4 bg-gray-700 ml-[-100px] hover:rounded-md duration-300 hover:ml-[-10px] shadow-lg ${style}` }>
           <a href={href} className="flex justify-between items-center w-full
             text-red-50 z-10" 
            download={download}
            target="_blank"
            rel="noreferrer"
            >
              
             <>
               {text}{child} 
             </>
           </a>
         </li>
        )) }


      </ul>
    </div>
  );
};

export default SocialLinks;