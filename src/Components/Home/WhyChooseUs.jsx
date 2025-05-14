import React from 'react';

const features = [
  {
    title: 'Free Registration',
    description: 'Free Affiliate account setup and login credentials are provided after approval',
    url: 'https://i.ibb.co/bM46ZQhD/ic-1-2.png',
  },
  {
    title: 'No Investment',
    description: 'No monetary investment is required to start up. Just drive your traffic and start earning',
    url: 'https://i.ibb.co/LXGJbsQY/ic-2-2.png',
  },
  {
    title: 'Quick Payment',
    description: 'BetJil Affiliates shares profit weekly & monthly. Get quick revenue share payment',
    url: 'https://i.ibb.co/RpnbPw0d/ic-3-2.png',
  },
  {
    title: 'Revenue Share',
    description: 'Earn up to 45% weekly or 50% monthly revenue share from your downline',
    url: 'https://i.ibb.co/p6Kry9zj/ic-4-2.png',
  },
  {
    title: 'Affiliate Manager',
    description: 'BetJil affiliates are assigned exclusive affiliate managers for support',
    url: 'https://i.ibb.co/FLPdgMWg/ic-5-2.png',
  },
  {
    title: 'Transparency',
    description: 'BetJil affiliates can easily access their revenue share data earned from their downline members',
    url: 'https://i.ibb.co/d0WQyDZb/ic-6-2.png',
  },
];

const WhyChooseUs = () => {
  return (
    <section
      className="py-16 text-center bg-cover bg-center"
      style={{
        backgroundImage: `url('https://i.ibb.co/3mNXj4Tx/bg-4-1.jpg')`,
      }}
    >
      <h2 className="text-[25px] sm:text-[40px] md:text-[52px] font-bold mb-15 text-black">
        WHY CHOOSE US?
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 md:px-32">
        {features.map((item, index) => (
          <div
            key={index}
            className="border-2 bg-black border-white rounded-3xl w-[170px] h-[250px] text-white relative mx-auto"
          >
            <img
              className="absolute -top-16 left-5 w-[130px]"
              src={item.url}
              alt={item.title}
            />
            <div className="bg-black font-semibold text-center rounded-3xl w-[166px] h-[74px] top-11 absolute">
              <p className="text-[#ffe400] text-[21px] w-10/12 m-auto">
                {item.title}
              </p>
            </div>
            <div className="bg-[#ffe400] text-center rounded-b-3xl h-[140px] mt-[90px]">
              <p className="text-black text-[12px] font-semibold pt-11 w-10/12 m-auto">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
