import React from "react";
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";
import BcHub from "../assets/portfolio/BcHub.png";
import TBDV from "../assets/portfolio/TBDV.jpg";
import {CgDetailsMore} from "react-icons/cg";
import Locale from '../locales/index';

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: TBDV,
      title:"Tiwnblades Develop Portfolio Page",
      subtitle1:"Framework: React JS, tailwind CSS",
      subtitle2:"Position: Personal Design",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam nihil minus error ab harum non adipisci laboriosam cupiditate, quod suscipit praesentium nisi a corrupti eaque doloremque quibusdam sed et. Atque."
    },
    {
      id: 2,
      src: BcHub,
      title:"The BC Hub",
      subtitle1:"Framework:MERN stack",
      subtitle2:"Role: Personal Design",
      text: "In the name of tsar.a "
    },
    {
      id: 3, 
      src: navbar,
    },
    {
      id: 4,
      src: reactSmooth,
    },
    {
      id: 5,
      src: installNode,
    },
    {
      id: 6,
      src: reactWeather,
    },
  ];

  return (
    <div
      name={Locale.NavBar.NavPortfolio}
      className=" bg-dark-gray w-full text-white
      min-h-screen "
    >
      <div
        className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center 
       w-full h-full"
      >
        <div className=" pb-8">
          <p
            className=" text-4xl font-bold inline border-b-4
             border-gray-500"
          >
            {Locale.Portfolio.Title}
          </p>
          <p className=" py-4">{Locale.Portfolio.SubTitle}</p>
        </div>

        

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {
            portfolios.map(({ id, src, title, subtitle1, subtitle2, text }) => (
            <div key={id} className="hover:shadow-lg overflow-hidden hover:shadow-rose-700 duration-150 rounded-lg  bg-[#212121] ">
              <div className=" bg-cover relative overflow-hidden group/img ">
                <img
                    src={src}
                    alt=""
                    className=" group-hover/img:blur-sm group-hover/img:brightness-75 ease-in-out duration-300"
                  />
                
                  <div className="absolute bottom-0 left-0 right-0 top-0 h-full
                  w-full overflow-hidden bg-[#212121]
                  opacity-90 transition duration-300 ease-in-out -translate-x-full group-hover/img:-translate-x-10">
                    <div className=" p-4 ml-10 opacity-0 group-hover/img:opacity-100 duration-500 ">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima, aspernatur doloremque! Molestiae repudiandae veniam commodi aperiam delectus, eaque unde! Iste, pariatur? Consequatur ullam quidem veniam dignissimos, quam neque unde dolorem.
                    </div>
                  </div>
              </div>
                

                <div className=" group/text px-4 py-4 flex flex-col ">
                  <h2 className=" text-xl font-bold h-16">{title}</h2>
                  <h2 className=" text-sm">{subtitle1}</h2>
                  <h2 className=" text-md">{subtitle2}</h2>
                  <p className=" text-sm text-gray-300 py-4">{}</p>

                  <div className="flex flex-row items-center ">
                    <button className=" bg-transparent hover:border-pink-700 duration-300 text-white hover:text-pink-700 font-bold py-1 px-3 mr-4 rounded-full border-2">
                      {Locale.Portfolio.Demo}
                    </button>
                    <button className=" bg-transparent hover:text-pink-700 underline-offset-2 duration-300 text-white font-bold py-2 px-4 rounded-full">
                      {Locale.Portfolio.Code}
                    </button>
                </div>
                  
                  
                </div>

                
            </div>
            ))
        }
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
