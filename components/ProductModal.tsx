
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
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>

      <div className={`relative bg-white w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl transition-transform duration-300 transform ${isOpen ? 'scale-100' : 'scale-95'}`}>
        <button
          onClick={onClose}
          className="absolute top-16 right-6 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors z-10"
        >
          <i className="fa-solid fa-xmark text-gray-600"></i>
        </button>

        <div className="flex flex-col lg:flex-row h-full">
          {/* Image Section */}
          <div className="lg:w-1/2 h-64 lg:h-auto">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </div>

          {/* Content Section */}
          <div className="lg:w-1/2 p-8 lg:p-12 overflow-y-auto max-h-[80vh]">
            <span className="text-[#0EA5E9] font-bold text-xs tracking-widest uppercase mb-2 block">
              {product.brand} - {product.category}
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{product.name}</h2>

            <div className="space-y-6 mb-8">
              <div>
                <h5 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Spécifications</h5>
                <div className="grid grid-cols-1 gap-3">
                  <div className="flex justify-between py-2 border-b border-gray-50">
                    <span className="text-gray-500 text-sm">Dimensions</span>
                    <span className="text-gray-900 font-medium text-sm">{product.specs.dimensions}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-50">
                    <span className="text-gray-500 text-sm">Puissance</span>
                    <span className="text-gray-900 font-medium text-sm">{product.specs.power}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-50">
                    <span className="text-gray-500 text-sm">Capacité</span>
                    <span className="text-gray-900 font-medium text-sm">{product.specs.capacity}</span>
                  </div>
                </div>
              </div>

              <div>
                <h5 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Description Technique</h5>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {product.specs.description}
                  <br /><br />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex-1 bg-[#0EA5E9] text-white py-3 px-6 rounded-full font-bold hover:bg-[#0284C7] transition-all flex items-center justify-center space-x-2">
                <i className="fa-solid fa-download text-sm"></i>
                <span>TÉLÉCHARGER PDF</span>
              </button>
              <button className="flex-1 bg-[#F59E0B] text-white py-3 px-6 rounded-full font-bold hover:bg-[#D97706] transition-all flex items-center justify-center space-x-2">
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
