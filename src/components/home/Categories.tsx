
import React from 'react';
import { useNavigate } from 'react-router-dom';

const categories = [
  {
    id: 'iphone',
    name: 'iPhone',
    image: 'https://www.apple.com/v/iphone/home/bs/images/overview/hero/hero_iphone_14__de41900yuggi_large.jpg'
  },
  {
    id: 'mac',
    name: 'Mac',
    image: 'https://www.apple.com/v/mac/home/bp/images/overview/compare/compare_mba_m2__ct4sjdlgdoqi_large.jpg'
  },
  {
    id: 'ipad',
    name: 'iPad',
    image: 'https://www.apple.com/v/ipad/home/cd/images/overview/hero/ipad_pro_hero__bh3eq6sqfjw2_large.jpg'
  },
  {
    id: 'watch',
    name: 'Watch',
    image: 'https://www.apple.com/v/apple-watch-series-8/b/images/overview/hero/hero_static__c9d1bk9frtua_large.jpg'
  }
];

const Categories = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white">
          Каталог <span className="text-matrix-green">устройств</span>
        </h2>
        <p className="text-gray-400 mb-12">Выберите категорию продуктов</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div 
              key={category.id}
              className="relative h-80 group cursor-pointer overflow-hidden rounded-lg border border-white/10 hover:border-matrix-green/50 transition-all duration-300"
              onClick={() => navigate(`/${category.id}`)}
            >
              <img 
                src={category.image} 
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-6">
                <h3 className="text-2xl font-bold text-white group-hover:text-matrix-green transition-colors duration-300">
                  {category.name}
                </h3>
                <div className="w-0 h-0.5 bg-matrix-green transition-all duration-500 group-hover:w-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
