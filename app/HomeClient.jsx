"use client";

import Link from 'next/link';
import { ArrowRight, Star, ShieldCheck, Truck, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import ProductCard from '../components/ProductCard';

export default function HomeClient({ products }) {
  // Select top 4 products for featured section
  const featuredProducts = products.slice(0, 4);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="flex flex-col gap-20 pb-16 overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-16 pb-24 lg:pt-24 lg:pb-32 bg-gradient-to-b from-primary-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-400/20 dark:bg-primary-900/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 -left-24 w-72 h-72 bg-blue-400/20 dark:bg-blue-900/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 font-medium text-sm mb-6">
                <Star className="w-4 h-4 fill-current" />
      Jalalli Home Essentials
              </div>
              <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white tracking-tight leading-[1.1] mb-6">
                የዕለት ተዕለት ኑሮዎን ያሳድጉ<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-blue-600 dark:from-primary-400 dark:to-blue-400">
                ለዘመናዊ፣ ምቹ እና ቆንጆ የቤት ኑሮዎ የሚታመን ምርጫ 👌
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed max-w-lg">
ቤትዎ የሚያምር፣ ሕይወትዎን የሚያቀላጥፍ ዘመናዊና ውብ የቤት ዕቃዎችን እና አስፈላጊ መሳሪያዎችን በጥራት ተመርጠው ያግኙ
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/products"
                  className="px-8 py-4 bg-gray-900 dark:bg-primary-600 text-white font-medium rounded-xl hover:bg-primary-700 dark:hover:bg-primary-500 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center gap-2"
                >
                  Explore Collection
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link 
                  href="/contact"
                  className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 font-medium rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all shadow-sm"
                >
                  Contact Support
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="relative hidden lg:block"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-200 to-blue-200 dark:from-primary-900/50 dark:to-blue-900/50 rounded-[3rem] transform rotate-3 scale-105 transition-transform duration-700 hover:rotate-6"></div>
              <img 
                src="/images/products/all.jpg" 
                alt="Modern Kitchen" 
                className="relative rounded-[3rem] shadow-2xl object-cover h-[600px] w-full"
              />
              
              {/* Floating Badge */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl flex items-center gap-4"
              >
                <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full">
                  <ShieldCheck className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <p className="text-gray-900 dark:text-white font-bold text-lg">100% Secure</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">Quality Guaranteed</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Truck, title: "Fast Delivery", desc: "Across the entire country within 2 days" },
            { icon: ShieldCheck, title: "Premium Quality", desc: "Top-tier materials and construction" },
            { icon: Clock, title: "24/7 Support", desc: "Dedicated customer service anytime" }
          ].map((feature, i) => (
            <div key={i} className="flex flex-col items-center text-center p-6 rounded-2xl bg-white dark:bg-gray-900 shadow-sm border border-gray-100 dark:border-gray-800">
              <div className="p-4 bg-primary-50 dark:bg-primary-900/20 rounded-full mb-4">
                <feature.icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-end mb-12 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-3">Trending Now</h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl">Discover our most popular products chosen by interior designers and home owners.</p>
            </div>
            <Link href="/products" className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-semibold flex items-center gap-2 group">
              View All Collection 
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {featuredProducts.map((product) => (
              <motion.div key={product.id} variants={itemVariants}>
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-gray-900 dark:bg-gray-800 rounded-[2rem] overflow-hidden shadow-2xl relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-gray-900/90 dark:from-primary-900/50 dark:to-gray-900/80 z-10"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center"></div>
          
          <div className="relative z-20 p-12 md:p-20 text-center flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Ready to upgrade your home?</h2>
            <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl">
              Join thousands of happy customers who have transformed their living spaces with our premium collection.
            </p>
            <Link 
              href="/products"
              className="px-10 py-5 bg-primary-500 hover:bg-primary-600 text-white font-bold text-lg rounded-xl transition-all shadow-[0_0_20px_rgba(20,184,166,0.4)] hover:shadow-[0_0_30px_rgba(20,184,166,0.6)] hover:-translate-y-1"
            >
              Start Shopping
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
