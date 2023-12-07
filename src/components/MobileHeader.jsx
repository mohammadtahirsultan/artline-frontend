import React, { useState } from 'react';
import Link from 'next/link';

const MobileHeader = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <div className="bg-gray-800 p-4">
            <div className="flex justify-between items-center">
                <div>
                    <span className="text-2xl font-bold">Artline <span className='text-3xl text-red-500'>.</span></span>
                </div>
                <div className="cursor-pointer" onClick={toggleMenu}>
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16m-7 6h7"
                        ></path>
                    </svg>
                </div>
            </div>
            {isMenuOpen && (
                <div className="mt-4 hover:text-red-500">
                    <Link href="/" className="block py-2" onClick={closeMenu}>
                        Home
                    </Link>
                    <Link href="/about" className="block py-2" onClick={closeMenu}>
                        About
                    </Link>
                    <Link href="/services" className="block py-2" onClick={closeMenu}>
                        Services
                    </Link>
                    <Link href="/portfolio" className="block py-2" onClick={closeMenu}>
                        Portfolio
                    </Link>
                    <Link href="/team" className="block py-2" onClick={closeMenu}>
                        Team
                    </Link>
                    <Link href="/contact" className="block py-2" onClick={closeMenu}>
                        Contact
                    </Link>
                    <Link href="/faq" className="block py-2" onClick={closeMenu}>
                        FAQs
                    </Link>
                    <Link href="/pricing" className="block py-2" onClick={closeMenu}>
                        Pricing
                    </Link>
                </div>
            )}
        </div>
    );
};

export default MobileHeader;
