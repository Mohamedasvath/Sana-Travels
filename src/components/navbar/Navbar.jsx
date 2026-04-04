import React, { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [];

  // 📞 Your phone number
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
        <a href="#" className="group flex items-center gap-2">
          <div className="w-8 h-8 bg-white flex items-center justify-center rounded-sm group-hover:rotate-12 transition-transform">
            <span className="text-black font-black text-xs">S</span>
          </div>
          <div className="text-xl font-bold tracking-tighter text-white">
            SANA <span className="text-gray-400 font-light italic">TRAVELS</span>
          </div>
        </a>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative text-sm font-medium text-gray-300 hover:text-white transition-colors group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* CALL BUTTON */}
          <a
            href={phoneNumber}
            className="flex items-center gap-2 px-6 py-2.5 bg-white text-black rounded-full text-sm font-bold hover:bg-gray-200 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-white/5"
          >
            <Phone size={16} />
            Call Now
          </a>
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 overflow-hidden transition-all duration-300 ${
          open ? "max-h-[500px] opacity-100 py-8" : "max-h-0 opacity-0 py-0"
        }`}
      >
        <div className="flex flex-col items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-lg font-medium text-gray-300 hover:text-white"
            >
              {item.label}
            </a>
          ))}

          {/* MOBILE CALL BUTTON */}
          <a
            href={phoneNumber}
            className="flex items-center justify-center gap-2 mt-4 px-10 py-3 bg-white text-black rounded-full font-bold w-[80%]"
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