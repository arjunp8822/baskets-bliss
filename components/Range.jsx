"use client";

import products from "@/data/products.json";
import ProductCard from "./ProductCard";

const Range = () => {
  return (
    <div className="container flex flex-col gap-4" id="products">
      <div className="flex flex-col gap-1 mb-8">
        <h2 className="heading">Our Products</h2>
        <h3 className="sub-heading">
          Premium gift baskets crafted for every occasion, packed with
          thoughtful selections.
        </h3>
      </div>
      
      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products
          .filter((product) => product.enabled)
          .map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
      </div>
    </div>
  );
};

export default Range;
