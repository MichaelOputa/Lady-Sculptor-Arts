import { ClipboardList, MessagesSquare, PenTool, Hammer, PackageCheck, ArrowRight } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const steps = [
  { n: '01', title: 'Submit Inquiry', desc: 'Share your vision, subject, and intended space through the commission form.', icon: ClipboardList },
  { n: '02', title: 'Consultation & Concept', desc: 'A private conversation to align on meaning, scale, materials, and story.', icon: MessagesSquare },
  { n: '03', title: 'Sketch & Proposal', desc: 'A detailed concept sketch and proposal is prepared for your review.', icon: PenTool },
  { n: '04', title: 'Creation Process', desc: 'The work takes form in the studio, with progress shared along the way.', icon: Hammer },
  { n: '05', title: 'Delivery & Installation', desc: 'Your finished artwork is carefully delivered and installed in its home.', icon: PackageCheck },
];

export default function Commission() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="commission" className="relative py-24 md:py-32 bg-gradient-to-br from-chocolate-800 via-chocolate-900 to-warmblack text-cream overflow-hidden">
      <div className="absolute inset-0 bg-adinkra-pattern opacity-20 pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-gold-500/15 blur-3xl pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-terracotta-500/15 blur-3xl pointer-events-none" />

      <div ref={ref} className={`container-lux relative reveal ${visible ? 'is-visible' : ''}`}>
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left intro */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <span className="section-eyebrow !text-gold-400 mb-6">Commission</span>
            <h2 className="heading-lg text-cream mb-6">
              Bring your story <span className="text-gold-gradient italic">to form.</span>
            </h2>
            <p className="text-cream/70 text-lg leading-relaxed mb-8">
              A commission is a collaboration — your memory, lineage, or vision translated into a
              sculptural or painted work that will outlast us all. Whether a portrait bust, a family
              monument, or a painting for a sacred wall, every commission begins with listening.
            </p>

            {/* Studio process images */}
            <div className="grid grid-cols-3 gap-3 mb-8">
              {[
                '/images/gallery/sculptor-1.jpeg',
                '/images/gallery/sculptor-3.jpeg',
                '/images/gallery/art-1.jpeg',
              ].map((src, i) => (
                <div key={i} className="aspect-square rounded-xl overflow-hidden ring-1 ring-gold-400/30">
                  <img src={src} alt="commission process" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>

            <div className="space-y-3 mb-10">
              {[
                'Custom sculptures in bronze, terracotta, or mixed media',
                'Portrait busts and full-figure works',
                'Paintings in oil, acrylic, or gold pigment',
                'Public and private installations',
                'Typical timeline: 8–24 weeks depending on scale',
              ].map((t) => (
                <div key={t} className="flex items-start gap-3 text-cream/80">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold-400 flex-shrink-0" />
                  <span className="text-sm">{t}</span>
                </div>
              ))}
            </div>

            <a href="#contact" className="btn-gold">
              Start a Commission <ArrowRight size={18} />
            </a>
          </div>

          {/* Right steps */}
          <div className="lg:col-span-7">
            <div className="relative">
              {/* vertical line */}
              <div className="absolute left-7 top-4 bottom-4 w-px bg-gold-400/30" />
              <div className="space-y-8">
                {steps.map((s) => {
                  const Icon = s.icon;
                  return (
                    <div key={s.n} className="relative pl-20">
                      <div className="absolute left-0 w-14 h-14 rounded-full bg-chocolate-900 border border-gold-400/40 flex items-center justify-center shadow-warm-sm">
                        <Icon size={20} className="text-gold-300" />
                      </div>
                      <div className="card-lux !bg-chocolate-900/60 !border-gold-400/20 p-6 hover:!border-gold-400/50 transition-colors">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="font-serif text-2xl text-gold-gradient">{s.n}</span>
                          <h3 className="font-serif text-xl text-cream">{s.title}</h3>
                        </div>
                        <p className="text-cream/70 text-sm leading-relaxed">{s.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
