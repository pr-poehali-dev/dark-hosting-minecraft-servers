
import React from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const HeroSection = () => {
  return (
    <section className="relative pt-28 pb-24 overflow-hidden minecraft-pattern">
      {/* Градиентный эффект сверху */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-minecraft-accent/20 to-transparent"></div>
      
      {/* Декоративные элементы */}
      <div className="absolute -right-20 top-40 w-80 h-80 bg-minecraft-accent/20 rounded-full blur-3xl"></div>
      <div className="absolute -left-20 bottom-20 w-60 h-60 bg-minecraft-accent/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 bg-minecraft-gray/30 px-4 py-2 rounded-full mb-8">
            <div className="w-2 h-2 rounded-full bg-minecraft-green animate-pulse"></div>
            <span className="text-sm font-medium">Новые сервера уже доступны!</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-4xl leading-tight">
            Создайте свой <span className="gradient-text">Minecraft сервер</span> за несколько минут
          </h1>
          
          <p className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl">
            Надёжный и быстрый хостинг с мгновенным запуском, защитой от DDoS и панелью управления 
            для вашего идеального игрового мира
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button size="lg" className="bg-minecraft-accent hover:bg-minecraft-accent/80 text-white px-8 py-6 text-lg glow-effect">
              Создать сервер
              <Icon name="ChevronRight" className="ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/5 text-white px-8 py-6 text-lg">
              <Icon name="PlayCircle" className="mr-2" />
              Видеогайд
            </Button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-4xl">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 flex items-center justify-center bg-minecraft-gray/30 rounded-xl mb-3">
                <Icon name="Zap" size={30} className="text-minecraft-green" />
              </div>
              <h3 className="font-bold text-lg">Моментальный старт</h3>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 flex items-center justify-center bg-minecraft-gray/30 rounded-xl mb-3">
                <Icon name="Shield" size={30} className="text-minecraft-accent" />
              </div>
              <h3 className="font-bold text-lg">DDoS защита</h3>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 flex items-center justify-center bg-minecraft-gray/30 rounded-xl mb-3">
                <Icon name="AreaChart" size={30} className="text-minecraft-green" />
              </div>
              <h3 className="font-bold text-lg">99.9% аптайм</h3>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 flex items-center justify-center bg-minecraft-gray/30 rounded-xl mb-3">
                <Icon name="Headphones" size={30} className="text-minecraft-accent" />
              </div>
              <h3 className="font-bold text-lg">24/7 поддержка</h3>
            </div>
          </div>
        </div>
      </div>
      
      {/* Градиентный эффект снизу */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-minecraft-dark to-transparent"></div>
    </section>
  );
};

export default HeroSection;
