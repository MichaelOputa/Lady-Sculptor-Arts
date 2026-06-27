import { Mail, Phone, MapPin, Instagram, Facebook, Youtube } from 'lucide-react';
import { navLinks } from '../data/content';

export default function Footer() {
  return (
    <footer className="bg-warmblack text-cream/70">
      <div className="container-lux py-16 md:py-20">
        <div className="grid md:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="md:col-span-4">
            <div className="font-serif text-2xl text-cream mb-4">Lady Sculptor</div>
            <p className="text-sm leading-relaxed max-w-xs">
              Sculptural works and fine art rooted in African heritage, memory, and feminine
              expression — created by Esther Mfon Aqua.
            </p>
          </div>

          {/* Nav */}
          <div className="md:col-span-4">
            <div className="text-xs uppercase tracking-[0.25em] text-gold-400 mb-5">Explore</div>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="hover:text-gold-300 transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <div className="text-xs uppercase tracking-[0.25em] text-gold-400 mb-5">Studio</div>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-gold-300 mt-0.5 flex-shrink-0" />
                <a href="mailto:estheraqua86@gmail.com" className="hover:text-gold-300 transition-colors">
                  estheraqua86@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-gold-300 mt-0.5 flex-shrink-0" />
                <a href="tel:+2347065780476" className="hover:text-gold-300 transition-colors">
                  Call: 0706 578 0476
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-gold-300 mt-0.5 flex-shrink-0" />
                <a href="https://wa.me/2349026593544" className="hover:text-gold-300 transition-colors">
                  WhatsApp: 0902 659 3544
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-gold-300 mt-0.5 flex-shrink-0" />
                <span>Lady Sculptor Art Gallery, 235 Ikot Ekpene Road, Uyo, Akwa Ibom State</span>
              </li>
            </ul>
            <div className="flex gap-3 mt-5">
              {[Instagram, Facebook, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full bg-chocolate-900 border border-gold-400/30 flex items-center justify-center text-gold-300 hover:bg-gold-400 hover:text-warmblack transition-all duration-300"
                  aria-label="Social link"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-cream/10 flex flex-col sm:flex-row justify-between gap-3 text-xs text-cream/50">
          <p>© {new Date().getFullYear()} Lady Sculptor Art Gallery. All rights reserved.</p>
          <p>Esther Mfon Aqua · Uyo, Akwa Ibom State, Nigeria</p>
        </div>
      </div>
    </footer>
  );
}
