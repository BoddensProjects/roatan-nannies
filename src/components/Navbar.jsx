import React, { useEffect, useState } from "react";
import { RouteLink } from "../router.jsx";
import logo from "../assets/logo - Copy.png";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 20;
      setIsScrolled(scrolled);

      if (window.scrollY > 50) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Prevent the page from scrolling while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isMobileMenuOpen
          ? "bg-white/80 border-b border-white/50 py-3"
          : isScrolled
          ? "bg-white/40 backdrop-blur-xl border-b border-white/50 shadow-md shadow-[#FFDFD6]/20 py-3"
          : "bg-white/10 backdrop-blur-sm border-b border-transparent py-5"
      }`}
    >
      {/* MAIN NAVBAR */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* LOGO */}
        <RouteLink
          to="/"
          onClick={closeMobileMenu}
          className="flex-shrink-0 flex items-center gap-2 sm:gap-3"
        >
          <img
            src={logo}
            alt="Roatán Nannies Logo"
            className="h-8 sm:h-10 w-auto"
          />

          <span className="text-lg sm:text-xl font-bold text-[#694F8E] tracking-tight">
            Roatán Nannies
          </span>
        </RouteLink>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8">
          <RouteLink
            to="/"
            className="text-sm font-medium text-[#694F8E]/90 hover:text-[#E3A5C7] transition-colors"
          >
            Home
          </RouteLink>

          <RouteLink
            to="/about"
            className="text-sm font-medium text-[#694F8E]/90 hover:text-[#E3A5C7] transition-colors"
          >
            About
          </RouteLink>

          <RouteLink
            to="/pricing"
            className="text-sm font-medium text-[#694F8E]/90 hover:text-[#E3A5C7] transition-colors"
          >
            Rates & Policies
          </RouteLink>

          {/* SAFETY LINK */}
          <RouteLink
            to="/safety"
            className="relative group flex items-center gap-1.5 text-sm font-bold text-white bg-slate-900 px-4 py-1.5 rounded-full border border-slate-700 shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:shadow-[0_0_25px_rgba(59,130,246,0.7)] hover:scale-105 transition-all duration-300"
          >
            <span className="absolute inset-0 rounded-full animate-pulse bg-blue-500 opacity-30 pointer-events-none" />

            <span className="material-symbols-rounded text-base text-blue-400">
              gpp_good
            </span>

            <span className="relative">Safety Protocols</span>
          </RouteLink>

         
        </nav>

        {/* DESKTOP CTA */}
        <div className="hidden md:block">
          <RouteLink
            to="/book"
            className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-[#694F8E] to-[#B692C2] rounded-full hover:from-[#B692C2] hover:to-[#E3A5C7] transition-all duration-300 shadow-lg shadow-[#694F8E]/20"
          >
            Book Now
          </RouteLink>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-[#694F8E] hover:text-[#E3A5C7] transition-colors flex items-center justify-center"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
        >
          <span className="material-symbols-rounded text-3xl">
            {isMobileMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full">
          {/* BACKDROP */}
          <div
            className="fixed inset-0 top-[64px] bg-white/40 backdrop-blur-2xl -z-10"
            onClick={closeMobileMenu}
          />

          {/* MENU CONTENT */}
          <div className="relative bg-white/75 backdrop-blur-2xl border-t border-white/60 shadow-2xl px-4 py-6">
            <nav className="flex flex-col gap-1">
              <RouteLink
                to="/"
                onClick={closeMobileMenu}
                className="block w-full py-3 text-lg font-semibold text-[#694F8E] hover:text-[#E3A5C7] transition-colors"
              >
                Home
              </RouteLink>

              <RouteLink
                to="/about"
                onClick={closeMobileMenu}
                className="block w-full py-3 text-lg font-semibold text-[#694F8E] hover:text-[#E3A5C7] transition-colors"
              >
                About
              </RouteLink>

              <RouteLink
                to="/pricing"
                onClick={closeMobileMenu}
                className="block w-full py-3 text-lg font-semibold text-[#694F8E] hover:text-[#E3A5C7] transition-colors"
              >
                Rates & Policies
              </RouteLink>

              {/* MOBILE SAFETY LINK */}
              <RouteLink
                to="/safety"
                onClick={closeMobileMenu}
                className="relative flex items-center gap-2 text-lg font-bold text-white bg-slate-900 p-3 rounded-xl border border-slate-700 shadow-[0_0_15px_rgba(59,130,246,0.3)] overflow-hidden my-2"
              >
                <span className="absolute inset-0 animate-pulse bg-blue-500 opacity-20 pointer-events-none" />

                <span className="relative material-symbols-rounded text-blue-400">
                  gpp_good
                </span>

                <span className="relative">Safety Protocols</span>
              </RouteLink>

              

              {/* MOBILE CTA */}
              <RouteLink
                to="/book"
                onClick={closeMobileMenu}
                className="block w-full text-center px-6 py-3.5 mt-4 text-base font-semibold text-white bg-gradient-to-r from-[#694F8E] to-[#B692C2] rounded-xl shadow-lg shadow-[#694F8E]/20 hover:from-[#B692C2] hover:to-[#E3A5C7] transition-all duration-300"
              >
                Book Now
              </RouteLink>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}