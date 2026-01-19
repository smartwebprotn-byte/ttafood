
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100">
      {/* Visual Banner */}
      <div className="relative h-32 overflow-hidden flex grayscale opacity-30 hover:grayscale-0 transition-all duration-700">
        {[
          '/dist/images/a.png',
          '/dist/images/b.png',
          '/dist/images/c.jpg',
          '/dist/images/d.jpg',
          '/dist/images/e.png',
          '/dist/images/f.png'
        ].map((url, i) => (
          <div key={i} className="flex-1 min-w-[200px]">
            <img
              src={url}
              alt="machine banner"
              className="w-full h-full object-cover animate-ken-burns"
              style={{ animationDelay: `${i * 2}s` }}
            />
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <i className="fa-solid fa-snowflake text-[#0EA5E9] text-2xl"></i>
              <span className="text-2xl font-black tracking-tighter text-gray-900 uppercase">
                TTA <span className="text-[#0EA5E9]">DIS</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm mb-6 max-w-md font-medium leading-relaxed">
              Spécialiste en équipements pour glaciers et pâtissiers. TTADIS vous accompagne avec les marques italiennes les plus prestigieuses pour garantir l'excellence de vos créations.
            </p>
            
            <div className="space-y-2 mb-6">
               <div className="flex items-center space-x-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  <span className="bg-gray-100 px-2 py-0.5 rounded">MF</span>
                  <span>1330353SAM000</span>
               </div>
               <div className="flex items-center space-x-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  <span className="bg-gray-100 px-2 py-0.5 rounded">RIB BIAT</span>
                  <span>08 098027 0910002039 31</span>
               </div>
            </div>

            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-gray-400 hover:bg-[#0EA5E9] hover:text-white transition-all shadow-sm">
                <i className="fa-brands fa-facebook-f text-sm"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-gray-400 hover:bg-[#0EA5E9] hover:text-white transition-all shadow-sm">
                <i className="fa-brands fa-instagram text-sm"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-gray-400 hover:bg-[#0EA5E9] hover:text-white transition-all shadow-sm">
                <i className="fa-brands fa-linkedin-in text-sm"></i>
              </a>
            </div>
          </div>

          <div>
            <h5 className="font-black text-gray-900 text-xs uppercase tracking-[0.2em] mb-8">Nos Marques</h5>
            <ul className="space-y-4 text-sm text-gray-500 font-medium">
              <li>
                <a href="https://www.gemm-srl.com/en/" target="_blank" rel="noopener noreferrer" className="hover:text-[#0EA5E9] transition-colors flex items-center">
                  GEMM Refrigeration
                  <i className="fa-solid fa-arrow-up-right-from-square text-[10px] ml-2 opacity-40"></i>
                </a>
              </li>
              <li>
                <a href="https://www.clabo.it/en/" target="_blank" rel="noopener noreferrer" className="hover:text-[#0EA5E9] transition-colors flex items-center">
                  CLABO
                  <i className="fa-solid fa-arrow-up-right-from-square text-[10px] ml-2 opacity-40"></i>
                </a>
              </li>
              <li>
                <a href="https://www.iceteam1927.it/en" target="_blank" rel="noopener noreferrer" className="hover:text-[#0EA5E9] transition-colors flex items-center">
                  ICETEAM 1927
                  <i className="fa-solid fa-arrow-up-right-from-square text-[10px] ml-2 opacity-40"></i>
                </a>
              </li>
              <li>
                <a href="https://www.cattabriga.com/en/" target="_blank" rel="noopener noreferrer" className="hover:text-[#0EA5E9] transition-colors flex items-center">
                  Cattabriga
                  <i className="fa-solid fa-arrow-up-right-from-square text-[10px] ml-2 opacity-40"></i>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-black text-gray-900 text-xs uppercase tracking-[0.2em] mb-8">Contact</h5>
            <ul className="space-y-5 text-sm text-gray-500 font-medium">
              <li className="flex items-start space-x-3 group">
                <i className="fa-solid fa-location-dot text-[#0EA5E9] mt-1"></i>
                <span className="group-hover:text-gray-900 transition-colors">C2 Rue du lac Malaren,<br/>1053 LES BERGES DU LAC</span>
              </li>
              <li className="flex items-center space-x-3 group">
                <i className="fa-solid fa-phone text-[#0EA5E9]"></i>
                <a href="tel:+21698209009" className="group-hover:text-gray-900 transition-colors">+216 98 209 009</a>
              </li>
              <li className="flex items-center space-x-3 group">
                <i className="fa-solid fa-envelope text-[#0EA5E9]"></i>
                <a href="mailto:ttadis@gnet.tn" className="group-hover:text-gray-900 transition-colors">ttadis@gnet.tn</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] font-bold text-gray-300 uppercase tracking-widest">
          <p>© 2024 TTADIS - Machines & Accessoires. Tous droits réservés.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-600 transition-colors">Mentions Légales</a>
            <a href="#" className="hover:text-gray-600 transition-colors">Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
