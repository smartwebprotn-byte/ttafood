
import React, { useState } from 'react';

interface HeaderProps {
  onGoHome: () => void;
}

const Header: React.FC<HeaderProps> = ({ onGoHome }) => {
  const [showSirinePopup, setShowSirinePopup] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <>
      <header className="h-[74px] bg-white border-b border-gray-100 px-6 sticky top-0 z-50 flex items-center">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between relative">
          <div className="flex items-center space-x-6 pointer-events-auto">
            <button
              onClick={onGoHome}
              className="flex items-center space-x-2 group"
            >
              <div className="w-10 h-10 bg-[#0EA5E9] rounded-xl flex items-center justify-center text-white transition-transform group-hover:scale-110 shadow-lg shadow-blue-100">
                <i className="fa-solid fa-snowflake text-xl"></i>
              </div>
              <span className="text-xl font-black tracking-tighter text-gray-900">
                TTA <span className="text-[#0EA5E9]">DIS</span>
              </span>
            </button>
          </div>

          <div className="flex items-center space-x-4 md:space-x-8">
            <nav className="hidden lg:flex items-center space-x-8">
              <button
                onClick={onGoHome}
                className="text-xs font-black text-gray-900 hover:text-[#0EA5E9] transition-colors tracking-widest uppercase"
              >
                Accueil
              </button>
              <a href="#nos-partenaires" className="text-xs font-black text-gray-400 hover:text-[#0EA5E9] transition-colors tracking-widest uppercase">Machines</a>
              <a href="#" className="text-xs font-black text-gray-400 hover:text-[#0EA5E9] transition-colors tracking-widest uppercase">Service Client</a>
            </nav>

            <a href="#nos-partenaires" className="lg:hidden text-xs font-black text-gray-400 hover:text-[#0EA5E9] transition-colors tracking-widest uppercase">Machines</a>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/21698209009"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-[#25D366] text-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-300"
            >
              <i className="fa-brands fa-whatsapp text-xl"></i>
            </a>



            {/* Sirine Avatar Button */}
            <button
              onClick={() => setShowSirinePopup(true)}
              className="flex items-center space-x-2 group hover:scale-105 transition-transform"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow border-2 border-gray-200 group-hover:border-[#0EA5E9]">
                <img
                  src="/sirine-avatar.png"
                  alt="Sirine Avatar"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="hidden sm:block text-[10px] font-black text-gray-600 group-hover:text-[#0EA5E9] transition-colors tracking-widest uppercase">
                parler à sirine
              </span>
            </button>


          </div>
        </div>
      </header>



      {/* Sirine Avatar Popup */}
      {showSirinePopup && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl h-[80vh] rounded-2xl overflow-hidden">
            <button
              onClick={() => setShowSirinePopup(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors shadow-lg"
            >
              <i className="fa-solid fa-times text-xl"></i>
            </button>
            <iframe
              src="https://sirine-avatar.vercel.app/"
              className="w-full h-full border-0 mix-blend-screen"
              allow="microphone *; camera *; display-capture *; autoplay *; clipboard-write *; encrypted-media *; gyroscope *; picture-in-picture *"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              title="Sirine Avatar"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
