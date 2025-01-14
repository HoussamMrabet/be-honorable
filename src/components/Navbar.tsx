import { useState, useEffect } from 'react';
import { 
  Shield, 
  Menu, 
  X,
  ChevronRight
} from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dark/95 backdrop-blur-md py-4' : 'bg-transparent py-6'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center space-x-2 group">
              <Shield className="w-8 h-8 text-primary transition-transform duration-300 group-hover:scale-110" />
              <span className="text-xl font-playfair">Be Honorable</span>
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-secondary hover:text-primary transition-colors duration-300">About</a>
              <a href="#features" className="text-secondary hover:text-primary transition-colors duration-300">Features</a>
              <a href="#tokenomics" className="text-secondary hover:text-primary transition-colors duration-300">Tokenomics</a>
              <a href="#roadmap" className="text-secondary hover:text-primary transition-colors duration-300">Roadmap</a>
              <a href="#community" className="text-secondary hover:text-primary transition-colors duration-300">Community</a>
              <button className="bg-primary/10 text-primary px-4 py-2 rounded-lg font-montserrat hover:bg-primary/20 transition-colors duration-300 flex items-center">
                Buy Now
                <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-dark/95 backdrop-blur-lg z-40 transition-transform duration-300 transform ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      } md:hidden`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <a 
            href="#about" 
            className="text-2xl text-secondary hover:text-primary transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </a>
          <a 
            href="#features" 
            className="text-2xl text-secondary hover:text-primary transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Features
          </a>
          <a 
            href="#tokenomics" 
            className="text-2xl text-secondary hover:text-primary transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Tokenomics
          </a>
          <a 
            href="#roadmap" 
            className="text-2xl text-secondary hover:text-primary transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Roadmap
          </a>
          <a 
            href="#community" 
            className="text-2xl text-secondary hover:text-primary transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Community
          </a>
          <button className="bg-primary/10 text-primary px-6 py-3 rounded-lg font-montserrat hover:bg-primary/20 transition-colors duration-300 flex items-center">
            Buy Now
            <ChevronRight className="w-5 h-5 ml-1" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;