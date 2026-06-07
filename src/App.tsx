/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Phone, 
  Flame, 
  Award, 
  Truck, 
  MapPin, 
  HelpCircle, 
  Check, 
  AlertTriangle, 
  ThumbsUp, 
  Star, 
  FileText, 
  ArrowRight,
  ShieldAlert,
  Map,
  BadgeAlert,
  ChevronRight,
  CalendarDays,
  Wrench,
  Hammer
} from 'lucide-react';

import { PageId } from './types';
import { servicesData } from './data/servicesData';
import { areasData } from './data/areasData';
import { blogData } from './data/blogData';

import { AnnouncementBar } from './components/AnnouncementBar';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingCallButton } from './components/FloatingCallButton';
import { QuoteForm } from './components/QuoteForm';
import { MapSection } from './components/MapSection';
import { 
  HeroSection, 
  OurServicesSection, 
  BookCallSection, 
  AboutSection, 
  AreasWeServeSection, 
  FAQSection, 
  GetInTouchForm, 
  // GetTestimonialsSection 
} from './components/HomeSections';

import { AboutPage } from './components/AboutPage';
import { ServicesPage } from './components/ServicesPage';
import { AreasPage } from './components/AreasPage';
import { BlogPage } from './components/BlogPage';
import { ContactPage } from './components/ContactPage';
import { SEOManager } from './components/SEOManager';
import { MobileStickyCTA } from './components/MobileStickyCTA';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [selectedBlogId, setSelectedBlogId] = useState<PageId | null>(null);

  // Dynamically update document title on navigate to optimize SPA SEO keywords
  useEffect(() => {
    let title = 'Florida Garage Door Repair | Same Day Service';
    let subtitle = 'Professional Local Services';

    if (currentPage === 'home') {
      title = 'Florida Garage Door Repair | Broward & Palm Beach Counties';
    } else if (currentPage === 'about') {
      title = 'About Us | Professional Florida Garage Door Specialists';
    } else if (currentPage === 'services') {
      title = 'Garage Door Services in Florida | Springs, Openers, & Repairs';
    } else if (currentPage === 'blog') {
      title = 'Garage Door Safety & Maintenance Blog | South Florida';
    } else if (currentPage === 'contact') {
      title = 'Contact Dispatch | Same-Day Garage Door Repair FL';
    } else if (currentPage.startsWith('service-')) {
      const s = servicesData.find(x => x.id === currentPage);
      if (s) title = `${s.title} | Certified Home Repairs`;
    } else if (currentPage.startsWith('area-')) {
      const a = areasData.find(x => x.id === currentPage);
      if (a) title = `${a.title} | Same Day Local Dispatch`;
    } else if (currentPage.startsWith('blog-post-')) {
      const b = blogData.find(x => x.id === currentPage);
      if (b) title = `${b.title} | Garage Door Blog`;
    }

    document.title = title;
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [currentPage]);

  const handleNavigate = (pageId: PageId) => {
    setCurrentPage(pageId);
  };

  // Render Section Heading Utility
  const renderSectionHeader = (tag: string, heading: string, text: string) => (
    <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
      <span className="text-xs font-bold text-brand-blue uppercase tracking-widest bg-blue-50 py-1.5 px-3 rounded-full border border-blue-100">
        {tag}
      </span>
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mt-3 sm:mt-4 leading-tight font-heading">
        {heading}
      </h2>
      <div className="w-16 h-1.5 bg-brand-accent rounded-full mx-auto mt-4 mb-4" />
      <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
        {text}
      </p>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 relative selection:bg-brand-blue selection:text-white">
      {/* Global layout elements on ALL pages */}
      <AnnouncementBar />
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <SEOManager currentPage={currentPage} />

      {/* Main page view renderer */}
      <main className="flex-grow pb-16 sm:pb-0">
        
        {/* ========================================================= */}
        {/* VIEW: HOME PAGE */}
        {/* ========================================================= */}
        {currentPage === 'home' && (
          <div className="animate-fade-in animate-duration-150">
            {/* HERO MODULE WITH CONVERSION BOX */}
            <HeroSection onNavigate={handleNavigate} />
            
            {/* OUR SERVICES SECTION GRID OF 6 */}
            <OurServicesSection onNavigate={handleNavigate} />
            
            {/* BOOK CALL/URGENT ACTION TRIGGER STRIPE */}
            <BookCallSection onNavigate={handleNavigate} />

            {/* INTERACTIVE Florida ACTIVE ROUTING MAP */}
            <section className="py-16 sm:py-20 bg-slate-100 border-b border-slate-200">
              <div className="max-w-7xl mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center mb-10">
                  <span className="text-xs font-bold text-blue-700 uppercase tracking-wider bg-white py-1.5 px-4 rounded-full border border-slate-200 shadow-xs">
                    Local Route Service Area Map
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">Active Broward & Palm Beach Counties</h3>
                </div>
                <MapSection onNavigateToArea={handleNavigate} />
              </div>
            </section>

            {/* VERIFIED TESTIMONIALS & TRUST STATS */}
            {/* <GetTestimonialsSection /> */}
            
            {/* ABOUT OUR REFERRAL COMPLIANCE & SAFETY */}
            <AboutSection onNavigate={handleNavigate} />
            
            {/* ACTIVE AREAS WE SERVE COUNTIES & SUB-CITIES INDEX */}
            <AreasWeServeSection onNavigate={handleNavigate} />
            
            {/* COMPOSITE MULTI-ACCORDION FAQS */}
            <FAQSection onNavigate={handleNavigate} />
            
            {/* SECONDARY GET IN TOUCH DIAGNOSTIC FORM */}
            <GetInTouchForm onNavigate={handleNavigate} />
          </div>
        )}

        {/* ========================================================= */}
        {/* VIEW: ABOUT US PAGE */}
        {/* ========================================================= */}
        {currentPage === 'about' && (
          <AboutPage onNavigate={handleNavigate} />
        )}

        {/* ========================================================= */}
        {/* VIEW: SERVICES DIRECTORY VIEW */}
        {/* ========================================================= */}
        {currentPage === 'services' && (
          <ServicesPage onNavigate={handleNavigate} />
        )}

        {/* ========================================================= */}
        {/* VIEW: INDIVIDUAL SERVICE DETAIL PAGE */}
        {/* ========================================================= */}
        {currentPage.startsWith('service-') && (
          <div className="animate-fade-in py-12 sm:py-16 bg-slate-50">
            {(() => {
              const service = servicesData.find(x => x.id === currentPage);
              if (!service) return <div className="text-center py-10">Service details unavailable.</div>;
              
              return (
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
                  
                  {/* Left Column: Structured Service Content */}
                  <div className="lg:col-span-7 space-y-8 bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-xs">
                    
                    {/* Header */}
                    <div className="space-y-2 border-b border-slate-100 pb-5">
                      <span className="text-[10px] font-bold text-brand-blue uppercase bg-blue-50 py-1 px-2 rounded-full border border-blue-100">
                        Home Service Page
                      </span>
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight font-heading mt-2">
                        {service.title}
                      </h2>
                      <p className="text-xs sm:text-sm text-slate-500 font-medium">
                        Emergency service routing available in Broward & Palm Beach Counties
                      </p>
                    </div>

                    {/* Image banner */}
                    <div className="h-64 sm:h-80 rounded-lg overflow-hidden relative border border-slate-100 shadow-inner">
                      <img 
                        src={service.mainImage} 
                        alt={service.title} 
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Long Description editorial block */}
                    <div className="space-y-4">
                      <h3 className="text-base font-bold uppercase tracking-wider text-slate-400">Services Overview</h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                        {service.longDescription}
                      </p>
                    </div>

                    {/* Benefits module */}
                    <div className="space-y-3 bg-blue-50/40 p-5 rounded-lg border border-blue-100/50">
                      <h4 className="text-sm font-bold text-slate-900">Why Hire Our Florida Technician Partners:</h4>
                      <ul className="text-xs text-slate-600 space-y-2.5 font-medium">
                        {service.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Common Issues Checklist */}
                    <div className="space-y-3">
                      <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide flex items-center gap-1.5">
                        <AlertTriangle className="w-4 h-4 text-brand-accent" /> Check If Your Door Has These Symptoms:
                      </h4>
                      <ul className="text-xs text-slate-600 space-y-2 bg-slate-50 p-4 rounded-lg border border-slate-200">
                        {service.commonIssues.map((issue, idx) => (
                          <li key={idx} className="flex items-start gap-1.5">
                            <span className="text-brand-accent font-extrabold">&bull;</span>
                            <span>{issue}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Specific Service FAQs */}
                    <div className="space-y-4 pt-4 border-t border-slate-100">
                      <h4 className="text-sm font-bold text-slate-900 uppercase">Service Questions & Answers</h4>
                      <div className="space-y-4">
                        {service.faqs.map(faq => (
                          <div key={faq.id} className="space-y-1.5 p-4 bg-slate-50 border border-slate-150 rounded-md">
                            <h5 className="font-bold text-slate-900 text-xs sm:text-sm flex items-start gap-1.5">
                              <HelpCircle className="w-4 h-4 text-brand-accent flex-shrink-0 mt-0.5" />
                              {faq.question}
                            </h5>
                            <p className="text-xs text-slate-600 pl-5 leading-relaxed font-light">
                              {faq.answer}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>

                  {/* Right Column: Dynamic conversion form details */}
                  <div className="lg:col-span-5 space-y-6">
                    <QuoteForm serviceDefault={currentPage.split('-')[1]} />
                    
                    <div className="bg-slate-900 text-white rounded-xl p-6 border border-slate-800 shadow-sm space-y-4">
                      <div className="flex items-center gap-2 text-brand-accent font-bold text-sm uppercase">
                        <Flame className="w-4 h-4 animate-pulse" /> Emergency Hotline
                      </div>
                      <h4 className="font-heading font-extrabold text-base">Locked Vehicle? Snapped Coil Spring?</h4>
                      <p className="text-xs text-slate-300 leading-relaxed font-light">
                        We prioritize emergency dispatches over general inquiries. Call immediately to route one of our near-by field units directly to your Florida zip code.
                      </p>
                      <a 
                        href="tel:8005550199"
                        className="block w-full text-center bg-brand-accent hover:bg-brand-accent-hover text-white font-bold py-3 rounded-md transition-colors text-xs cursor-pointer shadow-md"
                      >
                        Call Hotline: (800) 555-0199
                      </a>
                    </div>
                  </div>

                </div>
              );
            })()}
          </div>
        )}

        {/* ========================================================= */}
        {/* VIEW: AREAS SERVED LOCATION ENVELOPE */}
        {/* ========================================================= */}
        {currentPage.startsWith('area-') && (
          <AreasPage currentPage={currentPage} onNavigate={handleNavigate} />
        )}

        {/* ========================================================= */}
        {/* VIEW: BLOG DIRECTORY */}
        {/* ========================================================= */}
        {currentPage === 'blog' && (
          <BlogPage currentPage={currentPage} onNavigate={handleNavigate} />
        )}

        {/* ========================================================= */}
        {/* VIEW: BLOG DETAIL POST READ */}
        {/* ========================================================= */}
        {currentPage.startsWith('blog-post-') && (
          <BlogPage currentPage={currentPage} onNavigate={handleNavigate} />
        )}

        {/* ========================================================= */}
        {/* VIEW: CONTACT US SPECIFICS */}
        {/* ========================================================= */}
        {currentPage === 'contact' && (
          <ContactPage onNavigate={handleNavigate} />
        )}

      </main>

      <Footer onNavigate={handleNavigate} />
      
      {/* Draggable Call widget on ALL views */}
      <FloatingCallButton />
      
      {/* Mobile Sticky docked bottom bar */}
      <MobileStickyCTA onNavigate={handleNavigate} />
    </div>
  );
}
