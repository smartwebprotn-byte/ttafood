
import React from 'react';

const SubHero: React.FC = () => {
  const images = [
    "/images/a.png",
    "/images/b.png",
    "/images/c.jpg",
    "/images/d.jpg",
    "/images/e.png",
    "/images/f.png"
  ];

  const duplicatedImages = [...images, ...images];

  return (
    <section className="relative w-full overflow-hidden bg-white py-12">
      {/* Injected SVG Pattern for background */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <svg width="100%" height="100%">
          <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="2" fill="#9333EA" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      <div className="relative h-48 md:h-64 flex items-center origin-center rotate-[-1deg] scale-[1.02]">
        <div className="animate-scroll-reverse py-4">
          {duplicatedImages.map((src, index) => {
            const isTall = index % 3 === 0;
            return (
              <div 
                key={index} 
                className={`flex-shrink-0 px-3 flex items-center justify-center transition-all duration-700 hover:scale-110 hover:z-10
                  ${isTall ? 'h-40 md:h-56 w-56 md:w-80' : 'h-32 md:h-44 w-48 md:w-64'}
                `}
              >
                <div className="w-full h-full rounded-2xl overflow-hidden shadow-xl border-4 border-white rotate-[1deg]">
                  <img 
                    src={src} 
                    alt={`Resultat ${index}`} 
                    className="h-full w-full object-cover filter saturate-[1.2] brightness-105"
                  />
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Decorative SVG Label with path animation */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-start ml-8 md:ml-16">
           <div className="bg-[#9333EA]/10 backdrop-blur-md px-6 py-2 rounded-2xl border border-[#9333EA]/20 shadow-sm flex flex-col -rotate-3">
              <span className="text-[#9333EA] font-black text-xs md:text-sm tracking-widest uppercase">Génération</span>
              <span className="text-gray-800 font-bold text-[8px] md:text-[10px] uppercase opacity-60">Saveurs & Design</span>
           </div>
        </div>
      </div>
    </section>
  );
};

export default SubHero;
