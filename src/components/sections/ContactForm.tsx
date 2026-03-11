'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const validateField = (name: string, value: string) => {
    let error = '';
    if (name === 'email') {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        error = 'Please enter a valid email address.';
      }
    }
    if (name === 'phone' && value) {
      if (!/^\+?[\d\s-()]{10,}$/.test(value)) {
        error = 'Please enter a valid phone number.';
      }
    }
    setFieldErrors(prev => ({ ...prev, [name]: error }));
    return error === '';
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (fieldErrors[name]) validateField(name, value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSuccess(false);
    
    // Validation
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!formData.email.trim()) newErrors.email = 'Email is required.';
    else if (!validateField('email', formData.email)) newErrors.email = 'Invalid email.';
    if (!formData.message.trim()) newErrors.message = 'Message is required.';
    
    setFieldErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setIsSubmitting(true);

    try {
      const formPayload = new FormData();
      Object.entries(formData).forEach(([key, value]) => formPayload.append(key, value));
      // Honeypot
      formPayload.append('_gotcha', ''); 

      const res = await fetch("/api/contact", { 
        method: "POST", 
        body: formPayload 
      });

      if (res.ok) {
        setIsSuccess(true);
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-12 max-w-2xl mx-auto">
      {/* Honeypot */}
      <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Name */}
        <div className="relative group">
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={cn(
              "w-full bg-transparent border-b border-[#2c2c2c] py-4 text-[#2c2c2c] focus:outline-none transition-colors peer",
              fieldErrors.name ? "border-red-500" : "focus:border-[#8b7355]"
            )}
            placeholder=" "
            aria-describedby="name-error"
          />
          <label
            htmlFor="name"
            className="absolute left-0 top-4 text-[#6b6b6b] pointer-events-none transition-all duration-300 peer-focus:-top-6 peer-focus:text-xs peer-focus:text-[#8b7355] peer-not-placeholder-shown:-top-6 peer-not-placeholder-shown:text-xs"
          >
            Full Name
          </label>
          {fieldErrors.name && (
            <p id="name-error" className="text-red-500 text-sm mt-1">{fieldErrors.name}</p>
          )}
        </div>

        {/* Email */}
        <div className="relative group">
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={cn(
              "w-full bg-transparent border-b border-[#2c2c2c] py-4 text-[#2c2c2c] focus:outline-none transition-colors peer",
              fieldErrors.email ? "border-red-500" : "focus:border-[#8b7355]"
            )}
            placeholder=" "
            aria-describedby="email-error"
          />
          <label
            htmlFor="email"
            className="absolute left-0 top-4 text-[#6b6b6b] pointer-events-none transition-all duration-300 peer-focus:-top-6 peer-focus:text-xs peer-focus:text-[#8b7355] peer-not-placeholder-shown:-top-6 peer-not-placeholder-shown:text-xs"
          >
            Email Address
          </label>
          {fieldErrors.email && (
            <p id="email-error" className="text-red-500 text-sm mt-1">{fieldErrors.email}</p>
          )}
        </div>
      </div>

      {/* Phone */}
      <div className="relative group">
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={cn(
            "w-full bg-transparent border-b border-[#2c2c2c] py-4 text-[#2c2c2c] focus:outline-none transition-colors peer",
            fieldErrors.phone ? "border-red-500" : "focus:border-[#8b7355]"
          )}
          placeholder=" "
          aria-describedby="phone-error"
        />
        <label
          htmlFor="phone"
          className="absolute left-0 top-4 text-[#6b6b6b] pointer-events-none transition-all duration-300 peer-focus:-top-6 peer-focus:text-xs peer-focus:text-[#8b7355] peer-not-placeholder-shown:-top-6 peer-not-placeholder-shown:text-xs"
        >
          Phone Number
        </label>
        {fieldErrors.phone && (
          <p id="phone-error" className="text-red-500 text-sm mt-1">{fieldErrors.phone}</p>
        )}
      </div>

      {/* Service Interest */}
      <div className="relative group">
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="w-full bg-transparent border-b border-[#2c2c2c] py-4 text-[#2c2c2c] focus:outline-none focus:border-[#8b7355] transition-colors appearance-none cursor-pointer"
        >
          <option value="" disabled className="text-gray-500">Select Service</option>
          <option value="Full Home Design">Full Home Design</option>
          <option value="Room Refresh">Room Refresh</option>
          <option value="Design Consultation">Design Consultation</option>
          <option value="Virtual Design">Virtual Design</option>
          <option value="Staging for Sale">Staging for Sale</option>
          <option value="Holiday Styling">Holiday Styling</option>
        </select>
        <div className="absolute right-0 top-5 pointer-events-none">
          <svg className="w-4 h-4 text-[#2c2c2c]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
        </div>
      </div>

      {/* Message */}
      <div className="relative group">
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          className={cn(
            "w-full bg-transparent border-b border-[#2c2c2c] py-4 text-[#2c2c2c] focus:outline-none resize-none transition-colors peer",
            fieldErrors.message ? "border-red-500" : "focus:border-[#8b7355]"
          )}
          placeholder=" "
          aria-describedby="message-error"
        />
        <label
          htmlFor="message"
          className="absolute left-0 top-4 text-[#6b6b6b] pointer-events-none transition-all duration-300 peer-focus:-top-6 peer-focus:text-xs peer-focus:text-[#8b7355] peer-not-placeholder-shown:-top-6 peer-not-placeholder-shown:text-xs"
        >
          Tell us about your project
        </label>
        {fieldErrors.message && (
          <p id="message-error" className="text-red-500 text-sm mt-1">{fieldErrors.message}</p>
        )}
      </div>

      {/* Feedback Messages */}
      {isSuccess && (
        <div className="p-4 bg-green-50 text-green-800 rounded-md border border-green-200 text-center">
          Thank you! We'll be in touch within 24 hours.
        </div>
      )}
      {error && (
        <div className="p-4 bg-red-50 text-red-800 rounded-md border border-red-200 text-center">
          {error}
        </div>
      )}

      <Button 
        type="submit" 
        disabled={isSubmitting}
        className="w-full bg-[#2c2c2c] text-[#faf8f5] py-5 font-manrope uppercase tracking-widest hover:bg-[#8b7355] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Sending...
          </span>
        ) : "Send Inquiry"}
      </Button>
    </form>
  );
}