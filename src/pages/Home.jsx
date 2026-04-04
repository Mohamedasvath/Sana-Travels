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

// --- 1. MINIMAL PRELOADER ---
const Preloader = () => (
  <motion.div
    className="fixed inset-0 z-[10000] bg-[#020202] flex flex-col items-center justify-center"
    exit={{
      y: "-100%",
      transition: { duration: 1.1, ease: [0.85, 0, 0.15, 1] },
    }}
  >
    <div className="overflow-hidden">
      <motion.h1
        initial={{ y: 120 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "circOut" }}
        className="text-6xl md:text-8xl font-black italic text-white tracking-tighter"
      >
        SANA <span className="text-red-600">TRAVELS</span>
      </motion.h1>
    </div>
    <motion.div 
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      className="w-32 h-[1px] bg-red-600/50 mt-6 origin-center"
    />
  </motion.div>
);

// --- 2. PREMIUM MILD FLOATING ACTIONS ---
const FloatingActions = () => {
  const phone = "6381138159";
  return (
    <div className="fixed bottom-10 right-6 md:right-10 z-[5000] flex flex-col gap-4">
      {/* WhatsApp Button */}
      <motion.a
        href={`https://wa.me/91${phone}`}
        target="_blank"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
        whileHover={{ scale: 1.1, x: -5 }}
        className="group relative w-12 h-12 md:w-14 md:h-14 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-xl flex items-center justify-center text-white/40 hover:text-[#25D366] hover:border-[#25D366]/40 transition-all duration-500"
      >
        <MessageCircle size={24} />
        <span className="absolute right-16 px-3 py-1 bg-zinc-900 border border-white/10 text-[10px] tracking-widest uppercase font-bold text-[#25D366] opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap rounded-md pointer-events-none">
          WhatsApp
        </span>
      </motion.a>

      {/* Call Button */}
      <motion.a
        href={`tel:+91${phone}`}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2 }}
        whileHover={{ scale: 1.1, x: -5 }}
        className="group relative w-12 h-12 md:w-14 md:h-14 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-xl flex items-center justify-center text-white/40 hover:text-red-500 hover:border-red-500/40 transition-all duration-500"
      >
        <Phone size={22} />
        {/* Very Subtle Pulse Ring */}
        <span className="absolute inset-0 rounded-xl bg-red-500/5 animate-pulse" />
        <span className="absolute right-16 px-3 py-1 bg-zinc-900 border border-white/10 text-[10px] tracking-widest uppercase font-bold text-red-500 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap rounded-md pointer-events-none">
          Contact 
        </span>
      </motion.a>
    </div>
  );
};

// --- 3. SMOOTH REVEAL WRAPPER ---
const ParallaxSection = ({ children }) => {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    gsap.fromTo(el, 
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);
  return <div ref={ref}>{children}</div>;
};

// --- 4. MAIN HOME COMPONENT ---
const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Lenis Smooth Scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    window.lenis = lenis;

    const timer = setTimeout(() => {
      setLoading(false);
      // Refresh GSAP after layout stabilizes
      setTimeout(() => ScrollTrigger.refresh(), 100);
    }, 2500);

    return () => {
      clearTimeout(timer);
      lenis.destroy();
    };
  }, []);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className="bg-[#020202] text-white selection:bg-red-600/30">
      
      {/* Top Progress Bar (Very Thin) */}
      <motion.div className="fixed top-0 left-0 right-0 h-[2px] bg-red-600 z-[9999] origin-left" style={{ scaleX }} />

      <AnimatePresence mode="wait">
        {loading && <Preloader key="loader" />}
      </AnimatePresence>

      {!loading && (
        <>
          <Navbar />
          <FloatingActions />

          <main className="relative">
            <section id="home">
              <Hero />
            </section>

            {/* Content Container with Uniform Spacing */}
            <div className="space-y-32 md:space-y-60 pb-32">
              
              <ParallaxSection>
                <TrustSection />
              </ParallaxSection>

              <ParallaxSection>
                <WhyChooseUs />
              </ParallaxSection>

              <LocationMarquee />

              <section id="cars">
                <ParallaxSection>
                  <Cars />
                </ParallaxSection>
              </section>

              <section id="contact">
                <ParallaxSection>
                  <VisitingCard />
                </ParallaxSection>
              </section>

              <section id="booking">
                <ParallaxSection>
                  <BookingSteps />
                </ParallaxSection>
              </section>

              <section id="trips">
                <ParallaxSection>
                  <Trip />
                </ParallaxSection>
              </section>

              <section id="pricing">
                <ParallaxSection>
                  <PricingSection />
                </ParallaxSection>
              </section>

              <section id="faq">
                <ParallaxSection>
                  <FAQSection />
                </ParallaxSection>
              </section>

              <section id="testimonials">
                <ParallaxSection>
                  <Testimonials />
                </ParallaxSection>
              </section>
            </div>

            <Footer />
          </main>
        </>
      )}

      {/* Global Style Fixes */}
      <style jsx global>{`
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: #020202; }
        ::-webkit-scrollbar-thumb { background: #222; border-radius: 10px; }
        ::-webkit-scrollbar-thumb:hover { background: #ef4444; }
        
        html.lenis { height: auto; }
        .lenis.lenis-smooth { scroll-behavior: auto; }
        .lenis.lenis-stopped { overflow: hidden; }
      `}</style>
    </div>
  );
};

export default Home;