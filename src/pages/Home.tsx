import { Link } from 'react-router';
import { Wind, Timer, Music, Trees, BookHeart, Quote, Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
import { LanguageSwitch } from '../components/LanguageSwitch';
import { quotesData } from '../data/quotes';

export default function Home() {
  const { language } = useLanguage();
  const t = translations[language].home;

  const relaxationMethods = [
    {
      title: t.feeling.title,
      description: t.feeling.description,
      icon: Heart,
      path: '/feeling',
      color: 'bg-rose-100 hover:bg-rose-200',
    },
    {
      title: t.breathing.title,
      description: t.breathing.description,
      icon: Wind,
      path: '/breathing',
      color: 'bg-blue-100 hover:bg-blue-200',
    },
    {
      title: t.meditation.title,
      description: t.meditation.description,
      icon: Timer,
      path: '/meditation',
      color: 'bg-purple-100 hover:bg-purple-200',
    },
    {
      title: t.sounds.title,
      description: t.sounds.description,
      icon: Music,
      path: '/sounds',
      color: 'bg-green-100 hover:bg-green-200',
    },
    // {
    //   title: t.nature.title,
    //   description: t.nature.description,
    //   icon: Trees,
    //   path: '/nature',
    //   color: 'bg-teal-100 hover:bg-teal-200',
    // },
    {
      title: t.journal.title,
      description: t.journal.description,
      icon: BookHeart,
      path: '/journal',
      color: 'bg-pink-100 hover:bg-pink-200',
    },
    {
      title: t.quotes.title,
      description: t.quotes.description,
      icon: Quote,
      path: `/quotes/${quotesData[Math.floor(Math.random() * quotesData.length)].id}`,
      color: 'bg-amber-100 hover:bg-amber-200',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center p-6">
      <LanguageSwitch />
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-5xl mb-4 text-gray-800">{t.title}</h1>
          <p className="text-xl text-gray-600">{t.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {relaxationMethods.map((method) => {
            const Icon = method.icon;
            return (
              <Link
                key={method.path}
                to={method.path}
                className={`${method.color} p-8 rounded-2xl shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl`}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-4 bg-white rounded-full">
                    <Icon className="w-12 h-12 text-gray-700" />
                  </div>
                  <h2 className="text-2xl mb-2 text-gray-800">{method.title}</h2>
                  <p className="text-gray-600">{method.description}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}