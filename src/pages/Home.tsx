import { Link } from 'react-router';
import { Wind, Timer, Music, Trees } from 'lucide-react';

export default function Home() {
  const relaxationMethods = [
    {
      title: 'Breathing Exercise',
      description: 'Guided breathing to calm your mind',
      icon: Wind,
      path: '/breathing',
      color: 'bg-blue-100 hover:bg-blue-200',
    },
    {
      title: 'Meditation Timer',
      description: 'Set a timer for your meditation practice',
      icon: Timer,
      path: '/meditation',
      color: 'bg-purple-100 hover:bg-purple-200',
    },
    {
      title: 'Calming Sounds',
      description: 'Listen to peaceful ambient sounds',
      icon: Music,
      path: '/sounds',
      color: 'bg-green-100 hover:bg-green-200',
    },
    {
      title: 'Nature Scenes',
      description: 'View beautiful calming nature images',
      icon: Trees,
      path: '/nature',
      color: 'bg-teal-100 hover:bg-teal-200',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-5xl mb-4 text-gray-800">Find Your Calm</h1>
          <p className="text-xl text-gray-600">Choose a relaxation method to begin your journey to tranquility</p>
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
