import React from 'react';
import { Reveal } from './UI/Reveal';
import { Smartphone, Monitor, Globe, Heart, Cpu, Box } from 'lucide-react';
import { motion } from 'framer-motion';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Web Design',
      description: 'Clean, responsive immersive websites built to convert visitors.',
      icon: <Globe className="w-8 h-8 text-blue-400" />
    },
    {
      title: 'Web Apps',
      description: 'Complex systems made simple. Functional meets delightful.',
      icon: <Monitor className="w-8 h-8 text-violet-400" />
    },
    {
      title: 'Mobile UI/UX',
      description: 'Designed for thumbs and real attention spans.',
      icon: <Smartphone className="w-8 h-8 text-lime-400" />
    },
    {
      title: 'Sonic Interfaces',
      description: 'Future-ready design for voice and smart connected devices.',
      icon: <Cpu className="w-8 h-8 text-orange-400" />
    },
    {
      title: '3D Visuals',
      description: 'Adding depth and dimension to flat digital experiences.',
      icon: <Box className="w-8 h-8 text-pink-400" />
    },
    {
      title: 'Pro Bono',
      description: 'Free design services for charities because we give a damn.',
      icon: <Heart className="w-8 h-8 text-red-500" />,
      highlight: true
    }
  ];

  return (
    <section id="expertise" className="py-32 scroll-mt-24 bg-[#020202] text-white relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-24 max-w-4xl">
          <Reveal>
            <h2 className="text-sm font-bold tracking-[0.3em] text-lime-400 uppercase mb-6">Expertise</h2>
            <h3 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
              Design That Works <br/> <span className="text-gray-500">Everywhere.</span>
            </h3>
            <p className="text-xl text-gray-400 max-w-2xl">
                Whether you're launching a startup, refreshing your brand, or building something for smart devices — we’ve got you covered with pixel-perfect precision.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
                <Reveal key={index} delay={0.1 * index} width="100%">
                    <div 
                      className={`group h-full p-10 rounded-[2rem] border transition-all duration-500 relative overflow-hidden
                        ${service.highlight 
                            ? 'bg-gradient-to-br from-zinc-900 to-black border-white/20' 
                            : 'bg-white/[0.03] border-white/5 hover:bg-white/[0.06] hover:border-white/20'
                        }
                      `}
                    >
                        {/* Hover Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-lime-400/0 via-transparent to-violet-600/0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>

                        <div className="relative z-10">
                            <div className="mb-8 bg-white/5 w-fit p-4 rounded-2xl backdrop-blur-sm border border-white/5 group-hover:scale-110 transition-transform duration-500">
                                {service.icon}
                            </div>
                            <h4 className="text-3xl font-bold mb-4 tracking-tight">{service.title}</h4>
                            <p className="text-gray-400 text-lg leading-relaxed group-hover:text-gray-300 transition-colors">
                                {service.description}
                            </p>
                        </div>
                    </div>
                </Reveal>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Services;