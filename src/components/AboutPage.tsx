/**
 * @license
 * SPDX-License-Identifier: Apache-2.5
 */

import React from 'react';
import { 
  Heart, 
  ShieldCheck, 
  Clock, 
  Smile, 
  Search, 
  Users, 
  Sparkles, 
  Cpu, 
  ShieldAlert, 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle2, 
  Award 
} from 'lucide-react';
import { PageId } from '../types';

interface AboutPageProps {
  onNavigate: (pageId: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const coreValues = [
    {
      title: 'Absolute Honesty',
      icon: <ShieldCheck className="w-6 h-6 text-indigo-600" />,
      desc: 'No hidden surcharge surprises, no bogus urgent claims, and no selling of unneeded hardware. We operate under transparent LeadSmart LLC billing guidelines.'
    },
    {
      title: 'Reliability Unmatched',
      icon: <Clock className="w-6 h-6 text-indigo-600" />,
      desc: 'When we coordinate a technical dispatch truck for your home, they respect your time. Count on reliable appointment schedules and active notifications.'
    },
    {
      title: 'Rapid Response Service',
      icon: <Sparkles className="w-6 h-6 text-indigo-600" />,
      desc: 'With our mobile teams on standby along Broward & Palm Beach county crossroads, we fast-track your inquiry to achieve 90-minute roadside dispatch.'
    },
    {
      title: 'Complete Satisfaction',
      icon: <Smile className="w-6 h-6 text-indigo-600" />,
      desc: 'Our partners stand by their written parts and mechanical labor warranties. If anything is unbalanced after the service, your team will fix it promptly.'
    }
  ];

  const whyChooseUs = [
    {
      title: 'Certified & Bonded Crews',
      icon: <Users className="w-5 h-5 text-emerald-600" />,
      desc: 'Every assigned local garage worker is fully insured, background-checked, and certified in high-wind Florida building codes.'
    },
    {
      title: '24/7 Emergency Response',
      icon: <ShieldAlert className="w-5 h-5 text-emerald-600" />,
      desc: 'Trapped cars or broken track mechanisms do not wait. We offer active evening and weekend routes across both serve counties.'
    },
    {
      title: 'Modern Safe Equipment',
      icon: <Cpu className="w-5 h-5 text-emerald-600" />,
      desc: 'Technicians use top-tier safety torsion winding bars, digital balance meters, and heavy marine-rated coastal hardware protection.'
    },
    {
      title: 'Affordable Pricing Arrays',
      icon: <Award className="w-5 h-5 text-emerald-600" />,
      desc: 'Enjoy competitive flat travel-mile rates, clear component menu lists, and zero high-margin markup sales pitches.'
    }
  ];

  return (
    <div className="animate-fade-in animate-duration-150">
      {/* 1. ABOUT HERO SECTION */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950 text-white py-16 sm:py-24 relative overflow-hidden border-b border-blue-950">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl mx-auto space-y-6">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest bg-blue-500/10 border border-blue-400/20 py-1.5 px-4 rounded-full">
            Florida Referral Experts
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-heading tracking-tight leading-tight text-white">
            About Florida Garage Door Repair
          </h1>
          <div className="w-16 h-1.5 bg-blue-600 rounded-full mx-auto mt-4" />
          <p className="text-slate-350 text-sm sm:text-base leading-relaxed font-light">
            Providing homeowners across Broward and Palm Beach Counties with immediate connections to professional, vetted, and safety-compliant local technical dispatch crews.
          </p>
        </div>
      </section>

      {/* 2. COMPANY STORY SECTION */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest bg-indigo-50 py-1 px-3.5 rounded border border-indigo-100">
              Our Foundations
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 font-heading tracking-tight leading-tight">
              A Safer Way to Route Garage Repairs
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Florida Garage Door Repair was founded as a structured solution to a persistent problem: the difficulty South Florida homeowners face in locating licensed, reliable garage technicians when a breakdown strikes. The garage door functions as the single heaviest mechanical feature in standard homes, operating under hundreds of foot-pounds of stored dynamic force. When springs shear or cables loosen, professional help is required immediately.
            </p>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              We developed our specialized referral routing framework in partnership with LeadSmart LLC guidelines to establish a trustworthy link. We analyze, filter, and coordinate standby technical trucks along critical Broward and Palm Beach highways. This guarantees immediate diagnostic dispatches and protects households from rogue, unlicensed contractors.
            </p>
          </div>
          <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md h-80 sm:h-96">
            <img 
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800" 
              alt="Professional local workshop preparing garage technical gears" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-slate-950/80 p-6 text-white border-t border-white/10 flex justify-between items-center">
              <div>
                <p className="text-xs font-bold font-heading">LeadSmart Verified Route</p>
                <p className="text-[10px] text-slate-400">100% Insured Contractor Pool</p>
              </div>
              <span className="text-[10px] bg-emerald-500/20 text-emerald-400 border border-emerald-400/30 px-2.5 py-1 rounded font-bold uppercase">
                Active Code Status
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE VALUES MODULE */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-indigo-700 uppercase tracking-widest bg-indigo-100/60 py-1.5 px-4 rounded-full border border-indigo-200">
              Our Principles
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-4 font-heading">
              Our Core Mechanical Values
            </h2>
            <div className="w-16 h-1.5 bg-indigo-600 rounded-full mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((val, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4 hover:border-indigo-300 hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 bg-indigo-50 border border-indigo-100 rounded-xl flex items-center justify-center">
                  {val.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900">{val.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed font-light">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-4 space-y-4">
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest bg-emerald-50 py-1 px-3 rounded border border-emerald-100">
                Technical Credentials
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading leading-tight">
                Why Florida Families Depend on Our Match
              </h2>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                We take local service standards to heart. Each partner technician is equipped with heavy trucks, calibrated testing equipment, and durable replacement springs.
              </p>
              <div className="pt-2">
                <a
                  href="tel:8005550199"
                  className="bg-blue-700 hover:bg-blue-600 text-white font-extrabold px-6 py-3 rounded text-xs inline-flex items-center gap-2 transition-transform shadow-md cursor-pointer"
                >
                  <Phone className="w-4 h-4 fill-white stroke-white" /> Call Direct Dispatch
                </a>
              </div>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {whyChooseUs.map((item, idx) => (
                <div key={idx} className="flex gap-4 p-5 bg-slate-50 border border-slate-150 rounded-xl">
                  <div className="w-10 h-10 bg-emerald-50 border border-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    {item.icon}
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-extrabold text-slate-900 text-xs sm:text-sm">{item.title}</h4>
                    <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. OUR COMMITMENT */}
      <section className="py-20 bg-slate-900 text-white border-b border-slate-950">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6 sm:space-y-8">
          <Heart className="w-12 h-12 text-rose-500 mx-auto animate-pulse" />
          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading">Our Customer Safety Commitment</h2>
          <div className="w-16 h-1.5 bg-blue-600 rounded-full mx-auto" />
          
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
            "We understand that a failing garage door represents a massive security risk to your family. Our absolute commitment is to operate a high-caliber routing center that puts safety first. We promise to reassign your inquiry only to verified Florida technician groups who hold active state registrations and agree to strictly honest diagnostic schedules."
          </p>
          <div className="text-xs text-slate-400">
            <p className="font-extrabold text-slate-200">The Florida Dispatch Network Team</p>
            <p className="text-[10px]">Serving Palm Beach & Broward Residential Sectors</p>
          </div>
        </div>
      </section>

      {/* 6. CTA SECTION */}
      <section className="py-16 bg-blue-700 text-white relative">
        <div className="max-w-6xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading">Stuck Overhead Mechanism? Snapped Tension Spring?</h2>
          <p className="text-blue-100 text-xs sm:text-sm max-w-2xl mx-auto">
            Don't risk injury with complex DIY repairs. Contact our South Florida dispatch specialists immediately to coordinate standard travel-mile dispatch.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="tel:8005550199"
              className="bg-slate-900 hover:bg-slate-800 text-white font-extrabold py-3.5 px-8 rounded-lg text-xs tracking-wider uppercase flex items-center gap-2 shadow-lg transition-transform hover:scale-[1.02] cursor-pointer"
            >
              <Phone className="w-4 h-4 fill-white stroke-white" /> (800) 555-0199
            </a>
            <button
              onClick={() => onNavigate('contact')}
              className="bg-transparent hover:bg-blue-600 border border-white font-semibold py-3 px-6 rounded-lg text-xs cursor-pointer transition-colors"
            >
              Route Diagnostics Form &rarr;
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
