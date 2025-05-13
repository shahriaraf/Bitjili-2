import React from "react";

const SecondBanner = () => {
  return (
    <section className="bg-[#ffe400] w-full py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-4 md:px-10 gap-10">
        {/* Left Image */}
        <div className="w-full md:w-1/2">
          <img src='https://i.ibb.co/xqnjWwbY/betjiliaffiliate-Homepage.png' alt="Betjili Promo" className="w-full h-auto" />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 text-black">
        <div className="flex justify-center">
             <img className="w-[215px] h-[38px]" src="https://i.ibb.co/ccwBFBm7/logo-2-2.png" alt="" />
        </div><br />
         
          <p className="text-lg leading-relaxed font-light ">
            “Experience the best online casino tailored for players from India,
            Bangladesh, Vietnam, Pakistan, the Philippines, Thailand, Myanmar
            and Nepal at Betjili. Dive into a world of thrilling games, sports
            betting, and exclusive deposit bonuses. At Betjili, we believe that
            online gambling should be a fun and exciting form of entertainment.
            <br /><br />
            Earn weekly & monthly recurring revenue with Betjili’s affiliate
            program! Easy-to-use interface, dedicated Pro-affiliate managers,
            and mobile access make promoting Betjili a breeze. Get payouts up
            to 45% weekly & fixed 50% monthly based on your downline’s
            performance. Join Betjili’s affiliate program today!”
          </p>
        </div>
      </div>
    </section>
  );
};

export default SecondBanner;
