{ /* import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

export default function StickyButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      <a href="tel:+919285117911" className="w-14 h-14 bg-[#0A4D68] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform">
        <Phone size={26} />
      </a>
      <a href="https://wa.me/919285117911" target="_blank" rel="noreferrer" className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform relative">
        <span className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-75"></span>
        <MessageCircle size={26} className="relative z-10" />
      </a>
    </div>
  );
} */}

import React from 'react';
import { Phone } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

export default function StickyButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      
      {/* Call Button */}
      <a
        href="tel:+919285117911"
        className="w-14 h-14 bg-[#0A4D68] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
      >
        <Phone size={26} />
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919285117911"
        target="_blank"
        rel="noreferrer"
        className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform relative"
      >
        <span className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-75"></span>

        <FaWhatsapp
          size={28}
          className="relative z-10"
        />
      </a>

    </div>
  );
}