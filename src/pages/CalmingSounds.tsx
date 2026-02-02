import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router';
import { ArrowLeft, Volume2, VolumeX } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
import { LanguageSwitch } from '../components/LanguageSwitch';

export default function CalmingSounds() {
  const { language } = useLanguage();
  const t = translations[language];
  const [activeSound, setActiveSound] = useState<string | null>(null);

  const sounds = [
    { id: 'rain', name: t.sounds.rain, emoji: '🌧️', color: 'bg-blue-200', src: '/relaxation_website_demo/sounds/rain-2.mp3' },
    { id: 'ocean', name: t.sounds.ocean, emoji: '🌊', color: 'bg-cyan-200', src: '/relaxation_website_demo/sounds/ocean-waves.mp3' },
    { id: 'forest', name: t.sounds.forest, emoji: '🌲', color: 'bg-green-200', src: '/relaxation_website_demo/sounds/windy-forest-and-birds-ambience.mp3' },
    { id: 'fire', name: t.sounds.fire, emoji: '🔥', color: 'bg-orange-200', src: '/relaxation_website_demo/sounds/fireplace.mp3' },
    { id: 'wind', name: t.sounds.wind, emoji: '💨', color: 'bg-gray-200', src: '/relaxation_website_demo/sounds/soft-wind.mp3' },
    { id: 'birds', name: t.sounds.birds, emoji: '🐦', color: 'bg-yellow-200', src: '/relaxation_website_demo/sounds/chirping-birds-ambience.mp3' },
  ];

  const audioRefs = useRef<Record<string, HTMLAudioElement>>({});

  const toggleSound = (soundId: string) => {
    if (activeSound === soundId) {
      setActiveSound(null);
    } else {
      setActiveSound(soundId);
    }
  };

  useEffect(() => {
    // stop all sounds
    Object.values(audioRefs.current).forEach((audio) => {
      audio.pause();
      audio.currentTime = 0;
    });

    if (!activeSound) return;

    // find selected sound
    const sound = sounds.find((s) => s.id === activeSound);
    if (!sound) return;

    // create audio if not exists
    if (!audioRefs.current[sound.id]) {
      const audio = new Audio(sound.src);
      audio.loop = true;
      audioRefs.current[sound.id] = audio;
    }

    audioRefs.current[sound.id].play();

    // cleanup on unmount
    return () => {
      Object.values(audioRefs.current).forEach((audio) => audio.pause());
    };
}, [activeSound, sounds]);


  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-blue-100 p-6">
      <LanguageSwitch />
      <Link to="/" className="inline-flex items-center text-gray-700 hover:text-gray-900 mb-8">
        <ArrowLeft className="w-5 h-5 mr-2" />
        {t.common.backToHome}
      </Link>

      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl mb-4 text-gray-800">{t.sounds.title}</h1>
        <p className="text-xl text-gray-600 mb-12">{t.sounds.subtitle}</p>

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
                    <span>{t.sounds.playing}</span>
                  </>
                ) : (
                  <>
                    <VolumeX className="w-5 h-5" />
                    <span>{t.sounds.clickToPlay}</span>
                  </>
                )}
              </div>
            </button>
          ))}
        </div>

        {/* {activeSound && (
          <div className="mt-12 bg-white rounded-2xl shadow-xl p-8">
            <p className="text-gray-600">
              {t.sounds.note}
            </p>
          </div>
        )} */}
      </div>
    </div>
  );
}