import { 
  Instagram, 
  Send, 
  Twitter, 
  Globe,
  Users,
  Quote,
  ArrowRight
} from 'lucide-react';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  avatar: string;
}

const Testimonial = ({ quote, author, role, avatar }: TestimonialProps) => (
  <div id='community' className="relative group">
    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
    <div className="relative bg-[#2C2C2C]/90 p-8 rounded-lg border border-primary/20 h-full transform transition-transform duration-300 hover:-translate-y-1">
      <Quote className="w-8 h-8 text-primary/30 mb-4" />
      <p className="text-secondary italic mb-6">{quote}</p>
      <div className="flex items-center">
        <img 
          src={avatar} 
          alt={author} 
          className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
        />
        <div className="ml-4">
          <h4 className="font-montserrat text-lg">{author}</h4>
          <p className="text-secondary text-sm">{role}</p>
        </div>
      </div>
    </div>
  </div>
);

const SocialLink = ({ 
  icon: Icon, 
  platform, 
  handle, 
  members 
}: { 
  icon: React.ElementType; 
  platform: string; 
  handle: string;
  members: string;
}) => (
  <a href="#" className="block group">
    <div className="bg-[#2C2C2C]/80 p-6 rounded-lg border border-primary/20 backdrop-blur-sm transform transition-all duration-300 hover:-translate-y-1 hover:bg-[#2C2C2C]">
      <div className="flex items-center justify-between mb-4">
        <div className="bg-primary/10 p-3 rounded-lg">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <ArrowRight className="w-5 h-5 text-primary/50 group-hover:text-primary transition-colors duration-300" />
      </div>
      <h3 className="font-montserrat text-lg mb-1">{platform}</h3>
      <p className="text-secondary text-sm mb-3">{handle}</p>
      <p className="text-xs text-primary">{members} members</p>
    </div>
  </a>
);

const Community = () => {
  const testimonials: TestimonialProps[] = [
    {
      quote: "Being part of this community has transformed my perspective on wealth building. It's not just about profits, it's about honor.",
      author: "Alex Chen",
      role: "Early Investor",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
    },
    {
      quote: "The most engaged and supportive crypto community I've ever been part of. True values, real vision.",
      author: "Sarah Williams",
      role: "Community Leader",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
    },
    {
      quote: "This project stands out for its unwavering commitment to both growth and ethical principles.",
      author: "Marcus Johnson",
      role: "Blockchain Analyst",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80"
    }
  ];

  const socialLinks = [
    {
      platform: "Instagram",
      handle: "Join our server",
      members: "127.8K",
      icon: Instagram
    },
    {
      platform: "Telegram",
      handle: "@BeHonorableOfficial",
      members: "89.3K",
      icon: Send
    },
    {
      platform: "X",
      handle: "@BeHonorable",
      members: "245.6K",
      icon: Twitter
    }
  ];

  return (
    <div className="py-24 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-5"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark to-transparent"></div>
      
      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-block">
            <div className="flex items-center justify-center mb-6">
              <Users className="text-primary w-12 h-12 mr-4" />
              <h2 className="text-4xl md:text-5xl">Join the Movement</h2>
            </div>
            <p className="text-xl text-secondary font-montserrat">
              Be part of a community that values <span className="text-primary">hustle</span>, <span className="text-primary">honor</span>, and <span className="text-primary">strength</span>
            </p>
          </div>
        </div>

        {/* Social Links */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-20">
          {socialLinks.map((link) => (
            <SocialLink key={link.platform} {...link} />
          ))}
        </div>

        {/* Community Stats */}
        <div className="max-w-4xl mx-auto bg-[#2C2C2C]/80 p-8 rounded-lg backdrop-blur-sm border border-primary/20 mb-20">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-3xl font-playfair text-primary mb-2">450K+</p>
              <p className="text-secondary">Community Members</p>
            </div>
            <div>
              <p className="text-3xl font-playfair text-primary mb-2">120+</p>
              <p className="text-secondary">Countries</p>
            </div>
            <div>
              <p className="text-3xl font-playfair text-primary mb-2">24/7</p>
              <p className="text-secondary">Active Support</p>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="text-2xl font-montserrat text-center mb-12">What Our Community Says</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Testimonial key={index} {...testimonial} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="inline-block bg-[#2C2C2C]/60 px-12 py-8 rounded-lg border border-primary/20 backdrop-blur-sm">
            <h3 className="text-2xl font-montserrat mb-3">Ready to Join Us?</h3>
            <p className="text-secondary mb-6">Connect with like-minded individuals who share your values</p>
            <button className="bg-primary hover:bg-primary/90 text-dark px-8 py-3 rounded-lg font-montserrat font-bold transition-colors duration-300 flex items-center justify-center mx-auto">
              Join Discord
              <MessageCircle className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;