import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

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

// 1. PREMIUM PRELOADER
const Preloader = () => {
  return (
    <motion.div 
      className="fixed inset-0 z-[10000] bg-[#050505] flex flex-col items-center justify-center p-6 overflow-hidden"
      exit={{ clipPath: "inset(0 0 100% 0)", transition: { duration: 1.2, ease: [0.83, 0, 0.17, 1] } }}
    >
      <div className="relative overflow-hidden mb-4 text-center">
        <motion.h1 
          initial={{ y: 150 }}
          animate={{ y: 0 }}
          transition={{ duration: 1, ease: "circOut" }}
          className="text-5xl md:text-9xl font-black italic tracking-tighter text-white"
        >
          SANA <span className="text-blue-400">TRAVELS</span>
        </motion.h1>
      </div>
      <motion.div 
        initial={{ width: 0 }}
        animate={{ width: "200px" }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="h-[1px] bg-white"
      />
    </motion.div>
  );
};

// 2. PARALLAX REVEAL
const ParallaxSection = ({ children }) => {
  const sectionRef = useRef(null);
  useEffect(() => {
    gsap.fromTo(sectionRef.current, 
      { y: 100, opacity: 0, scale: 0.95 }, 
      { 
        y: 0, opacity: 1, scale: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
          end: "top 50%",
          scrub: 1,
        }
      }
    );
  }, []);
  return <div ref={sectionRef} className="will-change-transform">{children}</div>;
};

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Smooth Scroll (Lenis)
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    const timer = setTimeout(() => setLoading(false), 3000);
    return () => {
      clearTimeout(timer);
      lenis.destroy();
    };
  }, []);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className="bg-[#050505] text-white selection:bg-red-600">
      
      {/* Noise Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <AnimatePresence mode="wait">
        {loading && <Preloader key="loader" />}
      </AnimatePresence>

      <motion.div
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div className="fixed top-0 left-0 right-0 h-1 bg-red-600 z-[9999] origin-left" style={{ scaleX }} />
        
        <Navbar />

        <main className="relative z-10">
          <Hero />
           <ParallaxSection><TrustSection/></ParallaxSection>

          <div className="space-y-32 md:space-y-48 pb-20">
            <ParallaxSection><WhyChooseUs /></ParallaxSection>
            
            <div className="overflow-hidden">
               <LocationMarquee />
            </div>

            <ParallaxSection><Cars /></ParallaxSection>
            <ParallaxSection><VisitingCard /></ParallaxSection>
            <ParallaxSection><BookingSteps /></ParallaxSection>
            <ParallaxSection><Trip /></ParallaxSection>
            <ParallaxSection><PricingSection /></ParallaxSection>
            <ParallaxSection><FAQSection /></ParallaxSection>
            <ParallaxSection><Testimonials /></ParallaxSection>
          </div>
          
          <Footer />
        </main>
      </motion.div>

      {/* Global CSS Overrides */}
      <style dangerouslySetInnerHTML={{ __html: `
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: #050505; }
        ::-webkit-scrollbar-thumb { background: #333; border-radius: 50px; }
        ::-webkit-scrollbar-thumb:hover { background: #ff0000; }
        
        body {
          background: #050505;
          overscroll-behavior: none;
          /* Default cursor restored */
        }
      `}} />
    </div>
  );
};

export default Home;