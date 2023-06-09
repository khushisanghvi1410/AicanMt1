import React from "react";
import Colors from "../../../constants/colors";
import Button from "../../common/Button";
const colors = new Colors();
function Hero() {
  return (
    <div
      className={`flex flex-wrap w-full ${colors.BgColor} sm:p-16 p-0  justify-center box-border`}
    >
      <div
        className={`flex flex-col w-full sm:w-[35%]  items-left  justify-center m-5`}
      >
        <h1 className={`${colors.textGreenColor2} font-bold text-3xl mb-3`}>
          AUTOMOTIVE SOFTWARE
        </h1>
        <h1
          className={`${colors.textSecondary} font-semibold text-sm md:text-4xl w-[60%]  mb-3   `}
        >
          INCREASE EFFICIENCY IN AUTOMOTIVE MANUFACTURING
        </h1>
        <p className="text-gray-400 font-medium text-sm w-full md:w-96">
          An industry-specific software to give automotive and transportation
          manufacturers the ability to know exactly how the plant is running, in
          real-time.
        </p>
        <div className="h-10"></div>

        <button
          className={`${colors.buttonColor} ${colors.textSecondary} rounded-lg sm:w-44  w-36 text-center px-2 py-3`}
        >
          Watch Demo
        </button>
      </div>

      <img src="assets/Industries/automobile.svg" className={`h-80  w-full sm:w-1/2 m-5 `}></img>
    </div>
  );
}

export default Hero;
