/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Hammer, Menu, X, ChevronDown, Phone, ShieldCheck } from 'lucide-react';
import { PageId } from '../types';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAreasDropdownOpen, setIsAreasDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Monitor scrolling to add background color shadows to the sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePageClick = (pageId: PageId) => {
    onNavigate(pageId);
    setIsMobileMenuOpen(false);
    setIsAreasDropdownOpen(false);
  };

  const menuItems = [
    { label: 'Home', id: 'home' as PageId },
    { label: 'About Us', id: 'about' as PageId },
    { label: 'Our Services', id: 'services' as PageId },
    { label: 'Blog & Safety', id: 'blog' as PageId },
  ];

  return (
    <header 
      className={`sticky top-0 z-[990] w-full transition-all duration-200 ${
        isScrolled 
          ? 'bg-white border-b border-slate-200/80 shadow-md py-2.5' 
          : 'bg-white border-b border-slate-100 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        
        {/* Brand Logo - Styled visually with custom shield and hammer icon */}
        <button 
          onClick={() => handlePageClick('home')}
          className="flex items-center gap-2 cursor-pointer group text-left"
        >
          <div className="w-10 h-10 bg-brand-blue text-white rounded-lg flex items-center justify-center shadow-sm group-hover:scale-105 transition-all">
            <Hammer className="w-5 h-5" />
          </div>
          <div>
            <div className="font-heading font-extrabold text-slate-900 leading-none text-base sm:text-lg uppercase tracking-tight flex items-center gap-1">
              Garage Door Repair<span className="text-brand-accent">FL </span>
            </div>
            <p className="text-[10px] text-slate-500 font-semibold tracking-wider uppercase mt-0.5 flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-emerald-500" /> Broward & Palm Beach Counties
            </p>
          </div>
        </button>

        {/* Center Desktop Navigation Menu */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 font-medium text-slate-600 text-sm">
          {menuItems.map(item => (
            <button
              key={item.id}
              onClick={() => handlePageClick(item.id)}
              className={`hover:text-brand-blue cursor-pointer transition-colors ${
                currentPage === item.id ? 'text-brand-blue font-bold border-b-2 border-brand-blue pb-1 mt-0.5' : ''
              }`}
            >
              {item.label}
            </button>
          ))}

          {/* Reusable "Areas We Serve" Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setIsAreasDropdownOpen(true)}
            onMouseLeave={() => setIsAreasDropdownOpen(false)}
          >
            <button 
              onClick={() => setIsAreasDropdownOpen(!isAreasDropdownOpen)}
              className={`hover:text-brand-blue cursor-pointer transition-colors flex items-center gap-1 pb-1 ${
                currentPage.startsWith('area-') ? 'text-brand-blue font-bold' : ''
              }`}
            >
              Areas We Serve <ChevronDown className="w-4 h-4 text-slate-400" />
            </button>
            
            {isAreasDropdownOpen && (
              <div className="absolute top-full -left-4 bg-white border border-slate-200 rounded-lg shadow-xl py-2 w-56 flex flex-col z-[999] animate-fade-in">
                <button
                  onClick={() => handlePageClick('area-broward')}
                  className="px-4 py-2 text-left text-xs font-semibold hover:bg-slate-50 text-slate-700 hover:text-brand-blue cursor-pointer"
                >
                  Broward County (Fort Lauderdale)
                </button>
                <button
                  onClick={() => handlePageClick('area-palm-beach')}
                  className="px-4 py-2 text-left text-xs font-semibold hover:bg-slate-50 text-slate-700 hover:text-brand-blue cursor-pointer"
                >
                  Palm Beach County (Boca Raton)
                </button>
              </div>
            )}
          </div>

          <button
            onClick={() => handlePageClick('contact')}
            className={`hover:text-brand-blue cursor-pointer transition-colors ${
              currentPage === 'contact' ? 'text-brand-blue font-bold border-b-2 border-brand-blue pb-1 mt-0.5' : ''
            }`}
          >
            Contact Us
          </button>
        </nav>

        {/* Right Call CTA components */}
        <div className="hidden sm:flex flex-col items-end text-start">
          <a
            href="tel:8005550199"
            className="bg-brand-accent hover:bg-brand-accent-hover text-white text-md font-bold py-2.5 px-4 rounded-md shadow-sm transition-all flex items-center gap-1.5 focus:outline-none cursor-pointer"
          >
            <Phone className="w-3.5 h-3.5 fill-white stroke-white animate-bounce" />
            Call Now For Fast Service <br /> (800) 555-0199
          </a>
          <span className="text-xs font-extrabold text-slate-800 tracking-tight mt-1 font-heading">
            
          </span>
        </div>

        {/* Mobile Hamburger toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href="tel:8005550199"
            className="sm:hidden w-9 h-9 bg-brand-accent text-white rounded-full flex items-center justify-center shadow-sm cursor-pointer"
          >
            <Phone className="w-4 h-4 fill-white animate-pulse" />
          </a>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="w-10 h-10 border border-slate-200 hover:bg-slate-50 rounded-lg flex items-center justify-center text-slate-700 cursor-pointer"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Shelf Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200/60 bg-white p-4 space-y-4 animate-fade-in select-none">
          <div className="flex flex-col gap-3 font-semibold text-slate-700 text-sm">
            {menuItems.map(item => (
              <button
                key={item.id}
                onClick={() => handlePageClick(item.id)}
                className={`py-2 text-left border-b border-slate-100 hover:text-brand-blue cursor-pointer ${
                  currentPage === item.id ? 'text-brand-blue font-extrabold' : ''
                }`}
              >
                {item.label}
              </button>
            ))}

            {/* Areas Serve accordion style inside shelf */}
            <div className="py-2 space-y-2 border-b border-slate-100">
              <span className="text-slate-400 font-bold uppercase tracking-wider text-[10px]">Areas We Serve</span>
              <div className="grid grid-cols-2 gap-2 pt-1">
                <button
                  onClick={() => handlePageClick('area-broward')}
                  className="bg-slate-50 border border-slate-100 py-2.5 px-3 rounded text-left text-xs text-slate-800 font-bold hover:bg-slate-100 cursor-pointer"
                >
                  Broward Co.
                </button>
                <button
                  onClick={() => handlePageClick('area-palm-beach')}
                  className="bg-slate-50 border border-slate-100 py-2.5 px-3 rounded text-left text-xs text-slate-800 font-bold hover:bg-slate-100 cursor-pointer"
                >
                  Palm Beach Co.
                </button>
              </div>
            </div>

            <button
              onClick={() => handlePageClick('contact')}
              className={`py-2 text-left hover:text-brand-blue cursor-pointer ${
                currentPage === 'contact' ? 'text-brand-blue font-extrabold' : ''
              }`}
            >
              Contact Dispatch
            </button>
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <div className="text-center font-heading font-extrabold text-sm text-slate-800 flex justify-center items-center gap-1">
              <Phone className="w-4 h-4 text-brand-accent animate-pulse" /> Dispatch Toll-Free: (800) 555-0199
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
