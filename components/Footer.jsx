import Link from 'next/link';
import { Phone, MapPin, ShoppingBag, Send, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800 pt-16 pb-8 mt-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="p-2 bg-primary-100 dark:bg-primary-900/50 rounded-lg">
                <ShoppingBag className="h-6 w-6 text-primary-600 dark:text-primary-400" />
              </div>
              <span className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">Smart Home Shop</span>
            </Link>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
              Your one-stop destination for high-quality home appliances, kitchenware, and daily essentials.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/jalalli_takele" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:text-[#E1306C] transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="https://t.me/T_jalalli" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:text-[#0088cc] transition-all">
                <Send className="w-5 h-5" />
              </a>
              <a href="https://www.tiktok.com/@jalallifinds" target="_blank" rel="noreferrer" className="p-2 rounded-full bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.12-3.44-3.17-3.64-5.46-.22-2.39.81-4.78 2.67-6.23 1.43-1.12 3.32-1.57 5.06-1.12v4.11c-1.16-.3-2.42-.08-3.36.75-1.02.85-1.46 2.27-1.13 3.56.32 1.25 1.34 2.28 2.61 2.58 1.19.28 2.52.02 3.44-.76.7-.58 1.15-1.42 1.25-2.34.02-.37.02-.75.02-1.12V.02z"/></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-6 tracking-tight">Quick Links</h3>
            <ul className="space-y-4 font-medium text-gray-500 dark:text-gray-400">
              <li><Link href="/" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Home</Link></li>
              <li><Link href="/products" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">All Products</Link></li>
              <li><Link href="/contact" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Contact Us</Link></li>
              <li><a href="#" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">FAQ & Support</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-6 tracking-tight">Contact Info</h3>
            <ul className="space-y-4 font-medium text-gray-500 dark:text-gray-400">
              <li className="flex items-start gap-3 hover:text-primary-600 dark:hover:text-primary-400 transition-colors cursor-pointer">
                <Phone className="h-5 w-5 text-primary-500 shrink-0" />
                <span>+251912678466</span>
              </li>
              <li className="flex items-start gap-3 hover:text-primary-600 dark:hover:text-primary-400 transition-colors cursor-pointer">
                <Mail className="h-5 w-5 text-primary-500 shrink-0" />
                <span>jalallifinds@gmail.com</span>
              </li>
              <li className="flex items-start gap-3 hover:text-primary-600 dark:hover:text-primary-400 transition-colors cursor-pointer">
                <MapPin className="h-5 w-5 text-primary-500 shrink-0" />
                <span>merkato(መርካቶ)<br/>jimma, Ethiopia</span>
              </li>
            </ul>
          </div>
{/* Newsletter Subscription Form 
          <div>
            <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-6 tracking-tight">Newsletter</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-4 text-sm leading-relaxed">Subscribe to get special offers, free giveaways, and updates.</p>
            <div className="flex bg-gray-50 dark:bg-gray-900 rounded-xl p-1 border border-gray-200 dark:border-gray-800 focus-within:ring-2 focus-within:ring-primary-500 focus-within:border-primary-500 transition-all">
              <input type="email" placeholder="Enter your email" className="w-full bg-transparent px-4 text-gray-900 dark:text-white text-sm outline-none" />
              <button className="bg-gray-900 dark:bg-primary-600 hover:bg-gray-800 dark:hover:bg-primary-500 text-white p-3 rounded-lg transition-colors">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>

          */}
        </div>

        
        
        <div className="border-t border-gray-100 dark:border-gray-800/60 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
            &copy; {new Date().getFullYear()} Smart Home Shop. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-gray-500 dark:text-gray-400 font-medium">
            <a href="#" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
