"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/config/site";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    _gotcha: "" // Honeypot
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData._gotcha) return; // Bot detected

    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", service: "", message: "", _gotcha: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-green-50 border border-green-200 p-8 rounded-lg text-center">
        <h3 className="font-serif text-2xl text-green-800 mb-2">Message Sent</h3>
        <p className="text-green-700">Thank you! We'll be in touch within 24 hours.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
      {/* Info Column */}
      <div className="space-y-8">
        <div>
          <h2 className="font-serif text-3xl md:text-4xl text-primary mb-6">
            Let's Create Together
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Ready to start your transformation? Fill out the form or reach out directly. We can't wait to hear about your project.
          </p>
        </div>

        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <MapPin className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-semibold text-primary">Studio</h4>
              <p className="text-muted-foreground">{siteConfig.contact.address}</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Phone className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-semibold text-primary">Phone</h4>
              <a href={`tel:${siteConfig.contact.phone}`} className="text-muted-foreground hover:text-primary transition-colors">
                {siteConfig.contact.phone}
              </a>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Mail className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-semibold text-primary">Email</h4>
              <a href={`mailto:${siteConfig.contact.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                {siteConfig.contact.email}
              </a>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Clock className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-semibold text-primary">Hours</h4>
              <p className="text-muted-foreground">{siteConfig.contact.hours}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Form Column */}
      <div className="bg-surface p-8 md:p-10 rounded-lg shadow-sm">
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group">
              <label htmlFor="name" className="block text-sm uppercase tracking-widest text-primary mb-2 group-focus-within:text-secondary transition-colors">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full border-b border-primary/30 bg-transparent py-2 outline-none focus:border-secondary transition-colors"
              />
            </div>
            <div className="group">
              <label htmlFor="email" className="block text-sm uppercase tracking-widest text-primary mb-2 group-focus-within:text-secondary transition-colors">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full border-b border-primary/30 bg-transparent py-2 outline-none focus:border-secondary transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group">
              <label htmlFor="phone" className="block text-sm uppercase tracking-widest text-primary mb-2 group-focus-within:text-secondary transition-colors">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border-b border-primary/30 bg-transparent py-2 outline-none focus:border-secondary transition-colors"
              />
            </div>
            <div className="group">
              <label htmlFor="service" className="block text-sm uppercase tracking-widest text-primary mb-2 group-focus-within:text-secondary transition-colors">Interested In</label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full border-b border-primary/30 bg-transparent py-2 outline-none focus:border-secondary transition-colors"
              >
                <option value="" className="text-primary">Select a service</option>
                <option value="Full Home Design">Full Home Design</option>
                <option value="Room Refresh">Room Refresh</option>
                <option value="Consultation">Consultation</option>
                <option value="Virtual Design">Virtual Design</option>
              </select>
            </div>
          </div>

          <div className="group">
            <label htmlFor="message" className="block text-sm uppercase tracking-widest text-primary mb-2 group-focus-within:text-secondary transition-colors">Message</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full border-b border-primary/30 bg-transparent py-2 outline-none focus:border-secondary transition-colors resize-none"
            />
          </div>

          <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" onChange={handleChange} />

          {status === "error" && (
            <p className="text-red-500 text-sm">Something went wrong. Please try again.</p>
          )}

          <Button 
            label={status === "loading" ? "Sending..." : "Send Inquiry"} 
            type="submit" 
            className="w-full justify-center"
            disabled={status === "loading"}
          />
        </form>
      </div>
    </div>
  );
};

export default ContactForm;