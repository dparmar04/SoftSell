import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import { TrendingUp, ShieldCheck, Clock, SearchCheck } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const reasons = [
  {
    icon: <TrendingUp className="w-6 h-6 " />,
    title: "Maximize Returns",
    desc: "Get 20% higher returns by selling your software licenses at the best market value.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 " />,
    title: "Secure and Compliant",
    desc: "All transactions are GDPR and CCPA compliant, ensuring full legal and data security.",
  },
  {
    icon: <Clock className="w-6 h-6 " />,
    title: "Fast and Easy",
    desc: "Experience a streamlined process with a 72-hour turnaround from upload to payment.",
  },
  {
    icon: <SearchCheck className="w-6 h-6 " />,
    title: "Expert Valuation",
    desc: "We value over $10M in licenses annually using real-time market data.",
  },
];

const whyChooseUsAnimation = (itemsRef) => {
  gsap.fromTo(itemsRef.current, {
    scale: 0.8,
    opacity: 0,
  }, {
    scale: 1,
    opacity: 1,
    duration: 0.8,
    stagger: 0.2,
    ease: "back.out(1.7)",
    scrollTrigger: {
      trigger: itemsRef.current[0],
      start: "top 80%",
    },
  });
};

const WhyChooseUs = () => {
  const itemsRef = useRef([]);

  useEffect(() => {
    whyChooseUsAnimation(itemsRef);
  }, []);
  return (

    <section className="px-4 sm:px-8 md:px-20 py-20 bg-[#0f0c26] text-white">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-12 text-center">
        Why Choose SoftSell?
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
        {reasons.map((reason, i) => (
          <div
            key={i}
            ref={(el) => (itemsRef.current[i] = el)}
            className="relative flex flex-col sm:flex-row items-start sm:items-center gap-4 p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 transition duration-300 overflow-hidden group"
          >
            {/* Glow effect */}
            <div className="absolute w-24 h-24 sm:w-32 sm:h-32 blur-2xl bg-[#5e2dbb] opacity-0 group-hover:opacity-40 rounded-full bottom-[-20px] right-[-20px] transition-all duration-500 pointer-events-none" />

            {/* Icon */}
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#5e2dbb] text-white rounded-md flex items-center justify-center text-xl z-10 shrink-0">
              {reason.icon}
            </div>

            {/* Content */}
            <div className="z-10 text-left sm:text-left">
              <h3 className="text-lg sm:text-xl font-semibold mb-1">{reason.title}</h3>
              <p className="text-sm sm:text-base text-gray-300">{reason.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
