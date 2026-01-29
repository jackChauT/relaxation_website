import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { ArrowLeft } from 'lucide-react';

export default function BreathingExercise() {
  const [phase, setPhase] = useState<'inhale' | 'hold' | 'exhale'>('inhale');
  const [isActive, setIsActive] = useState(false);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    if (!isActive) return;

    const phases = [
      { name: 'inhale' as const, duration: 4000, scale: 1.5 },
      { name: 'hold' as const, duration: 4000, scale: 1.5 },
      { name: 'exhale' as const, duration: 4000, scale: 1 },
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
        return 'Breathe In';
      case 'hold':
        return 'Hold';
      case 'exhale':
        return 'Breathe Out';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 p-6">
      <Link to="/" className="inline-flex items-center text-gray-700 hover:text-gray-900 mb-8">
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back to Home
      </Link>

      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl mb-4 text-gray-800">Breathing Exercise</h1>
        <p className="text-xl text-gray-600 mb-12">Follow the circle and breathe deeply</p>

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
          {isActive ? 'Pause' : 'Start'}
        </button>
      </div>
    </div>
  );
}
