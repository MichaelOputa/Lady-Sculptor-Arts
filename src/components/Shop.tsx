import { ArrowRight, ShoppingBag } from 'lucide-react';
import { shopItems } from '../data/content';
import { useReveal } from '../hooks/useReveal';

export default function Shop() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="shop" className="relative py-24 md:py-32 bg-gradient-to-b from-cream to-ivory-100 overflow-hidden">
      <div ref={ref} className={`container-lux relative reveal ${visible ? 'is-visible' : ''}`}>
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="section-eyebrow mb-6 justify-center">Available Works</span>
          <h2 className="heading-lg text-chocolate-900 mb-5">Collect a piece of the story.</h2>
          <p className="text-body">
            A curated selection of original works available for acquisition. Each piece is
            accompanied by a certificate of authenticity.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {shopItems.map((item) => (
            <div key={item.id} className="group">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-warm-sm mb-4 ring-1 ring-chocolate-200/40">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-warmblack/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <a
                  href="#contact"
                  className="absolute bottom-4 left-4 right-4 btn-gold !py-2.5 text-sm opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500"
                >
                  <ShoppingBag size={16} /> Inquire
                </a>
              </div>
              <h3 className="font-serif text-lg text-chocolate-900 leading-tight">{item.title}</h3>
              <div className="text-sm text-chocolate-600 mt-1">{item.medium}</div>
              <div className="mt-2 font-serif text-lg text-gold-700">{item.price}</div>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <a href="#contact" className="btn-outline">
            View full catalogue <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
