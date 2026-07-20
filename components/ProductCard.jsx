"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export default function ProductCard({ product }) {

  return (
    <motion.div 
      whileHover={{ y: -8 }}
      className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 dark:border-gray-800 overflow-hidden transition-all duration-300 group flex flex-col h-full"
    >
      <Link 
        href={`/product/${product.id}`} 
        className="relative aspect-[4/3] overflow-hidden bg-gray-100 dark:bg-gray-800 block cursor-pointer"
      >
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
        />

        {/* NEW Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
            NEW
          </span>
        </div>

        {/* Wishlist Button */}
        <button className="absolute top-4 right-4 p-2 bg-white/90 dark:bg-gray-900/90 hover:bg-white dark:hover:bg-gray-800 backdrop-blur-sm rounded-full text-gray-400 hover:text-red-500 transition-colors shadow-sm opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 duration-300">
          <Heart className="w-5 h-5" />
        </button>

        {/* Category Tag */}
        <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm px-3 py-1 rounded-lg text-xs font-semibold text-gray-700 dark:text-gray-300 shadow-sm">
          {product.category}
        </div>
      </Link>
      
      <div className="p-6 flex flex-col flex-grow">
        <Link href={`/product/${product.id}`}>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white line-clamp-1 mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
            {product.name}
          </h3>
        </Link>
        
        <p className="text-gray-500 dark:text-gray-400 text-sm line-clamp-2 mb-6 flex-grow leading-relaxed">
          {product.shortDescription || product.description}
        </p>
        
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100 dark:border-gray-800">
          <div className="flex flex-col">
            <span className="text-xl font-black text-gray-900 dark:text-gray-50">
              {product.price || "Contact Us"}
            </span>
          </div>
          
          <Link 
            href={`/product/${product.id}`}
            className="flex items-center justify-center px-4 py-2 bg-gray-900 dark:bg-primary-600 hover:bg-gray-800 dark:hover:bg-primary-500 text-white rounded-xl transition-colors shadow-md text-sm font-bold"
          >
            View Details
          </Link>
        </div>
      </div>
    </motion.div>
  );
}