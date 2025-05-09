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
    <section className="py-30 p-20 text-left bg-[#0b0f2a] px-5 md:px-20 text-white">
      <h2 className="text-4xl md:text-5xl font-light mb-10 text-white">What Our Customers Say</h2>
      <div className="flex flex-col md:flex-row justify-center gap-10 max-w-6xl mx-auto px-4">
        {testimonials.map((t, i) => (
          <div
            key={i}
            ref={(el) => (refs.current[i] = el)}
            className="bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg p-8 rounded-2xl transition hover:shadow-xl w-full md:w-1/2"
          >
            <p className="text-lg text-white italic leading-relaxed">“{t.quote}”</p>
            <div className="mt-6">
              <p className="font-semibold text-white text-base">{t.name}</p>
              <p className="text-sm text-gray-500">{t.role}, {t.company}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
