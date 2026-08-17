import { useEffect } from "react";
import { useRoute } from "./router.jsx";

// Components
import Navbar from "./components/Navbar.jsx"; 
import Footer from "./components/Footer.jsx"; 

// Pages
import About from "./pages/About.jsx";
import Book from "./pages/Book.jsx";
import Home from "./pages/Home.jsx";
import Pricing from "./pages/Pricing.jsx";
import Safety from "./pages/Safety.jsx";
import Services from "./pages/Services.jsx";
import Babysitting from './pages/Babysitting';

const siteUrl = "https://www.roatannannies.com";

const pageMeta = {
  "/": {
    title: "Roatan Nannies | Trusted Childcare in Roatan",
    description:
      "Roatan Nannies provides trusted babysitting and island-wide childcare for visiting and local families in Roatan, Honduras.",
  },
  "/babysitting": {
    title: "Babysitting in Roatan | Roatan Nannies",
    description:
      "Premium babysitting in Roatan for hotels, resorts, villas, vacation rentals, date nights, diving days, and family events.",
  },
  "/services": {
    title: "Childcare Services in Roatan | Roatan Nannies",
    description:
      "Island-wide nanny care for resorts, Airbnbs, private villas, residences, weddings, and special events throughout Roatan.",
  },
  "/pricing": {
    title: "Rates and Policies | Roatan Nannies",
    description:
      "Review Roatan Nannies hourly rates, minimum booking details, short-notice policy, evening care, and overnight childcare guidance.",
  },
  "/safety": {
    title: "Safety Protocols | Roatan Nannies",
    description:
      "Learn how Roatan Nannies protects children and families with emergency contacts, parent agreements, and clear safety protocols.",
  },
  "/about": {
    title: "About Roatan Nannies | Trusted Island Childcare",
    description:
      "Meet Roatan Nannies, a local childcare service built around love, respect, trust, responsibility, safety, and professionalism.",
  },
  "/book": {
    title: "Book Childcare in Roatan | Roatan Nannies",
    description:
      "Request trusted babysitting or nanny care in Roatan for your hotel, resort, villa, Airbnb, home, wedding, or special event.",
  },
};

function setMetaAttribute(selector, attribute, value) {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement(selector.startsWith("meta") ? "meta" : "link");
    const nameMatch = selector.match(/\[name="([^"]+)"\]/);
    const propertyMatch = selector.match(/\[property="([^"]+)"\]/);
    const relMatch = selector.match(/\[rel="([^"]+)"\]/);

    if (nameMatch) element.setAttribute("name", nameMatch[1]);
    if (propertyMatch) element.setAttribute("property", propertyMatch[1]);
    if (relMatch) element.setAttribute("rel", relMatch[1]);

    document.head.appendChild(element);
  }

  element.setAttribute(attribute, value);
}

function SeoUpdater({ path }) {
  useEffect(() => {
    const meta = pageMeta[path] ?? pageMeta["/"];
    const canonicalPath = pageMeta[path] ? path : "/";
    const canonicalUrl = `${siteUrl}${canonicalPath === "/" ? "/" : canonicalPath}`;

    document.title = meta.title;
    setMetaAttribute('meta[name="description"]', "content", meta.description);
    setMetaAttribute('link[rel="canonical"]', "href", canonicalUrl);
    setMetaAttribute('meta[property="og:title"]', "content", meta.title);
    setMetaAttribute('meta[property="og:description"]', "content", meta.description);
    setMetaAttribute('meta[property="og:url"]', "content", canonicalUrl);
    setMetaAttribute('meta[name="twitter:title"]', "content", meta.title);
    setMetaAttribute('meta[name="twitter:description"]', "content", meta.description);
  }, [path]);

  return null;
}

// Global WhatsApp Bubble Component
function WhatsAppBubble() {
  return (
    <a
      href="https://wa.me/50433723832"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white px-5 py-3 rounded-full shadow-lg shadow-[#25D366]/40 hover:scale-105 hover:shadow-xl hover:shadow-[#25D366]/60 transition-all duration-300"
    >
      <span className="material-symbols-rounded text-2xl">chat</span>
      <span className="font-bold hidden sm:inline-block pr-1">
        Chat with Roatan Nannies
      </span>
    </a>
  );
}

export default function App() {
  const { path } = useRoute();
  
  const pages = {
    "/": <Home />,
    "/services": <Services />,
    "/pricing": <Pricing />,
    "/safety": <Safety />,
    "/about": <About />,
    "/book": <Book />,
    "/babysitting": <Babysitting />,
  };

  return (
    <>
      <SeoUpdater path={path} />
      <Navbar />
      <main className="min-h-screen">
        {pages[path] ?? <Home />}
      </main>
      <Footer />
      
      {/* Renders the floating bubble on every page */}
      <WhatsAppBubble />
    </>
  );
}
