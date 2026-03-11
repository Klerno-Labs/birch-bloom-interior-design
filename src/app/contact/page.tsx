import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { ContactForm } from "@/components/sections/ContactForm";

export const metadata = {
  title: "Contact | Birch & Bloom Interior Design",
  description: "Get in touch. We'd love to hear about your project. Located in Nashville, TN.",
};

export default function Contact() {
  return (
    <main className="pt-24 min-h-screen flex flex-col">
      <div className="global-overlay" />
      
      {/* Hero */}
      <section className="py-24 px-4 text-center bg-[#d4c5b2]/20">
        <h1 className="font-playfair text-[clamp(2.5rem,6vw,5rem)] text-[#2c2c2c] mb-6">Let's Create Together</h1>
        <p className="font-manrope text-[#6b6b6b] max-w-xl mx-auto">
          Ready to start your transformation? Fill out the form below or give us a call.
        </p>
      </section>

      {/* Split Layout */}
      <section className="flex-grow py-24 max-w-[1600px] mx-auto px-[clamp(24px,5vw,80px)] w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Info Column */}
          <div className="space-y-12">
            <div>
              <h2 className="font-playfair text-3xl text-[#2c2c2c] mb-8">Contact Information</h2>
              <p className="font-manrope text-[#6b6b6b] leading-relaxed mb-8">
                Have questions before booking? Reach out directly. We typically respond within 24 business hours.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#d4c5b2]/30 flex items-center justify-center shrink-0">
                  <MapPin className="text-[#8b7355]" size={20} />
                </div>
                <div>
                  <h3 className="font-playfair text-xl text-[#2c2c2c] mb-1">Studio</h3>
                  <p className="font-manrope text-[#6b6b6b]">
                    225 Design District Way<br />
                    Nashville, TN 37203
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#d4c5b2]/30 flex items-center justify-center shrink-0">
                  <Phone className="text-[#8b7355]" size={20} />
                </div>
                <div>
                  <h3 className="font-playfair text-xl text-[#2c2c2c] mb-1">Phone</h3>
                  <a href="tel:5553216543" className="font-manrope text-[#6b6b6b] hover:text-[#8b7355] transition-colors">
                    (555) 321-6543
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#d4c5b2]/30 flex items-center justify-center shrink-0">
                  <Mail className="text-[#8b7355]" size={20} />
                </div>
                <div>
                  <h3 className="font-playfair text-xl text-[#2c2c2c] mb-1">Email</h3>
                  <a href="mailto:hello@birchandbloom.com" className="font-manrope text-[#6b6b6b] hover:text-[#8b7355] transition-colors">
                    hello@birchandbloom.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#d4c5b2]/30 flex items-center justify-center shrink-0">
                  <Clock className="text-[#8b7355]" size={20} />
                </div>
                <div>
                  <h3 className="font-playfair text-xl text-[#2c2c2c] mb-1">Hours</h3>
                  <p className="font-manrope text-[#6b6b6b]">
                    Mon-Fri 9am-5pm<br />
                    Sat by Appointment
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="bg-white p-8 md:p-12 rounded-sm shadow-sm border border-[#d4c5b2]/30">
            <h2 className="font-playfair text-3xl text-[#2c2c2c] mb-8">Send a Message</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}