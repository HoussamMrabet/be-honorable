import { 
  Wallet, 
  Users, 
  Lock,
  Landmark,
  Coins,
  Gem
} from 'lucide-react';

const TokenomicsCard = ({ 
  title, 
  percentage, 
  description, 
  icon: Icon 
}: { 
  title: string; 
  percentage: number; 
  description: string; 
  icon: React.ElementType;
}) => (
  <div className="relative group">
    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
    <div className="relative bg-[#2C2C2C]/90 p-6 rounded-lg border border-primary/20 h-full transform transition-transform duration-300 hover:-translate-y-1">
      <div className="flex items-center mb-4">
        <div className="bg-primary/10 p-3 rounded-lg">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <div className="ml-4">
          <h4 className="text-xl font-montserrat">{title}</h4>
          <p className="text-3xl font-playfair text-primary">{percentage}%</p>
        </div>
      </div>
      <p className="text-secondary text-sm">{description}</p>
    </div>
  </div>
);

const Tokenomics = () => {
  const distribution = [
    {
      title: "Community Rewards",
      percentage: 100,
      description: "Allocated for staking rewards, liquidity mining, and community initiatives",
      icon: Users
    },
    {
      title: "Public Sale",
      percentage: 100,
      description: "Available for public trading and initial token offering",
      icon: Wallet
    },
    {
      title: "Treasury",
      percentage: 100,
      description: "Reserved for development, marketing, and strategic partnerships",
      icon: Landmark
    },
    {
      title: "Team & Advisors",
      percentage: 100,
      description: "Vested over 24 months with 6-month cliff",
      icon: Lock
    },
    {
      title: "Liquidity Pool",
      percentage: 100,
      description: "Locked for 5 years to ensure trading stability",
      icon: Coins
    }
  ];

  return (
    <div id='tokenomics' className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-5"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark to-transparent"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-block">
            <div className="flex items-center justify-center mb-6">
              <Gem className="text-primary w-12 h-12 mr-4" />
              <h2 className="text-4xl md:text-5xl">Tokenomics</h2>
            </div>
            <p className="text-xl text-secondary font-montserrat">
              How the <span className="text-primary">'Be Honorable'</span> Token Works
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {distribution.map((item) => (
            <TokenomicsCard key={item.title} {...item} />
          ))}
        </div>

        {/* <div className="bg-[#2C2C2C]/80 p-8 rounded-lg backdrop-blur-sm border border-primary/20 max-w-4xl mx-auto">
          <h3 className="text-2xl font-montserrat mb-6 text-center">Token Metrics</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <p className="text-primary text-3xl font-playfair mb-2">1B</p>
              <p className="text-secondary font-montserrat">Total Supply</p>
            </div>
            <div className="text-center">
              <p className="text-primary text-3xl font-playfair mb-2">12%</p>
              <p className="text-secondary font-montserrat">Annual Staking APY</p>
            </div>
            <div className="text-center">
              <p className="text-primary text-3xl font-playfair mb-2">2%</p>
              <p className="text-secondary font-montserrat">Transaction Fee</p>
            </div>
          </div>
        </div> */}

        <div className="mt-16 text-center max-w-2xl mx-auto">
          <h3 className="text-2xl font-montserrat mb-4">Token Utility</h3>
          {/* <div className="grid md:grid-cols-2 gap-6"> */}
            <div className="bg-[#2C2C2C]/60 p-6 rounded-lg border border-primary/10">
              <h4 className="text-primary font-montserrat mb-2">Governance</h4>
              <p className="text-secondary text-sm">Vote on key protocol decisions and shape the future of the ecosystem</p>
            </div>
            {/* <div className="bg-[#2C2C2C]/60 p-6 rounded-lg border border-primary/10">
              <h4 className="text-primary font-montserrat mb-2">Staking</h4>
              <p className="text-secondary text-sm">Earn passive income by participating in the network's security</p>
            </div> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;