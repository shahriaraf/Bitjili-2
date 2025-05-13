import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Handle scroll for blur effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle menu
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav
      className={`w-full z-50 sticky top-0 transition-all duration-300 ${
        scrolled ? 'bg-black/65 backdrop-blur-sm shadow-lg' : 'bg-black'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-4 py-3 flex items-center justify-between relative">
        {/* Left: Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white text-2xl">
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Center: Logo */}
        <a href="/" className="absolute left-1/2 transform -translate-x-1/2 md:static md:translate-x-0">
          <img
            className="w-[150px] md:w-[180px]"
            src="https://betjiliaffiliates.com/wp-content/uploads/2024/02/BETJILI-Logo.png"
            alt="BETJILI"
          />
        </a>

        {/* Right: Profile image or flag */}
        <div className="md:hidden">
          <img
            src="https://i.ibb.co/Dg9Vk9Tg/BD-1.png"
            alt="Profile"
            className="w-10 h-10 rounded-full object-cover border-2"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 text-white font-medium">
          <ul className="flex space-x-6 text-[17px]">
            <li className="hover:text-[#ffe400] cursor-pointer">Revenue Share</li>
            <li className="hover:text-[#ffe400] cursor-pointer">FAQ</li>
            <li className="hover:text-[#ffe400] cursor-pointer">About Us</li>
            <li className="hover:text-[#ffe400] cursor-pointer">Contact Us</li>
          </ul>
          <button className="border border-[#ffe400] px-6 py-2 rounded-md font-semibold">
            Register
          </button>
          <button className="bg-[#ffe400] hover:bg-[#b6b07b] text-black px-6 py-2 rounded-md font-semibold">
            Login
          </button>
          <img
            src="https://i.ibb.co/Dg9Vk9Tg/BD-1.png"
            alt="Profile"
            className="w-10 h-10 rounded-full object-cover border-2"
          />
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="absolute top-[4.5rem] left-0 w-full bg-black text-white flex flex-col items-start px-6 py-4 space-y-3 md:hidden z-50 shadow-md">
            <a href="#" className="hover:text-[#ffe400]">Revenue Share</a>
            <a href="#" className="hover:text-[#ffe400]">FAQ</a>
            <a href="#" className="hover:text-[#ffe400]">About Us</a>
            <a href="#" className="hover:text-[#ffe400]">Contact Us</a>
            <button className="w-full border border-[#ffe400] px-4 py-2 rounded-md font-semibold mt-2">
              Register
            </button>
            <button className="w-full bg-[#ffe400] hover:bg-[#b6b07b] text-black px-4 py-2 rounded-md font-semibold mt-2">
              Login
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
