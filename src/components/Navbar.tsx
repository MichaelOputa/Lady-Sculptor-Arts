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
          : 'bg-transparent py-3'
      }`}
    >
      <nav className="container-lux flex items-center justify-between">

        {/* ── Brand ── */}
        <a href="#home" className="flex items-center gap-3 group flex-shrink-0">

          {/* Perfect circle — equal width & height, clips image into circle */}
          <span
            className="flex-shrink-0 overflow-hidden bg-white transition-all duration-500 group-hover:scale-[1.04]"
            style={{
              width:        'clamp(2.25rem, 3.5vw, 3rem)',
              height:       'clamp(2.25rem, 3.5vw, 3rem)',
              borderRadius: '50%',
              border:       '2px solid rgba(201,138,10,0.55)',
              boxShadow:    '0 0 0 3px rgba(201,138,10,0.08), 0 3px 14px rgba(201,138,10,0.18)',
            }}
          >
            <img
              src="/images/sculptor art.png"
              alt="Lady Sculptor Arts"
              className="w-full h-full object-contain object-center"
              /*
                object-cover fills the circle completely.
                scale-[1.15] zooms in slightly so the emblem
                (woman face + LS letters) fills the frame edge-to-edge
                without white corners showing.
              */
            />
          </span>

          {/* Text: large serif name + gold ARTS row */}
          <span className="flex flex-col leading-none">
            <span
              className={`font-serif font-normal tracking-wide leading-tight transition-colors ${
                scrolled ? 'text-chocolate-800' : 'text-chocolate-900'
              }`}
              style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.5rem)' }}
            >
              Lady sculptor
            </span>
            <span className="flex items-center gap-1.5 mt-1">
              <span className="block h-px bg-gold-500" style={{ width: 'clamp(1rem, 1.4vw, 1.3rem)' }} />
              <span
                className="uppercase text-gold-600 font-semibold tracking-[0.35em] leading-none"
                style={{ fontSize: 'clamp(0.52rem, 0.8vw, 0.65rem)' }}
              >
                Arts
              </span>
              <span className="block h-px bg-gold-500" style={{ width: 'clamp(1rem, 1.4vw, 1.3rem)' }} />
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