import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const flags = [
  { src: "https://i.ibb.co/5gfB42dP/BD-fg-1.png", name: "Bangladesh" },
  { src: "https://i.ibb.co/Q3mNbFjz/NP-fg-1.png", name: "Nepal" },
  { src: "https://i.ibb.co/1f7W3XWD/PK-fg-1.png", name: "Pakistan" },
  { src: "https://i.ibb.co/4ZpJZjMf/PH-fg-1.png", name: "Philippines" },
  { src: "https://i.ibb.co/M53HXgtZ/Betjili-MMK-Flag.png", name: "Myanmar" },
  { src: "https://i.ibb.co/zyFytHf/Thai.png", name: "Thailand" },
  { src: "https://i.ibb.co/KxggKD9N/IN-fg-1.png", name: "India" },
];

const Flags = () => {
  const tickerRef = useRef();

  useEffect(() => {
    const text = tickerRef.current.querySelector('.ticker-text');
    gsap.to(text, {
      x: () => `-${text.scrollWidth / 2}px`, // half for looping
      repeat: -1,
      duration: 40,
      ease: 'linear'
    });
  }, []);

  return (
    <div className="bg-black text-white overflow-hidden w-11/12 m-auto py-6">
      <div ref={tickerRef} className="w-full">
        <div className="ticker-text flex gap-4 w-max">
          {[...flags, ...flags].map((flag, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={flag.src}
                alt={flag.name}
                className="h-auto max-h-28 md:max-h-60 w-auto object-contain"
              />
              <span className="text-lg font-semibold mt-2 text-center">{flag.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Flags;
