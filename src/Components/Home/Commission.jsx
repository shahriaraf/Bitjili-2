import React from 'react';
import RevenueTable from '../RevenueTable';
import CommissionBreakdown from '../CommissionBreakdown';
import Monthly from '../Monthly';


const Commission = () => {
  return (
    <section
      id="commission"
      className="bg-fixed bg-cover bg-center py-16"
      style={{
        backgroundImage: "url('https://betjiliaffiliates.com/wp-content/uploads/2024/04/bg-5-1.jpg')",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-5xl font-bold text-black animate__animated animate__fadeInDown">
            WEEKLY & MONTHLY COMMISSION STRUCTURE
          </h3>
        </div>

        {/* Icons with Labels */}
        <div className="flex flex-nowrap overflow-x-auto justify-start gap-6 max-w-5xl m-auto mb-10">
          {[
            { img: 'c1-1.png', text: 'PLAYER WIN/LOSS' },
            { img: 'c2-1.png', text: '20% OPERATION COST' },
            { img: 'c3-1.png', text: 'BONUS' },
            { img: 'c4-1.png', text: '2.5% PAYMENT FEE' },
            { img: 'c5-1.png', text: 'AFFILIATE EARNS' },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex bg-[#ffe400] flex-col items-center justify-center p-4 rounded-sm w-full h-32 md:h-56 md:w-48 text-center"
            >
              <img
                src={`https://betjiliaffiliates.com/wp-content/uploads/2024/04/${item.img}`}
                alt="affiliate commission"
                className="w-8 h-8 md:w-16 md:h-16 mb-2"
              />
              <p className="text-sm">{item.text}</p>
            </div>
          ))}
        </div>


        {/* Explanation */}
        <div className="inline md:flex justify-between font-semibold max-w-5xl m-auto text-center text-lg text-black mb-10">
          <p>
            <span className="font-bold text-[#9B8C0A]">Bonus</span> = Promotion + VIP Cash Bonus
          </p>
          <p>
            <span className="font-bold text-[#9B8C0A]">Payment Fee</span> = (Deposit Amount × 1.5%) + (Withdraw Amount × 1%)
          </p>
        </div>

        <RevenueTable></RevenueTable>
        <CommissionBreakdown></CommissionBreakdown>
        <Monthly></Monthly>
      </div>
    </section>
  );
};

export default Commission;
