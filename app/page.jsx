"use client";

import Link from "next/link";
import Image from "next/image";

const categories = [
  {
    id: 1,
    name: "Grand Celebration",
    image: "/product/celebration.jpg",
    description: "Perfect for any special occasion",
    slug: "celebration",
  },
  {
    id: 2,
    name: "Ultimate Relaxation",
    image: "/product/cover.jpg",
    description: "Help you unwind and relax",
    slug: "relaxation",
  },
  {
    id: 3,
    name: "Chocolate Indulgence",
    image: "/product/chocolate.jpg",
    description: "Rich selection of chocolates",
    slug: "chocolate",
  },
  {
    id: 4,
    name: "Pampered Paws",
    image: "/product/pet.jpg",
    description: "Treats for your furry friend",
    slug: "pampered",
  },
  {
    id: 5,
    name: "Fresh Fruit Delight",
    image: "/product/fruit.jpg",
    description: "Healthy and colorful mix of fruits",
    slug: "fruit",
  },
  {
    id: 6,
    name: "Baby Joy",
    image: "/product/baby.jpg",
    description: "Perfect for welcoming a newborn",
    slug: "baby",
  },
  {
    id: 7,
    name: "Aussie Delights",
    image: "/product/aussie_delight.jpg",
    description: "A taste of Australia",
    slug: "aussie",
  },
  {
    id: 8,
    name: "Festive Season",
    image: "/product/christmas_magic.jpg",
    description: "Festive treats and decorations",
    slug: "Festive Season",
  },
  {
    id: 9,
    name: "Corporate Gifts",
    image: "/product/corporate.jpg",
    description: "Premium gift boxes for business",
    slug: "corporate",
  },
  {
    id: 10,
    name: "Surprise Box",
    image: "/product/mix.jpg",
    description: "Infused with unexpected delights",
    slug: "Surprise",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row h-[calc(100vh-110px)] md:h-[35vw] w-full gap-4 md:gap-0 mx-auto max-w-[1400px]">
        <div className="w-full md:w-[45%] flex flex-col gap-2 md:gap-4 justify-center px-3 md:px-8 h-[50%] md:h-full">
          <h1 className="text-[28px] md:text-[34px] lg:text-[40px] font-bold text-black">
            Baskets for every blissful moment
          </h1>
          <p className="text-[14px] md:text-[16px] lg:text-[18px] text-black mt-4">
            Treat yourself or your loved ones to our beautiful handmade gift
            hampers, crafted with care to make every moment special. From our
            hearts to yours, we're here to help you share the love.
          </p>
          <Link
            href="#categories"
            className="inline-block px-8 py-3 bg-[var(--primary)] text-white rounded-lg hover:bg-opacity-90 transition-colors w-fit"
          >
            Explore Our Collection
          </Link>
        </div>
        <div className="bg-gray-100 w-full md:w-[55%] flex items-center justify-center h-[50%] md:h-full">
          <img
            src="/product/cover3.jpg"
            alt="Baskets Bliss cover photo"
            className="w-full h-full object-cover"
            style={{ objectFit: "cover" }}
          />
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Hampers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/categories/${category.slug}`}
                className="group"
              >
                <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2">
                      {category.name}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {category.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
