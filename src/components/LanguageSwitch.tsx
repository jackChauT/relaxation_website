import { useLanguage } from '../contexts/LanguageContext';
import { Languages } from 'lucide-react';
import { useState } from 'react';

export function LanguageSwitch() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en' as const, label: 'English', flag: '🇬🇧' },
    { code: 'zh' as const, label: '繁體中文', flag: '🇹🇼' },
    { code: 'ja' as const, label: '日本語', flag: '🇯🇵' },
  ];

  const handleLanguageSelect = (code: 'en' | 'zh' | 'ja') => {
    setLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className="fixed top-6 right-6 z-50">
      <div className="relative">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-lg hover:shadow-xl transition-all"
        >
          <Languages className="w-5 h-5 text-gray-700" />
          <span className="text-gray-700">
            {languages.find((l) => l.code === language)?.flag}
          </span>
        </button>

        {isOpen && (
          <>
            {/* Backdrop for mobile to close dropdown when clicking outside */}
            <div 
              className="fixed inset-0 z-40" 
              onClick={() => setIsOpen(false)}
            />
            <div className="absolute right-0 mt-2 bg-white rounded-xl shadow-xl overflow-hidden min-w-[160px] z-50">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageSelect(lang.code)}
                  className={`w-full px-4 py-3 text-left hover:bg-gray-50 active:bg-gray-100 transition-colors flex items-center gap-3 ${
                    language === lang.code ? 'bg-gray-100' : ''
                  }`}
                >
                  <span className="text-xl">{lang.flag}</span>
                  <span className="text-gray-700">{lang.label}</span>
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}