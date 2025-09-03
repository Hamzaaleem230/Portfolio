import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-background/80 backdrop-blur-md text-textMain z-50 shadow-md">
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
          className="md:hidden lg:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <AiOutlineClose size={28} className="text-primary" />
          ) : (
            <AiOutlineMenu size={28} className="text-primary" />
          )}
        </button>
      </div>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition ${
          isMenuOpen ? "visible bg-black/40" : "invisible"
        }`}
        onClick={toggleMenu}
      />

      {/* Mobile Sidebar */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-[70%] max-w-[300px] bg-gray-900 shadow-lg transform transition-transform duration-300 z-50 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col gap-6 py-10 px-6 text-lg text-white">
           {["home", "about", "projects", "skills", "contact"].map((item) => (
              <li key={item}>
              <Link
                href={`#${item}`}
                onClick={toggleMenu}
                className="capitalize block transition hover:text-primary hover:translate-x-1"
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

