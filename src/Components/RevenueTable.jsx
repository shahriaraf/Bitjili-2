import React from 'react';
import 'animate.css';

const data = [
  { player: 'PLAYER A', revenue: 100000, cost: 22500, promotion: 5000, profit: 72500, commission: 36250 },
  { player: 'PLAYER B', revenue: 200000, cost: 45000, promotion: 6000, profit: 149000, commission: 74500 },
  { player: 'PLAYER C', revenue: -100000, cost: 0, promotion: 0, profit: -100000, commission: -100000 },
  { player: 'PLAYER D', revenue: 300000, cost: 67500, promotion: 8000, profit: 224500, commission: 112250 },
  { player: 'PLAYER E', revenue: 400000, cost: 90000, promotion: 20000, profit: 290000, commission: 145000 },
];

const totals = {
  revenue: 900000,
  cost: 225000,
  promotion: 39000,
  profit: 636000,
  commission: 268000,
};

const icons = [
  'ic-1-3.png',
  'ic-2-3.png',
  'ic-3-3.png',
  'ic-4-3.png',
  'ic-5-3.png',
  'ic-6-3.png',
];

const headers = [
  'Player',
  "Player's Revenue",
  'Operation Cost & Payment Fee',
  'Promotion Cost',
  'Net Profit',
  'Commission',
];

const RevenueTable = () => {
  return (
    <div className="relative overflow-x-auto bg-center bg-cover py-10 px-4 w-full">
      {/* Horizontal scroll wrapper */}
      <div className="min-w-[900px] relative z-10 grid grid-cols-6 gap-x-6 max-w-7xl mx-auto">
        {/* Vertical yellow lines behind each column */}
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="absolute top-9 bottom-0 w-1.5 bg-[#ffe400] h-[500px] left-5 transform -translate-x-1/2"
            style={{ left: `calc(${(i + 0.5) * 100 / 6}%)`, zIndex: 0 }}
          />
        ))}

        {/* Headers with icons */}
        {headers.map((title, i) => (
          <div key={i} className="flex flex-col items-center space-y-1 z-10 relative">
            <div
              className="w-24 h-24 rounded-full flex items-center justify-center shadow-lg animate__animated animate__fadeIn"
              style={{ animationDelay: `${i * 0.05}s`, animationFillMode: 'both' }}
            >
              <img
                src={`https://betjiliaffiliates.com/wp-content/uploads/2024/04/${icons[i]}`}
                alt={`icon-${i}`}
                className="h-24 w-24"
              />
            </div>
            <div className="bg-gradient-to-r from-[#ffe400] via-[#ffe400] to-[#b1a328] text-black rounded-b-2xl font-bold text-center text-sm py-1 h-12 rounded-t-md w-full">
              {title}
            </div>
          </div>
        ))}

        {/* Data rows */}
        {data.map((row, idx) => (
          <React.Fragment key={idx}>
            <div className="bg-black text-[#ffe400] text-lg text-center py-4 font-bold px-1 rounded-md shadow-md m-1 z-10 relative">{row.player}</div>
            <div className="bg-black text-[#ffe400] text-lg text-center py-4 font-bold px-2 rounded-md shadow-md m-1 z-10 relative">{row.revenue}</div>
            <div className="bg-black text-[#ffe400] text-lg text-center py-4 font-bold px-2 rounded-md shadow-md m-1 z-10 relative">{row.cost}</div>
            <div className="bg-black text-[#ffe400] text-lg text-center py-4 font-bold px-2 rounded-md shadow-md m-1 z-10 relative">{row.promotion}</div>
            <div className="bg-black text-[#ffe400] text-lg text-center py-4 font-bold px-2 rounded-md shadow-md m-1 z-10 relative">{row.profit}</div>
            <div className="bg-black text-[#ffe400] text-lg text-center py-4 font-bold px-2 rounded-md shadow-md m-1 z-10 relative">{row.commission}</div>
          </React.Fragment>
        ))}

        {/* Total row */}
        <div className="bg-[#ffe400] text-lg text-black font-bold text-center py-4 px-2 rounded-md shadow-md m-1 z-10 relative">TOTAL</div>
        <div className="bg-[#ffe400] text-lg text-black font-bold text-center py-4 px-2 rounded-md shadow-md m-1 z-10 relative">{totals.revenue}</div>
        <div className="bg-[#ffe400] text-lg text-black font-bold text-center py-4 px-2 rounded-md shadow-md m-1 z-10 relative">{totals.cost}</div>
        <div className="bg-[#ffe400] text-lg text-black font-bold text-center py-4 px-2 rounded-md shadow-md m-1 z-10 relative">{totals.promotion}</div>
        <div className="bg-[#ffe400] text-lg text-black font-bold text-center py-4 px-2 rounded-md shadow-md m-1 z-10 relative">{totals.profit}</div>
        <div className="bg-[#ffe400] text-lg text-black font-bold text-center py-4 px-2 rounded-md shadow-md m-1 z-10 relative">{totals.commission}</div>
      </div>
    </div>
  );
};

export default RevenueTable;
