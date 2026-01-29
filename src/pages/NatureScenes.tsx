import { useState } from 'react';
import { Link } from 'react-router';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function NatureScenes() {
  const scenes = [
    {
      id: 1,
      title: 'Peaceful Forest',
      url: 'https://images.unsplash.com/photo-1730963782375-f40cffade823?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWFjZWZ1bCUyMGZvcmVzdCUyMG5hdHVyZXxlbnwxfHx8fDE3Njk1OTE3MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Find peace among the trees',
    },
    {
      id: 2,
      title: 'Calm Ocean',
      url: 'https://images.unsplash.com/photo-1581845912101-b79003f1b71e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWxtJTIwb2NlYW4lMjBzdW5zZXR8ZW58MXx8fHwxNzY5NjA5MTkwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Let the waves wash your worries away',
    },
    {
      id: 3,
      title: 'Serene Mountains',
      url: 'https://images.unsplash.com/photo-1700148676800-a12f8a016deb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXJlbmUlMjBtb3VudGFpbiUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3Njk1ODc4MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Rise above it all',
    },
    {
      id: 4,
      title: 'Tranquil Lake',
      url: 'https://images.unsplash.com/photo-1673994758007-247bcecaa8b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFucXVpbCUyMGxha2UlMjByZWZsZWN0aW9ufGVufDF8fHx8MTc2OTYwOTE5MXww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Reflect on the stillness',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextScene = () => {
    setCurrentIndex((prev) => (prev + 1) % scenes.length);
  };

  const prevScene = () => {
    setCurrentIndex((prev) => (prev - 1 + scenes.length) % scenes.length);
  };

  const currentScene = scenes[currentIndex];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-100 to-green-100 p-6">
      <Link to="/" className="inline-flex items-center text-gray-700 hover:text-gray-900 mb-8">
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back to Home
      </Link>

      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl mb-4 text-gray-800">Nature Scenes</h1>
        <p className="text-xl text-gray-600 mb-12">Immerse yourself in the beauty of nature</p>

        <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="relative h-[500px]">
            <ImageWithFallback
              src={currentScene.url}
              alt={currentScene.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
              <div className="p-8 text-white w-full">
                <h2 className="text-3xl mb-2">{currentScene.title}</h2>
                <p className="text-xl opacity-90">{currentScene.description}</p>
              </div>
            </div>
          </div>

          <button
            onClick={prevScene}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/80 hover:bg-white rounded-full shadow-lg transition-all"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>

          <button
            onClick={nextScene}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/80 hover:bg-white rounded-full shadow-lg transition-all"
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>

          <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-2">
            {scenes.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-white w-8' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="mt-8 text-gray-600">
          <p>Use the arrows or dots to explore different scenes</p>
        </div>
      </div>
    </div>
  );
}
