import { 
  ChevronRight,
  Shield,
  Award,
  TrendingUp,
  ExternalLink
} from 'lucide-react';

const Hero = ({price}: {price:number;}) => {
  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-dark to-transparent z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80" 
          alt="City Skyline" 
          className="w-full h-full object-cover object-center"
        />
        
        {/* Animated light streaks */}
        <div className="absolute inset-0 z-20 overflow-hidden">
          <div className="light-streak-1"></div>
          <div className="light-streak-2"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-30 pt-20">
        <div className="max-w-5xl">
          {/* Trust badges */}
          <div className="flex flex-wrap gap-6 mb-8 items-center">
            <div className="bg-dark/50 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/20 flex items-center">
              <Shield className="w-4 h-4 text-primary mr-2" />
              <span className="text-sm">Audited by CertiK</span>
            </div>
            <div className="bg-dark/50 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/20 flex items-center">
              <Award className="w-4 h-4 text-primary mr-2" />
              <span className="text-sm">Top 10 on CoinGecko</span>
            </div>
            <div className="bg-dark/50 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/20 flex items-center">
              <TrendingUp className="w-4 h-4 text-primary mr-2" />
              <span className="text-sm">+200% Growth</span>
            </div>
          </div>

          {/* Main content */}
          <div className="space-y-6 mb-12">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
              Be Honorable:<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-yellow-500 to-primary">
                The Token of True Hustlers
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-secondary max-w-2xl font-montserrat">
              A movement for the fearless, the strong, and the honorable. Join the revolution that's redefining success through integrity.
            </p>
          </div>

          {/* CTA and Price */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <button className="group bg-primary hover:bg-primary/90 text-dark px-8 py-4 rounded-lg font-montserrat font-bold text-lg transition-all duration-300 flex items-center">
              Get Your Token Now
              <ChevronRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            
            <div className="bg-dark/50 backdrop-blur-sm p-4 rounded-lg border border-primary/20">
              <p className="text-sm text-secondary mb-1">Current Token Price</p>
              <div className="flex items-center gap-3">
                <p className="text-2xl font-playfair text-primary">${price.toFixed(2)}</p>
                <span className="text-green-400 text-sm flex items-center">
                  <TrendingUp className="w-4 h-4 mr-1" /> +2.4%
                </span>
              </div>
            </div>
          </div>

          {/* Partner logos */}
          <div className="mt-16">
            <p className="text-sm text-secondary mb-4">Trusted By Industry Leaders</p>
            <div className="flex flex-wrap gap-8 items-center">
              <img src="https://upload.wikimedia.org/wikipedia/commons/1/1c/Binance_logo.svg" 
                   alt="Binance" 
                   className="h-6 opacity-50 hover:opacity-100 transition-opacity duration-300" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Uniswap_Logo.svg" 
                   alt="Uniswap" 
                   className="h-8 opacity-50 hover:opacity-100 transition-opacity duration-300" />
              <div className="flex items-center gap-2 text-secondary hover:text-primary transition-colors duration-300 cursor-pointer">
                <span>View All Partners</span>
                <ExternalLink className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;