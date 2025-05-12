
import React from 'react';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-minecraft-gray/20 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-minecraft-accent rounded-md flex items-center justify-center">
                <Icon name="Cube" className="text-white" />
              </div>
              <span className="font-montserrat font-bold text-xl">MineHost</span>
            </div>
            <p className="text-white/70 mb-6 max-w-xs">
              Профессиональный хостинг Minecraft серверов с высокой производительностью и надежностью
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-minecraft-gray/30 flex items-center justify-center hover:bg-minecraft-accent/30 transition-colors">
                <Icon name="Facebook" size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-minecraft-gray/30 flex items-center justify-center hover:bg-minecraft-accent/30 transition-colors">
                <Icon name="Twitter" size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-minecraft-gray/30 flex items-center justify-center hover:bg-minecraft-accent/30 transition-colors">
                <Icon name="Instagram" size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-minecraft-gray/30 flex items-center justify-center hover:bg-minecraft-accent/30 transition-colors">
                <Icon name="Youtube" size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-minecraft-gray/30 flex items-center justify-center hover:bg-minecraft-accent/30 transition-colors">
                <Icon name="Discord" size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Хостинг</h3>
            <ul className="space-y-3">
              <li><Link to="/pricing" className="text-white/70 hover:text-white transition-colors">Тарифы</Link></li>
              <li><Link to="/features" className="text-white/70 hover:text-white transition-colors">Возможности</Link></li>
              <li><Link to="/templates" className="text-white/70 hover:text-white transition-colors">Шаблоны</Link></li>
              <li><Link to="/plugins" className="text-white/70 hover:text-white transition-colors">Плагины</Link></li>
              <li><Link to="/versions" className="text-white/70 hover:text-white transition-colors">Версии игры</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Компания</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-white/70 hover:text-white transition-colors">О нас</Link></li>
              <li><Link to="/blog" className="text-white/70 hover:text-white transition-colors">Блог</Link></li>
              <li><Link to="/careers" className="text-white/70 hover:text-white transition-colors">Карьера</Link></li>
              <li><Link to="/contacts" className="text-white/70 hover:text-white transition-colors">Контакты</Link></li>
              <li><Link to="/partners" className="text-white/70 hover:text-white transition-colors">Партнеры</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Поддержка</h3>
            <ul className="space-y-3">
              <li><Link to="/help-center" className="text-white/70 hover:text-white transition-colors">Центр помощи</Link></li>
              <li><Link to="/faq" className="text-white/70 hover:text-white transition-colors">FAQ</Link></li>
              <li><Link to="/documentation" className="text-white/70 hover:text-white transition-colors">Документация</Link></li>
              <li><Link to="/support-tickets" className="text-white/70 hover:text-white transition-colors">Техподдержка</Link></li>
              <li><Link to="/status" className="text-white/70 hover:text-white transition-colors">Статус серверов</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-minecraft-gray/30 pt-8 flex flex-col md:flex-row justify-between gap-4">
          <div className="text-white/50 text-sm">
            © 2025 MineHost. Все права защищены. Minecraft является товарным знаком Mojang AB.
          </div>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-white/50 text-sm hover:text-white transition-colors">
              Политика конфиденциальности
            </Link>
            <Link to="/terms" className="text-white/50 text-sm hover:text-white transition-colors">
              Условия использования
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
