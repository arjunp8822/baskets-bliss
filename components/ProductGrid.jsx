"use client";

const ProductGrid = () => {
  const products = [
    {
      id: 1,
      name: 'Luxury Birthday Hamper',
      price: 149.99,
      image: '/images/birthday-hamper.jpg',
      category: 'Birthday Hampers',
    },
    {
      id: 2,
      name: 'Anniversary Special',
      price: 199.99,
      image: '/images/anniversary-gift.jpg',
      category: 'Anniversary Gifts',
    },
    {
      id: 3,
      name: 'Corporate Gift Set',
      price: 299.99,
      image: '/images/corporate-gift.jpg',
      category: 'Corporate Gifts',
    },
    // Add more products as needed
  ];

  return (
    <>
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
        >
          <div className="aspect-w-16 aspect-h-9 relative">
            <img
              src={product.image}
              alt={product.name}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="p-4">
            <h3 className="font-medium text-lg mb-1">{product.name}</h3>
            <p className="text-gray-600 text-sm mb-2">{product.category}</p>
            <div className="flex justify-between items-center">
              <span className="font-semibold text-lg">${product.price}</span>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                View Details
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductGrid; 