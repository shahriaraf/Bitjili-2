import React from 'react';

const Monthly = () => {
    return (
        <div className="pt-12 px-4">
            <h3 className="text-3xl md:text-5xl font-bold text-black mb-6 text-center">MONTHLY COMMISSION STRUCTURE</h3>
            <div className="overflow-x-auto rounded-3xl text-sm md:text-lg w-full md:w-10/12 m-auto">
                <table className="min-w-full table-auto border-collapse">
                    <thead>
                        <tr className='bg-[#ffe400] text-sm md:text-xl border border-gray-50'>
                            <th className="px-4 py-2 text-center font-bold text-gray-700">MONTHLY ACTIVE PLAYERS</th>
                            <th className="px-4 py-2 text-center font-bold text-gray-700">MONTHLY PLAYERS NETLOSS</th>
                            <th className="px-4 py-2 text-center font-bold text-gray-700">COMMISSION %</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='bg-black text-white border border-gray-50'>
                            <td className="px-4 py-2 text-center">Above 5</td>
                            <td className="px-4 py-2 text-center">Above 1000</td>
                            <td className="px-4 py-2 text-center">50%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Monthly;
