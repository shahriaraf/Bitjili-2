import React from "react";

const Footer = () => {
    return (
        <footer className="bg-[#1f1f1f] text-white px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-30">
                {/* Column 1: About */}
                <div>
                    <img className='w-[150px]' src="https://betjiliaffiliates.com/wp-content/uploads/2024/02/BETJILI-Logo.png" alt="BETJILI"></img>
                </div>

                {/* Column 2: Quick Links */}
                <div>
                    <ul className="space-y-2 text-lg text-white font-semibold">
                        <li><a href="/" className="hover:text-[#B29500]">
                            Brand Ambassador</a></li>
                        <li><a href="/about" className="hover:text-[#B29500]">Revenue Share</a></li>
                        <li><a href="/services" className="hover:text-[#B29500]">Contact Us</a></li>
                    </ul>
                    <div className="pt-8">
                        <div className="flex gap-4">
                            <img className="w-6 h-6" src="https://i.ibb.co/mVZnsCLz/social-1-1.png" alt="" /><img className="w-6 h-6" src="https://i.ibb.co/fd9vKw4L/social-2-1.png" alt="" /><img className="w-6 h-6" src="https://i.ibb.co/qLMDX7YP/social-3-1.png" alt="" /><img className="w-6 h-6" src="https://i.ibb.co/6J8HF2QF/social-4-1.png" alt="" />
                        </div>
                    </div>
                </div>

                {/* Column 3: Contact */}
                <div className="font-semibold text-lg text-white " >
                    <h3 className="mb-2 hover:text-[#B29500]">Privacy Policy</h3>
                    <p className="mb-2 hover:text-[#B29500]">FAQ</p>
                    <p className="mb-2 hover:text-[#B29500]">Terms Condition</p>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="text-center font-semibold text-[#989898] text-sm mt-10 pt-6">
                © all rights reserved by Betjili
            </div>
        </footer>
    );
};

export default Footer;
