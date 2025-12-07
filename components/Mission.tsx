import React from 'react';
import { Reveal } from './UI/Reveal';

const Mission: React.FC = () => {
  return (
    <section id="our-mission" className="py-32 scroll-mt-24 bg-[#050505] text-white relative overflow-hidden">
        {/* Deep Atmospheric Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-violet-950/20 pointer-events-none"></div>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-violet-600/20 rounded-full mix-blend-screen filter blur-[120px] opacity-40"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[800px] h-[800px] bg-lime-500/10 rounded-full mix-blend-screen filter blur-[120px] opacity-40"></div>
        </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
            <Reveal width="100%" className="flex justify-center">
                <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">Design With <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-lime-300">Purpose</span></h2>
            </Reveal>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <Reveal width="100%">
                <div className="group bg-white/5 hover:bg-white/10 transition-colors backdrop-blur-xl p-12 rounded-[2.5rem] border border-white/5 h-full relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:opacity-20 transition-opacity">
                        <svg width="100" height="100" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z"/></svg>
                    </div>
                    <h3 className="text-3xl font-bold mb-6 text-lime-300">Our Mission</h3>
                    <p className="text-xl text-gray-300 leading-relaxed font-light">
                        We’re here to empower businesses and uplift communities. Our goal is to make digital experiences that feel good, look great, and do real good in the world.
                    </p>
                </div>
            </Reveal>

            <Reveal width="100%" delay={0.2}>
                <div className="group bg-white/5 hover:bg-white/10 transition-colors backdrop-blur-xl p-12 rounded-[2.5rem] border border-white/5 h-full relative overflow-hidden">
                     <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:opacity-20 transition-opacity">
                        <svg width="100" height="100" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                    </div>
                    <h3 className="text-3xl font-bold mb-6 text-violet-300">Our Vision</h3>
                    <p className="text-xl text-gray-300 leading-relaxed font-light">
                         We’re building a design agency rooted in empathy. We are diving deep into the healthcare space — offering specialized design services to providers and nonprofits.
                    </p>
                </div>
            </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Mission;