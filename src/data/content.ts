export type Artwork = {
  id: string;
  title: string;
  category: 'Sculptures' | 'Paintings' | 'Portraits' | 'Installations' | 'Custom Works' | 'Exhibitions';
  medium: string;
  dimensions: string;
  year: string;
  story: string;
  status: 'Available' | 'Sold' | 'Commissioned';
  image: string;
};

export const artworks: Artwork[] = [
  {
    id: 'a1',
    title: 'Face of the King',
    category: 'Sculptures',
    medium: 'Terracotta & iron mount',
    dimensions: '45 × 30 × 20 cm',
    year: '2023',
    story: 'A carved terracotta portrait mask inspired by Benin royal tradition — sovereignty held in clay.',
    status: 'Available',
    image: '/images/gallery/sculptor-1.jpeg',
  },
  {
    id: 'a2',
    title: 'Torso in Gold',
    category: 'Sculptures',
    medium: 'Cast resin, bronze finish',
    dimensions: '80 × 45 × 35 cm',
    year: '2024',
    story: 'A classical figurative torso reimagined in burnished gold — strength and beauty unified in form.',
    status: 'Available',
    image: '/images/gallery/sculptor-2.jpeg',
  },
  {
    id: 'a3',
    title: 'Wings & Roots',
    category: 'Sculptures',
    medium: 'Hand-carved wood, paint, wire',
    dimensions: '120 × 60 cm',
    year: '2024',
    story: 'A wooden relief merging butterfly motifs with African carving patterns — the soul between migration and belonging.',
    status: 'Commissioned',
    image: '/images/gallery/sculptor-3.jpeg',
  },
  {
    id: 'a4',
    title: 'Mother & Child Panel',
    category: 'Sculptures',
    medium: 'Hand-carved iroko wood',
    dimensions: '180 × 80 cm',
    year: '2025',
    story: 'A monumental diptych panel carved from a single iroko log — the eternal bond of mother and child rendered in the language of the ancestors.',
    status: 'Available',
    image: '/images/gallery/sculptor-4.jpeg',
  },
  {
    id: 'a5',
    title: 'Spirit of the Village',
    category: 'Paintings',
    medium: 'Oil on canvas',
    dimensions: '60 × 90 cm',
    year: '2022',
    story: 'A dreamlike landscape of an African village at dusk — ochre skies, thatched roofs, and the unhurried rhythm of everyday life preserved forever.',
    status: 'Available',
    image: '/images/gallery/art-4.jpeg',
  },
  {
    id: 'a6',
    title: 'She Who Holds the Sky',
    category: 'Paintings',
    medium: 'Mixed media on canvas',
    dimensions: '70 × 90 cm',
    year: '2025',
    story: 'A striking portrait of an African woman adorned in gold roses — femininity, power, and beauty colliding in a single frame.',
    status: 'Available',
    image: '/images/gallery/painting-3.jpeg',
  },
  {
    id: 'a7',
    title: 'Mask of the Ancestors',
    category: 'Paintings',
    medium: 'Acrylic on canvas',
    dimensions: '80 × 100 cm',
    year: '2023',
    story: 'An African ceremonial mask rises before a twilight skyline of palms and river — identity, memory, and myth in one vibrant composition.',
    status: 'Available',
    image: '/images/gallery/painting-1.jpeg',
  },
  {
    id: 'a8',
    title: 'The Voice of Dawn',
    category: 'Paintings',
    medium: 'Oil on canvas',
    dimensions: '60 × 80 cm',
    year: '2024',
    story: 'A rooster mid-call painted with explosive texture and colour — the African morning that insists on being heard.',
    status: 'Available',
    image: '/images/gallery/art-5.jpeg',
  },
  {
    id: 'a9',
    title: 'Crucifixion Study',
    category: 'Portraits',
    medium: 'Charcoal & graphite print',
    dimensions: '50 × 70 cm',
    year: '2024',
    story: 'A devotional portrait in monochrome — the compassion and sacrifice of Christ rendered with quiet precision.',
    status: 'Commissioned',
    image: '/images/gallery/painting-2.jpeg',
  },
  {
    id: 'a10',
    title: 'Woman with Butterflies',
    category: 'Custom Works',
    medium: 'Oil on canvas, gold frame',
    dimensions: '75 × 95 cm',
    year: '2025',
    story: 'A private commission celebrating a woman\'s transformation — butterflies and birds ascending from her body like prayers answered.',
    status: 'Commissioned',
    image: '/images/gallery/art-1.jpeg',
  },
  {
    id: 'a11',
    title: 'Golden Intersection',
    category: 'Installations',
    medium: 'Acrylic & gold leaf on canvas',
    dimensions: '120 × 80 cm',
    year: '2024',
    story: 'Bold black strokes and golden arcs intersect in a tension of opposites — a meditation on collision and connection.',
    status: 'Available',
    image: '/images/gallery/art-2.jpeg',
  },
  {
    id: 'a12',
    title: 'Lagos at Night',
    category: 'Installations',
    medium: 'Acrylic on canvas',
    dimensions: '100 × 120 cm',
    year: '2022',
    story: 'The pulse of Lagos captured in electric brushstrokes — yellow buses, neon signs, and the city\'s unquenchable energy.',
    status: 'Sold',
    image: '/images/gallery/art-3.jpeg',
  },
  {
    id: 'a13',
    title: 'Echoes — Gallery View',
    category: 'Exhibitions',
    medium: 'Solo exhibition installation',
    dimensions: 'National Gallery, Lagos',
    year: '2025',
    story: 'A panoramic view of the Echoes solo show — sculptures arranged in dialogue across the gallery floor, each piece lit to reveal its textures and shadows.',
    status: 'Available',
    image: '/images/gallery/exhibition/exhibition-1.jpeg',
  },
  {
    id: 'a14',
    title: 'Sculpture Hall',
    category: 'Exhibitions',
    medium: 'Exhibition installation',
    dimensions: 'National Gallery, Lagos',
    year: '2025',
    story: 'The main hall of the Echoes exhibition — monumental wood and bronze works installed in conversation with the architecture of the space.',
    status: 'Available',
    image: '/images/gallery/exhibition/exhibition-2.jpeg',
  },
  {
    id: 'a15',
    title: 'Opening Night',
    category: 'Exhibitions',
    medium: 'Exhibition event',
    dimensions: 'National Gallery, Lagos',
    year: '2025',
    story: 'The opening night of Echoes — collectors, curators, and friends gathered among the works as the artist spoke about memory and return.',
    status: 'Available',
    image: '/images/gallery/exhibition/exhibition-3.jpeg',
  },
  {
    id: 'a16',
    title: 'Featured Works Wall',
    category: 'Exhibitions',
    medium: 'Exhibition installation',
    dimensions: 'National Gallery, Lagos',
    year: '2025',
    story: 'A curated wall of paintings and reliefs from the Echoes show — the full range of the artist\'s practice assembled in a single sightline.',
    status: 'Available',
    image: '/images/gallery/exhibition/exhibition-5.jpeg',
  },
];

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

