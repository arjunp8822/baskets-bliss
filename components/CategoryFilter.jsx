"use client";

import { useState } from 'react';

const CategoryFilter = ({ isMobile }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const categories = [
    { id: 1, name: 'Grand Celebration', count: 12 },
    { id: 2, name: 'Ultimate Relaxation', count: 8 },
    { id: 3, name: 'Chocolate Indulgence', count: 15 },
    { id: 4, name: 'Pampered Paws', count: 10 },
    { id: 5, name: 'Fresh Fruit Delight', count: 6 },
    { id: 6, name: 'Baby Joy', count: 9 },
    { id: 7, name: 'Aussie Delights', count: 15 },
    { id: 8, name: 'Festive Season', count: 10 },
    { id: 9, name: 'Corporate Gifts', count: 6 },
    { id: 10, name: 'Surprise Box', count: 6 }
];

  if (isMobile) {
    return (
      <div className="lg:hidden">
        <button
          onClick={() => setIsOpen(true)}
          className="w-full bg-white border border-gray-200 rounded-lg p-4 flex items-center justify-between shadow-sm"
        >
          <span className="font-medium">Filter Categories</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Mobile Bottom Sheet */}
        {isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden">
            <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl p-4 max-h-[80vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Categories</h3>
                <button onClick={() => setIsOpen(false)} className="p-2">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    className="w-full text-left p-3 hover:bg-gray-50 rounded-lg flex justify-between items-center"
                  >
                    <span>{category.name}</span>
                    <span className="text-gray-500 text-sm">({category.count})</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="hidden lg:block">
      <div className="bg-white rounded-lg shadow-sm p-4">
        <h3 className="font-semibold text-lg mb-4">Categories</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <button
              key={category.id}
              className="w-full text-left p-3 hover:bg-gray-50 rounded-lg flex justify-between items-center"
            >
              <span>{category.name}</span>
              <span className="text-gray-500 text-sm">({category.count})</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter; 