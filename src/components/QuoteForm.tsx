/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Calendar, Phone, CheckCircle, Mail, MapPin, Loader2 } from 'lucide-react';
import { areasData } from '../data/areasData';

// Fetch all valid ZIPs from our county list for real-time validation
const VALID_ZIPS = new Set([
  ...areasData[0].zipCodes,
  ...areasData[1].zipCodes
]);

export const QuoteForm: React.FC<{ serviceDefault?: string }> = ({ serviceDefault = 'general' }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    zip: '',
    service: serviceDefault,
    timing: 'same-day',
    details: ''
  });

  const [zipFeedback, setZipFeedback] = useState<{
    isValid: boolean | null;
    message: string;
  }>({ isValid: null, message: '' });

  const [formError, setFormError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleZipChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.trim();
    setFormData(prev => ({ ...prev, zip: val }));

    if (val.length === 5) {
      if (VALID_ZIPS.has(val)) {
        // Find which county
        const countyName = areasData.find(a => a.zipCodes.includes(val))?.county || 'South Florida';
        setZipFeedback({
          isValid: true,
          message: `✓ Premium dispatch available in ${countyName}!`
        });
        setFormError(null);
      } else {
        setZipFeedback({
          isValid: false,
          message: `Service area check: ZIP code is outside current Broward / Palm Beach routes.`
        });
      }
    } else {
      setZipFeedback({ isValid: null, message: '' });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim() || !formData.zip.trim()) {
      setFormError('Please enter your name, phone number, and ZIP code to request dispatch details.');
      return;
    }

    if (formData.zip.trim().length !== 5 || !VALID_ZIPS.has(formData.zip.trim())) {
      setFormError('Please enter a valid South Florida ZIP code within Broward or Palm Beach County.');
      return;
    }

    setFormError(null);
    setIsSubmitting(true);
    
    // Simulate API dispatch payload
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200/80 shadow-md p-6 sm:p-8" id="quote-form">
      {isSuccess ? (
        <div className="text-center py-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-50 rounded-full text-emerald-600 mb-4 border border-emerald-200">
            <CheckCircle className="w-10 h-10" />
          </div>
          <h3 className="text-2xl font-semibold text-slate-900 mb-2">Request Processed Safely</h3>
          <p className="text-slate-600 text-sm max-w-md mx-auto mb-6">
            A certified local service representative has been notified of your request and will call you at <span className="font-semibold text-slate-800">{formData.phone}</span> shortly to complete diagnostics booking.
          </p>
          <button
            onClick={() => {
              setIsSuccess(false);
              setFormData({
                name: '',
                phone: '',
                zip: '',
                service: 'general',
                timing: 'same-day',
                details: ''
              });
              setZipFeedback({ isValid: null, message: '' });
            }}
            className="text-sm font-semibold text-brand-blue hover:underline cursor-pointer"
          >
            Submit Another Request
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <h3 className="text-xl font-bold text-slate-900">Request Reliable Diagnostics</h3>
            <p className="text-xs text-slate-500 mt-1 font-medium">
              Transparent rate pricing • Certified local technician dispatch
            </p>
          </div>

          {formError && (
            <div className="p-3.5 bg-rose-50 border border-rose-100 text-rose-700 text-xs rounded-md font-medium leading-relaxed animate-fade-in">
              ⚠️ {formError}
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1.5">
                Full Name <span className="text-brand-accent">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="John Doe"
                value={formData.name}
                onChange={prev => setFormData({ ...prev, name: prev.target.value })}
                className="w-full text-sm bg-slate-50 border border-slate-200 rounded-md py-2.5 px-3 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:bg-white transition-all text-slate-800 font-medium"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1.5">
                Phone Number <span className="text-brand-accent">*</span>
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                <input
                  type="tel"
                  required
                  placeholder="(561) 555-0199"
                  value={formData.phone}
                  onChange={prev => setFormData({ ...prev, phone: prev.target.value })}
                  className="w-full text-sm bg-slate-50 border border-slate-200 rounded-md py-2.5 pl-10 pr-3 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:bg-white transition-all text-slate-800 font-medium"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1.5">
                Florida ZIP Code <span className="text-brand-accent">*</span>
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  required
                  maxLength={5}
                  placeholder="33301"
                  value={formData.zip}
                  onChange={handleZipChange}
                  className="w-full text-sm bg-slate-50 border border-slate-200 rounded-md py-2.5 pl-10 pr-3 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:bg-white transition-all text-slate-800 font-medium"
                />
              </div>
              {zipFeedback.message && (
                <p className={`text-[11px] mt-1.5 font-medium ${zipFeedback.isValid ? 'text-emerald-600' : 'text-amber-600'}`}>
                  {zipFeedback.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1.5">
                Service Needed
              </label>
              <select
                value={formData.service}
                onChange={prev => setFormData({ ...prev, service: prev.target.value })}
                className="w-full text-sm bg-slate-50 border border-slate-200 rounded-md py-2.5 px-3 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:bg-white transition-all text-slate-800 font-medium"
              >
                <option value="general">Select Local Service Needed</option>
                <option value="spring">Garage Door Spring Repair</option>
                <option value="opener">Garage Door Opener Repair</option>
                <option value="emergency">Emergency / Crooked Door</option>
                <option value="tuneup">Premium Diagnostic Tune-Up</option>
                <option value="newdoor">Custom Heavy Storm Door Estimate</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1.5">
              Preferred Timing
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'same-day', label: 'Same Day' },
                { id: 'next-day', label: 'Next Day' },
                { id: 'flexible', label: 'Flexible' }
              ].map(opt => (
                <button
                  type="button"
                  key={opt.id}
                  onClick={() => setFormData(prev => ({ ...prev, timing: opt.id }))}
                  className={`py-2 px-3 text-xs font-semibold rounded-md border text-center transition-all cursor-pointer ${
                    formData.timing === opt.id
                      ? 'bg-slate-900 border-slate-900 text-white shadow-sm'
                      : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1.5">
              Describe the problem (Optional)
            </label>
            <textarea
              rows={2}
              placeholder="E.g., Heard a loud bounce snap above the door, door remains locked down or off-track."
              value={formData.details}
              onChange={prev => setFormData({ ...prev, details: prev.target.value })}
              className="w-full text-sm bg-slate-50 border border-slate-200 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:bg-white transition-all text-slate-800 font-medium"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-3 rounded-md transition-all flex items-center justify-center shadow-md hover:shadow cursor-pointer text-sm"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Dispatching Request...
              </>
            ) : (
              'Book Scheduled Service Visit'
            )}
          </button>

          <p className="text-[10px] text-slate-400 text-center leading-relaxed">
            By submitting, you agree to receive follow-up contact regarding home services. We respect your security; no false guarantees or hidden fee spikes. Fully compliant with LeadSmart advertising transparency.
          </p>
        </form>
      )}
    </div>
  );
};
