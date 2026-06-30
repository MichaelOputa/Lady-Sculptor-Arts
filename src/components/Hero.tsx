import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-cream">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-adinkra-pattern opacity-60 pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-[40rem] h-[40rem] rounded-full bg-gold-200/30 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[36rem] h-[36rem] rounded-full bg-terracotta-200/30 blur-3xl pointer-events-none" />

      {/* Decorative ring motif */}
      <div className="absolute right-[8%] top-1/2 -translate-y-1/2 w-[34rem] h-[34rem] rounded-full border border-gold-400/30 hidden lg:block animate-float" />
      <div className="absolute right-[12%] top-1/2 -translate-y-1/2 w-[26rem] h-[26rem] rounded-full border border-chocolate-300/30 hidden lg:block" />

      <div className="container-lux relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center pt-32 pb-20">
        {/* Left: copy */}
        <div className="animate-fade-up">
          <span className="section-eyebrow mb-6">
            <Sparkles size={14} /> African Heritage Artistry
          </span>
          <h1 className="heading-xl text-chocolate-900 mb-6">
            Sculpting Beauty.
            <br />
            <span className="text-gold-gradient italic">Expressing Culture.</span>
            <br />
            Inspiring Generations.
          </h1>
          <p className="text-body max-w-xl mb-10">
            Lady Sculptor Arts is the studio of a sculptor, painter, and visual storyteller
            transforming African heritage, womanhood, and memory into timeless forms of bronze,
            clay, and pigment.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#gallery" className="btn-gold">
              View Gallery <ArrowRight size={18} />
            </a>
            <a href="#commission" className="btn-outline">
              Commission an Artwork
            </a>
          </div>

          {/* Mini stats */}
          <div className="mt-14 flex gap-10">
            {[
              { n: '12+', l: 'Years Sculpting' },
              { n: '40+', l: 'Exhibitions' },
              { n: '200+', l: 'Works Created' },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-serif text-3xl text-chocolate-800">{s.n}</div>
                <div className="text-xs uppercase tracking-[0.2em] text-chocolate-500 mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: hero portrait from HeroPage.jpeg */}
        <div className="relative animate-fade-in">
          {/*
            Place the uploaded HeroPage.jpeg at:
              public/images/hero-portrait.jpeg
            It will be served at /images/hero-portrait.jpeg
          */}
          <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-warm-lg ring-1 ring-gold-300/40">
            <img
              src="/images/sculptor.png"
              alt="Lady Sculptor Arts – Sculpting Beauty, Expressing Culture"
              className="w-full h-full object-cover object-top"
            />
            {/* Soft gradient to blend bottom edge into the cream background */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#f9f4ec]/60 via-transparent to-transparent" />
            {/* Subtle left-edge fade to blend into white space on smaller screens */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#f9f4ec]/20 via-transparent to-transparent" />
          </div>

          {/* Floating badge */}
          <div className="absolute -bottom-6 -left-6 bg-cream rounded-2xl shadow-warm-md px-6 py-5 border border-gold-200/60 max-w-[14rem]">
            <div className="font-serif text-lg text-chocolate-800 leading-tight">"Art that remembers."</div>
            <div className="text-xs uppercase tracking-[0.2em] text-gold-600 mt-2">Studio Motto</div>
          </div>

          {/* Floating ring accent */}
          <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-gold-400/90 flex items-center justify-center shadow-gold-glow">
            <span className="font-serif text-chocolate-900 text-center text-sm leading-tight">
              Est.<br />2012
            </span>
          </div>
        </div>
      </div>

      {/* Artwork preview strip */}
      <div className="absolute bottom-16 left-0 right-0 z-10 hidden lg:block pointer-events-none">
        <div className="container-lux">
          <div className="flex gap-3 justify-end">
            {[
              '/images/gallery/sculptor-2.jpeg',
              '/images/gallery/painting-3.jpeg',
              '/images/gallery/sculptor-1.jpeg',
            ].map((src, i) => (
              <div
                key={i}
                className="w-16 h-20 rounded-xl overflow-hidden ring-1 ring-gold-400/40 shadow-warm-sm opacity-80"
                style={{ transform: `rotate(${i % 2 === 0 ? '-2deg' : '2deg'})` }}
              >
                <img src={src} alt="artwork preview" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Curved divider */}
      <div className="absolute bottom-0 inset-x-0">
        <svg viewBox="0 0 1440 80" className="w-full h-auto" preserveAspectRatio="none">
          <path d="M0,80 C480,0 960,0 1440,80 L1440,80 L0,80 Z" fill="#f9f4ec" />
        </svg>
      </div>
    </section>
  );
}