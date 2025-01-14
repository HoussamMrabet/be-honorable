import { 
	Mail, 
	MessageSquare, 
	Send, 
	Clock, 
	MapPin,
	Phone,
	ArrowRight
  } from 'lucide-react';
  
  const Contact = () => {
	return (
	  <div className="py-24 px-4 relative overflow-hidden">
		{/* Background Elements */}
		<div className="absolute inset-0">
		  <img 
			src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80" 
			alt="Luxury Office" 
			className="w-full h-full object-cover opacity-5"
		  />
		  <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark/95 to-dark"></div>
		</div>
		
		<div className="container mx-auto relative z-10">
		  {/* Header */}
		  <div className="max-w-4xl mx-auto text-center mb-16">
			<div className="inline-block">
			  <div className="flex items-center justify-center mb-6">
				<MessageSquare className="text-primary w-12 h-12 mr-4" />
				<h2 className="text-4xl md:text-5xl">Get in Touch</h2>
			  </div>
			  <p className="text-xl text-secondary font-montserrat">
				Join the <span className="text-primary">Elite</span> Network
			  </p>
			</div>
		  </div>
  
		  <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
			{/* Contact Form */}
			<div className="bg-[#2C2C2C]/80 p-8 rounded-lg backdrop-blur-sm border border-primary/20">
			  <form className="space-y-6">
				<div className="grid md:grid-cols-2 gap-6">
				  <div>
					<label className="block text-sm font-montserrat mb-2">First Name</label>
					<input 
					  type="text"
					  className="w-full bg-dark/50 border border-primary/20 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors duration-300"
					  placeholder="John"
					/>
				  </div>
				  <div>
					<label className="block text-sm font-montserrat mb-2">Last Name</label>
					<input 
					  type="text"
					  className="w-full bg-dark/50 border border-primary/20 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors duration-300"
					  placeholder="Doe"
					/>
				  </div>
				</div>
				
				<div>
				  <label className="block text-sm font-montserrat mb-2">Email</label>
				  <input 
					type="email"
					className="w-full bg-dark/50 border border-primary/20 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors duration-300"
					placeholder="john@example.com"
				  />
				</div>
				
				<div>
				  <label className="block text-sm font-montserrat mb-2">Subject</label>
				  <select className="w-full bg-dark/50 border border-primary/20 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors duration-300">
					<option value="">Select a topic</option>
					<option value="investment">Investment Opportunities</option>
					<option value="partnership">Partnership Inquiry</option>
					<option value="support">Technical Support</option>
					<option value="other">Other</option>
				  </select>
				</div>
				
				<div>
				  <label className="block text-sm font-montserrat mb-2">Message</label>
				  <textarea 
					rows={4}
					className="w-full bg-dark/50 border border-primary/20 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors duration-300"
					placeholder="Your message here..."
				  ></textarea>
				</div>
				
				<button 
				  type="submit"
				  className="w-full bg-primary/70 hover:bg-primary/90 text-dark font-bold py-4 rounded-lg transition-colors duration-300 flex items-center justify-center group"
				>
				  Send Message
				  <Send className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
				</button>
			  </form>
			</div>
  
			{/* Contact Information */}
			<div className="space-y-8">
			  {/* Office Hours Card */}
			  <div className="bg-[#2C2C2C]/80 p-8 rounded-lg backdrop-blur-sm border border-primary/20">
				<div className="flex items-start gap-4">
				  <div className="bg-primary/10 p-3 rounded-lg">
					<Clock className="w-6 h-6 text-primary" />
				  </div>
				  <div>
					<h3 className="text-xl font-montserrat mb-2">24/7 Support</h3>
					<p className="text-secondary">Our team is available round the clock to assist you with any inquiries.</p>
				  </div>
				</div>
			  </div>
  
			  {/* Location Card */}
			  <div className="bg-[#2C2C2C]/80 p-8 rounded-lg backdrop-blur-sm border border-primary/20">
				<div className="flex items-start gap-4">
				  <div className="bg-primary/10 p-3 rounded-lg">
					<MapPin className="w-6 h-6 text-primary" />
				  </div>
				  <div>
					<h3 className="text-xl font-montserrat mb-2">Global Presence</h3>
					<p className="text-secondary">With offices in New York, London, and Singapore, we're always near you.</p>
				  </div>
				</div>
			  </div>
  
			  {/* Quick Contact Options */}
			  <div className="grid grid-cols-2 gap-4">
				<a href="tel:+1234567890" className="bg-[#2C2C2C]/80 p-6 rounded-lg backdrop-blur-sm border border-primary/20 hover:border-primary transition-colors duration-300 group">
				  <Phone className="w-6 h-6 text-primary mb-3" />
				  <h4 className="font-montserrat mb-1">Call Us</h4>
				  <p className="text-secondary text-sm flex items-center">
					Direct Line
					<ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" />
				  </p>
				</a>
				
				<a href="mailto:contact@example.com" className="bg-[#2C2C2C]/80 p-6 rounded-lg backdrop-blur-sm border border-primary/20 hover:border-primary transition-colors duration-300 group">
				  <Mail className="w-6 h-6 text-primary mb-3" />
				  <h4 className="font-montserrat mb-1">Email Us</h4>
				  <p className="text-secondary text-sm flex items-center">
					Send Email
					<ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" />
				  </p>
				</a>
			  </div>
			</div>
		  </div>
		</div>
	  </div>
	);
  };
  
  export default Contact;