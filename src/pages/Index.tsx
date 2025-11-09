import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedLecture, setSelectedLecture] = useState<any>(null);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const subjects = [
    {
      id: 1,
      name: 'Экономическая теория',
      professor: 'Проф. Иванов А.В.',
      lectures: [
        { id: 1, title: 'Введение в экономику', duration: '45 мин', date: '01.09.2024', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
        { id: 2, title: 'Спрос и предложение', duration: '50 мин', date: '08.09.2024', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
        { id: 3, title: 'Рыночное равновесие', duration: '48 мин', date: '15.09.2024', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' }
      ]
    },
    {
      id: 2,
      name: 'Финансовый менеджмент',
      professor: 'Доц. Петрова М.С.',
      lectures: [
        { id: 4, title: 'Основы финансового анализа', duration: '52 мин', date: '02.09.2024', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
        { id: 5, title: 'Управление капиталом', duration: '47 мин', date: '09.09.2024', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
        { id: 6, title: 'Инвестиционные решения', duration: '55 мин', date: '16.09.2024', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' }
      ]
    },
    {
      id: 3,
      name: 'Маркетинг',
      professor: 'Проф. Смирнов Д.К.',
      lectures: [
        { id: 7, title: 'Основы маркетинга', duration: '43 мин', date: '03.09.2024', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
        { id: 8, title: 'Сегментация рынка', duration: '49 мин', date: '10.09.2024', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
        { id: 9, title: 'Digital-маркетинг', duration: '51 мин', date: '17.09.2024', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' }
      ]
    }
  ];

  const faculties = [
    {
      title: 'Экономический факультет',
      description: 'Подготовка специалистов в области экономики, финансов и бухгалтерского учета',
      icon: 'TrendingUp',
      color: 'bg-primary'
    },
    {
      title: 'Факультет менеджмента',
      description: 'Современные программы управления бизнесом и предпринимательства',
      icon: 'Briefcase',
      color: 'bg-secondary'
    },
    {
      title: 'Юридический факультет',
      description: 'Качественное юридическое образование и практическая подготовка',
      icon: 'Scale',
      color: 'bg-accent'
    },
    {
      title: 'Факультет информационных технологий',
      description: 'Инновационные IT-программы и цифровые технологии',
      icon: 'Code',
      color: 'bg-primary'
    }
  ];

  const news = [
    {
      title: 'День открытых дверей 2025',
      date: '15 марта 2025',
      description: 'Приглашаем абитуриентов и их родителей познакомиться с университетом',
      badge: 'Событие'
    },
    {
      title: 'Новая магистерская программа',
      date: '10 марта 2025',
      description: 'Открыт набор на программу "Цифровая экономика и бизнес-аналитика"',
      badge: 'Образование'
    },
    {
      title: 'Научная конференция',
      date: '5 марта 2025',
      description: 'Международная конференция по экономике и управлению',
      badge: 'Наука'
    }
  ];

  const admissionSteps = [
    { step: '1', title: 'Подача документов', description: 'Онлайн или лично' },
    { step: '2', title: 'Вступительные испытания', description: 'ЕГЭ или внутренние экзамены' },
    { step: '3', title: 'Зачисление', description: 'По конкурсу баллов' }
  ];

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="https://cdn.poehali.dev/projects/bfdc9be6-829f-4929-8049-3f22ec24665f/files/53fd8d65-0023-4bb0-865b-c08a931a9a1d.jpg" 
              alt="ДГУНХ Логотип" 
              className="h-10 w-10 rounded-lg object-cover"
            />
            <span className="font-heading text-xl font-bold text-primary">ДГУНХ</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            {['Главная', 'Факультеты', 'Поступление', 'Студентам', 'Наука', 'Новости', 'Контакты'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === item.toLowerCase() ? 'text-primary' : 'text-foreground'
                }`}
              >
                {item}
              </button>
            ))}
          </nav>
          <Button className="md:hidden" variant="outline" size="icon">
            <Icon name="Menu" className="h-5 w-5" />
          </Button>
        </div>
      </header>

      <section id="главная" className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-secondary/10 to-primary/5">
        <div className="container py-24 md:py-32">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge className="w-fit" variant="secondary">
                Топ-50 вузов России
              </Badge>
              <h1 className="font-heading text-4xl md:text-6xl font-bold leading-tight">
                Дагестанский государственный университет народного хозяйства
              </h1>
              <p className="text-lg text-muted-foreground">
                Современное образование мирового уровня. Создаём будущее вместе с вами.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" onClick={() => scrollToSection('поступление')}>
                  Поступить в ДГУНХ
                  <Icon name="ArrowRight" className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('факультеты')}>
                  Выбрать факультет
                </Button>
              </div>
              <div className="flex gap-8 pt-4">
                <div>
                  <div className="font-heading text-3xl font-bold text-primary">12000+</div>
                  <div className="text-sm text-muted-foreground">Студентов</div>
                </div>
                <div>
                  <div className="font-heading text-3xl font-bold text-secondary">45+</div>
                  <div className="text-sm text-muted-foreground">Программ</div>
                </div>
                <div>
                  <div className="font-heading text-3xl font-bold text-accent">95%</div>
                  <div className="text-sm text-muted-foreground">Трудоустройство</div>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[500px] animate-scale-in">
              <img
                src="https://cdn.poehali.dev/projects/bfdc9be6-829f-4929-8049-3f22ec24665f/files/6793ffe2-f5bf-4e40-afed-7bad71b762c0.jpg"
                alt="ДГУНХ Campus"
                className="rounded-2xl object-cover w-full h-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="факультеты" className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Наши факультеты</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Широкий выбор образовательных программ для вашего профессионального роста
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {faculties.map((faculty, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg ${faculty.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon name={faculty.icon as any} className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{faculty.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{faculty.description}</CardDescription>
                  <Button variant="ghost" className="mt-4 px-0 hover:gap-2 transition-all group/btn">
                    Подробнее
                    <Icon name="ArrowRight" className="ml-1 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="поступление" className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Поступление в ДГУНХ</h2>
            <p className="text-lg text-muted-foreground">Три простых шага к вашему будущему</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3 max-w-4xl mx-auto mb-12">
            {admissionSteps.map((item, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-heading text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-heading text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Приёмная комиссия работает</CardTitle>
              <CardDescription>Подайте документы прямо сейчас</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <Icon name="Calendar" className="h-5 w-5 text-primary" />
                <span>Приём документов: 20 июня - 25 июля 2025</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="Clock" className="h-5 w-5 text-primary" />
                <span>Пн-Пт: 9:00 - 18:00, Сб: 10:00 - 15:00</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="Mail" className="h-5 w-5 text-primary" />
                <span>priem@dgunh.ru</span>
              </div>
              <Button className="w-full mt-4" size="lg">
                Подать документы онлайн
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="студентам" className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Для студентов</h2>
            <p className="text-lg text-muted-foreground">
              Ваши лекции и материалы в одном месте
            </p>
          </div>

          <Tabs defaultValue="lectures" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
              <TabsTrigger value="lectures">
                <Icon name="BookOpen" className="h-4 w-4 mr-2" />
                Лекции
              </TabsTrigger>
              <TabsTrigger value="life">
                <Icon name="Users" className="h-4 w-4 mr-2" />
                Студенческая жизнь
              </TabsTrigger>
            </TabsList>

            <TabsContent value="lectures" className="space-y-6">
              <div className="grid gap-6 md:grid-cols-3">
                {subjects.map((subject) => (
                  <Card key={subject.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Icon name="GraduationCap" className="h-6 w-6 text-primary" />
                        </div>
                        <Badge variant="secondary">{subject.lectures.length} лекций</Badge>
                      </div>
                      <CardTitle className="text-xl">{subject.name}</CardTitle>
                      <CardDescription>{subject.professor}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {subject.lectures.map((lecture) => (
                          <Dialog key={lecture.id}>
                            <DialogTrigger asChild>
                              <div 
                                className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer group"
                                onClick={() => setSelectedLecture(lecture)}
                              >
                                <div className="w-8 h-8 rounded bg-secondary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/30 transition-colors">
                                  <Icon name="Play" className="h-4 w-4 text-secondary" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <h4 className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors line-clamp-1">
                                    {lecture.title}
                                  </h4>
                                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                    <span className="flex items-center gap-1">
                                      <Icon name="Clock" className="h-3 w-3" />
                                      {lecture.duration}
                                    </span>
                                    <span>•</span>
                                    <span>{lecture.date}</span>
                                  </div>
                                </div>
                              </div>
                            </DialogTrigger>
                            <DialogContent className="max-w-4xl">
                              <DialogHeader>
                                <DialogTitle>{lecture.title}</DialogTitle>
                                <DialogDescription>{subject.name} - {subject.professor}</DialogDescription>
                              </DialogHeader>
                              <div className="aspect-video w-full rounded-lg overflow-hidden bg-black">
                                <iframe
                                  width="100%"
                                  height="100%"
                                  src={lecture.videoUrl}
                                  title={lecture.title}
                                  frameBorder="0"
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                  allowFullScreen
                                />
                              </div>
                              <div className="flex items-center justify-between pt-4 border-t">
                                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                  <span className="flex items-center gap-1">
                                    <Icon name="Clock" className="h-4 w-4" />
                                    {lecture.duration}
                                  </span>
                                  <span className="flex items-center gap-1">
                                    <Icon name="Calendar" className="h-4 w-4" />
                                    {lecture.date}
                                  </span>
                                </div>
                                <Button variant="outline">
                                  <Icon name="Download" className="h-4 w-4 mr-2" />
                                  Скачать материалы
                                </Button>
                              </div>
                            </DialogContent>
                          </Dialog>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="life">
              <div className="grid gap-8 lg:grid-cols-2 items-center">
                <div className="space-y-6">
                  <h3 className="font-heading text-2xl font-bold">Студенческая жизнь</h3>
                  <p className="text-muted-foreground">
                    ДГУНХ — это не только учёба, но и яркая студенческая жизнь, спорт, творчество и новые возможности.
                  </p>
                  <div className="space-y-4">
                    {[
                      { icon: 'Users', title: 'Студенческие организации', desc: 'Более 20 активных сообществ' },
                      { icon: 'Trophy', title: 'Спортивные секции', desc: 'Футбол, волейбол, плавание, танцы' },
                      { icon: 'Music', title: 'Творческие коллективы', desc: 'КВН, театр, вокал, хореография' },
                      { icon: 'Globe', title: 'Международные программы', desc: 'Обмен студентами с вузами-партнёрами' }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Icon name={item.icon as any} className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">{item.title}</h4>
                          <p className="text-sm text-muted-foreground">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative h-[400px] lg:h-[500px]">
                  <img
                    src="https://cdn.poehali.dev/projects/bfdc9be6-829f-4929-8049-3f22ec24665f/files/8f1742b5-9815-43ef-bc3b-94c2e5926255.jpg"
                    alt="Студенческая жизнь"
                    className="rounded-2xl object-cover w-full h-full shadow-xl"
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="наука" className="py-20 bg-gradient-to-br from-secondary/20 to-primary/10">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Научная деятельность</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ведущий научный центр региона с современной исследовательской базой
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { icon: 'BookOpen', title: 'Научные публикации', value: '500+', subtitle: 'статей в год' },
              { icon: 'Award', title: 'Гранты и премии', value: '25+', subtitle: 'проектов' },
              { icon: 'Users', title: 'Научные кадры', value: '200+', subtitle: 'докторов и кандидатов наук' }
            ].map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-secondary to-primary flex items-center justify-center mx-auto mb-4">
                    <Icon name={item.icon as any} className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-4xl font-heading font-bold text-primary">{item.value}</CardTitle>
                  <CardDescription className="text-base font-semibold">{item.title}</CardDescription>
                  <p className="text-sm text-muted-foreground">{item.subtitle}</p>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="новости" className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Новости университета</h2>
            <p className="text-lg text-muted-foreground">Актуальные события и анонсы</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {news.map((item, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary">{item.badge}</Badge>
                    <span className="text-sm text-muted-foreground">{item.date}</span>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">{item.description}</CardDescription>
                  <Button variant="link" className="px-0">
                    Читать далее
                    <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" size="lg">
              Все новости
              <Icon name="ChevronRight" className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <section id="контакты" className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Контакты</h2>
            <p className="text-lg text-muted-foreground">Свяжитесь с нами любым удобным способом</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: 'MapPin', title: 'Адрес', text: 'г. Махачкала, ул. Джамалутдина Атаева, 5' },
              { icon: 'Phone', title: 'Телефон', text: '+7 (8722) 56-11-00' },
              { icon: 'Mail', title: 'Email', text: 'info@dgunh.ru' },
              { icon: 'Globe', title: 'Сайт', text: 'www.dgunh.ru' }
            ].map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <Icon name={item.icon as any} className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <CardDescription className="text-base">{item.text}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t py-12 bg-background">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img 
                  src="https://cdn.poehali.dev/projects/bfdc9be6-829f-4929-8049-3f22ec24665f/files/53fd8d65-0023-4bb0-865b-c08a931a9a1d.jpg" 
                  alt="ДГУНХ Логотип" 
                  className="h-8 w-8 rounded-lg object-cover"
                />
                <span className="font-heading text-lg font-bold text-primary">ДГУНХ</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Дагестанский государственный университет народного хозяйства
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Абитуриентам</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Программы обучения</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Приёмная комиссия</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Стоимость обучения</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Студентам</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Расписание</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Библиотека</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Личный кабинет</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Мы в соцсетях</h4>
              <div className="flex gap-3">
                {['Instagram', 'Facebook', 'Youtube', 'Linkedin'].map((social) => (
                  <Button key={social} variant="outline" size="icon" className="rounded-full">
                    <Icon name={social as any} className="h-4 w-4" />
                  </Button>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            © 2025 ДГУНХ. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;