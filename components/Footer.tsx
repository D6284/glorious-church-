
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../constants';

export const Footer: React.FC<{ language: Language }> = ({ language }) => {
  const t = (key: string) => TRANSLATIONS[key]?.[language] || key;
  
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="flex items-center space-x-2 mb-6">
            <div className="w-8 h-8 bg-indigo-600 rounded flex items-center justify-center">
              <span className="text-white font-serif text-xl font-bold">G</span>
            </div>
            <span className="text-xl font-serif font-bold text-white">Glorious Church</span>
          </Link>
          <p className="text-slate-400 mb-8 leading-relaxed">
            {t('footer_tagline')}
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
            <a href="#" className="hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="hover:text-white transition-colors"><Youtube className="w-5 h-5" /></a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Quick Links</h4>
          <ul className="space-y-4">
            <li><Link to="/about" className="hover:text-indigo-400 transition-colors">About Us</Link></li>
            <li><Link to="/services" className="hover:text-indigo-400 transition-colors">Our Services</Link></li>
            <li><Link to="/sermons" className="hover:text-indigo-400 transition-colors">Sermon Library</Link></li>
            <li><Link to="/giving" className="hover:text-indigo-400 transition-colors">Giving Online</Link></li>
            <li><Link to="/contact" className="hover:text-indigo-400 transition-colors">Get In Touch</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Contact Info</h4>
          <ul className="space-y-4">
            <li className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-indigo-500 shrink-0" />
              <span>123 Grace Avenue, Glory City, GC 56789</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-indigo-500 shrink-0" />
              <span>+1 (234) 567-890</span>
            </li>
            <li className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-indigo-500 shrink-0" />
              <span>contact@gloriouschurch.org</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Weekly Services</h4>
          <ul className="space-y-4">
            <li>
              <p className="font-bold text-slate-200">Sunday Worship</p>
              <p className="text-sm">8:00 AM & 10:30 AM</p>
            </li>
            <li>
              <p className="font-bold text-slate-200">Mid-week Communion</p>
              <p className="text-sm">Wednesday, 6:30 PM</p>
            </li>
            <li>
              <p className="font-bold text-slate-200">Youth Night</p>
              <p className="text-sm">Friday, 7:00 PM</p>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 mt-20 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
        <p>&copy; {new Date().getFullYear()} Glorious Church. All rights reserved. Designed for God's Glory.</p>
      </div>
    </footer>
  );
};
