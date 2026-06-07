/**
 * @license
 * SPDX-License-Identifier: Apache-2.5
 */

import React from 'react';
import { 
  Check, 
  Wrench, 
  ShieldCheck, 
  Sparkles, 
  Phone, 
  Clock, 
  HelpCircle, 
  Calendar, 
  Award, 
  Truck, 
  Percent 
} from 'lucide-react';
import { PageId } from '../types';

interface ServicesPageProps {
  onNavigate: (pageId: PageId) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {

  const servicesList = [
    {
      id: 'service-sameday',
      title: 'Garage Door Repair',
      description: 'Your garage door is a complex, heavy machine with dozens of high-tension rollers, hinges, track components, and bearing systems. When one component gets misaligned or warped, the entire overhead balance is compromised, putting stress on your electric motor. Our South Florida partner technicians carry a complete selection of premium hardware to repair any mechanical issue in a single visit.',
      bullets: [
        'Bent tracks corrected and aligned',
        'Broken steel cable replacement',
        'Noisy roller wheel replacement',
        'Hinges, brackets, and drums repaired'
      ],
      benefits: [
        'Restores immediate safe operation to your heavy garage door',
        'Stops friction noises and reduces electric opener strain',
        'Prevents the door from slipping off-track and collapsing'
      ],
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800',
      ctaText: 'Schedule Quick Garage Door Repair'
    },
    {
      id: 'service-affordable',
      title: 'Garage Door Installation',
      description: 'Upgrade your home with a beautiful, high-efficiency, Hurricane-rated garage door. South Florida building codes are among the strictest in the nation due to intense tropical wind vectors. We coordinate connections to certified local specialists who supply and install state-of-the-art insulated steel doors that enhance both curb appeal and structural storm safety.',
      bullets: [
        'Wind-load hurricane rated doors compliant with Florida codes',
        'Premium carriage house and modern glass-pane styles',
        'Highly insulated layers that lock out South Florida humidity',
        'Secure structural perimeter weather seal installs'
      ],
      benefits: [
        'Significantly increases your single or double-car property equity',
        'Saves money on energy bills and indoor cooling costs',
        'Provides top-tier resistance against flying hurricane debris'
      ],
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800',
      ctaText: 'Request Professional Door Consultation'
    },
    {
      id: 'service-spring',
      title: 'Spring Repair (Torsion & Extension)',
      description: 'A broken garage door spring represents an immediate danger and leaves your car trapped. Torsion springs support the massive weight of your heavy door through several hundred pounds of stored torque force. When a snap occurs, you need certified technicians who possess professional winding cones and heavy security rods to replace them safely.',
      bullets: [
        'High-cycle torsion spring winding on site',
        'Extension springs replaced with safety restraint cables',
        'Complete mechanical balancing check included with service',
        'Dual spring replacement discounts to prevent second snaps'
      ],
      benefits: [
        'Safely lifts your heavy garage door back to neutral balance',
        'Avoids dangerous DIY high-tension tool accidents',
        'Saves electric opener gears from sudden burnout'
      ],
      image: 'https://images.unsplash.com/photo-1558211583-d26f610c1eb1?auto=format&fit=crop&q=80&w=800',
      ctaText: 'Book Same-Day Tension Spring Repair'
    },
    {
      id: 'service-opener',
      title: 'Opener Repair & Programming',
      description: 'Your electric opener is the brain of your entry. If the motor hums but the chain won\'t catch, or if the door refuses to close and keeps reversing, our certified expert partners stand ready with replacement gears, capacitors, sensors, and full replacement wall consoles to restore modern smart home entry convenience.',
      bullets: [
        'Troubleshooting for LiftMaster, Chamberlain, and Genie',
        'Stripped nylon drive gear and sprocket repairs',
        'Safety photo-eye sensor align and rewiring',
        'Wireless keypads and remote transmitter programming'
      ],
      benefits: [
        'Restores secure automatic lock control to your home',
        'Resolves annoying random door reversals and failures',
        'Enables smart app control with real-time phone alerts'
      ],
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800',
      ctaText: 'Request Expert Opener Diagnosis'
    },
    {
      id: 'service-emergency',
      title: 'Emergency Repair (24/7 Dispatch)',
      description: 'Garage doors break at the worst hours possible, locking you out or trapping your vehicle in early mornings. We keep emergency routing active across Broward & Palm Beach 24 hours a day, 7 days a week, dispatching near-by field units immediately to secure a compromised opening or lift unstable crooked doors.',
      bullets: [
        'Active 24/7 call centers with rapid response coordination',
        'Unjamming crooked, crooked, or cocked door assemblies',
        'Securing properties after accidental backing-in dent damage',
        'Urgent off-track wheel resets done safely'
      ],
      benefits: [
        'Gets you to critical appointments or work schedules',
        'Restores lock security to overnight garage openings',
        'Mitigates dangerous structural door collapse risks'
      ],
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800',
      ctaText: 'Dispatch Emergency Technician Now'
    },
    {
      id: 'service-sameday',
      title: 'Maintenance & Safety Tune-Up',
      description: 'Stop expensive emergencies before they happen. South Florida seawater salt, extreme humidity, and high cycle count deteriorate metal coatings. Our comprehensive maintenance checks analyze 12 structural areas, tighten critical hardware, adjust spring balance, and coat assemblies with moisture-blocking lubricant.',
      bullets: [
        'Complete 12-point mechanical safety checklist inspect',
        'Torsion spring torque and door balance adjustments',
        'Application of premium silicone rust-block lubricants',
        'Auto-reverse safety eye sensors testing'
      ],
      benefits: [
        'Extends moving part lifespans by up to 40%',
        'Prevents loud squealing and groaning noises',
        'Ensures wind-load braces are fully ready for storm seasons'
      ],
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800',
      ctaText: 'Schedule 12-Point Safety Maintenance'
    }
  ];

  const processSteps = [
    {
      num: '01',
      title: 'Request Routed Booking',
      desc: 'Call our direct dispatch center or submit your online diagnostic request form. We analyze coverage instantly.'
    },
    {
      num: '02',
      title: 'Vetted Technician Arrives',
      desc: 'A background-checked, insured, certified Florida partner technician is routed with a fully stocked truck within 90 minutes.'
    },
    {
      num: '03',
      title: 'Honest Execution',
      desc: 'You receive a complete written upfront flat estimate. The technician resolves the issue under robust warranty schedules.'
    }
  ];

  const reasonsToTrust = [
    {
      title: 'LeadSmart Standard-Compliant',
      desc: 'We strictly follow regulatory recommendations to avoid bait-and-switch quotes. Every pricing element is upfront.'
    },
    {
      title: 'Fully Stocked Trucks',
      desc: 'Vetted partner vehicles are packed with premium high-cycle springs, aircraft-grade cables, and replacement rollers.'
    },
    {
      title: 'Local Florida Climate Prep',
      desc: 'Our partners favor weather-stripping and hardware with salt-resistant alloys to prevent high coastal oxidation.'
    }
  ];

  return (
    <div className="animate-fade-in animate-duration-150">
      
      {/* 1. SERVICES HERO SECTION */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950 text-white py-16 sm:py-24 border-b border-blue-950 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-3xl mx-auto space-y-6">
          <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest bg-blue-500/15 border border-blue-400/20 py-1.5 px-4 rounded-full">
            Our Service Classification
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-heading tracking-tight text-white leading-tight">
            Professional Garage Door Services in Florida
          </h1>
          <div className="w-16 h-1.5 bg-blue-600 rounded-full mx-auto" />
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
            Providing reliable connection to vetted, licensed repair, installation, and preventative maintenance crews across Palm Beach and Broward.
          </p>
        </div>
      </section>

      {/* 2. INDIVIDUAL SERVICE SECTIONS (ALTERNATING DESIGN) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 sm:space-y-32">
          {servicesList.map((service, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div 
                key={idx}
                className={`flex flex-col lg:items-center gap-12 lg:gap-16 ${
                  isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Supporting Image Column */}
                <div className="w-full lg:w-1/2 relative rounded-2xl overflow-hidden border border-slate-200 shadow bg-slate-100 h-64 sm:h-96">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-slate-900/90 border border-slate-700/80 text-white text-[10px] font-bold py-1 px-3 rounded-full">
                    Floridian Home Protect Approved
                  </div>
                </div>

                {/* Text & Checklist Detail Column */}
                <div className="w-full lg:w-1/2 space-y-6">
                  <span className="text-xs font-bold text-blue-700 uppercase tracking-widest bg-blue-50 py-1 px-3 rounded">
                    Service Feature {idx + 1}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading tracking-tight leading-tight">
                    {service.title}
                  </h2>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-light">
                    {service.description}
                  </p>

                  {/* Bullet List */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-extrabold uppercase text-slate-400 tracking-wider">Common Work Focuses</h4>
                    <ul className="text-xs text-slate-700 space-y-1.5 grid grid-cols-1 sm:grid-cols-2 gap-x-4">
                      {service.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-center gap-1.5 font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-700 flex-shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefit Cards */}
                  <div className="p-4 bg-slate-50 border border-slate-150 rounded-xl space-y-2">
                    <h4 className="text-xs font-bold text-slate-900 uppercase">Key Customer Benefits:</h4>
                    <ul className="text-xs text-slate-600 space-y-1 font-medium">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <Check className="w-3.5 h-3.5 text-emerald-600 mt-0.5 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA button */}
                  <div className="pt-2">
                    <button
                      onClick={() => onNavigate(service.id as PageId)}
                      className="bg-blue-700 hover:bg-blue-600 text-white font-extrabold px-6 py-3 rounded text-xs transition-colors shadow shadow-indigo-100 cursor-pointer text-center"
                    >
                      {service.ctaText} &rarr;
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. PROCESS SECTION */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-indigo-700 uppercase tracking-widest bg-indigo-100 py-1 px-4 rounded-full border border-indigo-200">
              Technical Dispatch Route
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-4 font-heading">
              Our Verified 3-Step Coordination Process
            </h2>
            <div className="w-16 h-1.5 bg-indigo-600 rounded-full mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {processSteps.map((step, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm relative space-y-4">
                <span className="absolute top-4 right-6 text-4xl font-black font-mono text-slate-100 selection:bg-transparent">
                  {step.num}
                </span>
                <span className="w-8 h-8 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold flex items-center justify-center">
                  {idx + 1}
                </span>
                <h3 className="text-base font-bold text-slate-900 pt-2">{step.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed font-light">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY CUSTOMERS TRUST US */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest bg-slate-100 py-1 px-4 rounded border">
              Local Authority
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-4 font-heading">
              Why Florida Communities Trust Our Network
            </h2>
            <div className="w-16 h-1.5 bg-blue-700 rounded-full mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reasonsToTrust.map((reason, idx) => (
              <div key={idx} className="p-6 bg-slate-50 border border-slate-200 rounded-xl space-y-2 text-center">
                <span className="w-10 h-10 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3">
                  <ShieldCheck className="w-5 h-5" />
                </span>
                <h3 className="font-extrabold text-slate-900 text-sm sm:text-base">{reason.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed font-light">{reason.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA BANNER */}
      <section className="py-16 bg-blue-700 text-white border-t border-blue-850">
        <div className="max-w-6xl mx-auto px-4 text-center space-y-6">
          <span className="inline-flex items-center gap-1.5 bg-blue-600/35 border border-white/10 text-emerald-400 text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" /> Emergency Service Route Standby
          </span>
          <h2 className="text-3xl font-extrabold font-heading">Complete 12-point Safety Tune-ups Only $49</h2>
          <p className="text-blue-100 text-xs sm:text-sm max-w-xl mx-auto">
            Book our preventative maintenance package before storm season arrives to check track alignment, spring cycle strain, and smart code sensors.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-2">
            <a
              href="tel:8005550199"
              className="bg-slate-900 hover:bg-slate-800 text-white font-extrabold py-3.5 px-8 rounded-lg text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg transition-transform hover:scale-[1.02] cursor-pointer"
            >
              <Phone className="w-4 h-4 fill-white stroke-white" /> Call Dispatch Center: (800) 555-0199
            </a>
            <button
              onClick={() => onNavigate('contact')}
              className="bg-transparent hover:bg-blue-600 border border-white font-semibold py-3 px-6 rounded-lg text-xs cursor-pointer transition-colors"
            >
              Request Call Back &rarr;
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
