
import React from 'react';
import { Language } from '../types';
import { Heart, Target, Shield, Users } from 'lucide-react';

export const About: React.FC<{ language: Language }> = ({ language }) => {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-slate-900 text-white py-24 px-4 text-center">
        <h1 className="text-5xl font-bold mb-6">Our Story & Mission</h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
          Glorious Church was founded on the principles of love, faith, and the transformative power of the Holy Spirit.
        </p>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-slate-900">Our History</h2>
            <p className="text-slate-600 leading-loose mb-6">
              Started in 1995 as a small prayer group in a living room, Glorious Church has grown into a global community of believers. Our journey has been one of radical faith and witnessing the miraculous works of God in every season.
            </p>
            <p className="text-slate-600 leading-loose">
              Today, we serve thousands of members across multiple campuses, staying true to our core mandate: to manifest the glory of God in the lives of men.
            </p>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img src="https://images.unsplash.com/photo-1544427928-c49dd24428c8?auto=format&fit=crop&q=80&w=1000" alt="Church Gathering" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-10 bg-slate-50 rounded-3xl border border-slate-100">
            <Target className="w-12 h-12 text-indigo-600 mb-6" />
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-slate-600 leading-relaxed">To raise a generation that knows God intimately and makes Him known to the ends of the earth.</p>
          </div>
          <div className="p-10 bg-slate-50 rounded-3xl border border-slate-100">
            <Heart className="w-12 h-12 text-indigo-600 mb-6" />
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-slate-600 leading-relaxed">Providing a sanctuary for worship, spiritual growth, and community impact through the gospel of Jesus Christ.</p>
          </div>
          <div className="p-10 bg-slate-50 rounded-3xl border border-slate-100">
            <Shield className="w-12 h-12 text-indigo-600 mb-6" />
            <h3 className="text-2xl font-bold mb-4">Our Values</h3>
            <p className="text-slate-600 leading-relaxed">Integrity, Excellence, Servant Leadership, and an unwavering commitment to Biblical Truth.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
