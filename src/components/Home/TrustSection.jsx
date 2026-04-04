import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useSpring, useMotionValue } from "framer-motion";
import { ShieldCheck, Users, MapPin, Star, ArrowUpRight } from "lucide-react";

// Simplified Counter for speed and clarity
const Counter = ({ value, decimals = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { stiffness: 60, damping: 20 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (isInView) motionValue.set(value);
  }, [isInView, value, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      setDisplay(latest.toFixed(decimals));
    });
  }, [springValue, decimals]);

  return <span ref={ref}>{display}</span>;
};

const TrustSection = () => {
  const stats = [
    { label: "Active Clients", value: 5, suffix: "K+", icon: <Users size={16} /> },
    { label: "Kilometers", value: 120, suffix: "K+", icon: <MapPin size={16} /> },
    { label: "Expert Pilots", value: 50, suffix: "+", icon: <ShieldCheck size={16} /> },
    { label: "Client Rating", value: 4.9, suffix: "/5", icon: <Star size={16} />, decimals: 1 },
  ];

  return (
    <section className="bg-white text-black py-20 md:py-32 px-6 border-y border-gray-100">
      <div className="max-w-6xl mx-auto">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-8 h-[2px] bg-red-600"></span>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-red-600">Our Impact</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-none">
              TRUSTED BY <br /> THOUSANDS.
            </h2>
          </div>
          <p className="max-w-xs text-gray-400 text-[11px] font-bold uppercase tracking-widest leading-relaxed">
            Delivering excellence across Tamil Nadu since 2014 with a focus on safety and luxury.
          </p>
        </div>

        {/* STATS ROW */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-4 divide-x-0 md:divide-x border-gray-100">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="md:px-8 space-y-4 group cursor-default"
            >
              <div className="text-gray-300 group-hover:text-red-600 transition-colors duration-500">
                {stat.icon}
              </div>
              
              <div className="space-y-1">
                <h4 className="text-4xl md:text-5xl font-black tracking-tighter flex items-baseline">
                  <Counter value={stat.value} decimals={stat.decimals} />
                  <span className="text-sm font-bold text-red-600 ml-1">{stat.suffix}</span>
                </h4>
                <p className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-400">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* MINI CTA BAR */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-24 pt-10 border-t border-gray-50 flex flex-wrap justify-between items-center gap-6"
        >
          <div className="flex gap-10">
            {["Premium Fleet", "24/7 Support", "Verified"].map((item) => (
              <span key={item} className="text-[8px] font-black uppercase tracking-widest text-gray-300">
                // {item}
              </span>
            ))}
          </div>
          
          <button className="flex items-center gap-2 group text-[10px] font-black uppercase tracking-widest border-b border-black pb-1 hover:text-red-600 hover:border-red-600 transition-all">
            See Our Fleet <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default TrustSection;