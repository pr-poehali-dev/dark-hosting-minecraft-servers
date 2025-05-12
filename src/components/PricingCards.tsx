
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface PricingPlan {
  name: string;
  description: string;
  price: string;
  features: string[];
  popular?: boolean;
  icon: string;
  iconColor: string;
  buttonVariant: 'default' | 'outline' | 'secondary';
}

const pricingPlans: PricingPlan[] = [
  {
    name: 'Стартовый',
    description: 'Идеально для небольших серверов и новичков',
    price: '299₽/мес',
    features: [
      '1 ГБ RAM',
      '10 ГБ SSD',
      'До 20 игроков',
      'Базовые плагины',
      'Ежедневные бэкапы'
    ],
    icon: 'Rocket',
    iconColor: 'text-blue-400',
    buttonVariant: 'outline'
  },
  {
    name: 'Продвинутый',
    description: 'Оптимальный выбор для активных сообществ',
    price: '599₽/мес',
    features: [
      '4 ГБ RAM',
      '25 ГБ SSD',
      'До 50 игроков',
      'Все популярные плагины',
      'Ежедневные бэкапы',
      'Приоритетная поддержка'
    ],
    popular: true,
    icon: 'Gem',
    iconColor: 'text-minecraft-accent',
    buttonVariant: 'default'
  },
  {
    name: 'Профессиональный',
    description: 'Для крупных проектов с высокой нагрузкой',
    price: '1199₽/мес',
    features: [
      '8 ГБ RAM',
      '50 ГБ SSD',
      'До 100 игроков',
      'Все плагины и моды',
      'Ежечасные бэкапы',
      'Выделенный IP',
      'Премиум поддержка 24/7'
    ],
    icon: 'Crown',
    iconColor: 'text-amber-400',
    buttonVariant: 'outline'
  }
];

const PricingCards = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Выберите подходящий тариф</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Гибкие тарифы для любых потребностей с возможностью масштабирования по мере роста вашего сервера
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan) => (
            <Card key={plan.name} className={`relative overflow-hidden hover-effect ${plan.popular ? 'border-minecraft-accent ring-1 ring-minecraft-accent' : 'bg-minecraft-gray/10 border-minecraft-gray/30'}`}>
              {plan.popular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-minecraft-accent text-white text-xs font-bold px-3 py-1 transform rotate-0 translate-x-2 -translate-y-1">
                    Популярный
                  </div>
                </div>
              )}
              
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${plan.popular ? 'bg-minecraft-accent/20' : 'bg-minecraft-gray/20'} mb-4`}>
                  <Icon name={plan.icon} className={plan.iconColor} size={24} />
                </div>
                <CardTitle className="text-xl font-bold">{plan.name}</CardTitle>
                <p className="text-sm text-white/70">{plan.description}</p>
              </CardHeader>
              
              <CardContent>
                <div className="mb-6">
                  <p className="text-3xl font-bold">{plan.price}</p>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Icon name="Check" className="mr-2 text-minecraft-green shrink-0 mt-1" size={16} />
                      <span className="text-white/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter>
                <Button 
                  className={`w-full py-6 ${plan.popular ? 'bg-minecraft-accent hover:bg-minecraft-accent/80 glow-effect' : ''}`}
                  variant={plan.buttonVariant}
                >
                  Выбрать тариф
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-white/60 mb-4">Нужны особые условия?</p>
          <Button variant="ghost" className="text-minecraft-accent hover:text-minecraft-accent/80">
            Связаться для индивидуальных тарифов
            <Icon name="ArrowRight" className="ml-2" size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingCards;
