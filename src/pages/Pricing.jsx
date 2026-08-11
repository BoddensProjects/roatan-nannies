import React from "react";
import { prices } from "../data.js";
import { RouteLink } from "../router.jsx";

export default function Pricing() {
  return (
    <main className="w-full bg-white">
      {/* 1. CUSTOM HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-[#694F8E] overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-[#B692C2] opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 rounded-full bg-[#E3A5C7] opacity-20 blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#B692C2]/20 text-[#FFDFD6] text-sm font-bold tracking-widest uppercase mb-8 border border-[#B692C2]/30">
            <span className="material-symbols-rounded text-lg">sell</span>
            Simple Rates
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-[#FFDFD6] tracking-tight leading-tight mb-8 max-w-4xl mx-auto">
            Clear hourly pricing, with a three-hour minimum.
          </h1>
          <p className="text-xl md:text-2xl text-[#FFDFD6]/80 max-w-3xl mx-auto leading-relaxed">
            Secure your dates easily and enjoy your time on the island, knowing your children are in safe hands.
          </p>
        </div>
      </section>

      {/* 2. PRICING GRID */}
      <section className="py-20 md:py-32 bg-[#FFDFD6]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
            <span className="block text-sm font-bold tracking-widest text-[#E3A5C7] uppercase mb-4">Our Service Rates</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#694F8E] mb-6">Transparent pricing. No hidden fees.</h2>
            <p className="text-lg text-[#694F8E]/80">Enjoy premium island childcare with straightforward rates and no travel fees for standard bookings.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 items-stretch">
            {prices.map((item, idx) => (
              <article 
                key={idx}
                className={`relative flex flex-col p-8 md:p-10 rounded-[2rem] transition-all duration-300 hover:-translate-y-2 ${
                  item.featured 
                    ? "bg-white border-2 border-[#E3A5C7] shadow-2xl shadow-[#E3A5C7]/20 z-10 scale-100 lg:scale-105" 
                    : "bg-white border border-[#FFDFD6] shadow-lg shadow-[#FFDFD6]/50"
                }`}
              >
                {item.featured && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-[#E3A5C7] text-white text-xs font-bold uppercase tracking-widest py-1.5 px-4 rounded-full shadow-md">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-[#694F8E] mb-2">{item.title}</h3>
                  <p className="text-[#B692C2] font-medium mb-6">{item.time}</p>
                  <div className="flex items-center justify-center text-[#694F8E]">
                    <span className="text-5xl font-extrabold">{item.price}</span>
                    <span className="text-lg text-[#694F8E]/60 ml-2 self-end mb-1">/hour</span>
                  </div>
                </div>

                <div className="mt-auto pt-8 border-t border-[#FFDFD6]/50">
                  <RouteLink 
                    to="/book" 
                    className={`w-full inline-flex items-center justify-center px-6 py-4 rounded-full font-bold transition-colors ${
                      item.featured 
                        ? "bg-[#694F8E] text-[#FFDFD6] hover:bg-[#B692C2] hover:text-white" 
                        : "bg-[#FFDFD6]/30 text-[#694F8E] hover:bg-[#FFDFD6] hover:text-[#694F8E]"
                    }`}
                  >
                    Select Plan
                  </RouteLink>
                </div>
              </article>
            ))}
          </div>
          
          <div className="mt-16 max-w-2xl mx-auto bg-[#FFDFD6]/30 rounded-2xl p-6 text-center border border-[#FFDFD6]/50 flex items-start gap-4">
            <span className="material-symbols-rounded text-[#E3A5C7] text-2xl flex-shrink-0">info</span>
            <p className="text-[#694F8E]/80 text-sm md:text-base leading-relaxed text-left">
              <strong className="text-[#694F8E]">Note:</strong> Short-notice bookings made within the six-hour advance window may include an additional fee and are subject to availability.
            </p>
          </div>
        </div>
      </section>

      {/* 3. INCLUDED VALUE & LOGISTICS */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
            <span className="block text-sm font-bold tracking-widest text-[#E3A5C7] uppercase mb-4">What's Included</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#694F8E]">Clear Policies, Zero Surprises</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-[#FFDFD6]/10 p-8 rounded-3xl border border-[#FFDFD6]/50 hover:shadow-xl hover:shadow-[#FFDFD6]/30 transition-shadow duration-300 text-center">
              <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center shadow-sm mb-6 border border-[#FFDFD6]">
                <span className="material-symbols-rounded text-[#E3A5C7] text-3xl">map</span>
              </div>
              <h3 className="text-xl font-bold text-[#694F8E] mb-4">Island-Wide Travel Included</h3>
              <p className="text-[#694F8E]/80 leading-relaxed">
                We cover the entire island of Roatán. Travel to your hotel, resort, or villa is included at no extra charge (except for short-notice bookings).
              </p>
            </div>
            
            <div className="bg-[#FFDFD6]/10 p-8 rounded-3xl border border-[#FFDFD6]/50 hover:shadow-xl hover:shadow-[#FFDFD6]/30 transition-shadow duration-300 text-center">
              <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center shadow-sm mb-6 border border-[#FFDFD6]">
                <span className="material-symbols-rounded text-[#E3A5C7] text-3xl">diversity_1</span>
              </div>
              <h3 className="text-xl font-bold text-[#694F8E] mb-4">Up to 3 Children</h3>
              <p className="text-[#694F8E]/80 leading-relaxed">
                For safety and quality of care, one nanny can care for up to three children per booking at the standard hourly rate.
              </p>
            </div>
            
            <div className="bg-[#FFDFD6]/10 p-8 rounded-3xl border border-[#FFDFD6]/50 hover:shadow-xl hover:shadow-[#FFDFD6]/30 transition-shadow duration-300 text-center">
              <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center shadow-sm mb-6 border border-[#FFDFD6]">
                <span className="material-symbols-rounded text-[#E3A5C7] text-3xl">payments</span>
              </div>
              <h3 className="text-xl font-bold text-[#694F8E] mb-4">Flexible Payments</h3>
              <p className="text-[#694F8E]/80 leading-relaxed">
                Payments can be settled easily via cash or local bank transfer at the end of your service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SAFETY POLICY CALLOUT */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto bg-[#694F8E] rounded-[3rem] p-10 md:p-16 shadow-2xl overflow-hidden relative">
          {/* Abstract vector shape placeholder */}
          <div className="absolute -right-20 -top-20 opacity-10">
            <span className="material-symbols-rounded text-[20rem] text-[#FFDFD6]">shield</span>
          </div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-2/3">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-rounded text-[#E3A5C7] text-3xl">security</span>
                <h2 className="text-3xl md:text-4xl font-bold text-[#FFDFD6]">Evening & Overnight Safety Policy</h2>
              </div>
              <p className="text-lg text-[#FFDFD6]/80 leading-relaxed mb-6">
                To protect our staff from traveling alone to unfamiliar locations late at night, <strong className="text-white">we do not send a nanny to begin a new booking after 10:00 p.m.</strong>
              </p>
              <p className="text-lg text-[#FFDFD6]/80 leading-relaxed">
                However, if your booking begins before 10:00 p.m., your nanny is more than happy to stay and continue care through the night as needed.
              </p>
            </div>
            
            <div className="md:w-1/3 flex justify-center">
              <div className="w-32 h-32 rounded-full bg-[#B692C2]/30 flex items-center justify-center border-4 border-[#E3A5C7]/50 shadow-inner">
                <span className="material-symbols-rounded text-6xl text-[#E3A5C7]">nightlight</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PRICING & LOGISTICS FAQ */}
      <section className="py-20 md:py-32 bg-[#FFDFD6]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="block text-sm font-bold tracking-widest text-[#E3A5C7] uppercase mb-4">Got Questions?</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#694F8E]">Frequent Questions</h2>
          </div>
          
          <div className="space-y-6">
            <details className="group bg-white p-6 md:p-8 rounded-3xl border border-[#FFDFD6] shadow-sm cursor-pointer [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between font-bold text-xl text-[#694F8E]">
                <span>Can I book a recurring schedule?</span>
                <span className="material-symbols-rounded text-[#E3A5C7] transition-transform duration-300 group-open:rotate-180">expand_more</span>
              </summary>
              <p className="mt-6 text-[#694F8E]/80 leading-relaxed text-lg">
                Yes, we are happy to arrange recurring bookings for families who need ongoing support. Please contact us to discuss your specific needs.
              </p>
            </details>

            <details className="group bg-white p-6 md:p-8 rounded-3xl border border-[#FFDFD6] shadow-sm cursor-pointer [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between font-bold text-xl text-[#694F8E]">
                <span>What is the minimum booking time?</span>
                <span className="material-symbols-rounded text-[#E3A5C7] transition-transform duration-300 group-open:rotate-180">expand_more</span>
              </summary>
              <p className="mt-6 text-[#694F8E]/80 leading-relaxed text-lg">
                All bookings have a three-hour minimum to ensure we can provide meaningful, engaging care for your children while giving you ample time to relax.
              </p>
            </details>

            <details className="group bg-white p-6 md:p-8 rounded-3xl border border-[#FFDFD6] shadow-sm cursor-pointer [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between font-bold text-xl text-[#694F8E]">
                <span>What happens if I need to extend the booking?</span>
                <span className="material-symbols-rounded text-[#E3A5C7] transition-transform duration-300 group-open:rotate-180">expand_more</span>
              </summary>
              <p className="mt-6 text-[#694F8E]/80 leading-relaxed text-lg">
                Extension requests must be communicated with at least three hours of notice before the end of the scheduled booking. If notice is given in time and the nanny is available, we will confirm the extended time and rate with you directly.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* 6. CTA BANNER */}
      <section className="py-24 px-4 bg-white border-t border-[#FFDFD6]/50">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#B692C2] to-[#694F8E] rounded-[3rem] p-12 md:p-20 text-center shadow-xl shadow-[#694F8E]/20">
          <h2 className="text-3xl md:text-5xl font-bold text-[#FFDFD6] mb-8">Ready to secure your dates?</h2>
          <RouteLink to="/book" className="inline-flex items-center justify-center gap-2 px-10 py-5 text-lg font-bold text-[#694F8E] bg-[#FFDFD6] rounded-full hover:scale-105 hover:bg-white transition-all duration-300 shadow-xl shadow-[#694F8E]/40">
            Request a Booking <span className="material-symbols-rounded">arrow_forward</span>
          </RouteLink>
        </div>
      </section>
    </main>
  );
}