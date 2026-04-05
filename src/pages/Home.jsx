import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import { Phone, MessageCircle } from "lucide-react";

// Components
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/Home/Hero";
import WhyChooseUs from "../components/Home/Chooseus";
import Cars from "../components/Home/Cars";
import VisitingCard from "../components/Home/VisitingCard";
import BookingSteps from "../components/Home/BookingSteps";
import Trip from "../components/Home/Trips";
import PricingSection from "../components/Home/Pricing";
import FAQSection from "../components/Home/FAQ";
import Testimonials from "../components/Home/Testimonals";
import Footer from "../components/Home/Footer";
import LocationMarquee from "../components/Home/Locations";
import TrustSection from "../components/Home/TrustSection";

gsap.registerPlugin(ScrollTrigger);

// --- 1. CLEAN & SIMPLE PRELOADER ---
const Preloader = () => (
  <motion.div
    className="fixed inset-0 z-[10000] bg-[#020202] flex flex-col items-center justify-center px-6"
    exit={{ 
      opacity: 0,
      transition: { duration: 0.8, ease: "easeInOut" } 
    }}
  >
    <div className="flex flex-col items-center">
      {/* Simple, Bold, Responsive Text */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-[9vw] md:text-7xl font-black italic text-white tracking-tighter"
      >
        SANA <span className="text-green-400 font-light">TOURS</span>
      </motion.h1>

      {/* Elegant Expanding Line */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "120px" }}
        transition={{ delay: 0.5, duration: 1, ease: "circOut" }}
        className="h-[1px] bg-white/20 mt-4"
      />

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="text-[3vw] md:text-[10px] uppercase tracking-[0.6em] text-zinc-500 mt-4 font-medium"
      >
        & Travels
      </motion.p>
    </div>
  </motion.div>
);

// --- 2. FLOATING CONTACT ACTIONS ---
const FloatingActions = () => {
  const phone = "6381138159";
  return (
    <div className="fixed bottom-8 right-6 md:right-10 z-[5000] flex flex-col gap-4">
      <motion.a
        href={`https://wa.me/91${phone}`}
        target="_blank"
        whileHover={{ scale: 1.05 }}
        className="w-12 h-12 md:w-14 md:h-14 bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center text-white/50 hover:text-[#25D366] transition-colors"
      >
        <MessageCircle size={22} />
      </motion.a>

      <motion.a
        href={`tel:+91${phone}`}
        whileHover={{ scale: 1.05 }}
        className="w-12 h-12 md:w-14 md:h-14 bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center text-white/50 hover:text-red-600 transition-colors"
      >
        <Phone size={20} />
      </motion.a>
    </div>
  );
};

// --- 3. REVEAL WRAPPER ---
const ParallaxSection = ({ children }) => {
  const ref = useRef(null);
  useEffect(() => {
    gsap.fromTo(ref.current, 
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: ref.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);
  return <div ref={ref}>{children}</div>;
};

// --- 4. MAIN HOME ---
const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, smoothWheel: true });
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);

    const timer = setTimeout(() => {
      setLoading(false);
      setTimeout(() => ScrollTrigger.refresh(), 100);
    }, 2200);

    return () => { clearTimeout(timer); lenis.destroy(); };
  }, []);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className="bg-[#020202] text-white selection:bg-red-600/20">
      
      {/* Subtle Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-[1.5px] bg-red-600 z-[9999] origin-left" style={{ scaleX }} />

      <AnimatePresence mode="wait">
        {loading && <Preloader key="loader" />}
      </AnimatePresence>

      {!loading && (
        <>
          <Navbar />
          <FloatingActions />
          <main className="relative">
            <section id="home"><Hero /></section>
            
            <div className="space-y-32 md:space-y-52 pb-32">
              <ParallaxSection><TrustSection /></ParallaxSection>
              <ParallaxSection><WhyChooseUs /></ParallaxSection>
              <LocationMarquee />
              <section id="cars"><ParallaxSection><Cars /></ParallaxSection></section>
              <section id="contact"><ParallaxSection><VisitingCard /></ParallaxSection></section>
              <section id="booking"><ParallaxSection><BookingSteps /></ParallaxSection></section>
              <section id="trips"><ParallaxSection><Trip /></ParallaxSection></section>
              <section id="pricing"><ParallaxSection><PricingSection /></ParallaxSection></section>
              <section id="faq"><ParallaxSection><FAQSection /></ParallaxSection></section>
              <section id="testimonials"><ParallaxSection><Testimonials /></ParallaxSection></section>
            </div>

            <Footer />
          </main>
        </>
      )}

      <style jsx global>{`
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #222; border-radius: 10px; }
        html.lenis { height: auto; }
        .lenis.lenis-smooth { scroll-behavior: auto; }
        .lenis.lenis-stopped { overflow: hidden; }
      `}</style>
    </div>
  );
};

export default Home;