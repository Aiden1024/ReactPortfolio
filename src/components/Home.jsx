import React from "react";
import HeroImage from "../assets/heroImage.png";
import { HiArrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import Locale from "../locales/index";

const Home = () => {
  return (
    // To transfer screen template, mobile: flex-col, pc: md:flex-row
    <div
      name={Locale.NavBar.NavHome}
      className="h-screen w-full bg-gradient-to-br from-red-900 via-black to-dark-gray"
    >
      <div
        className="max-w-screen-lg mx-auto flex md:flex-row 
      items-center flex-col justify-center h-full px-4 text-white "
      >
        <div className="flex flex-col justify-center h-full">
          <h2 className="sm:text-7xl text-4xl font-bold text-white flex flex-col">
            <span className=" text-red-500">TWINBLADES</span> DEVELOP
          </h2>
          <text className=" text-gray-300 py-4 max-w-md whitespace-pre-wrap">
            {Locale.Home.SubTitle}
          </text>

          <div>
            <Link
              to={Locale.Portfolio.Title}
              smooth
              duration={500}
              offset={-80}
              className="text-white w-fit px-6 py-3 my-2 flex
                    items-center rounded-md bg-gradient-to-r from-red-600
                    curor-pointer group cursor-pointer"
            >
              {Locale.Home.Button}
              <span className="mx-2 group-hover:rotate-90 duration-300">
                <HiArrowRight size={20} />
              </span>
            </Link>
          </div>
        </div>

        <div className=" relative lg:flex justify-center items-center group hidden">
          <img
            src={HeroImage}
            alt="profile pic"
            className=" mx-auto lg:flex w-full  hidden px-2 bg-transparent
             duration-500 z-10 ml-10 group-hover:scale-110"
            style={{ width: 500, height: 520 }}
          />

          <div
            className="absolute 
                  w-1/4 h-1/4 overflow-hidden border-4 border-red-700 
                  opacity-85  duration-1000 bg-transparent
                  group-hover:rotate-[450deg] group-hover:w-[48%] group-hover:h-[48%] "
          ></div>

          <div
            className="absolute
                  w-[45%] h-[45%] overflow-hidden z-[8]
                  opacity-85 bg-gradient-radial from-zinc-900 to-stone-950 rounded-full border-4 border-gray-300
                   duration-1000 transform group-hover:bg-black group-hover:rounded-none group-hover:rotate-45
                   shadow-[0_0px_50px_5px_rgb(0,0,0,0.3)] shadow-red-700 group-hover:w-[50%] group-hover:h-[50%]"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
