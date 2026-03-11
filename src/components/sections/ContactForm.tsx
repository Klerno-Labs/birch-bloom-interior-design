"use client";
import { useState } from "react";

export function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" },
      });
      if (res.ok) {
        setIsSuccess(true);
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
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium">Name</label>
        <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required className="border rounded-md p-2 w-full" />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium">Email</label>
        <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className="border rounded-md p-2 w-full" />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium">Message</label>
        <textarea name="message" id="message" value={formData.message} onChange={handleChange} required className="border rounded-md p-2 w-full" />
      </div>
      <button type="submit" disabled={isSubmitting} className="bg-gray-900 text-white rounded-md p-2">
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
      {isSuccess && <p className="text-green-600">Thank you! We'll be in touch within 24 hours.</p>}
      {error && <p className="text-red-600">{error}</p>}
      <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
    </form>
  );
}