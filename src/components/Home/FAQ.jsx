import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Is there any advance booking fee?",
    answer:
      "No, we don’t collect any advance. You can pay after completing your journey."
  },
  {
    question: "Are toll and parking charges included?",
    answer:
      "No, tolls, parking, and permits are charged separately as per actuals."
  },
  {
    question: "Do you provide 24/7 service?",
    answer:
      "Yes, we operate 24/7. For night trips, booking in advance is recommended."
  },
  {
    question: "What if the trip exceeds estimated time?",
    answer:
      "Charges are based on actual distance. Driver allowance applies for long trips."
  }
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="bg-black text-white py-20 px-4 md:px-8 border-t border-white/10">

      <div className="max-w-3xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-widest text-red-500 font-semibold">
            FAQ
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Frequently Asked Questions
          </h2>
          <p className="text-white/50 text-sm mt-3">
            Quick answers before you book your ride
          </p>
        </div>

        {/* FAQ LIST */}
        <div className="divide-y divide-white/10">
          {faqs.map((faq, i) => {
            const isOpen = activeIndex === i;

            return (
              <div key={i} className="py-5">

                {/* QUESTION */}
                <button
                  onClick={() => setActiveIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between text-left"
                >
                  <h3 className="text-sm md:text-base font-medium">
                    {faq.question}
                  </h3>

                  <div className="ml-4">
                    {isOpen ? (
                      <Minus size={18} className="text-red-500" />
                    ) : (
                      <Plus size={18} className="text-white/60" />
                    )}
                  </div>
                </button>

                {/* ANSWER */}
                {isOpen && (
                  <div className="mt-3 text-white/60 text-sm leading-relaxed pr-6">
                    {faq.answer}
                  </div>
                )}

              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-white/40 text-sm mb-3">
            Still need help?
          </p>

          <div className="flex justify-center gap-3 flex-wrap">
            <a
              href="tel:6381138159"
              className="bg-white text-black px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-red-600 hover:text-white transition"
            >
              Call Us
            </a>

            <button
              onClick={() =>
                window.open("https://wa.me/+916381138159")
              }
              className="border border-white/20 px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-white hover:text-black transition"
            >
              WhatsApp
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FAQSection;