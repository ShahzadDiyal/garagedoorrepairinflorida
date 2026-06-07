/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Shield, Sparkles, Phone, Mail, MapPin, Hammer, X } from 'lucide-react';
import { PageId } from '../types';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [modalTitle, setModalTitle] = useState<string | null>(null);
  const [modalMessage, setModalMessage] = useState<string | null>(null);

  const openModal = (title: string, message: string) => {
    setModalTitle(title);
    setModalMessage(message);
  };

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 relative">
      {/* Interactive Modal Overlay */}
      {modalTitle && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-4 z-[9999] animate-fade-in animate-duration-150">
          <div className="bg-slate-900 border border-slate-700/60 rounded-xl shadow-2xl max-w-md w-full p-6 text-slate-100 flex flex-col space-y-4">
            <div className="flex justify-between items-start">
              <h3 className="font-heading font-extrabold text-white text-lg tracking-tight">
                {modalTitle}
              </h3>
              <button 
                onClick={() => { setModalTitle(null); setModalMessage(null); }}
                className="p-1 hover:bg-slate-800 rounded-full text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-sm font-normal text-slate-300 leading-relaxed">
              {modalMessage}
            </p>
            <div className="flex justify-end pt-2">
              <button
                onClick={() => { setModalTitle(null); setModalMessage(null); }}
                className="bg-brand-blue text-white text-xs font-bold py-2 px-5 rounded hover:bg-brand-blue-hover transition-colors cursor-pointer"
              >
                Accept & Close
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Upper footer trust stripe */}
      <div className="border-b border-slate-800/80 bg-slate-950/40 py-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-brand-blue/10 border border-brand-blue/30 rounded-lg flex items-center justify-center text-brand-blue">
              <Shield className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <p className="text-sm font-bold text-white">Licensed & In-Route Partners</p>
              <p className="text-xs text-slate-400">All participating garage door repair pros are pre-screened, legal, and local</p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-xs font-semibold text-white">
            <span className="bg-slate-800 py-1.5 px-3 rounded">Storm-Ready Hurricane Bracing</span>
            <span className="bg-slate-800 py-1.5 px-3 rounded">Zero Commission Up-Selling</span>
            <span className="bg-slate-800 py-1.5 px-3 rounded">NIGHTS & WEEKENDS • SAME RATES</span>
          </div>
        </div>
      </div>

      {/* Main 4-column content directory */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-12">
        {/* Column 1: Brand & trust statement */}
        <div className="lg:col-span-4 space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-blue rounded-md flex items-center justify-center text-white">
              <Hammer className="w-4 h-4" />
            </div>
            <span className="font-heading font-extrabold text-lg text-white tracking-tight">
              Florida Garage <span className="text-brand-accent">Door Repair</span>
            </span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Florida’s trusted gateway for same-day garage door spring replacement, faulty opener repairs, and off-track security restorations. We connect residential properties in Broward and Palm Beach counties with insured, screen-tested local garage door specialists.
          </p>
          <div className="text-xs text-slate-500 pt-2 border-t border-slate-800/50 space-y-1">
            <p>• Emergency dispatch: 24/7 routing</p>
            <p>• Advertising standards: LeadSmart LLc Compliant</p>
            <p>• Zero hidden fees or commission pressure</p>
          </div>
        </div>

        {/* Column 2: Quick navigation */}
        <div className="lg:col-span-2 space-y-3">
          <h4 className="text-sm font-bold uppercase tracking-wider text-white">Menu</h4>
          <ul className="text-xs space-y-2.5 font-medium">
            {[
              { label: 'Home Page', id: 'home' as PageId },
              { label: 'About Our Team', id: 'about' as PageId },
              { label: 'Services Catalogue', id: 'services' as PageId },
              { label: 'Our Blog & Safety', id: 'blog' as PageId },
              { label: 'Contact Dispatch', id: 'contact' as PageId }
            ].map(link => (
              <li key={link.id}>
                <button
                  onClick={() => onNavigate(link.id)}
                  className="hover:text-brand-accent hover:underline transition-all cursor-pointer text-left"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Florida service areas */}
        <div className="lg:col-span-3 space-y-3">
          <h4 className="text-sm font-bold uppercase tracking-wider text-white">Service Coverage</h4>
          <ul className="text-xs space-y-2 font-medium">
            <li>
              <button
                onClick={() => onNavigate('area-broward')}
                className="hover:text-brand-accent hover:underline transition-all cursor-pointer text-left"
              >
                Broward County Garage Services
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('area-palm-beach')}
                className="hover:text-brand-accent hover:underline transition-all cursor-pointer text-left"
              >
                Palm Beach County Garage Services
              </button>
            </li>
            <li className="text-[11px] text-slate-500 pt-1 leading-relaxed border-t border-slate-800/50">
              Fort Lauderdale • Boca Raton • Coral Springs • West Palm Beach • Boynton Beach • Hollywood • Pompano Beach • Delray Beach • Wellington • Jupiter
            </li>
          </ul>
        </div>

        {/* Column 4: Direct contact dispatch details */}
        <div className="lg:col-span-3 space-y-3">
          <h4 className="text-sm font-bold uppercase tracking-wider text-white">Call Service</h4>
          <div className="space-y-3 text-xs leading-loose">
            <a
              href="tel:8005550199"
              className="inline-flex items-center gap-2 text-white font-bold bg-slate-800 py-2 px-3 rounded border border-slate-700 hover:bg-slate-750 transition-all text-xs"
            >
              <Phone className="w-3.5 h-3.5 text-brand-accent" />
              (800) 555-0199
            </a>
            <div className="space-y-1 text-slate-400">
              <p className="flex items-center gap-1.5 font-medium">
                <Clock className="w-3.5 h-3.5 text-slate-500" /> Operational Hours: 7:00 AM - 10:00 PM
              </p>
              <p className="flex items-center gap-1.5 font-medium">
                <Shield className="w-3.5 h-3.5 text-slate-500" /> Emergency Route: 24 Hr Standby
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer bottom legal details */}
      <div className="bg-slate-950/80 py-6 border-t border-slate-800/60 font-medium">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-slate-500 leading-relaxed text-center md:text-left">
          <div className="space-y-1">
            <p>&copy; {new Date().getFullYear()} Florida Garage Door Repair. All rights reserved.</p>
            <p className="max-w-2xl text-[10px] text-slate-600">
              Disclaimer: Florida Garage Door Repair is an advertising and referral agency that connects homeowners with certified local garage door service technicians. Any service contract, warranty, and liability are managed directly between the homeowner and the dispatched service specialist.
            </p>
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => openModal('Privacy Policy', 'We protect your home diagnostics record and phone details according to Florida statutes. Contact telemetry details are managed strictly to connect you with professional local service providers.')}
              className="hover:underline hover:text-slate-400 cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => openModal('Terms of Use', 'Terms of Referrals: Servicing estimates, local warranties, and dispatcher response windows depend on weather conditions, seasonal service demand volume, and parts availability in South Florida.')}
              className="hover:underline hover:text-slate-400 cursor-pointer"
            >
              Terms of Use
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Quick lightweight subcomponent to help with type extraction in file imports
const Clock: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
);
