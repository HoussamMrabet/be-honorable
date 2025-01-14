import { 
  Milestone, 
  Rocket,
  CheckCircle,
  Clock,
  Target,
  Award,
  Gem,
  Building2,
  Globe2
} from 'lucide-react';

interface MilestoneProps {
  phase: string;
  title: string;
  description: string;
  status: 'completed' | 'current' | 'upcoming';
  icon: React.ElementType;
}

const MilestoneCard = ({ phase, title, description, status, icon: Icon }: MilestoneProps) => {
  const statusStyles = {
    completed: "border-green-500/50 bg-green-500/5",
    current: "border-primary/50 bg-primary/5",
    upcoming: "border-secondary/20 bg-secondary/5"
  };

  const iconStyles = {
    completed: "text-green-500",
    current: "text-primary",
    upcoming: "text-secondary"
  };

  return (
    <div className={`relative p-6 rounded-lg border ${statusStyles[status]} backdrop-blur-sm`}>
      <div className="flex items-start gap-4">
        <div className={`p-3 rounded-lg bg-[#2C2C2C]/60 ${iconStyles[status]}`}>
          <Icon className="w-6 h-6" />
        </div>
        <div>
          <span className="text-sm font-montserrat text-secondary">{phase}</span>
          <h3 className="text-xl font-montserrat mb-2">{title}</h3>
          <p className="text-secondary text-sm leading-relaxed">{description}</p>
        </div>
        <div className="absolute top-6 right-6">
          {status === 'completed' && <CheckCircle className="w-5 h-5 text-green-500" />}
          {status === 'current' && <Clock className="w-5 h-5 text-primary animate-pulse" />}
          {status === 'upcoming' && <Target className="w-5 h-5 text-secondary/50" />}
        </div>
      </div>
    </div>
  );
};

const Roadmap = () => {
  const milestones: MilestoneProps[] = [
    {
      phase: "Phase 1 - Q2 2024",
      title: "Foundation & Launch",
      description: "Token launch on major DEXs, initial community building, and security audits completion.",
      status: "completed",
      icon: Rocket
    },
    {
      phase: "Phase 2 - Q3 2024",
      title: "Ecosystem Growth",
      description: "Governance implementation, and strategic partnerships.",
      status: "current",
      icon: Building2
    },
    {
      phase: "Phase 3 - Q4 2024",
      title: "Market Expansion",
      description: "Major CEX listings, cross-chain integration, and enhanced liquidity pools.",
      status: "upcoming",
      icon: Globe2
    },
    {
      phase: "Phase 4 - Q1 2025",
      title: "Platform Evolution",
      description: "DeFi product suite launch, yield farming, and advanced trading features.",
      status: "upcoming",
      icon: Gem
    },
    {
      phase: "Phase 5 - Q2 2025",
      title: "Global Integration",
      description: "International expansion, institutional partnerships, and ecosystem maturity.",
      status: "upcoming",
      icon: Award
    }
  ];

  return (
    <div id='roadmap' className="py-24 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-5"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark to-transparent"></div>
      
      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-block">
            <div className="flex items-center justify-center mb-6">
              <Target className="text-primary w-12 h-12 mr-4" />
              <h2 className="text-4xl md:text-5xl">Our Roadmap</h2>
            </div>
            <p className="text-xl text-secondary font-montserrat">
              The Journey to <span className="text-primary">Greatness</span>
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto">
          <div className="grid gap-8 relative">
            {/* Connecting Line */}
            <div className="absolute left-[27px] top-[80px] bottom-[80px] w-0.5 bg-gradient-to-b from-primary via-primary to-secondary/20 hidden lg:block"></div>
            
            {/* Milestones */}
            {milestones.map((milestone, index) => (
              <div key={milestone.phase} className="relative">
                <MilestoneCard {...milestone} />
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-[#2C2C2C]/60 px-8 py-6 rounded-lg border border-primary/20 backdrop-blur-sm">
            <h3 className="text-2xl font-montserrat mb-3">Join Our Journey</h3>
            <p className="text-secondary mb-6">Be part of something greater than yourself</p>
            <button className="bg-primary/10 text-primary px-8 py-3 rounded-lg font-montserrat font-bold hover:bg-primary/20 transition-colors duration-300">
              Join Community
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;