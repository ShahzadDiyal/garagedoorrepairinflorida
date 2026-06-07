/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type PageId = 'home' | 'about' | 'services' | 'areas' | 'blog' | 'contact' | 'service-spring' | 'service-opener' | 'service-emergency' | 'service-sameday' | 'service-affordable' | 'area-broward' | 'area-palm-beach' | 'blog-post-1' | 'blog-post-2' | 'blog-post-3';

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface Review {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  date: string;
  verified: boolean;
}

export interface ServiceDetail {
  id: PageId;
  title: string;
  shortDescription: string;
  longDescription: string;
  mainImage: string;
  benefits: string[];
  faqs: FAQItem[];
  commonIssues: string[];
  ctaText: string;
}

export interface AreaDetail {
  id: PageId;
  county: string;
  title: string;
  description: string;
  cities: string[];
  zipCodes: string[];
  highlights: string[];
  reviews: Review[];
}

export interface BlogPost {
  id: PageId;
  title: string;
  summary: string;
  content: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
  image: string;
  tags: string[];
}
