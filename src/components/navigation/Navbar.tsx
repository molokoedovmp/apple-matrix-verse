
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingCart, Apple } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Apple className="h-8 w-8 text-white" />
              <span className="ml-2 text-xl font-bold text-white hidden md:block">Apple Matrix</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link to="/" className="nav-item">Главная</Link>
              <Link to="/catalog" className="nav-item">Каталог</Link>
              <Link to="/iphone" className="nav-item">iPhone</Link>
              <Link to="/mac" className="nav-item">Mac</Link>
              <Link to="/ipad" className="nav-item">iPad</Link>
              <Link to="/about" className="nav-item">О нас</Link>
              <Link to="/cart" className="nav-item">
                <ShoppingCart className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Мобильное меню */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-matrix-green/10 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Главная
            </Link>
            <Link 
              to="/catalog" 
              className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-matrix-green/10 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Каталог
            </Link>
            <Link 
              to="/iphone" 
              className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-matrix-green/10 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              iPhone
            </Link>
            <Link 
              to="/mac" 
              className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-matrix-green/10 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Mac
            </Link>
            <Link 
              to="/ipad" 
              className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-matrix-green/10 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              iPad
            </Link>
            <Link 
              to="/about" 
              className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-matrix-green/10 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              О нас
            </Link>
            <Link 
              to="/cart" 
              className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-matrix-green/10 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Корзина
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
