
import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../components/navigation/Navbar';
import Footer from '../components/ui/Footer';
import MatrixRain from '../components/ui/MatrixRain';
import { 
  Calendar, 
  Code2, 
  Cpu, 
  GraduationCap, 
  Layers, 
  Lightbulb, 
  ShieldCheck, 
  Users 
} from 'lucide-react';

const About = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const timelineItems = [
    {
      year: 1976,
      title: "Основание Apple",
      description: "Стив Джобс, Стив Возняк и Рональд Уэйн основывают компанию Apple Computer.",
      icon: Users
    },
    {
      year: 1984,
      title: "Выпуск Macintosh",
      description: "Apple представляет Macintosh — первый массовый персональный компьютер с графическим пользовательским интерфейсом.",
      icon: Code2
    },
    {
      year: 2001,
      title: "iPod и iTunes",
      description: "Apple выпускает iPod и открывает iTunes Store, революционизируя индустрию цифровой музыки.",
      icon: Layers
    },
    {
      year: 2007,
      title: "Запуск iPhone",
      description: "Стив Джобс представляет iPhone — устройство, изменившее представление о мобильных телефонах.",
      icon: Cpu
    },
    {
      year: 2010,
      title: "Первый iPad",
      description: "Apple создаёт новую категорию устройств, выпустив первый планшет iPad.",
      icon: ShieldCheck
    },
    {
      year: 2015,
      title: "Apple Watch",
      description: "Компания выходит на рынок носимых устройств с Apple Watch.",
      icon: Calendar
    },
    {
      year: 2020,
      title: "Apple Silicon",
      description: "Apple объявляет о переходе Mac на собственные процессоры Apple Silicon.",
      icon: Lightbulb
    },
    {
      year: 2023,
      title: "Инновации продолжаются",
      description: "Apple продолжает задавать тренды в индустрии, выпуская новые революционные продукты.",
      icon: GraduationCap
    }
  ];
  
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden bg-gradient-to-b from-black via-matrix-dark to-black">
      <MatrixRain density={20} speed={1.2} opacity={0.05} color="#00FF41" />
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10 bg-[size:30px_30px]"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className={`text-center max-w-3xl mx-auto transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="font-sans text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                О компании <span className="text-matrix-green">Apple Matrix</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-300 mb-8">
                Мы объединяем лучшие технологии и инновации Apple с уникальным цифровым опытом, 
                создавая революционные продукты на стыке реальности и цифрового мира.
              </p>
              
              <div className="flex justify-center gap-2">
                <span className="inline-block h-1 w-12 bg-matrix-green rounded"></span>
                <span className="inline-block h-1 w-3 bg-matrix-green/60 rounded"></span>
                <span className="inline-block h-1 w-3 bg-matrix-green/40 rounded"></span>
              </div>
            </div>
          </div>
        </section>
        
        {/* Mission Section */}
        <section className="py-16 bg-black/50 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className={`transition-all duration-1000 delay-100 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                <h2 className="text-3xl font-bold mb-6 text-white">Наша <span className="text-matrix-green">миссия</span></h2>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  В Apple Matrix мы стремимся размыть границы между реальным и цифровым мирами, 
                  создавая продукты, которые не просто работают — они вдохновляют, удивляют и открывают 
                  новые горизонты возможностей.
                </p>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Мы верим, что технологии должны расширять человеческий потенциал, делать жизнь проще, 
                  интереснее и продуктивнее. Каждое наше устройство — это шаг в будущее, где технологии 
                  и человек существуют в гармонии.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mt-8">
                  {["Инновации", "Качество", "Дизайн", "Опыт"].map((value, i) => (
                    <div key={i} className="bg-matrix-green/5 border border-matrix-green/20 rounded-lg p-4 hover:bg-matrix-green/10 transition-colors">
                      <h3 className="text-matrix-green font-medium mb-2">{value}</h3>
                      <div className="w-12 h-1 bg-matrix-green/30 rounded"></div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className={`relative transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                <div className="aspect-square rounded-xl overflow-hidden shadow-2xl shadow-matrix-green/10 border border-white/10 relative">
                  <img 
                    src="https://www.apple.com/leadership/images/bio/tim-cook.jpg" 
                    alt="Наша миссия" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  
                  {/* Декоративные элементы */}
                  <div className="absolute bottom-0 left-0 w-full p-6">
                    <div className="flex justify-between items-end">
                      <div>
                        <h4 className="text-white font-medium mb-1">Тим Кук</h4>
                        <p className="text-matrix-green text-sm">CEO, Apple</p>
                      </div>
                      <div className="text-right">
                        <p className="text-white/70 text-xs font-mono">VS.2023.04</p>
                        <p className="text-matrix-green/70 text-xs font-mono">MATRIX</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Декоративный фоновый элемент */}
                <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full border border-matrix-green/30 rounded-xl"></div>
              </div>
            </div>
          </div>
        </section>
        
        {/* History Timeline */}
        <section className="py-20 relative">
          <div className="absolute inset-y-0 left-1/2 w-px bg-matrix-green/20 transform -translate-x-1/2"></div>
          
          <div className="container mx-auto px-4 relative">
            <h2 className="text-3xl font-bold mb-10 text-center text-white">
              История <span className="text-matrix-green">инноваций</span>
            </h2>
            
            <div className="space-y-16">
              {timelineItems.map((item, index) => {
                const isEven = index % 2 === 0;
                return (
                  <div key={index} className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
                    <div className={`w-full md:w-5/12 ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-all duration-700`} 
                         style={{ transitionDelay: `${index * 150}ms` }}>
                      <div className={`bg-black/40 backdrop-blur-sm border border-white/10 p-6 rounded-lg 
                                      ${isEven ? 'md:mr-8' : 'md:ml-8'} hover:border-matrix-green/30 transition-colors`}>
                        <div className="flex items-start mb-3">
                          <div className="bg-matrix-green/10 rounded-full p-2 mr-3 text-matrix-green">
                            <item.icon size={20} />
                          </div>
                          <div>
                            <h3 className="text-white font-medium">{item.title}</h3>
                            <p className="text-matrix-green text-sm">{item.year}</p>
                          </div>
                        </div>
                        <p className="text-gray-400">{item.description}</p>
                      </div>
                    </div>
                    
                    <div className="relative my-4 md:my-0 flex items-center justify-center">
                      <div className="h-12 w-12 rounded-full border-4 border-matrix-dark bg-black flex items-center justify-center z-10">
                        <div className="h-4 w-4 rounded-full bg-matrix-green pulse-glow"></div>
                      </div>
                      <div className="absolute h-px w-8 bg-matrix-green/40 left-1/2 md:hidden"></div>
                    </div>
                    
                    <div className="w-full md:w-5/12 md:opacity-0"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="py-20 bg-black/30 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-3 text-white">
                Наша <span className="text-matrix-green">команда</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Профессионалы, объединенные страстью к технологиям и инновациям
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  name: "Александр Иванов", 
                  position: "Генеральный директор",
                  image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
                },
                {
                  name: "Екатерина Смирнова", 
                  position: "Технический директор",
                  image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
                },
                {
                  name: "Михаил Петров", 
                  position: "Креативный директор",
                  image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
                },
                {
                  name: "Анна Козлова", 
                  position: "Руководитель продаж",
                  image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
                }
              ].map((member, i) => (
                <div 
                  key={i}
                  className={`bg-black/50 border border-white/10 rounded-lg overflow-hidden hover:border-matrix-green/30 
                              transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-matrix-green/10
                              ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${i * 150 + 200}ms` }}
                >
                  <div className="relative">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="text-white font-medium mb-1">{member.name}</h3>
                    <p className="text-matrix-green text-sm">{member.position}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
