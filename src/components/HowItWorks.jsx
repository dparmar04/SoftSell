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

    <section className="p-20 py-40 font-montserrat text-left bg-gradient-to-br from-[#1a2a6c] via-[#b21f1f] to-[#fdbb2d] bg-[length:400%_400%] backdrop-blur-md text-white">
      <h2 className="text-4xl md:text-5xl font-light mb-8 text-white">How It Works: 3 Easy Steps</h2>
      <div className="flex flex-col md:flex-row justify-center gap-10">
        {steps.map((step, i) => (
          <div key={i} ref={(el) => (cardsRef.current[i] = el)} className="w-11/12 max-w-5xl py-10 rounded-2xl text-center">
            <h3 className="text-xl font-semibold mb-4 text-left">{step.title}</h3>
            <div className="text-md text-left">{step.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
};

export default HowItWorks;