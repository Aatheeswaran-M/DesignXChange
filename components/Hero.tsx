import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Reveal } from './UI/Reveal';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#020202] text-white">
      
      {/* Sonic Aurora Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-20%] left-[20%] w-[600px] h-[600px] bg-lime-500 rounded-full blur-[150px] opacity-20 animate-aurora"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-violet-600 rounded-full blur-[150px] opacity-20 animate-aurora" style={{animationDelay: '-5s'}}></div>
        <div className="absolute top-[40%] left-[-10%] w-[400px] h-[400px] bg-orange-500 rounded-full blur-[120px] opacity-10 animate-aurora" style={{animationDelay: '-10s'}}></div>
      </div>

      {/* Abstract Floating Glass Elements (Representing Smart Devices/Apps) */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Element 1: Top Right Glass Panel */}
        <div className="absolute top-[15%] right-[5%] md:right-[15%] w-32 md:w-48 h-32 md:h-48 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl animate-float opacity-40 rotate-12"></div>
        
        {/* Element 2: Bottom Left Glass Circle */}
        <div className="absolute bottom-[20%] left-[5%] md:left-[10%] w-40 md:w-64 h-40 md:h-64 rounded-full bg-gradient-to-br from-white/5 to-transparent border border-white/5 backdrop-blur-xl shadow-2xl animate-float-delayed opacity-30"></div>
        
        {/* Element 3: Center blurred line/wave */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent blur-sm rotate-45"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="max-w-5xl mx-auto text-center md:text-left">
            <Reveal width="100%">
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.9] mb-8 mix-blend-screen">
                Design That <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 via-white to-violet-400">Connects</span>, <br />
                Converts & Cares.
              </h1>
            </Reveal>

            <Reveal width="100%" delay={0.4}>
              <div className="flex flex-col md:flex-row items-start md:items-center gap-8 mb-12">
                 <div className="h-[1px] w-24 bg-lime-400 hidden md:block"></div>
                 <p className="text-xl md:text-2xl text-gray-400 max-w-2xl font-light leading-relaxed">
                   We craft <span className="text-white font-medium">kinetic UI/UX experiences</span> for the next generation of web, mobile, and smart devices.
                 </p>
              </div>
            </Reveal>

            <Reveal width="100%" delay={0.6}>
              <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start">
                <a 
                  href="#contact" 
                  className="group px-10 py-5 bg-white text-black font-extrabold text-lg rounded-full flex items-center justify-center gap-3 hover:bg-lime-400 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(204,255,0,0.4)]"
                >
                  Start Project
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="#our-mission" 
                  className="px-10 py-5 bg-white/5 border border-white/10 text-white font-bold text-lg rounded-full hover:bg-white/10 hover:border-white/20 transition-all backdrop-blur-md"
                >
                  Our Mission
                </a>
              </div>
            </Reveal>
        </div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/30"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;