import { Link } from 'react-router';
import { ArrowLeft, BookOpen, Heart, Tag } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
import { LanguageSwitch } from '../components/LanguageSwitch';
import { quotesData, getAllTags } from '../data/quotes';
import { useFavorites } from '../contexts/FavoritesContext';

interface QuoteEntry {
  id: number;
  author: string;
  text: string;
  book: string;
  page: number;
  tags: string[];
}

export default function Quotes() {
  const { language } = useLanguage();
  const t = translations[language];
  const { favorites, toggleFavorite, isFavorite } = useFavorites();
  const [showFavorites, setShowFavorites] = useState(false);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const allTags = getAllTags();

  const displayedQuotes = quotesData.filter(quote => {
    // First filter by favorites if needed
    if (showFavorites && !favorites.includes(quote.id)) {
      return false;
    }
    // Then filter by tag if selected
    if (selectedTag && !quote.tags.includes(selectedTag)) {
      return false;
    }
    return true;
  });

  const handleHeartClick = (e: React.MouseEvent, id: number) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(id);
  };

  const handleTagClick = (tag: string) => {
    if (selectedTag === tag) {
      setSelectedTag(null);
    } else {
      setSelectedTag(tag);
    }
  };

  const getTagTranslation = (tag: string) => {
    return t.tagTranslations[tag as keyof typeof t.tagTranslations] || tag;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-100 to-orange-100 p-6">
      <LanguageSwitch />
      <Link to="/" className="inline-flex items-center text-gray-700 hover:text-gray-900 mb-8">
        <ArrowLeft className="w-5 h-5 mr-2" />
        {t.common.backToHome}
      </Link>

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          {/* <h1 className="text-4xl mb-4 text-gray-800">{t.quotes.title}</h1> */}
          {/* <p className="text-xl text-gray-600">{t.quotes.subtitle}</p> */}
        </div>

        {/* Toggle buttons for All Quotes / My Quotes */}
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <button
            onClick={() => setShowFavorites(false)}
            className={`px-6 py-3 rounded-full transition-all ${
              !showFavorites 
                ? 'bg-amber-500 text-white shadow-lg' 
                : 'bg-white text-gray-700 hover:bg-amber-50'
            }`}
          >
            {t.quotes.allQuotes}
          </button>
          <button
            onClick={() => setShowFavorites(true)}
            className={`px-6 py-3 rounded-full transition-all flex items-center gap-2 ${
              showFavorites 
                ? 'bg-amber-500 text-white shadow-lg' 
                : 'bg-white text-gray-700 hover:bg-amber-50'
            }`}
          >
            <Heart className="w-5 h-5" fill={showFavorites ? 'currentColor' : 'none'} />
            {t.quotes.myQuotes}
          </button>
        </div>

        {/* Tag filters */}
        <div className="mb-8 bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center gap-2 mb-4">
            <Tag className="w-5 h-5 text-amber-600" />
            <h3 className="text-lg text-gray-800">{t.quotes.filterByTag}</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedTag(null)}
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                selectedTag === null
                  ? 'bg-amber-500 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {t.quotes.allTags}
            </button>
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => handleTagClick(tag)}
                className={`px-4 py-2 rounded-full text-sm transition-all ${
                  selectedTag === tag
                    ? 'bg-amber-500 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {getTagTranslation(tag)}
              </button>
            ))}
          </div>
        </div>

        {/* Empty state for favorites */}
        {showFavorites && displayedQuotes.length === 0 && (
          <div className="text-center py-16">
            <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">{t.quotes.noFavorites}</p>
          </div>
        )}

        {/* Empty state for tag filter */}
        {!showFavorites && selectedTag && displayedQuotes.length === 0 && (
          <div className="text-center py-16">
            <Tag className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">
              {language === 'en' && `No quotes found with tag "${getTagTranslation(selectedTag)}"`}
              {language === 'zh' && `找不到標籤為「${getTagTranslation(selectedTag)}」的金句`}
              {language === 'ja' && `「${getTagTranslation(selectedTag)}」タグの言葉が見つかりません`}
            </p>
          </div>
        )}

        {/* Quotes grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {displayedQuotes.map((quote) => (
            <Link
              key={quote.id}
              to={`/quotes/${quote.id}`}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 relative group"
            >
              {/* Heart icon */}
              <button
                onClick={(e) => handleHeartClick(e, quote.id)}
                className="absolute top-4 right-4 p-2 rounded-full bg-gray-50 hover:bg-gray-100 transition-all z-10"
              >
                <Heart 
                  className={`w-5 h-5 transition-all ${
                    isFavorite(quote.id) 
                      ? 'text-red-500 fill-red-500' 
                      : 'text-gray-400 hover:text-red-400'
                  }`}
                />
              </button>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-amber-100 rounded-full flex-shrink-0">
                  <BookOpen className="w-6 h-6 text-amber-700" />
                </div>
                <div className="flex-1 pr-8">
                  <p className="text-gray-700 italic mb-3 line-clamp-3">
                    "{quote.excerpt[language]}"
                  </p>
                  <div className="text-sm text-gray-500 mb-3">
                    <p>— {quote.author}</p>
                    <p className="text-xs mt-1">{quote.book[language]}</p>
                  </div>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1">
                    {quote.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-amber-50 text-amber-700 text-xs rounded-full"
                      >
                        {getTagTranslation(tag)}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}