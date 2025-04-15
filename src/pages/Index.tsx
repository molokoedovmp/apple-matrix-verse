
import React, { useState, useEffect } from 'react';
import MatrixRain from '../components/ui/MatrixRain';
import Hero from '../components/home/Hero';
import FeaturedProducts from '../components/home/FeaturedProducts';
import Categories from '../components/home/Categories';
import InnovationSection from '../components/home/InnovationSection';
import Navbar from '../components/navigation/Navbar';
import Footer from '../components/ui/Footer';

const Index = () => {
  const [isInitialized, setIsInitialized] = useState(false);
  
  useEffect(() => {
    // Симуляция инициализации системы
    setTimeout(() => {
      setIsInitialized(true);
    }, 500);
  }, []);
  
  return (
    <div className="overflow-x-hidden bg-gradient-to-b from-black via-matrix-dark to-black">
      {/* Улучшенный эффект цифрового дождя с настройками для более интересного визуала */}
      <MatrixRain 
        density={25} 
        speed={1.8} 
        opacity={0.08} 
        color="#00FF41" 
      />
      
      {/* Основной контент */}
      <div className={`transition-opacity duration-1000 ${isInitialized ? 'opacity-100' : 'opacity-0'}`}>
        <Navbar />
        <div id="top"></div>
        <Hero />
        <FeaturedProducts />
        <Categories />
        <InnovationSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
