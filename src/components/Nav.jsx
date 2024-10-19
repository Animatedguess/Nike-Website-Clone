import React, { useState } from "react";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons/index.js";
import { navLinks } from "../constants/index.js";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="padding-x py-8 absolute z-20 w-full shadow-sm backdrop-blur-md bg-opacity-80 bg-transparent transition-all duration-500">
      <nav className="flex justify-between items-center max-container">
        <a
          href="/"
          className="transition-transform transform hover:scale-110 hover:rotate-1 duration-500 ease-in-out"
        >
          <img
            src={headerLogo}
            alt="Logo"
            width={130}
            height={29}
            className="drop-shadow-lg hover:drop-shadow-2xl transition-shadow duration-500"
          />
        </a>

        {/* Desktop Navigation Links */}
        <ul className="flex-2 flex justify-center items-center gap-10 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label} className="group">
              <a
                href={item.href}
                className='font-montserrat font-semibold tracking-wide leading-normal text-lg text-slate-gray group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-coral-red via-orange-400 to-yellow-400 transition-colors duration-300 ease-in-out relative 
                after:content-[""] after:absolute after:bottom-[-5px] after:left-1/2 after:h-[2px] after:w-0 after:bg-gradient-to-r after:transition-all after:duration-500 
                after:ease-in-out after:transform after:translate-x-[-50%] group-hover:after:w-3/4'
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Menu */}
        <div
          className="hidden max-lg:flex cursor-pointer transition-transform transform hover:scale-125 duration-500 ease-in-out relative group"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-slate-gray transition-transform transform group-hover:rotate-180 duration-500"
            >
              <path
                d="M6 18L18 6M6 6L18 18"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              className="text-slate-gray transition-transform transform hover:rotate-90 duration-500"
            >
              <path d="M 3 5 A 1.0001 1.0001 0 1 0 3 7 L 21 7 A 1.0001 1.0001 0 1 0 21 5 L 3 5 z M 3 11 A 1.0001 1.0001 0 1 0 3 13 L 21 13 A 1.0001 1.0001 0 1 0 21 11 L 3 11 z M 3 17 A 1.0001 1.0001 0 1 0 3 19 L 21 19 A 1.0001 1.0001 0 1 0 21 17 L 3 17 z"></path>
            </svg>
          )}
          <span className="absolute inset-0 rounded-full border-2 border-primary group-hover:animate-ping"></span>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <ul
          className="flex flex-col items-center gap-6 py-8 bg-white bg-opacity-90 max-lg:block lg:hidden absolute top-full left-0 right-0 shadow-xl rounded-b-lg z-30 
          transition-all transform origin-top scale-y-100"
        >
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat font-semibold leading-normal text-lg text-slate-gray hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-coral-red via-orange-400 to-yellow-400 hover:scale-110 transition-transform duration-300 ease-in-out"
                onClick={toggleMenu}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

export default Nav;
