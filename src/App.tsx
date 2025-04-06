import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Navratri from './pages/Navratri';
import Wedding from './pages/Wedding';
import Casual from './pages/Casual';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import ShippingInfo from './pages/ShippingInfo';
import FAQ from './pages/FAQ';
import NotFound from './pages/NotFound'; // You'll create this

// 🔁 Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
};

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/navratri" element={<Navratri />} />
          <Route path="/wedding" element={<Wedding />} />
          <Route path="/casual" element={<Casual />} />
          <Route path="/shipping" element={<ShippingInfo />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
