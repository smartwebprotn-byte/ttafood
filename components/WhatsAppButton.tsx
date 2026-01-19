
import React from 'react';

const WhatsAppButton: React.FC = () => {
  return (
    <a 
      href="https://wa.me/21698209009" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[90] w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-300 animate-bounce"
      style={{ animationDuration: '3s' }}
    >
      <i className="fa-brands fa-whatsapp text-3xl"></i>
    </a>
  );
};

export default WhatsAppButton;
