import React from "react";

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
            <button className="uppercase font-semibold text-lg rounded-full py-3 text-white bg-[#F7DD00] hover:bg-[#A89600]">
              sign up
            </button>
            <button className="uppercase font-semibold text-lg rounded-full py-3 text-white bg-[#25D366] hover:bg-[#1A9447]">
              whatsapp
            </button>
            <button className="uppercase font-semibold text-lg rounded-full py-3 text-white bg-[#0078D7] hover:bg-[#005496]">
              telegram
            </button>
          </div>

          {/* Social Icons */}
          <div className="pt-8">
            <p className="text-xl md:text-2xl pb-4 text-white">FOLLOW US ON:</p>
            <div className="flex justify-center md:justify-start gap-4">
              <img
                className="w-6 h-6"
                src="https://i.ibb.co/mVZnsCLz/social-1-1.png"
                alt="Facebook"
              />
              <img
                className="w-6 h-6"
                src="https://i.ibb.co/fd9vKw4L/social-2-1.png"
                alt="Twitter"
              />
              <img
                className="w-6 h-6"
                src="https://i.ibb.co/qLMDX7YP/social-3-1.png"
                alt="Instagram"
              />
              <img
                className="w-6 h-6"
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
