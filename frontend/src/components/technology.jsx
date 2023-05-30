import React from "react";
import Colors from "../constants/colors";
import { AiOutlineArrowRight } from "react-icons/all";
function Technology() {
  const colors = new Colors();
  return (
    <div className="flex flex-col justify-center items-center ">

      <div className="my-[80px] flex flex-col justify-center items-center">


      <h3
        className={`${colors.headingColor}  text-xl text-center font-semibold `}
        >
        TECHNOLOGY ARCHITECTURE
      </h3>
      <h1
        className={`sm:text-lg ${colors.subheadingColor} lg:text-4xl font-bold text-center mb-2 w-[60%] md:w-[60%]`}
        >
        Everything about your factory - all on a single screen
      </h1>
        </div>
      <div
        className={`${colors.lightbluish} flex-col flex mb-9 mt-9 rounded-3xl w-[92%]  box-border p-5`}
      >
        <div className=" px-8 flex flex-col md:flex-row items-center justify-center">
          <div className="w-full md:w-1/2 md:text-center mb-6 md:mb-0">
            <img
              src="./src/assets/Group_80_1.png"
              alt="Example Image"
              className="mx-auto object-contain"
            />
          </div>
          <div className="max-w-2xl mx-auto text-center md:text-left ">
            <div className="px-10 py-4">
              <div
                className={`text-lg lg:text-4xl ${colors.subheadingColor} sm:text-lg font-bold mb-16 mt-[40px] w-[75%]`}
              >
               <p className=""> Accelerate your <br></br> Digital Transformation</p>
              </div>
              <p className=" lg:text-base sm:text-base  text-justify ">
                Embark on your digital transformation journey with AICAN's
                game-changing SaaS platform.
              </p>
              <div className="h-5"></div>
              <p className="lg:text-base sm:text-base text-justify">
                Designed by manufacturing experts, it empowers you to embrace
                the future of manufacturing. Seamlessly access the platform via
                web and mobile apps, leverage cutting-edge modular sensor
                technology, and unlock new opportunities for growth and
                efficiency.
              </p>
              <div className="h-5"></div>
              <p className="lg:text-base sm:text-base mb-[40px] text-justify">
                Let AICAN be your partner on the path to digital transformation
                and drive your business forward.
              </p>
            </div>
          </div>
        </div>

        <div className=" items-center flex flex-col ">
          <hr className={`${colors.borderBlueColor} w-full my-6`} />
          <div className="flex items-baseline justify-center ">
            <h3
              className={`text-sm my-3 sm:text-base lg:text-lg ${colors.headingColor} font-semibold text-center cursor-pointer tracking-[0.5em]`}
            >
              START YOUR TRANSFORMATION NOW
            </h3>
            <AiOutlineArrowRight
              className={`hidden xsm:block cursor-pointer ${colors.textPrimary} font-semibold`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Technology;