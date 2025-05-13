import React from "react";


const ThirdBanner = () => {
    return (
        <section className="w-full bg-no-repeat bg-center bg-cover" 
        style={{ backgroundImage: `url('https://i.ibb.co/rGGf6bC5/bg-3-1.jpg')` }}>
            <div className="max-w-6xl mx-auto py-16 flex justify-between items-center gap-20">


                 {/* Right Side: Image */}
                 <div className="flex justify-center w-3/4">
                    <img
                        src='https://i.ibb.co/Cpkfz5Dw/Affiliate-Singnup.png'
                        alt="Banner"
                        className="max-w-full h-auto rounded shadow-lg"
                    />
                </div>
                {/* Left Side: Text and Buttons */}
                <div className="w-2/3 text-center pb-5">
                    <h1 className="text-3xl uppercase font-md leading-tight mb-8 text-[#ffe400]">
                    SIGN UP TODAY AT BETJILI
                    </h1>
                    <div className="grid grid-cols-2 gap-5 w-10/12 justify-center pl-25">
                       <button className="uppercase font-semibold text-lg  rounded-full py-3 text-white bg-[#F7DD00] hover:bg-[#A89600]">sign up</button>
                       
                       <button className="uppercase font-semibold text-lg rounded-full py-3 text-white bg-[#25D366] hover:bg-[#1A9447]">wattsapp</button>
                       
                       <button className="uppercase font-semibold text-lg rounded-full py-3  text-white bg-[#0078D7] hover:bg-[#005496]">telegram</button>
                    </div>
                    <div className="pt-8">
                        <p className="text-2xl pb-10 text-white">FOLLOW US ON:</p>
                        <div className="flex gap-6 pl-33">
                            <img src="https://i.ibb.co/mVZnsCLz/social-1-1.png" alt="" /><img src="https://i.ibb.co/fd9vKw4L/social-2-1.png" alt="" /><img src="https://i.ibb.co/qLMDX7YP/social-3-1.png" alt="" /><img src="https://i.ibb.co/6J8HF2QF/social-4-1.png" alt="" />
                        </div>
                    </div>
                </div>

               
            </div>
        </section>
    );
};

export default ThirdBanner;
