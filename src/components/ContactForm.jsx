import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const contactFormAnimation = (formRef, panelRef) => {
  gsap.fromTo(formRef.current, {
    x: -100,
    opacity: 0,
  }, {
    x: 0,
    opacity: 1,
    duration: 1,
    scrollTrigger: {
      trigger: formRef.current,
      start: "top 80%",
    },
  });

  gsap.fromTo(panelRef.current, {
    x: 100,
    opacity: 0,
  },
    {
      x: 0,
      opacity: 1,
      duration: 1,
      delay: 0.3,
      scrollTrigger: {
        trigger: panelRef.current,
        start: "top 80%",
      },
    });
};

const ContactForm = () => {
  const formRef = useRef(null);
  const panelRef = useRef(null);

  useEffect(() => {
    contactFormAnimation(formRef, panelRef);
  }, []);
  const [formData, setFormData] = useState({ name: '', email: '', company: '', licenseType: '', message: '' });
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill all required fields.");
      return;
    }
    setError('');
    alert("Form submitted!");
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] p-4">
      <div className="w-full max-w-5xl flex flex-col md:flex-row bg-white/5 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden border border-white/10">
        {/* Form Panel */}
        <form ref={formRef} onSubmit={handleSubmit} className="flex-1 p-10 space-y-5 text-white">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <input
            placeholder="Name*"
            onChange={e => setFormData({ ...formData, name: e.target.value })}
            className="w-full p-3 rounded-xl bg-white/10 placeholder-white/70 text-white focus:ring-1 outline-none"
          />
          <input
            placeholder="Email*"
            type="email"
            onChange={e => setFormData({ ...formData, email: e.target.value })}
            className="w-full p-3 rounded-xl bg-white/10 placeholder-white/70 text-white focus:ring-2 outline-none"
          />
          <input
            placeholder="Company"
            onChange={e => setFormData({ ...formData, company: e.target.value })}
            className="w-full p-3 rounded-xl bg-white/10 placeholder-white/70 text-white focus:ring-2 outline-none"
          />
          <select
            onChange={e => setFormData({ ...formData, licenseType: e.target.value })}
            className="w-full p-3 rounded-xl bg-white/10 text-white placeholder-white/70 focus:ring-2 outline-none"
          >
            <option value="" className="bg-[#46426b]">Select License Type</option>
            <option value="Office" className="bg-[#46426b]">Microsoft Office</option>
            <option value="Adobe" className="bg-[#46426b]">Adobe Suite</option>
            <option value="Other" className="bg-[#46426b]">Other</option>
          </select>
          <textarea
            placeholder="Message*"
            onChange={e => setFormData({ ...formData, message: e.target.value })}
            className="w-full p-3 h-28 rounded-xl bg-white/10 placeholder-white/70 text-white focus:ring-2 outline-none resize-none"
          />
          {error && <p className="text-red-400 text-sm">{error}</p>}
          <div className="flex items-center justify-between">
            <label className="text-sm flex items-center gap-2">
              <input type="checkbox" className="accent-white" /> Remember me
            </label>
            <a href="#" className="text-sm text-white hover:underline">Forget password?</a>
          </div>
          <button type="submit" className="mt-6 bg-gradient-to-br from-[#ae7de8] to-[#947be4] text-black px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition text-xl cursor-pointer">
            Send Message
          </button>
        </form>

        {/* Right Panel */}
        <div ref={panelRef} className="hidden md:flex flex-1 flex-col items-center justify-center text-center p-10 text-white bg-gradient-to-b from-green-500/20 to-blue-500/30">
          <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
          <p className="text-white/80">Create Your High-Level Cloud Network Service!</p>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
