import React from "react";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";
import { toast } from "@/hooks/use-toast";

const Footer = () => {
  // Обработчики для социальных сетей
  const handleSocialClick = (platform: string) => {
    toast({
      title: `Переход на ${platform}`,
      description: `Вы будете перенаправлены на нашу страницу в ${platform}`,
    });
  };

  // Обработчик для ссылок, которые еще не готовы
  const handleComingSoon = (pageName: string) => {
    toast({
      title: "Страница в разработке",
      description: `Страница "${pageName}" скоро будет доступна`,
    });

    return false; // Предотвращаем переход по ссылке
  };

  return (
    <footer className="bg-minecraft-gray/20 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-minecraft-accent rounded-md flex items-center justify-center">
                <Icon name="Cube" className="text-white" />
              </div>
              <span className="font-montserrat font-bold text-xl">
                MineHost
              </span>
            </div>
            <p className="text-white/70 mb-6 max-w-xs">
              Профессиональный хостинг Minecraft серверов с высокой
              производительностью и надежностью
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleSocialClick("Facebook");
                }}
                className="w-10 h-10 rounded-full bg-minecraft-gray/30 flex items-center justify-center hover:bg-minecraft-accent/30 transition-colors"
              >
                <Icon name="Facebook" size={18} />
              </a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleSocialClick("Twitter");
                }}
                className="w-10 h-10 rounded-full bg-minecraft-gray/30 flex items-center justify-center hover:bg-minecraft-accent/30 transition-colors"
              >
                <Icon name="Twitter" size={18} />
              </a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleSocialClick("Instagram");
                }}
                className="w-10 h-10 rounded-full bg-minecraft-gray/30 flex items-center justify-center hover:bg-minecraft-accent/30 transition-colors"
              >
                <Icon name="Instagram" size={18} />
              </a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleSocialClick("YouTube");
                }}
                className="w-10 h-10 rounded-full bg-minecraft-gray/30 flex items-center justify-center hover:bg-minecraft-accent/30 transition-colors"
              >
                <Icon name="Youtube" size={18} />
              </a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleSocialClick("Discord");
                }}
                className="w-10 h-10 rounded-full bg-minecraft-gray/30 flex items-center justify-center hover:bg-minecraft-accent/30 transition-colors"
              >
                <Icon name="Discord" size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Хостинг</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#pricing"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Тарифы
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Возможности
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleComingSoon("Шаблоны");
                  }}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Шаблоны
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleComingSoon("Плагины");
                  }}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Плагины
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleComingSoon("Версии игры");
                  }}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Версии игры
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Компания</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleComingSoon("О нас");
                  }}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  О нас
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleComingSoon("Блог");
                  }}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Блог
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleComingSoon("Карьера");
                  }}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Карьера
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleComingSoon("Контакты");
                  }}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Контакты
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleComingSoon("Партнеры");
                  }}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Партнеры
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Поддержка</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleComingSoon("Центр помощи");
                  }}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Центр помощи
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleComingSoon("FAQ");
                  }}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleComingSoon("Документация");
                  }}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Документация
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleComingSoon("Техподдержка");
                  }}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Техподдержка
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleComingSoon("Статус серверов");
                  }}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Статус серверов
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-minecraft-gray/30 pt-8 flex flex-col md:flex-row justify-between gap-4">
          <div className="text-white/50 text-sm">
            © 2025 MineHost. Все права защищены. Minecraft является товарным
            знаком Mojang AB.
          </div>
          <div className="flex gap-6">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleComingSoon("Политика конфиденциальности");
              }}
              className="text-white/50 text-sm hover:text-white transition-colors"
            >
              Политика конфиденциальности
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleComingSoon("Условия использования");
              }}
              className="text-white/50 text-sm hover:text-white transition-colors"
            >
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
