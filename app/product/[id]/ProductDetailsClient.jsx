"use client";

import Link from 'next/link';
import { ArrowLeft, CheckCircle2, ShieldCheck, Truck, Heart, Share2 } from 'lucide-react';
import { motion } from 'framer-motion';
import ContactButtons from '../../../components/ContactButtons';
import ProductCard from '../../../components/ProductCard';
import clsx from 'clsx';

export default function ProductDetailsClient({ product, relatedProducts }) {
  // Try to parse features, if not available, we can mock it or use what's there
  const features = product.features || ['Premium quality material', 'Durable and long-lasting', 'Modern design'];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
      <Link 
        href="/products" 
        className="inline-flex items-center text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors mb-8 font-medium bg-white dark:bg-gray-900 px-4 py-2 rounded-lg shadow-sm border border-gray-100 dark:border-gray-800"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Catalog
      </Link>
      
      <div className="bg-white dark:bg-gray-900 rounded-[2.5rem] shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-0">
          {/* Image Gallery Section */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-50 dark:bg-gray-800/50 p-8 md:p-16 flex items-center justify-center relative overflow-hidden group"
          >
            {/* Background elements */}
            <div className="absolute inset-0 bg-gradient-to-tr from-gray-100/50 to-white/10 dark:from-gray-800/50 dark:to-gray-900/10 mix-blend-overlay"></div>
            
            <div className="absolute top-6 left-6 flex flex-col gap-2 z-10">
              <span className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-semibold text-gray-700 dark:text-gray-300 shadow-sm border border-gray-100 dark:border-gray-700">
                {product.category}
              </span>
            </div>

            <div className="absolute top-6 right-6 flex gap-2 z-10">
              <button className="p-3 bg-white/90 dark:bg-gray-900/90 hover:bg-white dark:hover:bg-gray-800 backdrop-blur-sm rounded-full text-gray-500 dark:text-gray-400 hover:text-primary-600 transition-colors shadow-sm">
                <Share2 className="w-5 h-5" />
              </button>
              <button className="p-3 bg-white/90 dark:bg-gray-900/90 hover:bg-white dark:hover:bg-gray-800 backdrop-blur-sm rounded-full text-gray-500 dark:text-gray-400 hover:text-red-500 transition-colors shadow-sm">
                <Heart className="w-5 h-5" />
              </button>
            </div>
            
            <img 
              src={product.image} 
              alt={product.name} 
              className="relative z-0 max-w-full h-auto object-cover rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
          
          {/* Details Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-white dark:bg-gray-900"
          >
            <div className="mb-4 flex items-center gap-2">
              <span className={clsx(
                "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-bold",
                product.status === 'In Stock' || product.availability === 'In Stock'
                  ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400" 
                  : "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400"
              )}>
                <CheckCircle2 className="w-4 h-4" />
                {product.status || product.availability || "In Stock"}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight leading-tight">
              {product.name}
            </h1>
            
            <div className="flex items-baseline gap-4 mb-8">
              <p className="text-3xl md:text-4xl font-black text-primary-600 dark:text-primary-400">
                {product.price}
              </p>
            </div>
            
            <p className="text-gray-600 dark:text-gray-400 mb-10 leading-relaxed text-lg">
              {product.fullDescription || product.description}
            </p>
            
            <div className="mb-10">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-5 flex items-center gap-2">
                Product Features
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, idx) => (
                  <li key={idx} className="flex items-start bg-gray-50 dark:bg-gray-800/50 p-3 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-primary-500 dark:text-primary-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-12">
              <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-700/50">
                <div className="p-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm text-primary-600 dark:text-primary-400">
                  <Truck className="w-6 h-6" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-gray-900 dark:text-white">Fast Delivery</span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">Ships in 24h</span>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-700/50">
                <div className="p-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm text-primary-600 dark:text-primary-400">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-gray-900 dark:text-white">Quality Assured</span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">1 Year Warranty</span>
                </div>
              </div>
            </div>

            <div className="p-6 bg-primary-50 dark:bg-primary-900/10 rounded-2xl border border-primary-100 dark:border-primary-900/30">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Ready to order?</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm">Contact us directly via your preferred platform to secure your purchase.</p>
              <ContactButtons product={product} />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Related Products Section */}
      <div className="mt-16 md:mt-24">
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white mb-8">Related Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {relatedProducts.map(relatedProduct => (
            <ProductCard key={relatedProduct.id} product={relatedProduct} />
          ))}
        </div>
      </div>
    </div>
  );
}
