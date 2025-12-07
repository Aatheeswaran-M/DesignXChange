import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Mission from './components/Mission';
import Culture from './components/Culture';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="antialiased selection:bg-lime-400 selection:text-black relative">
      <div className="bg-noise fixed inset-0 z-[60] pointer-events-none"></div>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Mission />
      <Culture />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;