export const services: Service[] = [
  { id: 's1', title: 'Custom Sculptures', description: 'Bespoke sculptural works cast in bronze, terracotta, or mixed media — shaped to your story.', icon: 'Hammer' },
  { id: 's2', title: 'Portrait Sculpting', description: 'Lifelike portrait busts and figures that preserve the essence of a loved one or ancestor.', icon: 'User' },
  { id: 's3', title: 'Fine Art Paintings', description: 'Original oil and acrylic paintings rooted in African heritage and feminine expression.', icon: 'Palette' },
  { id: 's4', title: 'Public & Private Installations', description: 'Large-scale sculptural installations for galleries, institutions, and private estates.', icon: 'Building2' },
  { id: 's5', title: 'Art Commissions', description: 'Collaborative commissions for collectors, decorators, and cultural institutions.', icon: 'Handshake' },
  { id: 's6', title: 'Art Workshops & Training', description: 'Hands-on sculpting and painting workshops for aspiring artists and communities.', icon: 'GraduationCap' },
  { id: 's7', title: 'Exhibition Collaborations', description: 'Curated collaborations with galleries, museums, and cultural festivals worldwide.', icon: 'Frame' },
  { id: 's8', title: 'Interior Art Consultation', description: 'Guided selection and placement of sculptural works for refined interior spaces.', icon: 'Sofa' },
];

export type EventItem = {
  id: string;
  title: string;
  date: string;
  location: string;
  type: string;
  description: string;
};

export const events: EventItem[] = [
  { id: 'e1', title: 'Echoes — Solo Exhibition', date: 'Sep 12 – Oct 30, 2025', location: 'National Gallery, Lagos', type: 'Exhibition', description: 'A retrospective of sculptural works exploring memory, migration, and return.' },
  { id: 'e2', title: 'Live Sculpting Session', date: 'Aug 24, 2025', location: 'Studio Open Day, Abuja', type: 'Live Event', description: 'Watch a bronze portrait take shape from raw clay to finished form.' },
  { id: 'e3', title: 'Hands of Heritage Workshop', date: 'Jul 6 – Jul 20, 2025', location: 'Lady Sculptor Studio', type: 'Workshop', description: 'A two-week intensive in terracotta sculpting for emerging artists.' },
  { id: 'e4', title: 'Art & Identity Panel', date: 'Nov 15, 2025', location: 'African Art Fair, Cape Town', type: 'Speaking', description: 'A conversation on sculpture as a vessel for cultural memory.' },
];

export type ShopItem = {
  id: string;
  title: string;
  price: string;
  medium: string;
  image: string;
};

export const shopItems: ShopItem[] = [
  { id: 'sh1', title: 'Face of the King', price: '$3,600', medium: 'Terracotta & iron mount', image: '/images/gallery/sculptor-1.jpeg' },
  { id: 'sh2', title: 'She Who Holds the Sky', price: '$4,200', medium: 'Mixed media on canvas', image: '/images/gallery/painting-3.jpeg' },
  { id: 'sh3', title: 'Wings & Roots', price: 'Request price', medium: 'Hand-carved wood', image: '/images/gallery/sculptor-3.jpeg' },
  { id: 'sh4', title: 'Golden Intersection', price: '$2,800', medium: 'Acrylic & gold leaf', image: '/images/gallery/art-2.jpeg' },
  { id: 'sh5', title: 'Torso in Gold', price: '$5,400', medium: 'Cast resin, bronze finish', image: '/images/gallery/sculptor-2.jpeg' },
  { id: 'sh6', title: 'Spirit of the Village', price: '$3,200', medium: 'Oil on canvas', image: '/images/gallery/art-4.jpeg' },
  { id: 'sh7', title: 'Mask of the Ancestors', price: '$3,800', medium: 'Acrylic on canvas', image: '/images/gallery/painting-1.jpeg' },
  { id: 'sh8', title: 'The Voice of Dawn', price: '$2,600', medium: 'Oil on canvas', image: '/images/gallery/art-5.jpeg' },
];

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Services', href: '#services' },
  { label: 'Commissions', href: '#commission' },
  { label: 'Events', href: '#events' },
  { label: 'Shop', href: '#shop' },
  { label: 'Contact', href: '#contact' },
];
