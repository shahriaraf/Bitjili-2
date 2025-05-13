import React from "react";



const products = [
  { title: "SLOTS", url: 'https://i.ibb.co/7tgWLd6b/SlotsEng.png' },
  { title: "CASINO", url: 'https://i.ibb.co/MxyxzPnh/p2-1.png'  },
  { title: "SPORTS", url: 'https://i.ibb.co/s9fdPvBn/p3-1.png'  },
  { title: "FISHING", url: 'https://i.ibb.co/CpmyLpYF/p4-1.png'  },
  { title: "ARCADE", url: 'https://i.ibb.co/gL1RNtxQ/p5-1.png'  },
  { title: "CRASH", url: 'https://i.ibb.co/0y4q6pwK/p6-1.png' },
  { title: "TABLE", url: 'https://i.ibb.co/4wpRktgb/Table-Eng-1.png' },
  { title: "LOTTERY", url: 'https://i.ibb.co/VYmSjg47/p8-1.png'  },
];

const ProductsSection = () => {
  return (
    <section className="bg-black py-14 text-white">
      <div className="max-w-[1050px] mx-auto px-4 text-center">
        <h2 className="text-3xl font-extrabold mb-10">PRODUCTS</h2>

        <div className="grid grid-cols-2 md:grid-cols-4">
          {products.map((product, index) => (
            <div
              key={index}
              className="p-4 flex flex-col items-center"
            >
              <img
                src={product.url}
                alt={product.title}
                className="w-full h-full object-contain mb-3"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
