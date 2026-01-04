
import React from 'react';
import { Language } from '../types';
import { Clock, MapPin, Calendar, Heart } from 'lucide-react';

export const Services: React.FC<{ language: Language }> = ({ language }) => {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-slate-900 text-white py-24 px-4 text-center">
        <h1 className="text-5xl font-bold mb-4">Gather With Us</h1>
        <p className="text-slate-400 text-lg">Weekly opportunities to worship, learn, and grow together.</p>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-10 rounded-3xl bg-indigo-50 border border-indigo-100 flex flex-col">
            <div className="w-14 h-14 bg-indigo-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <Clock className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Sunday Worship</h3>
            <p className="text-slate-500 mb-6 flex-1 italic">The highlight of our week. A powerful time of worship and dynamic teaching.</p>
            <div className="space-y-3 font-semibold text-indigo-900">
              <p>First Service: 8:00 AM</p>
              <p>Second Service: 10:30 AM</p>
            </div>
          </div>

          <div className="p-10 rounded-3xl bg-slate-50 border border-slate-100 flex flex-col">
            <div className="w-14 h-14 bg-slate-800 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <Calendar className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Mid-Week Study</h3>
            <p className="text-slate-500 mb-6 flex-1">Dive deeper into the scriptures and experience intimate communion.</p>
            <div className="space-y-3 font-semibold text-slate-800">
              <p>Wednesdays at 6:30 PM</p>
            </div>
          </div>

          <div className="p-10 rounded-3xl bg-slate-50 border border-slate-100 flex flex-col">
            <div className="w-14 h-14 bg-indigo-400 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <Heart className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Youth Impact</h3>
            <p className="text-slate-500 mb-6 flex-1">Energizing and relevant ministry for teens and young adults.</p>
            <div className="space-y-3 font-semibold text-slate-800">
              <p>Fridays at 7:00 PM</p>
            </div>
          </div>
        </div>

        <div className="mt-24 p-12 bg-indigo-600 rounded-[3rem] text-white flex flex-col md:flex-row items-center justify-between shadow-2xl overflow-hidden relative">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <MapPin className="w-64 h-64" />
          </div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">Can't join us in person?</h2>
            <p className="text-indigo-100 text-lg mb-6 md:mb-0">Our services are streamed live every Sunday on YouTube and Facebook.</p>
          </div>
          <a href="/live" className="relative z-10 bg-white text-indigo-600 px-10 py-5 rounded-full font-bold shadow-xl hover:scale-105 transition-transform">
            Go To Live Stream
          </a>
        </div>
      </div>
    </div>
  );
};
