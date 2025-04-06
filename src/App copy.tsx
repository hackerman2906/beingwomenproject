import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ShippingInfo from './pages/ShippingInfo';
import FAQ from './pages/FAQ';
import Navratri from './pages/Navratri';
import Wedding from './pages/Wedding';
import Casual from './pages/Casual';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/shipping" element={<ShippingInfo />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/navratri" element={<Navratri />} />
            <Route path="/wedding" element={<Wedding />} />
            <Route path="/casual" element={<Casual />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;