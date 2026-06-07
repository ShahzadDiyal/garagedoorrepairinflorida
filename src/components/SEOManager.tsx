/**
 * @license
 * SPDX-License-Identifier: Apache-2.5
 */

import React, { useEffect } from 'react';
import { PageId } from '../types';
import { servicesData } from '../data/servicesData';
import { areasData } from '../data/areasData';
import { blogData } from '../data/blogData';

interface SEOManagerProps {
  currentPage: PageId;
}

export const SEOManager: React.FC<SEOManagerProps> = ({ currentPage }) => {
  useEffect(() => {
    // 1. Determine metadata info
    let title = 'Florida Garage Door Repair | Same Day Broward & Palm Beach';
    let description = 'Reliable, affordable, and certified same-day garage door repair services in South Florida. We replace broken torsion springs, repair automatic openers, and fix off-track doors 24/7.';
    let keywords = 'garage door repair florida, broken torsion spring replacement, garage door opener repair, emergency garage door service, Broward county garage repair, Palm Beach county garage repair, overhead door repairs, same day dispatch';
    let suffix = ' | Florida Garage Door Repair';

    // Fallback origin
    const siteUrl = window.location.origin || 'https://floridagaragedoorrepair.local';
    let canonicalUrl = `${siteUrl}/`;

    if (currentPage === 'home') {
      title = 'Florida Garage Door Repair | Same Day Broward & Palm Beach Counties';
      description = 'Vetted local technicians providing rapid same-day garage door repair, tension spring replacement, and automatic opener troubleshooting down your Florida block.';
      canonicalUrl = `${siteUrl}/`;
    } else if (currentPage === 'about') {
      title = `About Our Local Referral Network${suffix}`;
      description = 'Learn about our network of vetted, licensed, and certified South Florida garage repair crews. Honest pricing, fast dispatches, and quality hardware guidelines.';
      canonicalUrl = `${siteUrl}/about`;
    } else if (currentPage === 'services') {
      title = `Professional Garage Door Services Florida${suffix}`;
      description = 'Complete menu of garage services: torsion spring replacements, automatic chain/belt opener diagnostics, hurricane windload bracing, and off-track garage panel alignments.';
      canonicalUrl = `${siteUrl}/services`;
    } else if (currentPage === 'blog') {
      title = `Garage Door Safety, Maintenance & Repair Helpdesk${suffix}`;
      description = 'Technical guidelines, safety inspections, salt air rust prevention advisories, and insights on choosing ethical local service technicians in Broward & Palm Beach Counties.';
      canonicalUrl = `${siteUrl}/blog`;
    } else if (currentPage === 'contact') {
      title = `Contact Standby Dispatch Coordinators${suffix}`;
      description = 'Get immediate same-day response in South Florida. Call (800) 555-0199 or submit our diagnostic form to locate a certified garage door specialist in under 90 minutes.';
      canonicalUrl = `${siteUrl}/contact`;
    } else if (currentPage.startsWith('service-')) {
      const s = servicesData.find(x => x.id === currentPage);
      if (s) {
        title = `${s.title}${suffix}`;
        description = s.shortDescription;
        canonicalUrl = `${siteUrl}/services/${currentPage.replace('service-', '')}`;
      }
    } else if (currentPage.startsWith('area-')) {
      const a = areasData.find(x => x.id === currentPage);
      if (a) {
        title = `${a.title}${suffix}`;
        description = a.description;
        canonicalUrl = `${siteUrl}/locations/${currentPage.replace('area-', '')}`;
      }
    } else if (currentPage.startsWith('blog-post-')) {
      const b = blogData.find(x => x.id === currentPage);
      if (b) {
        title = `${b.title}${suffix}`;
        description = b.summary;
        canonicalUrl = `${siteUrl}/blog/${currentPage.replace('blog-post-', '')}`;
      }
    }

    // 2. Set DOM Title
    document.title = title;

    // 3. Inject standard meta tags dynamically
    updateOrCreateMeta('description', description);
    updateOrCreateMeta('keywords', keywords);

    // Open Graph Tags
    updateOrCreateMeta('og:title', title, 'property');
    updateOrCreateMeta('og:description', description, 'property');
    updateOrCreateMeta('og:url', canonicalUrl, 'property');
    updateOrCreateMeta('og:type', 'website', 'property');
    updateOrCreateMeta('og:image', 'https://images.unsplash.com/photo-1558211583-d26f610c1eb1?auto=format&fit=crop&q=80&w=1200', 'property');
    updateOrCreateMeta('og:site_name', 'Florida Garage Door Repair');

    // Twitter Tags
    updateOrCreateMeta('twitter:card', 'summary_large_image', 'name');
    updateOrCreateMeta('twitter:title', title, 'name');
    updateOrCreateMeta('twitter:description', description, 'name');
    updateOrCreateMeta('twitter:image', 'https://images.unsplash.com/photo-1558211583-d26f610c1eb1?auto=format&fit=crop&q=80&w=1200', 'name');

    // Canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // 4. Build Structured Schema JSON-LD Data
    const schemas: any[] = [];

    // All pages get the Breadcrumb schema
    const breadcrumbListItems = [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Home',
        'item': siteUrl
      }
    ];

    if (currentPage !== 'home') {
      if (currentPage === 'about') {
        breadcrumbListItems.push({
          '@type': 'ListItem',
          'position': 2,
          'name': 'About Us',
          'item': `${siteUrl}/about`
        });
      } else if (currentPage === 'services') {
        breadcrumbListItems.push({
          '@type': 'ListItem',
          'position': 2,
          'name': 'Services',
          'item': `${siteUrl}/services`
        });
      } else if (currentPage === 'blog') {
        breadcrumbListItems.push({
          '@type': 'ListItem',
          'position': 2,
          'name': 'Knowledge Blog',
          'item': `${siteUrl}/blog`
        });
      } else if (currentPage === 'contact') {
        breadcrumbListItems.push({
          '@type': 'ListItem',
          'position': 2,
          'name': 'Contact Dispatch',
          'item': `${siteUrl}/contact`
        });
      } else if (currentPage.startsWith('service-')) {
        breadcrumbListItems.push({
          '@type': 'ListItem',
          'position': 2,
          'name': 'Services',
          'item': `${siteUrl}/services`
        });
        const s = servicesData.find(x => x.id === currentPage);
        if (s) {
          breadcrumbListItems.push({
            '@type': 'ListItem',
            'position': 3,
            'name': s.title,
            'item': `${siteUrl}/services/${currentPage.replace('service-', '')}`
          });
        }
      } else if (currentPage.startsWith('area-')) {
        breadcrumbListItems.push({
          '@type': 'ListItem',
          'position': 2,
          'name': 'Service Areas',
          'item': `${siteUrl}/#areas`
        });
        const a = areasData.find(x => x.id === currentPage);
        if (a) {
          breadcrumbListItems.push({
            '@type': 'ListItem',
            'position': 3,
            'name': a.county,
            'item': `${siteUrl}/locations/${currentPage.replace('area-', '')}`
          });
        }
      } else if (currentPage.startsWith('blog-post-')) {
        breadcrumbListItems.push({
          '@type': 'ListItem',
          'position': 2,
          'name': 'Knowledge Blog',
          'item': `${siteUrl}/blog`
        });
        const b = blogData.find(x => x.id === currentPage);
        if (b) {
          breadcrumbListItems.push({
            '@type': 'ListItem',
            'position': 3,
            'name': b.title,
            'item': `${siteUrl}/blog/${currentPage.replace('blog-post-', '')}`
          });
        }
      }
    }

    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': breadcrumbListItems
    });

    // LocalBusiness Schema (Always present to build trust and local SEO authority)
    const localBusinessSchema = {
      '@context': 'https://schema.org',
      '@type': 'HomeAndConstructionBusiness',
      'name': 'Florida Garage Door Repair',
      'alternateName': 'Florida LeadSmart Garage Coordinators',
      'description': 'Certified same-day garage door spring replacement, track alignment, and automatic opener motor repairs in South Florida.',
      'url': siteUrl,
      'telephone': '+1-800-555-0199',
      'logo': 'https://images.unsplash.com/photo-1558211583-d26f610c1eb1?auto=format&fit=crop&q=80&w=180',
      'image': 'https://images.unsplash.com/photo-1558211583-d26f610c1eb1?auto=format&fit=crop&q=80&w=800',
      'priceRange': '$$',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'Fort Lauderdale Dispatch HQ S-1',
        'addressLocality': 'Fort Lauderdale',
        'addressRegion': 'FL',
        'postalCode': '33301',
        'addressCountry': 'US'
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': '26.1224',
        'longitude': '-80.1373'
      },
      'areaServed': [
        {
          '@type': 'AdministrativeArea',
          'name': 'Broward County'
        },
        {
          '@type': 'AdministrativeArea',
          'name': 'Palm Beach County'
        },
        {
          '@type': 'AdministrativeArea',
          'name': 'Fort Lauderdale'
        },
        {
          '@type': 'AdministrativeArea',
          'name': 'Boca Raton'
        },
        {
          '@type': 'AdministrativeArea',
          'name': 'Hollywood'
        },
        {
          '@type': 'AdministrativeArea',
          'name': 'West Palm Beach'
        },
        {
          '@type': 'AdministrativeArea',
          'name': 'Coral Springs'
        }
      ],
      'openingHoursSpecification': [
        {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          'opens': '07:00',
          'closes': '21:00'
        },
        {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': ['Saturday'],
          'opens': '08:00',
          'closes': '18:00'
        },
        {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': ['Sunday'],
          'opens': '09:00',
          'closes': '17:00'
        }
      ]
    };
    schemas.push(localBusinessSchema);

    // If on a Service Page, add Service Schema & FAQ Schema
    if (currentPage.startsWith('service-')) {
      const s = servicesData.find(x => x.id === currentPage);
      if (s) {
        schemas.push({
          '@context': 'https://schema.org',
          '@type': 'Service',
          'name': s.title,
          'serviceType': 'Garage Door Repair and Maintenance',
          'description': s.shortDescription,
          'provider': {
            '@type': 'LocalBusiness',
            'name': 'Florida Garage Door Repair',
            'telephone': '+1-800-555-0199'
          },
          'areaServed': ['Broward County, FL', 'Palm Beach County, FL'],
          'hasOfferCatalog': {
            '@type': 'OfferCatalog',
            'name': 'Garage Door Support Services',
            'itemListElement': s.benefits.map((b, i) => ({
              '@type': 'Offer',
              'itemOffered': {
                '@type': 'Service',
                'name': `${s.title} Option ${i + 1}`,
                'description': b
              }
            }))
          }
        });

        // FAQ schema
        if (s.faqs && s.faqs.length > 0) {
          schemas.push({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            'mainEntity': s.faqs.map(faq => ({
              '@type': 'Question',
              'name': faq.question,
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': faq.answer
              }
            }))
          });
        }
      }
    }

    // If on Home page, add General FAQ Schema
    if (currentPage === 'home') {
      const homeFaqs = [
        {
          question: 'Are South Florida technicians certified to install hurricane wind-load systems?',
          answer: 'Yes. Every overhead contractor we route meets the absolute highest Florida High Velocity Hurricane Zone (HVHV) compliance. Technicians verify local structural bracing levels during dispatches.'
        },
        {
          question: 'How much does it cost to repair a snapped torsion garage spring?',
          answer: 'Spring repair costs vary based on standard factors like dimensions, cycle limits, and weight. Technicians deliver a written upfront flat-rate breakdown before winding any high-tension coil springs.'
        },
        {
          question: 'How fast can a repair specialist arrive at my home in Broward or Palm Beach?',
          answer: 'Our mobile dispatch coordinates usually reach your driveway in under 90 minutes. Technicians carry standard repair materials and cyclic replacement units inside active utility vehicles.'
        }
      ];

      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': homeFaqs.map(faq => ({
          '@type': 'Question',
          'name': faq.question,
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': faq.answer
          }
        }))
      });
    }

    // Clean previous schema scripts and inject fresh schemas
    const selectorClass = 'dynamic-ld-json-schema';
    document.querySelectorAll(`.${selectorClass}`).forEach(el => el.remove());

    schemas.forEach(schemaData => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.className = selectorClass;
      script.text = JSON.stringify(schemaData);
      document.head.appendChild(script);
    });

  }, [currentPage]);

  // Support helper to upsert meta elements
  const updateOrCreateMeta = (nameValue: string, contentValue: string, attributeName: 'name' | 'property' = 'name') => {
    let el = document.querySelector(`meta[${attributeName}="${nameValue}"]`);
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute(attributeName, nameValue);
      document.head.appendChild(el);
    }
    el.setAttribute('content', contentValue);
  };

  return null; // Side-effect only component
};
