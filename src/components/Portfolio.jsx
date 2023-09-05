import React from "react";
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";
import BcHub from "../assets/portfolio/BcHub.png";
import TBDV from "../assets/portfolio/TBDV.jpg";
import UTMCSSA from "../assets/portfolio/UTMCSSA.jpg";
import RcCar from "../assets/portfolio/RcCar.jpg";
import Locale from '../locales/index';

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: TBDV,
      title: Locale.Portfolio.Project1.ProjectTitle,
      date: Locale.Portfolio.Project1.Date,
      framework:Locale.Portfolio.Project1.ProjectFramework,
      position: Locale.Portfolio.Project1.PositionDescription,
      description: Locale.Portfolio.Project1.ProjectDescription,
      code: "https://github.com/Aiden1024/ReactPortfolio",
      demo: "https://aiden1024.github.io/ReactPortfolio/",
  
    },
    {
      id: 2,
      src: BcHub,
      title: Locale.Portfolio.Project2.ProjectTitle,
      date: Locale.Portfolio.Project2.Date,
      framework:Locale.Portfolio.Project2.ProjectFramework,
      position: Locale.Portfolio.Project2.PositionDescription,
      description: Locale.Portfolio.Project2.ProjectDescription,
      code: "https://github.com/UTSCCSCC01/finalprojectw22-bc-hub",
      demo: "https://www.bilibili.com/video/BV14r4y197ZV/?spm_id_from=333.999.0.0&vd_source=476b4ccffaaa1a1a33eff4a4b0638a98",
  
    },
    {
      id: 3, 
      src: UTMCSSA,
      title: Locale.Portfolio.Project3.ProjectTitle,
      date: Locale.Portfolio.Project3.Date,
      framework:Locale.Portfolio.Project3.ProjectFramework,
      position: Locale.Portfolio.Project3.PositionDescription,
      description: Locale.Portfolio.Project3.ProjectDescription,
      code: "https://github.com/Aiden1024/CSSA_APP",
      demo: "",
  
    },
    {
      id: 4,
      src: RcCar,
      title: Locale.Portfolio.Project4.ProjectTitle,
      date: Locale.Portfolio.Project4.Date,
      framework:Locale.Portfolio.Project4.ProjectFramework,
      position: Locale.Portfolio.Project4.PositionDescription,
      description: Locale.Portfolio.Project4.ProjectDescription,
      code: "https://github.com/Aiden1024/AdruinoProject/tree/master/CarTruePower/RC_2",
      demo: "",
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
             border-rose-700"
          >
            {Locale.Portfolio.Title}
          </p>
          <p className=" py-4">{Locale.Portfolio.SubTitle}</p>
        </div>

        

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {
            portfolios.map(({ id, src, title, date, framework, position, description, code, demo}) => (
            <div key={id} className="hover:shadow-lg overflow-hidden hover:shadow-rose-700 duration-150 rounded-lg  bg-[#212121] ">
              <div className=" bg-cover relative overflow-hidden group/img ">
                <img
                    src={src}
                    alt=""
                    className=" group-hover/img:blur-sm group-hover/img:brightness-75 ease-in-out duration-300"
                  />
                
                  <div className="absolute bottom-0 left-0 right-0 top-0 h-full
                  w-full overflow-hidden bg-gradient-to-b from-pink-800 to-pink-700
                  opacity-85 transition duration-300 ease-in-out -translate-y-full group-hover/img:-translate-y-0 ">

                    <div className=" p-4 opacity-0 group-hover/img:opacity-100 duration-500 justify-center text-center whitespace-pre-wrap">
                      {date}
                      <br />
                      {description}
                    </div>
                  </div>
              </div>
                

                <div className=" group/text px-4 py-4 flex flex-col">
                  <h2 className=" text-xl font-bold h-12 ">{title}</h2>
                  
                  <h2 className=" text-md font-bold ">{Locale.Portfolio.Framework}</h2>
                  <h2 className=" text-sm text-gray-300">{framework}</h2>

                  <h2 className=" text-md font-bold pt-2">{Locale.Portfolio.Position}</h2>
                  <h2 className=" text-sm text-gray-300">{position}</h2>
                  

                  <div className="flex flex-row pt-8 items-center justify-start">
                    
     
                    <a href={demo} target="_blank">
                      <button className=" bg-transparent hover:border-pink-700 duration-300 text-white
                      hover:text-pink-700 px-4 mr-4 py-1 rounded-full border-2 ">
                      {Locale.Portfolio.Demo}
                      </button>
                    </a>
      

          
                    <a href={code} target="_blank">
                      <button className=" bg-transparent hover:text-pink-700 underline-offset-2 duration-300 text-white py-2 px-4 rounded-full"
                      >
                        {Locale.Portfolio.Code}
                      </button>
                    </a>
                    
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
