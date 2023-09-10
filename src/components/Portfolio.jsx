import React from "react";
import { LuRectangleVertical } from "react-icons/lu";

import BcHub from "../assets/portfolio/BcHub.png";
import TBDV from "../assets/portfolio/TBDV.jpg";
import UTMCSSA from "../assets/portfolio/UTMCSSA.jpg";
import RcCar from "../assets/portfolio/RcCar.jpg";
import JPNB from "../assets/portfolio/JPNoteBook.jpg";
import miniK from "../assets/portfolio/miniK.jpg";
import Locale from "../locales/index";

const demoNormal =
  "hover:border-red-700 duration-300 text-white hover:text-red-700";
const demoGray = "text-gray-500 border-gray-500";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: TBDV,
      title: Locale.Portfolio.Project1.ProjectTitle,
      date: Locale.Portfolio.Project1.Date,
      framework: Locale.Portfolio.Project1.ProjectFramework,
      position: Locale.Portfolio.Project1.PositionDescription,
      description: Locale.Portfolio.Project1.ProjectDescription,
      code: "https://github.com/Aiden1024/ReactPortfolio",
      demo: "https://aiden1024.github.io/ReactPortfolio/",
      demoStyle: demoNormal,
      disabled: false,
    },
    {
      id: 2,
      src: BcHub,
      title: Locale.Portfolio.Project2.ProjectTitle,
      date: Locale.Portfolio.Project2.Date,
      framework: Locale.Portfolio.Project2.ProjectFramework,
      position: Locale.Portfolio.Project2.PositionDescription,
      description: Locale.Portfolio.Project2.ProjectDescription,
      code: "https://github.com/UTSCCSCC01/finalprojectw22-bc-hub",
      demo: "https://www.bilibili.com/video/BV14r4y197ZV/?spm_id_from=333.999.0.0&vd_source=476b4ccffaaa1a1a33eff4a4b0638a98",
      demoStyle: demoNormal,
      disabled: false,
    },
    {
      id: 3,
      src: UTMCSSA,
      title: Locale.Portfolio.Project3.ProjectTitle,
      date: Locale.Portfolio.Project3.Date,
      framework: Locale.Portfolio.Project3.ProjectFramework,
      position: Locale.Portfolio.Project3.PositionDescription,
      description: Locale.Portfolio.Project3.ProjectDescription,
      code: "https://github.com/Aiden1024/CSSA_APP",
      demo: "https://www.bilibili.com/video/BV1Bw411U7qT/?vd_source=476b4ccffaaa1a1a33eff4a4b0638a98",
      demoStyle: demoNormal,
      disabled: false,
    },
    {
      id: 4,
      src: RcCar,
      title: Locale.Portfolio.Project4.ProjectTitle,
      date: Locale.Portfolio.Project4.Date,
      framework: Locale.Portfolio.Project4.ProjectFramework,
      position: Locale.Portfolio.Project4.PositionDescription,
      description: Locale.Portfolio.Project4.ProjectDescription,
      code: "https://github.com/Aiden1024/AdruinoProject/tree/master/CarTruePower/RC_2",
      demo: "https://www.bilibili.com/video/BV1nh4y1P7Po/?share_source=copy_web&vd_source=439047dd4c361f5ff73b754592b78713",
      demoStyle: demoNormal,
      disabled: false,
    },
    {
      id: 5,
      src: JPNB,
      title: Locale.Portfolio.Project5.ProjectTitle,
      date: Locale.Portfolio.Project5.Date,
      framework: Locale.Portfolio.Project5.ProjectFramework,
      position: Locale.Portfolio.Project5.PositionDescription,
      description: Locale.Portfolio.Project5.ProjectDescription,
      code: "https://github.com/Aiden1024/TB-Data-Analytics/tree/master/Project",
      demo: "",
      demoStyle: demoGray,
      disabled: true,
    },
    {
      id: 6,
      src: miniK,
      title: Locale.Portfolio.Project6.ProjectTitle,
      date: Locale.Portfolio.Project6.Date,
      framework: Locale.Portfolio.Project6.ProjectFramework,
      position: Locale.Portfolio.Project6.PositionDescription,
      description: Locale.Portfolio.Project6.ProjectDescription,
      code: "https://github.com/Aiden1024/CSC324a4/tree/master",
      demo: "",
      demoStyle: demoGray,
      disabled: true,
    },
  ];

  return (
    <div
      name={Locale.NavBar.NavPortfolio}
      className=" bg-gradient-to-br
      from-dark-gray to-dark-gray text-white
      min-h-screen "
    >
      <div
        className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center 
       w-full h-full"
      >
        <div className=" pb-8">
          <div className="flex flex-row justify-start items-center">
            <div className=" h-full text-xs text-transparent py-3 mr-2 bg-gradient-to-tr from-red-700 to-red-500">
              11

            </div>

            <p
              className=" text-4xl font-bold inline 
              "
            >
              {Locale.Portfolio.Title}
            </p>
          </div>
          <p className=" py-4">{Locale.Portfolio.SubTitle}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
          {portfolios.map(
            ({
              id,
              src,
              title,
              date,
              framework,
              position,
              description,
              code,
              demo,
              demoStyle,
              disabled,
            }) => (
              <div
                key={id}
                className="shadow-md hover:shadow-red-700 overflow-hidden hover:bg-[#303030] duration-300 rounded-lg  bg-[#212121] "
              >
                <div className=" bg-cover relative overflow-hidden group/img ">
                  <img
                    src={src}
                    alt=""
                    className=" group-hover/img:blur-sm group-hover/img:brightness-[0.4] ease-in-out duration-300"
                  />

                  <div
                    className="absolute bottom-0 left-0 right-0 top-0 h-full
                  w-full overflow-hidden bg-[#333333] bg-opacity-10
                  opacity-85 transition duration-300 ease-in-out -translate-y-full group-hover/img:-translate-y-0 "
                  >
                    <div className=" p-4 justify-center text-center whitespace-pre-wrap">
                      {date}
                      <br />
                      {description}
                    </div>
                  </div>
                </div>

                <div className=" group/text px-4 py-4 flex flex-col">
                  <h2 className=" text-xl font-bold h-12 ">{title}</h2>

                  <h2 className=" text-md font-bold ">
                    {Locale.Portfolio.Framework}
                  </h2>
                  <h2 className=" text-sm text-gray-300">{framework}</h2>

                  <h2 className=" text-md font-bold pt-2">
                    {Locale.Portfolio.Position}
                  </h2>
                  <h2 className=" text-sm text-gray-300">{position}</h2>

                  <div className="flex flex-row pt-8 items-center justify-start">
                    <a href={demo} target="_blank">
                      <button
                        className={` bg-transparent ${demoStyle} px-4 mr-4 py-1 rounded-full border-2 `}
                        disabled={disabled}
                      >
                        {Locale.Portfolio.Demo}
                      </button>
                    </a>

                    <a href={code} target="_blank">
                      <button className=" bg-transparent hover:text-red-700 underline-offset-2 duration-300 text-white py-2 px-4 rounded-full">
                        {Locale.Portfolio.Code}
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
