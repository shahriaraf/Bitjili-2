import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  // Listen to scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`w-full z-50 sticky top-0 transition-all duration-300 ${
        scrolled ? 'bg-black/65 backdrop-blur-sm shadow-lg' : 'bg-black'
      }`}
    >
      <div className="w-[1280px] m-auto h-[5rem] py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/">
          <img
            className="w-[180px]"
            src="https://betjiliaffiliates.com/wp-content/uploads/2024/02/BETJILI-Logo.png"
            alt="BETJILI"
          />
        </a>

        {/* Menu + Buttons */}
        <div className="flex items-center space-x-5">
          <ul className="hidden md:flex space-x-6 text-gray-700 font-medium text-[17px]">
            <li className="text-white hover:text-[#ffe400] cursor-pointer">Revenue Share</li>
            <li className="text-white hover:text-[#ffe400] cursor-pointer">FAQ</li>
            <li className="text-white hover:text-[#ffe400] cursor-pointer">About Us</li>
            <li className="text-white hover:text-[#ffe400] cursor-pointer">Contact Us</li>
          </ul>

          {/* Buttons */}
          <button className="hidden md:inline-block text-white border border-[#ffe400] px-6 py-2 rounded-md font-semibold">
            Register
          </button>
          <button className="hidden md:inline-block bg-[#ffe400] hover:bg-[#b6b07b] text-black px-6 py-2 rounded-md font-semibold">
            Login
          </button>

          {/* Profile Image */}
          <img
            src="https://i.ibb.co/Dg9Vk9Tg/BD-1.png"
            alt="Profile"
            className="w-12 h-12 rounded-full object-cover border-2"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
