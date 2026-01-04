
import React, { useState } from 'react';
import { Search, Filter, Play, Download, FileText, Calendar, User } from 'lucide-react';
import { MOCK_SERMONS } from '../constants';

export const Sermons: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Teaching', 'Worship', 'Healing', 'Youth'];

  const filteredSermons = MOCK_SERMONS.filter(sermon => {
    const matchesSearch = sermon.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          sermon.speaker.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || sermon.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Header */}
      <div className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Sermon Library</h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">Explore our collection of teachings, worship sessions, and prophetic messages to grow your faith.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 -mt-10">
        {/* Search and Filters */}
        <div className="bg-white p-6 rounded-3xl shadow-xl border border-slate-100 flex flex-col md:flex-row gap-4 items-center mb-12">
          <div className="relative flex-1 w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search by title or speaker..." 
              className="w-full pl-12 pr-4 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
            <Filter className="w-5 h-5 text-slate-400 mr-2 flex-shrink-0" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all whitespace-nowrap ${
                  activeCategory === cat 
                    ? 'bg-indigo-600 text-white shadow-lg' 
                    : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Sermon Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSermons.length > 0 ? (
            filteredSermons.map((sermon) => (
              <div key={sermon.id} className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all border border-slate-100 flex flex-col group">
                <div className="relative aspect-video">
                  <img src={sermon.thumbnail} alt={sermon.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
                    <button className="w-14 h-14 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 text-indigo-600 fill-current" />
                    </button>
                  </div>
                  <div className="absolute top-4 right-4 px-3 py-1 bg-indigo-600 text-white text-xs font-bold rounded-full uppercase tracking-widest">
                    {sermon.category}
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex items-center text-slate-400 text-sm mb-3 space-x-4">
                    <span className="flex items-center"><Calendar className="w-4 h-4 mr-1" /> {sermon.date}</span>
                    <span className="flex items-center"><User className="w-4 h-4 mr-1" /> {sermon.speaker}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-indigo-600 transition-colors leading-tight">{sermon.title}</h3>
                  <p className="text-slate-500 text-sm mb-8 flex-1 leading-relaxed">{sermon.description}</p>
                  
                  <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                    <button className="flex items-center text-indigo-600 font-bold hover:text-indigo-700 text-sm">
                      <Play className="w-4 h-4 mr-2" /> Watch Now
                    </button>
                    <div className="flex space-x-3">
                      <button className="p-2 bg-slate-50 rounded-lg hover:bg-indigo-50 text-slate-400 hover:text-indigo-600 transition-all" title="Audio Only">
                        <Download className="w-4 h-4" />
                      </button>
                      <button className="p-2 bg-slate-50 rounded-lg hover:bg-indigo-50 text-slate-400 hover:text-indigo-600 transition-all" title="Sermon Notes">
                        <FileText className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center">
              <div className="inline-block p-6 bg-slate-100 rounded-full mb-4">
                <Search className="w-12 h-12 text-slate-300" />
              </div>
              <h3 className="text-2xl font-bold text-slate-700">No sermons found</h3>
              <p className="text-slate-500">Try adjusting your search or filters to find what you're looking for.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
