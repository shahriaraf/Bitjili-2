// WhyChooseUs.jsx
import React from 'react';

const features = [
  {
    title: 'Free Registration',
    description: 'Free Affiliate account setup and login credentials are provided after approval',
    icon: '/icons/free-registration.png',
  },
  {
    title: 'No Investment',
    description: 'No monetary investment is required to start up. Just drive your traffic and start earning',
    icon: '/icons/no-investment.png',
  },
  {
    title: 'Quick Payment',
    description: 'BetJil Affiliates shares profit weekly & monthly. Get quick revenue share payment',
    icon: '/icons/quick-payment.png',
  },
  {
    title: 'Revenue Share',
    description: 'Earn up to 45% weekly or 50% monthly revenue share from your downline',
    icon: '/icons/revenue-share.png',
  },
  {
    title: 'Affiliate Manager',
    description: 'BetJil affiliates are assigned exclusive affiliate managers for support',
    icon: '/icons/affiliate-manager.png',
  },
  {
    title: 'Transparency',
    description: 'BetJil affiliates can easily access their revenue share data earned from their downline members',
    icon: '/icons/transparency.png',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-yellow-400 py-16 text-center">
      <h2 className="text-4xl font-bold mb-10">WHY CHOOSE US ?</h2>
      <div className="flex flex-wrap justify-center gap-6 px-4">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-black text-white w-64 p-6 rounded-xl shadow-md hover:scale-105 transition-transform"
          >
            <img src={item.icon} alt={item.title} className="h-14 mx-auto mb-4" />
            <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
            <p className="text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
