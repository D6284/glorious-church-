
import React, { useState } from 'react';
import { Heart, ShieldCheck, Smartphone, CreditCard, Banknote, CheckCircle2 } from 'lucide-react';

export const Giving: React.FC = () => {
  const [step, setStep] = useState(1);
  const [givingType, setGivingType] = useState('tithe');
  const [amount, setAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  const handleNext = () => setStep(prev => prev + 1);
  const handleBack = () => setStep(prev => prev - 1);

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <div className="bg-indigo-700 text-white py-24 text-center px-4">
        <h1 className="text-5xl font-bold mb-4">Sow Into the Kingdom</h1>
        <p className="text-indigo-100 text-lg max-w-2xl mx-auto">
          Every seed you sow contributes to the growth of God's kingdom and supports our community initiatives.
        </p>
      </div>

      <div className="max-w-3xl mx-auto px-4 -mt-12">
        <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-100">
          {/* Progress Bar */}
          <div className="h-2 bg-slate-100 flex">
            <div className={`h-full bg-indigo-600 transition-all duration-500 ${step === 1 ? 'w-1/3' : step === 2 ? 'w-2/3' : 'w-full'}`}></div>
          </div>

          <div className="p-8 md:p-12">
            {step === 1 && (
              <div className="animate-in fade-in duration-500">
                <h2 className="text-3xl font-bold mb-8">What are you giving?</h2>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {['tithe', 'offering', 'seed', 'building', 'missions'].map((type) => (
                    <button
                      key={type}
                      onClick={() => setGivingType(type)}
                      className={`p-6 rounded-2xl border-2 transition-all text-left group ${
                        givingType === type 
                        ? 'border-indigo-600 bg-indigo-50 shadow-md' 
                        : 'border-slate-100 hover:border-indigo-200'
                      }`}
                    >
                      <h3 className="font-bold uppercase tracking-wider text-sm mb-1 capitalize text-slate-500 group-hover:text-indigo-400">
                        {type}
                      </h3>
                      <p className="text-slate-800 font-semibold">Supporting {type}</p>
                    </button>
                  ))}
                </div>

                <label className="block text-sm font-bold text-slate-500 uppercase tracking-widest mb-3">Enter Amount (USD)</label>
                <div className="relative mb-10">
                  <span className="absolute left-6 top-1/2 -translate-y-1/2 text-3xl font-bold text-slate-400">$</span>
                  <input 
                    type="number" 
                    placeholder="0.00" 
                    className="w-full pl-12 pr-6 py-6 bg-slate-50 border-none rounded-3xl text-4xl font-bold focus:ring-4 focus:ring-indigo-500/10 outline-none"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </div>

                <button 
                  onClick={handleNext}
                  disabled={!amount}
                  className="w-full bg-indigo-600 disabled:bg-slate-300 text-white py-6 rounded-3xl font-bold text-xl shadow-xl shadow-indigo-600/20 hover:bg-indigo-700 transition-all"
                >
                  Continue to Payment
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="animate-in slide-in-from-right duration-500">
                <button onClick={handleBack} className="text-slate-400 font-bold mb-6 hover:text-slate-600">← Back to Amount</button>
                <h2 className="text-3xl font-bold mb-8">Choose Payment Method</h2>
                
                <div className="space-y-4 mb-10">
                  <button 
                    onClick={() => setPaymentMethod('card')}
                    className={`w-full flex items-center p-6 rounded-3xl border-2 transition-all ${
                      paymentMethod === 'card' ? 'border-indigo-600 bg-indigo-50' : 'border-slate-100'
                    }`}
                  >
                    <div className="w-12 h-12 bg-white shadow-sm rounded-xl flex items-center justify-center mr-4">
                      <CreditCard className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div className="text-left">
                      <p className="font-bold text-slate-800">Credit or Debit Card</p>
                      <p className="text-slate-500 text-sm">Secure checkout via Stripe</p>
                    </div>
                  </button>

                  <button 
                    onClick={() => setPaymentMethod('momo')}
                    className={`w-full flex items-center p-6 rounded-3xl border-2 transition-all ${
                      paymentMethod === 'momo' ? 'border-indigo-600 bg-indigo-50' : 'border-slate-100'
                    }`}
                  >
                    <div className="w-12 h-12 bg-white shadow-sm rounded-xl flex items-center justify-center mr-4">
                      <Smartphone className="w-6 h-6 text-green-600" />
                    </div>
                    <div className="text-left">
                      <p className="font-bold text-slate-800">Mobile Money</p>
                      <p className="text-slate-500 text-sm">MTN, Orange, M-Pesa supported</p>
                    </div>
                  </button>

                  <button 
                    onClick={() => setPaymentMethod('bank')}
                    className={`w-full flex items-center p-6 rounded-3xl border-2 transition-all ${
                      paymentMethod === 'bank' ? 'border-indigo-600 bg-indigo-50' : 'border-slate-100'
                    }`}
                  >
                    <div className="w-12 h-12 bg-white shadow-sm rounded-xl flex items-center justify-center mr-4">
                      <Banknote className="w-6 h-6 text-amber-600" />
                    </div>
                    <div className="text-left">
                      <p className="font-bold text-slate-800">Bank Transfer</p>
                      <p className="text-slate-500 text-sm">Direct wire to church account</p>
                    </div>
                  </button>
                </div>

                <button 
                  onClick={handleNext}
                  disabled={!paymentMethod}
                  className="w-full bg-indigo-600 disabled:bg-slate-300 text-white py-6 rounded-3xl font-bold text-xl shadow-xl shadow-indigo-600/20 hover:bg-indigo-700 transition-all"
                >
                  Pay ${amount} Now
                </button>
              </div>
            )}

            {step === 3 && (
              <div className="text-center py-12 animate-in zoom-in duration-500">
                <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                  <CheckCircle2 className="w-12 h-12" />
                </div>
                <h2 className="text-4xl font-bold mb-4">God Bless Your Heart!</h2>
                <p className="text-slate-600 text-lg mb-10 max-w-sm mx-auto">
                  Your donation of <strong>${amount}</strong> for <strong>{givingType}</strong> has been received successfully.
                </p>
                <div className="flex flex-col space-y-4">
                  <button className="bg-slate-900 text-white py-4 rounded-2xl font-bold">Download Receipt</button>
                  <button onClick={() => setStep(1)} className="text-indigo-600 font-bold">Make Another Gift</button>
                </div>
              </div>
            )}
          </div>

          <div className="bg-slate-50 p-6 flex items-center justify-center space-x-2 text-slate-400 text-sm">
            <ShieldCheck className="w-4 h-4" />
            <span>Secured with 256-bit SSL Encryption</span>
          </div>
        </div>

        <div className="mt-16 text-center text-slate-500">
          <p className="italic">"Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver."</p>
          <p className="font-bold mt-2">— 2 Corinthians 9:7</p>
        </div>
      </div>
    </div>
  );
};
