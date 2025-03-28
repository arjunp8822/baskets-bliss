"use client";

import { useState, useEffect, useRef } from "react";
import products from "@/data/products.json";
import ProductCard from "./ProductCard";
import { PiCaretLeftLight, PiCaretRightLight } from "react-icons/pi";

const Range = () => {
  const containerRef = useRef(null); // Reference to the scrollable container
  const [isOverflowing, setIsOverflowing] = useState(false); // State to track overflow
  const [isAtStart, setIsAtStart] = useState(true); // State to track if we're at the start
  const [isAtEnd, setIsAtEnd] = useState(false); // State to track if we're at the end

  useEffect(() => {
    // Check if the container is overflowing
    const checkOverflow = () => {
      if (containerRef.current) {
        setIsOverflowing(
          containerRef.current.scrollWidth > containerRef.current.clientWidth
        );
        setIsAtStart(containerRef.current.scrollLeft === 0);
        setIsAtEnd(
          containerRef.current.scrollLeft ===
            containerRef.current.scrollWidth - containerRef.current.clientWidth
        );
      }
    };

    checkOverflow(); // Check initially
    window.addEventListener("resize", checkOverflow); // Recheck when window resizes
    containerRef.current?.addEventListener("scroll", checkOverflow); // Recheck on scroll

    return () => {
      window.removeEventListener("resize", checkOverflow); // Clean up the event listener
      containerRef.current?.removeEventListener("scroll", checkOverflow); // Clean up scroll listener
    };
  }, []);

  const scrollToRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: 300, // Adjust the scroll amount as needed
        behavior: "smooth",
      });
    }
  };

  const scrollToLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -300, // Adjust the scroll amount to scroll left
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="container flex flex-col gap-4" id="products">
      <div className="flex flex-col gap-1 mb-4">
        <h2 className="heading">Our Products</h2>
        <h3 className="sub-heading">
          Premium gift baskets crafted for every occasion, packed with
          thoughtful selections.
        </h3>
      </div>
      <div className="relative group">
        <ul
          ref={containerRef}
          className="flex gap-4 justify-start items-center overflow-x-auto w-full hide-scrollbar snap-x snap-mandatory"
        >
          {products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </ul>

        {isOverflowing && (
          <>
            {/* Left Scroll Button */}
            {!isAtStart && (
              <button
                onClick={scrollToLeft}
                className="absolute bg-white left-2 top-1/2 -translate-y-full p-2 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
              >
                <PiCaretLeftLight />
              </button>
            )}

            {/* Right Scroll Button */}
            {!isAtEnd && (
              <button
                onClick={scrollToRight}
                className="absolute bg-white right-2 top-1/2 -translate-y-full p-2 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
              >
                <PiCaretRightLight />
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Range;
