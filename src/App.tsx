// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import LatestCreations from './components/LatestCreations';
// import WhyReelsOnGo from './components/WhyReelsOnGo';
// import Pricing from './components/Pricing';
// import Testimonials from './components/Testimonials';
// // import Services from './pages/Services';
// // import Services from './components/Services';
// import Contact from './components/Contact';
// import FAQ from './components/FAQ';
// import Footer from './components/Footer';
// import WhatsAppButton from './components/WhatsAppButton';
// import './App.css';

// function App() {
//   return (
//     <div className="app">
//       <Navbar />
//       <Hero />
//       <LatestCreations />
//       <WhyReelsOnGo />
//       <Pricing />
//       <Testimonials />
//       {/* <Services />
//          <Services /> */}
//       <Contact />
//       <FAQ />
//       <Footer />
//       <WhatsAppButton />
//     </div>
//   );
// }

// export default App;





import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LatestCreations from "./components/LatestCreations";
import WhyReelsOnGo from "./components/WhyReelsOnGo";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Services from "./pages/Services"; // ✅ import from pages folder
import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />

        <Routes>
          {/* 🏠 Home Page */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <LatestCreations />
                <WhyReelsOnGo />
                <Pricing />
                <Testimonials />
                <Contact />
                <FAQ />
              </>
            }
          />

          {/* 🧩 Services Page */}
          <Route path="/services" element={<Services />} />
        </Routes>

        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
};

export default App;
