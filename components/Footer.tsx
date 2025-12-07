import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#020202] text-white py-12 border-t border-white/5 relative z-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-extrabold tracking-tighter mb-2">
            Design<span className="text-lime-400">X</span>change
          </h2>
          <p className="text-gray-500 text-sm">Where Creativity Meets Community</p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          <a href="#expertise" className="text-gray-500 hover:text-white transition-colors text-sm font-semibold uppercase tracking-wider">Services</a>
          <a href="#who-we-are" className="text-gray-500 hover:text-white transition-colors text-sm font-semibold uppercase tracking-wider">About</a>
          <a href="#our-mission" className="text-gray-500 hover:text-white transition-colors text-sm font-semibold uppercase tracking-wider">Mission</a>
          <a href="#our-vibe" className="text-gray-500 hover:text-white transition-colors text-sm font-semibold uppercase tracking-wider">Culture</a>
          <a href="#contact" className="text-gray-500 hover:text-white transition-colors text-sm font-semibold uppercase tracking-wider">Contact</a>
        </div>

        <div className="text-gray-600 text-sm text-center md:text-right">
          &copy; {new Date().getFullYear()} DesignXchange. <br className="hidden md:block"/> All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;