import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import { events } from '../data/content';
import { useReveal } from '../hooks/useReveal';

export default function Events() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="events" className="relative py-24 md:py-32 bg-cream overflow-hidden">
      <div className="absolute -left-32 bottom-0 w-80 h-80 rounded-full bg-terracotta-100/40 blur-3xl pointer-events-none" />

      <div ref={ref} className={`container-lux relative reveal ${visible ? 'is-visible' : ''}`}>
        {/* Featured exhibition banner */}
        <div className="relative rounded-3xl overflow-hidden mb-12 group">
          <div className="aspect-[21/9] md:aspect-[3/1]">
            <img
              src="/images/gallery/exhibition/exhibition-1.jpeg"
              alt="Featured exhibition"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-warmblack/85 via-warmblack/50 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="p-8 md:p-14 max-w-xl">
              <div className="text-xs uppercase tracking-[0.3em] text-gold-400 mb-3">Featured · Exhibition</div>
              <h3 className="font-serif text-3xl md:text-4xl text-cream mb-3">Echoes — Solo Show</h3>
              <p className="text-cream/80 text-sm md:text-base mb-5 max-w-md">
                A retrospective of sculptural works exploring memory, migration, and return. Opening
                this September at the National Gallery, Lagos.
              </p>
              <a href="#contact" className="btn-gold !py-2.5 text-sm">Reserve a viewing</a>
            </div>
          </div>
        </div>

        {/* Exhibition photo strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-14">
          {[
            { src: '/images/gallery/exhibition/exhibition-2.jpeg', label: 'Gallery view' },
            { src: '/images/gallery/exhibition/exhibition-3.jpeg', label: 'Sculpture hall' },
            { src: '/images/gallery/exhibition/exhibition-5.jpeg', label: 'Opening night' },
            { src: '/images/gallery/exhibition/exhibition-1.jpeg', label: 'Featured works' },
          ].map((p, i) => (
            <div key={i} className="group relative aspect-[4/3] rounded-2xl overflow-hidden ring-1 ring-chocolate-200/40 shadow-warm-sm">
              <img
                src={p.src}
                alt={p.label}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-warmblack/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-3 left-3 text-cream text-xs uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity">
                {p.label}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-xl">
            <span className="section-eyebrow mb-6">Events & Exhibitions</span>
            <h2 className="heading-lg text-chocolate-900">Where the work meets the world.</h2>
          </div>
          <p className="text-body max-w-md">
            Upcoming exhibitions, live sculpting events, workshops, and speaking engagements —
            join the conversation.
          </p>
        </div>

        <div className="space-y-4">
          {events.map((e) => (
            <div
              key={e.id}
              className="group grid md:grid-cols-12 gap-4 md:gap-8 items-center p-6 md:p-8 rounded-2xl bg-white/70 backdrop-blur-sm border border-chocolate-200/40 hover:border-gold-300/60 hover:shadow-warm-md transition-all duration-500"
            >
              <div className="md:col-span-3">
                <div className="text-xs uppercase tracking-[0.25em] text-gold-600 mb-2">{e.type}</div>
                <div className="font-serif text-2xl text-chocolate-900 leading-tight">{e.title}</div>
              </div>
              <div className="md:col-span-3 flex items-center gap-2 text-chocolate-700">
                <Calendar size={16} className="text-gold-600" />
                <span className="text-sm">{e.date}</span>
              </div>
              <div className="md:col-span-3 flex items-center gap-2 text-chocolate-700">
                <MapPin size={16} className="text-gold-600" />
                <span className="text-sm">{e.location}</span>
              </div>
              <div className="md:col-span-2 text-sm text-chocolate-600 md:text-right">
                <a href="#contact" className="inline-flex items-center gap-1 text-gold-600 hover:text-gold-700 transition-colors">
                  Details <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
              <div className="md:col-span-1 hidden md:block">
                <div className="w-10 h-10 rounded-full border border-gold-400/40 flex items-center justify-center group-hover:bg-gold-400 transition-colors">
                  <ArrowRight size={16} className="text-gold-600 group-hover:text-warmblack transition-colors" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
