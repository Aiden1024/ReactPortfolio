import React from "react";
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";
import BcHub from "../assets/portfolio/BcHub.png";
import TBDV from "../assets/portfolio/TBDV.jpg";

import Locale from '../locales/index'

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: TBDV,
    },
    {
      id: 2,
      src: BcHub,
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

        

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 ">
        {
            portfolios.map(({ id, src }) => (
            <div key={id} className=" hover:shadow-lg hover:shadow-rose-700 duration-300 rounded-lg overflow-hidden bg-[#212121]">
                <img
                  src={src}
                  alt=""
                  className=" duration-200
                     hover:scale-105 ease-in-out  "
                />

                <div className=" px-4 py-4">
                  <h2 className=" text-2xl font-bold">Title Titl Title Title e</h2>
                  <h2 className=" text-md">Subtitle1: abc asdjifk ghsgso gsgss</h2>
                  <h2 className=" text-md">Subtitle2: fshfjk, fsdjfhs ,fsdfs </h2>
                  <p className=" text-sm text-gray-300 py-4">Paragrah ah Paragrah ah agrah ah Paragrah ah Paragrah ah Paragrah ah </p>
                  
                  <div className="flex flex-row justify-start items-center">
                    <button className=" bg-white hover:bg-gray-600 hover:text-white duration-300 text-black font-bold py-2 px-4 mr-4 rounded-full">
                      {Locale.Portfolio.Demo}
                    </button>
                    <button className=" bg-transparent hover:text-pink-700 underline-offset-2 duration-300 text-white font-bold py-2 px-4 rounded-full">
                      {Locale.Portfolio.Code}
                    </button>
                  </div>
                </div>


                {/* <div className="flex items-center justify-center">
                  <button className=" w-1/2 px-6 py-3 m-4 hover:scale-105 duration-200">
                    {Locale.Portfolio.Demo}
                  </button>
                  <button className=" w-1/2 px-6 py-3 m-4 hover:scale-105 duration-200">
                    {Locale.Portfolio.Code}
                  </button>
                </div> */}
            </div>
            ))
        }
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
