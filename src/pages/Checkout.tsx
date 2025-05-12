
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';
import { useLocation, useNavigate } from 'react-router-dom';

interface PlanDetails {
  name: string;
  price: string;
  features: string[];
}

const defaultPlan: PlanDetails = {
  name: 'Стартовый',
  price: '299₽/мес',
  features: [
    '1 ГБ RAM',
    '10 ГБ SSD',
    'До 20 игроков'
  ]
};

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCVV, setCardCVV] = useState('');
  const [cardName, setCardName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Получаем план из state или используем план по умолчанию
  const plan: PlanDetails = location.state?.plan || defaultPlan;

  // Форматирование номера карты в группы по 4 цифры
  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    const formattedValue = value.replace(/(\d{4})(?=\d)/g, '$1 ');
    setCardNumber(formattedValue.slice(0, 19)); // Ограничение длины для формата XXXX XXXX XXXX XXXX
  };

  // Форматирование срока действия в формате MM/YY
  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    if (value.length <= 2) {
      setCardExpiry(value);
    } else {
      setCardExpiry(`${value.slice(0, 2)}/${value.slice(2, 4)}`);
    }
  };

  // Ограничение CVV до 3 цифр
  const handleCVVChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    setCardCVV(value.slice(0, 3));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Имитация отправки платежа
    setTimeout(() => {
      setIsSubmitting(false);
      navigate('/success', { state: { plan } });
    }, 2000);
  };

  // Извлечение числового значения из строки цены (например, "299₽/мес" -> 299)
  const numericPrice = parseInt(plan.price.match(/\d+/)?.[0] || '0');
  
  return (
    <div className="min-h-screen flex flex-col bg-minecraft-dark">
      <Navbar />
      <main className="flex-1 pt-28 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Оформление покупки</h1>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Форма оплаты */}
              <div className="md:col-span-2">
                <Card className="bg-minecraft-gray/10 border-minecraft-gray/30">
                  <CardHeader>
                    <CardTitle>Данные оплаты</CardTitle>
                    <CardDescription>Введите данные вашей карты для оплаты</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-4">
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium mb-2">
                            Email
                          </label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="your@email.com"
                            required
                            className="bg-minecraft-gray/20 border-minecraft-gray/30"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="cardName" className="block text-sm font-medium mb-2">
                            Имя владельца карты
                          </label>
                          <Input
                            id="cardName"
                            placeholder="IVAN IVANOV"
                            required
                            className="bg-minecraft-gray/20 border-minecraft-gray/30"
                            value={cardName}
                            onChange={(e) => setCardName(e.target.value.toUpperCase())}
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="cardNumber" className="block text-sm font-medium mb-2">
                            Номер карты
                          </label>
                          <div className="relative">
                            <Input
                              id="cardNumber"
                              placeholder="1234 5678 9012 3456"
                              required
                              className="bg-minecraft-gray/20 border-minecraft-gray/30 pl-12"
                              value={cardNumber}
                              onChange={handleCardNumberChange}
                              maxLength={19}
                            />
                            <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                              <Icon name="CreditCard" className="text-minecraft-accent" size={20} />
                            </div>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="expiry" className="block text-sm font-medium mb-2">
                              Срок действия
                            </label>
                            <Input
                              id="expiry"
                              placeholder="MM/YY"
                              required
                              className="bg-minecraft-gray/20 border-minecraft-gray/30"
                              value={cardExpiry}
                              onChange={handleExpiryChange}
                              maxLength={5}
                            />
                          </div>
                          <div>
                            <label htmlFor="cvv" className="block text-sm font-medium mb-2">
                              CVV/CVC
                            </label>
                            <div className="relative">
                              <Input
                                id="cvv"
                                placeholder="123"
                                required
                                className="bg-minecraft-gray/20 border-minecraft-gray/30"
                                value={cardCVV}
                                onChange={handleCVVChange}
                                maxLength={3}
                                type="password"
                              />
                              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-help">
                                <Icon name="HelpCircle" className="text-minecraft-gray/50" size={16} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <Button
                        type="submit"
                        className="w-full bg-minecraft-accent hover:bg-minecraft-accent/80 py-6 text-lg glow-effect"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <Icon name="Loader2" className="mr-2 animate-spin" />
                            Обработка...
                          </>
                        ) : (
                          `Оплатить ${plan.price}`
                        )}
                      </Button>
                    </form>
                    
                    <div className="mt-6 flex items-center justify-center space-x-3">
                      <Icon name="Lock" size={16} className="text-minecraft-green" />
                      <span className="text-sm text-white/60">Защищенная оплата SSL</span>
                    </div>
                    
                    <div className="mt-4 flex justify-center space-x-4">
                      <Icon name="CreditCard" size={24} className="text-white/40" />
                      <Icon name="CreditCard" size={24} className="text-white/40" />
                      <Icon name="CreditCard" size={24} className="text-white/40" />
                      <Icon name="CreditCard" size={24} className="text-white/40" />
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Сумма заказа */}
              <div>
                <Card className="bg-minecraft-gray/10 border-minecraft-gray/30">
                  <CardHeader>
                    <CardTitle>Ваш заказ</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">Тариф:</span>
                        <span className="font-bold">{plan.name}</span>
                      </div>
                      
                      <div className="space-y-2">
                        {plan.features.map((feature, index) => (
                          <div key={index} className="flex items-start">
                            <Icon name="Check" className="mr-2 text-minecraft-green shrink-0 mt-1" size={16} />
                            <span className="text-white/80">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <Separator className="bg-minecraft-gray/30" />
                      
                      <div className="flex items-center justify-between">
                        <span className="font-medium">Подписка:</span>
                        <span>{plan.price}</span>
                      </div>
                      
                      {numericPrice > 500 && (
                        <div className="flex items-center justify-between text-minecraft-green">
                          <span className="font-medium">Скидка:</span>
                          <span>-10%</span>
                        </div>
                      )}
                      
                      <Separator className="bg-minecraft-gray/30" />
                      
                      <div className="flex items-center justify-between text-lg font-bold">
                        <span>Итого:</span>
                        <span>
                          {numericPrice > 500 
                            ? `${Math.round(numericPrice * 0.9)}₽/мес` 
                            : plan.price}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Checkout;
