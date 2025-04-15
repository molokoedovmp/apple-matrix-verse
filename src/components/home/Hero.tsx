
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const [typewriterText, setTypewriterText] = useState('');
  const fullText = 'Погрузитесь в мир технологий';
  
  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypewriterText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, 100);
    
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Фоновый градиент */}
      <div className="absolute inset-0 bg-gradient-radial from-black to-matrix-dark z-0"></div>
      
      {/* Фоновая сетка */}
      <div 
        className="absolute inset-0 bg-grid-pattern opacity-20 bg-[size:50px_50px] z-0"
        style={{ backgroundSize: '40px 40px' }}
      ></div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="font-sans text-4xl md:text-6xl font-bold mb-6 text-white opacity-0 animate-fade-in">
            Apple
            <span className="text-matrix-green ml-2 glowing-text">Matrix</span>
          </h1>
          
          <p className="text-xl md:text-2xl font-light text-gray-300 mb-10">
            {typewriterText}
            <span className="animate-pulse ml-1">|</span>
          </p>
          
          <div className="flex flex-col md:flex-row justify-center gap-6 mb-12">
            <Link to="/catalog" className="matrix-button text-lg">
              Каталог
            </Link>
            <Link to="/mac" className="apple-button text-lg">
              Новый Mac
            </Link>
          </div>
          
          <div className="mt-16 animate-bounce">
            <a href="#featured" className="text-gray-400 hover:text-white transition-colors duration-300">
              <ChevronDown className="mx-auto" size={32} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
