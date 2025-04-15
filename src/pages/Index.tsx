
import React from 'react';
import MatrixRain from '../components/ui/MatrixRain';
import Hero from '../components/home/Hero';
import FeaturedProducts from '../components/home/FeaturedProducts';
import Categories from '../components/home/Categories';
import InnovationSection from '../components/home/InnovationSection';
import Navbar from '../components/navigation/Navbar';
import Footer from '../components/ui/Footer';

const Index = () => {
  return (
    <div className="overflow-x-hidden">
      <MatrixRain />
      <Navbar />
      <Hero />
      <FeaturedProducts />
      <Categories />
      <InnovationSection />
      <Footer />
    </div>
  );
};

export default Index;
