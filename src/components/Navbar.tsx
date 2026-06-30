import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navLinks } from '../data/content';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cream/90 backdrop-blur-md shadow-warm-sm py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <nav className="container-lux flex items-center justify-between">

        {/* Brand */}
        <a href="#home" className="flex items-center gap-3 group flex-shrink-0">
          {/* Circular logo container — clips the square image into a perfect circle */}
          <span
            className={`
              flex-shrink-0 rounded-full overflow-hidden
              ring-2 ring-gold-400/50 group-hover:ring-gold-300
              shadow-warm-sm transition-all duration-500
              w-11 h-11 sm:w-13 sm:h-13 lg:w-14 lg:h-14
            `}
            style={{ width: 'clamp(2.75rem, 4vw, 3.5rem)', height: 'clamp(2.75rem, 4vw, 3.5rem)' }}
          >
            <img
              src="/images/sculptor.jpeg"
              alt="Lady Sculptor Arts"
              className="w-full h-full object-cover object-center scale-[1.08]"
            />
          </span>

          {/* Brand text alongside */}
          <span className="flex flex-col leading-tight">
            <span
              className={`font-serif text-base sm:text-lg tracking-wide transition-colors ${
                scrolled ? 'text-chocolate-800' : 'text-chocolate-900'
              }`}
            >
              Lady Sculptor
            </span>
            <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.35em] text-gold-600">
              Arts
            </span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`text-sm tracking-wide transition-colors relative group ${
                  scrolled
                    ? 'text-chocolate-700 hover:text-gold-600'
                    : 'text-chocolate-800 hover:text-gold-600'
                }`}
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold-400 transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <a href="#commission" className="hidden lg:inline-flex btn-gold !py-2.5 !px-6 text-sm">
          Commission
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden p-2 text-chocolate-800"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          open ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container-lux pt-4 pb-6 bg-cream/95 backdrop-blur-md rounded-b-2xl mt-3 shadow-warm-md">
          <ul className="flex flex-col gap-1">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 px-4 rounded-xl text-chocolate-800 hover:bg-gold-100 hover:text-gold-700 transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#commission"
                onClick={() => setOpen(false)}
                className="btn-gold w-full"
              >
                Commission an Artwork
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}