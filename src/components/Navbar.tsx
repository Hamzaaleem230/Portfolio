import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav aria-label="Main navigation" className="fixed top-0 left-0 w-full bg-background/80 backdrop-blur-md text-textMain z-50 shadow-md">
      <div className="mx-auto max-w-[1280px] flex justify-between items-center py-4 px-4 md:px-8">
        {/* Logo */}
        <div className="text-2xl font-bold text-primary cursor-pointer hover:scale-105 transition">
          <Link href="#">Syed</Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-12">
          {["home", "about", "projects", "skills", "contact"].map((item) => (
            <li key={item}>
              <Link
                href={`#${item}`}
                className="capitalize text-primary font-semibold transition duration-300 ease-in-out hover:text-red-500 hover:scale-110 hover:drop-shadow-lg"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden focus:outline-none transition"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <AiOutlineMenu size={28} className="text-primary" />
        </button>
      </div>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden bg-black/40 transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={toggleMenu}
      />

      {/* Mobile Sidebar */}
      <div
        className={`md:hidden fixed top-0 left-0 h-full w-[75%] max-w-[320px] bg-gray-900 shadow-lg transform transition-transform duration-300 z-50 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Close menu"
        >
          <AiOutlineClose size={28} />
        </button>

        <ul role="menu" className="flex flex-col gap-6 py-20 px-6 text-lg text-white">
          {["home", "about", "projects", "skills", "contact"].map((item) => (
            <li role="menuitem" key={item}>
              <Link
                href={`#${item}`}
                onClick={toggleMenu}
                className=""capitalize block transition -mt-3 sm:-mt-2 md:-mt-1 p-2 sm:p-3 md:p-3.5 lg:p-4 px-4 sm:px-5 md:px-6 w-[140px] sm:w-[160px] md:w-[180px] lg:w-[200px] rounded-sm bg-gray-900 h-full hover:text-primary md:hover:translate-x-1""
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

