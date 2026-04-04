import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageSquare, ShieldCheck, Clock, CheckCircle2 } from "lucide-react";
import Palani from '../../assets/Golden hour at Palani temple.png';

const slides = [
  {
    id: 1,
    title: "SANA TRAVEL",
    highlight: "REFINED.",
    desc: "Experience the gold standard of luxury mobility in Palani. Punctuality meets premium comfort.",
    img: "https://wallpapercave.com/wp/wp9777779.jpg",
    fit: "cover",
  },
  {
    id: 2,
    title: "HILL CLIMB",
    highlight: "EXPERT.",
    desc: "Specialized hill station travel to Kodaikanal. Our verified drivers ensure a smooth, safe ascent.",
    img: "https://images.stockcake.com/public/5/3/1/531b7aed-9c7c-4189-8792-1954d31e39aa/mountain-road-adventure-stockcake.jpg",
    fit: "cover",
  },
  {
    id: 3,
    title: "SPIRITUAL",
    highlight: "SERENE.",
    desc: "Reliable temple circuits around Palani and Madurai. Focus on the divine while we drive.",
    img: Palani,
    fit: "contain",
  },
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  // ✅ FIXED NUMBERS
  const phoneNumber = "6381138159";
  const fullPhone = "916381138159";

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen w-full bg-[#050505] text-white overflow-hidden flex items-center pt-24 md:pt-28">

      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[index].id}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.7, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
          >

            {/* BLUR BG (only for contain images) */}
            {slides[index].fit === "contain" && (
              <img
                src={slides[index].img}
                className="absolute inset-0 w-full h-full object-cover blur-2xl scale-110 opacity-40"
                alt=""
              />
            )}

            {/* MAIN IMAGE */}
            <img
              src={slides[index].img}
              className={`w-full h-full ${
                slides[index].fit === "contain"
                  ? "object-contain"
                  : "object-cover"
              }`}
              alt="Sana Travels"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent lg:bg-gradient-to-r lg:from-black lg:via-black/20 lg:to-transparent" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* CONTENT */}
      <div className="relative z-20 w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl">

          {/* TEXT */}
          <div className="min-h-[250px] md:min-h-[350px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-[42px] sm:text-6xl md:text-[90px] lg:text-[110px] font-semibold leading-[0.9] tracking-tight uppercase">
                  {slides[index].title} <br />
                  <span
                    className="text-transparent italic font-light block py-2"
                    style={{ WebkitTextStroke: "1px rgba(255,255,255,0.6)" }}
                  >
                    {slides[index].highlight}
                  </span>
                </h1>

                <p className="mt-6 text-white/80 text-sm md:text-lg max-w-md leading-relaxed border-l-2 border-red-600 pl-4">
                  {slides[index].desc}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 mt-10">

            {/* CALL */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => (window.location.href = `tel:+91${phoneNumber}`)}
              className="flex items-center justify-center gap-3 bg-white text-black px-8 py-4 rounded-xl font-bold text-[11px] tracking-widest hover:bg-red-600 hover:text-white transition-all"
            >
              <Phone size={16} /> CALL NOW
            </motion.button>

            {/* WHATSAPP */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open(`https://wa.me/${fullPhone}`, "_blank")}
              className="flex items-center justify-center gap-3 bg-white/10 border border-white/20 backdrop-blur text-white px-8 py-4 rounded-xl font-bold text-[11px] tracking-widest hover:bg-[#25D366] hover:border-[#25D366] transition-all"
            >
              <MessageSquare size={16} /> WHATSAPP
            </motion.button>

          </div>

          {/* TRUST */}
          <div className="flex items-center gap-8 mt-16 pt-8 border-t border-white/10 overflow-x-auto no-scrollbar">
            {[
              { icon: <CheckCircle2 size={14} />, text: "Clean Cars" },
              { icon: <ShieldCheck size={14} />, text: "Verified Drivers" },
              { icon: <Clock size={14} />, text: "24/7 Service" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-white/60">
                <span className="text-red-600">{item.icon}</span>
                <span className="text-[10px] uppercase tracking-widest">{item.text}</span>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* SLIDE NAV */}
      <div className="absolute right-6 bottom-10 flex flex-col items-end gap-4 z-30">
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-1 rounded-full transition-all ${
                index === i ? "w-8 bg-red-600" : "w-2 bg-white/30"
              }`}
            />
          ))}
        </div>
        <span className="text-xs text-white/40">
          0{index + 1} / 0{slides.length}
        </span>
      </div>

    </section>
  );
};

export default Hero;