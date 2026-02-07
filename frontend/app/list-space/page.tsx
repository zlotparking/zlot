'use client'

import Link from 'next/link'
import {
  DollarSign,
  Smartphone,
  Shield,
  Zap,
  TrendingUp,
  CheckCircle2,
} from 'lucide-react'

export default function ListSpacePage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="pt-24 pb-20 bg-zlot-yellow relative overflow-hidden">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-white/30 rounded-full blur-[80px]"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-zlot-dark/10 rounded-full blur-[120px]"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-white/60 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.25em] text-zlot-dark">
                Bengaluru First
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-zlot-dark leading-tight tracking-tighter">
                Turn Your Idle Parking Space Into{' '}
                <span className="underline decoration-black underline-offset-8">
                  Smart Monthly Income.
                </span>
              </h1>
              <p className="text-xl text-zlot-dark/80 max-w-lg font-medium leading-relaxed">
                Join Bengaluru&apos;s growing smart parking network. We install and
                manage the technology — you monetize unused parking space across
                Indiranagar, Koramangala, HSR, and Whitefield.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  href="/signup"
                  className="bg-zlot-dark text-white text-center px-10 py-5 rounded-full font-bold text-xl hover:bg-black transition-all shadow-xl"
                >
                  Start Earning
                </Link>
                <Link
                  href="/login"
                  className="bg-white text-zlot-dark text-center px-10 py-5 rounded-full font-bold text-xl hover:bg-slate-50 transition-all"
                >
                  Partner Login
                </Link>
              </div>
              <div className="flex flex-wrap items-center gap-4 text-zlot-dark/70 font-bold uppercase text-[10px] tracking-[0.2em]">
                <span className="inline-flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-zlot-dark" />
                  No Installation Fees
                </span>
                <span className="inline-flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-zlot-dark" />
                  Full Control via App
                </span>
                <span className="inline-flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-zlot-dark" />
                  Real-time Occupancy Tracking
                </span>
              </div>
            </div>
            <div className="hidden md:block relative">
              <img
                src="https://picsum.photos/600/600?money"
                alt="Earnings"
                className="rounded-3xl shadow-2xl rotate-3"
              />
              <div className="absolute -top-10 -right-10 bg-white p-8 rounded-3xl shadow-2xl border border-slate-100">
                <TrendingUp className="text-zlot-yellow w-12 h-12 mb-2" />
                <p className="text-4xl font-black text-zlot-dark">Up to ₹15,000 / month*</p>
                <p className="text-slate-400 font-bold uppercase text-[10px]">
                  Based on location &amp; demand
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-10 bg-zlot-dark text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { icon: DollarSign, label: 'Weekly Payouts' },
                { icon: Smartphone, label: 'Owner App Control' },
                { icon: Shield, label: 'KYC-Verified Drivers' },
                { icon: Zap, label: 'IoT Smart Locks' },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-3">
                  <div className="bg-white/10 p-3 rounded-2xl">
                    <item.icon className="w-5 h-5 text-zlot-yellow" />
                  </div>
                <p className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-300">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-28 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h3 className="text-4xl font-black text-zlot-dark tracking-tight">
                What You Can Earn With ZLOT
              </h3>
              <p className="text-slate-500 text-lg">
                See how much you could earn by listing your parking space on
                ZLOT. Bengaluru zones near tech parks and metro lines get the
                highest demand.
              </p>
              <div className="space-y-6">
                {[
                  'IoT-enabled security locking',
                  'KYC-verified drivers only',
                  'Payouts directly to your Bank Account via UPI',
                  'Zero maintenance required',
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <CheckCircle2 className="text-zlot-yellow w-6 h-6" />
                    <span className="font-bold text-zlot-dark">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-12 rounded-[3rem] border border-slate-100 shadow-xl">
              <h4 className="text-2xl font-black mb-8">Earning Calculator</h4>
              <div className="space-y-8">
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4">
                    Select Operating City
                  </label>
                  <select className="w-full bg-slate-50 border border-slate-100 p-4 rounded-xl text-zlot-dark font-bold outline-none appearance-none">
                    <option>Bengaluru (Tier 1)</option>
                    <option>Hyderabad / Chennai / Pune (Tier 2)</option>
                    <option>Kolkata / Ahmedabad / Jaipur (Tier 3)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4">
                    Monthly Demand
                  </label>
                  <input
                    type="range"
                    className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-zlot-yellow"
                  />
                </div>
                <div className="pt-8 border-t border-slate-50 flex items-center justify-between">
                  <div>
                    <p className="text-slate-400 text-[10px] font-black uppercase mb-2">
                      Estimated Annual Earnings
                    </p>
                    <p className="text-5xl font-black text-zlot-dark tracking-tighter">
                      ₹1,80,000
                    </p>
                  </div>
                  <div className="bg-zlot-yellow/10 p-4 rounded-2xl">
                    <Zap className="text-zlot-yellow w-8 h-8" />
                  </div>
                </div>
                <p className="text-[10px] text-slate-400 font-medium uppercase tracking-widest">
                  Indicative, varies by location &amp; usage
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
