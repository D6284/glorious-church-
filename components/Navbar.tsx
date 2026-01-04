
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, Heart } from 'lucide-react';
import { NAV_ITEMS, TRANSLATIONS } from '../constants';
import { Language } from '../types';

interface NavbarProps {
  language: Language;
  setLanguage: (lang: Language) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ language, setLanguage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleLang = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
  };

  const t = (key: string) => TRANSLATIONS[key]?.[language] || key;

  return (
    <nav className="bg-white/90 backdrop-blur-md sticky top-0 z-50 shadow-sm border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-serif text-2xl font-bold">G</span>
              </div>
              <span className="text-2xl font-serif font-bold tracking-tight text-slate-800">Glorious Church</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-indigo-600 ${
                  location.pathname === item.path ? 'text-indigo-600' : 'text-slate-600'
                }`}
              >
                {t(item.translationKey)}
              </Link>
            ))}
            
            <button 
              onClick={toggleLang}
              className="flex items-center space-x-1 text-slate-600 hover:text-indigo-600 transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm font-bold uppercase">{language}</span>
            </button>

            <Link
              to="/giving"
              className="bg-indigo-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-indigo-700 transition-all flex items-center space-x-2 shadow-lg shadow-indigo-200"
            >
              <Heart className="w-4 h-4 fill-white" />
              <span>{t('btn_give')}</span>
            </Link>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <button onClick={toggleLang} className="text-slate-600 uppercase font-bold text-xs">{language}</button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-indigo-600 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block px-3 py-4 text-base font-medium text-slate-700 hover:text-indigo-600 border-b border-slate-50 last:border-0"
                onClick={() => setIsOpen(false)}
              >
                {t(item.translationKey)}
              </Link>
            ))}
            <div className="pt-4 px-3">
              <Link
                to="/giving"
                className="w-full bg-indigo-600 text-white px-4 py-3 rounded-xl text-center font-bold block"
                onClick={() => setIsOpen(false)}
              >
                {t('btn_give')}
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
