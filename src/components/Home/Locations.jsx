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
  const duplicated = [...locations, ...locations];

  return (
    <section className="relative py-20 bg-white overflow-hidden border-y border-gray-200">

      {/* SOFT BACKGROUND GLOW */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-red-100 blur-[120px] opacity-40" />

      <div className="relative">

        {/* LEFT FADE */}
        <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10" />

        {/* RIGHT FADE */}
        <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10" />

        {/* MARQUEE */}
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity
          }}
          className="flex gap-16 w-max"
        >
          {duplicated.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1, y: -4 }}
              className="flex items-center gap-4 group cursor-pointer"
            >
              {/* DOT */}
              <span className="w-2 h-2 rounded-full bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.6)] group-hover:scale-125 transition" />

              {/* TEXT */}
              <span className="text-lg md:text-xl font-semibold text-gray-600 group-hover:text-black transition-all tracking-wide whitespace-nowrap">
                {item}
              </span>

              {/* UNDERLINE HOVER */}
              <div className="absolute mt-8 h-[2px] w-0 bg-red-500 group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LocationMarquee;