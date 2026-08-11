import { useState } from "react";

const initialForm = {
  name: "",
  phone: "",
  email: "",
  location: "",
  date: "",
  start: "",
  end: "",
  children: "",
  childDetails: "",
  medical: "",
  emergency: "",
  notes: "",
};

export default function BookingForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("");

  function updateField(event) {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    // 1. Format the email subject and body
    const subject = encodeURIComponent(`New Booking Request: ${form.name}`);
    const body = encodeURIComponent(`Hello Roatán Nannies,

I would like to request a booking. Here are my details:

Parent/Guardian Name: ${form.name}
Phone (WhatsApp): ${form.phone}
Email: ${form.email}
Location: ${form.location}

Date of Service: ${form.date}
Start Time: ${form.start}
End Time: ${form.end || "Not specified"}

Number of Children: ${form.children}
Child(ren)'s Name(s) and Age(s): 
${form.childDetails}

Allergies, Medical Conditions, or Medication: 
${form.medical}

Emergency Contact: ${form.emergency}

Additional Notes or Special Requests:
${form.notes || "None"}

Thank you,
${form.name}`);

    // 2. Open the user's default email client
    window.location.href = `mailto:contact@roatannannies.com?subject=${subject}&body=${body}`;

    // 3. Show a status message to the user
    setStatus(
      "Thank you! Your email app should now open with your details drafted. Just hit 'Send' and our team will get back to you shortly."
    );
    setForm(initialForm);
    
    // 4. Scroll to the status message so the user sees it
    setTimeout(() => {
      document.getElementById('form-status')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
  }

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-[2rem] shadow-xl shadow-[#694F8E]/10 border border-[#FFDFD6] overflow-hidden">
      
      {/* FORM HEADER */}
      <div className="bg-gradient-to-r from-[#694F8E] to-[#B692C2] p-8 md:p-10 text-center">
        <h2 className="text-3xl font-extrabold text-[#FFDFD6] mb-2">Request a Booking</h2>
        <p className="text-white/90 text-lg">Fill out the details below to generate your booking request email.</p>
      </div>

      <form className="p-8 md:p-10" onSubmit={handleSubmit} noValidate>
        
        {/* SUCCESS MESSAGE */}
        {status && (
          <div id="form-status" className="mb-8 p-6 rounded-2xl bg-[#FFDFD6]/40 border border-[#E3A5C7] flex items-start gap-4 animate-fade-in-up" role="status" aria-live="polite">
            <span className="material-symbols-rounded text-[#694F8E] text-3xl">check_circle</span>
            <p className="text-[#694F8E] font-medium leading-relaxed">{status}</p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          
          {/* NAME */}
          <div className="flex flex-col">
            <label className="flex items-center gap-2 text-sm font-bold text-[#694F8E] mb-2 uppercase tracking-wide">
              <span className="material-symbols-rounded text-[#E3A5C7] text-lg">person</span>
              Parent/Guardian Name
            </label>
            <input 
              required 
              name="name" 
              value={form.name} 
              onChange={updateField} 
              autoComplete="name" 
              placeholder="Enter your full name"
              className="w-full px-4 py-3.5 rounded-xl border-2 border-[#FFDFD6] bg-slate-50 text-[#694F8E] placeholder-[#B692C2]/60 focus:outline-none focus:border-[#E3A5C7] focus:ring-4 focus:ring-[#E3A5C7]/20 transition-all"
            />
          </div>

          {/* PHONE */}
          <div className="flex flex-col">
            <label className="flex items-center gap-2 text-sm font-bold text-[#694F8E] mb-2 uppercase tracking-wide">
              <span className="material-symbols-rounded text-[#E3A5C7] text-lg">phone_iphone</span>
              Phone (WhatsApp Preferred)
            </label>
            <input 
              required 
              name="phone" 
              value={form.phone} 
              onChange={updateField} 
              autoComplete="tel"
              placeholder="Enter your phone number"
              className="w-full px-4 py-3.5 rounded-xl border-2 border-[#FFDFD6] bg-slate-50 text-[#694F8E] placeholder-[#B692C2]/60 focus:outline-none focus:border-[#E3A5C7] focus:ring-4 focus:ring-[#E3A5C7]/20 transition-all"
            />
          </div>

          {/* EMAIL */}
          <div className="flex flex-col">
            <label className="flex items-center gap-2 text-sm font-bold text-[#694F8E] mb-2 uppercase tracking-wide">
              <span className="material-symbols-rounded text-[#E3A5C7] text-lg">mail</span>
              Email Address
            </label>
            <input
              required
              type="email"
              name="email"
              value={form.email}
              onChange={updateField}
              autoComplete="email"
              placeholder="Enter your email address"
              className="w-full px-4 py-3.5 rounded-xl border-2 border-[#FFDFD6] bg-slate-50 text-[#694F8E] placeholder-[#B692C2]/60 focus:outline-none focus:border-[#E3A5C7] focus:ring-4 focus:ring-[#E3A5C7]/20 transition-all"
            />
          </div>

          {/* LOCATION */}
          <div className="flex flex-col">
            <label className="flex items-center gap-2 text-sm font-bold text-[#694F8E] mb-2 uppercase tracking-wide">
              <span className="material-symbols-rounded text-[#E3A5C7] text-lg">location_on</span>
              Location
            </label>
            <input
              required
              name="location"
              value={form.location}
              onChange={updateField}
              placeholder="Hotel, resort, Airbnb, or villa name"
              className="w-full px-4 py-3.5 rounded-xl border-2 border-[#FFDFD6] bg-slate-50 text-[#694F8E] placeholder-[#B692C2]/60 focus:outline-none focus:border-[#E3A5C7] focus:ring-4 focus:ring-[#E3A5C7]/20 transition-all"
            />
          </div>

          {/* DATE */}
          <div className="flex flex-col">
            <label className="flex items-center gap-2 text-sm font-bold text-[#694F8E] mb-2 uppercase tracking-wide">
              <span className="material-symbols-rounded text-[#E3A5C7] text-lg">calendar_month</span>
              Date of Service
            </label>
            <input 
              required 
              type="date" 
              name="date" 
              value={form.date} 
              onChange={updateField} 
              className="w-full px-4 py-3.5 rounded-xl border-2 border-[#FFDFD6] bg-slate-50 text-[#694F8E] focus:outline-none focus:border-[#E3A5C7] focus:ring-4 focus:ring-[#E3A5C7]/20 transition-all"
            />
          </div>

          {/* CHILDREN COUNT */}
          <div className="flex flex-col">
            <label className="flex items-center gap-2 text-sm font-bold text-[#694F8E] mb-2 uppercase tracking-wide">
              <span className="material-symbols-rounded text-[#E3A5C7] text-lg">diversity_1</span>
              Number of Children
            </label>
            <input
              required
              type="number"
              min="1"
              max="6"
              name="children"
              value={form.children}
              onChange={updateField}
              placeholder="Enter number"
              className="w-full px-4 py-3.5 rounded-xl border-2 border-[#FFDFD6] bg-slate-50 text-[#694F8E] placeholder-[#B692C2]/60 focus:outline-none focus:border-[#E3A5C7] focus:ring-4 focus:ring-[#E3A5C7]/20 transition-all"
            />
          </div>

          {/* START TIME */}
          <div className="flex flex-col">
            <label className="flex items-center gap-2 text-sm font-bold text-[#694F8E] mb-2 uppercase tracking-wide">
              <span className="material-symbols-rounded text-[#E3A5C7] text-lg">schedule</span>
              Start Time
            </label>
            <input 
              required 
              type="time" 
              name="start" 
              value={form.start} 
              onChange={updateField} 
              className="w-full px-4 py-3.5 rounded-xl border-2 border-[#FFDFD6] bg-slate-50 text-[#694F8E] focus:outline-none focus:border-[#E3A5C7] focus:ring-4 focus:ring-[#E3A5C7]/20 transition-all"
            />
          </div>

          {/* END TIME */}
          <div className="flex flex-col">
            <label className="flex items-center gap-2 text-sm font-bold text-[#694F8E] mb-2 uppercase tracking-wide">
              <span className="material-symbols-rounded text-[#E3A5C7] text-lg">update</span>
              End Time
            </label>
            <input
              name="end"
              value={form.end}
              onChange={updateField}
              placeholder="e.g. 10:00 PM or 'Overnight'"
              className="w-full px-4 py-3.5 rounded-xl border-2 border-[#FFDFD6] bg-slate-50 text-[#694F8E] placeholder-[#B692C2]/60 focus:outline-none focus:border-[#E3A5C7] focus:ring-4 focus:ring-[#E3A5C7]/20 transition-all"
            />
          </div>

          {/* CHILD DETAILS (FULL WIDTH) */}
          <div className="flex flex-col md:col-span-2">
            <label className="flex items-center gap-2 text-sm font-bold text-[#694F8E] mb-2 uppercase tracking-wide">
              <span className="material-symbols-rounded text-[#E3A5C7] text-lg">face</span>
              Child(ren)'s Name(s) and Age(s)
            </label>
            <textarea 
              required 
              name="childDetails" 
              rows="2" 
              value={form.childDetails} 
              onChange={updateField} 
              placeholder="e.g. Sofia (4), Lucas (7)"
              className="w-full px-4 py-3.5 rounded-xl border-2 border-[#FFDFD6] bg-slate-50 text-[#694F8E] placeholder-[#B692C2]/60 focus:outline-none focus:border-[#E3A5C7] focus:ring-4 focus:ring-[#E3A5C7]/20 transition-all resize-none"
            />
          </div>

          {/* MEDICAL CONDITIONS (FULL WIDTH) */}
          <div className="flex flex-col md:col-span-2">
            <label className="flex items-center gap-2 text-sm font-bold text-[#694F8E] mb-2 uppercase tracking-wide">
              <span className="material-symbols-rounded text-[#E3A5C7] text-lg">medical_information</span>
              Allergies, Medical Conditions, or Medication
            </label>
            <textarea 
              required 
              name="medical" 
              rows="2" 
              value={form.medical} 
              onChange={updateField} 
              placeholder="Please list any details or write 'None'"
              className="w-full px-4 py-3.5 rounded-xl border-2 border-[#FFDFD6] bg-slate-50 text-[#694F8E] placeholder-[#B692C2]/60 focus:outline-none focus:border-[#E3A5C7] focus:ring-4 focus:ring-[#E3A5C7]/20 transition-all resize-none"
            />
          </div>

          {/* EMERGENCY CONTACT (FULL WIDTH) */}
          <div className="flex flex-col md:col-span-2">
            <label className="flex items-center gap-2 text-sm font-bold text-[#694F8E] mb-2 uppercase tracking-wide">
              <span className="material-symbols-rounded text-[#E3A5C7] text-lg">contact_emergency</span>
              Emergency Contact (Name & Phone)
            </label>
            <input 
              required 
              name="emergency" 
              value={form.emergency} 
              onChange={updateField} 
              placeholder="Name and phone number (e.g. Spouse, Grandparent)"
              className="w-full px-4 py-3.5 rounded-xl border-2 border-[#FFDFD6] bg-slate-50 text-[#694F8E] placeholder-[#B692C2]/60 focus:outline-none focus:border-[#E3A5C7] focus:ring-4 focus:ring-[#E3A5C7]/20 transition-all"
            />
          </div>

          {/* ADDITIONAL NOTES (FULL WIDTH) */}
          <div className="flex flex-col md:col-span-2">
            <label className="flex items-center gap-2 text-sm font-bold text-[#694F8E] mb-2 uppercase tracking-wide">
              <span className="material-symbols-rounded text-[#E3A5C7] text-lg">edit_note</span>
              Additional Notes or Special Requests
            </label>
            <textarea 
              name="notes" 
              rows="3" 
              value={form.notes} 
              onChange={updateField} 
              placeholder="Any specific routines, bedtime instructions, or additional info"
              className="w-full px-4 py-3.5 rounded-xl border-2 border-[#FFDFD6] bg-slate-50 text-[#694F8E] placeholder-[#B692C2]/60 focus:outline-none focus:border-[#E3A5C7] focus:ring-4 focus:ring-[#E3A5C7]/20 transition-all resize-none"
            />
          </div>
          
        </div>

        {/* SUBMIT BUTTON */}
        <div className="mt-10">
          <button 
            type="submit" 
            className="w-full flex items-center justify-center gap-2 py-4 md:py-5 bg-[#694F8E] text-[#FFDFD6] font-bold text-xl rounded-xl hover:bg-[#B692C2] hover:text-white transition-all duration-300 shadow-xl shadow-[#694F8E]/20"
          >
            Submit Booking Request
            <span className="material-symbols-rounded">send</span>
          </button>
          <p className="text-center text-sm text-[#B692C2] mt-4 font-medium">
            This will open your email app with a pre-filled message.
          </p>
        </div>

      </form>
    </div>
  );
}