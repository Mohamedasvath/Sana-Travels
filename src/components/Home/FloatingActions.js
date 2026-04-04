import React from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";

const FloatingActions = () => {
  const phoneNumber = "6381138159";
  const whatsappNumber = "916381138159"; // Include country code for WA

  const buttonVariants = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    hover: { scale: 1.1, transition: { type: "spring", stiffness: 400, damping: 10 } },
    tap: { scale: 0.9 },
  };

  return (
    <div className="fixed bottom-8 right-6 md:right-10 z-[5000] flex flex-col gap-4">
      
      {/* WhatsApp Button */}
      <motion.a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        variants={buttonVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
        whileTap="tap"
        className="group relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-[#25D366] text-white rounded-2xl shadow-[0_10px_30px_rgba(37,211,102,0.3)] border border-white/20"
      >
        <MessageCircle size={28} fill="currentColor" />
        {/* Tooltip */}
        <span className="absolute right-20 bg-white text-black text-xs font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
          WhatsApp Us
        </span>
      </motion.a>

      {/* Call Button */}
      <motion.a
        href={`tel:+91${phoneNumber}`}
        variants={buttonVariants}
        initial="initial"
        animate="animate"
        transition={{ delay: 0.1 }}
        whileHover="hover"
        whileTap="tap"
        className="group relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-red-600 text-white rounded-2xl shadow-[0_10px_30px_rgba(220,38,38,0.3)] border border-white/20"
      >
        <Phone size={28} fill="currentColor" />
        
        {/* Pulse Effect for Call */}
        <span className="absolute inset-0 rounded-2xl bg-red-600 animate-ping opacity-20 pointer-events-none" />

        {/* Tooltip */}
        <span className="absolute right-20 bg-white text-black text-xs font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
          Call Now
        </span>
      </motion.a>

    </div>
  );
};

export default FloatingActions;