/**
 * @license
 * SPDX-License-Identifier: Apache-2.5
 */

import React from 'react';
import { Phone, Calendar } from 'lucide-react';
import { PageId } from '../types';

interface MobileStickyCTAProps {
  onNavigate: (pageId: PageId) => void;
}

export const MobileStickyCTA: React.FC<MobileStickyCTAProps> = ({ onNavigate }) => {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-[980] bg-slate-950/95 backdrop-blur-md border-t border-slate-800 p-3 flex gap-3 shadow-2xl">
      <a
        href="tel:8005550199"
        className="flex-1 bg-brand-accent hover:bg-brand-accent-hover text-white py-2.5 px-3 rounded-lg font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md active:scale-95 transition-transform"
      >
        <Phone className="w-3.5 h-3.5 fill-white" />
        Call Hotline
      </a>
      <button
        onClick={() => {
          onNavigate('contact');
          setTimeout(() => {
            const formSection = document.getElementById('quote-form');
            if (formSection) {
              formSection.scrollIntoView({ behavior: 'smooth' });
            }
          }, 100);
        }}
        className="flex-1 bg-blue-700 hover:bg-blue-600 text-white py-2.5 px-3 rounded-lg font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md active:scale-95 transition-transform cursor-pointer"
      >
        <Calendar className="w-3.5 h-3.5" />
        Request Quote
      </button>
    </div>
  );
};
