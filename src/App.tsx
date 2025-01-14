import React, { useState, useEffect } from 'react';
import { 
  TrendingUp, 
  Shield, 
  Users, 
  ChevronRight,
  BarChart3,
  Lock,
  Globe
} from 'lucide-react';

import About from "./components/About";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Stats from "./components/Stats";
import Footer from "./components/Footer";
import Tokenomics from "./components/Tokenomics";
import Roadmap from "./components/Roadmap";
import Buy from "./components/Buy";
import Community from "./components/Community";

function App() {
  const [price, setPrice] = useState(1234.56);
  const [transactions, setTransactions] = useState(8234);
  
  useEffect(() => {
    // Simulate price updates
    const interval = setInterval(() => {
      setPrice(prev => prev + (Math.random() - 0.5) * 10);
      setTransactions(prev => prev + Math.floor(Math.random() * 10));
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-dark text-white">
      <Hero price={price} />
      <About />
      <Features />
      <Tokenomics />
      <Roadmap />
      <Buy />
      <Community />
      <Stats transactions={transactions} />
      <Footer />
    </div>
  );
}

export default App;