import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { ArrowLeft, Play, Pause, RotateCcw } from 'lucide-react';

export default function MeditationTimer() {
  const [duration, setDuration] = useState(5);
  const [timeLeft, setTimeLeft] = useState(300);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    setTimeLeft(duration * 60);
  }, [duration]);

  useEffect(() => {
    if (!isRunning || timeLeft <= 0) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setIsRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(duration * 60);
  };

  const progress = ((duration * 60 - timeLeft) / (duration * 60)) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-pink-100 p-6">
      <Link to="/" className="inline-flex items-center text-gray-700 hover:text-gray-900 mb-8">
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back to Home
      </Link>

      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl mb-4 text-gray-800">Meditation Timer</h1>
        <p className="text-xl text-gray-600 mb-12">Set your meditation duration and begin</p>

        <div className="bg-white rounded-3xl shadow-2xl p-12 mb-8">
          {!isRunning && timeLeft === duration * 60 && (
            <div className="mb-8">
              <label className="block text-gray-700 mb-4">Duration (minutes)</label>
              <div className="flex gap-4 justify-center">
                {[5, 10, 15, 20, 30].map((min) => (
                  <button
                    key={min}
                    onClick={() => setDuration(min)}
                    className={`px-6 py-3 rounded-full transition-all ${
                      duration === min
                        ? 'bg-purple-500 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {min}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="relative w-64 h-64 mx-auto mb-8">
            <svg className="transform -rotate-90 w-64 h-64">
              <circle
                cx="128"
                cy="128"
                r="120"
                stroke="#e5e7eb"
                strokeWidth="8"
                fill="none"
              />
              <circle
                cx="128"
                cy="128"
                r="120"
                stroke="#9333ea"
                strokeWidth="8"
                fill="none"
                strokeDasharray={2 * Math.PI * 120}
                strokeDashoffset={2 * Math.PI * 120 * (1 - progress / 100)}
                className="transition-all duration-1000"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-5xl text-gray-800">{formatTime(timeLeft)}</span>
            </div>
          </div>

          <div className="flex gap-4 justify-center">
            <button
              onClick={() => setIsRunning(!isRunning)}
              className="p-4 bg-purple-500 text-white rounded-full shadow-lg hover:bg-purple-600 transition-all hover:shadow-xl"
            >
              {isRunning ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
            </button>
            <button
              onClick={resetTimer}
              className="p-4 bg-gray-200 text-gray-700 rounded-full shadow-lg hover:bg-gray-300 transition-all hover:shadow-xl"
            >
              <RotateCcw className="w-6 h-6" />
            </button>
          </div>
        </div>

        {timeLeft === 0 && (
          <p className="text-2xl text-purple-600 animate-pulse">Session Complete! 🙏</p>
        )}
      </div>
    </div>
  );
}
