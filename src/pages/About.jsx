import React from "react";
import { RouteLink } from "../router.jsx"; 
import marissaImg from "../assets/marissa.png";

export default function About() {
  return (
    <main className="w-full bg-white">
      {/* 1. CUSTOM HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-[#694F8E] overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-[#B692C2] opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 rounded-full bg-[#E3A5C7] opacity-20 blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#B692C2]/20 text-[#FFDFD6] text-sm font-bold tracking-widest uppercase mb-8 border border-[#B692C2]/30">
            <span className="material-symbols-rounded text-lg">stars</span>
            Our Mission
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-[#FFDFD6] tracking-tight leading-tight mb-8 max-w-4xl mx-auto">
            A safe, reliable, and personalized childcare experience.
          </h1>
          <p className="text-xl md:text-2xl text-[#FFDFD6]/80 max-w-3xl mx-auto leading-relaxed">
            Offering the certainty that your children are in the hands of someone trustworthy, warm, and genuinely committed to their wellbeing.
          </p>
        </div>
      </section>

      {/* 2. ABOUT THE SERVICE / OUR STORY */}
      <section className="py-20 md:py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2 relative">
              {/* Decorative block behind image */}
              <div className="absolute -inset-4 bg-[#FFDFD6]/30 rounded-[2.5rem] transform -rotate-3 transition-transform hover:rotate-0 duration-500"></div>
              {/* Flat 2D Vector Graphic Placeholder */}
              <img 
                src="https://vitalcharters.com/wp-content/uploads/2026/04/yacht-charter-with-kids-yacht-charter-with-kids-section-2.webp" 
                alt="Professional vector illustration of caregiver and child" 
                className="relative w-full h-auto object-cover rounded-3xl shadow-xl shadow-[#694F8E]/10" 
              />
            </div>
            
            <div className="w-full lg:w-1/2 lg:pl-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-[2px] bg-[#E3A5C7]"></div>
                <span className="text-sm font-bold tracking-widest text-[#E3A5C7] uppercase">Who We Are</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-[#694F8E] leading-tight mb-8">
                Childcare where you need it, when you need it.
              </h2>
              <div className="space-y-6 text-lg text-[#694F8E]/80 leading-relaxed">
                <p>
                  Roatán Nannies is a personalized childcare service for local and visiting families across the
                  island of Roatán. We travel to wherever our clients are staying, allowing parents to enjoy their
                  time with complete peace of mind, knowing their children are in trusted, caring hands.
                </p>
                <p>
                  Our caregivers are selected for their real, hands-on experience with children and their
                  commitment to responsibility, safety, and genuine care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. VISION & VALUES (Modern Grid) */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-[#FFDFD6]/20 to-white border-y border-[#FFDFD6]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 mb-20 items-end">
            <div className="lg:w-2/3">
              <span className="block text-sm font-bold tracking-widest text-[#E3A5C7] uppercase mb-4">Our Vision</span>
              <h2 className="text-3xl md:text-5xl font-bold text-[#694F8E] leading-tight">
                The trusted choice for childcare in Roatán.
              </h2>
            </div>
            <div className="lg:w-1/3">
              <p className="text-lg text-[#694F8E]/80 leading-relaxed border-l-4 border-[#E3A5C7] pl-6">
                Growing with a professional and well-trained team that allows us to support more and more families, 
                while always upholding the highest standards of safety and human warmth.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "favorite", title: "Love", desc: "Genuine, affectionate care for every child, as if they were family." },
              { icon: "diversity_3", title: "Respect", desc: "Treating children, families, and their way of life, values, and decisions with dignity and awareness." },
              { icon: "gpp_good", title: "Trust", desc: "Every family should feel their children are as safe as they would be at home." },
              { icon: "schedule", title: "Responsibility", desc: "Punctuality, commitment, and seriousness in every service provided." },
              { icon: "health_and_safety", title: "Safety", desc: "Clear protocols that protect both children and our team of nannies." },
              { icon: "workspace_premium", title: "Professionalism", desc: "Standards of quality that set Roatán Nannies apart from informal offerings in the market." }
            ].map((val, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-[#FFDFD6]/60 shadow-lg shadow-[#FFDFD6]/30 hover:bg-[#694F8E] hover:border-[#694F8E] transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-[#FFDFD6]/50 flex items-center justify-center mb-6 group-hover:bg-[#B692C2]/30 transition-colors duration-300">
                  <span className="material-symbols-rounded text-2xl text-[#694F8E] group-hover:text-[#FFDFD6] transition-colors duration-300">{val.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-[#694F8E] mb-3 group-hover:text-[#FFDFD6] transition-colors duration-300">{val.title}</h3>
                <p className="text-[#694F8E]/70 leading-relaxed group-hover:text-[#FFDFD6]/80 transition-colors duration-300">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SAFETY STANDARDS (Horizontal Cards) */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
            <span className="block text-sm font-bold tracking-widest text-[#E3A5C7] uppercase mb-4">Uncompromising Safety</span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#694F8E]">Our Safety Protocols</h2>
          </div>
          
          <div className="flex flex-col gap-6 max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8 p-8 md:p-10 rounded-3xl bg-[#FFDFD6]/20 border border-[#FFDFD6]/50 hover:shadow-xl hover:shadow-[#FFDFD6]/30 transition-shadow duration-300">
              <div className="flex-shrink-0 w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-md">
                <span className="material-symbols-rounded text-[#E3A5C7] text-4xl">history_edu</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#694F8E] mb-3">Formal Agreements</h3>
                <p className="text-lg text-[#694F8E]/80 leading-relaxed">Every family signs a simple service agreement before care begins, covering emergency authorization and shared responsibilities.</p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-8 p-8 md:p-10 rounded-3xl bg-[#FFDFD6]/20 border border-[#FFDFD6]/50 hover:shadow-xl hover:shadow-[#FFDFD6]/30 transition-shadow duration-300">
              <div className="flex-shrink-0 w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-md">
                <span className="material-symbols-rounded text-[#E3A5C7] text-4xl">notification_important</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#694F8E] mb-3">Emergency Protocols</h3>
                <p className="text-lg text-[#694F8E]/80 leading-relaxed">Our nannies follow a clear emergency protocol: contacting parents immediately and local emergency services if necessary, prioritizing the child's wellbeing.</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8 p-8 md:p-10 rounded-3xl bg-[#FFDFD6]/20 border border-[#FFDFD6]/50 hover:shadow-xl hover:shadow-[#FFDFD6]/30 transition-shadow duration-300">
              <div className="flex-shrink-0 w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-md">
                <span className="material-symbols-rounded text-[#E3A5C7] text-4xl">bedtime</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#694F8E] mb-3">Safe Service Hours</h3>
                <p className="text-lg text-[#694F8E]/80 leading-relaxed">To protect our staff, we do not begin new bookings after 10:00 p.m. However, bookings started earlier may continue overnight.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. MEET THE TEAM / PROFILE CARD */}
  



    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Meet Our Main Caregiver
          </h2>
          <p className="text-lg md:text-xl text-slate-600">
            Alongside a dedicated team of trained nannies, ready to care for your family.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Image & Caption */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-md">
              {/* Decorative background accent */}
              <div className="absolute inset-0 bg-blue-100 rounded-3xl transform translate-x-4 translate-y-4 -z-10"></div>
              
              <img 
                src={marissaImg} 
                alt="Marissa, Founder & Lead Caregiver" 
                className="w-full h-auto object-cover rounded-3xl shadow-lg border border-slate-100"
              />
            </div>
            
            
          </div>

          {/* Right Column: Details & Experience */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Title & Badge */}
            <div className="mb-8">
              <h3 className="text-4xl font-extrabold text-slate-900 mb-2">Marissa</h3>
              <p className="text-xl text-blue-600 font-semibold mb-6">Founder & Lead Caregiver</p>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-full text-sm font-bold tracking-wide">
                <span className="material-symbols-rounded text-base text-blue-400">verified</span>
                5+ Years Working With Children
              </div>
            </div>

            {/* Experience List */}
            <div className="mb-10">
              <h4 className="text-lg font-bold text-slate-900 uppercase tracking-wider mb-5 border-b border-slate-200 pb-2">
                Professional Experience
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="material-symbols-rounded text-blue-500 text-3xl shrink-0">school</span>
                  <div>
                    <strong className="block text-slate-900 text-lg">Elementary School Teacher</strong>
                    <span className="text-slate-600 text-sm">Honduras</span>
                  </div>
                </li>
                
                <li className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="material-symbols-rounded text-blue-500 text-3xl shrink-0">language</span>
                  <div>
                    <strong className="block text-slate-900 text-lg">English Tutor for Children</strong>
                    <span className="text-slate-600 text-sm">Elementary & Secondary in Costa Rica</span>
                  </div>
                </li>

                <li className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="material-symbols-rounded text-blue-500 text-3xl shrink-0">child_care</span>
                  <div>
                    <strong className="block text-slate-900 text-lg">Professional Nanny</strong>
                    <span className="text-slate-600 text-sm">For visiting families in Roatán, every summer</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* The "Why" Statement */}
            <div className="relative p-8 rounded-2xl bg-blue-50 border border-blue-100">
              <span className="material-symbols-rounded absolute top-4 left-4 text-5xl text-blue-200 opacity-50 -z-0">format_quote</span>
              <div className="relative z-10">
                <h4 className="text-lg font-bold text-slate-900 mb-3 uppercase tracking-wider">Why I Do This</h4>
                <p className="text-slate-700 leading-relaxed text-lg">
                  Because every parent deserves a break, and every child deserves to feel safe, loved, and cared for while they get it. My love for children started at home, as an aunt to three nieces, and grew through years of teaching and caring for kids of all ages. Roatán Nannies exists so you can enjoy your time with total peace of mind.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
 

      {/* 6. CALL TO ACTION */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#B692C2] to-[#694F8E] rounded-[3rem] p-12 md:p-24 text-center shadow-2xl shadow-[#694F8E]/20 relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#E3A5C7] rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FFDFD6] rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Ready for complete peace of mind?</h2>
            <p className="text-lg md:text-2xl text-[#FFDFD6] mb-12 max-w-2xl mx-auto font-medium">
              Let us provide a safe, engaging experience for your children while you enjoy the island.
            </p>
            <div className="flex justify-center">
              <RouteLink to="/book" className="inline-flex items-center justify-center gap-2 px-10 py-5 text-lg font-bold text-[#694F8E] bg-[#FFDFD6] rounded-full hover:scale-105 hover:bg-white transition-all duration-300 shadow-xl shadow-[#694F8E]/40">
                Request a Booking <span className="material-symbols-rounded">arrow_forward</span>
              </RouteLink>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}