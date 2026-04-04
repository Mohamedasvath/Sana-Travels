import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useMotionValue,
  animate
} from "framer-motion";
import { MapPin, ArrowRight, Clock, Star, Zap } from "lucide-react";

const trips = [
  { id: 1, place: "Kodaikanal", subtitle: "Hill Station Trip", distance: "115 KM", time: "3.5 Hrs", price: "₹4000", rating: "4.9", image: "https://kodaikanaltourism.co.in/images/v2/packages/kodaikanal-climate-header.jpg" },
  { id: 2, place: "Madurai", subtitle: "Temple City Tour", distance: "120 KM", time: "2.5 Hrs", price: "₹4500", rating: "4.8", image: "https://i.ytimg.com/vi/uGHfjT_ny8Q/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBAXXTOZ-qL7kRBiQvNeuTGRHrkcA" },
  { id: 3, place: "Coimbatore", subtitle: "City Ride", distance: "110 KM", time: "2.5 Hrs", price: "₹4500", rating: "4.7", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx0Yn6tgDsA8zHN1f6020IPq2zvdjG2D1x4A&s" },
  { id: 4, place: "Ooty", subtitle: "Hill Escape", distance: "220 KM", time: "6 Hrs", price: "₹6500", rating: "4.9", image: "https://static.wixstatic.com/media/012323_7be29c92ca6d459b95df381c072f09d5~mv2.jpg/v1/fill/w_568,h_320,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/012323_7be29c92ca6d459b95df381c072f09d5~mv2.jpg" },
    { id: 5, place: "Dindigul", subtitle: "Higway Ride", distance: "60 KM", time: "6 Hrs", price: "₹2500", rating: "4.9", image: "https://i0.wp.com/aravindgundumane.com/wp-content/uploads/2023/01/Middle-section-of-the-fort.jpg?resize=1140%2C760&ssl=1" },
      { id: 5, place: "Trichy", subtitle: "Higway Ride", distance: "170 KM", time: "6 Hrs", price: "₹6000", rating: "4.9", image: "https://bharathconstructions.com/wp-content/uploads/2024/07/trichy-new-airport-bharath-flat.webp" },
];

const Trip = () => {
  const x = useMotionValue(0);
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  const duplicated = [...trips, ...trips];

  useEffect(() => {
    let controls;

    const startAuto = () => {
      const width = containerRef.current.scrollWidth / 2;

      controls = animate(x, [x.get(), -width], {
        duration: 25,
        ease: "linear",
        repeat: Infinity,
        onUpdate: (latest) => {
          if (latest <= -width) {
            x.set(0);
          }
        }
      });
    };

    if (!isDragging) startAuto();

    return () => controls && controls.stop();
  }, [isDragging, x]);

  const handleBooking = (place) => {
    const msg = encodeURIComponent(
      `Hi Sana Travels, I want to book a trip to ${place}`
    );
    window.open(`https://wa.me/919344790389?text=${msg}`);
  };

  return (
    <section className="bg-black text-white py-28 px-6 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="mb-16">
          <span className="text-red-500 text-xs tracking-widest uppercase flex items-center gap-2 mb-4">
            <Zap size={14} /> Premium Trips
          </span>

          <h2 className="text-4xl md:text-6xl font-extrabold">
            Explore Top Destinations
          </h2>
        </div>

        {/* CAROUSEL */}
        <div className="relative overflow-hidden">

          {/* GRADIENT EDGES */}
          <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-black to-transparent z-10" />

          <motion.div
            ref={containerRef}
            style={{ x }}
            drag="x"
            dragConstraints={{ left: -1000, right: 0 }}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={() => setIsDragging(false)}
            className="flex gap-6 cursor-grab active:cursor-grabbing"
          >
            {duplicated.map((trip, i) => (
              <div
                key={i}
                className="min-w-[280px] md:min-w-[320px] h-[420px] rounded-[30px] overflow-hidden relative group border border-white/10"
              >
                {/* IMAGE */}
                <img
                  src={trip.image}
                  alt={trip.place}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

                {/* CONTENT */}
                <div className="relative p-6 flex flex-col justify-end h-full">

                  <div className="flex justify-between mb-3">
                    <span className="bg-white text-black px-3 py-1 rounded-full text-xs font-bold">
                      {trip.price}
                    </span>

                    <span className="bg-red-600 px-2 py-1 text-xs rounded-full flex items-center gap-1">
                      <Star size={12} /> {trip.rating}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold">{trip.place}</h3>
                  <p className="text-sm text-gray-400 mb-3">{trip.subtitle}</p>

                  <div className="flex gap-4 text-xs text-gray-300 mb-4">
                    <span className="flex items-center gap-1">
                      <MapPin size={12} /> {trip.distance}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} /> {trip.time}
                    </span>
                  </div>

                  <button
                    onClick={() => handleBooking(trip.place)}
                    className="bg-white text-black py-3 rounded-full text-sm font-bold flex items-center justify-center gap-2 hover:bg-red-600 hover:text-white transition"
                  >
                    Book Now <ArrowRight size={16} />
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