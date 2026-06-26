import { useMemo, useState } from 'react';
import { X, ArrowUpRight } from 'lucide-react';
import { artworks, type Artwork } from '../data/content';
import { useReveal } from '../hooks/useReveal';

const categories = ['All', 'Sculptures', 'Paintings', 'Portraits', 'Installations', 'Custom Works', 'Exhibitions'] as const;

const statusStyles: Record<Artwork['status'], string> = {
  Available:    'bg-forest-100 text-forest-700 border-forest-300',
  Sold:          'bg-terracotta-100 text-terracotta-700 border-terracotta-300',
  Commissioned: 'bg-gold-100 text-gold-700 border-gold-300',
};

export default function Gallery() {
  const [active, setActive] = useState<(typeof categories)[number]>('All');
  const [selected, setSelected] = useState<Artwork | null>(null);
  const { ref, visible } = useReveal<HTMLDivElement>();

  const filtered = useMemo(
    () => (active === 'All' ? artworks : artworks.filter((a) => a.category === active)),
    [active],
  );

  return (
    <section id="gallery" className="relative py-24 md:py-32 bg-warmblack text-cream overflow-hidden">
      <div className="absolute inset-0 bg-adinkra-pattern opacity-20 pointer-events-none" />
      <div className="absolute top-20 right-0 w-96 h-96 rounded-full bg-gold-500/10 blur-3xl pointer-events-none" />

      <div ref={ref} className={`container-lux relative reveal ${visible ? 'is-visible' : ''}`}>
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="section-eyebrow !text-gold-400 mb-6 justify-center">Featured Works</span>
          <h2 className="heading-lg text-cream mb-5">A gallery of stories in form.</h2>
          <p className="text-cream/70 text-lg">
            Each piece is a conversation between material and memory — sculpted, painted, and
            offered to the world.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12 no-scrollbar">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-5 py-2.5 rounded-full text-sm tracking-wide transition-all duration-300 border ${
                active === c
                  ? 'bg-gold-400 text-warmblack border-gold-400 shadow-gold-glow'
                  : 'bg-transparent text-cream/70 border-cream/20 hover:border-gold-400/60 hover:text-gold-300'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filtered.map((a, i) => (
            <button
              key={a.id}
              onClick={() => setSelected(a)}
              className="group text-left relative rounded-2xl overflow-hidden bg-chocolate-900/40 border border-cream/10 hover:border-gold-400/50 transition-all duration-500 hover:-translate-y-1"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={a.image}
                  alt={a.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-warmblack via-warmblack/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              <div className="absolute top-4 right-4">
                <span className={`text-[10px] uppercase tracking-[0.2em] px-3 py-1 rounded-full border ${statusStyles[a.status]} bg-cream/90`}>
                  {a.status}
                </span>
              </div>

              <div className="absolute bottom-0 inset-x-0 p-6">
                <div className="text-xs uppercase tracking-[0.25em] text-gold-400 mb-2">{a.category}</div>
                <h3 className="font-serif text-2xl text-cream mb-1">{a.title}</h3>
                <div className="text-sm text-cream/60">
                  {a.medium} · {a.year}
                </div>
                <div className="mt-3 inline-flex items-center gap-1 text-gold-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  View work <ArrowUpRight size={14} />
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 z-[100] bg-warmblack/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8 animate-fade-in"
          onClick={() => setSelected(null)}
        >
          <button
            className="absolute top-6 right-6 text-cream/80 hover:text-gold-400 transition-colors"
            onClick={() => setSelected(null)}
            aria-label="Close"
          >
            <X size={32} />
          </button>
          <div
            className="grid md:grid-cols-2 gap-8 max-w-5xl w-full max-h-[90vh] overflow-y-auto rounded-2xl bg-chocolate-900 border border-gold-400/30"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-square md:aspect-auto md:h-full overflow-hidden rounded-l-2xl">
              <img src={selected.image} alt={selected.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <div className="text-xs uppercase tracking-[0.25em] text-gold-400 mb-3">{selected.category}</div>
              <h3 className="font-serif text-3xl md:text-4xl text-cream mb-4">{selected.title}</h3>
              <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                <div><div className="text-cream/40 uppercase tracking-wider text-xs">Medium</div><div className="text-cream/90">{selected.medium}</div></div>
                <div><div className="text-cream/40 uppercase tracking-wider text-xs">Year</div><div className="text-cream/90">{selected.year}</div></div>
                <div><div className="text-cream/40 uppercase tracking-wider text-xs">Dimensions</div><div className="text-cream/90">{selected.dimensions}</div></div>
                <div><div className="text-cream/40 uppercase tracking-wider text-xs">Status</div><div className="text-gold-300">{selected.status}</div></div>
              </div>
              <p className="text-cream/70 leading-relaxed italic font-serif text-lg mb-8">“{selected.story}”</p>
              <a href="#contact" className="btn-gold self-start" onClick={() => setSelected(null)}>
                Inquire about this work
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
