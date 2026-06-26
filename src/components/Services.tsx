import { Hammer, User, Palette, Building2, Handshake, GraduationCap, Frame, Sofa, ArrowRight, type LucideIcon } from 'lucide-react';
import { services } from '../data/content';
import { useReveal } from '../hooks/useReveal';

const iconMap: Record<string, LucideIcon> = {
  Hammer, User, Palette, Building2, Handshake, GraduationCap, Frame, Sofa,
};

export default function Services() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="services" className="relative py-24 md:py-32 bg-cream overflow-hidden">
      <div className="absolute -right-32 top-1/3 w-80 h-80 rounded-full bg-gold-200/40 blur-3xl pointer-events-none" />

      <div ref={ref} className={`container-lux relative reveal ${visible ? 'is-visible' : ''}`}>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="section-eyebrow mb-6 justify-center">Signature Services</span>
          <h2 className="heading-lg text-chocolate-900 mb-5">Crafting art for every space and story.</h2>
          <p className="text-body">
            From bespoke sculptures to large-scale installations, each service is an invitation to
            collaborate in the making of something enduring.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => {
            const Icon = iconMap[s.icon] ?? Hammer;
            return (
              <div
                key={s.id}
                className="card-lux p-7 group hover:shadow-warm-md hover:-translate-y-1 hover:border-gold-300/60"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-chocolate-700 to-chocolate-900 flex items-center justify-center mb-6 group-hover:from-gold-400 group-hover:to-gold-600 transition-all duration-500">
                  <Icon size={24} className="text-gold-300 group-hover:text-warmblack transition-colors" />
                </div>
                <h3 className="font-serif text-xl text-chocolate-900 mb-3">{s.title}</h3>
                <p className="text-sm text-chocolate-600 leading-relaxed mb-5">{s.description}</p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 text-sm text-gold-600 hover:text-gold-700 transition-colors group/link"
                >
                  Enquire <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
