import React from "react";
import { ShieldCheck, Clock, Users, Car } from "lucide-react";

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: <ShieldCheck size={20} />,
      title: "Safe & Secure",
      desc: "Verified drivers and safe travel for you and your family in Palani"
    },
    {
      icon: <Clock size={20} />,
      title: "On-Time Pickup",
      desc: "We provide punctual taxi service in Palani with fast pickup"
    },
    {
      icon: <Users size={20} />,
      title: "Trusted Service",
      desc: "Trusted tours and travels service across Palani and Tamil Nadu"
    },
    {
      icon: <Car size={20} />,
      title: "Clean Vehicles",
      desc: "Clean and well-maintained cars for every Palani taxi trip"
    }
  ];

  return (
    <section
      className="bg-white py-20 px-4 md:px-10 border-t border-gray-100"
      aria-label="Why choose Sana Travels Palani taxi service"
    >
      {/* ✅ Hidden SEO Heading */}
      <h2 className="sr-only">
        Why Sana Travels is the best taxi service in Palani
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT IMAGE */}
        <div>
          <img
            src="https://imgd.aeplcdn.com/642x336/n/c6es93a_1572125.jpg?q=80"
            alt="Sana Travels Palani taxi service clean cars and safe travel"
            className="w-full h-[300px] md:h-[420px] object-cover rounded-xl"
            loading="lazy"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <p className="text-xs uppercase tracking-widest text-red-600 font-semibold mb-3">
            Why Choose Us
          </p>

          {/* ✅ SEO Heading */}
          <h3 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
            Best Taxi Service in Palani - Sana Travels
          </h3>

          <p className="text-gray-500 text-sm mb-8 max-w-md">
            Sana Travels provides safe, affordable and comfortable taxi service in Palani.
            Book 24/7 cab service, tours and travels, airport taxi and local trips
            with trusted drivers and clean vehicles.
          </p>

          {/* BENEFITS */}
          <div className="grid grid-cols-2 gap-4">
            {benefits.map((item, i) => (
              <div key={i} className="flex gap-3">
                <div className="text-red-600">{item.icon}</div>
                <div>
                  <h4 className="text-sm font-semibold">{item.title}</h4>
                  <p className="text-xs text-gray-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <a
            href="tel:+916381138159"
            aria-label="Call Sana Travels Palani taxi booking"
            className="inline-block mt-8 bg-black text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-red-600 transition"
          >
            Call Now to Book Taxi in Palani
          </a>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;