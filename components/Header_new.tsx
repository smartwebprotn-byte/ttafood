
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
              <a href="#" className="text-xs font-black text-gray-400 hover:text-[#0EA5E9] transition-colors tracking-widest uppercase">Machines</a>
              <a href="#" className="text-xs font-black text-gray-400 hover:text-[#0EA5E9] transition-colors tracking-widest uppercase">Service Client</a>
            </nav>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/21698209009"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-[#25D366] text-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-300"
            >
              <i className="fa-brands fa-whatsapp text-xl"></i>
            </a>

            {/* Chat Widget Button */}
            <div className="relative">
              <button
                onClick={() => setIsChatOpen(!isChatOpen)}
                className={`w-10 h-10 rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-300 ${isChatOpen ? 'bg-gray-800 text-white' : 'bg-[#0EA5E9] text-white'}`}
              >
                <i className={`fa-solid ${isChatOpen ? 'fa-xmark' : 'fa-comment-dots'} text-xl`}></i>
              </button>
              {isChatOpen && (
                <div className="absolute right-0 top-12 w-80 rounded-2xl shadow-2xl border border-gray-100 overflow-hidden animate-in slide-in-from-top-2 duration-300 z-50">
                  <div className="bg-[#0EA5E9] p-4 text-white">
                    <h6 className="font-bold">Besoin d'aide ?</h6>
                    <p className="text-xs text-white/80">Notre équipe est en ligne.</p>
                  </div>
                  <div className="p-4 h-64 overflow-y-auto bg-gray-50">
                    <div className="bg-white p-3 rounded-lg text-sm text-gray-600 shadow-sm inline-block max-w-[80%] mb-4">
                      Bonjour ! Comment pouvons-nous vous aider aujourd'hui ?
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg text-sm text-gray-800 shadow-sm block ml-auto max-w-[80%] mb-4 text-right">
                      Je cherche un pasteurisateur de 100L.
                    </div>
                    <div className="bg-white p-3 rounded-lg text-sm text-gray-600 shadow-sm inline-block max-w-[80%]">
                      Très bon choix. Je vous recommande le <strong>Evo 100 d'IceTeam</strong>. Souhaitez-vous recevoir la fiche technique ?
                    </div>
                  </div>
                  <div className="p-3 border-t border-gray-100 flex items-center bg-white">
                    <input
                      type="text"
                      placeholder="Écrivez un message..."
                      className="flex-1 text-sm outline-none px-2"
                    />
                    <button className="text-[#0EA5E9] p-2 hover:bg-blue-50 rounded-full transition-colors">
                      <i className="fa-solid fa-paper-plane"></i>
                    </button>
                  </div>
                </div>
              )}
            </div>

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

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-gray-400 hover:text-[#0EA5E9] transition-colors relative z-50"
            >
              <i className={`fa-solid ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden">
          <div className="absolute right-0 top-0 h-full w-3/4 max-w-sm bg-white shadow-2xl transform transition-transform duration-300 ease-in-out">
            <div className="p-6 pt-20">
              <nav className="flex flex-col space-y-6">
                <button
                  onClick={() => {
                    onGoHome();
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-left text-sm font-black text-gray-900 hover:text-[#0EA5E9] transition-colors tracking-widest uppercase"
                >
                  Accueil
                </button>
                <a
                  href="#"
                  className="text-left text-sm font-black text-gray-400 hover:text-[#0EA5E9] transition-colors tracking-widest uppercase"
                >
                  Machines
                </a>
                <a
                  href="#"
                  className="text-left text-sm font-black text-gray-400 hover:text-[#0EA5E9] transition-colors tracking-widest uppercase"
                >
                  Service Client
                </a>
              </nav>
            </div>
          </div>
        </div>
      )}

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
