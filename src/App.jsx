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