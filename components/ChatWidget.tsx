
import React, { useState } from 'react';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-24 right-6 z-[90]">
      {isOpen && (
        <div className="bg-white w-80 rounded-2xl shadow-2xl border border-gray-100 overflow-hidden mb-4 animate-in slide-in-from-bottom-4 duration-300">
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
      
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-gray-800 text-white' : 'bg-[#0EA5E9] text-white'}`}
      >
        <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-comment-dots'} text-2xl`}></i>
      </button>
    </div>
  );
};

export default ChatWidget;
