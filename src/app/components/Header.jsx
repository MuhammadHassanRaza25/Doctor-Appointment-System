"use client"

import { useState } from 'react';  
import Image from 'next/image';
import logo from '../images/logo.png';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false); 

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="header flex justify-between px-6 sm:px-24 p-3 border-b">
            
            <h1 className="logoTxt flex gap-2 items-center text-black font-bold">
                <span className="logoImg w-10"><Image src={logo} /></span>
                QuickHealth 
            </h1>

            {/* Hamburger Menu for Small and Medium Screens (Visible only below 1100px) */}
            <div className="lg:hidden flex items-center" onClick={toggleMenu}>
                {isOpen ? (
                    // Cross icon when the menu is open
                    <svg
                        className="w-6 h-6 text-gray-700 cursor-pointer"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                ) : (
                    // Hamburger icon when the menu is closed
                    <svg
                        className="w-6 h-6 text-gray-700 cursor-pointer"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                )}
            </div>

            {/* Desktop Navbar Links (Visible on Screens Larger than 1100px) */}
            <div className="hidden lg:flex justify-center items-center gap-10">
                <h1 className="link font-semibold text-gray-500 hover:text-gray-700 relative group">
                    Home
                </h1>
                <h1 className="link font-semibold text-gray-500 hover:text-gray-700 relative group">
                    Doctors
                </h1>
                <h1 className="link font-semibold text-gray-500 hover:text-gray-700 relative group">
                    Appointments
                </h1>
                <h1 className="link font-semibold text-gray-500 hover:text-gray-700 relative group">
                    About Us
                </h1>
                <h1 className="link font-semibold text-gray-500 hover:text-gray-700 relative group">
                    Contact Us
                </h1>
                <button className="bg-blue-500 text-white hover:bg-green-500 hover:text-white px-4 py-1.5 rounded-md font-bold">
                    Login
                </button>
            </div>

            {/* Mobile Dropdown Menu (Visible on Smaller Screens) */}
            {isOpen && (
                <div className="flex flex-col items-center justify-center lg:hidden absolute top-16 left-0 w-full bg-white shadow-lg">
                    <h1 className="link font-semibold text-gray-500 hover:text-gray-700 p-3 relative group">
                        Home
                    </h1>
                    <h1 className="link font-semibold text-gray-500 hover:text-gray-700 p-3 relative group">
                        Doctors
                    </h1>
                    <h1 className="link font-semibold text-gray-500 hover:text-gray-700 p-3 relative group">
                        Appointments
                    </h1>
                    <h1 className="link font-semibold text-gray-500 hover:text-gray-700 p-3 relative group">
                        About Us
                    </h1>
                    <h1 className="link font-semibold text-gray-500 hover:text-gray-700 p-3 relative group">
                        Contact Us
                    </h1>
                    <button className="bg-blue-500 text-white hover:bg-green-500 hover:text-white w-32 py-3 rounded-md font-bold mt-3 mb-3">
                        Login
                    </button>
                </div>
            )}

        </div>
    );
}
