import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/navigation/Navbar';
import Footer from '../components/ui/Footer';
import { useCart } from '../hooks/useCart';
import { Trash2, Plus, Minus, ArrowLeft, ShoppingBag } from 'lucide-react';
import { toast } from '../hooks/use-toast';

const Cart = () => {
  const { items, removeFromCart, updateQuantity, clearCart, getTotalPrice } = useCart();
  const navigate = useNavigate();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  
  const handleRemoveItem = (id: number) => {
    removeFromCart(id);
    toast({
      title: "Товар удален из корзины",
      description: "Товар был успешно удален из корзины",
    });
  };
  
  const handleUpdateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    updateQuantity(id, newQuantity);
  };
  
  const handleCheckout = () => {
    setIsCheckingOut(true);
    // Имитация процесса оформления заказа
    setTimeout(() => {
      toast({
        title: "Заказ оформлен",
        description: "Ваш заказ успешно оформлен! Мы свяжемся с вами в ближайшее время.",
      });
      clearCart();
      navigate('/');
      setIsCheckingOut(false);
    }, 2000);
  };
  
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 pt-24 pb-8">
        {/* Кнопка назад */}
        <button 
          onClick={() => navigate(-1)}
          className="inline-flex items-center px-4 py-2 bg-matrix-green/10 border border-matrix-green/30 rounded-md text-matrix-green hover:bg-matrix-green/20 transition-colors mb-6"
        >
          <ArrowLeft size={18} className="mr-2" />
          Вернуться назад
        </button>
        
        <h1 className="text-3xl font-bold text-white mb-8">Корзина</h1>
        
        {items.length === 0 ? (
          <div className="bg-black/30 backdrop-blur-sm rounded-lg border border-white/10 p-8 text-center">
            <ShoppingBag size={64} className="mx-auto mb-4 text-gray-500" />
            <h2 className="text-2xl text-white mb-4">Ваша корзина пуста</h2>
            <p className="text-gray-400 mb-6">Добавьте товары в корзину, чтобы оформить заказ</p>
            <Link to="/catalog" className="inline-block bg-matrix-green text-black px-6 py-3 rounded-md hover:bg-matrix-green/90 transition-colors">
              Перейти в каталог
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-black/30 backdrop-blur-sm rounded-lg border border-white/10 p-6">
                <div className="space-y-6">
                  {items.map((item) => (
                    <div key={item.id} className="flex flex-col sm:flex-row items-start sm:items-center border-b border-gray-800 pb-6">
                      <div className="w-24 h-24 bg-black/50 rounded-lg overflow-hidden flex-shrink-0 mb-4 sm:mb-0">
                        <img 
                          src={item.image_url} 
                          alt={item.name} 
                          className="w-full h-full object-contain p-2"
                        />
                      </div>
                      
                      <div className="flex-1 sm:ml-6">
                        <Link to={`/product/${item.id}`} className="text-lg font-medium text-white hover:text-matrix-green transition-colors">
                          {item.name}
                        </Link>
                        
                        {item.memory && (
                          <p className="text-gray-400 text-sm mt-1">Объем памяти: {item.memory}</p>
                        )}
                        
                        <div className="flex flex-wrap items-center justify-between mt-4">
                          <div className="flex items-center space-x-2 mb-4 sm:mb-0">
                            <button 
                              onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                              className="p-1 rounded-md bg-black/50 border border-gray-700 text-gray-400 hover:text-white hover:border-gray-500 transition-colors"
                            >
                              <Minus size={16} />
                            </button>
                            
                            <span className="text-white w-8 text-center">{item.quantity}</span>
                            
                            <button 
                              onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                              className="p-1 rounded-md bg-black/50 border border-gray-700 text-gray-400 hover:text-white hover:border-gray-500 transition-colors"
                            >
                              <Plus size={16} />
                            </button>
                          </div>
                          
                          <div className="flex items-center space-x-4">
                            <span className="text-white font-medium">
                              {(item.price * item.quantity).toLocaleString('ru-RU')} ₽
                            </span>
                            
                            <button 
                              onClick={() => handleRemoveItem(item.id)}
                              className="p-2 rounded-md text-gray-400 hover:text-red-500 transition-colors"
                            >
                              <Trash2 size={18} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-black/30 backdrop-blur-sm rounded-lg border border-white/10 p-6 sticky top-24">
                <h2 className="text-xl font-bold text-white mb-6">Итого</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Товары ({items.length}):</span>
                    <span className="text-white">{getTotalPrice().toLocaleString('ru-RU')} ₽</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-400">Доставка:</span>
                    <span className="text-white">Бесплатно</span>
                  </div>
                  
                  <div className="border-t border-gray-800 pt-4 flex justify-between">
                    <span className="text-white font-medium">Итого к оплате:</span>
                    <span className="text-white font-bold">{getTotalPrice().toLocaleString('ru-RU')} ₽</span>
                  </div>
                </div>
                
                <button
                  onClick={handleCheckout}
                  disabled={isCheckingOut}
                  className="w-full bg-matrix-green text-black py-3 rounded-md flex items-center justify-center font-medium hover:bg-matrix-green/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isCheckingOut ? (
                    <>
                      <span className="mr-2">Оформление...</span>
                      <div className="animate-spin h-4 w-4 border-2 border-black border-t-transparent rounded-full"></div>
                    </>
                  ) : (
                    'Оформить заказ'
                  )}
                </button>
                
                <button
                  onClick={clearCart}
                  className="w-full mt-4 bg-transparent border border-gray-700 text-gray-400 py-2 rounded-md hover:text-white hover:border-gray-500 transition-colors"
                >
                  Очистить корзину
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Cart; 