import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useMotionValue,
  animate
} from "framer-motion";
import { MapPin, ArrowRight, Clock, Star, Zap } from "lucide-react";

const trips = [
  { id: 1, place: "Kodaikanal", subtitle: "Hill Station Trip", distance: "115 KM", time: "3.5 Hrs", price: "₹4000", rating: "4.9", image: "https://kodaikanaltourism.co.in/images/v2/packages/kodaikanal-climate-header.jpg" },
  { id: 2, place: "Madurai", subtitle: "Temple City Tour", distance: "120 KM", time: "2.5 Hrs", price: "₹4500", rating: "4.8", image: "https://i.ytimg.com/vi/uGHfjT_ny8Q/hq720.jpg" },
  { id: 3, place: "Coimbatore", subtitle: "City Ride", distance: "110 KM", time: "2.5 Hrs", price: "₹4500", rating: "4.7", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx0Yn6tgDsA8zHN1f6020IPq2zvdjG2D1x4A&s" },
  { id: 4, place: "Ooty", subtitle: "Hill Escape", distance: "220 KM", time: "6 Hrs", price: "₹6500", rating: "4.9", image: "https://static.wixstatic.com/media/012323_7be29c92ca6d459b95df381c072f09d5~mv2.jpg" },
  { id: 5, place: "Dindigul", subtitle: "Highway Ride", distance: "60 KM", time: "1.5 Hrs", price: "₹2500", rating: "4.6", image: "https://i0.wp.com/aravindgundumane.com/wp-content/uploads/2023/01/Middle-section-of-the-fort.jpg" },
  { id: 6, place: "Trichy", subtitle: "Temple Visit", distance: "170 KM", time: "4 Hrs", price: "₹6000", rating: "4.8", image: "https://bharathconstructions.com/wp-content/uploads/2024/07/trichy-new-airport-bharath-flat.webp" },
];

const Trip = () => {
  const x = useMotionValue(0);
  const containerRef = useRef(null);
  const [width, setWidth] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const duplicated = [...trips, ...trips];

  useEffect(() => {
    if (containerRef.current) {
      setWidth(containerRef.current.scrollWidth / 2);
    }
  }, []);

  useEffect(() => {
    let controls;
    if (!isDragging && width > 0) {
      controls = animate(x, [x.get(), -width], {
        ease: "linear",
        duration: 30,
        repeat: Infinity,
        repeatType: "loop"
      });
    }
    return () => controls && controls.stop();
  }, [isDragging, width]);

  useEffect(() => {
    const unsubscribe = x.on("change", (latest) => {
      if (latest <= -width) x.set(0);
      if (latest > 0) x.set(-width);
    });
    return () => unsubscribe();
  }, [width]);

  const handleBooking = (place) => {
    const msg = encodeURIComponent(
      `Hi Sana Travels Palani, I want to book a taxi trip from Palani to ${place}`
    );
    window.open(`https://wa.me/916381138159?text=${msg}`);
  };

  return (
    <section
      className="bg-black text-white py-24 px-4 md:px-10 overflow-hidden"
      aria-label="Sana Travels Palani taxi trips to Kodaikanal Madurai Coimbatore Ooty"
    >
      {/* ✅ Hidden SEO Heading */}
      <h2 className="sr-only">
        Taxi service from Palani to Kodaikanal, Madurai, Coimbatore, Ooty and nearby cities
      </h2>

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="mb-12">
          <span className="text-red-500 text-xs tracking-widest uppercase flex items-center gap-2 mb-3">
            <Zap size={14} /> Premium Trips
          </span>

          {/* ✅ SEO Heading */}
          <h3 className="text-3xl md:text-5xl font-extrabold">
            Top Taxi Routes from Palani
          </h3>
        </div>

        {/* CAROUSEL */}
        <div className="relative overflow-hidden">

          <div className="absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-black to-transparent z-10" />

          <motion.div
            ref={containerRef}
            style={{ x }}
            drag="x"
            dragConstraints={{ left: -width, right: 0 }}
            dragElastic={0.05}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={() => setIsDragging(false)}
            className="flex gap-5 cursor-grab active:cursor-grabbing"
          >
            {duplicated.map((trip, i) => (
              <div
                key={i}
                className="min-w-[260px] md:min-w-[300px] h-[400px] rounded-[25px] overflow-hidden relative group border border-white/10"
              >
                {/* IMAGE */}
                <img
                  src={trip.image}
                  alt={`Taxi service from Palani to ${trip.place} - Sana Travels`}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

                {/* CONTENT */}
                <div className="relative p-5 flex flex-col justify-end h-full">

                  <div className="flex justify-between mb-2">
                    <span className="bg-white text-black px-3 py-1 rounded-full text-xs font-bold">
                      {trip.price}
                    </span>

                    <span className="bg-red-600 px-2 py-1 text-xs rounded-full flex items-center gap-1">
                      <Star size={12} /> {trip.rating}
                    </span>
                  </div>

                  <h4 className="text-xl font-bold">
                    {trip.place} Taxi
                  </h4>

                  <p className="text-xs text-gray-400 mb-2">
                    Taxi service from Palani to {trip.place}
                  </p>

                  <div className="flex gap-3 text-[10px] text-gray-300 mb-3">
                    <span className="flex items-center gap-1">
                      <MapPin size={10} /> {trip.distance}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={10} /> {trip.time}
                    </span>
                  </div>

                  <button
                    aria-label={`Book taxi from Palani to ${trip.place}`}
                    onClick={() => handleBooking(trip.place)}
                    className="bg-white text-black py-2 rounded-full text-xs font-bold flex items-center justify-center gap-2 hover:bg-red-600 hover:text-white transition"
                  >
                    Book Taxi <ArrowRight size={14} />
                  </button>

                </div>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Trip;