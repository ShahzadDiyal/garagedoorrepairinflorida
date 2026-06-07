/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Map, MapPin, CheckCircle, Info } from 'lucide-react';
import { areasData } from '../data/areasData';
import { AreaDetail } from '../types';

export const MapSection: React.FC<{ onNavigateToArea?: (page: string) => void }> = ({ onNavigateToArea }) => {
  const [selectedCounty, setSelectedCounty] = useState<AreaDetail>(areasData[0]);

  return (
    <div className="bg-white rounded-xl border border-slate-200/80 shadow-md overflow-hidden">
      <div className="p-6 bg-slate-900 text-white">
        <div className="flex items-center gap-2 mb-2">
          <Map className="w-5 h-5 text-brand-accent" />
          <h3 className="text-lg font-bold">South Florida Active Dispatch Route</h3>
        </div>
        <p className="text-xs text-slate-300">
          Our service trucks are routed daily across Broward and Palm Beach counties. Click a county zone below to inspect active cities and dispatch locations:
        </p>
      </div>

      <div className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Visual Map Render Column */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center bg-slate-50 border border-slate-100 rounded-lg p-4 relative min-h-[280px]">
          <svg viewBox="0 0 200 300" className="w-full max-w-[200px] h-auto drop-shadow-md">
            {/* Palm Beach County Path */}
            <path
              d="M 20 20 L 180 20 L 180 130 L 110 135 L 20 130 Z"
              fill={selectedCounty.id === 'area-palm-beach' ? '#1d4ed8' : '#e2e8f0'}
              stroke="#94a3b8"
              strokeWidth="2"
              className="cursor-pointer transition-colors duration-250 hover:bg-opacity-80"
              onClick={() => setSelectedCounty(areasData[1])}
            />
            <text
              x="100"
              y="75"
              fill={selectedCounty.id === 'area-palm-beach' ? '#ffffff' : '#475569'}
              fontSize="12"
              fontWeight="bold"
              textAnchor="middle"
              className="pointer-events-none font-heading"
            >
              Palm Beach
            </text>

            {/* Broward County Path */}
            <path
              d="M 20 132 L 180 132 L 180 230 L 20 230 Z"
              fill={selectedCounty.id === 'area-broward' ? '#1d4ed8' : '#e2e8f0'}
              stroke="#94a3b8"
              strokeWidth="2"
              className="cursor-pointer transition-colors duration-250 hover:bg-opacity-80"
              onClick={() => setSelectedCounty(areasData[0])}
            />
            <text
              x="100"
              y="180"
              fill={selectedCounty.id === 'area-broward' ? '#ffffff' : '#475569'}
              fontSize="12"
              fontWeight="bold"
              textAnchor="middle"
              className="pointer-events-none font-heading"
            >
              Broward
            </text>

            {/* Miami-Dade County indicator (Not covered) */}
            <path
              d="M 20 232 L 180 232 L 180 280 L 20 280 Z"
              fill="#f1f5f9"
              stroke="#cbd5e1"
              strokeWidth="1.5"
              strokeDasharray="4"
              className="pointer-events-none"
            />
            <text
              x="100"
              y="260"
              fill="#94a3b8"
              fontSize="9"
              textAnchor="middle"
              className="pointer-events-none font-heading uppercase tracking-wider"
            >
              Miami-Dade Co.
            </text>
          </svg>
          <div className="absolute bottom-2 text-[10px] text-slate-400 font-semibold flex items-center gap-1">
            <Info className="w-3.5 h-3.5" /> Tap county map to query
          </div>
        </div>

        {/* Selected County Data Column */}
        <div className="lg:col-span-7 space-y-4">
          <div>
            <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-brand-blue uppercase tracking-wider bg-blue-50 py-1 px-2 rounded border border-blue-100">
              <MapPin className="w-3 h-3" /> Same Day Route Active
            </span>
            <h4 className="text-xl font-bold text-slate-900 mt-2">{selectedCounty.county} Coverage</h4>
            <p className="text-slate-600 text-sm mt-1 leading-relaxed">
              We operate emergency and scheduled service trucks right in this county. Fully insured and equipped for all door models.
            </p>
          </div>

          <div>
            <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Coverage Areas & Cities</h5>
            <div className="flex flex-wrap gap-1.5">
              {selectedCounty.cities.map(city => (
                <span
                  key={city}
                  className="bg-slate-100 border border-slate-200 text-slate-700 text-xs py-1 px-2.5 rounded font-medium"
                >
                  {city}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div className="bg-slate-50 p-3 rounded border border-slate-100">
              <span className="text-[10px] font-bold text-slate-400 uppercase">Highlights</span>
              <ul className="text-xs text-slate-700 space-y-1 mt-1 font-medium">
                {selectedCounty.highlights.slice(0, 2).map((hi, i) => (
                  <li key={i} className="flex items-start gap-1">
                    <span className="text-brand-accent font-bold">✓</span> {hi}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-50 p-3 rounded border border-slate-100">
              <span className="text-[10px] font-bold text-slate-400 uppercase">Emergency Dispatch Toll-Free</span>
              <p className="text-sm font-bold text-brand-blue mt-1 font-heading">
                (800) 555-0199
              </p>
              <p className="text-[10px] text-slate-400 font-medium">No added night/weekend premiums</p>
            </div>
          </div>

          {onNavigateToArea && (
            <button
              onClick={() => onNavigateToArea(selectedCounty.id)}
              className="text-xs font-bold text-brand-blue hover:text-brand-blue-hover inline-flex items-center gap-1 mt-2 cursor-pointer transition-colors"
            >
              View Detailed {selectedCounty.county} Page & Reviews &rarr;
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
