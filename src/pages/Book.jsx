import React from "react";
// IMPORTANT: Make sure this path points to where you saved your form!
import BookingForm from "../components/BookingForm.jsx"; 
import { RouteLink } from "../router.jsx";

export default function Book() {
  return (
    <main className="w-full min-h-screen bg-[#FFDFD6]/10 pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* PAGE INTRO */}
        <div className="text-center mb-10 animate-fade-in-up">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-[#E3A5C7] text-sm font-bold tracking-widest uppercase mb-4 border border-[#FFDFD6] shadow-sm">
            <span className="material-symbols-rounded text-lg">calendar_month</span>
            Secure Your Dates
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#694F8E] tracking-tight mb-4">
            Let's plan your childcare.
          </h1>
          <p className="text-lg text-[#694F8E]/80 max-w-2xl mx-auto">
            No payment is required today. You can easily settle your balance via cash or local bank transfer at the end of your service.
          </p>
        </div>

        {/* THE FORM COMPONENT */}
        <div className="animate-fade-in-up" style={{ animationDelay: "100ms" }}>
          <BookingForm />
        </div>
        
        {/* SHORT NOTICE SUPPORT BANNER */}
        <div className="max-w-4xl mx-auto mt-12 bg-white rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between border border-[#FFDFD6] shadow-sm text-center md:text-left gap-6 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
          <div>
            <h3 className="text-xl font-bold text-[#694F8E] mb-2 flex items-center justify-center md:justify-start gap-2">
              <span className="material-symbols-rounded text-[#E3A5C7]">bolt</span>
              Have a short-notice request?
            </h3>
            <p className="text-[#694F8E]/80">If you need a nanny within the next 6 hours, please reach out to us directly to check availability.</p>
          </div>
          <RouteLink to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-[#FFDFD6] text-[#694F8E] font-bold rounded-xl hover:bg-[#E3A5C7] hover:text-white transition-colors flex-shrink-0">
            <span className="material-symbols-rounded">chat</span> WhatsApp Us
          </RouteLink>
        </div>

      </div>
    </main>
  );
}