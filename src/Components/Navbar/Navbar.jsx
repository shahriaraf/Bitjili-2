import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import LanguageSwitcher from '../LanguageSwitcher';



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
      className={`w-full z-50 sticky top-0 transition-all duration-300 ${scrolled ? 'bg-black/65 backdrop-blur-sm shadow-lg' : 'bg-black'
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
         <div className='md:hidden'>
          <LanguageSwitcher></LanguageSwitcher>
         </div>
       

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 text-white font-medium">
          <ul className="flex space-x-6 text-[17px]">
            <li className="hover:text-[#ffe400] cursor-pointer"><a href="#revenue-share">Revenue Share</a></li>
            <li className="hover:text-[#ffe400] cursor-pointer">FAQ</li>
            <li className="hover:text-[#ffe400] cursor-pointer"><a href="#about-us">About Us</a></li>
            <li className="hover:text-[#ffe400] cursor-pointer"><a href="#contact-us">Contact Us</a></li>
          </ul>
          <Link to='/register'>
            <button className="border border-[#ffe400] px-6 py-2 rounded-md font-semibold">
              Register
            </button>

          </Link>
          <Link to='/login'>
          <button className="bg-[#ffe400] hover:bg-[#b6b07b] text-black px-6 py-2 rounded-md font-semibold">
            Login
          </button>
          </Link>
          <LanguageSwitcher></LanguageSwitcher>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="absolute top-[4.5rem] left-0 w-full bg-black text-white flex flex-col items-start px-6 py-4 space-y-3 md:hidden z-50 shadow-md">
            <a href="#revenue-share" className="hover:text-[#ffe400]">Revenue Share</a>
            <a href="#" className="hover:text-[#ffe400]">FAQ</a>
            <a href="#about-us" className="hover:text-[#ffe400]">About Us</a>
            <a href="#contact-us" className="hover:text-[#ffe400]">Contact Us</a>
            <Link to='/register'>
              <button className="w-full border border-[#ffe400] px-4 py-2 rounded-md font-semibold mt-2">Register
              </button>
            </Link>
            <Link to='/login'>
              <button className="w-full bg-[#ffe400] hover:bg-[#b6b07b] text-black px-4 py-2 rounded-md font-semibold mt-2">
                Login
              </button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
