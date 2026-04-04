import React, { useState, useEffect } from "react";
import { Star } from "lucide-react";

const defaultReviews = [
  { id: 1, name: "Arjun", place: "Palani", comment: "Very clean car and on-time pickup. Smooth trip.", rating: 5 },
  { id: 2, name: "Deepika", place: "Madurai", comment: "Safe driving and comfortable journey with family.", rating: 5 },
  { id: 3, name: "Suresh", place: "Coimbatore", comment: "No hidden charges. Trustable service.", rating: 5 }
];

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("sana_reviews");
    setReviews(saved ? JSON.parse(saved) : defaultReviews);
  }, []);

  return (
    <section className="bg-white py-20 px-4 md:px-10 border-t border-gray-100">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-widest text-red-600 font-bold">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mt-2">
            What Our Customers Say
          </h2>
          <p className="text-gray-500 text-sm mt-3">
            Trusted by hundreds of happy customers across Tamil Nadu
          </p>
        </div>

        {/* REVIEWS */}
        <div className="
          flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory
          md:grid md:grid-cols-3 md:gap-6 md:overflow-visible
        ">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="
                min-w-[85%] snap-center
                md:min-w-0
                bg-white border border-gray-100
                p-5 rounded-xl
              "
            >
              {/* STARS */}
              <div className="flex gap-1 mb-2">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={14} className="text-yellow-500 fill-yellow-500" />
                ))}
              </div>

              {/* COMMENT */}
              <p className="text-sm text-gray-600 mb-4">
                "{review.comment}"
              </p>

              {/* USER */}
              <div className="border-t pt-3">
                <p className="text-sm font-semibold">{review.name}</p>
                <p className="text-xs text-gray-400">{review.place}</p>
              </div>
            </div>
          ))}
        </div>

        {/* TRUST LINE */}
        <div className="text-center mt-10">
          <p className="text-xs text-gray-400">
            ⭐ 4.9 Rating • 2000+ Happy Customers • 24/7 Service
          </p>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;