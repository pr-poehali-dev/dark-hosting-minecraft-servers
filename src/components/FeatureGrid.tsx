
import React from 'react';
import Icon from '@/components/ui/icon';

const features = [
  {
    icon: 'Zap',
    title: 'Мгновенный запуск',
    description: 'Создайте сервер и начните играть буквально через 60 секунд после оплаты',
    color: 'text-yellow-400'
  },
  {
    icon: 'Shield',
    title: 'Мощная защита',
    description: 'Встроенная защита от DDoS-атак до 800 Гбит/с обеспечивает бесперебойную работу',
    color: 'text-minecraft-accent'
  },
  {
    icon: 'LayoutGrid',
    title: 'Простая панель управления',
    description: 'Интуитивный интерфейс позволяет управлять сервером без технических знаний',
    color: 'text-blue-400'
  },
  {
    icon: 'FlaskConical',
    title: 'Все версии Minecraft',
    description: 'Поддержка всех популярных версий игры, включая модификации и плагины',
    color: 'text-minecraft-green'
  },
  {
    icon: 'Save',
    title: 'Автоматические бэкапы',
    description: 'Регулярное резервное копирование защитит ваши миры от потери данных',
    color: 'text-orange-400'
  },
  {
    icon: 'Cpu',
    title: 'Мощное оборудование',
    description: 'Серверы на базе Intel Xeon E5 и NVMe SSD для плавной игры без лагов',
    color: 'text-red-400'
  },
  {
    icon: 'Wrench',
    title: 'Гибкая настройка',
    description: 'Легко настраивайте плагины, модификации и параметры игры через панель',
    color: 'text-purple-400'
  },
  {
    icon: 'Users',
    title: 'Поддержка 24/7',
    description: 'Наша команда всегда готова помочь с любыми вопросами по настройке и управлению',
    color: 'text-teal-400'
  }
];

const FeatureGrid = () => {
  return (
    <section className="py-20 bg-minecraft-dark relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute left-1/4 bottom-0 w-96 h-96 bg-minecraft-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute right-1/4 top-20 w-80 h-80 bg-minecraft-accent/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Почему выбирают наш хостинг</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Создайте идеальный игровой сервер с нашими инструментами и возможностями, 
            которые делают управление простым и удобным
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-minecraft-gray/10 border border-minecraft-gray/30 rounded-xl p-6 hover-effect hover:border-minecraft-accent/50"
            >
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center bg-minecraft-gray/20 mb-4`}>
                <Icon name={feature.icon} className={feature.color} size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-white/70">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 bg-minecraft-gray/10 border border-minecraft-gray/30 rounded-xl p-8 lg:p-10 max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-6 lg:gap-10">
            <div className="w-20 h-20 bg-minecraft-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
              <Icon name="MessageSquareText" className="text-minecraft-accent" size={32} />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">Готовы начать свое приключение?</h3>
              <p className="text-white/70 mb-6">
                Присоединяйтесь к тысячам игроков, которые уже создали свои миры на нашей платформе.
                Запуск вашего первого сервера займет всего несколько минут!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#" className="inline-flex items-center justify-center bg-minecraft-accent hover:bg-minecraft-accent/80 text-white px-6 py-3 rounded-lg font-medium hover-effect">
                  Попробовать бесплатно
                </a>
                <a href="#" className="inline-flex items-center justify-center border border-minecraft-gray/50 hover:border-white/50 text-white px-6 py-3 rounded-lg font-medium hover-effect">
                  Узнать больше
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
