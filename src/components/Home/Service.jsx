import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageSquare, MapPin, ChevronRight, ChevronLeft } from 'lucide-react';

// Upgraded Hero Data
const HERO_SLIDES = [
  {
    id: 1,
    title: "Premium Cab Service",
    subtitle: "YOU CAN TRUST",
    desc: "Luxury travel redefined for Palani & Ayakudi. Experience 5-star comfort on every mile.",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=2070", // Luxury Sedan
    tag: "Luxury Sedans"
  },
  {
    id: 2,
    title: "Divine Pilgrimage",
    subtitle: "TO PALANI HILLS",
    desc: "Seamless, peaceful transfers for your spiritual journey. Professional drivers who know the routes.",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=2070", // Road travel
    tag: "Pilgrim Specials"
  },
  {
    id: 3,
    title: "Hill Station Tours",
    subtitle: "KODAIKANAL & BEYOND",
    desc: "Explore the 'Princess of Hill Stations' with our premium SUV fleet and expert tour guides.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=2070", // Mountains/Ghats
    tag: "Tour Packages"
  }
];

export default function PremiumHero() {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === HERO_SLIDES.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent(current === HERO_SLIDES.length - 1 ? 0 : current + 1);
  const prevSlide = () => setCurrent(current === 0 ? HERO_SLIDES.length - 1 : current - 1);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Images with AnimatePresence */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.5, ease: "circOut" }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-[#050505] z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent z-10" />
          <img 
            src={HERO_SLIDES[current].image} 
            className="w-full h-full object-cover" 
            alt="Sana Travels Luxury"
          />
        </motion.div>
      </AnimatePresence>

      {/* Content Overlay */}
      <div className="container mx-auto px-6 h-full flex flex-col justify-center relative z-20">
        <div className="max-w-4xl">
          {/* Animated Tag */}
          <motion.div 
            key={`tag-${current}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-12 h-[1px] bg-blue-500" />
            <span className="text-blue-500 text-xs font-black uppercase tracking-[0.4em]">
              {HERO_SLIDES[current].tag}
            </span>
          </motion.div>

          {/* Main Heading */}
          <div className="overflow-hidden mb-4">
            <motion.h1 
              key={`title-${current}`}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: "circOut" }}
              className="text-5xl md:text-[7rem] font-bold tracking-tighter leading-[0.85] text-white"
            >
              {HERO_SLIDES[current].title}
            </motion.h1>
          </div>
          
          <div className="overflow-hidden mb-8">
            <motion.span 
              key={`sub-${current}`}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "circOut" }}
              className="text-4xl md:text-7xl font-light italic text-gray-400 block"
            >
              {HERO_SLIDES[current].subtitle}
            </motion.span>
          </div>

          <motion.p 
            key={`desc-${current}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="max-w-lg text-gray-400 text-lg md:text-xl font-light mb-12"
          >
            {HERO_SLIDES[current].desc}
          </motion.p>

          {/* Conversion Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-5"
          >
            <button 
              onClick={() => window.location.href = `tel:9344790389`}
              className="group relative h-16 px-10 bg-blue-600 rounded-2xl font-bold flex items-center justify-center gap-3 overflow-hidden transition-all hover:bg-blue-700 active:scale-95"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <Phone size={20} className="relative z-10" />
              <span className="relative z-10">Call for Quick Pickup</span>
            </button>

            <button 
              onClick={() => window.open('https://wa.me/9344790389')}
              className="h-16 px-10 border border-white/20 backdrop-blur-md rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-white/10 transition-all active:scale-95"
            >
              <MessageSquare size={20} className="text-[#25D366]" />
              <span>WhatsApp Booking</span>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Slider Controls */}
      <div className="absolute bottom-12 right-6 md:right-12 z-30 flex items-center gap-4">
        {/* Slide Counter */}
        <div className="text-white/30 text-sm font-bold tracking-widest mr-4">
          <span className="text-white">0{current + 1}</span> / 0{HERO_SLIDES.length}
        </div>
        
        <button 
          onClick={prevSlide}
          className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={nextSlide}
          className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10 z-30">
        <motion.div 
          key={current}
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 6, ease: "linear" }}
          className="h-full bg-blue-500"
        />
      </div>

      {/* Quick Location Badge (Fixed Left) */}
      <div className="hidden lg:flex absolute left-12 bottom-12 z-30 items-center gap-4 text-white/50">
        <MapPin size={16} className="text-blue-500" />
        <span className="text-[10px] font-black uppercase tracking-[0.4em]">Palani • Ayakudi • South India</span>
      </div>
    </section>
  );
}