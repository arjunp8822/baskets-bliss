"use client";

import HamburgerIcon from "./HamburgerIcon";
import { PiShoppingCartSimpleThin } from "react-icons/pi";
import { VscClose } from "react-icons/vsc";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const navItems = [
    { name: "shop", link: "/#shop" },
    { name: "about", link: "/#about" },
    { name: "contact", link: "/#contact" },
  ];
  return (
    <nav className="h-[80px] flex justify-between items-center uppercase mx-auto max-w-[1400px] px-3 md:px-8">
      <div className="flex md:hidden w-fit" onClick={() => setOpenNav(true)}>
        <HamburgerIcon />
      </div>
      <div
        className={`text-sm fixed md:static h-full w-[100%] md:w-[40%] bg-white z-50 top-0 left-0 transition-all ${
          openNav ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <button
          className="absolute top-4 left-4 md:hidden text-[22px]"
          onClick={() => setOpenNav(false)}
        >
          <VscClose />
        </button>
        <ul className="flex flex-col md:flex-row gap-6 lg:gap-8 justify-center md:justify-start items-center h-[90%] md:h-full">
          {navItems.map((i) => (
            <li
              className="border-b border-white hover:border-b hover:border-black cursor-pointer pb-0.5 pt-0.5"
              key={i.name}
              onClick={() => setOpenNav(false)}
            >
              {i.name}
            </li>
          ))}
        </ul>
        <ul className="flex md:hidden w-full h-[10%] gap-8 justify-center items-center">
          <li onClick={() => setOpenNav(false)}>
            <FaFacebookF />
          </li>
          <li onClick={() => setOpenNav(false)}>
            <FaInstagram />
          </li>
        </ul>
      </div>
      <div className="!font-medium text-[22px] md:text-[30px] text-[var(--primary)] whitespace-nowrap">
        Baskets Bliss
      </div>
      <div className="w-fit md:w-[40%] flex justify-end text-sm">
        <span className="border-b border-white hover:border-b hover:border-black cursor-pointer pb-0.5 pt-0.5 text-[22px]">
          <PiShoppingCartSimpleThin />
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
