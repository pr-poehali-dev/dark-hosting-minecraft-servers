import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { toast } from "@/hooks/use-toast";

interface PlanDetails {
  name: string;
  price: string;
  features?: string[];
}

const Success = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const plan: PlanDetails = location.state?.plan;

  // Если пользователь перешел на страницу напрямую (без выбора плана)
  useEffect(() => {
    if (!plan) {
      navigate("/");
    }
  }, [plan, navigate]);

  if (!plan) {
    return null;
  }

  // Генерируем случайный ID сервера
  const serverId = `mc-${Math.random().toString(36).substring(2, 10)}`;

  // Обработчики кнопок
  const handleOpenPanel = () => {
    toast({
      title: "Панель управления",
      description: "Переход в панель управления сервером",
    });
  };

  const handleDownloadData = () => {
    toast({
      title: "Загрузка данных",
      description: "Начинается загрузка данных вашего сервера",
    });

    // Имитация загрузки файла
    setTimeout(() => {
      toast({
        title: "Загрузка завершена",
        description: "Данные сервера успешно сохранены",
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-minecraft-dark">
      <Navbar />
      <main className="flex-1 pt-28 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 rounded-full bg-minecraft-accent/20 flex items-center justify-center mx-auto mb-6">
              <Icon name="Check" className="text-minecraft-green" size={40} />
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Оплата прошла успешно!
            </h1>
            <p className="text-lg text-white/70 mb-8">
              Ваш сервер Minecraft успешно создан и уже готов к использованию
            </p>

            <div className="bg-minecraft-gray/10 border border-minecraft-gray/30 rounded-lg p-6 mb-8">
              <h2 className="text-xl font-bold mb-4">Детали вашего сервера</h2>

              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-white/70">Тариф:</span>
                  <span className="font-medium">{plan.name}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-white/70">ID сервера:</span>
                  <span className="font-medium">{serverId}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-white/70">IP адрес:</span>
                  <code className="font-mono bg-minecraft-gray/20 px-2 py-1 rounded">
                    {serverId}.minehost.com
                  </code>
                </div>

                <div className="flex justify-between">
                  <span className="text-white/70">Статус:</span>
                  <span className="text-minecraft-green font-medium flex items-center">
                    <span className="w-2 h-2 bg-minecraft-green rounded-full mr-2"></span>
                    Активен
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
              <Button
                size="lg"
                className="bg-minecraft-accent hover:bg-minecraft-accent/80 py-6"
                onClick={handleOpenPanel}
              >
                <Icon name="Layout" className="mr-2" />
                Панель управления
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-white/20 hover:bg-white/5 py-6"
                onClick={handleDownloadData}
              >
                <Icon name="Download" className="mr-2" />
                Скачать данные
              </Button>
            </div>

            <div className="bg-minecraft-green/10 border border-minecraft-green/30 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-2 flex items-center">
                <Icon
                  name="Lightbulb"
                  className="mr-2 text-minecraft-green"
                  size={20}
                />
                Что дальше?
              </h3>
              <p className="text-white/70 mb-4">
                Воспользуйтесь нашими руководствами, чтобы настроить свой сервер
                и пригласить друзей
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="#"
                  className="text-minecraft-accent hover:text-minecraft-accent/80 underline"
                  onClick={(e) => {
                    e.preventDefault();
                    toast({
                      title: "Руководство",
                      description: "Открываем руководство по настройке сервера",
                    });
                  }}
                >
                  Руководство по настройке
                </a>
                <a
                  href="#"
                  className="text-minecraft-accent hover:text-minecraft-accent/80 underline"
                  onClick={(e) => {
                    e.preventDefault();
                    toast({
                      title: "Плагины",
                      description: "Открываем каталог плагинов",
                    });
                  }}
                >
                  Популярные плагины
                </a>
                <a
                  href="#"
                  className="text-minecraft-accent hover:text-minecraft-accent/80 underline"
                  onClick={(e) => {
                    e.preventDefault();
                    toast({
                      title: "FAQ",
                      description: "Открываем часто задаваемые вопросы",
                    });
                  }}
                >
                  Часто задаваемые вопросы
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Success;
