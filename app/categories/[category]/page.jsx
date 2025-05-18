"use client";

import { useParams } from "next/navigation";
import products from "@/data/products.json";
import CategoryProductCard from "@/components/CategoryProductCard";

const CategoryPage = () => {
  const params = useParams();
  const category = params.category;

  // Map category slugs to their full names
  const categoryMap = {
    celebration: "Celebration Baskets",
    relaxation: "Relaxation Baskets",
    chocolate: "Chocolate Baskets",
    pampered: "Pet Baskets",
    fruit: "Fruit Baskets",
    baby: "Baby Baskets",
    aussie: "Aussie Treat",
    christmas: "Festive Season",
    corporate: "Bulk Gifting",
    mixed: "Assorted"
  };

  // Filter products by category
  const categoryProducts = products.filter(
    (product) => product.category === categoryMap[category] && product.enabled
  );

  if (categoryProducts.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">No Products Found</h1>
        <p className="mb-8">We couldn't find any products in this category.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 capitalize">{categoryMap[category]}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {categoryProducts.map((product) => (
          <CategoryProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage; 