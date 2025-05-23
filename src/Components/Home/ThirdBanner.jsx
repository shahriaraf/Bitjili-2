import React from "react";
import { Link } from "react-router-dom";

const ThirdBanner = () => {
  return (
    <section
      className="w-full bg-no-repeat bg-center bg-cover"
      style={{
        backgroundImage: `url('https://i.ibb.co/rGGf6bC5/bg-3-1.jpg')`,
      }}
    >
      <div className="max-w-6xl mx-auto py-12 px-4 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* Left Side: Image (on bottom in small screens) */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="https://i.ibb.co/Cpkfz5Dw/Affiliate-Singnup.png"
            alt="Banner"
            className="w-full max-w-[450px] h-auto rounded shadow-lg"
          />
        </div>

        {/* Right Side: Text (on top in small screens) */}
        <div className="w-full md:w-1/3 text-center md:text-left">
          <h1 className="text-xl md:text-3xl lg:text-4xl uppercase font-semibold mb-6 text-[#ffe400] leading-tight">
            SIGN UP TODAY AT BETJILI
          </h1>

          {/* Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-4 max-w-md mx-auto md:mx-0">
            <Link to='/register' className="uppercase font-semibold text-center text-lg rounded-full py-3 text-white bg-[#F7DD00] hover:bg-[#A89600]">
              sign up
            </Link>
            <button className="uppercase font-semibold text-lg rounded-full py-3 text-white bg-[#25D366] hover:bg-[#1A9447]">
              <a href="https://wa.me/16802003651">whatsapp</a>
            </button>
            <button className="uppercase font-semibold text-lg rounded-full py-3 text-white bg-[#0078D7] hover:bg-[#005496]">
              <a href="https://t.me/+16802003651">telegram</a>
            </button>
          </div>

          {/* Social Icons */}
          <div className="pt-10 pb-5">
            <p className="text-xl md:text-2xl pb-4 md:pb-10 text-center text-white">FOLLOW US ON</p>
            <div className="flex justify-center md:justify-center gap-4 md:gap-8">
              <img
                className="w-6 h-6 md:w-11 md:h-11"
                src="https://i.ibb.co/mVZnsCLz/social-1-1.png"
                alt="Facebook"
              />
              <img
                className="w-6 h-6 md:w-11 md:h-11"
                src="https://i.ibb.co/fd9vKw4L/social-2-1.png"
                alt="Twitter"
              />
              <img
                className="w-6 h-6 md:w-11 md:h-11"
                src="https://i.ibb.co/qLMDX7YP/social-3-1.png"
                alt="Instagram"
              />
              <img
                className="w-6 h-6 md:w-11 md:h-11"
                src="https://i.ibb.co/6J8HF2QF/social-4-1.png"
                alt="LinkedIn"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThirdBanner;
