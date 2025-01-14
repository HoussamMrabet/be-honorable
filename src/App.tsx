import { useState, useEffect } from 'react';

import Navbar from "./components/Navbar";
import About from "./components/About";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Stats from "./components/Stats";
import Footer from "./components/Footer";
import Tokenomics from "./components/Tokenomics";
import Roadmap from "./components/Roadmap";
import Buy from "./components/Buy";
import Community from "./components/Community";
import Contact from "./components/Contact";
import VideoSection from "./components/VideoSection";

function App() {
  const [price, setPrice] = useState(12.56);
  const [transactions, setTransactions] = useState(8234);
  
  useEffect(() => {
    // Simulate price updates
    const interval = setInterval(() => {
      setPrice(prev => prev + (Math.random() - 0.5) * 10);
      setTransactions(prev => prev + Math.floor(Math.random() * 10));
    }, 3000);
    
    // Scroll reveal animation
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal');
      
      reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-dark text-white">
      <Navbar />
      <Hero price={price} />
      <div className="reveal">
        <About />
      </div>
      <div className="reveal">
        <Features />
      </div>
      <div className="reveal">
        <VideoSection />
      </div>
      <div className="reveal">
        <Tokenomics />
      </div>
      <div className="reveal">
        <Roadmap />
      </div>
      <div className="reveal">
        <Buy />
      </div>
      <div className="reveal">
        <Community />
      </div>
      {/* <div className="reveal">
        <Stats transactions={transactions} />
      </div> */}
      <div className="reveal">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;