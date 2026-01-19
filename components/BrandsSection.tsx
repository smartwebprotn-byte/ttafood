
import React from 'react';

const BrandsSection: React.FC = () => {
  const brands = [
    {
      name: 'ICETEAM 1927',
      logo: 'fa-snowflake',
      color: '#0EA5E9',
      description: 'Leaders mondiaux en machines pour gelato artisanal depuis 1927. Réunissant Cattabriga, Coldelite et Promag.',
      specialties: ['Pasteurisateurs PSK PRO', 'Turbines Multifreeze', 'Machines Combinées Compacta'],
      image: '/images/iceteam.jpg',
      link: 'https://www.iceteam1927.it/'
    },
    {
      name: 'CLABO',
      logo: 'fa-store',
      color: '#9333EA',
      description: 'Leader mondial du design et fabrication de vitrines réfrigérées italiennes premium pour gelato.',
      specialties: ['Vitrines ORION Tecnica', 'Série ITALIANA', 'TRILOGY Luxury'],
      image: '/images/clabo.jpg',
      link: 'https://www.clabo.it/en/'
    },
    {
      name: 'GEMM Refrigeration',
      logo: 'fa-wind',
      color: '#F59E0B',
      description: 'Excellence italienne en réfrigération commerciale. Expertise en blast chillers et cellules de surgélation.',
      specialties: ['Blast Chillers BCB/BCC', 'Série RUNNER', 'Armoires Roll-In'],
      image: '/images/ff.png',
      link: 'https://www.gemm-srl.com/fr/'
    }
  ];

  return (
    <section id="nos-partenaires" className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%">
          <pattern id="brand-dots" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <circle cx="3" cy="3" r="2" fill="currentColor" className="text-blue-600" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#brand-dots)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-[#0EA5E9] text-xs font-black tracking-[0.4em] uppercase mb-4 block">Made in Italy</span>
          <h2 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tighter leading-none uppercase mb-6">
            Nos Partenaires
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto font-medium">
            Les marques italiennes les plus prestigieuses pour équiper votre laboratoire de glace artisanale
          </p>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {brands.map((brand, index) => (
            <div
              key={brand.name}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 animate-card-entry"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Brand Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={brand.image}
                  alt={brand.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                {/* Brand Icon Overlay */}
                <div
                  className="absolute top-6 right-6 w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg transition-all duration-500 group-hover:scale-110"
                  style={{ backgroundColor: brand.color }}
                >
                  <i className={`fa-solid ${brand.logo} text-3xl text-white`}></i>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                {brand.link ? (
                  <a
                    href={brand.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl font-black text-gray-900 mb-4 tracking-tight group-hover:text-[#0EA5E9] transition-colors"
                  >
                    {brand.name}
                  </a>
                ) : (
                  <h3 className="text-2xl font-black text-gray-900 mb-4 tracking-tight group-hover:text-[#0EA5E9] transition-colors">
                    {brand.name}
                  </h3>
                )}

                <p className="text-gray-500 text-sm leading-relaxed mb-6 font-medium">
                  {brand.description}
                </p>

                {/* Specialties */}
                <div className="space-y-2 mb-6">
                  <span className="text-[9px] font-black text-gray-400 uppercase tracking-[0.2em] block mb-3">
                    Spécialités
                  </span>
                  {brand.specialties.map((specialty, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-sm">
                      <div
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: brand.color }}
                      ></div>
                      <span className="text-gray-600 font-medium">{specialty}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                {brand.link ? (
                  <a
                    href={brand.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-3 rounded-full font-bold text-sm transition-all duration-300 border-2 group-hover:bg-gray-900 group-hover:text-white group-hover:border-gray-900 text-center"
                    style={{
                      borderColor: brand.color,
                      color: brand.color
                    }}
                  >
                    VOIR LES PRODUITS
                  </a>
                ) : (
                  <button
                    className="w-full py-3 rounded-full font-bold text-sm transition-all duration-300 border-2 group-hover:bg-gray-900 group-hover:text-white group-hover:border-gray-900"
                    style={{
                      borderColor: brand.color,
                      color: brand.color
                    }}
                  >
                    VOIR LES PRODUITS
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default BrandsSection;
