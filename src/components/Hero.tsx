import { 
  ChevronRight,
} from 'lucide-react';

const Hero = ({price}: {price:number;}) => {
    return (
      <div className="relative gradient-overlay min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80" 
            alt="Background" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-6xl md:text-7xl mb-6 leading-tight">
              Honor in Wealth,<br />
              <span className="text-primary">Power in Trust</span>
            </h1>
            <p className="text-secondary text-xl md:text-2xl mb-8 font-montserrat">
              Join the elite network of honorable investors building generational wealth
            </p>
            
            <div className="bg-[#2C2C2C]/80 p-6 rounded-lg mb-8 backdrop-blur-sm inline-block">
              <p className="text-secondary mb-2 font-montserrat">Current Token Price</p>
              <p className="text-4xl font-playfair text-primary">
                ${price.toFixed(2)} <span className="text-green-400 text-lg">+2.4%</span>
              </p>
            </div>
            
            <button className="bg-primary text-dark px-8 py-4 rounded-lg font-montserrat font-bold text-lg hover:bg-[#E5BE3D] transition-colors duration-300 flex items-center">
              Purchase Tokens
              <ChevronRight className="ml-2" />
            </button>
          </div>
        </div>
      </div>
      );
}

export default Hero;