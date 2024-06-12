"use client";

import React, { useState } from "react";
import { MdOutlineMenu, MdClose } from "react-icons/md";

const links = [
  {
    name: "Who We Are",
    href: "#who-we-are",
  },
  {
    name: "Our Team",
    href: "#our-team",
  },
  {
    name: "FaQs",
    href: "#faqs",
  },
  {
    name: "Contact Us",
    href: "#contact-us",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="py-6 w-full z-10 bg-white">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex-none">
          <img
            src="/images/light-logo.png"
            alt="Inventors Logo"
            className="h-8 md:h-10"
          />
        </div>
        <div className="hidden md:flex flex-1 mx-auto justify-center space-x-10 text-black">
          {links.map((link) => (
            <a
              href={link.href}
              className="hover:text-primary-green"
              key={link.name}
            >
              {link.name}
            </a>
          ))}
        </div>
        <div className="hidden md:flex space-x-4">
          <button className="bg-light-green text-primary-green px-4 py-2 rounded w-40">
            Create Account
          </button>
          <button className="bg-primary-green text-light-green px-4 py-2 rounded w-40">
            Log In
          </button>
        </div>
        <div className="md:hidden" onClick={toggleNav}>
          <MdOutlineMenu size={22} className="text-black" />
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full h-full bg-white flex flex-col items-center justify-center text-black">
          <MdClose
            size={22}
            className="text-black absolute top-4 right-4"
            onClick={toggleNav}
          />
          {links.map((link) => (
            <a
              href={link.href}
              className="text-xl py-2"
              key={link.name}
              onClick={toggleNav}
            >
              {link.name}
            </a>
          ))}
          <button className="bg-light-green text-primary-green px-4 py-2 rounded mt-4 w-40">
            Create Account
          </button>
          <button className="bg-primary-green text-light-green px-4 py-2 rounded mt-4 w-40">
            Log In
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
