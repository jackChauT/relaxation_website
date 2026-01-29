import { useState } from 'react';
import { Link } from 'react-router';
import { ArrowLeft, Volume2, VolumeX } from 'lucide-react';

export default function CalmingSounds() {
  const [activeSound, setActiveSound] = useState<string | null>(null);

  const sounds = [
    { id: 'rain', name: 'Rain', emoji: '🌧️', color: 'bg-blue-200' },
    { id: 'ocean', name: 'Ocean Waves', emoji: '🌊', color: 'bg-cyan-200' },
    { id: 'forest', name: 'Forest', emoji: '🌲', color: 'bg-green-200' },
    { id: 'fire', name: 'Fireplace', emoji: '🔥', color: 'bg-orange-200' },
    { id: 'wind', name: 'Wind', emoji: '💨', color: 'bg-gray-200' },
    { id: 'birds', name: 'Birds', emoji: '🐦', color: 'bg-yellow-200' },
  ];

  const toggleSound = (soundId: string) => {
    if (activeSound === soundId) {
      setActiveSound(null);
    } else {
      setActiveSound(soundId);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-blue-100 p-6">
      <Link to="/" className="inline-flex items-center text-gray-700 hover:text-gray-900 mb-8">
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back to Home
      </Link>

      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl mb-4 text-gray-800">Calming Sounds</h1>
        <p className="text-xl text-gray-600 mb-12">Click a sound to play (simulated)</p>

        <div className="grid md:grid-cols-3 gap-6">
          {sounds.map((sound) => (
            <button
              key={sound.id}
              onClick={() => toggleSound(sound.id)}
              className={`${sound.color} p-8 rounded-2xl shadow-lg transition-all duration-300 transform hover:scale-105 ${
                activeSound === sound.id ? 'ring-4 ring-gray-600 scale-105' : ''
              }`}
            >
              <div className="text-6xl mb-4">{sound.emoji}</div>
              <h3 className="text-xl text-gray-800 mb-2">{sound.name}</h3>
              <div className="flex items-center justify-center gap-2 text-gray-600">
                {activeSound === sound.id ? (
                  <>
                    <Volume2 className="w-5 h-5" />
                    <span>Playing</span>
                  </>
                ) : (
                  <>
                    <VolumeX className="w-5 h-5" />
                    <span>Click to play</span>
                  </>
                )}
              </div>
            </button>
          ))}
        </div>

        {activeSound && (
          <div className="mt-12 bg-white rounded-2xl shadow-xl p-8">
            <p className="text-gray-600">
              Note: This is a demo interface. In a real implementation, actual audio files would play here.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
