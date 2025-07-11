import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const dinosaurs = [
    {
      id: 1,
      name: "Тираннозавр",
      stage: "Взрослый",
      price: "50,000 ₽",
      image: "/img/196b4702-49f1-4853-9f70-1c7a05d0f6b8.jpg",
      biteForce: "12,800 фунтов на кв. дюйм",
      description: "Король хищников мезозойской эры",
      period: "Меловой период",
      diet: "Плотоядный",
      length: "12-13 метров",
      weight: "7-9 тонн",
    },
    {
      id: 2,
      name: "Трицератопс",
      stage: "Взрослый",
      price: "35,000 ₽",
      image: "/img/a71ac82c-5ca8-4c04-8080-6eb6a1997a34.jpg",
      biteForce: "3,200 фунтов на кв. дюйм",
      description: "Трехрогий гигант с мощным панцирем",
      period: "Меловой период",
      diet: "Травоядный",
      length: "8-9 метров",
      weight: "6-12 тонн",
    },
    {
      id: 3,
      name: "Велоцираптор",
      stage: "Молодой",
      price: "25,000 ₽",
      image: "/img/8ab66fd6-6c5f-4ab0-95a4-6141f48284f7.jpg",
      biteForce: "1,500 фунтов на кв. дюйм",
      description: "Быстрый и умный хищник",
      period: "Меловой период",
      diet: "Плотоядный",
      length: "1.8-2 метра",
      weight: "15-20 кг",
    },
    {
      id: 4,
      name: "Стегозавр",
      stage: "Взрослый",
      price: "40,000 ₽",
      image: "/img/196b4702-49f1-4853-9f70-1c7a05d0f6b8.jpg",
      biteForce: "800 фунтов на кв. дюйм",
      description: "Бронированный гигант с шипами",
      period: "Юрский период",
      diet: "Травоядный",
      length: "9 метров",
      weight: "5 тонн",
    },
    {
      id: 5,
      name: "Дилофозавр",
      stage: "Молодой",
      price: "30,000 ₽",
      image: "/img/8ab66fd6-6c5f-4ab0-95a4-6141f48284f7.jpg",
      biteForce: "2,000 фунтов на кв. дюйм",
      description: "Хищник с двумя гребнями",
      period: "Юрский период",
      diet: "Плотоядный",
      length: "7 метров",
      weight: "400 кг",
    },
    {
      id: 6,
      name: "Брахиозавр",
      stage: "Малыш",
      price: "15,000 ₽",
      image: "/img/a71ac82c-5ca8-4c04-8080-6eb6a1997a34.jpg",
      biteForce: "500 фунтов на кв. дюйм",
      description: "Длинношеий гигант-вегетарианец",
      period: "Юрский период",
      diet: "Травоядный",
      length: "26 метров",
      weight: "80 тонн",
    },
  ];

  const filteredDinosaurs = dinosaurs.filter(
    (dino) =>
      dino.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dino.stage.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const getStageColor = (stage: string) => {
    switch (stage) {
      case "Взрослый":
        return "bg-red-600";
      case "Молодой":
        return "bg-orange-500";
      case "Малыш":
        return "bg-green-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="text-2xl font-bold text-primary">
                🦕 DINO STORE
              </div>
              <nav className="hidden md:flex space-x-6">
                <a href="#" className="text-foreground hover:text-primary">
                  Главная
                </a>
                <a href="#" className="text-foreground hover:text-primary">
                  Каталог
                </a>
                <a href="#" className="text-foreground hover:text-primary">
                  Библиотека
                </a>
                <a href="#" className="text-foreground hover:text-primary">
                  О нас
                </a>
                <a href="#" className="text-foreground hover:text-primary">
                  Контакты
                </a>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Icon name="User" size={16} />
              </Button>
              <Button variant="outline" size="sm">
                <Icon name="ShoppingCart" size={16} />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-foreground">
            Добро пожаловать в мир динозавров
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Эксклюзивная коллекция динозавров из The Isle Legacy. От малышей до
            взрослых особей - найдите своего идеального спутника.
          </p>
          <div className="flex justify-center space-x-4">
            <Button size="lg">Посмотреть каталог</Button>
            <Button variant="outline" size="lg">
              Библиотека динозавров
            </Button>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-card">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Icon
                name="Search"
                size={20}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
              />
              <Input
                placeholder="Поиск динозавров..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <Badge variant="outline">Всего: {filteredDinosaurs.length}</Badge>
              <Badge variant="outline">
                Взрослых:{" "}
                {filteredDinosaurs.filter((d) => d.stage === "Взрослый").length}
              </Badge>
              <Badge variant="outline">
                Молодых:{" "}
                {filteredDinosaurs.filter((d) => d.stage === "Молодой").length}
              </Badge>
              <Badge variant="outline">
                Малышей:{" "}
                {filteredDinosaurs.filter((d) => d.stage === "Малыш").length}
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="catalog" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="catalog">Каталог товаров</TabsTrigger>
              <TabsTrigger value="library">Библиотека динозавров</TabsTrigger>
            </TabsList>

            <TabsContent value="catalog" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredDinosaurs.map((dino) => (
                  <Card
                    key={dino.id}
                    className="overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <div className="aspect-square bg-muted relative">
                      <img
                        src={dino.image}
                        alt={dino.name}
                        className="w-full h-full object-cover"
                      />
                      <Badge
                        className={`absolute top-2 right-2 ${getStageColor(dino.stage)}`}
                      >
                        {dino.stage}
                      </Badge>
                    </div>
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        {dino.name}
                        <span className="text-lg font-bold text-primary">
                          {dino.price}
                        </span>
                      </CardTitle>
                      <CardDescription>{dino.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">
                            Сила укуса:
                          </span>
                          <span className="font-semibold">
                            {dino.biteForce}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Период:</span>
                          <span>{dino.period}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Длина:</span>
                          <span>{dino.length}</span>
                        </div>
                      </div>
                      <div className="mt-4 flex space-x-2">
                        <Button className="flex-1" size="sm">
                          В корзину
                        </Button>
                        <Button variant="outline" size="sm">
                          <Icon name="Heart" size={16} />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="library" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">
                  Библиотека динозавров The Isle Legacy
                </h2>
                <p className="text-muted-foreground">
                  Подробная информация о каждом виде динозавров
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {dinosaurs.map((dino) => (
                  <Card key={dino.id} className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-20 h-20 bg-muted rounded-lg flex-shrink-0">
                        <img
                          src={dino.image}
                          alt={dino.name}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-bold">{dino.name}</h3>
                          <Badge variant="outline">{dino.diet}</Badge>
                        </div>
                        <p className="text-muted-foreground mb-3">
                          {dino.description}
                        </p>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <div>
                            <span className="font-semibold">Сила укуса:</span>
                            <br />
                            <span className="text-primary">
                              {dino.biteForce}
                            </span>
                          </div>
                          <div>
                            <span className="font-semibold">Вес:</span>
                            <br />
                            <span>{dino.weight}</span>
                          </div>
                          <div>
                            <span className="font-semibold">Длина:</span>
                            <br />
                            <span>{dino.length}</span>
                          </div>
                          <div>
                            <span className="font-semibold">Период:</span>
                            <br />
                            <span>{dino.period}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">🦕 DINO STORE</h3>
              <p className="text-muted-foreground">
                Ваш надежный партнер в мире динозавров The Isle Legacy
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Каталог</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Взрослые
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Молодые
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Малыши
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Библиотека
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    О нас
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Контакты
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Связаться с нами</h4>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">
                  <Icon name="Mail" size={16} />
                </Button>
                <Button variant="outline" size="sm">
                  <Icon name="Phone" size={16} />
                </Button>
                <Button variant="outline" size="sm">
                  <Icon name="MessageCircle" size={16} />
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground">
            <p>&copy; 2024 Dino Store. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
