import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { Reveal } from './UI/Reveal';
import { motion, AnimatePresence } from 'framer-motion';

const Contact: React.FC = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    projectType: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!form.name.trim()) newErrors.name = "Name is required";
    
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!form.projectType) newErrors.projectType = "Please select a project type";
    
    if (!form.message.trim()) newErrors.message = "Please describe your project needs";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validate()) {
      setIsSubmitting(true);
      
      // Simulate network request
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setIsSubmitting(false);
      setIsSuccess(true);
      setForm({ name: '', email: '', projectType: '', message: '' });
      setErrors({});
      
      // Auto-reset success message after 8 seconds (optional)
      setTimeout(() => setIsSuccess(false), 8000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    // Clear error for this field as user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const inputClasses = "w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-lime-400 focus:ring-1 focus:ring-lime-400 transition-all backdrop-blur-sm text-lg";
  const labelClasses = "block text-xs font-bold uppercase tracking-[0.1em] text-gray-400 mb-2 ml-1";
  const errorClasses = "text-red-400 text-sm mt-2 flex items-center gap-1.5 font-medium";

  return (
    <section id="contact" className="py-32 scroll-mt-24 bg-[#020202] text-white relative flex flex-col justify-center items-center overflow-hidden">
        {/* Animated Background Gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-violet-900/20 via-[#020202] to-[#020202] z-0"></div>
        <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-lime-900/10 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10 max-w-4xl">
        <Reveal width="100%" className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 leading-[0.9]">
                Ready to Make <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-violet-500">Noise?</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
                Fill out the form below to kickstart your next digital masterpiece.
            </p>
        </Reveal>

        <Reveal width="100%">
          <div className="bg-white/[0.03] border border-white/5 rounded-[2.5rem] p-8 md:p-14 backdrop-blur-xl shadow-2xl relative overflow-hidden">
             {/* Decorative glass shine */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex flex-col items-center justify-center py-24 text-center"
                >
                  <div className="w-24 h-24 bg-lime-400/10 rounded-full flex items-center justify-center mb-8 text-lime-400 ring-1 ring-lime-400/50 shadow-[0_0_30px_rgba(163,230,53,0.3)]">
                    <CheckCircle size={48} />
                  </div>
                  <h3 className="text-4xl font-bold mb-6 text-white tracking-tight">Message Received.</h3>
                  <p className="text-gray-400 max-w-md text-lg leading-relaxed">
                    We've received your inquiry. One of our strategists will analyze your request and get back to you within 24 hours.
                  </p>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="mt-12 text-sm font-bold uppercase tracking-widest text-lime-400 hover:text-white transition-colors"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8" noValidate>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <label htmlFor="name" className={labelClasses}>Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={form.name}
                        onChange={handleChange}
                        className={`${inputClasses} ${errors.name ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500 bg-red-500/5' : ''}`}
                        placeholder="John Doe"
                      />
                      {errors.name && <p className={errorClasses}><AlertCircle size={14} /> {errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="email" className={labelClasses}>Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={form.email}
                        onChange={handleChange}
                        className={`${inputClasses} ${errors.email ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500 bg-red-500/5' : ''}`}
                        placeholder="john@example.com"
                      />
                      {errors.email && <p className={errorClasses}><AlertCircle size={14} /> {errors.email}</p>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="projectType" className={labelClasses}>Project Type</label>
                    <div className="relative">
                      <select 
                        id="projectType" 
                        name="projectType" 
                        value={form.projectType}
                        onChange={handleChange}
                        className={`${inputClasses} appearance-none cursor-pointer ${errors.projectType ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500 bg-red-500/5' : ''}`}
                      >
                        <option value="" disabled className="bg-zinc-950 text-gray-500">Select a project type...</option>
                        <option value="Web Design" className="bg-zinc-950">Web Design & Development</option>
                        <option value="Web App" className="bg-zinc-950">Web Application / SaaS</option>
                        <option value="Mobile App" className="bg-zinc-950">Mobile App UI/UX</option>
                        <option value="Sonic Branding" className="bg-zinc-950">Sonic Branding / Interface</option>
                        <option value="Other" className="bg-zinc-950">Other / Consultation</option>
                      </select>
                      <div className="absolute right-5 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-500">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M7 10l5 5 5-5z"/></svg>
                      </div>
                    </div>
                    {errors.projectType && <p className={errorClasses}><AlertCircle size={14} /> {errors.projectType}</p>}
                  </div>

                  <div>
                    <label htmlFor="message" className={labelClasses}>Message</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      className={`${inputClasses} resize-none ${errors.message ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500 bg-red-500/5' : ''}`}
                      placeholder="Tell us about your goals, timeline, and budget..."
                    ></textarea>
                    {errors.message && <p className={errorClasses}><AlertCircle size={14} /> {errors.message}</p>}
                  </div>

                  <div className="pt-4">
                    <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full group relative flex items-center justify-center px-8 py-5 text-xl font-bold rounded-xl bg-white text-black transition-all duration-300 hover:bg-lime-400 hover:scale-[1.01] hover:shadow-[0_0_30px_rgba(163,230,53,0.4)] disabled:opacity-70 disabled:hover:scale-100 disabled:hover:bg-white disabled:hover:shadow-none"
                    >
                        {isSubmitting ? (
                        <Loader2 className="animate-spin mr-3" />
                        ) : (
                        <>
                            <span className="mr-2 tracking-tight">Let's Talk</span>
                            <ArrowUpRight className="w-6 h-6 transition-transform group-hover:rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </>
                        )}
                    </button>
                    <p className="text-center mt-6 text-xs text-gray-500 uppercase tracking-widest font-bold opacity-60">
                        100% Confidential. No Spam.
                    </p>
                  </div>
                </form>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;