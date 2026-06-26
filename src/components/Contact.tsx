import { useState } from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Youtube, Send, Check } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const inquiryTypes = ['Commission', 'Collaboration', 'Exhibition', 'Workshop', 'General Inquiry'];

export default function Contact() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', type: inquiryTypes[0], message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: '', email: '', type: inquiryTypes[0], message: '' });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-warmblack text-cream overflow-hidden">
      <div className="absolute inset-0 bg-adinkra-pattern opacity-15 pointer-events-none" />
      <div className="absolute -top-32 left-1/4 w-96 h-96 rounded-full bg-gold-500/10 blur-3xl pointer-events-none" />

      <div ref={ref} className={`container-lux relative reveal ${visible ? 'is-visible' : ''}`}>
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: info */}
          <div className="lg:col-span-5">
            <span className="section-eyebrow !text-gold-400 mb-6">Contact & Inquiry</span>
            <h2 className="heading-lg text-cream mb-6">
              Let’s create something <span className="text-gold-gradient italic">enduring.</span>
            </h2>
            <p className="text-cream/70 text-lg leading-relaxed mb-10">
              For commissions, collaborations, exhibition invitations, workshop bookings, or simply
              to begin a conversation — the studio welcomes your inquiry.
            </p>

            <div className="space-y-5">
              {[
                { icon: Mail, label: 'Email', value: 'estheraqua86@gmail.com' },
                { icon: Phone, label: 'Phone', value: '+234 902 659 3544' },
                { icon: MapPin, label: 'Studio', value: 'LADY SCULPTOR ART GALLERY 235 ikot Ekpene road, Uyo Akwa Ibom state' },
              ].map((c) => {
                const Icon = c.icon;
                return (
                  <div key={c.label} className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-full bg-chocolate-900 border border-gold-400/30 flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-gold-300" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-[0.25em] text-gold-400 mb-1">{c.label}</div>
                      <div className="text-cream/90">{c.value}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Socials */}
            <div className="mt-10 pt-8 border-t border-cream/10">
              <div className="text-xs uppercase tracking-[0.25em] text-gold-400 mb-4">Follow the studio</div>
              <div className="flex gap-3">
                {[Instagram, Facebook, Youtube].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-11 h-11 rounded-full bg-chocolate-900 border border-gold-400/30 flex items-center justify-center text-gold-300 hover:bg-gold-400 hover:text-warmblack transition-all duration-300"
                    aria-label="Social link"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="bg-chocolate-900/60 backdrop-blur-sm rounded-3xl border border-gold-400/20 p-8 md:p-10 space-y-6"
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-[0.2em] text-gold-400 mb-2">Name</label>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-transparent border-b border-cream/20 focus:border-gold-400 outline-none py-3 text-cream placeholder-cream/30 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-[0.2em] text-gold-400 mb-2">Email</label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-transparent border-b border-cream/20 focus:border-gold-400 outline-none py-3 text-cream placeholder-cream/30 transition-colors"
                    placeholder="you@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-[0.2em] text-gold-400 mb-3">Inquiry Type</label>
                <div className="flex flex-wrap gap-2">
                  {inquiryTypes.map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setForm({ ...form, type: t })}
                      className={`px-4 py-2 rounded-full text-sm border transition-all ${
                        form.type === t
                          ? 'bg-gold-400 text-warmblack border-gold-400'
                          : 'border-cream/20 text-cream/70 hover:border-gold-400/50'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-[0.2em] text-gold-400 mb-2">Message</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-transparent border-b border-cream/20 focus:border-gold-400 outline-none py-3 text-cream placeholder-cream/30 transition-colors resize-none"
                  placeholder="Tell me about your vision, timeline, and space…"
                />
              </div>

              <button
                type="submit"
                disabled={sent}
                className={`btn-gold w-full sm:w-auto ${sent ? '!bg-forest-500' : ''}`}
              >
                {sent ? (
                  <> <Check size={18} /> Inquiry Sent</>
                ) : (
                  <> Send Inquiry <Send size={16} /></>
                )}
              </button>

              {sent && (
                <p className="text-forest-300 text-sm">
                  Thank you — your inquiry has been received. The studio will respond within 3–5 days.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
