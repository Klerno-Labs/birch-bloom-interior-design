```typescript
import React, { useState } from 'react';

interface InquiryFormProps {
  onSubmit: (data: FormData) => void;
}

const InquiryForm: React.FC<InquiryFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '', _gotcha: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData._gotcha) return; // Bot detected
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) });
      if (res.ok) setIsSuccess(true);
      else setError('Something went wrong. Please try again.');
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
        <input type="text" id="name" name="name" required onChange={handleChange} className="mt-1 block w-full border-b border-[#2c2c2c] py-2" />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
        <input type="email" id="email" name="email" required onChange={handleChange} className="mt-1 block w-full border-b border-[#2c2c2c] py-2" />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
        <input type="tel" id="phone" name="phone" onChange={handleChange} className="mt-1 block w-full border-b border-[#2c2c2c] py-2" />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
        <textarea id="message" name="message" required onChange={handleChange} className="mt-1 block w-full border-b border-[#2c2c2c] py-2" />
      </div>
      <button type="submit" disabled={isSubmitting} className="w-full bg-[#2c2c2c] text-[#faf8f5] py-3 font-bold hover:bg-[#8b7355] transition-colors">
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
      {isSuccess && <p className="text-green-600">Thank you! We'll be in touch within 24 hours.</p>}
      {error && <p className="text-red-600">{error}</p>}
    </form>
  );
};

export default InquiryForm;
```