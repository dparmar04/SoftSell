import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = ['Home', 'About', 'Services', 'Contact'];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-lg border-b border-white/20 text-white">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-3xl flex gap-4 font-bold tracking-wide text-purple-300">
          <img src="/Softsell.png" alt="Softsell Logo" className='w-10 h-10 rounded-2xl' />
          SoftSell
        </div>

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-6 text-lg font-medium">
          {navLinks.map((link) => (
            <li key={link} className="hover:text-purple-300 cursor-pointer transition">
              {link}
            </li>
          ))}
        </ul>

        {/* Mobile menu icon */}
        <div className="md:hidden cursor-pointer" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <ul className="md:hidden px-4 pb-4 space-y-2 text-sm font-medium bg-white/10 backdrop-blur-md text-white">
          {navLinks.map((link) => (
            <li key={link} className="hover:text-purple-300 cursor-pointer transition">
              {link}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
