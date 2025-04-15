
import React from 'react';
import { Link } from 'react-router-dom';
import { Apple, Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center mb-4">
              <Apple className="h-6 w-6 text-matrix-green" />
              <span className="ml-2 text-xl font-bold text-white">Apple Matrix</span>
            </Link>
            <p className="text-sm text-gray-400 mb-4">
              Место, где встречаются инновации Apple и цифровая эстетика.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-matrix-green transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-matrix-green transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-matrix-green transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-matrix-green transition-colors duration-300">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Категории</h3>
            <ul className="space-y-2">
              <li><Link to="/iphone" className="text-gray-400 hover:text-matrix-green">iPhone</Link></li>
              <li><Link to="/mac" className="text-gray-400 hover:text-matrix-green">Mac</Link></li>
              <li><Link to="/ipad" className="text-gray-400 hover:text-matrix-green">iPad</Link></li>
              <li><Link to="/watch" className="text-gray-400 hover:text-matrix-green">Watch</Link></li>
              <li><Link to="/accessories" className="text-gray-400 hover:text-matrix-green">Аксессуары</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Информация</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-matrix-green">О нас</Link></li>
              <li><Link to="/delivery" className="text-gray-400 hover:text-matrix-green">Доставка</Link></li>
              <li><Link to="/payment" className="text-gray-400 hover:text-matrix-green">Оплата</Link></li>
              <li><Link to="/warranty" className="text-gray-400 hover:text-matrix-green">Гарантия</Link></li>
              <li><Link to="/contacts" className="text-gray-400 hover:text-matrix-green">Контакты</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Контакты</h3>
            <address className="not-italic text-gray-400">
              <p className="mb-2">г. Москва, ул. Технологическая, 42</p>
              <p className="mb-2">
                <a href="tel:+74951234567" className="hover:text-matrix-green">+7 (495) 123-45-67</a>
              </p>
              <p className="mb-2">
                <a href="mailto:info@applematrix.ru" className="hover:text-matrix-green">info@applematrix.ru</a>
              </p>
              <p>Ежедневно с 10:00 до 22:00</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">© 2023 Apple Matrix. Все права защищены.</p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6 text-sm">
              <li><Link to="/terms" className="text-gray-500 hover:text-matrix-green">Условия использования</Link></li>
              <li><Link to="/privacy" className="text-gray-500 hover:text-matrix-green">Конфиденциальность</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
