import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { ArrowLeft, Plus, Trash2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
import { LanguageSwitch } from '../components/LanguageSwitch';

interface JournalEntry {
  id: string;
  date: string;
  content: string;
  timestamp: number;
}

export default function Journal() {
  const { language } = useLanguage();
  const t = translations[language];
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [newEntry, setNewEntry] = useState('');
  const [isWriting, setIsWriting] = useState(false);

  useEffect(() => {
    // Load entries from localStorage on mount
    const saved = localStorage.getItem('journalEntries');
    if (saved) {
      try {
        setEntries(JSON.parse(saved));
      } catch (e) {
        console.error('Error loading journal entries:', e);
      }
    }
  }, []);

  const saveEntry = () => {
    if (!newEntry.trim()) return;

    const entry: JournalEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }),
      content: newEntry,
      timestamp: Date.now(),
    };

    const updatedEntries = [entry, ...entries];
    setEntries(updatedEntries);
    localStorage.setItem('journalEntries', JSON.stringify(updatedEntries));
    setNewEntry('');
    setIsWriting(false);
  };

  const deleteEntry = (id: string) => {
    const updatedEntries = entries.filter((entry) => entry.id !== id);
    setEntries(updatedEntries);
    localStorage.setItem('journalEntries', JSON.stringify(updatedEntries));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100 p-6">
      <LanguageSwitch />
      <Link to="/" className="inline-flex items-center text-gray-700 hover:text-gray-900 mb-8">
        <ArrowLeft className="w-5 h-5 mr-2" />
        {t.common.backToHome}
      </Link>

      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl mb-4 text-gray-800">{t.journal.title}</h1>
          <p className="text-xl text-gray-600">{t.journal.subtitle}</p>
        </div>

        {!isWriting && (
          <button
            onClick={() => setIsWriting(true)}
            className="w-full mb-8 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3 text-gray-700 hover:text-gray-900"
          >
            <Plus className="w-6 h-6" />
            <span className="text-xl">{t.journal.newEntry}</span>
          </button>
        )}

        {isWriting && (
          <div className="mb-8 bg-white rounded-2xl shadow-xl p-6">
            <h3 className="text-xl mb-4 text-gray-800">{t.journal.howFeeling}</h3>
            <textarea
              value={newEntry}
              onChange={(e) => setNewEntry(e.target.value)}
              placeholder={t.journal.placeholder}
              className="w-full h-48 p-4 border border-gray-200 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-pink-300 text-gray-700"
              autoFocus
            />
            <div className="flex gap-3 mt-4">
              <button
                onClick={saveEntry}
                className="flex-1 px-6 py-3 bg-pink-500 text-white rounded-xl hover:bg-pink-600 transition-all"
              >
                {t.journal.save}
              </button>
              <button
                onClick={() => {
                  setIsWriting(false);
                  setNewEntry('');
                }}
                className="px-6 py-3 bg-gray-200 text-gray-700 rounded-xl hover:bg-gray-300 transition-all"
              >
                {t.journal.cancel}
              </button>
            </div>
          </div>
        )}

        <div className="space-y-4">
          {entries.length === 0 && !isWriting && (
            <div className="text-center py-12 text-gray-500">
              <p className="text-xl">{t.journal.noEntries}</p>
            </div>
          )}

          {entries.map((entry) => (
            <div
              key={entry.id}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all group"
            >
              <div className="flex justify-between items-start mb-3">
                <span className="text-sm text-gray-500">{entry.date}</span>
                <button
                  onClick={() => deleteEntry(entry.id)}
                  className="opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity p-2 hover:bg-red-50 rounded-lg"
                >
                  <Trash2 className="w-4 h-4 text-red-500" />
                </button>
              </div>
              <p className="text-gray-700 whitespace-pre-wrap">{entry.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}