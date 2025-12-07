import React from 'react';
import { RevealHorizontal } from './UI/Reveal';
import { Smile, Zap, Users, Heart } from 'lucide-react';

const Culture: React.FC = () => {
  const values = [
    {
      title: 'Purpose over profit',
      desc: 'We care about what you’re building and why.',
      icon: <Heart size={32} />
    },
    {
      title: 'Fresh thinking',
      desc: 'No stale templates or cookie-cutter solutions.',
      icon: <Zap size={32} />
    },
    {
      title: 'Community-first',
      desc: 'We design for impact, not just aesthetics.',
      icon: <Users size={32} />
    },
    {
      title: 'Playful professionalism',
      desc: 'We take our work seriously, but not ourselves.',
      icon: <Smile size={32} />
    }
  ];

  return (
    <section id="our-vibe" className="py-32 scroll-mt-24 bg-[#020202] text-white overflow-hidden relative">
        <div className="absolute left-0 bottom-0 w-1/2 h-1/2 bg-gradient-to-tr from-lime-900/20 to-transparent blur-[100px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5">
                <RevealHorizontal>
                    <h2 className="text-sm font-bold tracking-[0.3em] text-orange-500 uppercase mb-6">Our Vibe</h2>
                    <h3 className="text-5xl md:text-7xl font-black mb-8 leading-[1.1] tracking-tighter">
                        Not Your <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Typical</span> Agency.
                    </h3>
                    <p className="text-xl text-gray-400 mb-8">
                        We’re collaborative, curious, and a little quirky — and we like it that way. We don't just build screens; we build relationships.
                    </p>
                    <div className="h-1 w-32 bg-orange-500 rounded-full"></div>
                </RevealHorizontal>
            </div>
            
            <div className="lg:col-span-7">
                <div className="grid sm:grid-cols-2 gap-6">
                    {values.map((val, idx) => (
                        <RevealHorizontal key={idx} delay={0.2 + idx * 0.1}>
                            <div className="bg-white/[0.03] p-10 rounded-3xl border border-white/5 hover:bg-white/[0.08] hover:border-white/10 transition-all duration-300 h-full backdrop-blur-sm group">
                                <div className="text-lime-400 mb-6 group-hover:scale-110 transition-transform duration-300">{val.icon}</div>
                                <h4 className="text-2xl font-bold mb-3 tracking-tight">{val.title}</h4>
                                <p className="text-gray-500 group-hover:text-gray-400 transition-colors">{val.desc}</p>
                            </div>
                        </RevealHorizontal>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Culture;