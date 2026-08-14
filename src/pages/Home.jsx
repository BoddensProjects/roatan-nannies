import React from "react";
import { RouteLink } from "../router.jsx";
import { phrases } from "../data.js";

export default function Home() {
  return (
    <main className="w-full bg-white pt-24">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#FFDFD6]/30 to-white py-16 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="max-w-2xl">
            <span className="block text-sm font-bold tracking-widest text-[#E3A5C7] uppercase mb-4">
              Childcare Where You Need It
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#694F8E] tracking-tight leading-tight mb-6">
              {phrases[0]}
            </h1>
            <p className="text-lg md:text-xl text-[#694F8E]/80 mb-8 leading-relaxed">
              {phrases[1]}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <RouteLink to="/book" className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-[#FFDFD6] bg-[#694F8E] rounded-full hover:bg-[#B692C2] hover:text-white transition-all duration-300 shadow-lg shadow-[#694F8E]/20">
                {phrases[6]}
              </RouteLink>
              <RouteLink to="/pricing" className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-[#694F8E] bg-transparent border-2 border-[#694F8E] rounded-full hover:bg-[#694F8E] hover:text-[#FFDFD6] transition-all duration-300">
                View Rates & Policies
              </RouteLink>
            </div>
            
            <ul className="flex flex-col gap-4">
              {["Hotels, resorts, Airbnbs, villas, and events", "Care for infants through teens", "Bilingual Spanish and English care"].map((point, i) => (
                <li key={i} className="flex items-center gap-3 text-[#694F8E]/90 font-medium">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#FFDFD6]/50 flex items-center justify-center">
                    <span className="material-symbols-rounded text-[#E3A5C7] text-lg">check</span>
                  </div>
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative group">
            {/* Image Placeholder - Ready for your flat 2D vector graphics */}
            <img 
              src="https://www.cadence-education.com/wp-content/uploads/2025/11/finding-right-childcare-option-cadence-education.jpg" 
              alt="Nanny and children on a soft pastel island terrace" 
              className="w-full h-auto object-cover rounded-3xl shadow-2xl shadow-[#B692C2]/30 group-hover:-translate-y-1 transition-transform duration-500" 
            />
          </div>
        </div>
      </section>

      {/* 2. BRAND PHRASE STRIP */}
      <section className="bg-[#694F8E] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-center gap-4 text-[#FFDFD6] font-medium tracking-wide text-sm md:text-base">
          <p>{phrases[2]}</p>
          <span className="hidden md:block opacity-40 text-[#E3A5C7]">•</span>
          <p>{phrases[4]}</p>
          <span className="hidden md:block opacity-40 text-[#E3A5C7]">•</span>
          <p>{phrases[5]}</p>
        </div>
      </section>

      {/* 3. INTRO / MISSION SECTION */}
      <section className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="block text-sm font-bold tracking-widest text-[#E3A5C7] uppercase mb-4">About The Service</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#694F8E] mb-6">Trusted Care, Wherever You Are</h2>
          <p className="text-lg text-[#694F8E]/70 mb-8 leading-relaxed">
            Roatán Nannies is a personalized childcare service for local and visiting families across the island of Roatán. We travel to wherever our clients are staying, allowing parents to enjoy their time with complete peace of mind, knowing their children are in trusted, caring hands.
          </p>
          <RouteLink to="/about" className="inline-flex items-center font-semibold text-[#B692C2] hover:text-[#694F8E] transition-colors">
            Learn more about our team <span className="material-symbols-rounded ml-1 text-xl">arrow_forward</span>
          </RouteLink>
        </div>
      </section>

      {/* 4. ZIG-ZAG SERVICES */}
      <section className="py-20 md:py-32 bg-[#FFDFD6]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-20 md:gap-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 pr-0 lg:pr-12">
              <h3 className="text-3xl font-bold text-[#694F8E] mb-4">Resort, Villa, & In-Room Care</h3>
              <p className="text-lg text-[#694F8E]/80 leading-relaxed mb-6">
                We provide services at hotels, resorts, Airbnbs, private villas, and residences throughout Roatán. Whether you are heading out for a scuba excursion, a romantic dinner, or just need time to relax, we bring safe and engaging care directly to your door.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-[#694F8E]"><span className="material-symbols-rounded text-[#E3A5C7]">pool</span> Resort & Pool Care</li>
                <li className="flex items-center gap-2 text-[#694F8E]"><span className="material-symbols-rounded text-[#E3A5C7]">home</span> Private Villa Services</li>
              </ul>
            </div>
            <div className="order-1 lg:order-2">
              {/* Image Placeholder */}
              <img src="https://nashvillebabyguide.com/wp-content/uploads/2020/02/Beaches1.jpg" alt="Nanny playing with kids" className="w-full h-80 md:h-[450px] object-cover rounded-3xl shadow-2xl shadow-[#B692C2]/20 hover:scale-[1.02] transition-transform duration-500" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-1 lg:order-1">
              {/* Image Placeholder */}
              <img src="https://www.shropshireeventnannies.co.uk/userfiles/blog/Logo/Making-Your-Wedding-Child-Friendly-The-Importance-of-Childcare-11-v3.jpg" alt="Children engaged in fun activities" className="w-full h-80 md:h-[450px] object-cover rounded-3xl shadow-2xl shadow-[#B692C2]/20 hover:scale-[1.02] transition-transform duration-500" />
            </div>
            <div className="order-2 lg:order-2 pl-0 lg:pl-12">
              <h3 className="text-3xl font-bold text-[#694F8E] mb-4">Special Events & Weddings</h3>
              <p className="text-lg text-[#694F8E]/80 leading-relaxed mb-6">
                Destination weddings and island events are beautiful, but they can be long for little ones. We provide dedicated event childcare to manage meals, coordinate activities, and handle bedtime routines so you can celebrate without worry.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-[#694F8E]"><span className="material-symbols-rounded text-[#E3A5C7]">celebration</span> Wedding Childcare</li>
                <li className="flex items-center gap-2 text-[#694F8E]"><span className="material-symbols-rounded text-[#E3A5C7]">restaurant</span> Group Dinner Supervision</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE US / FEATURES */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
            <span className="block text-sm font-bold tracking-widest text-[#E3A5C7] uppercase mb-4">Uncompromising Standards</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#694F8E]">Why Island Parents Trust Us</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="p-8 rounded-3xl bg-white border border-[#FFDFD6] shadow-xl shadow-[#FFDFD6]/50 hover:-translate-y-2 transition-transform duration-300 group">
              <div className="w-14 h-14 rounded-2xl bg-[#FFDFD6]/40 flex items-center justify-center mb-6 group-hover:bg-[#E3A5C7] transition-colors duration-300">
                <span className="material-symbols-rounded text-3xl text-[#694F8E] group-hover:text-white transition-colors duration-300">verified_user</span>
              </div>
              <h3 className="text-xl font-bold text-[#694F8E] mb-3">Safety & Trust</h3>
              <p className="text-[#694F8E]/70 leading-relaxed">We follow clear protocols that protect children, including signed parent agreements and verified emergency contacts.</p>
            </div>
            
            <div className="p-8 rounded-3xl bg-white border border-[#FFDFD6] shadow-xl shadow-[#FFDFD6]/50 hover:-translate-y-2 transition-transform duration-300 group">
              <div className="w-14 h-14 rounded-2xl bg-[#FFDFD6]/40 flex items-center justify-center mb-6 group-hover:bg-[#E3A5C7] transition-colors duration-300">
                <span className="material-symbols-rounded text-3xl text-[#694F8E] group-hover:text-white transition-colors duration-300">child_care</span>
              </div>
              <h3 className="text-xl font-bold text-[#694F8E] mb-3">Professional Caregivers</h3>
              <p className="text-[#694F8E]/70 leading-relaxed">Our team is selected for their real, hands-on experience with children and their commitment to responsibility and genuine care.</p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-[#FFDFD6] shadow-xl shadow-[#FFDFD6]/50 hover:-translate-y-2 transition-transform duration-300 group">
              <div className="w-14 h-14 rounded-2xl bg-[#FFDFD6]/40 flex items-center justify-center mb-6 group-hover:bg-[#E3A5C7] transition-colors duration-300">
                <span className="material-symbols-rounded text-3xl text-[#694F8E] group-hover:text-white transition-colors duration-300">location_on</span>
              </div>
              <h3 className="text-xl font-bold text-[#694F8E] mb-3">Island-Wide Coverage</h3>
              <p className="text-[#694F8E]/70 leading-relaxed">We cover the entire island of Roatán. Best of all, travel to your location is included at no extra charge.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. HOW IT WORKS */}
      <section className="py-20 md:py-32 bg-white border-y border-[#FFDFD6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
            <span className="block text-sm font-bold tracking-widest text-[#E3A5C7] uppercase mb-4">Simple & Seamless</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#694F8E]">How Booking Works</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-[2px] bg-[#FFDFD6]"></div>

            {[
              { 
                num: "01", 
                icon: "edit_document", 
                title: "Submit Request", 
                desc: "Fill out our form with your location, schedule, and child's details. We recommend booking at least 6 hours in advance." 
              },
              { 
                num: "02", 
                icon: "security", 
                title: "Confirm & Secure", 
                desc: "Our team will personally reach out via WhatsApp to confirm your details, answer any questions, and lock in your dates." 
              },
              { 
                num: "03", 
                icon: "sentiment_very_satisfied", 
                title: "Enjoy Your Time", 
                desc: "Your bilingual nanny arrives at your location for a minimum of 3 hours, ready to provide attentive and engaging care." 
              }
             ].map((step, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center text-center p-6 md:p-0">
                <div className="w-24 h-24 rounded-full bg-[#FFDFD6] border-[6px] border-white shadow-lg shadow-[#FFDFD6]/50 flex flex-col items-center justify-center text-[#694F8E] mb-6">
                  <span className="text-sm font-bold opacity-70 mb-1">Step {step.num}</span>
                  <span className="material-symbols-rounded text-3xl">{step.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-[#694F8E] mb-3">{step.title}</h3>
                <p className="text-[#694F8E]/80 leading-relaxed max-w-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS */}
      <section className="py-20 md:py-32 bg-[#FFDFD6]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
            <span className="block text-sm font-bold tracking-widest text-[#E3A5C7] uppercase mb-4">Real Experiences</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#694F8E]">Loved by Families & Travelers</h2>
          </div>
          <div id="featurable-bdca6fe8-c44f-494f-afa5-5b0ed7191786" data-featurable-async ></div><script src="https://cdn.featurable.com/widget/v2/embed.js" defer charset="UTF-8"></script>
          
        </div>
      </section>

      {/* 8. FINAL CTA BANNER */}
      <section className="bg-gradient-to-br from-[#694F8E] to-[#B692C2] py-24 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-[#FFDFD6] mb-6">Ready for Stress-Free Childcare in Roatán?</h2>
          <p className="text-lg md:text-xl text-white/90 mb-10">Fill out our booking form and our team will confirm your reservation shortly.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <RouteLink to="/book" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-[#694F8E] bg-[#FFDFD6] rounded-full hover:bg-white transition-all duration-300 shadow-xl shadow-[#694F8E]/30">
              {phrases[6]}
            </RouteLink>
            <RouteLink to="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-white bg-transparent border-2 border-white/30 rounded-full hover:bg-white/10 transition-all duration-300">
              <span className="material-symbols-rounded text-xl">chat</span> Contact Us
            </RouteLink>
          </div>
        </div>
      </section>
    </main>
  );
}