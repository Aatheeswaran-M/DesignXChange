import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Strict mapping: Services -> expertise, About -> who-we-are, Mission -> our-mission, Culture -> our-vibe
  const navLinks = [
    { name: 'Services', href: '#expertise' },
    { name: 'About', href: '#who-we-are' },
    { name: 'Mission', href: '#our-mission' },
    { name: 'Culture', href: '#our-vibe' },
  ];

  return (
    <nav 
      className={`fixed w-full z-[100] transition-all duration-500 border-b ${
        isScrolled || isOpen 
          ? 'bg-[#020202]/80 backdrop-blur-xl border-white/5 py-4' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-extrabold tracking-tighter text-white z-50">
          Design<span className="text-lime-400">X</span>change
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 hover:text-lime-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="px-6 py-2 bg-white text-black font-bold text-sm rounded-full hover:bg-lime-400 hover:text-black transition-all transform hover:scale-105"
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden z-50">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-[#020202] flex flex-col items-center justify-center space-y-8 md:hidden h-screen z-40"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={toggleMenu}
                className="text-4xl font-extrabold tracking-tighter hover:text-lime-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              onClick={toggleMenu}
              className="mt-8 px-8 py-3 bg-lime-400 text-black text-xl font-bold rounded-full"
            >
              Let's Talk
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;