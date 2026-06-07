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
  GetTestimonialsSection 
} from './components/HomeSections';

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

      {/* Main page view renderer */}
      <main className="flex-grow">
        
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
            <GetTestimonialsSection />
            
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
          <section className="py-16 sm:py-24 max-w-4xl mx-auto px-4 animate-fade-in space-y-12">
            {renderSectionHeader(
              "Local Referral Network Disclosure",
              "Who We Are & What We Believe In",
              "Ensuring professional connection, honest pricing models, and safety compliance everywhere in Florida."
            )}

            <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-10 space-y-6 text-slate-700 text-sm leading-relaxed shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 leading-tight">Your Direct Path to Verified South Florida Technicians</h3>
              <p>
                Florida Garage Door Repair operates as a premier referral agency. We understand that finding a trustworthy home repair technician can be challenging, especially during stressful scenarios like a snapped torsion spring in Broward County or an off-track emergency in Palm Beach County.
              </p>
              <p>
                Our structural goals are simple: we run marketing routes that connect Florida homeowners directly with licensed, bonded, and certified local field technicians. This ensures that when you call, you receive immediate dispatch services from experienced specialists who possess the correct diagnostic utilities and real-time inventory to address the issue immediately.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                  <h4 className="font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-emerald-600" /> Complete LeadSmart Transparency
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    We strictly forbid spammy text elements, false lifetime claims, or deceptive pricing models. What you get are clear, written flat-rate estimates detailed before tasks commence.
                  </p>
                </div>
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                  <h4 className="font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-emerald-600" /> Premium Manufacturer Standards
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Local partners carry parts designed to withstand heavy marine corrosion and Florida climatic stress, including hot coastal salt and high wind gusts.
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4">
                <div>
                  <p className="text-xs font-bold text-slate-950 font-heading">Dispatch Standby Coordinator</p>
                  <p className="text-[11px] text-slate-500">Connecting homes with certified veterans</p>
                </div>
                <a
                  href="tel:8005550199"
                  className="bg-brand-blue hover:bg-brand-blue-hover text-white py-2.5 px-5 rounded font-semibold text-xs transition-colors cursor-pointer"
                >
                  Contact Referrals Agency Today
                </a>
              </div>
            </div>
          </section>
        )}

        {/* ========================================================= */}
        {/* VIEW: SERVICES DIRECTORY VIEW */}
        {/* ========================================================= */}
        {currentPage === 'services' && (
          <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 animate-fade-in space-y-12">
            {renderSectionHeader(
              "Comprehensive Service Catalogue",
              "Engineered Services For Florida Climates",
              "Our participating technician pool is trained on multiple residential styles, automatic operating systems, and heavy storm braces."
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {servicesData.map(service => (
                <div key={service.id} className="bg-white rounded-xl border border-slate-200/80 shadow-xs p-6 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-start">
                      <h3 className="text-lg font-bold text-brand-blue font-heading">{service.title}</h3>
                      <span className="bg-blue-50 text-brand-blue text-[10px] font-bold uppercase tracking-wider py-1 px-2 border border-blue-100 rounded">
                        Available Same Day
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {service.shortDescription}
                    </p>
                    <ul className="text-xs text-slate-500 space-y-1">
                      {service.benefits.slice(0, 2).map((b, i) => (
                        <li key={i} className="flex items-center gap-1.5 font-medium">
                          <Check className="w-3.5 h-3.5 text-emerald-500" /> {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <button
                      onClick={() => handleNavigate(service.id)}
                      className="text-xs font-bold text-slate-900 hover:text-brand-blue cursor-pointer"
                    >
                      Read Common Symptoms & FAQs &rarr;
                    </button>
                    <a
                      href="tel:8005550199"
                      className="bg-brand-accent hover:bg-brand-accent-hover text-white text-xs font-bold py-1.5 px-3 rounded-md transition-colors cursor-pointer"
                    >
                      Dispatch Now
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
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
          <div className="animate-fade-in py-12 sm:py-16">
            {(() => {
              const area = areasData.find(x => x.id === currentPage);
              if (!area) return <div className="text-center py-10">Area details unavailable.</div>;

              return (
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
                  
                  {/* Left Column: Location Details */}
                  <div className="lg:col-span-7 space-y-8 bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-xs">
                    
                    <div className="space-y-2 border-b border-slate-100 pb-5">
                      <span className="text-[10px] font-bold text-brand-blue uppercase bg-blue-50 py-1 px-2 rounded-full border border-blue-100">
                        Local Coverage Page
                      </span>
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight font-heading mt-2">
                        {area.title}
                      </h2>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                      {area.description}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-4">
                      <h3 className="text-sm font-bold text-slate-900 uppercase">Local Route Benefits</h3>
                      <ul className="text-xs text-slate-600 space-y-2 bg-slate-50 p-4 rounded-lg border border-slate-150 font-medium">
                        {area.highlights.map((hi, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-brand-accent font-bold">&bull;</span>
                            <span>{hi}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Cities Covered */}
                    <div className="space-y-3">
                      <h4 className="text-sm font-bold text-slate-900 uppercase">Cities & Communities Served</h4>
                      <div className="flex flex-wrap gap-2">
                        {area.cities.map(city => (
                          <span 
                            key={city}
                            className="bg-slate-100 border border-slate-200 text-slate-700 text-xs py-1.5 px-3 rounded font-semibold"
                          >
                            {city}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* ZIP codes list */}
                    <div className="space-y-3 pt-4 border-t border-slate-100">
                      <h4 className="text-sm font-semibold text-slate-800">ZIP Codes within Active Routes:</h4>
                      <p className="text-xs text-slate-500 font-mono leading-relaxed tracking-wider bg-slate-50 p-3 rounded border border-slate-150">
                        {area.zipCodes.join(', ')}
                      </p>
                    </div>

                    {/* Local reviews reviews */}
                    <div className="space-y-4 pt-4 border-t border-slate-100">
                      <h4 className="text-sm font-bold text-slate-900 uppercase">Latest {area.county} Work Orders Completed</h4>
                      <div className="space-y-4">
                        {area.reviews.map(rev => (
                          <div key={rev.id} className="bg-slate-50 p-5 rounded-lg border border-slate-200 space-y-2">
                            <div className="flex justify-between items-center text-xs">
                              <span className="font-bold text-slate-800">{rev.name}</span>
                              <span className="font-mono text-slate-400">{rev.date}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              {[...Array(rev.rating)].map((_, i) => (
                                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 stroke-amber-400" />
                              ))}
                            </div>
                            <p className="text-xs text-slate-600 italic leading-relaxed font-medium">
                              "{rev.text}"
                            </p>
                            <span className="text-[10px] text-slate-400 block font-semibold">&bull; Route destination: {rev.location}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>

                  {/* Right Column: Booking Form Container */}
                  <div className="lg:col-span-5 space-y-6">
                    <QuoteForm />
                  </div>

                </div>
              );
            })()}
          </div>
        )}

        {/* ========================================================= */}
        {/* VIEW: BLOG DIRECTORY */}
        {/* ========================================================= */}
        {currentPage === 'blog' && (
          <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 animate-fade-in space-y-12">
            {renderSectionHeader(
              "Local Homeowner Helpdesk",
              "Educational Garage Door Safety & Maintenance Blog",
              "Become familiar with garage door lifespans, rust hazards down block, and how to verify legitimate dispatch companies."
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogData.map(post => (
                <div 
                  key={post.id}
                  className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col justify-between group cursor-pointer hover:shadow-md transition-all"
                  onClick={() => handleNavigate(post.id)}
                >
                  <div className="h-48 overflow-hidden relative">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute bottom-3 left-3 bg-slate-900 border border-slate-705 text-white text-[9px] font-bold uppercase tracking-wider py-1 px-2 rounded">
                      {post.category}
                    </span>
                  </div>

                  <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-[10px] text-slate-400 font-semibold uppercase">
                        <span>{post.date}</span>
                        <span>&bull;</span>
                        <span>{post.readTime}</span>
                      </div>
                      <h3 className="text-base font-bold text-slate-950 group-hover:text-brand-blue transition-colors leading-snug">
                        {post.title}
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">
                        {post.summary}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-105 text-xs font-bold text-brand-blue flex items-center gap-1">
                      Read Complete Blog &rarr;
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ========================================================= */}
        {/* VIEW: BLOG DETAIL POST READ */}
        {/* ========================================================= */}
        {currentPage.startsWith('blog-post-') && (
          <section className="py-16 sm:py-24 max-w-3xl mx-auto px-4 animate-fade-in bg-white border border-slate-200 rounded-xl my-10 shadow-xs">
            {(() => {
              const post = blogData.find(x => x.id === currentPage);
              if (!post) return <div className="text-center py-10">Post unavailable.</div>;

              return (
                <article className="space-y-6 text-sm text-slate-700 leading-relaxed font-light">
                  <button 
                    onClick={() => handleNavigate('blog')}
                    className="text-xs font-bold text-brand-blue hover:underline inline-flex items-center gap-1 cursor-pointer mb-2"
                  >
                    &larr; Back To Garage Repair Blog Helpdesk
                  </button>

                  <div className="space-y-2.5">
                    <div className="flex items-center gap-3 text-xs text-slate-400 font-semibold uppercase">
                      <span>{post.date}</span>
                      <span>&bull;</span>
                      <span>By {post.author}</span>
                      <span>&bull;</span>
                      <span className="text-brand-accent">{post.category}</span>
                    </div>
                    <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight font-heading">
                      {post.title}
                    </h1>
                  </div>

                  <div className="h-64 sm:h-96 rounded-lg overflow-hidden border border-slate-100">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Body content rendering as formatted paragraphs */}
                  <div className="space-y-4 whitespace-pre-wrap font-medium text-slate-600 text-xs sm:text-sm pl-0">
                    {post.content}
                  </div>

                  <div className="pt-6 border-t border-slate-100 flex flex-wrap gap-1.5 items-center">
                    <span className="text-xs font-bold text-slate-400 mr-1.5">Tags:</span>
                    {post.tags.map(tag => (
                      <span 
                        key={tag}
                        className="bg-slate-100 text-slate-600 text-[10px] uppercase font-bold py-1 px-2.5 rounded border border-slate-200"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Trust footer sign-off */}
                  <div className="p-5 bg-slate-50 border border-slate-200 rounded-lg mt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-medium text-slate-500">
                    <div>
                      <p className="font-bold text-slate-800">Need immediate garage door service help in South Florida?</p>
                      <p className="text-[11px] text-slate-400 mt-0.5">We route certified technicians standard flat-trip rates.</p>
                    </div>
                    <a 
                      href="tel:8005550199"
                      className="bg-brand-accent hover:bg-brand-accent-hover text-white py-2 px-4 rounded font-bold cursor-pointer transition-colors whitespace-nowrap text-xs"
                    >
                      Dispatch Now: (800) 555-0199
                    </a>
                  </div>
                </article>
              );
            })()}
          </section>
        )}

        {/* ========================================================= */}
        {/* VIEW: CONTACT US SPECIFICS */}
        {/* ========================================================= */}
        {currentPage === 'contact' && (
          <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 animate-fade-in space-y-12">
            {renderSectionHeader(
              "Dispatch Standby Terminals",
              "Connect With Florida Dispatch Coordinator",
              "Urgent mechanical troubles receive immediately routed vehicle scheduling standard billing."
            )}

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-11 items-start">
              
              {/* Direct Info Fields (Left) */}
              <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-xl border border-slate-200 space-y-6 shadow-xs">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 font-heading">Florida Routing Offices</h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Connecting premium local garage technician teams securely
                  </p>
                </div>

                <div className="space-y-4 text-xs text-slate-600">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-brand-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-slate-800">Palm Beach County Hub Terminal</p>
                      <p className="text-slate-500">Boca Raton Router Sector, Florida 33431</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-brand-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-slate-800">Broward County Hub Terminal</p>
                      <p className="text-slate-500">Fort Lauderdale Router Sector, Florida 33301</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 border-t border-slate-100 pt-3">
                    <Phone className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-slate-800">Toll-Free Dispatch Center</p>
                      <p className="text-slate-900 font-bold font-heading">(800) 555-0199</p>
                      <p className="text-[10px] text-slate-400">Available standard rates - Weekends & Evenings</p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50/50 p-4 border border-blue-100 rounded-md">
                  <p className="text-[11px] text-brand-blue leading-relaxed font-semibold">
                    &bull; Notice: Over 8 service utility vehicles are pre-deployed along Broward and Palm Beach state-ways daily to keep dispatcher wait times under 90 minutes.
                  </p>
                </div>
              </div>

              {/* Form Render (Right) */}
              <div className="lg:col-span-7">
                <QuoteForm />
              </div>

            </div>
          </section>
        )}

      </main>

      <Footer onNavigate={handleNavigate} />
      
      {/* Draggable Call widget on ALL views */}
      <FloatingCallButton />
    </div>
  );
}
