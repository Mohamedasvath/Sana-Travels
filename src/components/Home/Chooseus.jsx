import React from "react";
import { ShieldCheck, Clock, Users, Car } from "lucide-react";

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: <ShieldCheck size={20} />,
      title: "Safe & Secure",
      desc: "Verified drivers and safe travel for you and your family"
    },
    {
      icon: <Clock size={20} />,
      title: "On-Time Pickup",
      desc: "We value your time. Always punctual service"
    },
    {
      icon: <Users size={20} />,
      title: "Trusted Service",
      desc: "Serving customers across Tamil Nadu with trust"
    },
    {
      icon: <Car size={20} />,
      title: "Clean Vehicles",
      desc: "Well-maintained and hygienic cars for every trip"
    }
  ];

  return (
    <section className="bg-white py-20 px-4 md:px-10 border-t border-gray-100">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT IMAGE */}
        <div>
          <img
            src="https://imgd.aeplcdn.com/642x336/n/c6es93a_1572125.jpg?q=80"
            alt="Taxi Service"
            className="w-full h-[300px] md:h-[420px] object-cover rounded-xl"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <p className="text-xs uppercase tracking-widest text-red-600 font-semibold mb-3">
            Why Choose Us
          </p>

          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
            Reliable Taxi Service in Palani
          </h2>

          <p className="text-gray-500 text-sm mb-8 max-w-md">
            We provide safe, affordable and comfortable taxi services for local
            and outstation trips. Our goal is to make your journey smooth and
            stress-free.
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
            href="tel:+91 63811 38159"
            className="inline-block mt-8 bg-black text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-red-600 transition"
          >
            Call Now to Book
          </a>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;