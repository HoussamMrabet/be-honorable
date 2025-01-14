import { 
  Shield,
  BarChart3,
  Users,
} from 'lucide-react';

const Features = () => {
  return (
      <div id='features' className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl mb-16 text-center">
            Built on <span className="text-primary">Honor</span> and <span className="text-primary">Trust</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="stats-card animate-float">
              <Shield className="text-primary w-12 h-12 mb-4" />
              <h3 className="text-2xl mb-3 font-montserrat">Secure by Design</h3>
              <p className="text-secondary">Military-grade encryption protecting your investments 24/7</p>
            </div>
            
            <div className="stats-card animate-float" style={{animationDelay: '0.2s'}}>
              <BarChart3 className="text-primary w-12 h-12 mb-4" />
              <h3 className="text-2xl mb-3 font-montserrat">Smart Tokenomics</h3>
              <p className="text-secondary">Deflationary model ensuring long-term value growth</p>
            </div>
            
            <div className="stats-card animate-float" style={{animationDelay: '0.4s'}}>
              <Users className="text-primary w-12 h-12 mb-4" />
              <h3 className="text-2xl mb-3 font-montserrat">Elite Community</h3>
              <p className="text-secondary">Join thousands of visionary investors worldwide</p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Features;