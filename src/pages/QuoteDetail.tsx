import { useEffect, useMemo, useRef } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router';
import {
  ArrowLeft,
  BookOpen,
  User,
  FileText,
  Heart,
  Tag,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
import { LanguageSwitch } from '../components/LanguageSwitch';
import { getQuoteById, quotesData } from '../data/quotes';
import { useFavorites } from '../contexts/FavoritesContext';

export default function QuoteDetail() {
  const { language } = useLanguage();
  const t = translations[language];
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();

  type NavState = {
    backStack?: number[];
    forwardStack?: number[];
  };

  const navState = (location.state as NavState | null) ?? {};
  const backStack = navState.backStack ?? [];
  const forwardStack = navState.forwardStack ?? [];
  const { toggleFavorite, isFavorite } = useFavorites();

  const currentId = Number(id);
  const quote = getQuoteById(currentId);

  // --- prev/next computation (works even if IDs are not consecutive)
  const { prevId, nextId } = useMemo(() => {
    const idx = quotesData.findIndex((q) => q.id === currentId);
    if (idx === -1) return { prevId: null as number | null, nextId: null as number | null };
    return {
      prevId: idx > 0 ? quotesData[idx - 1].id : null,
      nextId: idx < quotesData.length - 1 ? quotesData[idx + 1].id : null,
    };
  }, [currentId]);

  const getRandomId = () => {
    if (quotesData.length <= 1) return currentId;
    let next = currentId;
    // avoid picking the same quote
    while (next === currentId) {
      next = quotesData[Math.floor(Math.random() * quotesData.length)].id;
    }
    return next;
  };
  
  const goBack = () => {
  if (backStack.length > 0) {
    const prev = backStack[backStack.length - 1];
    const nextBack = backStack.slice(0, -1);
    navigate(`/quotes/${prev}`, {
      state: { backStack: nextBack, forwardStack: [...forwardStack, currentId] },
    });
    return;
  }

  // optional fallback: list order prev
    if (prevId != null) navigate(`/quotes/${prevId}`);
  };

  const goForwardOrRandom = () => {
    if (forwardStack.length > 0) {
      const next = forwardStack[forwardStack.length - 1];
      const nextForward = forwardStack.slice(0, -1);

      navigate(`/quotes/${next}`, {
        state: { backStack: [...backStack, currentId], forwardStack: nextForward },
      });
      return;
    }

    const randomId = getRandomId();
    navigate(`/quotes/${randomId}`, {
      state: { backStack: [...backStack, currentId], forwardStack: [] },
    });
  };

  // --- Swipe handling (mobile)
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const onTouchStart = (e: React.TouchEvent) => {
    const t = e.touches[0];
    touchStartX.current = t.clientX;
    touchStartY.current = t.clientY;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    const startX = touchStartX.current;
    const startY = touchStartY.current;
    if (startX == null || startY == null) return;

    const end = e.changedTouches[0];
    const dx = end.clientX - startX;
    const dy = end.clientY - startY;

    // avoid triggering while scrolling vertically
    const absDx = Math.abs(dx);
    const absDy = Math.abs(dy);
    const SWIPE_MIN = 50; // px
    const VERTICAL_TOLERANCE = 60;

    if (absDx < SWIPE_MIN) return;
    if (absDy > VERTICAL_TOLERANCE) return;

    // Requirement:
    // swipe left -> previous
    // swipe right -> next
    if (dx > 0) goBack();  // left swipe
    else goForwardOrRandom();         // right swipe
  };

  // --- Optional: keyboard arrows on desktop
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') goBack();
      if (e.key === 'ArrowRight') goForwardOrRandom();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [prevId, nextId]);

  const handleHeartClick = () => {
    if (quote) toggleFavorite(quote.id);
  };

  const getTagTranslation = (tag: string) => {
    return t.tagTranslations[tag as keyof typeof t.tagTranslations] || tag;
  };

  // If quote not found
  if (!quote) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 p-6">
        <LanguageSwitch />
        <button
          onClick={() => navigate('/quotes')}
          className="inline-flex items-center text-gray-700 hover:text-gray-900 mb-8"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          {t.common.backToQuotes}
        </button>

        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-white rounded-3xl shadow-2xl p-12">
            <p className="text-2xl text-gray-600 mb-8">{t.quotes.notFound}</p>
            <button
              onClick={() => navigate('/quotes')}
              className="px-8 py-3 bg-amber-500 text-white rounded-full shadow-lg hover:bg-amber-600 transition-all hover:shadow-xl"
            >
              {t.common.backToQuotes}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 p-6"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <LanguageSwitch />

      <button
        onClick={() => navigate('/quotes')}
        className="inline-flex items-center text-gray-700 hover:text-gray-900 mb-8"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        {t.common.backToQuotes}
      </button>

      <div className="relative">
      {/* Desktop arrows */}
        <button
          onClick={goBack}
          className="hidden md:flex fixed left-6 top-1/2 -translate-y-1/2 z-50
                    p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all"
          aria-label="Previous quote"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>

        <button
          onClick={goForwardOrRandom}
          className="hidden md:flex fixed right-6 top-1/2 -translate-y-1/2 z-50
                    p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all"
          aria-label="Random quote"
        >
          <ChevronRight className="w-6 h-6 text-gray-700" />
        </button>
      </div>

      <div className="max-w-3xl mx-auto">

        <div className="bg-white rounded-3xl shadow-2xl p-12 relative">
          {/* Heart icon */}
          <button
            onClick={handleHeartClick}
            className="absolute top-8 right-8 p-3 rounded-full bg-gray-50 hover:bg-gray-100 transition-all"
          >
            <Heart
              className={`w-7 h-7 transition-all ${
                isFavorite(quote.id)
                  ? 'text-red-500 fill-red-500'
                  : 'text-gray-400 hover:text-red-400'
              }`}
            />
          </button>

          <div className="mb-8">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6 mx-auto">
              <BookOpen className="w-8 h-8 text-amber-700" />
            </div>
          </div>

          <blockquote className="text-2xl text-gray-800 italic text-center mb-12 leading-relaxed">
            "{quote.fullText[language]}"
          </blockquote>

          <div className="border-t border-gray-200 pt-8 space-y-4">
            <div className="flex items-center gap-3 text-gray-700">
              <div className="p-2 bg-gray-100 rounded-lg">
                <User className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-gray-500">{t.quotes.author}</p>
                <p className="text-lg">{quote.author}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-gray-700">
              <div className="p-2 bg-gray-100 rounded-lg">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-gray-500">{t.quotes.book}</p>
                <p className="text-lg">{quote.book[language]}</p>
              </div>
            </div>

            {quote.page != 0 && quote.page != null && (
              <div className="flex items-center gap-3 text-gray-700">
                <div className="p-2 bg-gray-100 rounded-lg">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">{t.quotes.page}</p>
                  <p className="text-lg">
                    {t.quotes.pageNum} {quote.page}
                  </p>
                </div>
              </div>
            )}


            <div className="flex items-start gap-3 text-gray-700">
              <div className="p-2 bg-gray-100 rounded-lg">
                <Tag className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-500 mb-2">{t.quotes.tags}</p>
                <div className="flex flex-wrap gap-2">
                  {quote.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-amber-100 text-amber-700 text-sm rounded-full"
                    >
                      {getTagTranslation(tag)}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Optional: mobile hint */}
          <div className="mt-10 md:hidden text-center text-sm text-gray-500">
            {t.quotes.swipeHint}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => navigate('/quotes')}
              className="px-8 py-3 bg-amber-500 text-white rounded-full shadow-lg hover:bg-amber-600 transition-all hover:shadow-xl"
            >
              {t.quotes.exploreMore}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
