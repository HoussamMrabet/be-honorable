import { 
  Shield, 
  Users, 
  Sword,
  Crown,
  Scale,
  TrendingUp,
  ChevronRight,
} from 'lucide-react';

const About = () => {
  return (
      <div className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80" 
            alt="Successful businessman" 
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark/95 to-dark"></div>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-6 leading-tight">
              The Honor Behind the <span className="text-primary">Hustle</span>
            </h2>
            <div className="flex justify-center space-x-8 mb-12">
              <div className="flex flex-col items-center">
                <Sword className="w-8 h-8 text-primary mb-2" />
                <span className="text-secondary">Strength</span>
              </div>
              <div className="flex flex-col items-center">
                <Crown className="w-8 h-8 text-primary mb-2" />
                <span className="text-secondary">Legacy</span>
              </div>
              <div className="flex flex-col items-center">
                <Scale className="w-8 h-8 text-primary mb-2" />
                <span className="text-secondary">Balance</span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="space-y-6">
              <div className="bg-[#2C2C2C]/80 p-8 rounded-lg backdrop-blur-sm border border-primary/20">
                <h3 className="text-2xl font-montserrat mb-4 text-primary">Our Mission</h3>
                <p className="text-secondary leading-relaxed mb-6">
                  In a world where the pursuit of wealth often compromises principles, 
                  "Be Honorable" stands as a testament to those who choose to rise through 
                  integrity. We believe true success is built not just on ambition, but on 
                  the foundation of honor.
                </p>
                <p className="text-secondary leading-relaxed">
                  Our token embodies the warrior's code of the modern era: relentless in 
                  pursuit, unwavering in principles, and honorable in victory.
                </p>
              </div>

              {/* The Code Section */}
              <div className="bg-[#2C2C2C]/80 p-8 rounded-lg backdrop-blur-sm border border-primary/20">
                <h3 className="text-2xl font-montserrat mb-4 text-primary">The Code</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded mr-4 mt-1">
                      <Shield className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-montserrat text-lg mb-1">Protect the Vision</h4>
                      <p className="text-secondary text-sm">Guard your principles as fiercely as your profits</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded mr-4 mt-1">
                      <Users className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-montserrat text-lg mb-1">Build Together</h4>
                      <p className="text-secondary text-sm">Success shared is success multiplied</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary/10 p-2 rounded mr-4 mt-1">
                      <TrendingUp className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-montserrat text-lg mb-1">Rise with Honor</h4>
                      <p className="text-secondary text-sm">Let your success be a testament to your character</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary/50 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative h-[600px] overflow-hidden rounded-lg">
                <img 
                  src="/grim.jpg" 
                  alt="Distinguished businessman" 
                  className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="bg-dark/80 backdrop-blur-sm p-6 rounded-lg border border-primary/20">
                    <h4 className="text-xl font-montserrat mb-2">Leadership Through Honor</h4>
                    <p className="text-secondary text-sm">
                      True power lies not in force, but in the respect earned through 
                      unwavering principles and calculated decisions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <button className="bg-primary/10 text-primary px-8 py-4 rounded-lg font-montserrat font-bold text-lg hover:bg-primary/20 transition-colors duration-300 flex items-center mx-auto border border-primary/20">
              Join the Movement
              <ChevronRight className="ml-2" />
            </button>
          </div>
        </div>
      </div>
  )
}

export default About;