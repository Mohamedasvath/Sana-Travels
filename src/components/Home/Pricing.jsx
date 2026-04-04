import React from "react";
import { motion } from "framer-motion";
import { 
  CheckCircle2, AlertCircle, Zap, ArrowRight, 
  Navigation, ShieldCheck, Fuel, Users 
} from "lucide-react";

const pricingData = [
  {
    category: "Standard Comfort",
    models: "Swift / Dzire",
    price: "12",
    minKm: "250",
    beta: "300",
    isPopular: false,
    desc: "Efficient & compact for city commutes."
  },
  {
    category: "Family Executive",
    models: "Ertiga / Kia Carens",
    price: "16",
    minKm: "300",
    beta: "500",
    isPopular: true,
    desc: "Spacious luxury for group adventures."
  },
  {
    category: "Luxury Elite",
    models: "Innova Crysta",
    price: "22",
    minKm: "300",
    beta: "600",
    isPopular: false,
    desc: "The gold standard of premium travel."
  }
];

const PricingSection = () => {
  return (
    <section className="bg-white text-black py-24 px-6 md:px-12 relative overflow-hidden">
      
      {/* BACKGROUND ACCENT */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-red-50 rounded-full blur-[120px] opacity-60 -z-10" />
      
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-red-600 font-black tracking-[0.4em] uppercase text-[10px] block mb-3"
            >
              Fixed Tariffs
            </motion.span>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] uppercase">
              Premium <br />
              <span className="text-gray-200 font-outline-2">Fare Chart</span>
            </h2>
          </div>
          <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest max-w-[220px] text-left md:text-right">
            *Kilometre charges calculated from garage to garage.
          </p>
        </div>

        {/* PRICING GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingData.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -12 }}
              className={`relative group p-10 rounded-[40px] border transition-all duration-500 overflow-hidden ${
                item.isPopular
                  ? "bg-[#050505] text-white border-black shadow-2xl shadow-black/20"
                  : "bg-white border-gray-100 hover:border-red-200 shadow-sm"
              }`}
            >
              {/* POPULAR BADGE */}
              {item.isPopular && (
                <div className="absolute top-6 right-6 bg-red-600 text-white p-3 rounded-2xl rotate-12 shadow-lg">
                  <Zap size={16} fill="white" />
                </div>
              )}

              {/* CARD TITLE */}
              <div className="mb-8">
                <span className={`text-[10px] font-black uppercase tracking-[0.2em] ${item.isPopular ? "text-red-500" : "text-gray-400"}`}>
                  {item.category}
                </span>
                <h3 className="text-3xl font-black tracking-tight mt-1 group-hover:text-red-600 transition-colors">
                  {item.models}
                </h3>
                <p className="text-[11px] font-medium opacity-60 mt-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* PRICE AREA */}
              <div className="flex items-baseline gap-1 mb-8 border-y border-current/10 py-6">
                <span className="text-6xl font-black italic tracking-tighter">₹{item.price}</span>
                <span className="text-xs font-bold uppercase opacity-40">/ KM</span>
              </div>

              {/* HIGHLIGHTS */}
              <div className="space-y-4 mb-10">
                {[
                  { icon: <Navigation size={14} />, text: `Min. ${item.minKm} KM/Day` },
                  { icon: <Users size={14} />, text: `Driver Beta: ₹${item.beta}` },
                  { icon: <ShieldCheck size={14} />, text: "Professional Drivers" },
                  { icon: <Fuel size={14} />, text: "Fuel Included" }
                ].map((spec, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-wide">
                    <span className="text-red-600">{spec.icon}</span>
                    <span className="opacity-70 group-hover:opacity-100">{spec.text}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
             <button
  onClick={() => window.location.href = "tel:+916381138159"}
  className={`w-full py-5 rounded-[20px] font-black uppercase text-[10px] tracking-[0.2em] flex items-center justify-center gap-3 transition-all ${
    item.isPopular
      ? "bg-red-600 text-white hover:bg-white hover:text-black"
      : "bg-black text-white hover:bg-red-600"
  }`}
>
  Book <ArrowRight size={14} />
</button>
            </motion.div>
          ))}
        </div>

        {/* FOOTER INFO BAR */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 p-8 rounded-[35px] bg-gray-50 border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex items-center gap-5">
            <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-red-600">
               <AlertCircle size={24} />
            </div>
            <div>
               <h5 className="text-[12px] font-black uppercase tracking-widest">Pricing Policy</h5>
               <p className="text-[10px] font-bold text-gray-400">Toll, Parking & State Permits are calculated extra based on your route.</p>
            </div>
          </div>
          
          <div className="flex gap-10">
             {["24/7 Support", "GPS Tracked", "Verified Fleet"].map((info, idx) => (
               <div key={idx} className="text-center">
                 <p className="text-xl font-black uppercase tracking-tighter italic">YES</p>
                 <p className="text-[8px] font-black uppercase text-red-600 tracking-widest">{info}</p>
               </div>
             ))}
          </div>
        </motion.div>

      </div>

      <style jsx>{`
        .font-outline-2 {
          -webkit-text-stroke: 1px #e5e7eb;
          color: transparent;
        }
      `}</style>
    </section>
  );
};

export default PricingSection