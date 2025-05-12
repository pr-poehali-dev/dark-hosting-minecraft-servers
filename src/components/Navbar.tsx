
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav className="fixed w-full top-0 z-50 bg-minecraft-dark/95 backdrop-blur-sm border-b border-minecraft-gray/30 py-4">
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-minecraft-accent rounded-md flex items-center justify-center animate-pulse">
            <Icon name="Cube" className="text-white" />
          </div>
          <span className="font-montserrat font-bold text-xl">MineHost</span>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-white/80 hover:text-white font-medium transition-colors">
            Главная
          </Link>
          <Link to="/pricing" className="text-white/80 hover:text-white font-medium transition-colors">
            Тарифы
          </Link>
          <Link to="/features" className="text-white/80 hover:text-white font-medium transition-colors">
            Возможности
          </Link>
          <Link to="/support" className="text-white/80 hover:text-white font-medium transition-colors">
            Поддержка
          </Link>
        </div>
        
        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" className="text-white/80 hover:text-white hover:bg-minecraft-gray/20">
            Войти
          </Button>
          <Button className="bg-minecraft-accent hover:bg-minecraft-accent/80 text-white">
            Регистрация
          </Button>
        </div>
        
        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-minecraft-dark border-b border-minecraft-gray/30 py-4 animate-in fade-in">
          <div className="container mx-auto px-4 flex flex-col gap-4">
            <Link to="/" className="text-white/80 hover:text-white font-medium py-2 transition-colors">
              Главная
            </Link>
            <Link to="/pricing" className="text-white/80 hover:text-white font-medium py-2 transition-colors">
              Тарифы
            </Link>
            <Link to="/features" className="text-white/80 hover:text-white font-medium py-2 transition-colors">
              Возможности
            </Link>
            <Link to="/support" className="text-white/80 hover:text-white font-medium py-2 transition-colors">
              Поддержка
            </Link>
            <div className="flex flex-col gap-2 pt-4 border-t border-minecraft-gray/30">
              <Button variant="ghost" className="justify-center text-white/80 hover:text-white hover:bg-minecraft-gray/20">
                Войти
              </Button>
              <Button className="justify-center bg-minecraft-accent hover:bg-minecraft-accent/80 text-white">
                Регистрация
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
