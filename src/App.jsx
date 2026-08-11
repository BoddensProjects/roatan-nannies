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

export default function App() {
  const { path } = useRoute();
  
  const pages = {
    "/": <Home />,
    "/services": <Services />,
    "/pricing": <Pricing />,
    "/safety": <Safety />,
    "/about": <About />,
    "/book": <Book />,
  };

  return (
    <>
      <Navbar />
      {pages[path] ?? <Home />}
      <Footer />
    </>
  );
}