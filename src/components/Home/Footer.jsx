import React from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
  MessageCircle,
  Heart
} from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#080808] text-white py-24 px-6 md:px-10 border-t border-white/5">

      <div className="max-w-7xl mx-auto">

        {/* 🔥 TOP CTA */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 mb-20">
          
          <div>
            <p className="text-[10px] font-black tracking-[0.4em] text-white/20 uppercase mb-4">
              Start Your Journey
            </p>

            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] uppercase">
              Travel With <br />
              <span className="text-white/20 italic">Comfort.</span>
            </h2>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open("https://wa.me/919344790389")}
            className="flex items-center gap-3 bg-white text-black px-8 py-5 rounded-2xl font-black text-[11px] tracking-[0.2em] uppercase hover:bg-red-600 hover:text-white transition-all"
          >
            Book Now <ArrowUpRight size={18} />
          </motion.button>
        </div>

        {/* 🔥 GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/10 pt-16 pb-16">

          {/* BRAND */}
          <div className="space-y-6">
            <h3 className="text-2xl font-black tracking-tight uppercase">
              Sana <span className="text-blue-500">Travels</span>
            </h3>

            <p className="text-white/40 text-sm leading-relaxed max-w-sm">
              Premium taxi services across Tamil Nadu. Safe rides, professional drivers, and best pricing guaranteed.
            </p>

            {/* TRUST TAGS */}
            <div className="flex gap-4 text-[10px] uppercase font-bold text-white/30">
              <span>Safe</span>
              <span>24/7</span>
              <span>Trusted</span>
            </div>
          </div>

          {/* CONTACT */}
          <div className="space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30">
              Contact
            </h4>

            <div className="space-y-4 text-sm text-white/70">
              <a href="tel:+916381138159" className="flex items-center gap-3 hover:text-white transition">
                <Phone size={16} /> +91 63811 38159
              </a>

              <a href="mailto:Sajakan256@gmail.com " className="flex items-center gap-3 hover:text-white transition">
                <Mail size={16} /> Sajakan256@gmail.com 
              </a>

              <div className="flex items-start gap-3">
                <MapPin size={16} className="mt-1" />
                <p>
                  Ayakudi, Palani <br />
                  Tamil Nadu
                </p>
              </div>
            </div>
          </div>

          {/* CTA / QUICK BOOK */}
          <div className="space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30">
              Quick Booking
            </h4>

            <p className="text-white/40 text-sm">
              Book instantly via WhatsApp. Fast response guaranteed.
            </p>

            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open("https://wa.me/+916381138159")}
              className="w-full flex items-center justify-center gap-3 bg-white text-black py-4 rounded-xl font-black text-[11px] tracking-[0.2em] uppercase hover:bg-red-600 hover:text-white transition-all"
            >
              WhatsApp Now <MessageCircle size={16} />
            </motion.button>
          </div>

        </div>

        {/* 🔥 BOTTOM */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 border-t border-white/5 pt-8 text-center md:text-left">
          
          <p className="text-[10px] text-white/40 uppercase tracking-[0.2em]">
            © {year} Sana Travels
          </p>

          <div className="flex items-center gap-2 text-[10px] text-white/40 uppercase tracking-[0.2em]">
            <span>Made with</span>
            <Heart size={12} className="text-red-600 fill-red-600 animate-pulse" />
            <span>by Code Spark </span>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;