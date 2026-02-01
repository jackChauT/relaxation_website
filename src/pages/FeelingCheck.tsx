import { useNavigate } from 'react-router';
import { ArrowLeft, Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
import { LanguageSwitch } from '../components/LanguageSwitch';

type FeelingType = 'stressed' | 'anxious' | 'sad' | 'overwhelmed' | 'tired' | 'restless';

export default function FeelingCheck() {
  const { language } = useLanguage();
  const t = translations[language];
  const navigate = useNavigate();

  const handleFeelingSelect = (feeling: FeelingType) => {
    // If feeling stressed, anxious, or restless → Breathing exercise
    // If feeling sad, overwhelmed, or tired → Nature scenes
    if (['stressed', 'anxious', 'restless'].includes(feeling)) {
      navigate('/breathing');
    } else {
      navigate('/sounds');
    }
  };

  const feelings: FeelingType[] = ['stressed', 'anxious', 'sad', 'overwhelmed', 'tired', 'restless'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 via-pink-100 to-purple-100 p-6">
      <LanguageSwitch />
      <button
        onClick={() => navigate('/')}
        className="inline-flex items-center text-gray-700 hover:text-gray-900 mb-8"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        {t.common.backToHome}
      </button>

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
            <Heart className="w-10 h-10 text-rose-500" />
          </div>
          <h1 className="text-4xl mb-4 text-gray-800">{t.feeling.title}</h1>
          <p className="text-xl text-gray-600">{t.feeling.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {feelings.map((feeling) => (
            <button
              key={feeling}
              onClick={() => handleFeelingSelect(feeling)}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center text-center group"
            >
              <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform">
                {t.feeling.feelings[feeling].emoji}
              </div>
              <h2 className="text-2xl text-gray-800">
                {t.feeling.feelings[feeling].label}
              </h2>
            </button>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            {language === 'en' && 'We\'ll recommend the best relaxation method for you'}
            {language === 'zh' && '我們將為您推薦最適合的放鬆方法'}
            {language === 'ja' && 'あなたに最適なリラックス方法をおすすめします'}
          </p>
        </div>
      </div>
    </div>
  );
}
