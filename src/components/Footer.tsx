import { 
  Globe,
  Lock,
  TrendingUp
} from 'lucide-react';

const Footer = () => {
  return (
          <footer className="bg-darker py-12 px-4">
        <div className="container mx-auto text-center">
          <h3 className="text-primary text-2xl mb-6 font-playfair">Be Honorable</h3>
          <div className="flex justify-center space-x-6 mb-8">
            <Globe className="text-secondary hover:text-primary cursor-pointer w-6 h-6" />
            <Lock className="text-secondary hover:text-primary cursor-pointer w-6 h-6" />
            <TrendingUp className="text-secondary hover:text-primary cursor-pointer w-6 h-6" />
          </div>
          <p className="text-secondary">© 2024 Be Honorable. All rights reserved.</p>
        </div>
      </footer>
  );
}

export default Footer;