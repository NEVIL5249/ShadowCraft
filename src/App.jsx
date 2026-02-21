import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Library from './pages/Library';
import Playground from './pages/Playground';
import Legal from './pages/Legal';
import Docs from './pages/Docs';
import ContactModal from './components/ContactModal';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar onOpenContact={() => setIsContactModalOpen(true)} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/library" element={<Library />} />
            <Route path="/playground" element={<Playground />} />
            <Route path="/legal" element={<Legal />} />
            <Route path="/docs" element={<Docs />} />
          </Routes>
        </main>
        <Footer onOpenContact={() => setIsContactModalOpen(true)} />
        
        <ContactModal 
          isOpen={isContactModalOpen} 
          onClose={() => setIsContactModalOpen(false)} 
        />
      </div>
    </Router>
  );
}

export default App;
