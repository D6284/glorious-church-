
import React from 'react';
import { Language } from '../types';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';

export const Contact: React.FC<{ language: Language }> = ({ language }) => {
  return (
    <div className="min-h-screen bg-slate-50">
      <section className="bg-indigo-600 text-white py-24 px-4 text-center">
        <h1 className="text-5xl font-bold mb-4">Get In Touch</h1>
        <p className="text-indigo-100 text-lg">We are here to pray with you, hear from you, and help you grow.</p>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-20 -mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Main Sanctuary</h4>
                  <p className="text-slate-500 text-sm">123 Grace Avenue, Glory City</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Phone Support</h4>
                  <p className="text-slate-500 text-sm">+1 (234) 567-890</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Email Us</h4>
                  <p className="text-slate-500 text-sm">office@gloriouschurch.org</p>
                </div>
              </div>
            </div>

            <a href="https://wa.me/1234567890" target="_blank" className="flex items-center justify-center space-x-3 bg-green-500 hover:bg-green-600 text-white p-6 rounded-3xl transition-all shadow-lg font-bold">
              <MessageCircle className="w-6 h-6" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          <div className="lg:col-span-2 bg-white p-10 rounded-3xl shadow-lg border border-slate-100">
            <h2 className="text-3xl font-bold mb-8 text-slate-900">Send a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-500 uppercase tracking-widest mb-2">Full Name</label>
                  <input type="text" className="w-full p-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-500 uppercase tracking-widest mb-2">Email Address</label>
                  <input type="email" className="w-full p-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="john@example.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-500 uppercase tracking-widest mb-2">Subject</label>
                <select className="w-full p-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none">
                  <option>Prayer Request</option>
                  <option>General Inquiry</option>
                  <option>Membership</option>
                  <option>Giving Support</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-500 uppercase tracking-widest mb-2">Message</label>
                <textarea rows={5} className="w-full p-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="How can we help you?"></textarea>
              </div>
              <button type="submit" className="bg-indigo-600 text-white px-10 py-4 rounded-2xl font-bold flex items-center justify-center space-x-2 hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200">
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
