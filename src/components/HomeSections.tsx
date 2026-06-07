/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import {
  Sparkles,
  Clock,
  ShieldCheck,
  Star,
  Wrench,
  Hammer,
  Check,
  ArrowRight,
  Phone,
  HelpCircle,
  MapPin,
  Mail,
  Lock,
  ThumbsUp,
  Shield,
  Users,
  BadgePercent,
  CheckCircle,
  Truck,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { PageId } from "../types";
import { QuoteForm } from "./QuoteForm";

interface HomeSectionsProps {
  onNavigate: (pageId: PageId) => void;
}

/**
 * 1. HERO SECTION
 * Conversion-focused, SEO optimized, with dual actions and local badges
 */
export const HeroSection: React.FC<HomeSectionsProps> = ({ onNavigate }) => {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950 text-white min-h-[85vh] flex items-center py-16 lg:py-24 overflow-hidden border-b border-blue-950">
      {/* Decorative ambient gradients */}
      <div className="absolute top-0 right-0 w-[45rem] h-[45rem] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[30rem] h-[30rem] bg-brand-accent/5 rounded-full blur-3xl pointer-events-none" />

      {/* Abstract technical pattern overlay for precision appearance */}
      <div className="absolute inset-0 bg-space-pattern opacity-[0.03] pointer-events-none mix-blend-overlay" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left column: Direct PPC copy & conversion triggers */}
        <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-blue-500/15 border border-blue-400/30 py-1.5 px-3.5 rounded-full text-emerald-400 text-xs font-bold uppercase tracking-widest">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse inline-block" />
            Active Route: Broward & Palm Beach Service Stands
          </div>

          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight font-heading">
              Professional Garage Door{" "}
              <span className="text-amber-400 block sm:inline">
                Repair in Florida
              </span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Stuck vehicle? Snapped tension springs? Our South Florida referral
              network matches you with bonded, licensed technicians for{" "}
              <strong>immediate driveway dispatch</strong>. Safe, honest, and
              completely flat-trip rated.
            </p>
          </div>

          {/* Quick core conversion bullets */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 max-w-lg mx-auto lg:mx-0 text-left text-xs sm:text-sm text-slate-200">
            {[
              "Snapped torsion springs replaced safe",
              "Automatic quiet opener diagnostics",
              "Broward County & Palm Beach dispatch",
              "Written parts & mechanical guarantees",
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-5 h-5 bg-blue-500/20 border border-blue-500/30 rounded-full flex items-center justify-center text-blue-400 flex-shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3px]" />
                </div>
                <span>{text}</span>
              </div>
            ))}
          </div>

          {/* Immediate CTA triggers */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <a
              href="tel:8005550199"
              id="hero-call-now"
              className="bg-blue-700 hover:bg-blue-600 text-white font-extrabold px-8 py-4 rounded-lg shadow-[0_4px_20px_rgba(29,78,216,0.4)] flex items-center gap-3 w-full sm:w-auto text-center justify-center transition-all scale-100 hover:scale-[1.02] cursor-pointer"
            >
              <Phone className="w-5 h-5 fill-white stroke-white" />
              Call Now: (800) 555-0199
            </a>
            <a
              href="#quote-form"
              id="hero-get-quote"
              className="bg-slate-800 hover:bg-slate-750 text-white font-bold px-6 py-4 rounded-lg border border-slate-700 w-full sm:w-auto text-center transition-transform hover:translate-y-[-1px] cursor-pointer"
            >
              Get Free Diagnosis Quote
            </a>
          </div>

          {/* Trust indicators / Badge blocks */}
          <div className="pt-8 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center lg:text-left">
            {[
              { label: "Licensed Teams", desc: "Bonded Florida crews" },
              { label: "Emergency Repair", desc: "Stuck vehicle safety" },
              { label: "Honest Pricing", desc: "No hidden spikes" },
            ].map((badge, i) => (
              <div key={i} className="space-y-1">
                <div className="text-amber-400 font-extrabold text-xs uppercase tracking-wider">
                  {badge.label}
                </div>
                <div className="text-slate-400 text-[11px] font-medium">
                  {badge.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right column: High-fidelity visual graphic & instant PPC submission box */}
        <div className="lg:col-span-5 w-full max-w-lg mx-auto lg:ml-auto">
          <div className="bg-slate-900/60 backdrop-blur-sm border border-slate-850 p-1.5 rounded-2xl shadow-2xl relative">
            {/* Glowing active banner */}
            <span className="absolute -top-3 left-6 bg-amber-400 text-slate-950 font-extrabold text-[10px] tracking-widest px-3 py-1 rounded-full uppercase shadow-md animate-pulse">
              Florida Direct Route Center
            </span>
            <QuoteForm />
          </div>
        </div>
      </div>
    </section>
  );
};

/**
 * 2. OUR SERVICES SECTION
 * Custom styled grid displaying 6 services requested by user.
 */
export const OurServicesSection: React.FC<HomeSectionsProps> = ({
  onNavigate,
}) => {
  const customServices = [
    {
      id: "service-spring",
      title: "Garage Door Spring Repair",
      icon: <LayersIcon />,
      description:
        "High-tension system replacements for sheared torsion or extension springs. Correct calibration ensures reliable, balanced manual operations.",
      bullet: "High-Cycle Calibrated Springs",
      routeId: "service-spring" as PageId,
    },
    {
      id: "service-opener",
      title: "Garage Door Opener Repair",
      icon: <WrenchIcon />,
      description:
        "Quiet-drive belt and chain automatic troubleshooting. LiftMaster, Chamberlain, and Genie board and sensory aligners on stand-by.",
      bullet: "Photo-eye Safety Diagnostics",
      routeId: "service-opener" as PageId,
    },
    {
      id: "service-emergency",
      title: "Emergency Garage Door Repair",
      icon: <EmergencyIcon />,
      description:
        "Fast, secure routing for vehicles stuck inside, crooked doors off vertical tracks, or severe storm-blown panels exposing homes.",
      bullet: "90-Min Dispatch Benchmark",
      routeId: "service-emergency" as PageId,
    },
    {
      id: "service-affordable",
      title: "Garage Door Repair (General)",
      icon: <HammerIcon />,
      description:
        "Structural component checks, steel cables re-wound, rusty rollers replaced with high-durability nylon wheels for silent operations.",
      bullet: "12-point Safety Audits",
      routeId: "service-affordable" as PageId,
    },
    {
      id: "service-newdoor",
      title: "Garage Door Installation",
      icon: <HomeIcon />,
      description:
        "Windload hurricane-rated steel reinforcements fitted for South Florida storm seasons. Enhances properties with security insulation.",
      bullet: "Hurricane Windload Insured",
      routeId: "services" as PageId,
    },
    {
      id: "service-tuneup",
      title: "Garage Door Maintenance",
      icon: <ShieldIcon />,
      description:
        "Preventative tune-ups, joint lubrication, visual frame tests, and spring tension checks to avoid high emergency breakdown expenses.",
      bullet: "Silicon Coating Lubrications",
      routeId: "services" as PageId,
    },
  ];

  return (
    <section
      className="py-20 bg-slate-50 border-b border-slate-200"
      id="services-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-blue-700 uppercase tracking-widest bg-blue-100/80 py-1.5 px-4 rounded-full border border-blue-200">
            Professional Scope
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 leading-tight font-heading">
            Our Professional Garage Door Services
          </h2>
          <div className="w-16 h-1.5 bg-blue-600 rounded-full mx-auto mt-4 mb-4" />
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            The heaviest mechanical apparatus in your household should only be
            managed by verified partners. We guarantee same-day solutions across
            Broward and Palm Beach counties.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {customServices.map((svc) => (
            <div
              key={svc.id}
              className="bg-white rounded-2xl border border-slate-200/80 shadow-md hover:shadow-xl hover:border-blue-200 hover:translate-y-[-2px] transition-all p-6 sm:p-8 flex flex-col justify-between group"
            >
              <div className="space-y-5">
                <div className="w-12 h-12 bg-blue-50 border border-blue-100 rounded-xl flex items-center justify-center text-blue-700 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-colors">
                  {svc.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {svc.description}
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[10px] text-emerald-600 bg-emerald-50 border border-emerald-100 py-1 px-2.5 rounded-full font-bold">
                  {svc.bullet}
                </span>
                <button
                  onClick={() => onNavigate(svc.routeId)}
                  className="text-xs font-bold text-slate-900 hover:text-blue-700 flex items-center gap-1 group-hover:translate-x-1 transition-transform cursor-pointer"
                >
                  Details <ArrowRight className="w-3.5 h-3.5 text-blue-600" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/**
 * 3. BOOK CALL SECTION
 * Conversion optimized, urgent actions
 */
export const BookCallSection: React.FC<HomeSectionsProps> = ({
  onNavigate,
}) => {
  return (
    <section className="bg-slate-900 text-white py-16 relative overflow-hidden border-y border-slate-950">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-600 via-amber-400 to-emerald-500" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-8 space-y-4 text-center md:text-left">
          <div className="inline-block bg-slate-800 text-amber-400 border border-slate-755 text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded">
            Immediate Response Guarantee
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading">
            Emergency Dispatch Line Active Across Florida
          </h2>
          <p className="text-slate-350 text-xs sm:text-sm max-w-2xl leading-relaxed">
            Locked inside our garage? Snapped torsion cables with vehicle
            trapped? Do not try manual release on loaded mechanisms. We maintain
            on-call technical drivers with full part selections to secure your
            system inside 90 minutes.
          </p>
        </div>
        <div className="md:col-span-4 flex flex-col sm:flex-row md:flex-col gap-3 w-full max-w-xs mx-auto">
          <a
            href="tel:8005550199"
            className="bg-blue-700 hover:bg-blue-600 text-white font-extrabold py-3.5 px-6 rounded-lg text-center flex items-center justify-center gap-2 shadow-lg transition-transform hover:scale-[1.01] cursor-pointer"
          >
            <Phone className="w-4 h-4 fill-white stroke-white" />
            (800) 555-0199
          </a>
          <a
            href="#quote-form"
            className="bg-slate-800 hover:bg-slate-750 text-white font-semibold py-3 px-6 rounded-lg text-center border border-slate-700 text-xs transition-colors cursor-pointer"
          >
            Diagnostics Form Request
          </a>
        </div>
      </div>
    </section>
  );
};

/**
 * 4. ABOUT SECTION
 * Transparent referral model, credentials, supporting block
 */
export const AboutSection: React.FC<HomeSectionsProps> = ({ onNavigate }) => {
  return (
    <section
      className="py-20 bg-white border-b border-slate-200"
      id="about-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left column: Supporting images/graphic stats */}
        <div className="lg:col-span-5 relative">
          <div className="space-y-4">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md h-72 sm:h-96">
              <img
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800"
                alt="Florida Certified Garage Technician repairing overhead system"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 text-white space-y-1">
                <span className="text-[10px] uppercase font-mono tracking-widest text-amber-400 bg-slate-900/40 px-2 py-0.5 rounded-sm">
                  On-Site Logistics
                </span>
                <p className="font-extrabold text-base">
                  Florida Fully-Stocked Service Trucks
                </p>
              </div>
            </div>
          </div>

          {/* Overlay pill widget with stats */}
          <div className="absolute -bottom-6 -right-5 sm:right-6 bg-slate-900 text-white rounded-xl border border-slate-755 p-4 sm:p-5 shadow-xl max-w-xs space-y-1 hidden sm:block">
            <div className="text-2xl font-extrabold text-amber-400">
              10,000+
            </div>
            <p className="text-[10px] text-slate-300 font-bold uppercase tracking-wider">
              Successful Spring & Opener Jobs Reassigned
            </p>
          </div>
        </div>

        {/* Right column: Copious details on referral model, safety & custom CTA */}
        <div className="lg:col-span-7 space-y-6 sm:space-y-8">
          <div>
            <span className="text-xs font-bold text-blue-700 uppercase tracking-widest bg-blue-50 py-1.5 px-3 rounded-full border border-blue-100">
              Florida Network Authorities
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 font-heading leading-tight">
              Safety-First Garage Repair Network in South Florida
            </h2>
          </div>

          <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
            <p>
              Florida Garage Door Repair serves as Broward and Palm Beach
              Counties’ most reliable <strong>referral agency</strong> resource.
              We keep our local service routes lined with vetted garage
              mechanics to insulate home owners from common contracting
              bottlenecks.
            </p>
         
          </div>

          {/* Icon lists */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                title: "Vetted Florida Crews",
                desc: "Background-verified, licensed, and insured field veterans.",
              },
              {
                title: "Genuine Part Sourcing",
                desc: "No-shear solid hardware rated for 15,000+ open-close cycles.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-4 bg-slate-50 border border-slate-100 rounded-xl space-y-1.5"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span className="font-extrabold text-slate-900 text-xs sm:text-sm">
                    {item.title}
                  </span>
                </div>
                <p className="text-slate-500 text-[11px] sm:text-xs leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div>
            <button
              onClick={() => onNavigate("about")}
              className="bg-slate-900 hover:bg-slate-800 text-white font-extrabold py-3 px-6 rounded-lg text-xs transition-colors cursor-pointer"
            >
              Learn More About Our Team & Ethics
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

/**
 * 5. AREAS WE SERVE SECTION
 * Elegant Broward & Palm Beach structures with clickable active routes
 */
export const AreasWeServeSection: React.FC<HomeSectionsProps> = ({
  onNavigate,
}) => {
  const regions = [
    {
      id: "area-broward",
      county: "Broward County",
      title:
        "Same-day active routes spanning Fort Lauderdale & Broward interior sectors",
      cities: [
        "Fort Lauderdale",
        "Hollywood",
        "Pembroke Pines",
        "Coral Springs",
        "Miramar",
        "Pompano Beach",
        "Davie",
        "Plantation",
      ],
    },
    {
      id: "area-palm-beach",
      county: "Palm Beach County",
      title:
        "Reliable seaside service routing through West Palm beach & coastal hubs",
      cities: [
        "Boca Raton",
        "West Palm Beach",
        "Delray Beach",
        "Boynton Beach",
        "Wellington",
        "Jupiter",
        "Palm Beach Gardens",
        "Lake Worth Beach",
      ],
    },
  ];

  return (
    <section
      className="py-20 bg-slate-55 border-b border-slate-200"
      id="areas-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-blue-700 uppercase tracking-widest bg-blue-105 py-1 px-3.5 rounded-full border border-blue-200 shadow-xs">
            Guaranteed Service Area
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 leading-tight font-heading">
            Areas We Serve in Florida
          </h2>
          <div className="w-16 h-1.5 bg-blue-600 rounded-full mx-auto mt-4 mb-4" />
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            We operate fully staffed standby dispatch trucks across South
            Florida. Click any region or city below for precise neighborhood zip
            routing:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {regions.map((region) => (
            <div
              key={region.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <h3 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-blue-700" /> {region.county}
                  </h3>
                  <span className="text-[10px] text-emerald-700 bg-emerald-50 border border-emerald-100 px-2.5 py-0.5 rounded-full font-bold">
                    Direct Routing Active
                  </span>
                </div>
                <p className="text-xs text-slate-500 font-medium italic">
                  {region.title}
                </p>

                {/* Cities listing */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2">
                  {region.cities.map((city) => (
                    <button
                      key={city}
                      onClick={() => onNavigate(region.id as PageId)}
                      className="text-left py-2 px-3 bg-slate-50 border border-slate-150 hover:bg-blue-50 hover:border-blue-200 rounded text-xs text-slate-700 font-medium transition-colors cursor-pointer group flex items-center justify-between"
                    >
                      <span className="truncate">{city}</span>
                      <ArrowRight className="w-2.5 h-2.5 text-slate-350 group-hover:text-blue-600 transition-colors" />
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 text-center">
                <button
                  onClick={() => onNavigate(region.id as PageId)}
                  className="text-xs font-bold text-blue-700 hover:underline inline-flex items-center gap-1 cursor-pointer"
                >
                  View Active {region.county} Zip Codes & Reviews &rar;
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/**
 * 6. FAQ SECTION
 * Premium schema-friendly Accordion FAQs
 */
export const FAQSection: React.FC<HomeSectionsProps> = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
   
    {
      q: "Do you offer emergency garage door repair on weekends and evenings?",
      a: "Yes, we provide emergency vehicle dispatch routing 24/7. When facing home compromises or trapped cars, we assign nearby standby trucks. Emergency service rates are explained clearly by phone to avoid unexpected bill shocks.",
    },
    {
      q: "How do Florida hot and humid environments affect automatic operations?",
      a: "Florida salt air and high summer humidity cause steel torsion springs to rust rapidly, which increases coil friction and leads to immediate stress fracturing. Opener electrical chips can also fail due to regular voltage brownouts and thunderstorm surges. Regular silicon lubrication on springs and surge protectors on outlets significantly improve equipment life.",
    },
    {
      q: "Can I perform DIY adjustments on garage-door chain openers?",
      a: "You can adjust minor photo-eye sensor heights or clean structural tracks. However, we strongly caution against adjusting bottom brackets, steel cables, or wound springs without professional training. These parts operate under a loaded torque force of several hundred foot-pounds and can snap causing instant physical injury.",
    },
    {
      q: "Do you provide guarantees on parts and labor completed?",
      a: "Yes. Our matched Florida partner programs provide written guarantees on all replacement springs, tracks, opener circuits, and service labor. Standard component warranties range from 1 to 5 years, guaranteeing long-term mechanical reliability.",
    },
    {
      q: "How frequently should a heavy double garage door be serviced?",
      a: "We recommend scheduling a mechanical safety check at least once every 12 months. This includes a 12-point track alignment verify, spring balance tests, moving joint lubrication, and automatic reversing system compliance tests.",
    },
  ];

  return (
    <section
      className="py-20 bg-slate-900 text-white border-t border-slate-950"
      id="faq-section"
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs text-amber-400 font-extrabold uppercase tracking-widest bg-slate-800 py-1.5 px-4 rounded-full border border-slate-755 shadow-sm">
            Consumer Support Center
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white mt-4">
            Frequently Asked Florida Garage Repair Questions
          </h2>
          <div className="w-16 h-1.5 bg-blue-600 rounded-full mx-auto mt-4 mb-4" />
          <p className="text-slate-400 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            Review detailed answers below regarding mechanical safety, coastal
            rust prevention, standard local repair rates, and same-day service
            dispatch guarantees.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIdx === i;
            return (
              <div
                key={i}
                className="bg-slate-950 rounded-xl border border-slate-800 overflow-hidden transition-all duration-300"
                itemProp="mainEntity"
                itemScope
                itemType="https://schema.org/Question"
              >
                {/* Accordion trigger with schema content */}
                <button
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left font-bold text-sm sm:text-base text-white hover:bg-slate-900 transition-colors focus:outline-none cursor-pointer"
                >
                  <span
                    itemProp="name"
                    className="pr-4 leading-snug flex items-start gap-2.5"
                  >
                    <HelpCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                    {faq.q}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-slate-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400 flex-shrink-0" />
                  )}
                </button>

                {/* Accordion answer with schema content */}
                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    isOpen ? "max-h-96 border-t border-slate-800" : "max-h-0"
                  }`}
                  itemProp="acceptedAnswer"
                  itemScope
                  itemType="https://schema.org/Answer"
                >
                  <div
                    className="p-5 text-xs sm:text-sm text-slate-350 leading-relaxed font-light"
                    itemProp="text"
                  >
                    {faq.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/**
 * 7. GET IN TOUCH FORM
 * High conversion contact form with state verification and feedback
 */
export const GetInTouchForm: React.FC<HomeSectionsProps> = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "general",
    message: "",
  });

  const [formState, setFormState] = useState<{
    status: "idle" | "submitting" | "success";
    error: string | null;
  }>({ status: "idle", error: null });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, phone, email } = formData;

    if (!name.trim() || !phone.trim() || !email.trim()) {
      setFormState({
        status: "idle",
        error: "Please enter your name, email, and phone number.",
      });
      return;
    }

    // Basic email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setFormState({
        status: "idle",
        error: "Please enter a valid email address.",
      });
      return;
    }

    setFormState({ status: "submitting", error: null });

    setTimeout(() => {
      setFormState({ status: "success", error: null });
    }, 1200);
  };

  return (
    <section
      className="py-20 bg-white border-b border-slate-200"
      id="contact-form-section"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-blue-700 uppercase tracking-widest bg-blue-50 py-1.5 px-3 rounded-full border border-blue-100">
            Dispatch Inquiries
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 mt-3 font-heading tracking-tight leading-tight">
            Schedule a Diagnostic Visit
          </h2>
          <div className="w-16 h-1.5 bg-blue-600 rounded-full mx-auto mt-4 mb-4" />
          <p className="text-slate-500 text-xs sm:text-sm">
            Fill out your details below to schedule custom storm door
            installations, major mechanical diagnostics or general repairs.
          </p>
        </div>

        <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
          {formState.status === "success" ? (
            <div className="text-center py-8 space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-50 border border-emerald-200 rounded-full text-emerald-600">
                <Check className="w-8 h-8 stroke-[3px]" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Form Processed Safely
              </h3>
              <p className="text-slate-650 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
                Thank you for your request. A certified diagnostics agent
                representing our South Florida routing centers will email or
                call you shortly.
              </p>
              <button
                onClick={() => {
                  setFormData({
                    name: "",
                    phone: "",
                    email: "",
                    service: "general",
                    message: "",
                  });
                  setFormState({ status: "idle", error: null });
                }}
                className="text-xs font-bold text-blue-700 hover:underline cursor-pointer"
              >
                Submit New Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {formState.error && (
                <div className="p-3.5 bg-rose-50 border border-rose-100 text-rose-700 text-xs rounded-md font-medium">
                  ⚠️ {formState.error}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                    Your Name <span className="text-amber-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Enter full name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full text-xs sm:text-sm bg-white border border-slate-200 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-700 transition-all text-slate-800 font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                    Phone Number <span className="text-amber-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="(561) 555-0199"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full text-xs sm:text-sm bg-white border border-slate-200 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-700 transition-all text-slate-800 font-medium"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                    Email Address <span className="text-amber-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="name@domain.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full text-xs sm:text-sm bg-white border border-slate-200 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-700 transition-all text-slate-800 font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                    Service Required
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full text-xs sm:text-sm bg-white border border-slate-200 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-700 transition-all text-slate-800 font-medium"
                  >
                    <option value="general">Select Service Category</option>
                    <option value="spring">Garage Springs replacement</option>
                    <option value="opener">Automatic Opener repairs</option>
                    <option value="emergency">
                      Emergency sideways door jam
                    </option>
                    <option value="maintenance">
                      Preventative Safety Tune-up
                    </option>
                    <option value="installation">
                      hurricane Storm door installation
                    </option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                  Your Message or Symptoms (Optional)
                </label>
                <textarea
                  name="message"
                  rows={3}
                  placeholder="Describe your garage door issues (e.g. door reversed, hums but doesn't lift, etc.)"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full text-xs sm:text-sm bg-white border border-slate-200 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-700 transition-all text-slate-800 font-medium"
                />
              </div>

              <button
                type="submit"
                disabled={formState.status === "submitting"}
                className="w-full bg-slate-900 hover:bg-slate-800 text-white font-extrabold py-3.5 rounded-lg text-xs tracking-wider uppercase transition-all shadow-md cursor-pointer text-center justify-center"
              >
                {formState.status === "submitting"
                  ? "Processing Securely..."
                  : "Request Diagnostics"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};



/* --- Custom SVG Micro-Icons for standalone styling flexibility --- */
const LayersIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
    />
  </svg>
);

const WrenchIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0x"
    />
  </svg>
);

const EmergencyIcon = () => (
  <svg
    className="w-6 h-6 animate-pulse text-red-500"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
    />
  </svg>
);

const HammerIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1"
    />
  </svg>
);

const HomeIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
    />
  </svg>
);

const ShieldIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    />
  </svg>
);
