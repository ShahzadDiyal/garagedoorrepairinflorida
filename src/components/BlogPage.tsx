/**
 * @license
 * SPDX-License-Identifier: Apache-2.5
 */

import React, { useState, useMemo } from 'react';
import { 
  Search, 
  BookOpen, 
  Calendar, 
  User, 
  Clock, 
  ArrowRight, 
  Mail, 
  CheckCircle, 
  Share2, 
  Facebook, 
  Twitter, 
  Link2, 
  HelpCircle, 
  ChevronDown, 
  ArrowLeft,
  Phone,
  Flame
} from 'lucide-react';
import { PageId, BlogPost } from '../types';
import { blogData } from '../data/blogData';

interface BlogPageProps {
  currentPage: PageId;
  onNavigate: (pageId: PageId) => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ currentPage, onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);
  const [currentPageNum, setCurrentPageNum] = useState(1);
  const [copiedLink, setCopiedLink] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // blog categories allowed
  const categories = [
    'All',
    'Repair Tips',
    'Maintenance',
    'Installation',
    'Emergency Services',
    'Garage Door Safety'
  ];

  // Map existing data categories or tags to the user's categories of interest
  const getPostFilterCategory = (post: BlogPost): string => {
    const cat = post.category.toLowerCase();
    if (cat.includes('maintenance')) return 'Maintenance';
    if (cat.includes('safety')) return 'Garage Door Safety';
    if (cat.includes('opener')) return 'Repair Tips';
    return 'Repair Tips';
  };

  // Filter blog posts based on search query and category tab
  const filteredPosts = useMemo(() => {
    return blogData.filter(post => {
      const mappedCategory = getPostFilterCategory(post);
      const matchesCategory = activeCategory === 'All' || mappedCategory === activeCategory;
      
      const text = `${post.title} ${post.summary} ${post.content} ${post.tags.join(' ')}`.toLowerCase();
      const matchesSearch = text.includes(searchQuery.toLowerCase());
      
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, activeCategory]);

  // Featured Post is the first element when no filters are active, or first matching element
  const featuredPost = useMemo(() => {
    if (searchQuery || activeCategory !== 'All') {
      return null; // Don't highlight special featured post when criteria is filtered
    }
    return blogData[0] || null;
  }, [searchQuery, activeCategory]);

  // Regular grid posts exclude the featured post when viewing front list
  const gridPosts = useMemo(() => {
    if (featuredPost) {
      return filteredPosts.filter(p => p.id !== featuredPost.id);
    }
    return filteredPosts;
  }, [filteredPosts, featuredPost]);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSubscribed(true);
      setNewsletterEmail('');
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const blogFaqs = [
    {
      q: 'How often should a homeowner perform preventative maintenance in Florida?',
      a: 'Due to extreme salt air concentration along the Atlantic coast, doors within 10 miles of the beach should be washed with mild soapy water and sprayed with high-grade silicone lubricant every 6 months. Inland doors may be serviced once per year.'
    },
    {
      q: 'Can a compromised wind-load garage door affect house insurance rates?',
      a: 'Yes, in Florida. Most homeowner insurance policies require verification of wind-load standards (usually up to 130-150 MPH depending on the coastal zone). Having a hurricane-certified garage door installation can lower your annual premiums.'
    },
    {
      q: 'What is the standard lifetime limit of quality steel torsion springs?',
      a: 'Standard garage torsion springs offer roughly 10,000 cycles. High-cycle replacements carry coatings that withstand rusting from seawater humidity, extending operational cycle counts up to 20,000 to 30,000 cycles.'
    }
  ];

  // Render individual blog listing view
  if (currentPage === 'blog') {
    return (
      <div className="animate-fade-in animate-duration-150 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold text-blue-700 uppercase tracking-widest bg-blue-50 py-1.5 px-4 rounded-full border border-blue-100">
            Homeowner Knowledge Helpdesk
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight font-heading">
            Garage Door Safety, Maintenance & Repair Insights
          </h1>
          <p className="text-sm text-slate-500 leading-relaxed font-light">
            Stay educated about Florida weather-stripping, torsion coil wear, smart remote security, and how to identify ethical diagnostic dispatch practices.
          </p>
        </div>

        {/* SEARCH & FILTERS CONTROLS */}
        <div className="space-y-6 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            {/* Search Input */}
            <div className="relative w-full md:w-1/3">
              <Search className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles & guides..."
                className="w-full text-xs sm:text-sm pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700 focus:bg-white transition-all text-slate-800"
              />
            </div>

            {/* Category Filters scroll rail */}
            <div className="flex flex-wrap gap-2 w-full md:w-2/3 md:justify-end">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setCurrentPageNum(1);
                  }}
                  className={`text-xs font-extrabold px-3.5 py-2.5 rounded-lg transition-all cursor-pointer ${
                    activeCategory === cat
                      ? 'bg-blue-700 text-white shadow-sm'
                      : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* FEATURED BLOG SPOTLIGHT SECTION */}
        {featuredPost && (
          <div className="space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400">Featured Article Spotlight</h2>
            <div 
              className="bg-slate-900 text-white rounded-3xl overflow-hidden border border-slate-850 shadow-lg grid grid-cols-1 lg:grid-cols-12 cursor-pointer hover:shadow-xl transition-shadow group"
              onClick={() => onNavigate(featuredPost.id)}
            >
              <div className="lg:col-span-7 h-64 sm:h-80 lg:h-full relative overflow-hidden bg-slate-800">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title} 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-emerald-500 text-slate-950 text-[10px] uppercase font-black tracking-widest px-3 py-1 rounded">
                  {getPostFilterCategory(featuredPost)}
                </span>
              </div>

              <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-xs text-slate-400 font-semibold uppercase">
                    <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{featuredPost.date}</span>
                    <span>&bull;</span>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{featuredPost.readTime}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold font-heading text-white group-hover:text-amber-400 leading-tight transition-colors">
                    {featuredPost.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                    {featuredPost.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-bold text-amber-400">
                  <span>Read Complete Guide &rarr;</span>
                  <span className="text-[10px] text-slate-400 uppercase tracking-widest">By {featuredPost.author}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ARTICLES GRID SECTION */}
        <div className="space-y-6">
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400">
            {searchQuery || activeCategory !== 'All' ? 'Filtered Search Results' : 'Regular Knowledge Archives'}
          </h2>
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-xl border border-slate-200">
              <p className="text-slate-500 text-sm">No articles match your search criteria.</p>
              <button 
                onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
                className="text-xs text-blue-700 font-extrabold mt-3 hover:underline cursor-pointer"
              >
                Clear all filters and search again
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {gridPosts.map(post => (
                <div 
                  key={post.id}
                  className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden flex flex-col justify-between cursor-pointer hover:shadow-md transition-all group"
                  onClick={() => onNavigate(post.id)}
                >
                  <div className="h-48 overflow-hidden relative bg-slate-100">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute bottom-3 left-3 bg-slate-900/90 border border-slate-700/60 text-white text-[9px] font-bold uppercase tracking-wider py-1 px-2.5 rounded">
                      {getPostFilterCategory(post)}
                    </span>
                  </div>

                  <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-[10px] text-slate-400 font-semibold uppercase">
                        <span>{post.date}</span>
                        <span>&bull;</span>
                        <span>{post.readTime}</span>
                      </div>
                      <h3 className="text-base font-bold text-slate-950 group-hover:text-blue-700 transition-colors leading-snug">
                        {post.title}
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">
                        {post.summary}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-700">
                      <span>Learn Symptoms &rarr;</span>
                      <span className="text-[9px] text-slate-400">By {post.author}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* PAGINATION UI */}
        {filteredPosts.length > 0 && (
          <div className="flex justify-center items-center gap-2 pt-4 border-t border-slate-200 text-xs">
            <button className="px-3.5 py-2 rounded-md border border-slate-200 bg-white text-slate-400 cursor-not-allowed">
              Prev
            </button>
            <button className="w-8 h-8 rounded-md bg-blue-700 text-white font-bold flex items-center justify-center">
              1
            </button>
            <button className="w-8 h-8 rounded-md border border-slate-150 bg-white text-slate-600 hover:bg-slate-50">
              2
            </button>
            <button className="px-3.5 py-2 rounded-md border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 cursor-pointer">
              Next
            </button>
          </div>
        )}

        {/* NEWSLETTER SUBSCRIBE SECTION */}
        <section className="bg-gradient-to-br from-indigo-900 to-slate-950 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden border border-indigo-850">
          <div className="absolute bottom-[-20%] right-[-10%] w-72 h-72 bg-blue-700/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-2xl space-y-6">
            <Mail className="w-8 h-8 text-indigo-400" />
            <h3 className="text-xl sm:text-2xl font-extrabold font-heading text-white">
              Get Monthly Safety & Rust Warnings in Your Inbox
            </h3>
            <p className="text-xs sm:text-sm text-slate-350 leading-relaxed font-light">
              Join thousands of South Florida homeowners. Learn when humidity salt storms are expected to spike, read mechanical lubrication schedules, and keep your home secure.
            </p>
            
            {newsletterSubscribed ? (
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold bg-emerald-500/10 border border-emerald-500/25 p-4 rounded-xl">
                <CheckCircle className="w-5 h-5" />
                <span>Success! You have enrolled in our educational dispatch tips newsletter.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 max-w-lg">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address..."
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="bg-white/10 border border-white/20 rounded-md py-3 px-4 text-xs sm:text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-700 flex-grow placeholder-slate-400 font-medium"
                />
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-500 text-white font-extrabold px-6 py-3 rounded-md text-xs cursor-pointer tracking-wider uppercase transition-colors"
                >
                  Join Checklist
                </button>
              </form>
            )}
            <p className="text-[10px] text-slate-400">
              * Privacy priority: We never sell your personal coordinates or spam. Enrolled lists can opt-out with one simple tap.
            </p>
          </div>
        </section>

      </div>
    );
  }

  // Render blog details post view
  const post = blogData.find(x => x.id === currentPage);
  if (!post) {
    return <div className="text-center py-20">Post unavailable.</div>;
  }

  // Create Table of Contents headings based on the markdown content structures
  const tocHeadings = [
    { title: 'The Coastal Threat Elements', id: 'sec-1' },
    { title: 'Protecting Steel Springs & Lubrication', id: 'sec-2' },
    { title: 'When to Recruit Certified Technicians', id: 'sec-3' }
  ];

  // Find related posts (filtering out the active one)
  const relatedPosts = blogData.filter(p => p.id !== post.id).slice(0, 2);

  return (
    <div className="animate-fade-in animate-duration-150 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      
      {/* Back button link */}
      <button 
        onClick={() => onNavigate('blog')}
        className="text-xs font-bold text-blue-700 hover:underline inline-flex items-center gap-1 cursor-pointer mb-6"
      >
        <ArrowLeft className="w-4 h-4" /> Back To Blog Archives Helpdesk
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-11 items-start">
        
        {/* LEFT COLUMN: ARTICLE DESIGN + SEO CONTENT */}
        <article className="lg:col-span-8 bg-white p-6 sm:p-10 rounded-2xl border border-slate-200/80 shadow-sm space-y-6">
          
          {/* Metadata context header */}
          <div className="space-y-3 pb-6 border-b border-slate-100">
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 font-semibold uppercase">
              <span className="flex items-center gap-1 bg-slate-100 py-1 px-2.5 rounded font-bold">{getPostFilterCategory(post)}</span>
              <span>&bull;</span>
              <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{post.date}</span>
              <span>&bull;</span>
              <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{post.readTime}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight font-heading">
              {post.title}
            </h1>
            <p className="text-sm font-medium text-slate-500 leading-relaxed italic">
              "{post.summary}"
            </p>
          </div>

          {/* Featured Wide Image */}
          <div className="h-64 sm:h-96 rounded-2xl overflow-hidden relative border border-slate-100 shadow-inner">
            <img 
              src={post.image} 
              alt={post.title} 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Mini Table of Contents (for SEO anchors) */}
          <div className="p-5 bg-slate-50 border border-slate-200 rounded-xl space-y-2.5">
            <h4 className="text-xs font-extrabold uppercase text-slate-400 tracking-wider">In This Guide:</h4>
            <ul className="text-xs text-slate-700 space-y-1.5 font-medium">
              {tocHeadings.map((head, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-blue-700 font-bold font-mono">{i + 1}.</span>
                  <a href={`#${head.id}`} className="hover:text-blue-700 transition-colors">
                    {head.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Article main text editor block */}
          <div className="text-slate-700 text-xs sm:text-sm leading-relaxed space-y-6 font-light pl-0 whitespace-pre-wrap-custom">
            
            <p id="sec-1" className="font-medium text-slate-700">
              Living in beautiful South Florida exposes garage door mechanics consisting of high-tension iron springs, zinc tracks, and nylon sprockets to challenging coastal winds and continuous seawater air saturation.
            </p>

            <div className="border-l-4 border-amber-500 bg-amber-50/50 p-4 rounded-r-md text-xs italic text-slate-600 font-medium my-4">
              "Disclaimer: Snapped garage spring replacement is a dangerous high-tension task. Do not try a DIY winding adjustment without professional coaching."
            </div>

            <div className="space-y-4">
              <p>
                {post.content}
              </p>
            </div>

            {/* Inline high-conversion CTA Banner */}
            <div className="p-6 bg-slate-900 text-white rounded-xl border border-slate-850 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-semibold">
              <div className="space-y-1">
                <span className="text-brand-accent uppercase text-[10px] font-extrabold block">Emergency Service Router Active</span>
                <p className="font-bold text-slate-100">Snapped steel spring? Jammed overhead door tracks?</p>
              </div>
              <a 
                href="tel:8005550199" 
                className="bg-brand-accent hover:bg-brand-accent-hover text-white py-2.5 px-5 rounded font-extrabold text-center transition-colors cursor-pointer block whitespace-nowrap"
              >
                (800) 555-0199
              </a>
            </div>

            <p id="sec-2" className="pt-4 font-bold text-slate-900 text-sm uppercase tracking-wide">
              2. Deep Mechanical Protection & Salt Mitigation
            </p>
            <p>
              To neutralize corrosive ocean salt spray, spray clear steel parts using high-grade silicone formulations. Ensure the track rollers sit square and level without dragging. When rollers jump the tracks, the entire door assembly faces immediate stress structural issues.
            </p>

           
          </div>

          {/* Social share panel */}
          <div className="pt-6 border-t border-slate-100 flex flex-wrap justify-between items-center gap-4">
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="text-xs font-bold text-slate-400">Share This Guide:</span>
              <button 
                onClick={handleCopyLink}
                className="p-2 bg-slate-50 border border-slate-150 rounded text-slate-600 hover:text-blue-700 hover:bg-blue-50 text-xs flex items-center gap-1 transition-colors cursor-pointer"
              >
                <Link2 className="w-3.5 h-3.5" /> 
                {copiedLink ? 'Copied URL!' : 'Copy Link'}
              </button>
              <button className="p-2 bg-slate-50 border border-slate-150 rounded text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 text-xs flex items-center gap-1 cursor-pointer">
                <Share2 className="w-3.5 h-3.5" /> Share
              </button>
            </div>

            <div className="flex gap-1">
              {post.tags.map(tag => (
                <span key={tag} className="bg-slate-50 border text-slate-600 text-[10px] py-1 px-2.5 rounded text-transform uppercase font-medium">
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* BLOG POST SPECIFIC FAQ ACCORDION */}
          <div className="pt-8 border-t border-slate-150 space-y-4">
            <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
              <HelpCircle className="w-4 h-4 text-blue-700" /> FAQ: Managing Garage Safety
            </h3>
            
            <div className="space-y-3">
              {blogFaqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div key={idx} className="border border-slate-200 rounded-lg overflow-hidden bg-slate-50">
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full text-left p-4 bg-white flex justify-between items-center font-bold text-slate-900 text-xs sm:text-sm hover:bg-slate-55 transition-colors cursor-pointer"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isOpen && (
                      <div className="p-4 text-xs text-slate-600 leading-relaxed font-light border-t border-slate-150">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </article>

        {/* RIGHT COLUMN: AUTHOR CARDS & SUBMIT CALL REQUEST */}
        <aside className="lg:col-span-4 space-y-6">
          
          {/* Author Spotlight */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3 text-center">
            <div className="w-16 h-16 rounded-full bg-slate-100 border border-slate-200 mx-auto flex items-center justify-center text-slate-400">
              <User className="w-8 h-8" />
            </div>
            <div className="space-y-1">
              <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Expert Author</p>
              <h4 className="font-extrabold text-slate-900 text-sm sm:text-base">{post.author}</h4>
              <p className="text-[11px] text-slate-500 leading-relaxed font-light">
                South Florida regional home safety consultant and contractor router reviewer.
              </p>
            </div>
          </div>

          {/* Quick Dispatch Conversion Widget */}
          <div className="bg-slate-950 text-white p-6 rounded-2xl border border-slate-900 space-y-4">
            <span className="inline-flex items-center gap-1.5 bg-blue-500/10 border border-blue-500/30 text-emerald-400 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded">
              <Flame className="w-3 h-3 animate-pulse" /> Emergency Routing Active
            </span>
            <h3 className="font-extrabold text-base font-heading">Trapped Vehicle?</h3>
            <p className="text-xs text-slate-350 leading-relaxed font-light">
              Torsion springs snap under extreme tension. Contact our immediate dispatch specialists standard rates before attempts to lift manually.
            </p>
            <a 
              href="tel:8005550199"
              className="block w-full py-3 bg-brand-accent hover:bg-brand-accent-hover text-white text-center font-extrabold rounded shadow-md text-xs transition-colors cursor-pointer"
            >
              Request Hot Routing Dispatch
            </a>
          </div>

          {/* Related blog list view cards */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase text-slate-400 tracking-wider">More Safety Reading:</h3>
            <div className="space-y-3">
              {relatedPosts.map(rel => (
                <div 
                  key={rel.id} 
                  className="bg-white rounded-xl border border-slate-200/80 p-4 space-y-2 cursor-pointer hover:border-blue-400 transition-colors"
                  onClick={() => onNavigate(rel.id)}
                >
                  <p className="text-[10px] text-slate-400 uppercase font-semibold">{rel.date}</p>
                  <h4 className="font-extrabold text-slate-900 text-xs leading-snug hover:text-blue-700 transition-colors">
                    {rel.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed">
                    {rel.summary}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </aside>

      </div>
    </div>
  );
};
