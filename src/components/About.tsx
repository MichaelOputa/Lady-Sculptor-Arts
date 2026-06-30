import { Quote } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

export default function About() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="relative py-24 md:py-32 bg-cream overflow-hidden">
      <div className="absolute -left-20 top-20 w-72 h-72 rounded-full bg-terracotta-100/40 blur-3xl pointer-events-none" />

      <div ref={ref} className={`container-lux relative reveal ${visible ? 'is-visible' : ''}`}>
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Portrait */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden shadow-warm-lg ring-1 ring-chocolate-200/50">
              <img
                src="/images/the artist (1).jpeg"
                alt="Lady Sculptor portrait"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative frame */}
            <div className="absolute -inset-3 rounded-[2.4rem] border border-gold-400/40 -z-10" />
            <div className="absolute -bottom-5 -right-5 w-28 h-28 rounded-full bg-gold-400/90 flex items-center justify-center shadow-gold-glow">
              <span className="font-serif text-chocolate-900 text-center text-xs leading-tight px-2">
                The<br />Artist
              </span>
            </div>
          </div>

          {/* Copy */}
          <div className="lg:col-span-7">
            <span className="section-eyebrow mb-6">About Lady Sculptor</span>
            <h2 className="heading-lg text-chocolate-900 mb-8">
              The hands behind the heritage.
            </h2>

            <div className="space-y-5 text-body">
              <p>
                Born of a lineage of storytellers and craftspeople, Lady Sculptor began shaping clay
                before she could write her name. What started as a child’s fascination with the earth
                became a lifelong devotion to giving form to feeling.
              </p>
              <p>
                Her journey has carried her from village courtyards to international galleries, yet
                every piece still begins the same way — with hands in the earth, listening for the
                story the clay wants to tell. She works in bronze, terracotta, oil, and gold pigment,
                each medium a different voice in the same conversation.
              </p>
              <p>
                Her work is rooted in African heritage, womanhood, and the belief that beauty is not
                decoration — it is memory made visible. Every sculpture is a vessel; every painting, a
                song in pigment.
              </p>
            </div>

            {/* About Her — third person */}
            <div className="mt-10 card-lux p-7 md:p-8 border-l-4 border-gold-400">
              <h3 className="font-serif text-2xl md:text-3xl text-chocolate-900 mb-5">
                About Her
              </h3>
              <div className="space-y-4 text-base md:text-lg text-chocolate-800 leading-relaxed">
                <p>
                  She is Esther Mfon Aqua. She is 28 years old and a graduate of the University of
                  Uyo, Akwa Ibom State, Nigeria, where she earned a Bachelor's degree in Fine and
                  Industrial Arts. She is passionate about creativity, visual arts, and craftsmanship.
                </p>
                <p>
                  She is the CEO of Lady Sculptural Art Gallery, located at 235 Ikot Ekpene Road,
                  Uyo, Akwa Ibom State. Through her gallery, she is committed to creating unique
                  artistic works and promoting excellence in the creative industry.
                </p>
              </div>
            </div>

            {/* Quote block */}
            <div className="mt-10 relative pl-8 border-l-2 border-gold-400">
              <Quote className="absolute -left-3 -top-2 text-gold-400 bg-cream rounded-full" size={22} />
              <p className="font-serif italic text-2xl md:text-3xl text-chocolate-800 leading-snug">
                “Through sculpture and paint, I preserve emotion, celebrate heritage, and transform
                stories into timeless forms.”
              </p>
              <p className="mt-4 text-sm uppercase tracking-[0.25em] text-gold-600">
                — Lady Sculptor
              </p>
            </div>

            {/* Pillars */}
            <div className="mt-10 grid sm:grid-cols-3 gap-4">
              {[
                { t: 'Heritage', d: 'Rooted in African tradition' },
                { t: 'Womanhood', d: 'Celebrating feminine power' },
                { t: 'Craft', d: 'Hand-formed, timeless' },
              ].map((p) => (
                <div key={p.t} className="card-lux p-5">
                  <div className="font-serif text-lg text-chocolate-800">{p.t}</div>
                  <div className="text-sm text-chocolate-600 mt-1">{p.d}</div>
                </div>
              ))}
            </div>

            {/* Studio strip — real works */}
            <div className="mt-10">
              <div className="text-xs uppercase tracking-[0.25em] text-gold-600 mb-4">From the studio</div>
              <div className="grid grid-cols-3 gap-3">
                {[
                  '/images/gallery/sculptor-4.jpeg',
                  '/images/gallery/painting-1.jpeg',
                  '/images/gallery/art-1.jpeg',
                ].map((src, i) => (
                  <div key={i} className="aspect-[3/4] rounded-xl overflow-hidden ring-1 ring-chocolate-200/50 shadow-warm-sm group cursor-pointer" onClick={() => {
                    const el = document.getElementById('gallery');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}>
                    <img src={src} alt="studio work" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
