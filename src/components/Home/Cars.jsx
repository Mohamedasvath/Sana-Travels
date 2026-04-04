import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Users, ShieldCheck, Zap, Info, Star } from "lucide-react";

const cars = [
  { id: 2, category: "5 Seater", name: "Toyota Glanza", price: "14", img: "https://media.zigcdn.com/media/model/2026/Mar/toyotaglanza_600x400.jpg", tag: "Premium Hatch", accent: "#3b82f6" },
  { id: 3, category: "6 Seater", name: "Maruti Ertiga", price: "16", img: "https://imgd.aeplcdn.com/642x336/n/c6es93a_1572125.jpg?q=80", tag: "Family Choice", accent: "#9ca3af" },
  { id: 4, category: "6 Seater", name: "Kia Carens", price: "18", img: "https://etimg.etb2bimg.com/photo/88893428.cms", tag: "Luxury MUV", accent: "#1e3a8a" },
  { id: 5, category: "7 Seater", name: "Innova Crysta", price: "22", img: "https://imgd.aeplcdn.com/1920x1080/n/cw/ec/140809/innova-crysta-exterior-front-view.jpeg?isig=0&q=80&q=80", tag: "The King", accent: "#ef4444" },
  { id: 6, category: "7 Seater", name: "Prime Traveller", price: "28", img: "https://www.simplytrip.in/images/tempo-traveller-banners.webp", tag: "Group Travel", accent: "#facc15" }
];

const CarSelector = () => {
  const [activeTab, setActiveTab] = useState("5 Seater");

  const filteredCars = cars.filter(car => car.category === activeTab);

  // ✅ FIXED NUMBER
  const phoneNumber = "6381138159";

  return (
    <section className="bg-[#050505] text-white py-24 px-4 md:px-10 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-[1px] bg-red-600" />
              <span className="text-red-600 font-black tracking-[0.4em] uppercase text-[9px]">Elite Fleet</span>
            </div>
            <h3 className="text-5xl md:text-8xl font-black tracking-tighter uppercase italic leading-[0.8]">
              Select Your <br /> <span className="text-white/10 not-italic">Ride.</span>
            </h3>
          </div>
          
          {/* TABS */}
          <div className="flex bg-[#0f0f0f] p-1.5 rounded-[20px] border border-white/5 self-start">
            {["5 Seater", "6 Seater", "7 Seater"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-6 py-3 rounded-[15px] text-[10px] font-black tracking-widest uppercase transition-all duration-500 z-10 ${
                  activeTab === tab ? "text-white" : "text-white/30 hover:text-white"
                }`}
              >
                {activeTab === tab && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute inset-0 bg-red-600 rounded-[15px] -z-10"
                  />
                )}
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* CAR GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="wait">
            {filteredCars.map((car) => (
              <motion.div
                key={car.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="group relative bg-[#0a0a0a] rounded-[40px] p-8 border border-white/5 flex flex-col md:flex-row items-center gap-8"
              >

                {/* IMAGE */}
                <div className="w-full md:w-1/2 flex justify-center">
                  <motion.img 
                    whileHover={{ scale: 1.1 }}
                    src={car.img} 
                    alt={car.name} 
                    className="w-full max-w-[280px] h-40 object-contain"
                  />
                </div>

                {/* INFO */}
                <div className="w-full md:w-1/2 space-y-6">
                  
                  <div className="flex justify-between">
                    <span className="text-[8px] text-red-600">{car.tag}</span>
                    <p className="text-xl font-bold">₹{car.price}/KM</p>
                  </div>

                  <h4 className="text-2xl font-bold">{car.name}</h4>

                  <div className="flex gap-4 text-xs opacity-60">
                    <span className="flex items-center gap-1">
                      <Users size={12}/> {car.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <ShieldCheck size={12}/> Insured
                    </span>
                  </div>

                  {/* ACTION */}
                  <div className="flex gap-2">

                    {/* 🔥 BOOK NOW = CALL */}
                    <button 
                      onClick={() => window.location.href = `tel:+91${phoneNumber}`}
                      className="flex-1 bg-white text-black py-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2 hover:bg-red-600 hover:text-white transition-all"
                    >
                      <Phone size={14} /> Book Now
                    </button>

                    {/* CALL ICON */}
                    <a 
                      href={`tel:+91${phoneNumber}`}
                      className="w-14 bg-white/10 rounded-xl flex items-center justify-center"
                    >
                      <Phone size={16} />
                    </a>

                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* FOOTER */}
        <div className="mt-12 flex justify-center gap-6 text-xs opacity-40">
          <div className="flex items-center gap-2"><Zap size={12}/> Fast</div>
          <div className="flex items-center gap-2"><Info size={12}/> Transparent</div>
          <div className="flex items-center gap-2"><Star size={12}/> No Hidden</div>
        </div>

      </div>
    </section>
  );
};

export default CarSelector;