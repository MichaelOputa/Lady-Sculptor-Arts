import { Instagram, Facebook, Youtube, ArrowUp } from 'lucide-react';
import { navLinks } from '../data/content';

export default function Footer() {
  return (
    <footer className="relative bg-warmblack text-cream/70 border-t border-gold-400/20 overflow-hidden">
      <div className="absolute inset-0 bg-adinkra-pattern opacity-10 pointer-events-none" />

      <div className="container-lux relative py-16">
        <div className="grid md:grid-cols-12 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-11 h-11 rounded-full bg-gradient-to-br from-chocolate-700 to-chocolate-900 flex items-center justify-center ring-2 ring-gold-400/50">
                <span className="font-serif text-gold-300 text-lg">LS</span>
              </span>
              <div>
                <div className="font-serif text-xl text-cream">Lady Sculptor Arts</div>
                <div className="text-[10px] uppercase tracking-[0.35em] text-gold-500">Sculpting Beauty</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed max-w-sm">
              A studio devoted to sculpting beauty, expressing culture, and inspiring generations
              through African heritage and feminine artistry.
            </p>
            <div className="flex gap-3 mt-6">
              {[Instagram, Facebook, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-chocolate-900 border border-gold-400/20 flex items-center justify-center text-gold-300 hover:bg-gold-400 hover:text-warmblack transition-all"
                  aria-label="Social link"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div className="md:col-span-3">
            <div className="text-xs uppercase tracking-[0.25em] text-gold-400 mb-5">Explore</div>
            <ul className="space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm hover:text-gold-300 transition-colors">
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
              <li>estheraqua86@gmail.com</li>
              <li>+234 706 578 0476</li>
              <li>235 ikot Ekpene road, Uyo Akwa Ibom state</li>
              <li className="pt-2">
                <a href="#contact" className="btn-outline !py-2.5 !px-6 text-sm">
                  Start a Commission
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-cream/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-cream/50">
            © {new Date().getFullYear()} Lady Sculptor Arts. All works and words protected.
          </p>
          <a
            href="#home"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gold-400 hover:text-gold-300 transition-colors"
          >
            Back to top <ArrowUp size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}
