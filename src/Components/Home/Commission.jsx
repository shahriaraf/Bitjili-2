import React from "react";

const Commission = () => {
  return (
    <div
      className="relative bg-fixed bg-center bg-cover text-white"
      style={{ backgroundImage: `url('https://i.ibb.co/hR3QzfMQ/bg-5-1.jpg')` }}
    >
      <div className="bg-opacity-60 py-16 px-4 md:px-16">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          WEEKLY & MONTHLY COMMISSION STRUCTURE
        </h2>

        {/* Top Icons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 justify-items-center mb-12">
          {[
            "PLAYER WIN/LOSS",
            "20% OPERATION COST",
            "BONUS",
            "2.5% PAYMENT FEE",
            "AFFILIATE EARNINGS",
            "BONUS + PROMO = COMMISSION",
          ].map((label, i) => (
            <div key={i} className="text-center">
              <div className="w-12 h-12 bg-yellow-400 rounded-full mx-auto mb-2"></div>
              <p className="text-sm font-semibold">{label}</p>
            </div>
          ))}
        </div>

        {/* Commission Table */}
        <div className="overflow-x-auto mb-16">
          <table className="w-full text-sm text-center border border-yellow-400">
            <thead className="bg-yellow-500 text-black font-bold">
              <tr>
                <th>PLAYER</th>
                <th>PLAYER EARNINGS</th>
                <th>OPERATION COST</th>
                <th>PROMOTION COST</th>
                <th>NET PROFIT</th>
                <th>COMMISSION</th>
              </tr>
            </thead>
            <tbody className="bg-white text-black">
              {[
                ["PLAYER A", "22500", "45000", "5000", "72500", "36250"],
                ["PLAYER B", "100000", "0", "0", "100000", "74500"],
                ["PLAYER C", "0", "0", "0", "100000", "10000"],
                ["PLAYER D", "0", "87500", "5000", "22500", "11250"],
                ["TOTAL", "225000", "225000", "390000", "562500", "268000"],
              ].map((row, i) => (
                <tr key={i} className="border-b border-yellow-400">
                  {row.map((cell, j) => (
                    <td
                      key={j}
                      className={`py-3 px-2 ${i === 4 ? "font-bold bg-yellow-200" : ""}`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Weekly Commission Block */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-center mb-4">
            WEEKLY COMMISSION STRUCTURE
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-center border border-yellow-400">
              <thead className="bg-yellow-500 text-black font-bold">
                <tr>
                  <th>WEEKLY ACTIVE PLAYERS</th>
                  <th>WEEKLY PLAYERS NET LOSS</th>
                  <th>COMMISSION %</th>
                </tr>
              </thead>
              <tbody className="bg-white text-black">
                <tr className="border-b border-yellow-400">
                  <td>6 - 12</td>
                  <td>100K - 300K</td>
                  <td>40%</td>
                </tr>
                <tr className="border-b border-yellow-400">
                  <td>13 - 20</td>
                  <td>300K - 1,000,000</td>
                  <td>42%</td>
                </tr>
                <tr>
                  <td>20+</td>
                  <td>1,000,000+</td>
                  <td>45%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Monthly Commission Block */}
        <div>
          <h3 className="text-2xl font-semibold text-center mb-4">
            MONTHLY COMMISSION STRUCTURE
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-center border border-yellow-400">
              <thead className="bg-yellow-500 text-black font-bold">
                <tr>
                  <th>MONTHLY ACTIVE PLAYERS</th>
                  <th>MONTHLY PLAYERS NET LOSS</th>
                  <th>COMMISSION %</th>
                </tr>
              </thead>
              <tbody className="bg-white text-black">
                <tr>
                  <td>Above 5</td>
                  <td>Above 1500</td>
                  <td>50%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Commission;
