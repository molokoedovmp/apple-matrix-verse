
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/navigation/Navbar';
import Footer from '../components/ui/Footer';
import MatrixRain from '../components/ui/MatrixRain';
import { Filter, Search, X } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
}

// Временные данные продуктов
const allProducts: Product[] = [
  {
    id: 'iphone-14-pro',
    name: 'iPhone 14 Pro',
    category: 'iPhone',
    price: 129990,
    image: 'https://www.apple.com/v/iphone-14-pro/c/images/overview/hero/hero_endframe__dtzvajyextyu_large.jpg',
  },
  {
    id: 'iphone-14',
    name: 'iPhone 14',
    category: 'iPhone',
    price: 99990,
    image: 'https://www.apple.com/v/iphone-14/i/images/overview/hero/hero_iphone_14__de41900yuggi_large.jpg',
  },
  {
    id: 'macbook-pro-14',
    name: 'MacBook Pro 14"',
    category: 'Mac',
    price: 189990,
    image: 'https://www.apple.com/v/mac/home/bp/images/overview/hero/macbook_pro_14_16__dmqm5594oyau_large.jpg',
  },
  {
    id: 'macbook-air-m2',
    name: 'MacBook Air M2',
    category: 'Mac',
    price: 149990,
    image: 'https://www.apple.com/v/macbook-air-m2/b/images/overview/hero/hero_mba__rh3ancbuky6q_large.jpg',
  },
  {
    id: 'ipad-pro',
    name: 'iPad Pro',
    category: 'iPad',
    price: 109990,
    image: 'https://www.apple.com/v/ipad-pro/al/images/overview/hero/hero__fexbvbcv5fle_large.jpg',
  },
  {
    id: 'ipad-air',
    name: 'iPad Air',
    category: 'iPad',
    price: 79990,
    image: 'https://www.apple.com/v/ipad-air/r/images/overview/hero/hero__fkjvzyuqdnuu_large.jpg',
  },
  {
    id: 'apple-watch-series-8',
    name: 'Apple Watch Series 8',
    category: 'Watch',
    price: 49990,
    image: 'https://www.apple.com/v/apple-watch-series-8/c/images/overview/hero/hero_static__c9d1bk9frtua_large.jpg',
  },
  {
    id: 'apple-watch-ultra',
    name: 'Apple Watch Ultra',
    category: 'Watch',
    price: 79990,
    image: 'https://www.apple.com/v/apple-watch-ultra/c/images/overview/hero/hero_static__fmaio9kz47mm_large.jpg',
  }
];

const categories = ['Все', 'iPhone', 'Mac', 'iPad', 'Watch'];

const Catalog = () => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(allProducts);
  const [activeCategory, setActiveCategory] = useState('Все');
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const navigate = useNavigate();

  const filterProducts = (category: string) => {
    setActiveCategory(category);
    if (category === 'Все') {
      setFilteredProducts(allProducts.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      ));
    } else {
      setFilteredProducts(allProducts.filter(product => 
        product.category === category && 
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      ));
    }
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
    
    if (activeCategory === 'Все') {
      setFilteredProducts(allProducts.filter(product => 
        product.name.toLowerCase().includes(term.toLowerCase())
      ));
    } else {
      setFilteredProducts(allProducts.filter(product => 
        product.category === activeCategory && 
        product.name.toLowerCase().includes(term.toLowerCase())
      ));
    }
  };

  const clearSearch = () => {
    setSearchTerm('');
    filterProducts(activeCategory);
  };

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <MatrixRain />
      <Navbar />
      
      <main className="flex-grow pt-24 pb-12 bg-matrix-dark">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Каталог <span className="text-matrix-green">продукции</span>
          </h1>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearch}
                placeholder="Поиск продукции..."
                className="w-full pl-10 pr-10 py-2 bg-black/50 border border-gray-700 rounded-md focus:outline-none focus:border-matrix-green text-white"
              />
              {searchTerm && (
                <button 
                  onClick={clearSearch} 
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  <X size={18} />
                </button>
              )}
            </div>
            
            <button 
              onClick={() => setShowFilters(!showFilters)} 
              className="flex items-center gap-2 text-gray-300 md:hidden"
            >
              <Filter size={20} />
              Фильтры
            </button>
            
            <div className={`${showFilters ? 'flex' : 'hidden'} md:flex flex-wrap gap-2`}>
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-1.5 rounded-md transition-colors duration-300 ${
                    activeCategory === category
                      ? 'bg-matrix-green text-black'
                      : 'bg-black/50 text-gray-300 hover:bg-black/80'
                  }`}
                  onClick={() => filterProducts(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <div 
                  key={product.id}
                  className="product-card group cursor-pointer"
                  onClick={() => navigate(`/product/${product.id}`)}
                >
                  <div className="relative overflow-hidden rounded-lg mb-4">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <div className="px-2">
                    <p className="text-sm text-matrix-green mb-1">{product.category}</p>
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-matrix-green transition-colors duration-300">{product.name}</h3>
                    
                    <span className="text-white font-semibold">{product.price.toLocaleString('ru-RU')} ₽</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h2 className="text-2xl text-white mb-2">Товары не найдены</h2>
              <p className="text-gray-400">Попробуйте изменить параметры поиска</p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Catalog;
