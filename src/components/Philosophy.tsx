import { useReveal } from '../hooks/useReveal';

const pillars = [
  { title: 'Beauty in African Identity', text: 'We celebrate the forms, colors, and contours that have always defined African beauty — not as trend, but as truth.' },
  { title: 'Storytelling Through Form', text: 'Every curve carries a narrative. Texture becomes language. The sculpted surface is a page.' },
  { title: 'Sculpting Emotion', text: 'Bronze and clay hold feeling as no other medium can — weight, warmth, and memory in one form.' },
  { title: 'Preserving Culture', text: 'Each work is an act of preservation, keeping ancestral knowledge tangible for generations to come.' },
  { title: 'Empowering Feminine Expression', text: 'The female form and voice are central — not as subject, but as author of the story.' },
  { title: 'Heritage as Visual Language', text: 'Tradition is not repeated; it is translated into a timeless visual vocabulary that speaks across borders.' },
];

export default function Philosophy() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section className="relative py-24 md:py-32 bg-cream overflow-hidden">
      <div className="absolute inset-0 bg-adinkra-pattern opacity-50 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] rounded-full border border-gold-300/20 pointer-events-none" />

      {/* Background artwork accent */}
      <div className="absolute -right-20 top-10 w-72 h-96 rounded-2xl overflow-hidden opacity-20 rotate-6 hidden lg:block pointer-events-none">
        <img src="/images/gallery/sculptor-2.jpeg" alt="" className="w-full h-full object-cover" />
      </div>
      <div className="absolute -left-20 bottom-10 w-72 h-96 rounded-2xl overflow-hidden opacity-20 -rotate-6 hidden lg:block pointer-events-none">
        <img src="/images/gallery/painting-3.jpeg" alt="" className="w-full h-full object-cover" />
      </div>

      <div ref={ref} className={`container-lux relative reveal ${visible ? 'is-visible' : ''}`}>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-eyebrow mb-6 justify-center">Artist Statement</span>
          <h2 className="heading-lg text-chocolate-900 mb-6">
            The philosophy behind <span className="text-gold-gradient italic">every form.</span>
          </h2>
          <p className="font-serif italic text-2xl text-chocolate-700 leading-relaxed">
            “I do not make objects. I make vessels — for memory, for lineage, for the quiet
            thunder of being seen. Art is how a culture remembers itself.”
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className="relative p-8 rounded-2xl bg-white/60 backdrop-blur-sm border border-chocolate-200/40 hover:border-gold-300/60 hover:shadow-warm-md transition-all duration-500 group"
            >
              <div className="font-serif text-5xl text-gold-300/70 mb-4 group-hover:text-gold-400 transition-colors">
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3 className="font-serif text-xl text-chocolate-900 mb-3">{p.title}</h3>
              <p className="text-sm text-chocolate-600 leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
