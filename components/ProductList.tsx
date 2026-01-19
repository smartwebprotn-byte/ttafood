
import React, { useMemo, useState } from 'react';
import { Product } from '../types';
import ProductCarousel from './ProductCarousel';

interface ProductListProps {
  products: Product[];
  onOpenSpecs: (product: Product) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, onOpenSpecs }) => {
  const [selectedProductIndex, setSelectedProductIndex] = useState<number | null>(null);

  // We use a unique key for the container based on the list of products 
  // to force a re-trigger of animations when the list changes.
  const containerKey = useMemo(() => products.map(p => p.id).join('-'), [products]);

  return (
    <div key={containerKey} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 pb-8 px-4 sm:px-0">
      {products.map((product, index) => (
        <div
          key={product.id}
          className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group animate-card-entry relative overflow-hidden"
          style={{ animationDelay: `${index * 80}ms` }}
        >
          <div className="relative h-48 sm:h-64 overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-full text-[10px] font-black text-gray-800 shadow-sm border border-gray-100 tracking-wider">
              {product.brand}
            </div>
            {/* Hover overlay for better depth */}
            <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          <div className="p-4 sm:p-7 pb-24 sm:pb-28">
            <div className="flex justify-between items-start mb-2 sm:mb-3">
              <h4 className="text-base sm:text-xl font-extrabold text-gray-900 tracking-tight group-hover:text-[#0EA5E9] transition-colors">
                {product.name}
              </h4>
              <span className="text-[9px] sm:text-[10px] text-[#0EA5E9] bg-blue-50 px-1.5 sm:px-2 py-0.5 rounded-md uppercase tracking-widest font-black">
                {product.category}
              </span>
            </div>

            <p className="text-gray-500 text-xs sm:text-sm line-clamp-2 font-medium leading-relaxed">
              {product.specs.description}
            </p>
          </div>

          {/* Floating action buttons with enhanced gradient and sticky positioning */}
          <div className="sticky bottom-0 left-0 right-0 p-4 sm:p-7 pt-10 sm:pt-12 bg-gradient-to-t from-white from-60% via-white/95 to-transparent shadow-[0_-8px_16px_-4px_rgba(255,255,255,0.9)] z-10">
            <div className="flex items-center justify-between">
              <button
                onClick={() => onOpenSpecs(product)}
                className="flex items-center space-x-1.5 sm:space-x-2 text-[#0EA5E9] font-black text-[9px] sm:text-[10px] tracking-[0.15em] hover:text-[#0284C7] hover:scale-105 transition-all group/btn">
                <span>FICHE TECHNIQUE</span>
                <i className="fa-solid fa-arrow-right-long text-[9px] sm:text-[10px] transform group-hover/btn:translate-x-1 transition-transform"></i>
              </button>

              <div
                onClick={() => setSelectedProductIndex(index)}
                className="h-9 w-9 sm:h-5 sm:w-5 bg-gray-50 rounded-xl flex items-center justify-center text-gray-400 hover:bg-[#0EA5E9] hover:text-white hover:scale-110 transition-all cursor-pointer shadow-sm">
                <i className="fa-solid fa-plus text-[9px] sm:text-[10px]"></i>
              </div>
            </div>
          </div>
        </div>
      ))}
      {products.length === 0 && (
        <div className="col-span-full py-24 text-center animate-slide-up-fade">
          <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
            <i className="fa-solid fa-magnifying-glass text-gray-300 text-xl"></i>
          </div>
          <h3 className="text-gray-900 font-bold text-lg mb-2">Aucun produit trouvé</h3>
          <p className="text-gray-400 text-sm max-w-xs mx-auto">
            Désolé, nous n'avons pas encore de machines disponibles dans cette catégorie.
          </p>
        </div>
      )}

      {selectedProductIndex !== null && (
        <ProductCarousel
          products={products}
          initialIndex={selectedProductIndex}
          onClose={() => setSelectedProductIndex(null)}
        />
      )}
    </div>
  );
};

export default ProductList;
