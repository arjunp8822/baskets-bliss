"use client";

import { useState } from "react";

const ProductCard = ({ product }) => {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <li className="w-[300px] flex flex-col gap-1 shrink-0 snap-start">
      <div
        className="h-[350px] w-full bg-gray-100 mb-2 relative group overflow-hidden"
        onMouseEnter={() => setShowDescription(true)}
        onMouseLeave={() => setShowDescription(false)}
      >
        {/* <img src={product.image} alt={product.name} /> */}
        <p
          className={`text-gray-600 bg-white p-2 absolute bottom-0 w-full transition-all duration-300 transform text-sm opacity-80 h-[80px] flex items-center ${
            showDescription ? "translate-y-0" : "translate-y-full"
          }`}
        >
          {product.description}
        </p>
      </div>
      <h3>{product.name}</h3>
      <div className="flex">
        <p>${product.price}</p>
      </div>
      <button className="w-fit mt-2 underline cursor-pointer hover:text-[var(--primary)] transition-all">
        Add to cart
      </button>
    </li>
  );
};

export default ProductCard;
