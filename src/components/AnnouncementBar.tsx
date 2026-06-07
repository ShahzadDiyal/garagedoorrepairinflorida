/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Shield, Sparkles, Clock, Star } from 'lucide-react';

export const AnnouncementBar: React.FC = () => {
  return (
    <div className="bg-blue-900 text-white py-2 px-4 sm:px-8 text-[11px] font-semibold uppercase tracking-wider border-b border-blue-950">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between items-center gap-2">
        <div className="flex items-center gap-1.5 text-center md:text-left justify-center md:justify-start">
          <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
          <span>Top Rated Garage Door Repair Services in Florida</span>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-blue-100">
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3 text-amber-400" /> Same-Day Available
          </span>
          <span className="flex items-center gap-1">
            <Shield className="w-3 h-3 text-emerald-300" /> Licensed & Insured
          </span>
          <span className="flex items-center gap-1">
            <Star className="w-3 h-3 fill-amber-300 stroke-amber-300" /> Top Customer Reviews
          </span>
        </div>
      </div>
    </div>
  );
};
