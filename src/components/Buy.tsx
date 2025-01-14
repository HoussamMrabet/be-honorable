import { 
  Wallet, 
  CreditCard, 
  ArrowRightCircle, 
  ShieldCheck,
  ChevronRight,
  ExternalLink
} from 'lucide-react';

interface StepProps {
  number: number;
  title: string;
  description: string;
  icon: React.ElementType;
}

const Step = ({ number, title, description, icon: Icon }: StepProps) => (
  <div className="relative group">
    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
    <div className="relative bg-[#2C2C2C]/90 p-8 rounded-lg border border-primary/20 h-full transform transition-transform duration-300 hover:-translate-y-1">
      <div className="absolute -top-4 -left-4 w-12 h-12 bg-dark border-2 border-primary rounded-full flex items-center justify-center font-montserrat text-xl text-primary">
        {number}
      </div>
      <div className="mb-6 flex justify-end">
        <div className="bg-primary/10 p-3 rounded-lg">
          <Icon className="w-8 h-8 text-primary" />
        </div>
      </div>
      <h3 className="text-xl font-montserrat mb-3">{title}</h3>
      <p className="text-secondary text-sm leading-relaxed">{description}</p>
    </div>
  </div>
);

const Buy = () => {
  const steps: StepProps[] = [
    {
      number: 1,
      title: "Create Your Wallet",
      description: "Download and set up MetaMask or Trust Wallet to store your tokens securely. Back up your recovery phrase in a safe place.",
      icon: Wallet
    },
    {
      number: 2,
      title: "Fund Your Wallet",
      description: "Purchase ETH through your preferred exchange or payment method and transfer it to your wallet address.",
      icon: CreditCard
    },
    {
      number: 3,
      title: "Acquire BE Token",
      description: "Connect your wallet to our approved DEX and swap ETH for BE tokens. Always verify the contract address.",
      icon: ArrowRightCircle
    }
  ];

  return (
    <div className="py-24 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-5"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark to-transparent"></div>
      
      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-block">
            <div className="flex items-center justify-center mb-6">
              <ShieldCheck className="text-primary w-12 h-12 mr-4" />
              <h2 className="text-4xl md:text-5xl">How to Get Your Token</h2>
            </div>
            <p className="text-xl text-secondary font-montserrat">
              Join the <span className="text-primary">Honorable</span> Movement
            </p>
          </div>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {steps.map((step) => (
            <Step key={step.number} {...step} />
          ))}
        </div>

        {/* Security Notice */}
        <div className="max-w-3xl mx-auto bg-[#2C2C2C]/80 p-8 rounded-lg backdrop-blur-sm border border-primary/20 mb-16">
          <div className="flex items-start gap-4">
            <div className="bg-primary/10 p-3 rounded-lg">
              <ShieldCheck className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-montserrat mb-2">Security First</h3>
              <p className="text-secondary text-sm leading-relaxed">
                Always verify you're using our official smart contract address. Never share your private keys or recovery phrase. 
                Be cautious of impersonators and fake tokens.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-block bg-[#2C2C2C]/60 px-12 py-8 rounded-lg border border-primary/20 backdrop-blur-sm">
            <h3 className="text-2xl font-montserrat mb-3">Ready to Join?</h3>
            <p className="text-secondary mb-6">Become part of our exclusive community</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary hover:bg-primary/90 text-dark px-8 py-3 rounded-lg font-montserrat font-bold transition-colors duration-300 flex items-center justify-center">
                Buy Now
                <ChevronRight className="ml-2 w-5 h-5" />
              </button>
              <button className="bg-[#2C2C2C] hover:bg-[#3C3C3C] px-8 py-3 rounded-lg font-montserrat font-bold transition-colors duration-300 flex items-center justify-center border border-primary/20">
                View Chart
                <ExternalLink className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buy;