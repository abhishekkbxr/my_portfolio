import React from "react";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
function Skill() {
  return (
    <section className=" body-font text-white py-16" id="skill">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
      Skills
      </h2>
      <div className=" container py-4 md:px-8 mx-auto    ">
        <div className="flex md:p-8  flex-wrap  ">
          <div className=" w-56  py-8 px-4 m-3  border border-gray-600 rounded-lg ">
            <h2 className="font-semibold text-xl">Languages :</h2>
            <div className="ml-6 mt-4 flex flex-col space-y-1 font-bold text-xl ">
              <span>
                <ArrowRightIcon /> C++/ STL
              </span>
              <span>
                <ArrowRightIcon /> Java
              </span>
              <span>
                <ArrowRightIcon /> Python
              </span>
            </div>
          </div>

          <div className=" w-56  py-8 px-4 m-3 border border-gray-600 rounded-lg ">
            <h2 className="font-semibold text-xl">Frameworks :</h2>
            <div className="ml-6 mt-4 flex flex-col space-y-1 font-bold text-xl ">
              <span>
                <ArrowRightIcon /> React
              </span>
              <span>
                <ArrowRightIcon /> Nextjs
              </span>
              <span>
                <ArrowRightIcon /> Node
              </span>
              <span>
                <ArrowRightIcon /> Tailwind Css
              </span>
            </div>
          </div>

          <div className=" w-56  py-8 px-4 m-3 border border-gray-600 rounded-lg ">
            <h2 className="font-semibold text-xl">Database :</h2>
            <div className="ml-6 mt-4 flex flex-col space-y-1 font-bold text-xl ">
              <span>
                <ArrowRightIcon /> MongoDb
              </span>
              <span>
                <ArrowRightIcon /> MySql
              </span>
              <span>
                <ArrowRightIcon /> Supabase
              </span>
            </div>
          </div>
          <div className=" w-64  py-8 px-4 m-3 border border-gray-600 rounded-lg ">
            <h2 className="font-semibold text-xl">Other :</h2>
            <div className="ml-6 mt-4 flex flex-col space-y-1 font-bold text-xl ">
              <span>
                <ArrowRightIcon /> Data Structures
              </span>
              <span>
                <ArrowRightIcon /> Algorithms
              </span>
              <span>
                <ArrowRightIcon /> OOPs
              </span>
            </div>
          </div>

          <div className=" w-56  py-8 px-4 m-3 border border-gray-600 rounded-lg ">
            <h2 className="font-semibold text-xl">Tools :</h2>
            <div className="ml-6 mt-4 flex flex-col space-y-1 font-bold text-xl ">
              <span>
                <ArrowRightIcon /> Postman
              </span>
              <span>
                <ArrowRightIcon /> Docker
              </span>
              <span>
                <ArrowRightIcon /> SoapUI
              </span>
            </div>
          </div>

          <div className=" w-[15rem]  py-8 px-4 m-3 border border-gray-600 rounded-lg ">
            <h2 className="font-semibold text-xl">Cloud :</h2>
            <div className="ml-6 mt-4 flex flex-col space-y-1 font-bold text-xl ">
              <span>
                <ArrowRightIcon /> AWS
              </span>
              <span>
                <ArrowRightIcon /> Microsoft Azure
              </span>
            </div>
          </div>

          <div className=" w-56  py-8 px-4 m-3 border border-gray-600 rounded-lg ">
            <h2 className="font-semibold text-xl">Familiar With :</h2>
            <div className="ml-6 mt-4 flex flex-col space-y-1 font-bold text-xl ">
              <span>
                <ArrowRightIcon /> Unity
              </span>
              <span>
                <ArrowRightIcon /> AR-VR
              </span>
              <span>
                <ArrowRightIcon /> 3D Models
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skill;
