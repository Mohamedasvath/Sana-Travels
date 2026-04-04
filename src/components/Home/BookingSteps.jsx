import React from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, CheckCircle } from "lucide-react";

const steps = [
  {
    id: "01",
    icon: <Phone size={22} />,
    title: "Call & Book",
    desc: "Call us and share your trip details."
  },
  {
    id: "02",
    icon: <MapPin size={22} />,
    title: "Get Confirmation",
    desc: "Driver & vehicle details will be shared quickly."
  },
  {
    id: "03",
    icon: <CheckCircle size={22} />,
    title: "Enjoy Your Ride",
    desc: "Safe and smooth journey. Pay after trip."
  }
];

const BookingSteps = () => {
  const phoneNumber = "6381138159";

  return (
    <section className="bg-white py-20 px-6 md:px-16">

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">
          <p className="text-red-600 text-xs font-semibold uppercase tracking-widest mb-3">
            Booking Process
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Book Your Ride in 3 Steps
          </h2>
        </div>

        {/* STEPS */}
        <div className="grid md:grid-cols-3 gap-8">

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="text-center p-6 border bg-black border-gray-100 rounded-2xl hover:shadow-md transition"
            >
              {/* ICON */}
              <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-full bg-red-50 text-red-600 mb-4">
                {step.icon}
              </div>

              {/* NUMBER */}
              <p className="text-sm text-gray-400 mb-2">{step.id}</p>

              {/* TITLE */}
              <h3 className="text-lg font-semibold mb-2">
                {step.title}
              </h3>

              {/* DESC */}
              <p className="text-gray-500 text-sm">
                {step.desc}
              </p>
            </motion.div>
          ))}

        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <button
            onClick={() => window.location.href = `tel:+91${phoneNumber}`}
            className="bg-red-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-black transition"
          >
            Call Now
          </button>
        </div>

      </div>
    </section>
  );
};

export default BookingSteps;