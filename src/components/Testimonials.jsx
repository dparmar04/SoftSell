import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "Alice Johnson",
    role: "CTO",
    company: "FintechPro",
    quote: "SoftSell made it incredibly easy to offload our unused licenses. Super smooth!",
  },
  {
    name: "David Lee",
    role: "IT Manager",
    company: "CloudNova",
    quote: "Best platform for software resales. Quick valuations and great support.",
  },
];
const testimonialsAnimation = (refs) => {
  gsap.fromTo(refs.current, {
    opacity: 0,
    y: 40,
  }, {
    opacity: 1,
    y: 0,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
      trigger: refs.current[0],
      start: "top 80%",
    },
  });
};

const Testimonials = () => {
  const refs = useRef([]);

  useEffect(() => {
    testimonialsAnimation(refs);
  }, []);

  return (
    <section className="py-16 px-6 sm:px-8 md:px-20 bg-[#0b0f2a] text-white">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-12 text-center">
        What Our Customers Say
      </h2>
      <div className="flex flex-col md:flex-row gap-8 md:gap-10 max-w-6xl mx-auto">
        {testimonials.map((t, i) => (
          <div
            key={i}
            ref={(el) => (refs.current[i] = el)}
            className="bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg p-6 sm:p-8 rounded-2xl transition hover:shadow-xl w-full"
          >
            <p className="text-base sm:text-lg italic leading-relaxed">“{t.quote}”</p>
            <div className="mt-6">
              <p className="font-semibold text-white">{t.name}</p>
              <p className="text-sm text-gray-400">{t.role}, {t.company}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
