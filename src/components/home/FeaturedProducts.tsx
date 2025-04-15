
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
}

const featuredProducts: Product[] = [
  {
    id: 'iphone-14-pro',
    name: 'iPhone 14 Pro',
    category: 'iPhone',
    price: 129990,
    image: 'https://www.apple.com/v/iphone-14-pro/c/images/overview/hero/hero_endframe__dtzvajyextyu_large.jpg',
    description: 'Динамический остров. Всегда включенный дисплей. 48Мп камера.'
  },
  {
    id: 'macbook-pro-14',
    name: 'MacBook Pro 14"',
    category: 'Mac',
    price: 189990,
    image: 'https://www.apple.com/v/mac/home/bp/images/overview/hero/macbook_pro_14_16__dmqm5594oyau_large.jpg',
    description: 'Сверхбыстрые M2 Pro и M2 Max. Невероятная производительность.'
  },
  {
    id: 'ipad-pro',
    name: 'iPad Pro',
    category: 'iPad',
    price: 109990,
    image: 'https://www.apple.com/v/ipad-pro/al/images/overview/hero/hero__fexbvbcv5fle_large.jpg',
    description: 'Суперсила чипа M2. Вместе с впечатляющим дисплеем Liquid Retina XDR.'
  }
];

const FeaturedProducts = () => {
  const navigate = useNavigate();

  return (
    <section id="featured" className="py-20 bg-gradient-to-b from-matrix-dark via-black to-matrix-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white">
          Новые <span className="text-matrix-green">поступления</span>
        </h2>
        <p className="text-gray-400 mb-12">Откройте последние инновации Apple</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <div 
              key={product.id}
              className="product-card group cursor-pointer"
              onClick={() => navigate(`/product/${product.id}`)}
            >
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="px-2">
                <p className="text-sm text-matrix-green mb-1">{product.category}</p>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-matrix-green transition-colors duration-300">{product.name}</h3>
                <p className="text-gray-300 text-sm mb-3">{product.description}</p>
                
                <div className="flex justify-between items-center">
                  <span className="text-white font-semibold">{product.price.toLocaleString('ru-RU')} ₽</span>
                  <button className="text-matrix-green flex items-center text-sm group-hover:underline transition-all duration-300">
                    Подробнее <ArrowRight size={16} className="ml-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
