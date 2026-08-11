import React from "react";
import { RouteLink } from "../router.jsx";
import logo from "../assets/logo - Copy.png";

export default function Footer() {
  return (
    <footer className="bg-[#694F8E] text-[#FFDFD6]/80 py-16 md:py-20 text-sm border-t border-[#B692C2]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 mb-16">
          
          {/* 1. BRANDING & ABOUT */}
          <div className="lg:col-span-1 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-6">
              <img src={logo} alt="Roatán Nannies Logo" className="h-10 w-auto" />
              <span className="text-xl font-bold text-[#FFDFD6] tracking-tight">Roatán Nannies</span>
            </div>
            <p className="leading-relaxed mb-6">
              Premium, personalized childcare services for local and visiting families across the beautiful island of Roatán.
            </p>
            
            {/* SOCIAL MEDIA LINKS */}
            <div className="flex gap-4">
              <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#B692C2]/20 flex items-center justify-center text-[#E3A5C7] hover:bg-[#E3A5C7] hover:text-[#694F8E] transition-all" aria-label="Facebook">
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#B692C2]/20 flex items-center justify-center text-[#E3A5C7] hover:bg-[#E3A5C7] hover:text-[#694F8E] transition-all" aria-label="Instagram">
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
            </div>
          </div>
          
          {/* 2. EXPLORE LINKS */}
          <div>
            <h4 className="text-[#FFDFD6] font-bold text-lg mb-6">Explore</h4>
            <ul className="flex flex-col gap-4">
              <li><RouteLink to="/" className="hover:text-[#E3A5C7] transition-colors">Home</RouteLink></li>
              <li><RouteLink to="/about" className="hover:text-[#E3A5C7] transition-colors">About Us</RouteLink></li>
              <li><RouteLink to="/pricing" className="hover:text-[#E3A5C7] transition-colors">Rates & Policies</RouteLink></li>
              <li><RouteLink to="/book" className="hover:text-[#E3A5C7] transition-colors">Book a Nanny</RouteLink></li>
            </ul>
          </div>

          {/* 3. CONTACT INFO */}
          <div>
            <h4 className="text-[#FFDFD6] font-bold text-lg mb-6">Contact Us</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-3">
                <span className="material-symbols-rounded text-[#E3A5C7] text-xl">chat</span>
                <a href="https://wa.me/50433723832" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFDFD6] transition-colors">
                  WhatsApp: +504 3372-3832
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-rounded text-[#E3A5C7] text-xl">mail</span>
                <a href="mailto:contact@roatannannies.com" className="hover:text-[#FFDFD6] transition-colors">
                  contact@roatannannies.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-rounded text-[#E3A5C7] text-xl">location_on</span>
                <span>Roatán, Bay Islands, Honduras</span>
              </li>
            </ul>
          </div>

          {/* 4. SERVICE HOURS & POLICY */}
          <div>
            <h4 className="text-[#FFDFD6] font-bold text-lg mb-6">Service Hours</h4>
            <div className="flex items-center gap-2 mb-4 text-[#FFDFD6]">
              <span className="material-symbols-rounded text-[#E3A5C7] text-xl">schedule</span>
              <p>We provide care 24/7 by appointment.</p>
            </div>
            
            <div className="bg-[#B692C2]/20 rounded-xl p-5 border border-[#B692C2]/30 shadow-inner">
              <div className="flex items-center gap-2 mb-2 text-[#E3A5C7]">
                <span className="material-symbols-rounded text-lg">info</span>
                <p className="font-semibold">Policy Notice:</p>
              </div>
              <ul className="list-disc pl-6 space-y-2 text-[#FFDFD6]/90">
                <li>No new bookings are accepted after 10:00 PM.</li>
                <li>A 3-hour minimum applies to all bookings.</li>
              </ul>
            </div>
          </div>

        </div>
        
        {/* BOTTOM COPYRIGHT ROW */}
        <div className="pt-8 border-t border-[#B692C2]/30 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>&copy; {new Date().getFullYear()} Roatán Nannies. All rights reserved.</p>
          <div className="flex gap-6">
            <RouteLink to="/privacy" className="hover:text-[#E3A5C7] transition-colors">Privacy Policy</RouteLink>
            <RouteLink to="/terms" className="hover:text-[#E3A5C7] transition-colors">Terms of Service</RouteLink>
          </div>
        </div>
      </div>
    </footer>
  );
}