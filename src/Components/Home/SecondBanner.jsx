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

          <p className="text-sm md:text-lg leading-relaxed font-light ">
            The Ultimate Online Casino Experience for South Asia

            Join thousands of players from India, Bangladesh, Vietnam, Pakistan, the Philippines, Thailand, Myanmar, and Nepal. Enjoy thrilling casino games, live sports betting, and exclusive deposit bonuses—all in one place.

            Now Available for Bangladeshi Players:
            Deposit and withdraw seamlessly using bKash, Nagad, Rocket, Upay, and local bank transfers.

            Enjoy Local Convenience with Transparent Fees:

            5% commission on every deposit

            3.5% commission on every withdrawal
            Fast, secure, and hassle-free transactions tailored for users in Bangladesh.


            Join Betjili today—play your favorite games, bet on live sports, and enjoy smooth local payments!
          </p>
        </div>
      </div>
    </section>
  );
};

export default SecondBanner;
