import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

const steps = [
  { title: "Upload License", desc: "Securely upload details of your unused software licenses to start the process." },
  { title: "Get Valuation", desc: "Our experts provide a fast, fair market valuation based on current demand." },
  { title: "Get Paid", desc: "Accept your offer and receive payment quickly with no hassle." },
];

gsap.registerPlugin(ScrollTrigger);

const HowItWorks = () => {
  const cardsRef = useRef([]);

  const stepCardsAnimation = (cardsRef) => {
    gsap.fromTo(cardsRef.current, {
      y: 50,
      opacity: 0,
    }, {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.3,
      scrollTrigger: {
        trigger: cardsRef.current[0],
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  };
  useEffect(() => {
    stepCardsAnimation(cardsRef);
  }, []);

  return (

    <section className="px-4 sm:px-10 py-20 md:py-32 font-montserrat text-white bg-gradient-to-br from-[#1a2a6c] via-[#b21f1f] to-[#fdbb2d] bg-[length:400%_400%] backdrop-blur-md">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-12 text-center">
        How It Works: 3 Easy Steps
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {steps.map((step, i) => (
          <div
            key={i}
            ref={(el) => (cardsRef.current[i] = el)}
            className="bg-[#48345e5b] bg-opacity-10 backdrop-blur-sm p-6 rounded-2xl shadow-md text-left transition-transform duration-300 hover:scale-105"
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-3">{step.title}</h3>
            <p className="text-sm sm:text-base">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
};

export default HowItWorks;