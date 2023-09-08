import React from "react";
import { LuRectangleVertical } from "react-icons/lu";

import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import Locale from "../locales/index";
import { GrReactjs } from "react-icons/gr";
import { SiTailwindcss } from "react-icons/si";
import { links } from "./SocialLinks";
import BottomBar from "./BottomBar";

const Contact = () => {
  return (
    <div
      name={Locale.NavBar.NavContact}
      className=" w-full md:h-screen min-h-screen bg-gradient-to-br
     from-black via-black to-red-950 p-4"
    >
      <div className=" h-full justify-between flex flex-col max-w-screen-lg text-white mx-auto p-4">
        <div>
          <div className=" ">
            <div className="flex flex-row justify-start items-center">
            <div className=" h-full text-xs text-transparent py-3 mr-2 bg-gradient-to-tr from-red-700 to-red-500">
              11
            </div>
              <p
                className=" text-4xl font-bold inline
                "
              >
                {Locale.Contact.Title}
              </p>
            </div>
            <p className=" py-4">{Locale.Contact.SubTitle}</p>
          </div>
          <div className="flex justify-between">
            <form
              action="https://getform.io/f/6b54f248-0548-4618-8d69-bf1059538f1e"
              method="POST"
              className=" flex flex-col w-full md:w-1/2"
              id="contactForm"
            >
              <input
                type="text"
                name="name"
                placeholder={Locale.Contact.Form.NameField}
                required
                className=" p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              />
              <input
                type="text"
                name="email"
                placeholder={Locale.Contact.Form.EmailField}
                required
                className=" p-2 my-4 bg-transparent border-2 rounded-md text-white focus:outline-none"
              />
              <textarea
                name="message"
                cols="30"
                rows="10"
                required
                className=" p-2 bg-transparent border-2 rounded-md text-white focus:outline-none resize-none"
              ></textarea>
              <button
                className="group text-white bg-gradient-to-r from-red-800
                     p-2 w-full md:hidden mt-10 mb-6 mx-auto flex items-center rounded-md"
                form="contactForm"
              >
                {Locale.Contact.Form.Submit}
                <span className="mx-2 group-hover:translate-x-60 duration-300 group-hover:opacity-0">
                  <MdKeyboardDoubleArrowRight size={20} />
                </span>
              </button>
            </form>
            <div className="md:flex flex-col h-full hidden px-10 mx-auto w-1/3">
              <div className=" text-4xl lg:text-5xl xl:text-6xl py-12 font-bold justify-between items-start">
                <h2 className="text-red-500">TWINBLADES</h2>
                <h2>DEVELOP</h2>
              </div>
              <button
                className="group text-white bg-gradient-to-r from-red-800
                   py-3 my-12 px-4 w-full mx-auto flex items-center rounded-md"
                form="contactForm"
              >
                {Locale.Contact.Form.Submit}
                <span className="mx-2 group-hover:translate-x-60 duration-300 group-hover:opacity-0">
                  <MdKeyboardDoubleArrowRight size={20} />
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className=" mb-14">
          <div className="flex flex-row items-center justify-center">
            {links.map(({ id, child, href, download }) => (
              <div key={id} className={`  flex flex-row px-4 py-2`}>
                <a
                  href={href}
                  className=" items-center w-full text-slate-600 hover:text-red-50 duration-200"
                  download={download}
                  target="_blank"
                  rel="noreferrer"
                >
                  <>{child}</>
                </a>
              </div>
            ))}
          </div>
          <div className=" text-sm text-slate-500 flex flex-col sm:flex-row justify-center items-center ">
            <div className=" flex flex-row justify-center items-center ">
              Powered by
              <span className=" px-1 animate-spin-slow">
                <GrReactjs />
              </span>
              <span className=" px-1">
                <SiTailwindcss />
              </span>
              
            </div>
            <h2 className=" sm:pl-6">@2023 - TWINBLADES DEVELOP</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
