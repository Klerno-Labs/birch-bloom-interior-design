```typescript
import { useState } from 'react';
import { images } from '@/config/images';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '', _gotcha: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData._gotcha) return; // Bot detected
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) });
      if (res.ok) {
        setIsSuccess(true);
        setFormData({ name: '', email: '', message: '', _gotcha: '' }); // Reset form
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main>
      <section className="py-16 md:py-24 bg-[#d4c5b2]">
        <h1 className="text-4xl font-bold text-center">Let's Create Together</h1>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="w-full md:w-1/2 p-8">
            <h2 className="text-2xl font-semibold">Contact Information</h2>
            <p>Email: hello@birchandbloom.com</p>
            <p>Phone: (555) 321-6543</p>
            <p>Address: 225 Design District Way, Nashville, TN 37203</p>
          </div>
          <form onSubmit={handleSubmit} className="w-full md:w-1/2 p-8">
            <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium">Name</label>
              <input type="text" name="name" id="name" required onChange={handleChange} className="border-b border-[#2c2c2c] w-full py-2" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium">Email</label>
              <input type="email" name="email" id="email" required onChange={handleChange} className="border-b border-[#2c2c2c] w-full py-2" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium">Message</label>
              <textarea name="message" id="message" required onChange={handleChange} className="border-b border-[#2c2c2c] w-full py-2" />
            </div>
            <button type="submit" disabled={isSubmitting} className="bg-[#2c2c2c] text-[#faf8f5] py-2 px-4 rounded-lg">
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            {isSuccess && <p className="text-green-600">Thank you! We'll be in touch within 24 hours.</p>}
            {error && <p className="text-red-600">{error}</p>}
          </form>
        </div>
      </section>
    </main>
  );
}
```