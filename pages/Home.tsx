
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Play, Calendar, Users, ArrowRight, Heart, MapPin, Clock } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS, MOCK_SERMONS, MOCK_EVENTS } from '../constants';
import { generateDailyDevotional } from '../services/geminiService';

interface HomeProps {
  language: Language;
}

export const Home: React.FC<HomeProps> = ({ language }) => {
  const [devotional, setDevotional] = useState<string>('Loading spiritual nourishment...');
  const t = (key: string) => TRANSLATIONS[key]?.[language] || key;

  useEffect(() => {
    const fetchDevotional = async () => {
      const content = await generateDailyDevotional(language);
      setDevotional(content);
    };
    fetchDevotional();
  }, [language]);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&q=80&w=2000" 
            alt="Church Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/40 to-transparent" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white w-full">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-600/30 backdrop-blur-md border border-indigo-400/30 text-indigo-100 text-sm font-semibold mb-6 animate-bounce">
              Welcome to Glorious Church
            </span>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 animate-in slide-in-from-left duration-700">
              {t('hero_title')}
            </h1>
            <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-lg leading-relaxed animate-in slide-in-from-left delay-150 duration-700">
              {t('hero_subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/live" 
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-full font-bold flex items-center justify-center transition-all transform hover:scale-105 shadow-xl shadow-indigo-600/20"
              >
                <Play className="w-5 h-5 mr-2 fill-current" />
                {t('btn_join')}
              </Link>
              <Link 
                to="/about" 
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full font-bold flex items-center justify-center transition-all"
              >
                Learn Our History
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Info Bar */}
      <section className="bg-indigo-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center space-x-4 border-r border-indigo-800 last:border-0 md:pr-8">
            <div className="p-3 bg-indigo-800 rounded-lg">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider text-indigo-300">Service Times</h4>
              <p className="font-medium">Sunday: 8:00 AM | 10:30 AM</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 border-r border-indigo-800 last:border-0 md:pr-8">
            <div className="p-3 bg-indigo-800 rounded-lg">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider text-indigo-300">Location</h4>
              <p className="font-medium">123 Grace Avenue, Glory City</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-indigo-800 rounded-lg">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider text-indigo-300">Contact Us</h4>
              <p className="font-medium">+1 (234) 567-890</p>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Devotional (AI Powered) */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="text-indigo-600 font-bold uppercase tracking-widest text-sm">Daily Bread</span>
          <h2 className="text-4xl font-bold mt-2 mb-8">Guided Word for Today</h2>
          <div className="bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Heart className="w-32 h-32 text-indigo-600 fill-current" />
            </div>
            <div className="whitespace-pre-wrap text-lg text-slate-700 font-serif leading-loose italic">
              {devotional}
            </div>
            <div className="mt-8">
              <p className="text-sm font-semibold text-slate-500">— Powered by Gemini AI</p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Sermons */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-bold text-slate-900">{t('section_sermons')}</h2>
              <p className="text-slate-500 mt-2">Nourish your soul with the Word</p>
            </div>
            <Link to="/sermons" className="text-indigo-600 font-bold flex items-center hover:translate-x-1 transition-transform">
              View All <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {MOCK_SERMONS.map((sermon) => (
              <div key={sermon.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group border border-slate-100">
                <div className="relative aspect-video overflow-hidden">
                  <img src={sermon.thumbnail} alt={sermon.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <Play className="w-6 h-6 text-indigo-600 fill-current" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 text-xs font-bold text-indigo-600 mb-2 uppercase">
                    <Calendar className="w-3 h-3" />
                    <span>{sermon.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-600 transition-colors">{sermon.title}</h3>
                  <p className="text-slate-600 text-sm line-clamp-2">{sermon.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">{t('section_events')}</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {MOCK_EVENTS.map((event) => (
              <div key={event.id} className="flex flex-col md:flex-row bg-slate-50 rounded-3xl overflow-hidden hover:shadow-xl transition-all border border-slate-100 group">
                <div className="w-full md:w-1/3 h-48 md:h-auto overflow-hidden">
                  <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-8 flex-1">
                  <div className="flex items-center text-indigo-600 font-bold mb-2 text-sm">
                    <Clock className="w-4 h-4 mr-2" />
                    {event.date} • {event.time}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{event.title}</h3>
                  <p className="text-slate-600 mb-6">{event.description}</p>
                  <div className="flex items-center text-slate-400 text-sm">
                    <MapPin className="w-4 h-4 mr-1" />
                    {event.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Give CTA */}
      <section className="py-24 bg-indigo-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="pattern" width="10" height="10" patternUnits="userSpaceOnUse">
              <circle cx="5" cy="5" r="1" fill="white" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#pattern)" />
          </svg>
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10 text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Support Our Mission</h2>
          <p className="text-xl text-indigo-100 mb-10 leading-relaxed">
            Your generosity helps us share the gospel and support those in need. 
            Give tithes, offerings, or support our special projects securely online.
          </p>
          <Link 
            to="/giving" 
            className="bg-white text-indigo-600 px-10 py-5 rounded-full font-bold text-lg hover:bg-slate-50 transition-all shadow-2xl inline-flex items-center group"
          >
            <Heart className="w-6 h-6 mr-2 group-hover:scale-110 transition-transform" />
            Give Now
          </Link>
        </div>
      </section>
    </div>
  );
};
