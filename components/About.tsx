import React from 'react';
import { Reveal } from './UI/Reveal';

const About: React.FC = () => {
  return (
    <section id="who-we-are" className="py-32 scroll-mt-24 bg-[#020202] text-white relative overflow-hidden">
        {/* Subtle geometric element */}
        <div className="absolute top-20 right-0 w-96 h-96 border border-white/5 rounded-full transform translate-x-1/3 opacity-50"></div>
        <div className="absolute top-20 right-0 w-64 h-64 bg-violet-900/20 rounded-full filter blur-[80px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-12 gap-16 items-start">
            <div className="md:col-span-5">
                <Reveal>
                    <h2 className="text-sm font-bold tracking-[0.3em] text-violet-400 uppercase mb-6">Who We Are</h2>
                    <h3 className="text-5xl md:text-6xl font-black leading-none tracking-tight mb-8">
                        The <br/> Collective.
                    </h3>
                    <div className="h-1 w-20 bg-violet-500"></div>
                </Reveal>
            </div>
            
            <div className="md:col-span-7">
                <Reveal delay={0.2}>
                    <p className="text-2xl md:text-3xl text-gray-200 mb-10 leading-snug font-light">
                        DesignXchange is a passionate team of designers and developers who believe that <span className="text-white font-bold">great design should be felt</span>, not just seen.
                    </p>
                    <p className="text-lg text-gray-400 leading-relaxed mb-8">
                        We’re just getting started, but our mission is crystal clear: to help businesses grow, support young creatives, and offer free design services to charities and community projects. We blend Awwwards-level aesthetics with real-world usability.
                    </p>
                    <div className="p-8 bg-white/5 rounded-2xl border border-white/5 backdrop-blur-sm">
                         <p className="text-lg text-lime-100 leading-relaxed italic">
                            "We may be new, but we’re not here to play small. We’re building a brand that blends kinetic creativity with deep compassion."
                        </p>
                    </div>
                </Reveal>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;