import React from 'react';

const CommissionBreakdown = () => {
  return (
    <div className="pt-12 px-4">
      <h3 className="text-3xl md:text-5xl font-bold text-black mb-6 text-center">WEEKLY COMMISSION STRUCTURE</h3>
      <div className="overflow-x-auto rounded-3xl text-sm md:text-lg w-full md:w-10/12 m-auto">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr className='bg-[#ffe400] text-sm md:text-xl border border-gray-50'>
              <th className="px-4 py-2 text-center font-bold text-gray-700 uppercase">Weekly Active Players</th>
              <th className="px-4 py-2 text-center font-bold text-gray-700 uppercase">Weekly Players Netloss</th>
              <th className="px-4 py-2 text-center font-bold text-gray-700 uppercase">Commission %</th>
            </tr>
          </thead>
          <tbody>
            <tr className='bg-black text-white border border-gray-50'>
              <td className="px-4 py-2 text-center">5</td>
              <td className="px-4 py-2 text-center">1,000 - 300,000</td>
              <td className="px-4 py-2 text-center">40%</td>
            </tr>
            <tr className='bg-[#ffe400] border border-gray-50'>
              <td className="px-4 py-2 text-center">6 - 19</td>
              <td className="px-4 py-2 text-center">300,001 - 1,000,000</td>
              <td className="px-4 py-2 text-center">42%</td>
            </tr>
            <tr className='bg-black text-white border border-gray-50'>
              <td className="px-4 py-2 text-center">&gt; 20</td>
              <td className="px-4 py-2 text-center">&gt; 1,000,000</td>
              <td className="px-4 py-2 text-center">45%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CommissionBreakdown;
