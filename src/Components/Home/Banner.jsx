import React from "react";


const Banner = () => {
    return (
        <section className="w-full bg-black">
            <div className="max-w-6xl mx-auto py-16 flex justify-between items-center">
                {/* Left Side: Text and Buttons */}
                <div className="w-3/4">
                    <h1 className="text-7xl uppercase font-bold leading-tight mb-6 text-[#ffe400]">
                        Be A Partner
                    </h1>
                    <div className="flex items-center gap-4 mb-6">
                        <p className="text-7xl text-white uppercase">With</p><div className="pt-2"><img className='w-[300px] h-[50px]' src="https://betjiliaffiliates.com/wp-content/uploads/2024/02/BETJILI-Logo.png" alt="BETJILI"></img></div>
                    </div>

                    <p className="text-4xl mb-4 text-white uppercase w-3/4">
                        Zero Investment</p>

                    <p className="text-4xl mb-4 text-white uppercase w-3/4">Lifetime EARNING</p>

                    <p className="text-4xl mb-4 text-white uppercase"><span className="text-[#ffe400]">45%</span> Weekly or Fixed <span className="text-[#ffe400]">50%</span> Monthly</p>
                    <p className="text-4xl mb-10 text-white uppercase w-3/4">Commission</p>
                    <div className="space-x-4">
                        {/* Buttons */}
                        <button className="hidden text-lg md:inline-block bg-[#ffe400] hover:bg-[#b6b07b] text-black px-7 py-2 rounded-md font-bold">
                            Register
                        </button>
                        <button className="hidden text-lg md:inline-block bg-[#ffe400] hover:bg-[#b6b07b] text-black px-7 py-2 rounded-md font-bold"> 
                            Login
                        </button>
                    </div>
                </div>

                {/* Right Side: Image */}
                <div className="flex justify-center w-2/5">
                    <img
                        src='https://i.ibb.co/HfPBG6xW/betjiliaffiliates-Phone-EN.png'
                        alt="Banner"
                        className="max-w-full h-auto rounded shadow-lg"
                    />
                </div>
            </div>
        </section>
    );
};

export default Banner;
