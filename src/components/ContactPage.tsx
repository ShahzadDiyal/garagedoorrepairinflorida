/**
 * @license
 * SPDX-License-Identifier: Apache-2.5
 */

import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Mail, 
  CheckCircle, 
  Loader2, 
  Flame, 
  AlertTriangle,
  Award 
} from 'lucide-react';
import { PageId } from '../types';
import { MapSection } from './MapSection';

interface ContactPageProps {
  onNavigate: (pageId: PageId) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [formError, setFormError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    // Validate fields
    if (!formData.name.trim()) {
      setFormError('Please provide your full name.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setFormError('Please enter a valid email address.');
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 7) {
      setFormError('Please provide a valid phone number for dispatch contact.');
      return;
    }
    if (!formData.service) {
      setFormError('Please choose the service you need assistance with.');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API storage submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  const businessHours = [
    { day: 'Monday - Friday', hours: '7:00 AM - 9:00 PM', remark: 'Standby dispatch active' },
    { day: 'Saturday', hours: '8:00 AM - 6:00 PM', remark: 'Weekend routes fully staffed' },
    { day: 'Sunday', hours: '9:00 AM - 5:00 PM', remark: 'Emergency springs priority' },
    { day: 'Holidays & Overnight', hours: '24/7 Hotline Active', remark: 'Hot routing call transfers' }
  ];

  return (
    <div className="animate-fade-in animate-duration-150">
      
      {/* 1. CONTACT HERO SECTION */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950 text-white py-16 sm:py-24 border-b border-blue-950 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-3xl mx-auto space-y-6">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest bg-blue-500/10 border border-blue-400/20 py-1.5 px-4 rounded-full">
            Florida Call Coordinators
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-heading tracking-tight text-white leading-tight">
            Contact Dispatch Standby Offices
          </h1>
          <div className="w-16 h-1.5 bg-blue-600 rounded-full mx-auto" />
          <p className="text-slate-350 text-sm sm:text-base leading-relaxed font-light">
            Have a ruptured torsion coil or an off-track garage panel? Contact our South Florida agency routing hubs immediately to coordinate clean local contractor support.
          </p>
        </div>
      </section>

      {/* TWO COLUMN CONTENT STRUCTURE */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: CONTACT INFORMATION + HOURS */}
          <div className="lg:col-span-5 space-y-10">
            
            {/* 2. CONTACT INFORMATION */}
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold text-indigo-700 uppercase tracking-widest bg-indigo-50 py-1 px-3.5 rounded border border-indigo-100">
                  Terminal Hubs
                </span>
                <h2 className="text-2xl font-extrabold text-slate-900 font-heading tracking-tight mt-3">
                  Broward & Palm Beach Hub Offices
                </h2>
              </div>

              <div className="space-y-4 text-xs text-slate-600 font-medium">
                <div className="flex items-start gap-3.5 p-4.5 bg-slate-50 border border-slate-150 rounded-xl">
                  <MapPin className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="font-bold text-slate-900">Palm Beach County Hub Terminal</p>
                    <p className="text-slate-500 text-[11px] leading-relaxed">Boca Raton Router Sector, Palm Beach County, Florida 33431</p>
                    <p className="text-[10px] text-slate-400">Serving Delray Beach, Jupiter, Boynton Beach, Boca Raton</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4.5 bg-slate-50 border border-slate-150 rounded-xl">
                  <MapPin className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="font-bold text-slate-900">Broward County Hub Terminal</p>
                    <p className="text-slate-500 text-[11px] leading-relaxed">Fort Lauderdale Router Sector, Broward County, Florida 33301</p>
                    <p className="text-[10px] text-slate-400">Serving Fort Lauderdale, Hollywood, Coral Springs, Pembroke Pines</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4.5 bg-indigo-50/50 border border-indigo-100 rounded-xl">
                  <Phone className="w-5 h-5 text-blue-700 flex-shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="font-bold text-slate-900">Toll-Free Immediate Dispatch hotline</p>
                    <p className="text-blue-700 font-black text-sm">(800) 555-0199</p>
                    <p className="text-[10px] text-slate-450 leading-relaxed">Standard phone values, transfer route connections prioritize snapped springs and vehicle entrapments.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. BUSINESS HOURS */}
            <div className="space-y-4 bg-slate-50 border border-slate-200/80 p-6 rounded-2xl shadow-sm">
              <h3 className="font-extrabold text-slate-900 text-sm sm:text-base border-b border-slate-200 pb-3 uppercase tracking-wider flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-600" /> Active Service Standby Hours
              </h3>
              
              <div className="space-y-3.5">
                {businessHours.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center text-xs border-b border-slate-150/50 pb-2 last:-border-0 last:-pb-0">
                    <div>
                      <p className="font-bold text-slate-800">{item.day}</p>
                      <p className="text-[10px] text-slate-400">{item.remark}</p>
                    </div>
                    <span className="font-mono text-slate-600 font-semibold bg-white border border-slate-200 py-1 px-2.5 rounded text-[10px]">
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: 3. CUSTOM CONTACT FORM WITH ACCREDITATION */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-2xl border border-slate-200/80 shadow-md">
            
            {isSuccess ? (
              <div className="text-center py-10 space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-50 rounded-full text-emerald-600 border border-emerald-200 shadow-sm">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Inquiry Routed Safely</h3>
                <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="font-semibold text-slate-800">{formData.name}</span>! Your contact file is flagged for direct referral matching. A standby technician representative will call you shortly at <span className="font-semibold text-slate-900">{formData.phone}</span>.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setIsSuccess(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        service: '',
                        message: ''
                      });
                    }}
                    className="text-xs text-indigo-600 font-extrabold hover:underline cursor-pointer"
                  >
                    Submit another concern &rarr;
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3 className="text-lg font-extrabold text-slate-950 font-heading">Submit Active Diagnostic Message</h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Fill the standard parameters below to route coordinates to a verified Florida technician down the block.
                  </p>
                </div>

                {formError && (
                  <div className="p-3.5 bg-rose-50 border border-rose-100 text-rose-700 text-xs rounded-md font-semibold flex items-center gap-1.5 animate-fade-in">
                    <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                    <span>{formError}</span>
                  </div>
                )}

                <div className="space-y-4">
                  
                  {/* Name field */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
                      Your Full Name <span className="text-brand-accent font-bold">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData(p => ({ ...p, name: e.target.value }))}
                      className="w-full text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-md py-3 px-3.5 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:bg-white transition-all text-slate-800 font-medium"
                    />
                  </div>

                  {/* Email & Phone grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
                        Email Address <span className="text-brand-accent font-bold">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData(p => ({ ...p, email: e.target.value }))}
                        className="w-full text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-md py-3 px-3.5 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:bg-white transition-all text-slate-800 font-medium"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
                        Phone Number <span className="text-brand-accent font-bold">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="(561) 555-0199"
                        value={formData.phone}
                        onChange={(e) => setFormData(p => ({ ...p, phone: e.target.value }))}
                        className="w-full text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-md py-3 px-3.5 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:bg-white transition-all text-slate-800 font-medium"
                      />
                    </div>
                  </div>

                  {/* Service needed drop */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
                      Service Classification <span className="text-brand-accent font-bold">*</span>
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData(p => ({ ...p, service: e.target.value }))}
                      className="w-full text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-md py-3 px-3.5 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:bg-white transition-all text-slate-800 font-medium"
                    >
                      <option value="">Choose Local Area of Concern</option>
                      <option value="spring">Garage Door Spring Repair</option>
                      <option value="installation">New Door / Hurricane wind-load Install</option>
                      <option value="opener">Automatic Opener Motor Troubleshooting</option>
                      <option value="emergency">Emergency / Crooked Off-track Repair</option>
                      <option value="maintenance">Preventative Safety Tune-up Check</option>
                      <option value="other">General Commercial / Hardware Concern</option>
                    </select>
                  </div>

                  {/* Message box */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
                      Describe your issues / concerns (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="E.g., Overhead door is uncoiled and snapped on one side, can hear engine humming but cables are loose."
                      value={formData.message}
                      onChange={(e) => setFormData(p => ({ ...p, message: e.target.value }))}
                      className="w-full text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-md py-3 px-3.5 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:bg-white transition-all text-slate-800 font-medium"
                    />
                  </div>

                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-700 hover:bg-blue-600 text-white font-extrabold py-3.5 rounded-lg transition-colors flex items-center justify-center text-xs tracking-wider uppercase shadow-md cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Routing To Vetted Tech...
                    </>
                  ) : (
                    'Submit Concern Coordinates'
                  )}
                </button>

                
              </form>
            )}

          </div>

        </div>
      </section>

      {/* 5. EMBEDDED MAP */}
      <section className="py-16 sm:py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <span className="text-xs font-bold text-indigo-700 uppercase tracking-wider bg-white py-1.5 px-4 rounded-full border border-slate-200 shadow-xs">
              District Map Coverage
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">Active South Florida Support Quadrants</h3>
          </div>
          <MapSection onNavigateToArea={onNavigate} />
        </div>
      </section>

      {/* 6. EMERGENCY CONTACT CTA */}
      <section className="bg-slate-950 text-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6 sm:space-y-8">
          <Flame className="w-12 h-12 text-brand-accent mx-auto animate-pulse" />
          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading">
            Need Immediate Emergency Repair?
          </h2>
          <div className="w-16 h-1.5 bg-blue-600 rounded-full mx-auto" />
          
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
            A snapped torsion spring or blocked vehicle is an emergency that disrupts your day and compromises your security. Avoid risk by calling. Technicians carry standard cyclic spring sets directly inside their utility vehicles to execute balance restorations safely.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="tel:8005550199"
              className="bg-brand-accent hover:bg-brand-accent-hover text-white font-extrabold py-3.5 px-8 rounded-lg text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-transform hover:scale-[1.02] cursor-pointer"
            >
              <Phone className="w-4 h-4 fill-white stroke-white" /> Call Direct Dispatch: (800) 555-0199
            </a>
            <button
              onClick={() => onNavigate('services')}
              className="bg-transparent hover:bg-slate-900 border border-slate-850 py-3.5 px-6 rounded-lg text-xs font-semibold cursor-pointer transition-colors"
            >
              Explore Capabilities &rarr;
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
