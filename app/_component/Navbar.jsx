"use client"
import { useState } from 'react';
import Link from "next/link";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="text-white pt-4 bg-gray-900">
      <div className="flex justify-between items-center w-full px-4 py-3">
        <div>
          <Link href='/' className="text-2xl font-bold hover:text-green-500">
            <h1>W-Love<span>Travel</span></h1>
          </Link>
        </div>
        <div className="hidden md:flex md:items-center md:gap-6">
          <Link href='/' className="text-lg hover:text-green-500">Home</Link>
          <Link href='/blog' className="text-lg hover:text-green-500">Blog</Link>
          <Link href='/about' className="text-lg hover:text-green-500">About</Link>
        </div>
        <div className="hidden md:block">
          <Link href="/contact" className="bg-blue-600 px-4 py-2 rounded-lg text-lg hover:bg-blue-700 transition duration-300">Contact</Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden text-white px-4 py-3">
          <Link href='/' className="block py-2 hover:text-green-500">Home</Link>
          <Link href='/blog' className="block py-2 hover:text-green-500">blog</Link>
          <Link href='/about' className="block py-2 hover:text-green-500">About</Link>
          <Link href="/contact" className="block py-2 bg-blue-600 rounded-lg text-center hover:bg-blue-700 transition duration-300">Contact</Link>
        </div>
      )}
    </nav>
  );
}