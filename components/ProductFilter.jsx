"use client";

import clsx from 'clsx';

export default function ProductFilter({ categories, activeCategory, onCategoryChange }) {
  return (
    <div className="flex flex-wrap gap-2.5">
      <button
        onClick={() => onCategoryChange('All')}
        className={clsx(
          "px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-sm",
          activeCategory === 'All' 
            ? "bg-gray-900 dark:bg-primary-600 text-white shadow-md transform scale-[1.02]" 
            : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-gray-900 dark:hover:border-primary-500 hover:text-gray-900 dark:hover:text-primary-400"
        )}
      >
        All Products
      </button>
      
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={clsx(
            "px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-sm",
            activeCategory === category 
              ? "bg-gray-900 dark:bg-primary-600 text-white shadow-md transform scale-[1.02]" 
              : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-gray-900 dark:hover:border-primary-500 hover:text-gray-900 dark:hover:text-primary-400"
          )}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
