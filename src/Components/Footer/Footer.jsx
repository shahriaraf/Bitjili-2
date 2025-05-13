import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#1f1f1f] text-white px-4 sm:px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        {/* Column 1: Logo */}
        <div className="flex justify-center md:justify-start">
          <img
            className="w-[150px] mx-auto md:mx-0"
            src="https://betjiliaffiliates.com/wp-content/uploads/2024/02/BETJILI-Logo.png"
            alt="BETJILI"
          />
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <ul className="space-y-3 text-lg font-semibold">
            <li>
              <a href="/" className="hover:text-[#B29500]">
                Brand Ambassador
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-[#B29500]">
                Revenue Share
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-[#B29500]">
                Contact Us
              </a>
            </li>
          </ul>
          <div className="pt-6 flex justify-center md:justify-start gap-4">
            <img
              className="w-6 h-6"
              src="https://i.ibb.co/mVZnsCLz/social-1-1.png"
              alt="Facebook"
            />
            <img
              className="w-6 h-6"
              src="https://i.ibb.co/fd9vKw4L/social-2-1.png"
              alt="Twitter"
            />
            <img
              className="w-6 h-6"
              src="https://i.ibb.co/qLMDX7YP/social-3-1.png"
              alt="Instagram"
            />
            <img
              className="w-6 h-6"
              src="https://i.ibb.co/6J8HF2QF/social-4-1.png"
              alt="LinkedIn"
            />
          </div>
        </div>

        {/* Column 3: Policies */}
        <div className="text-lg font-semibold space-y-3">
          <p className="hover:text-[#B29500] cursor-pointer">Privacy Policy</p>
          <p className="hover:text-[#B29500] cursor-pointer">FAQ</p>
          <p className="hover:text-[#B29500] cursor-pointer">Terms & Conditions</p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-[#989898] text-sm mt-10 pt-6 border-t border-gray-700">
        © All rights reserved by Betjili
      </div>
    </footer>
  );
};

export default Footer;
