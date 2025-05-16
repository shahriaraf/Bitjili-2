import React from "react";
import Flags from "../Flags";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="w-full bg-black">
      <Flags></Flags>
      <div className="max-w-6xl mx-auto py-12 px-6 flex flex-col md:flex-row items-center justify-between gap-8">

        {/* Left Side: Text and Buttons */}
        <div className="w-full md:w-3/5 text-center md:text-left">
          <h1 data-key="title" className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase font-bold leading-tight mb-4 text-[#ffe400]">
            Be A Partner
          </h1>

          <div className="flex flex-row sm:flex-row items-center justify-center md:justify-start gap-3 md:gap-6 mb-4">
            <p data-key="description" className="text-3xl md:text-6xl text-white uppercase">With</p>
            <div>
              <img
                className="w-[120px] md:w-[250px] h-auto pt-0.5 md:pt-2"
                src="https://betjiliaffiliates.com/wp-content/uploads/2024/02/BETJILI-Logo.png"
                alt="BETJILI"
              />
            </div>
          </div>

          <p data-key="description" className="text-lg md:text-4xl md:mb-4 text-white uppercase">
            Zero Investment
          </p>
          <p className="text-lg md:text-4xl md:mb-4 text-white uppercase">
            Lifetime EARNING
          </p>
          <p className="text-lg md:text-4xl md:mb-4 text-white uppercase">
            <span className="text-[#ffe400]">45%</span> Weekly or Fixed{" "}
            <span className="text-[#ffe400]">50%</span> Monthly
          </p>
          <p className="text-lg md:text-4xl md:mb-6 text-white uppercase">
            Commission
          </p>

          <div className="hidden md:flex md:flex-row md:gap-4 md:justify-start">
            <Link to='/register'>
              <button className="text-lg bg-[#ffe400] hover:bg-[#A89600] text-black px-6 py-2 rounded-md font-bold">
                Register
              </button>
            </Link>
            <Link to='/login'>
              <button className="text-lg bg-[#ffe400] hover:bg-[#A89600] text-black px-6 py-2 rounded-md font-bold">
                Login
              </button>
            </Link>

          </div>
        </div>

        {/* Right Side: Image */}
        <div className="w-full md:w-2/5 flex justify-center">
          <img
            src="https://i.ibb.co/HfPBG6xW/betjiliaffiliates-Phone-EN.png"
            alt="Banner"
            className="w-[80%] sm:w-[70%] md:w-full h-auto max-w-[400px] rounded shadow-lg"
          />
        </div>
        <div className="flex md:hidden flex-raw gap-3 justify-center md:justify-start">
        <Link to='/register'>
          <button className="text-sm bg-[#ffe400] hover:bg-[#A89600] text-black px-5 py-1.5 rounded-md font-bold">
            Register
          </button>
          </Link>

          <Link to='/login'>
          <button className="text-sm bg-[#ffe400] hover:bg-[#A89600] text-black px-5 py-1.5 rounded-md font-bold">
            Login
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;
