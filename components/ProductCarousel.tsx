import React, { useEffect, useCallback } from 'react';
import { Product } from '../types';

interface ProductCarouselProps {
    products: Product[];
    initialIndex: number;
    onClose: () => void;
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({ products, initialIndex, onClose }) => {
    const [currentIndex, setCurrentIndex] = React.useState(initialIndex);
    const [direction, setDirection] = React.useState<'left' | 'right'>('right');
    const [isAnimating, setIsAnimating] = React.useState(false);

    const product = products[currentIndex];

    const handleNext = useCallback(() => {
        if (isAnimating) return;
        setDirection('right');
        setIsAnimating(true);
        setCurrentIndex((prev) => (prev + 1) % products.length);
    }, [isAnimating, products.length]);

    const handlePrev = useCallback(() => {
        if (isAnimating) return;
        setDirection('left');
        setIsAnimating(true);
        setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
    }, [isAnimating, products.length]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight') handleNext();
            if (e.key === 'ArrowLeft') handlePrev();
            if (e.key === 'Escape') onClose();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [handleNext, handlePrev, onClose]);

    // Reset animation state after transition
    useEffect(() => {
        const timer = setTimeout(() => setIsAnimating(false), 500);
        return () => clearTimeout(timer);
    }, [currentIndex]);

    if (!product) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md animate-in fade-in duration-300">
            {/* Close button */}
            <button
                onClick={onClose}
                className="absolute top-6 right-6 z-50 p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all"
            >
                <i className="fa-solid fa-xmark text-2xl"></i>
            </button>

            {/* Navigation Left */}
            <button
                onClick={handlePrev}
                className="absolute left-4 md:left-8 z-40 p-4 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all hidden sm:block"
            >
                <i className="fa-solid fa-chevron-left text-3xl"></i>
            </button>

            {/* Main Content */}
            <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-12 h-[85vh] flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">

                {/* Image Section */}
                <div className="relative w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center">
                    <div
                        key={currentIndex}
                        className={`relative w-full h-full flex items-center justify-center transition-all duration-500 transform
                ${isAnimating
                                ? (direction === 'right' ? '-translate-x-12 opacity-0' : 'translate-x-12 opacity-0')
                                : 'translate-x-0 opacity-100'
                            }`}
                    >
                        <img
                            src={product.image}
                            alt={product.name}
                            className="max-w-full max-h-full object-contain drop-shadow-2xl"
                        />
                    </div>
                </div>

                {/* Info Section */}
                <div
                    key={`info-${currentIndex}`}
                    className={`w-full md:w-1/3 text-white transition-all duration-500 delay-100
             ${isAnimating
                            ? 'opacity-0 translate-y-4'
                            : 'opacity-100 translate-y-0'
                        }`}
                >
                    <div className="mb-4">
                        <span className="text-[#0EA5E9] font-bold tracking-widest text-sm uppercase bg-white/10 px-3 py-1 rounded-full">
                            {product.category}
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
                        {product.name}
                    </h2>

                    <div className="flex items-center space-x-4 mb-8 text-white/60 text-sm font-medium tracking-wide">
                        <span className="border border-white/20 px-3 py-1 rounded">{product.brand}</span>
                    </div>

                    <p className="text-lg text-white/80 leading-relaxed mb-8 border-l-4 border-[#0EA5E9] pl-6">
                        {product.specs.description}
                    </p>

                    <div className="grid grid-cols-2 gap-6 bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
                        <div>
                            <p className="text-xs text-white/40 uppercase tracking-widest mb-1">Capacité</p>
                            <p className="text-xl font-bold">{product.specs.capacity}</p>
                        </div>
                        <div>
                            <p className="text-xs text-white/40 uppercase tracking-widest mb-1">Puissance</p>
                            <p className="text-xl font-bold">{product.specs.power}</p>
                        </div>
                        <div className="col-span-2">
                            <p className="text-xs text-white/40 uppercase tracking-widest mb-1">Dimensions</p>
                            <p className="text-lg font-mono text-white/90">{product.specs.dimensions}</p>
                        </div>
                    </div>
                </div>

            </div>

            {/* Navigation Right */}
            <button
                onClick={handleNext}
                className="absolute right-4 md:right-8 z-40 p-4 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all hidden sm:block"
            >
                <i className="fa-solid fa-chevron-right text-3xl"></i>
            </button>

            {/* Mobile Navigation (Bottom) */}
            <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-8 sm:hidden z-50">
                <button onClick={handlePrev} className="p-4 bg-white/10 rounded-full text-white"><i className="fa-solid fa-arrow-left"></i></button>
                <button onClick={handleNext} className="p-4 bg-white/10 rounded-full text-white"><i className="fa-solid fa-arrow-right"></i></button>
            </div>

        </div>
    );
};

export default ProductCarousel;
