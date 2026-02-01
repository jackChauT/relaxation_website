import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
import { LanguageSwitch } from '../components/LanguageSwitch';

export default function BreathingExercise() {
  const { language } = useLanguage();
  const t = translations[language];
  const [phase, setPhase] = useState<'inhale' | 'hold' | 'exhale' | 're-hold'>('inhale');
  const [isActive, setIsActive] = useState(false);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    if (!isActive) return;

    const phases = [
      { name: 'inhale' as const, duration: 4000, scale: 1.5 },
      { name: 'hold' as const, duration: 4000, scale: 1.5 },
      { name: 'exhale' as const, duration: 4000, scale: 1 },
      { name: 're-hold' as const, duration: 4000, scale: 1 },
    ];

    let currentPhaseIndex = 0;
    
    const nextPhase = () => {
      const currentPhase = phases[currentPhaseIndex];
      setPhase(currentPhase.name);
      setScale(currentPhase.scale);
      
      currentPhaseIndex = (currentPhaseIndex + 1) % phases.length;
    };

    nextPhase();
    const interval = setInterval(nextPhase, 4000);

    return () => clearInterval(interval);
  }, [isActive]);

  const getInstruction = () => {
    switch (phase) {
      case 'inhale':
        return t.breathing.inhale;
      case 'hold':
      case 're-hold':
        return t.breathing.hold;
      case 'exhale':
        return t.breathing.exhale;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 p-6">
      <LanguageSwitch />
      <Link to="/" className="inline-flex items-center text-gray-700 hover:text-gray-900 mb-8">
        <ArrowLeft className="w-5 h-5 mr-2" />
        {t.common.backToHome}
      </Link>

      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl mb-4 text-gray-800">{t.breathing.title}</h1>
        <p className="text-xl text-gray-600 mb-12">{t.breathing.subtitle}</p>

        <div className="flex flex-col items-center justify-center mb-12">
          <div
            className="w-64 h-64 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center transition-transform duration-[4000ms] ease-in-out shadow-2xl"
            style={{ transform: `scale(${scale})` }}
          >
            <span className="text-white text-2xl">{getInstruction()}</span>
          </div>
        </div>

        <button
          onClick={() => setIsActive(!isActive)}
          className="px-8 py-4 bg-white text-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          {isActive ? t.breathing.pause : t.breathing.start}
        </button>
      </div>
    </div>
  );
}