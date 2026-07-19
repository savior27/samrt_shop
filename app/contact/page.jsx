"use client";

import { MapPin, Phone, Clock, Mail, Send } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">Contact Us</h1>
        <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Have a question or want to order a product? We're here to help. Reach out to us through any of the channels below.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Contact Info */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-900 rounded-[2rem] p-8 md:p-12 shadow-sm border border-gray-100 dark:border-gray-800"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10">Get In Touch</h2>
          
          <div className="space-y-10">
            <div className="flex items-start group">
              <div className="flex-shrink-0 bg-primary-50 dark:bg-primary-900/20 p-4 rounded-2xl text-primary-600 dark:text-primary-400 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                <Phone className="w-6 h-6" />
              </div>
              <div className="ml-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Phone & WhatsApp</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-2">Call us directly or send a message.</p>
                <a href="tel:+251912678466" className="text-primary-600 dark:text-primary-400 font-bold block hover:text-primary-700 transition-colors text-lg">+251912678466</a>
                <a href="https://wa.me/251912678466" target="_blank" rel="noreferrer" className="mt-1 text-[#25D366] font-bold block hover:opacity-80 transition-opacity">Message on WhatsApp</a>
                
              </div>
              
            </div>
            
            <div className="flex items-start group">
              <div className="flex-shrink-0 bg-primary-50 dark:bg-primary-900/20 p-4 rounded-2xl text-primary-600 dark:text-primary-400 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="ml-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Our Location</h3>
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-lg">
merkato (መርካቶ)<br/>
                  Jimma, Ethiopia
                </p>
              </div>
            </div>
            
            <div className="flex items-start group">
              <div className="flex-shrink-0 bg-primary-50 dark:bg-primary-900/20 p-4 rounded-2xl text-primary-600 dark:text-primary-400 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                <Clock className="w-6 h-6" />
              </div>
              <div className="ml-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Working Hours</h3>
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-lg">
                  Open Every Day
                </p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
