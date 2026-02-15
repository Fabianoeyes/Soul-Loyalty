import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, LayoutGrid } from 'lucide-react';
import { Slide1Problem } from './slides/Slide1Problem';
import { Slide2Solution } from './slides/Slide2Solution';
import { Slide3Experience } from './slides/Slide3Experience';
import { Slide4Result } from './slides/Slide4Result';
import { SlideId } from './types';

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<SlideId>(0);
  const totalSlides = 4;

  const nextSlide = () => {
    setCurrentSlide((prev) => (Math.min(prev + 1, totalSlides - 1) as SlideId));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (Math.max(prev - 1, 0) as SlideId));
  };

  const renderSlide = () => {
    switch (currentSlide) {
      case 0: return <Slide1Problem />;
      case 1: return <Slide2Solution />;
      case 2: return <Slide3Experience />;
      case 3: return <Slide4Result />;
      default: return <Slide1Problem />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 overflow-hidden flex flex-col font-sans selection:bg-purple-500/30">
      {/* Header / Nav Indicator */}
      <header className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center bg-gradient-to-b from-slate-950 to-transparent pointer-events-none">
        <div className="flex items-center gap-2 pointer-events-auto">
          <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold shadow-lg shadow-purple-900/50">S</div>
          <span className="font-bold text-lg tracking-tight">Soul<span className="text-purple-400">Ecosystem</span></span>
        </div>
        
        <div className="flex gap-2 pointer-events-auto bg-slate-900/50 backdrop-blur rounded-full p-1 border border-slate-800">
          {[0, 1, 2, 3].map((idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx as SlideId)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === idx ? 'bg-purple-500 w-8' : 'bg-slate-700 hover:bg-slate-600'
              }`}
            />
          ))}
        </div>
      </header>

      {/* Main Slide Area */}
      <main className="flex-1 relative pt-20 pb-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 0.98, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 1.02, filter: 'blur(10px)' }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="h-full w-full"
          >
            {renderSlide()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer Navigation Controls */}
      <footer className="fixed bottom-0 left-0 right-0 p-6 flex justify-between items-center z-50 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent pointer-events-none">
        <button 
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="pointer-events-auto p-3 rounded-full bg-slate-800/50 hover:bg-slate-700 text-white disabled:opacity-0 transition-all border border-slate-700 backdrop-blur"
        >
          <ChevronLeft />
        </button>

        <span className="text-slate-600 text-xs uppercase tracking-widest font-semibold">
           {currentSlide === 0 && "O Problema"}
           {currentSlide === 1 && "A Solução"}
           {currentSlide === 2 && "A Experiência"}
           {currentSlide === 3 && "Os Resultados"}
        </span>

        <button 
          onClick={nextSlide}
          disabled={currentSlide === totalSlides - 1}
          className="pointer-events-auto p-3 rounded-full bg-purple-600 hover:bg-purple-500 text-white disabled:opacity-0 transition-all shadow-lg shadow-purple-900/50"
        >
          <ChevronRight />
        </button>
      </footer>
    </div>
  );
};

export default App;