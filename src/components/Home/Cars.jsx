import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Users, ShieldCheck, Zap, Info, Star } from "lucide-react";

const cars = [
  { id: 2, category: "5 Seater", name: "Toyota Glanza", price: "14", img: "https://media.zigcdn.com/media/model/2026/Mar/toyotaglanza_600x400.jpg", tag: "Premium Hatch" },
  { id: 3, category: "6 Seater", name: "Maruti Ertiga", price: "16", img: "https://imgd.aeplcdn.com/642x336/n/c6es93a_1572125.jpg?q=80", tag: "Family Choice" },
  { id: 4, category: "7 Seater", name: "Kia Carens", price: "18", img: "https://etimg.etb2bimg.com/photo/88893428.cms", tag: "Luxury MUV" },
  { id: 5, category: "7 Seater", name: "Innova Crysta", price: "22", img: "https://imgd.aeplcdn.com/1920x1080/n/cw/ec/140809/innova-crysta-exterior-front-view.jpeg?isig=0&q=80", tag: "The King" },

  // ✅ 14 SEATER SEPARATE
  { id: 6, category: "14 Seater", name: "Tempo Traveller", price: "28", img: "https://www.simplytrip.in/images/tempo-traveller-banners.webp", tag: "Group Travel" }
];

const CarSelector = () => {
  const [activeTab, setActiveTab] = useState("5 Seater");

  const phoneNumber = "6381138159";

  const filteredCars = cars.filter(car => car.category === activeTab);

  return (
    <section className="bg-[#050505] text-white py-24 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row justify-between mb-16 gap-8">

          <div>
            <p className="text-red-600 text-xs tracking-widest mb-3">Elite Fleet</p>
            <h2 className="text-4xl md:text-6xl font-bold">
              Choose Your Ride
            </h2>
          </div>

          {/* ✅ TABS UPDATED */}
          <div className="flex flex-wrap gap-2 bg-[#0f0f0f] p-2 rounded-xl">
            {["5 Seater", "6 Seater", "7 Seater", "14 Seater"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-lg text-xs font-bold transition ${
                  activeTab === tab
                    ? "bg-red-600 text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
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
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="bg-[#0a0a0a] rounded-2xl p-6 border border-white/10 flex flex-col md:flex-row gap-6"
              >

                {/* IMAGE */}
                <div className="flex justify-center w-full md:w-1/2">
                  <img
                    src={car.img}
                    alt={car.name}
                    className="w-full max-w-[250px] h-40 object-contain"
                  />
                </div>

                {/* INFO */}
                <div className="w-full md:w-1/2 space-y-4">

                  <div className="flex justify-between">
                    <span className="text-red-500 text-xs">{car.tag}</span>
                    <span className="font-bold">₹{car.price}/KM</span>
                  </div>

                  <h3 className="text-xl font-bold">{car.name}</h3>

                  <div className="flex gap-4 text-xs text-gray-400">
                    <span className="flex items-center gap-1">
                      <Users size={12}/> {car.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <ShieldCheck size={12}/> Insured
                    </span>
                  </div>

                  {/* BUTTON */}
                  <button
                    onClick={() => window.location.href = `tel:+91${phoneNumber}`}
                    className="w-full bg-white text-black py-3 rounded-lg text-sm font-bold hover:bg-red-600 hover:text-white transition"
                  >
                    <Phone size={14} className="inline mr-2"/> Book Now
                  </button>

                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* FOOTER */}
        <div className="mt-10 flex justify-center gap-6 text-xs text-gray-400">
          <span className="flex items-center gap-2"><Zap size={12}/> Fast</span>
          <span className="flex items-center gap-2"><Info size={12}/> Transparent</span>
          <span className="flex items-center gap-2"><Star size={12}/> No Hidden</span>
        </div>

      </div>
    </section>
  );
};

export default CarSelector;