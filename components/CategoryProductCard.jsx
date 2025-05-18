"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";

const CategoryProductCard = ({ product }) => {
  const [showDescription, setShowDescription] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const handleQuantityChange = (value) => {
    const newQuantity = Math.max(1, Math.min(10, quantity + value));
    setQuantity(newQuantity);
  };

  const handleAddToCart = () => {
    addToCart({
      ...product,
      quantity,
    });
    setQuantity(1); // Reset quantity after adding to cart
  };

  return (
    <div className="flex flex-col h-full bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
      <div
        className="relative aspect-square overflow-hidden rounded-t-lg"
        onMouseEnter={() => setShowDescription(true)}
        onMouseLeave={() => setShowDescription(false)}
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        <div
          className={`absolute inset-0 bg-black bg-opacity-70 transition-opacity duration-300 ${
            showDescription ? "opacity-70" : "opacity-0"
          }`}
        >
          <p className="absolute bottom-0 left-0 right-0 p-4 text-white text-sm">
            {product.description}
          </p>
        </div>
      </div>
      
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="font-medium text-lg mb-2">{product.name}</h3>
        <div className="flex flex-col gap-4 mt-auto">
          <p className="text-lg font-semibold">AUD ${product.price}</p>
          
          {/* Quantity Counter */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleQuantityChange(-1)}
              className="w-8 h-8 flex items-center justify-center border rounded-lg hover:bg-gray-100"
            >
              -
            </button>
            <span className="w-8 text-center">{quantity}</span>
            <button
              onClick={() => handleQuantityChange(1)}
              className="w-8 h-8 flex items-center justify-center border rounded-lg hover:bg-gray-100"
            >
              +
            </button>
          </div>

          <button
            onClick={handleAddToCart}
            className="w-full px-4 py-2 bg-[var(--primary)] text-white rounded-lg hover:bg-opacity-90 transition-colors duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryProductCard; 