"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import HamburgerIcon from "./HamburgerIcon";
import { VscClose } from "react-icons/vsc";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const { cart } = useCart();
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);
  const [openNav, setOpenNav] = useState(false);

  const navItems = [
    { name: "shop", link: "/" },
    { name: "about", link: "/about" },
    { name: "contact", link: "/contact" },
  ];

  return (
    <nav className="h-[80px] flex justify-between items-center uppercase mx-auto max-w-[1400px] px-3 md:px-8">
      <div className="flex md:hidden w-fit" onClick={() => setOpenNav(true)}>
        <HamburgerIcon />
      </div>
      <div
        className={`text-sm fixed md:static h-full w-[100%] md:w-[40%] z-50 top-0 left-0 transition-all ${
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
          {navItems.map((item) => (
            <li
              key={item.name}
              className="border-b border-white hover:border-b hover:border-black cursor-pointer pb-0.5 pt-0.5"
              onClick={() => setOpenNav(false)}
            >
              <Link href={item.link} className="block">
                {item.name}
              </Link>
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
        <Link href="/">Baskets Bliss</Link>
      </div>
      <div className="flex items-center gap-4 md:w-[40%] justify-end">
        <Link href="/cart" className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
          </svg>
          {itemCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-[var(--primary)] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {itemCount}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
