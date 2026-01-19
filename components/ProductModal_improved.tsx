

import React, { useEffect, useState } from 'react';
import { Product } from '../types';

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product;
}

const ProductModal: React.FC<ProductModalProps> = ({ isOpen, onClose, product }) => {
  const [shouldRender, setShouldRender] = useState(isOpen);

  useEffect(() => {
    if (isOpen) setShouldRender(true);
  }, [isOpen]);

  if (!shouldRender) return null;

  return (
    <div className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`} onTransitionEnd={() => !isOpen && setShouldRender(false)}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300" onClick={onClose}></div>

      <div className={`relative bg-white w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl transition-all duration-300 transform ${isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-4'} animate-in zoom-in duration-300`}>
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 bg-gray-100 hover:bg-red-100 hover:text-red-600 rounded-full flex items-center justify-center transition-all duration-300 z-10 hover:rotate-90"
        >
          <i className="fa-solid fa-xmark text-gray-600"></i>
        </button>

        <div className="flex flex-col lg:flex-row h-full">
          {/* Image Section */}
          <div className="lg:w-1/2 h-64 lg:h-auto relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10"></div>
            <img src={product.image} alt={product.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          </div>

          {/* Content Section */}
          <div className="lg:w-1/2 p-8 lg:p-12 overflow-y-auto max-h-[80vh]">
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-[#0EA5E9] font-bold text-xs tracking-widest uppercase bg-blue-50 px-3 py-1 rounded-full">
                {product.brand}
              </span>
              <span className="text-gray-400 text-xs tracking-widest uppercase">
                {product.category}
              </span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">{product.name}</h2>

            <div className="space-y-6 mb-8">
              <div className="bg-gray-50 rounded-2xl p-6">
                <h5 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Spécifications Techniques</h5>
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-500 text-sm font-medium">Dimensions</span>
                    <span className="text-gray-900 font-bold text-sm">{product.specs.dimensions}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-500 text-sm font-medium">Puissance</span>
                    <span className="text-gray-900 font-bold text-sm">{product.specs.power}</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-500 text-sm font-medium">Capacité</span>
                    <span className="text-gray-900 font-bold text-sm">{product.specs.capacity}</span>
                  </div>
                </div>
              </div>

              <div>
                <h5 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Description Technique</h5>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {product.specs.description}
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex-1 bg-[#0EA5E9] text-white py-3 px-6 rounded-full font-bold hover:bg-[#0284C7] hover:shadow-lg hover:shadow-blue-200 transition-all flex items-center justify-center space-x-2 transform hover:-translate-y-0.5">
                <i className="fa-solid fa-download text-sm"></i>
                <span>TÉLÉCHARGER PDF</span>
              </button>
              <button className="flex-1 bg-[#F59E0B] text-white py-3 px-6 rounded-full font-bold hover:bg-[#D97706] hover:shadow-lg hover:shadow-orange-200 transition-all flex items-center justify-center space-x-2 transform hover:-translate-y-0.5">
                <i className="fa-solid fa-cart-shopping text-sm"></i>
                <span>DEMANDER UN DEVIS</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
