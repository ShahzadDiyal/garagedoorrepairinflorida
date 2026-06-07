/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { AreaDetail } from '../types';

export const areasData: AreaDetail[] = [
  {
    id: 'area-broward',
    county: 'Broward County',
    title: 'Broward County Garage Door Repair & Service',
    description: 'Looking for fast, same-day garage door repair in Broward County, FL? We connect you with local, highly skilled garage door technicians serving homes and businesses from Deerfield Beach to Hollywood. High humidity, coastal salt air, and regular thunder-showers mean South Florida garage doors suffer from rust, physical stress, and component fatigue. Whether you have a broken spring in Fort Lauderdale or a failed automatic opener in Coral Springs, we route a certified professional to solve your issue on the double.',
    cities: [
      'Fort Lauderdale', 'Hollywood', 'Pompano Beach', 'Coral Springs', 'Miramar',
      'Pembroke Pines', 'Davie', 'Plantation', 'Sunrise', 'Deerfield Beach',
      'Weston', 'Margate', 'Coconut Creek', 'Hallandale Beach', 'Lauderhill'
    ],
    zipCodes: [
      '33301', '33304', '33308', '33311', '33312', '33020', '33021', '33023',
      '33060', '33062', '33064', '33065', '33067', '33025', '33027', '33324',
      '33322', '33323', '33441', '33442', '33326', '33327', '33063'
    ],
    highlights: [
      'Local Broward dispatch with technicians positioned near major highways (I-95, I-75, Turnpike)',
      'Hurrican-force windload garage door reinforcement inspections',
      'Prompt evening and weekend dispatcher response for urgent lock-ins',
      'Upfront transparent flat-rate repair quotes for all residential styles'
    ],
    reviews: [
      {
        id: 'rev-broward-1',
        name: 'Carlos R.',
        location: 'Fort Lauderdale, FL',
        rating: 5,
        text: 'The spring on our heavy two-car garage door snapped at 7:00 AM on a Tuesday. I called, and a technician arrived in Pompano by 9:30 AM. He replaced both springs, checked the cables, and had us running again in under an hour. Outstanding response time!',
        date: '2026-05-12',
        verified: true
      },
      {
        id: 'rev-broward-2',
        name: 'Sarah M.',
        location: 'Coral Springs, FL',
        rating: 5,
        text: 'Our garage door opener was making an awful grinding noise and reversing halfway down. The technician diagnosed a stripped gear assembly, gave me a clear upfront price, and replaced it immediately from parts on his truck. Very honest work!',
        date: '2026-04-29',
        verified: true
      }
    ]
  },
  {
    id: 'area-palm-beach',
    county: 'Palm Beach County',
    title: 'Palm Beach County Garage Door Repair & Service',
    description: 'We offer reliable, same-day garage door solutions across Palm Beach County, Florida. Operating in Boca Raton, West Palm Beach, Jupiter, and surrounding beachfront communities, our local partner technicians understand the specific needs of Palm Beach properties. From storm-proof hurricane wind-rated doors to stylish custom setups, we facilitate quick troubleshooting, spring adjustments, motor replacements, and general mechanical optimizations to keep your home safe, secure, and fully functional.',
    cities: [
      'West Palm Beach', 'Boca Raton', 'Boynton Beach', 'Delray Beach', 'Wellington',
      'Jupiter', 'Palm Beach Gardens', 'Lake Worth Beach', 'Greenacres', 'Royal Palm Beach',
      'Riviera Beach', 'Belle Glade', 'North Palm Beach', 'Lantana', 'Tequesta'
    ],
    zipCodes: [
      '33401', '33405', '33409', '33431', '33432', '33433', '33486', '33426',
      '33435', '33436', '33444', '33445', '33483', '33414', '33458', '33469',
      '33418', '33410', '33460', '33461', '33411', '33412', '33404'
    ],
    highlights: [
      'Same-day service routing for busy homeowners and property managers',
      'Hurricane-season door brace installations and vertical track realignments',
      'Specializing in premium residential operators and rolling security shutter repairs',
      'Fully licensed, bonded, and local field specialists'
    ],
    reviews: [
      {
        id: 'rev-pb-1',
        name: 'James D.',
        location: 'Boca Raton, FL',
        rating: 5,
        text: 'Clean professional service. I wanted to upgrade our noisy chain opener to a modern, quiet belt-drive system with smart controls. The process was explained well, quote was fair, and the installation is beautifully tidy.',
        date: '2026-05-20',
        verified: true
      },
      {
        id: 'rev-pb-2',
        name: 'Elena K.',
        location: 'Wellington, FL',
        rating: 5,
        text: 'After backing slightly into the lower panel of our garage door, we were terrified we would have to replace the entire setup. This team arrived same-day, straightened the tracks, braced the panel, and ensured it operated safely. Honest people!',
        date: '2026-05-02',
        verified: true
      }
    ]
  }
];
