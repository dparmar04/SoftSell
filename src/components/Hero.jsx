import React, { useRef, useEffect } from "react";
import Navbar from "./Navbar";
import { gsap } from "gsap";
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef([]);

  useEffect(() => {
    if (heroRef.current.length === 2) {
      // Text animations
      gsap.fromTo(heroRef.current.slice(0, 2), {
        opacity: 0,
        y: 80,
      }, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      });
    }
  }, []);


  return (
    <>
      <Navbar />
      <section className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white flex items-center justify-center px-6">
        <div className="max-w-6xl mx-auto ">
          <h1 ref={(el) => (heroRef.current[0] = el)}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight"
          >Stop Wasting Software: <br className="hidden sm:block" />
            Sell Your Unused Licenses with SoftSell
          </h1>
          <p ref={(el) => (heroRef.current[1] = el)} className="mt-6 text-base sm:text-lg md:text-xl max-w-2xl"> Turn idle software into immediate cash. Secure, fast, and hassle-free with SoftSell.</p>
          <button className="mt-8 w-max bg-gradient-to-br from-[#ae7de8] to-[#947be4] text-black px-6 py-3 rounded-md font-semibold text-lg md:text-xl flex items-center gap-2 group hover:scale-105 transition-all duration-300"
          > Get a Quote
            <ArrowRight className="transform -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 ease-out" />

          </button>
        </div>
      </section>
    </>
  );
};
export default Hero;