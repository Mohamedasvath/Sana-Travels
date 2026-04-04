import React, { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // ✅ Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ ONLY MAIN SECTIONS
  const navItems = [
    { label: "Home", id: "home" },
    { label: "Trips", id: "trips" },
    { label: "Pricing", id: "pricing" },
    { label: "Contact", id: "contact" },
  ];

  // ✅ SCROLL FUNCTION (PERFECT FOR MOBILE)
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -80; // navbar height adjust
      const y =
        section.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
      setOpen(false); // close mobile menu
    }
  };

  const phoneNumber = "tel:+916381138159";

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-md py-3 border-b border-white/10"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">

        {/* LOGO */}
        <button
          onClick={() => handleScroll("home")}
          className="flex items-center gap-2"
        >
          <div className="w-8 h-8 bg-white flex items-center justify-center rounded-sm">
            <span className="text-black font-black text-xs">S</span>
          </div>
          <div className="text-xl font-bold text-white">
            SANA <span className="text-gray-400 italic">TRAVEL</span>
          </div>
        </button>

        {/* DESKTOP */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className="text-sm text-gray-300 hover:text-white transition"
            >
              {item.label}
            </button>
          ))}

          {/* CALL */}
          <a
            href={phoneNumber}
            className="flex items-center gap-2 px-6 py-2.5 bg-white text-black rounded-full text-sm font-bold hover:bg-gray-200"
          >
            <Phone size={16} />
            Call Now
          </a>
        </div>

        {/* MOBILE MENU BTN */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden bg-black/95 backdrop-blur-xl transition-all duration-300 ${
          open ? "max-h-[400px] py-6" : "max-h-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className="text-lg text-gray-300 hover:text-white"
            >
              {item.label}
            </button>
          ))}

          {/* CALL BUTTON */}
          <a
            href={phoneNumber}
            className="flex items-center gap-2 px-10 py-3 bg-white text-black rounded-full font-bold"
          >
            <Phone size={18} />
            Call Now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;