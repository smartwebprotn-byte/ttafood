
import React, { useState, useEffect, useCallback, useRef } from 'react';

const Hero: React.FC = () => {
  const slides = [
    {
      url: "https://source.unsplash.com/featured/?gelato-display-case,professional",
      title: "Excellence Italienne",
      subtitle: "Vitrines CLABO",
      duration: 5000
    },
    {
      url: "https://source.unsplash.com/featured/?ice-cream-machine,industrial",
      title: "Innovation ICETEAM",
      subtitle: "Turbines & Pasteurisateurs",
      duration: 5000
    },
    {
      url: "https://source.unsplash.com/featured/?blast-freezer,commercial",
      title: "Précision GEMM",
      subtitle: "Blast Chillers Premium",
      duration: 5000
    },
    {
      url: "https://source.unsplash.com/featured/?gelato,colorful",
      title: "Gelato Perfetto",
      subtitle: "Depuis 1927 - Cattabriga",
      duration: 5000
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  const timerRef = useRef<number | null>(null);
  const startTimeRef = useRef<number>(Date.now());

  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    setProgress(0);
    startTimeRef.current = Date.now();
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setProgress(0);
    startTimeRef.current = Date.now();
  };

  useEffect(() => {
    if (!isPlaying) {
        if (timerRef.current) cancelAnimationFrame(timerRef.current);
        return;
    }

    const animate = () => {
        const now = Date.now();
        const elapsed = now - startTimeRef.current;
        const currentDuration = slides[currentIndex].duration;
        const newProgress = (elapsed / currentDuration) * 100;

        if (newProgress >= 100) {
            nextSlide();
        } else {
            setProgress(newProgress);
            timerRef.current = requestAnimationFrame(animate);
        }
    };

    timerRef.current = requestAnimationFrame(animate);
    return () => {
        if (timerRef.current) cancelAnimationFrame(timerRef.current);
    };
  }, [currentIndex, isPlaying, nextSlide, slides]);

  const mainContentParallax = scrollY * 0.15;

  return (
    <section className="relative w-full h-[220px] md:h-[320px] overflow-hidden bg-black group">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          style={{ transform: `translateY(${mainContentParallax}px)` }}
        >
          <source src="/dist/images/dv.mp4" type="video/mp4" />
        </video>
        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>
        <div className="absolute inset-0 bg-black/10 backdrop-brightness-90"></div>

        {/* CRT / Scanline Effect */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]"></div>
      </div>

      {/* Video Controls UI Overlay */}
      <div className="absolute inset-0 z-10 flex flex-col justify-between p-6 md:p-10">
        {/* Top UI */}
        <div className="flex justify-between items-start">
          <div className="flex items-center space-x-3">
             <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
             <span className="text-white font-black text-[10px] tracking-[0.3em] uppercase opacity-80">LIVE SHOWCASE</span>
          </div>
          <div className="text-white/40 text-[10px] font-mono">
            00:0{currentIndex + 1} / 00:0{slides.length}
          </div>
        </div>

        {/* Center Content */}
        <div className="max-w-4xl">
          <div className={`transition-all duration-700 transform ${isPlaying ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <h2 className="text-white text-4xl md:text-6xl font-black tracking-tighter mb-2 leading-none">
              {slides[currentIndex].title}
            </h2>
            <p className="text-[#0EA5E9] text-sm md:text-xl font-bold tracking-wide uppercase italic opacity-90">
              {slides[currentIndex].subtitle}
            </p>
          </div>
        </div>

        {/* Bottom Video Controls */}
        <div className="w-full space-y-4">
          {/* Progress Bar (Seek Bar) */}
          <div className="relative w-full h-[3px] bg-white/20 rounded-full overflow-hidden cursor-pointer group/seek">
            <div
              className="absolute top-0 left-0 h-full bg-[#0EA5E9] transition-all duration-100 ease-linear shadow-[0_0_10px_#0EA5E9]"
              style={{ width: `${progress}%` }}
            ></div>
            <div
              className="absolute top-1/2 h-4 w-4 bg-white rounded-full -translate-y-1/2 opacity-0 group-hover/seek:opacity-100 transition-opacity"
              style={{ left: `${progress}%`, marginLeft: '-8px' }}
            ></div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="text-white hover:text-[#0EA5E9] transition-colors"
                >
                  <i className={`fa-solid ${isPlaying ? 'fa-pause' : 'fa-play'} text-xl`}></i>
                </button>
                <div className="flex items-center space-x-4">
                    <button onClick={prevSlide} className="text-white/60 hover:text-white transition-colors">
                        <i className="fa-solid fa-backward-step"></i>
                    </button>
                    <button onClick={nextSlide} className="text-white/60 hover:text-white transition-colors">
                        <i className="fa-solid fa-forward-step"></i>
                    </button>
                </div>
                <div className="hidden md:flex items-center space-x-2 text-white/40">
                    <i className="fa-solid fa-volume-high text-xs"></i>
                    <div className="w-16 h-[2px] bg-white/20 rounded-full">
                        <div className="w-2/3 h-full bg-white/60 rounded-full"></div>
                    </div>
                </div>
            </div>

            <div className="flex items-center space-x-4">
                <button className="text-white/40 hover:text-white transition-colors text-xs uppercase font-black tracking-widest">
                    1080p <span className="text-[8px] border border-white/20 px-1 rounded ml-1">HD</span>
                </button>
                <button className="text-white/40 hover:text-white transition-colors">
                    <i className="fa-solid fa-expand text-sm"></i>
                </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
