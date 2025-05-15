import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const IntroSection = () => {
  return (
    <section className="py-16 md:py-24 bg-cream-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-green-800 mb-6">
              Ancient Wisdom for Modern Wellness
            </h2>
            <p className="text-gray-700 mb-6">
              Ayurveda, the "science of life," originated in India over 5,000 years ago. 
              This holistic healing system views health as the dynamic integration of 
              environment, body, mind, and spirit.
            </p>
            <p className="text-gray-700 mb-8">
              At E-Ayurveda, we blend traditional knowledge with modern science to provide 
              natural, personalized solutions for your unique constitution. Our approach treats 
              the root cause of imbalance, not just the symptoms.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-amber-100 p-2 rounded-full mr-4">
                  <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold">1</div>
                </div>
                <div>
                  <h3 className="font-medium text-green-800 mb-1">Holistic Approach</h3>
                  <p className="text-gray-600 text-sm">Treats the whole person, not just symptoms</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-amber-100 p-2 rounded-full mr-4">
                  <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold">2</div>
                </div>
                <div>
                  <h3 className="font-medium text-green-800 mb-1">Natural Ingredients</h3>
                  <p className="text-gray-600 text-sm">Pure herbs and compounds from sustainable sources</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-amber-100 p-2 rounded-full mr-4">
                  <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold">3</div>
                </div>
                <div>
                  <h3 className="font-medium text-green-800 mb-1">Personalized Care</h3>
                  <p className="text-gray-600 text-sm">Treatments tailored to your unique constitution</p>
                </div>
              </div>
            </div>
            <Link 
              to="/about" 
              className="inline-flex items-center text-green-700 font-medium mt-8 group hover:text-green-800 transition-colors"
            >
              Learn more about Ayurveda
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="order-1 md:order-2 relative">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/6663362/pexels-photo-6663362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Ayurvedic ingredients and treatment"
                className="w-full object-cover h-[500px]"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-amber-400 rounded-lg -z-10"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-green-700 rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;