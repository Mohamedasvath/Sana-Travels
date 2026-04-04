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

// --- 1. PREMIUM PRELOADER WITH PERCENTAGE & RESPONSIVE TEXT ---
const Preloader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : 100));
    }, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[10000] bg-[#020202] flex flex-col items-center justify-center px-6"
      exit={{
        clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
      }}
    >
      <div className="relative flex flex-col items-center max-w-full">
        {/* Responsive Text Container */}
        <div className="overflow-hidden text-center">
          <motion.h1
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            className="text-[10vw] md:text-8xl font-black italic text-white tracking-tighter leading-none"
          >
            SANA <span className="text-green-500">TOURS</span>
          </motion.h1>
          <motion.h1
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[7vw] md:text-6xl font-light italic text-zinc-500 tracking-[0.2em] leading-none mt-2"
          >
            & TRAVELS
          </motion.h1>
        </div>

        {/* Loading Progress */}
        <div className="mt-12 flex flex-col items-center">
          <div className="text-red-600 font-mono text-xl mb-2">
            {progress}%
          </div>
          <div className="w-48 h-[1px] bg-white/10 relative overflow-hidden">
            <motion.div 
              className="absolute inset-0 bg-red-600 origin-left"
              style={{ scaleX: progress / 100 }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// --- 2. PREMIUM MILD FLOATING ACTIONS ---
const FloatingActions = () => {
  const phone = "6381138159";
  return (
    <div className="fixed bottom-10 right-6 md:right-10 z-[5000] flex flex-col gap-4">
      <motion.a
        href={`https://wa.me/91${phone}`}
        target="_blank"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        className="group relative w-12 h-12 md:w-14 md:h-14 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-xl flex items-center justify-center text-white/40 hover:text-[#25D366] transition-all duration-500"
      >
        <MessageCircle size={24} />
        <span className="absolute right-16 px-3 py-1 bg-zinc-900 border border-white/10 text-[10px] tracking-widest uppercase font-bold text-[#25D366] opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap rounded-md pointer-events-none">
          WhatsApp
        </span>
      </motion.a>

      <motion.a
        href={`tel:+91${phone}`}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
        whileHover={{ scale: 1.1 }}
        className="group relative w-12 h-12 md:w-14 md:h-14 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-xl flex items-center justify-center text-white/40 hover:text-red-500 transition-all duration-500"
      >
        <Phone size={22} />
        <span className="absolute inset-0 rounded-xl bg-red-500/5 animate-pulse" />
        <span className="absolute right-16 px-3 py-1 bg-zinc-900 border border-white/10 text-[10px] tracking-widest uppercase font-bold text-red-500 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap rounded-md pointer-events-none">
          Quick Call
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
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 92%",
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
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    window.lenis = lenis;

    const timer = setTimeout(() => {
      setLoading(false);
      setTimeout(() => ScrollTrigger.refresh(), 200);
    }, 2800); // Slightly longer for the percentage feel

    return () => {
      clearTimeout(timer);
      lenis.destroy();
    };
  }, []);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className="bg-[#020202] text-white selection:bg-red-600/30">
      
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

            <div className="space-y-24 md:space-y-60 pb-32">
              
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

      <style jsx global>{`
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: #020202; }
        ::-webkit-scrollbar-thumb { background: #333; border-radius: 10px; }
        ::-webkit-scrollbar-thumb:hover { background: #ef4444; }
        
        html.lenis { height: auto; }
        .lenis.lenis-smooth { scroll-behavior: auto; }
        .lenis.lenis-stopped { overflow: hidden; }

        /* Smooth text scaling for Preloader */
        @media (max-width: 768px) {
          h1 { line-height: 1.1 !important; }
        }
      `}</style>
    </div>
  );
};

export default Home;