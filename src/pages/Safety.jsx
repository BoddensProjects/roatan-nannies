import React, { useState } from "react";
import { RouteLink } from "../router.jsx";

export default function Safety() {
  const [activeTab, setActiveTab] = useState("child");

  return (
    <main className="w-full bg-slate-50 min-h-screen">
      {/* 1. PROFESSIONAL HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-slate-900 overflow-hidden">
        {/* Flat, subtle geometric background accents */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-800/50 transform skew-x-12 translate-x-32"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm font-bold tracking-widest uppercase mb-6 border border-blue-500/20">
            <span className="material-symbols-rounded text-base">gpp_good</span>
            Safety & Trust
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6 max-w-4xl mx-auto">
            Care that feels organized, secure, and completely reliable.
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Every family should feel their children are as safe as they would be at home. We uphold the highest standard of operational protocols so you can enjoy Roatán with total peace of mind.
          </p>
        </div>
      </section>

      {/* 2. DYNAMIC TOGGLE NAVIGATION */}
      <section className="bg-white border-b border-slate-200 sticky top-[72px] z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-center gap-4 py-6 max-w-3xl mx-auto">
            <button
              onClick={() => setActiveTab("child")}
              className={`flex-1 flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 ${
                activeTab === "child"
                  ? "bg-slate-900 text-white shadow-lg shadow-slate-900/20"
                  : "bg-slate-50 text-slate-600 border border-slate-200 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              <span className="material-symbols-rounded">child_care</span>
              Child Safety Protocols
            </button>
            
            <button
              onClick={() => setActiveTab("nanny")}
              className={`flex-1 flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 ${
                activeTab === "nanny"
                  ? "bg-slate-900 text-white shadow-lg shadow-slate-900/20"
                  : "bg-slate-50 text-slate-600 border border-slate-200 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              <span className="material-symbols-rounded">admin_panel_settings</span>
              Nanny Safety Protocols
            </button>
          </div>
        </div>
      </section>

      {/* 3. DYNAMIC CONTENT AREA */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* ========================================= */}
          {/* TAB 1: CHILD SAFETY                       */}
          {/* ========================================= */}
          {activeTab === "child" && (
            <div className="animate-fade-in-up">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Protecting Your Children</h2>
                <p className="text-lg text-slate-600">Comprehensive measures designed to handle medical needs, emergencies, and standard care with uncompromising professionalism.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                {/* Protocol Card 1 */}
                <div className="p-8 md:p-10 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                    <span className="material-symbols-rounded text-3xl text-blue-600">contract_edit</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Formal Parent Agreement</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Before care begins, every family signs a formal service agreement. This foundation covers emergency authorizations, medical waivers, and shared responsibilities, ensuring explicit consent and clarity on all operational procedures.
                  </p>
                </div>

                {/* Protocol Card 2 */}
                <div className="p-8 md:p-10 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                    <span className="material-symbols-rounded text-3xl text-blue-600">rule</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Pre-Arrival Preparation</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Critical details are collected during the booking process. Verified emergency contacts, allergies, and existing medical conditions are strictly reviewed by our management team before a caregiver is dispatched to your location.
                  </p>
                </div>

                {/* Protocol Card 3 */}
                <div className="p-8 md:p-10 rounded-2xl bg-slate-900 border border-slate-800 shadow-lg text-white">
                  <div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center mb-6">
                    <span className="material-symbols-rounded text-3xl text-blue-400">emergency_share</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Emergency Action Plan</h3>
                  <p className="text-slate-300 leading-relaxed mb-6">
                    While we always aim for a stress-free time, our nannies are fully trained to handle unexpected situations calmly and professionally.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex gap-4 items-start">
                      <span className="material-symbols-rounded text-blue-400 mt-0.5">looks_one</span>
                      <p className="text-slate-300 text-sm leading-relaxed"><strong>Immediate Parental Contact:</strong> Parents are the absolute first point of contact during any medical concern.</p>
                    </li>
                    <li className="flex gap-4 items-start">
                      <span className="material-symbols-rounded text-blue-400 mt-0.5">looks_two</span>
                      <p className="text-slate-300 text-sm leading-relaxed"><strong>Local Authorities:</strong> Caregivers are mandated to contact Roatán's local emergency services if immediate parental contact fails or if the situation dictates.</p>
                    </li>
                  </ul>
                </div>

                {/* Protocol Card 4 */}
                <div className="p-8 md:p-10 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                    <span className="material-symbols-rounded text-3xl text-blue-600">medical_information</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Special Needs & Medication</h3>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    We want to ensure the right care is provided for every single child. We gladly accommodate special needs and specific medical requirements with strict oversight.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-slate-700 font-medium bg-slate-50 p-3 rounded-lg border border-slate-100">
                      <span className="material-symbols-rounded text-blue-600 text-xl">prescriptions</span>
                      Written medication instructions required.
                    </li>
                    <li className="flex items-center gap-3 text-slate-700 font-medium bg-slate-50 p-3 rounded-lg border border-slate-100">
                      <span className="material-symbols-rounded text-blue-600 text-xl">coronavirus</span>
                      Advanced disclosure of all allergies.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Document Download Section (Updated to Request Only) */}
              <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 text-center border-2 border-slate-200 shadow-sm">
                <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="material-symbols-rounded text-4xl text-slate-400">folder_open</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Detailed Child Safety Documents</h3>
                <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
                  To ensure the privacy and security of our operational procedures, our complete safety guidelines, agreements, and medical release forms are not publicly distributed. More detailed documents are provided upon request exclusively for families who have booked our services.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <div className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-slate-900 text-white font-semibold rounded-xl opacity-90">
                    <span className="material-symbols-rounded text-lg">lock</span>
                    Available Upon Request
                  </div>
                  <div className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-slate-900 font-semibold rounded-xl border-2 border-slate-200 opacity-90">
                    <span className="material-symbols-rounded text-lg">verified</span>
                    For Confirmed Bookers
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ========================================= */}
          {/* TAB 2: NANNY SAFETY                       */}
          {/* ========================================= */}
          {activeTab === "nanny" && (
            <div className="animate-fade-in-up">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Protecting Our Team</h2>
                <p className="text-lg text-slate-600">We cannot provide excellent care without ensuring the absolute physical and professional safety of our dedicated caregivers.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                {/* Nanny Safety Card 1 */}
                <div className="p-8 md:p-10 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-14 h-14 bg-slate-100 rounded-xl flex items-center justify-center mb-6">
                    <span className="material-symbols-rounded text-3xl text-slate-700">bedtime</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Evening Operations Policy</h3>
                  <p className="text-slate-600 leading-relaxed">
                    To prevent our staff from traveling alone to unfamiliar locations late at night, <strong className="text-slate-900">we strictly enforce a 10:00 p.m. cutoff for new bookings.</strong> If a shift begins before this time, caregivers are authorized to stay overnight, but transit logistics are rigorously monitored.
                  </p>
                </div>

                {/* Nanny Safety Card 2 */}
                <div className="p-8 md:p-10 rounded-2xl bg-slate-900 border border-slate-800 shadow-lg text-white">
                  <div className="w-14 h-14 bg-slate-800 rounded-xl flex items-center justify-center mb-6">
                    <span className="material-symbols-rounded text-3xl text-blue-400">how_to_reg</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Vetting & Requirements</h3>
                  <p className="text-slate-300 leading-relaxed mb-6">
                    Our caregivers are rigorously selected for their real, hands-on experience and must pass strict background evaluations.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex gap-4 items-center">
                      <span className="material-symbols-rounded text-blue-400">verified_user</span>
                      <span className="text-slate-200 text-sm font-medium">Clean Local Police Background Checks</span>
                    </li>
                    <li className="flex gap-4 items-center">
                      <span className="material-symbols-rounded text-blue-400">health_metrics</span>
                      <span className="text-slate-200 text-sm font-medium">Pediatric CPR & First Aid Trained</span>
                    </li>
                    <li className="flex gap-4 items-center">
                      <span className="material-symbols-rounded text-blue-400">pool</span>
                      <span className="text-slate-200 text-sm font-medium">Water Safety Knowledge</span>
                    </li>
                  </ul>
                </div>

                {/* Nanny Safety Card 3 */}
                <div className="p-8 md:p-10 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-14 h-14 bg-slate-100 rounded-xl flex items-center justify-center mb-6">
                    <span className="material-symbols-rounded text-3xl text-slate-700">location_on</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Location & Check-In Protocol</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Management maintains a strict log of where every caregiver is deployed. Nannies are required to check in upon arrival at a hotel, resort, or villa, and check out upon departure. We reserve the right to decline service to undisclosed or unverified private locations.
                  </p>
                </div>

                {/* Nanny Safety Card 4 */}
                <div className="p-8 md:p-10 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-14 h-14 bg-slate-100 rounded-xl flex items-center justify-center mb-6">
                    <span className="material-symbols-rounded text-3xl text-slate-700">gavel</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Zero Tolerance Environment</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Caregivers have explicit authority to terminate a booking immediately if they face an unsafe environment, hostile behavior, or if the parameters of the booking (e.g., undeclared additional children) violate the signed parent agreement.
                  </p>
                </div>
              </div>

              {/* Document Download Section (Updated to Request Only) */}
              <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 text-center border-2 border-slate-200 shadow-sm">
                <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="material-symbols-rounded text-4xl text-slate-400">policy</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Detailed Staff Protocols</h3>
                <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
                  To protect our caregivers, comprehensive manuals regarding staff transportation, code of conduct, and environmental safety checks are provided upon request exclusively to families with a confirmed booking.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <div className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-slate-900 text-white font-semibold rounded-xl opacity-90">
                    <span className="material-symbols-rounded text-lg">lock</span>
                    Available Upon Request
                  </div>
                  <div className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-slate-900 font-semibold rounded-xl border-2 border-slate-200 opacity-90">
                    <span className="material-symbols-rounded text-lg">verified</span>
                    For Confirmed Bookers
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* 4. PROFESSIONAL CTA */}
      <section className="py-24 px-4 bg-slate-900 border-t border-slate-800 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to proceed?</h2>
          <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Our rigorous protocols exist so you never have to second-guess the wellbeing of your family or our staff.
          </p>
          <RouteLink to="/book" className="inline-flex items-center justify-center gap-3 px-10 py-5 text-lg font-bold text-slate-900 bg-white rounded-full hover:bg-slate-100 transition-all duration-300 shadow-xl shadow-white/10">
            Book Your Nanny <span className="material-symbols-rounded text-xl">arrow_forward</span>
          </RouteLink>
        </div>
      </section>
    </main>
  );
}