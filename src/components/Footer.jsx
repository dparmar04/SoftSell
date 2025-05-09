import React from "react";
import { Facebook, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] text-white px-6 py-12 font-montserrat">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
        {/* Brand Info */}
        <div className="flex-1">
          <h3 className="text-2xl font-bold mb-2">SoftSell</h3>
          <p className="text-sm text-gray-200 max-w-xs">
            Your trusted partner in unlocking the full value of unused software licenses.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex-1">
          <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">How It Works</a></li>
            <li><a href="#" className="hover:underline">Get a Quote</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Contact / Social */}
        <div className="flex-1">
          <h4 className="text-lg font-semibold mb-2">Get in Touch</h4>
          <p className="text-sm text-gray-200">support@aoftsell.com</p>
          <div className="flex gap-4 mt-4">
            <a href="#"><Facebook className="w-5 h-5 hover:text-[#4267B2]" /></a>
            <a href="#"><Twitter className="w-5 h-5 hover:text-[#1DA1F2]" /></a>
            <a href="#"><Linkedin className="w-5 h-5 hover:text-[#0077B5]" /></a>
            <a href="#"><Mail className="w-5 h-5 hover:text-[#EA4335]" /></a>
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-gray-300 mt-10 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} SoftSell. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;