

import React, { useState, useRef, useEffect, useCallback } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CategoryGrid from './components/CategoryGrid';
import ProductList from './components/ProductList';
import ProductModal from './components/ProductModal';
import BrandsSection from './components/BrandsSection';
import Footer from './components/Footer';
// ChatWidget et WhatsAppButton sont maintenant dans le Header
import { Product } from './types';
import { PRODUCTS } from './constants';

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'category'>('home');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const productSectionRef = useRef<HTMLDivElement>(null);

  const filteredProducts = selectedCategory
    ? PRODUCTS.filter(p => p.category === selectedCategory)
    : PRODUCTS;

  const scrollToProducts = useCallback(() => {
    if (productSectionRef.current) {
      const headerOffset = 180;
      const elementPosition = productSectionRef.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }, []);

  const handleCategorySelect = (id: string) => {
    if (view === 'home') {
      setIsTransitioning(true);
      setTimeout(() => {
        setSelectedCategory(id);
        setView('category');
        setIsTransitioning(false);
      }, 300);
    } else {
      setSelectedCategory(id);
      setTimeout(scrollToProducts, 50);
    }
  };

  useEffect(() => {
    if (view === 'category' && !isTransitioning) {
      const timer = setTimeout(scrollToProducts, 100);
      return () => clearTimeout(timer);
    }
  }, [view, isTransitioning, scrollToProducts]);

  const handleGoHome = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setView('home');
      setSelectedCategory(null);
      setIsTransitioning(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 300);
  };

  const handleOpenModal = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header onGoHome={handleGoHome} />

      <main className="flex-grow">
        <div className={`transition-all duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
          {view === 'home' ? (
            <>
              <Hero />

              <div className="max-w-7xl mx-auto px-6 py-12">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                    <div className="md:order-1">
                      <h3 className="text-5xl font-black text-gray-900 tracking-tighter mb-8 leading-none uppercase">L'Excellence Italienne à votre Service</h3>
                      <p className="text-gray-500 font-medium leading-relaxed mb-10">
                        TTADIS sélectionne rigoureusement les leaders du marché mondial pour vous offrir une fiabilité sans faille et des performances hors normes. Que ce soit pour la pasteurisation, la turbine ou l'exposition, nous avons la solution.
                      </p>
                      <div className="grid grid-cols-2 gap-6">
                         <div className="p-6 bg-white border border-gray-100 rounded-3xl shadow-sm">
                            <span className="text-3xl font-black text-[#0EA5E9] block mb-2">35+</span>
                            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Ans d'expérience</span>
                         </div>
                         <div className="p-6 bg-white border border-gray-100 rounded-3xl shadow-sm">
                            <span className="text-3xl font-black text-[#0EA5E9] block mb-2">24h</span>
                            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Support Technique</span>
                         </div>
                      </div>
                    </div>
                    <div className="relative group md:order-2">
                       <div className="absolute -inset-4 bg-[#0EA5E9]/5 rounded-[3rem] -rotate-2 group-hover:rotate-0 transition-transform duration-700"></div>
                       <img
                          src="/images/g.png"
                          className="relative rounded-[2.5rem] shadow-2xl z-10"
                          alt="Machine Excellence"
                       />
                    </div>
                 </div>
              </div>

              {/* Grille de catégories - Juste au dessous du Hero */}
              <CategoryGrid
                onCategorySelect={handleCategorySelect}
                selectedCategoryId={selectedCategory}
              />

              {/* Section Marques */}
              <BrandsSection />
            </>
          ) : (
            <>
              <CategoryGrid
                onCategorySelect={handleCategorySelect}
                selectedCategoryId={selectedCategory}
              />
              <div className="max-w-7xl mx-auto px-6 py-20" ref={productSectionRef}>
                <nav className="flex items-center space-x-3 text-[10px] font-black uppercase tracking-[0.2em] text-gray-300 mb-12">
                  <button onClick={handleGoHome} className="hover:text-gray-900 transition-colors">ACCUEIL</button>
                  <i className="fa-solid fa-chevron-right text-[8px]"></i>
                  <span className="text-gray-900 tracking-[0.3em]">
                    {selectedCategory ? selectedCategory.replace('-', ' ') : 'TOUS NOS PRODUITS'}
                  </span>
                </nav>

                <div className="flex flex-col mb-16 relative">
                  <div className="absolute -left-10 top-1/2 -translate-y-1/2 w-1.5 h-20 bg-[#0EA5E9] rounded-full hidden lg:block"></div>
                  <span className="text-[#0EA5E9] text-xs font-black tracking-[0.4em] uppercase mb-4 pl-1">Ingénierie de Précision</span>
                  <h2 className="text-5xl md:text-8xl font-black text-gray-900 capitalize tracking-tighter leading-none uppercase">
                    {selectedCategory ? selectedCategory.replace('-', ' ') : 'Nos Solutions'}
                  </h2>
                </div>

                <ProductList
                  products={filteredProducts}
                  onOpenSpecs={handleOpenModal}
                />
              </div>
            </>
          )}
        </div>
      </main>

      <Footer />

      {selectedProduct && (
        <ProductModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          product={selectedProduct}
        />
      )}
    </div>
  );
};

export default App;
