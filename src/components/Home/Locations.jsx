import React from "react";
import { motion } from "framer-motion";

const locations = [
  "Kodaikanal",
  "Ooty",
  "Madurai",
  "Coimbatore",
  "Rameswaram",
  "Thanjavur",
  "Munnar",
  "Kanyakumari",
  "Pondicherry",
  "Pollachi"
];

const LocationMarquee = () => {
  const duplicated = [...locations, ...locations]; // infinite loop

  return (
    <section className="bg-[#050505] py-16 overflow-hidden border-y border-white/10">

      <div className="relative">

        {/* LEFT FADE */}
        <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-[#050505] to-transparent z-10" />

        {/* RIGHT FADE */}
        <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-[#050505] to-transparent z-10" />

        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{
            duration: 25,
            ease: "linear",
            repeat: Infinity
          }}
          className="flex gap-12 w-max"
        >
          {duplicated.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 text-white/60 hover:text-white transition"
            >
              <span className="text-red-600 text-xl">•</span>
              <span className="text-lg md:text-xl font-semibold tracking-wide whitespace-nowrap">
                {item}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

    </section>
  );
};

export default LocationMarquee;