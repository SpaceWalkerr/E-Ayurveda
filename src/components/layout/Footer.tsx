import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, Youtube } from 'lucide-react';
import logo from '../../assets/logo.svg';

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center">
              <img src={logo} alt="E-Ayurveda Logo" className="h-10 w-auto" />
              <span className="ml-2 font-serif text-xl font-bold">E-Ayurveda</span>
            </Link>
            <p className="text-green-100 text-sm">
              E-Ayurveda brings ancient healing wisdom to modern healthcare, 
              offering natural remedies and holistic wellness solutions 
              rooted in traditional Ayurvedic principles.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-green-200 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-green-200 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-green-200 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-green-200 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-green-200 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-green-200 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/store" className="text-green-200 hover:text-white transition-colors">
                  Ayurvedic Store
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-green-200 hover:text-white transition-colors">
                  Book Consultation
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-green-200 hover:text-white transition-colors">
                  Login / Register
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-green-200 hover:text-white transition-colors">
                <a href="#">Ayurvedic Consultation</a>
              </li>
              <li className="text-green-200 hover:text-white transition-colors">
                <a href="#">Herbal Remedies</a>
              </li>
              <li className="text-green-200 hover:text-white transition-colors">
                <a href="#">Wellness Programs</a>
              </li>
              <li className="text-green-200 hover:text-white transition-colors">
                <a href="#">Panchakarma Therapy</a>
              </li>
              <li className="text-green-200 hover:text-white transition-colors">
                <a href="#">Dietary Guidance</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mt-1 mr-2 flex-shrink-0 text-green-200" />
                <span className="text-green-100">
                  123 Ayurveda Way, Wellness District, Natural City, 56789
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0 text-green-200" />
                <a href="tel:+1234567890" className="text-green-100 hover:text-white transition-colors">
                  +123 456 7890
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0 text-green-200" />
                <a href="mailto:info@e-ayurveda.com" className="text-green-100 hover:text-white transition-colors">
                  info@e-ayurveda.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-green-800 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-green-200 text-sm">
              &copy; {new Date().getFullYear()} E-Ayurveda. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-green-200 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-green-200 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-green-200 hover:text-white text-sm transition-colors">
                FAQ
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;