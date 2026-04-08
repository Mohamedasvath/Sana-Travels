import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Download, Share2, Globe, Star, User } from "lucide-react";

const VisitingCard = () => {
  const contactInfo = {
    name: "Sana Travels",
    owner: "Sajakan",
    phone1: "+916381138159",
    email: "sanatravels@gmail.com",
    address: "Ayakudi, Palani, Tamil Nadu"
  };

  const handleDownload = () => {
    const vCardData = `BEGIN:VCARD\nVERSION:3.0\nFN:${contactInfo.name}\nORG:${contactInfo.name}\nTEL:${contactInfo.phone1}\nTEL:${contactInfo.phone2}\nEMAIL:${contactInfo.email}\nADR:${contactInfo.address}\nEND:VCARD`;
    const blob = new Blob([vCardData], { type: "text/vcard" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "SanaTravels.vcf";
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const handleShare = async () => {
    const shareData = {
      title: "Sana Travels",
      text: "Book your cab easily with Sana Travels 🚖",
      url: window.location.href
    };
    try {
      if (navigator.share) await navigator.share(shareData);
      else {
        navigator.clipboard.writeText(shareData.url);
        alert("Link copied!");
      }
    } catch (err) { console.log(err); }
  };

  return (
    <section className="bg-white py-24 px-6 md:px-12 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gray-50 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT TEXT (Apple Style Minimalism) */}
        <div className="text-center lg:text-left space-y-6">
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-red-600 font-bold tracking-[0.4em] uppercase text-[10px] block"
          >
            Digital Identity
          </motion.p>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter bg-black leading-[0.9] uppercase italic">
            Save Our <br />
            <span className="text-gray-200 not-italic">Contact.</span>
          </h2 >
          <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest max-w-sm mx-auto lg:mx-0 leading-loose">
            Instant access to call, WhatsApp, and bookings. Share our details across all travel networks.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-6">
            <button
              onClick={handleDownload}
              className="bg-black text-white px-8 py-4 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-red-600 transition-colors"
            >
              <Download size={16} /> Get Contact
            </button>
            <button
              onClick={handleShare}
              className="bg-gray-50 border border-gray-100 text-black px-8 py-4 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-gray-100 transition-colors"
            >
              <Share2 size={16} /> Share Card
            </button>
          </div>
        </div>

        {/* RIGHT CARD (Modern Glassmorphism) */}
        <div className="flex justify-center perspective-[1500px] relative">
          
          {/* Decorative Floating Car Image */}
          <motion.img 
             initial={{ opacity: 0, scale: 0.9, x: 100 }}
             whileInView={{ opacity: 1, scale: 1, x: 0 }}
             transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
             src=""
             className="absolute -right-16 md:-right-24 bottom-20 w-56 md:w-80 h-auto object-contain drop-shadow-2xl z-20 pointer-events-none"
             
          />

          <motion.div
            whileHover={{ rotateY: 8, rotateX: -5, y: -10 }}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="w-full max-w-[480px] h-[300px] md:h-[320px] rounded-[32px] p-8 shadow-2xl relative overflow-hidden flex flex-col justify-between"
            style={{
              backdropFilter: "blur(20px) saturate(180%)",
              WebkitBackdropFilter: "blur(20px) saturate(180%)",
              background: "linear-gradient(135deg, rgba(10, 10, 10, 1) 0%, rgba(30, 30, 30, 1) 100%)",
              border: "2px solid rgba(255, 255, 255, 0.04)"
            }}
          >
            {/* BACKGROUND IMAGE OVERLAY */}
            <div className="absolute inset-0 opacity-[0.15] grayscale pointer-events-none">
                <img 
                  src="https://www.driveaway.in/gallery/innova-crysta-ZX-3.webp" 
                  className="w-full h-full object-cover"
                  alt="Background Map"
                />
            </div>

            {/* TOP AREA */}
            <div className="relative z-10 flex justify-between items-start">
              <div>
                <div className="flex items-center gap-1 text-[10px] font-black uppercase tracking-widest text-gray-500 mb-2">
                  <Star size={12} className="text-red-600 fill-red-600" /> Top Rated 2026
                </div>
                <h3 className="text-3xl font-black uppercase tracking-tighter italic">
                  Sana <span className="text-gray-200">Travels</span>
                </h3>
              </div>
              <div className="p-3 bg-red-600 text-white rounded-2xl shadow-xl shadow-red-600/20">
                <Globe size={18} />
              </div>
            </div>

            {/* CONTACT AREA */}
            <div className="relative z-10 grid grid-cols-2 gap-x-6 gap-y-4 pt-10 border-t border-gray-100/5 mt-auto">
                <a href={`tel:${contactInfo.phone1}`} className="flex items-center gap-3 text-white hover:text-red-500">
                  <div className="p-2.5 bg-gray-100/5 rounded-xl border border-gray-100/10"> <Phone size={14} /> </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest">{contactInfo.phone1}</span>
                </a>
                <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-3 text-white hover:text-red-500 overflow-hidden">
                  <div className="p-2.5 bg-gray-100/5 rounded-xl border border-gray-100/10"> <Mail size={14} /> </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest truncate">{contactInfo.email}</span>
                </a>
                <div className="flex items-center gap-3 text-white col-span-2">
                  <div className="p-2.5 bg-gray-100/5 rounded-xl border border-gray-100/10 shrink-0"> <MapPin size={14} /> </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 truncate">{contactInfo.address}</span>
                </div>
            </div>

            {/* Subtle Text Watermark */}
            <div className="absolute -left-10 -bottom-10 text-[100px] font-black italic tracking-tighter text-white/5 uppercase select-none pointer-events-none">
              Palani
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default VisitingCard;