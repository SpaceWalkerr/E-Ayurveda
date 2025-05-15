import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/4021878/pexels-photo-4021878.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-black/50"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 pt-16">
        <div className="max-w-3xl">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
            Natural Healing for <span className="text-amber-400">Modern Living</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-100 mb-8 max-w-2xl">
            Discover the ancient wisdom of Ayurveda reimagined for today's health challenges. 
            Our expert-formulated remedies harness nature's power for holistic wellbeing.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/store" 
              className="bg-amber-500 hover:bg-amber-600 text-white font-medium px-6 py-3 rounded-md transition-colors duration-300 flex items-center justify-center sm:justify-start"
            >
              Shop Remedies
              <ArrowRight size={18} className="ml-2" />
            </Link>
            <Link 
              to="/contact" 
              className="bg-white hover:bg-gray-100 text-green-800 font-medium px-6 py-3 rounded-md transition-colors duration-300 flex items-center justify-center sm:justify-start"
            >
              Book Consultation
            </Link>
          </div>
          
          {/* Floating Features */}
          <div className="hidden md:flex mt-16 gap-4">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg w-44">
              <div className="text-amber-400 font-bold text-xl mb-1">100%</div>
              <div className="text-white text-sm">Natural Ingredients</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg w-44">
              <div className="text-amber-400 font-bold text-xl mb-1">5000+</div>
              <div className="text-white text-sm">Satisfied Clients</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg w-44">
              <div className="text-amber-400 font-bold text-xl mb-1">25+</div>
              <div className="text-white text-sm">Expert Practitioners</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-8 right-8 hidden lg:block">
        <div className="w-48 h-48 border-2 border-amber-300/30 rounded-full"></div>
        <div className="w-36 h-36 border-2 border-green-300/30 rounded-full absolute top-6 left-6"></div>
      </div>
    </div>
  );
};

export default Hero;