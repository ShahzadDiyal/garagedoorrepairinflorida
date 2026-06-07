/**
 * @license
 * SPDX-License-Identifier: Apache-2.5
 */

import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  HelpCircle, 
  ChevronDown, 
  CheckCircle, 
  ShieldCheck, 
  Award, 
  Truck, 
  Star, 
  ArrowRight,
  Flame,
  Wrench
} from 'lucide-react';
import { PageId } from '../types';
import { areasData } from '../data/areasData';
import { MapSection } from './MapSection';

interface AreasPageProps {
  currentPage: PageId;
  onNavigate: (pageId: PageId) => void;
}

export const AreasPage: React.FC<AreasPageProps> = ({ currentPage, onNavigate }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const area = areasData.find(x => x.id === currentPage);
  if (!area) {
    return <div className="text-center py-20">Area details are currently unavailable.</div>;
  }

  const isBroward = area.id === 'area-broward';

  // Specific Sub Cities as requested in the requirements
  const subCitiesBroward = [
    {
      name: 'Fort Lauderdale',
      text: 'Our active coastal route provides same-day responses to Fort Lauderdale beaches, Las Olas, and inland districts, focusing on premium rust-resistant hardware replacements.',
      zipCodes: '33301, 33304, 33308, 33311, 33312'
    },
    {
      name: 'Hollywood',
      text: 'Positioned along Federal Hwy and the beachfront boardwalk, our dispatch partners handle stuck rollers, crooked tracks, and hurricane-proof replacements.',
      zipCodes: '33020, 33021, 33023'
    },
    {
      name: 'Pembroke Pines',
      text: 'Suburban communities along Pines Blvd trust us for quiet belt-drive automatic opener setups and scheduled mechanical safety maintenance.',
      zipCodes: '33025, 33027'
    },
    {
      name: 'Miramar',
      text: 'Same-day morning-booked slots are active for Miramar families. Quick, upfront flat rates with zero unexpected overhead surcharges.',
      zipCodes: '33029, 33025'
    },
    {
      name: 'Coral Springs',
      text: 'From Turtle Run to Coral Hills, we coordinate fast-responding torsion spring repairs and off-track garage panel secures on demand.',
      zipCodes: '33065, 33067'
    }
  ];

  const subCitiesPalmBeach = [
    {
      name: 'Boca Raton',
      text: 'Providing high-end Carriage style insulated installs and super-quiet LiftMaster repairs to Boca Raton households. Clean background-checked crews.',
      zipCodes: '33431, 33432, 33433, 33486'
    },
    {
      name: 'West Palm Beach',
      text: 'Daily vehicle coordinates route technicians along Clematis and Okeechobee Blvd to address snapped cables and malfunctioning wall keypad sensors.',
      zipCodes: '33401, 33405, 33409'
    },
    {
      name: 'Delray Beach',
      text: 'Coastal humidity fatiguing your garage door? Delray Avenue residents receive corrosion-barrier springs and quiet nylon roller updates.',
      zipCodes: '33444, 33445, 33483'
    },
    {
      name: 'Boynton Beach',
      text: 'Expert technicians are pre-deployed along Boynton Beach routes to repair automatic openers, stripped drives, and loose safety eye sensors.',
      zipCodes: '33426, 33435, 33436'
    },
    {
      name: 'Jupiter',
      text: 'From beachfront villas to local docks, we handle emergency windload garage structural braces and same-day spring snaps.',
      zipCodes: '33458, 33469'
    }
  ];

  const subCities = isBroward ? subCitiesBroward : subCitiesPalmBeach;

  const countyServices = [
    { name: 'Torsion Spring Replacement', path: 'service-spring', desc: 'Removing broken high-tension steel coils' },
    { name: 'Silent Opener Diagnostic', path: 'service-opener', desc: 'Fixing Chamberlain, LiftMaster systems' },
    { name: 'Emergency Track Realignment', path: 'service-emergency', desc: 'Correcting crooked unstable jams in 90 mins' },
    { name: 'Hurricane Storm-Load Setup', path: 'service-affordable', desc: 'Meeting strict local wind pressure codes' }
  ];

  // Specific county FAQs to meet SEO rules
  const localFaqs = isBroward ? [
    {
      q: 'How fast will a technician arrive in Broward County?',
      a: 'Our coordination center monitors over 8 mobile support units. In Fort Lauderdale, Hollywood, or Coral Springs, an assigned partner technician usually arrives on your driveway within 90 minutes of call confirmation.'
    },
    {
      q: 'Are Broward County garage doors subject to strict building windload rules?',
      a: 'Yes. Broward County sits entirely within Florida\'s High Velocity Hurricane Zone (HVHV). Any replacement or new garage door install must feature rated interior steel strut bracing to withstand winds up to 140-170 MPH.'
    },
    {
      q: 'Do you charge extra for weekend dispatches in Pembroke Pines or Miramar?',
      a: 'No. Standard home service repairs scheduled during general hours have flat-trip rates. Emergency lock-ins or dangerous spring splits on Sunday receive prompt priority dispatch.'
    }
  ] : [
    {
      q: 'What Palm Beach communities receive active daily service routes?',
      a: 'We cover the entire county range. Our dispatch map runs routes through Boca Raton, West Palm Beach, Delray Beach, Jupiter, Boynton Beach, and Wellington on a continuous schedule.'
    },
    {
      q: 'Why does seaside air in Boca Raton or Jupiter snap springs so suddenly?',
      a: 'Coastal Palm Beach salt air triggers microscopic pits on uncoated metal coils. Over 5,000 to 10,000 cycles, these rust cavities trigger rapid metal fatigue, culminating in a violent, loud torsion spring snap.'
    },
    {
      q: 'How can I verify if my local Palm Beach repair complies with warranties?',
      a: 'Every partner we route provides a written, itemized invoice detailing the specific ciclo warranty on replacement springs and parts before they start doing repairs.'
    }
  ];

  const toggleFaq = (idx: number) => {
    setOpenFaq(idx === openFaq ? null : idx);
  };

  return (
    <div className="animate-fade-in animate-duration-150">
      
      {/* 1. LOCAL HERO SECTION */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950 text-white py-16 sm:py-24 border-b border-blue-950 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest bg-emerald-500/10 border border-emerald-400/20 py-1.5 px-3.5 rounded-full inline-flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              Active Dispatch Coverage: {area.county}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
              {area.title}
            </h1>
            <div className="w-16 h-1.5 bg-blue-600 rounded-full mx-auto lg:mx-0" />
            <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed font-light max-w-2xl mx-auto lg:mx-0">
              {area.description}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="tel:8005550199"
                className="bg-brand-accent hover:bg-brand-accent-hover text-white font-extrabold px-8 py-4 rounded-xl shadow-lg flex items-center justify-center gap-2.5 w-full sm:w-auto text-center cursor-pointer transition-transform hover:scale-[1.02]"
              >
                <Phone className="w-4 h-4 fill-white stroke-white" /> Call Local Agent: (800) 555-0199
              </a>
              <button
                onClick={() => onNavigate('contact')}
                className="bg-slate-800 hover:bg-slate-750 text-white border border-slate-700 font-bold px-6 py-4 rounded-xl transition-all w-full sm:w-auto text-xs text-center cursor-pointer"
              >
                Book Dispatch Online
              </button>
            </div>
          </div>

          {/* Quick local trust badges container */}
          <div className="lg:col-span-5 bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-5 text-slate-300 text-xs">
            <h4 className="font-bold text-white uppercase text-center border-b border-white/10 pb-3">Active {area.county} Guarantees</h4>
            
            <div className="space-y-4">
              {area.highlights.map((hi, i) => (
                <div key={i} className="flex gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span>{hi}</span>
                </div>
              ))}
            </div>

            <div className="pt-3 border-t border-white/10 text-center">
              <p className="text-[10px] text-slate-400">Palm Beach & Broward ZIPs listed below</p>
            </div>
          </div>

        </div>
      </section>

      {/* 2. ABOUT LOCAL SERVICES */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <div className="space-y-5">
            <span className="text-xs font-bold text-blue-700 uppercase bg-blue-50 py-1 px-3.5 rounded border border-blue-105">
              Regional Environment Threat Factors
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
              Mitigating Salt Corrosion & Wind Pressure in {area.county}
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-light">
              South Florida presents a beautifully scenic landscape, but its high coastal humidity, baking sunshine, and salt-laden Atlantic wind-streams degrade standard residential metal doors. When salt crystals crystallize on moving steel springs or within track grooves, oxidation rust creates intense friction.
            </p>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-light">
              Our service network routes certified expert crews who specialize in climate-resilient garage door solutions. We connect households directly with engineers providing heavy zinc galvanizing track hardware, noise-insulating nylon rollers, and high-wind structural reinforcements that keeps your property compliant with wind-load regulations.
            </p>

            <div className="flex border-t border-slate-100 pt-5 gap-6 text-xs text-slate-500 font-semibold">
              <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-emerald-600" /> Insured Partners</span>
              <span className="flex items-center gap-1.5"><Truck className="w-4 h-4 text-blue-600" /> 90-Min Dispatch Route</span>
            </div>
          </div>

          {/* <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm space-y-5">
            <h3 className="font-extrabold text-slate-900 text-sm sm:text-base border-b border-slate-200 pb-3 uppercase tracking-wider">
              Latest Completed Operations in {area.county}
            </h3>
            
            <div className="space-y-4">
              {area.reviews.map(rev => (
                <div key={rev.id} className="bg-white p-4 rounded-xl border border-slate-150 space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-bold text-slate-800">{rev.name}</span>
                    <span className="font-mono text-slate-400">{rev.date}</span>
                  </div>
                  <div className="flex items-center gap-0.5">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 stroke-amber-400" />
                    ))}
                    <span className="text-[10px] ml-1 bg-emerald-50 border border-emerald-100 text-emerald-700 py-0.5 px-2 rounded-full font-bold">
                      Verified Task
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 italic font-medium leading-relaxed">
                    "{rev.text}"
                  </p>
                  <p className="text-[10px] text-slate-400 font-semibold">• Active Route: {rev.location}</p>
                </div>
              ))}
            </div>
          </div> */}

        </div>
      </section>

      {/* 3. SUB CITIES GRID SECTION */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-indigo-700 uppercase tracking-widest bg-indigo-50 py-1.5 px-4 rounded-full border border-indigo-150">
              Community Dispatch Grid
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-4 font-heading">
              Neighborhood Service Centers in {area.county}
            </h2>
            <div className="w-16 h-1.5 bg-indigo-600 rounded-full mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subCities.map((city, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow group"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-1.5 text-blue-700">
                    <MapPin className="w-4 h-4" />
                    <h3 className="font-extrabold text-slate-900 text-sm sm:text-base group-hover:text-blue-700 transition-colors">
                      {city.name} Garage Repair
                    </h3>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed font-light">
                    {city.text}
                  </p>
                  <div className="pt-2 text-[10px] text-slate-400 font-mono tracking-wider">
                    ZIP Coverage: {city.zipCodes}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 space-y-2">
                  {/* Service links */}
                  <div className="flex flex-wrap gap-x-2.5 gap-y-1 text-[10px] text-indigo-600 font-extrabold">
                    <button onClick={() => onNavigate('service-spring')} className="hover:underline cursor-pointer">Sprit-Springs</button>
                    <span>&bull;</span>
                    <button onClick={() => onNavigate('service-opener')} className="hover:underline cursor-pointer">Opener-Fix</button>
                    <span>&bull;</span>
                    <button onClick={() => onNavigate('service-emergency')} className="hover:underline cursor-pointer">24h-Emergency</button>
                  </div>
                  {/* City local CTA */}
                  <a
                    href="tel:8005550199"
                    className="block text-center w-full py-2 bg-slate-50 group-hover:bg-blue-750 group-hover:text-white border border-slate-200 group-hover:border-blue-750 rounded text-[10px] font-bold text-slate-700 uppercase transition-colors cursor-pointer"
                  >
                    Request {city.name} Dispatch
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. SERVICES IN THAT COUNTY */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-slate-500 bg-slate-50 py-1 px-3.5 rounded border">
              Vetted Capability Menu
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-4 leading-tight font-heading">
              Our Active Repair Solutions for {area.county} Homes
            </h2>
            <div className="w-16 h-1.5 bg-blue-700 rounded-full mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {countyServices.map((serv, idx) => (
              <div 
                key={idx}
                className="bg-slate-50 p-5 rounded-2xl border border-slate-150 space-y-3 cursor-pointer hover:border-blue-300 transition-colors"
                onClick={() => onNavigate(serv.path as PageId)}
              >
                <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 text-blue-700 flex items-center justify-center">
                  <Wrench className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-900 text-xs sm:text-sm">{serv.name}</h4>
                  <p className="text-[11px] text-slate-500 mt-1">{serv.desc}</p>
                </div>
                <span className="text-[10px] text-blue-700 font-bold flex items-center gap-1 group">
                  Active Dispatch <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. CTA SECTION */}
      <section className="py-16 bg-blue-700 text-white relative">
        <div className="max-w-6xl mx-auto px-4 text-center space-y-5">
          <span className="inline-flex items-center gap-1.5 bg-blue-600 text-emerald-400 text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full border border-blue-500/20">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            Same-Day Dispatch Wait times under 90 minutes
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">Locked Inside? Broken Spring Hanging dangerously?</h2>
          <p className="text-blue-100 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            We route experienced certified techs directly along local county crossroads to perform immediate balance recoveries. Zero hidden surprise surcharge rates.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-2">
            <a 
              href="tel:8005550199" 
              className="bg-slate-950 hover:bg-slate-900 text-white py-3.5 px-8 rounded-lg text-xs font-extrabold shadow-md transition-transform hover:scale-[1.02] cursor-pointer"
            >
              (800) 555-0199 Call Agent
            </a>
            <button 
              onClick={() => onNavigate('contact')}
              className="px-6 py-3.5 rounded-lg border border-white text-xs font-semibold hover:bg-blue-600 cursor-pointer transition-colors"
            >
              Submit Diagnostic Request Form
            </button>
          </div>
        </div>
      </section>

      {/* 6. FAQ SECTION Accoridons */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-indigo-700 bg-indigo-50 py-1.5 px-4 rounded-full border border-indigo-100">
              Local Helpful Helpdesk
            </span>
            <h3 className="text-2xl font-extrabold text-slate-900 mt-3 font-heading">
              Frequently Asked Questions: {area.county} Area
            </h3>
          </div>

          <div className="space-y-4">
            {localFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left p-4 sm:p-5 flex justify-between items-center bg-white font-extrabold text-slate-900 text-xs sm:text-sm hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="p-4 sm:p-5 text-xs text-slate-600 leading-relaxed font-light border-t border-slate-150 bg-slate-50/50">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. EMBEDDED MAP SECTION */}
      <section className="py-16 sm:py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <span className="text-xs font-bold text-blue-700 uppercase tracking-wider bg-slate-50 py-1.5 px-4 rounded-full border border-slate-200">
              Interactive Route Logistics
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">Active {area.county} Service Area Map</h3>
          </div>
          <MapSection onNavigateToArea={onNavigate} />
        </div>
      </section>

    </div>
  );
};
