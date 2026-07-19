import { Phone, Send, Camera } from 'lucide-react';

export default function ContactButtons({ product }) {
  // We can pass an optional product object to pre-fill messages
  const message = product 
    ? `Hello, I'm interested in the ${product.name} (${product.price}). Is it available?` 
    : "Hello, I have an inquiry about your products.";

  const encodedMessage = encodeURIComponent(message);
  
  // Replace these with actual seller links
  const phone = product?.phone || "+251912678466";
  const whatsapp = product?.whatsapp || `https://wa.me/251912678466?text=${encodedMessage}`;
  const telegram = product?.telegram || "https://t.me/T_jalalli";
  const instagram = product?.instagram || "https://www.instagram.com/jalalli_takele";
  const tiktok = product?.tiktok || "https://www.tiktok.com/@jalallifinds";

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
      <a 
        href={`tel:${phone}`}
        className="flex items-center justify-center gap-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-4 py-4 rounded-xl font-bold hover:bg-gray-800 dark:hover:bg-gray-100 transition-all shadow-sm hover:shadow-md hover:-translate-y-1"
      >
        <Phone className="w-5 h-5" />
        Call Now
      </a>
      
      <a 
        href={telegram}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-3 bg-[#0088cc] text-white px-4 py-4 rounded-xl font-bold hover:bg-[#0077b3] transition-all shadow-sm hover:shadow-md hover:-translate-y-1"
      >
        <Send className="w-5 h-5" />
        Telegram
      </a>
      
      <a 
        href={instagram}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-3 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F56040] text-white px-4 py-4 rounded-xl font-bold hover:opacity-90 transition-all shadow-sm hover:shadow-md hover:-translate-y-1"
      >
        <Camera className="w-5 h-5" />
        Instagram
      </a>
      
      <a 
        href={tiktok}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-3 bg-black dark:bg-gray-800 text-white px-4 py-4 rounded-xl font-bold hover:bg-gray-900 dark:hover:bg-gray-700 transition-all shadow-sm hover:shadow-md hover:-translate-y-1"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.12-3.44-3.17-3.64-5.46-.22-2.39.81-4.78 2.67-6.23 1.43-1.12 3.32-1.57 5.06-1.12v4.11c-1.16-.3-2.42-.08-3.36.75-1.02.85-1.46 2.27-1.13 3.56.32 1.25 1.34 2.28 2.61 2.58 1.19.28 2.52.02 3.44-.76.7-.58 1.15-1.42 1.25-2.34.02-.37.02-.75.02-1.12V.02z"/></svg>
        TikTok
      </a>
    </div>
  );
}
