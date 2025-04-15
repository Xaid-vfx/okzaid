import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navbar />
      <Hero />
      <section id="about" className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/5 to-transparent opacity-60"></div>
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact" className="relative">
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/5 to-transparent opacity-60"></div>
        <Contact />
      </section>
      <Footer />
    </main>
  );
}
