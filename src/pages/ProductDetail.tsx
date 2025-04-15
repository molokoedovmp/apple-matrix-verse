
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/navigation/Navbar';
import Footer from '../components/ui/Footer';
import { ShoppingCart, ChevronLeft, Check, Info } from 'lucide-react';
import { toast } from '../hooks/use-toast';

interface ProductDetails {
  id: string;
  name: string;
  category: string;
  price: number;
  images: string[];
  colors: { name: string; hex: string }[];
  storage: string[];
  description: string;
  features: string[];
  specs: { [key: string]: string };
}

const productDatabase: { [key: string]: ProductDetails } = {
  'iphone-14-pro': {
    id: 'iphone-14-pro',
    name: 'iPhone 14 Pro',
    category: 'iPhone',
    price: 129990,
    images: [
      'https://www.apple.com/v/iphone-14-pro/c/images/overview/hero/hero_endframe__dtzvajyextyu_large.jpg',
      'https://www.apple.com/v/iphone-14-pro/c/images/overview/design/design_startframe__euw7kboik5ue_large.jpg',
      'https://www.apple.com/v/iphone-14-pro/c/images/overview/design/design_dynamic_island__77d3gzgihe2e_large.jpg'
    ],
    colors: [
      { name: 'Космический черный', hex: '#505050' },
      { name: 'Серебристый', hex: '#F5F5F0' },
      { name: 'Золотой', hex: '#F9E8D2' },
      { name: 'Темно-фиолетовый', hex: '#735671' }
    ],
    storage: ['128GB', '256GB', '512GB', '1TB'],
    description: 'iPhone 14 Pro и iPhone 14 Pro Max обладают инновационными технологиями, которые задают новые стандарты iPhone и постоянно переосмысливают сами себя.',
    features: [
      'Динамический остров - уникальный и волшебный способ взаимодействия с iPhone',
      'Всегда включенный экран, благодаря которому новый экран блокировки всегда виден',
      'Основная камера 48МП для потрясающей детализации',
      'Сверхшироеоугольная и телефото камеры высшего уровня'
    ],
    specs: {
      'Дисплей': '6,1" OLED (Pro) или 6,7" OLED (Pro Max)',
      'Процессор': 'A16 Bionic',
      'Основная камера': '48MP, f/1.78',
      'Сверхширокоугольная камера': '12MP, f/2.2',
      'Телефото камера': '12MP, f/2.8',
      'Фронтальная камера': '12MP, f/1.9',
      'Аккумулятор': 'До 23 часов воспроизведения видео',
      'Защита': 'IP68'
    }
  },
  'macbook-pro-14': {
    id: 'macbook-pro-14',
    name: 'MacBook Pro 14"',
    category: 'Mac',
    price: 189990,
    images: [
      'https://www.apple.com/v/mac/home/bp/images/overview/hero/macbook_pro_14_16__dmqm5594oyau_large.jpg',
      'https://www.apple.com/v/macbook-pro-14-and-16/e/images/overview/product_design/tiles/design_keyboard_hw__eg5x4hjy0l6e_large.jpg',
      'https://www.apple.com/v/macbook-pro-14-and-16/e/images/overview/connectivity/ports_1__lc0q6fp1ltmy_large.jpg'
    ],
    colors: [
      { name: 'Космический серый', hex: '#444444' },
      { name: 'Серебристый', hex: '#F1F1F1' }
    ],
    storage: ['512GB', '1TB', '2TB', '4TB', '8TB'],
    description: 'Самый мощный MacBook Pro с невероятно быстрыми чипами M2 Pro или M2 Max. Продвинутая графика, большое количество памяти и выдающееся время автономной работы.',
    features: [
      'Чип M2 Pro или M2 Max для профессиональных задач любой сложности',
      'Невероятно яркий Liquid Retina XDR дисплей с экстремальным динамическим диапазоном',
      'До 96 ГБ унифицированной памяти для работы с большими проектами',
      'До 22 часов автономной работы - лучший показатель в истории Mac'
    ],
    specs: {
      'Дисплей': '14,2" Liquid Retina XDR, 3024×1964, XDR яркость 1600 нит',
      'Процессор': 'Apple M2 Pro или M2 Max',
      'Память': 'До 96GB унифицированной памяти',
      'Хранилище': 'До 8TB SSD',
      'Порты': '3x Thunderbolt 4, HDMI, SDXC, MagSafe 3, 3.5mm',
      'Батарея': 'До 22 часов воспроизведения видео',
      'Вес': '1,6 кг'
    }
  }
};

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<ProductDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedStorage, setSelectedStorage] = useState(0);
  
  useEffect(() => {
    // Имитация загрузки данных с сервера
    const timer = setTimeout(() => {
      if (id && productDatabase[id]) {
        setProduct(productDatabase[id]);
      }
      setLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      toast({
        title: "Товар добавлен в корзину",
        description: `${product.name} (${product.colors[selectedColor].name}, ${product.storage[selectedStorage]})`,
      });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-24 pb-12 flex items-center justify-center">
          <div className="animate-pulse flex flex-col items-center">
            <div className="w-12 h-12 border-4 border-matrix-green border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-4 text-matrix-green">Загрузка информации...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-24 pb-12 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl text-white mb-4">Товар не найден</h2>
            <Link to="/catalog" className="matrix-button">
              <ChevronLeft size={16} className="mr-1 inline" /> Вернуться в каталог
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-12 bg-matrix-dark">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row mb-8 items-center">
            <Link to="/catalog" className="flex items-center text-gray-400 hover:text-matrix-green text-sm mb-4 md:mb-0">
              <ChevronLeft size={16} className="mr-1" /> Назад в каталог
            </Link>
            <nav className="flex items-center ml-auto">
              <Link to="/" className="text-gray-400 hover:text-white text-sm">Главная</Link>
              <span className="mx-2 text-gray-600">/</span>
              <Link to="/catalog" className="text-gray-400 hover:text-white text-sm">Каталог</Link>
              <span className="mx-2 text-gray-600">/</span>
              <span className="text-gray-300 text-sm">{product.name}</span>
            </nav>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Галерея изображений */}
            <div>
              <div className="bg-gradient-to-br from-black to-matrix-dark border border-white/10 rounded-lg overflow-hidden">
                <img 
                  src={product.images[selectedImage]} 
                  alt={product.name} 
                  className="w-full h-auto"
                />
              </div>
              
              <div className="flex mt-4 gap-3">
                {product.images.map((img, index) => (
                  <button 
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative rounded-md overflow-hidden transition-all duration-300 ${
                      selectedImage === index ? 'ring-2 ring-matrix-green' : 'opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt={`${product.name} вид ${index + 1}`} className="w-20 h-20 object-cover" />
                  </button>
                ))}
              </div>
            </div>
            
            {/* Информация о товаре */}
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">{product.name}</h1>
              <p className="text-matrix-green mb-6">{product.category}</p>
              
              <div className="text-3xl font-bold text-white mb-8">{product.price.toLocaleString('ru-RU')} ₽</div>
              
              <div className="mb-6">
                <h3 className="text-white text-lg mb-3">Цвет:</h3>
                <div className="flex flex-wrap gap-3">
                  {product.colors.map((color, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedColor(index)}
                      className={`relative w-10 h-10 rounded-full transition-all duration-200 ${
                        selectedColor === index ? 'ring-2 ring-matrix-green ring-offset-2 ring-offset-matrix-dark' : ''
                      }`}
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                    >
                      {selectedColor === index && (
                        <span className="absolute inset-0 flex items-center justify-center">
                          <Check size={16} className={`text-${color.hex === '#F5F5F0' || color.hex === '#F9E8D2' ? 'black' : 'white'}`} />
                        </span>
                      )}
                    </button>
                  ))}
                </div>
                <p className="text-gray-400 text-sm mt-2">{product.colors[selectedColor].name}</p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-white text-lg mb-3">Объем памяти:</h3>
                <div className="flex flex-wrap gap-3">
                  {product.storage.map((size, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedStorage(index)}
                      className={`px-4 py-2 rounded-md transition-all duration-200 ${
                        selectedStorage === index 
                          ? 'bg-matrix-green text-black' 
                          : 'bg-black/50 text-white border border-gray-700 hover:border-matrix-green'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="mb-8">
                <button 
                  className="w-full bg-matrix-green hover:bg-matrix-green/90 text-black font-medium py-3 px-6 rounded-md transition-all duration-300 flex items-center justify-center"
                  onClick={handleAddToCart}
                >
                  <ShoppingCart className="mr-2" size={20} />
                  Добавить в корзину
                </button>
              </div>
              
              <div className="border border-gray-800 rounded-md p-4 mb-8">
                <p className="text-gray-300 text-sm">{product.description}</p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-white text-lg font-medium">Основные характеристики:</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="text-matrix-green mr-2 mt-1 flex-shrink-0" size={16} />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          {/* Характеристики */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-white mb-6">Технические характеристики</h2>
            <div className="border-t border-gray-800">
              {Object.entries(product.specs).map(([key, value], index) => (
                <div key={index} className={`grid grid-cols-1 md:grid-cols-3 gap-4 py-4 ${index !== Object.entries(product.specs).length - 1 ? 'border-b border-gray-800' : ''}`}>
                  <div className="text-gray-400">{key}</div>
                  <div className="md:col-span-2 text-white">{value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
