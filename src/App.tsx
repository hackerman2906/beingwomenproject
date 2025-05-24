import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

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
//import ClientExperience from './pages/Clientexperience';
import FAQ from './pages/FAQ';
import NotFound from './pages/NotFound';
import Accessibility from './pages/Accessibility';
import BookConsultation from './pages/BookConsultation';
import ClientExperience from './pages/Clientexperience';

function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/navratri" element={<Navratri />} />
            <Route path="/wedding" element={<Wedding />} />
            <Route path="/casual" element={<Casual />} />
            <Route path="/clientexperience" element={<ClientExperience />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/accessibility" element={<Accessibility />} />
            <Route path="/book-consultation" element={<BookConsultation />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;