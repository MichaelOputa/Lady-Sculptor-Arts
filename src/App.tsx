import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Services from './components/Services';
import Commission from './components/Commission';
import Philosophy from './components/Philosophy';
import Events from './components/Events';
import Shop from './components/Shop';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-cream text-warmblack">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Services />
        <Commission />
        <Philosophy />
        <Events />
        <Shop />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
