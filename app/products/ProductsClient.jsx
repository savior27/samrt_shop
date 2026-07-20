"use client";

import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import ProductCard from '../../components/ProductCard';
import SearchBar from '../../components/SearchBar';
import ProductFilter from '../../components/ProductFilter';
import { FilterX } from 'lucide-react';

export default function ProductsClient({ initialProducts }) {
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      setActiveCategory(categoryParam);
    }
  }, [searchParams]);

  const categories = useMemo(() => {
    const cats = new Set(initialProducts.map(p => p.category));
    return Array.from(cats);
  }, [initialProducts]);

  const filteredProducts = useMemo(() => {
    return initialProducts.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            product.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            product.fullDescription.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory, initialProducts]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="mb-12">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">Our Collection</h1>
          <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed">
            Browse our curated collection of high-quality items for your home. Use the filters below to find exactly what you need to transform your space.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-col lg:flex-row gap-6 justify-between items-start lg:items-center bg-white dark:bg-gray-900 p-6 md:p-8 rounded-[2rem] shadow-sm border border-gray-100 dark:border-gray-800"
        >
          <div className="w-full lg:w-1/3">
            <SearchBar value={searchQuery} onChange={setSearchQuery} />
          </div>
          <div className="w-full lg:w-2/3 flex justify-start lg:justify-end">
            <ProductFilter 
              categories={categories} 
              activeCategory={activeCategory} 
              onCategoryChange={setActiveCategory} 
            />
          </div>
        </motion.div>
      </div>

      <AnimatePresence mode="wait">
        {filteredProducts.length > 0 ? (
          <motion.div 
            key="grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
          >
            {filteredProducts.map((product, index) => (
              <motion.div 
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div 
            key="empty"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="text-center py-24 bg-white dark:bg-gray-900 rounded-[2rem] border border-gray-100 dark:border-gray-800 shadow-sm flex flex-col items-center justify-center"
          >
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-full mb-6">
              <FilterX className="w-12 h-12 text-gray-400 dark:text-gray-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">No products found</h3>
            <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto mb-8">
              We couldn't find anything matching "{searchQuery}" in the {activeCategory} category.
            </p>
            <button 
              onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
              className="px-8 py-3 bg-gray-900 dark:bg-primary-600 hover:bg-gray-800 dark:hover:bg-primary-500 text-white font-medium rounded-xl transition-all shadow-md hover:shadow-lg"
            >
              Clear All Filters
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
