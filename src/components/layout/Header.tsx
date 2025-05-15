import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart, User } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import logo from '../../assets/logo.svg';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { cartItems } = useCart();
  const location = useLocation();

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Store', path: '/store' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="E-Ayurveda Logo" className="h-10 w-auto" />
          <span className={`ml-2 font-serif text-xl font-bold transition-colors duration-300 ${
            scrolled ? 'text-green-800' : 'text-white'
          }`}>
            E-Ayurveda
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`transition-colors duration-300 ${
                scrolled ? 'text-gray-700 hover:text-green-700' : 'text-white hover:text-green-100'
              } ${location.pathname === link.path ? 'font-semibold' : 'font-medium'}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            to="/store"
            className={`transition-colors duration-300 relative ${
              scrolled ? 'text-gray-700 hover:text-green-700' : 'text-white hover:text-green-100'
            }`}
          >
            <ShoppingCart size={20} />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-amber-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
          <Link
            to="/login"
            className={`transition-colors duration-300 ${
              scrolled ? 'text-gray-700 hover:text-green-700' : 'text-white hover:text-green-100'
            }`}
          >
            <User size={20} />
          </Link>
          <Link
            to="/contact"
            className={`px-4 py-2 rounded-md transition-colors duration-300 ${
              scrolled 
                ? 'bg-green-700 text-white hover:bg-green-800' 
                : 'bg-white text-green-700 hover:bg-green-50'
            }`}
          >
            Consult Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-4 md:hidden">
          <Link
            to="/store"
            className={`transition-colors duration-300 relative ${
              scrolled ? 'text-gray-700' : 'text-white'
            }`}
          >
            <ShoppingCart size={20} />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-amber-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`transition-colors duration-300 ${
              scrolled ? 'text-gray-700' : 'text-white'
            }`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-screen opacity-100 bg-white py-4' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container mx-auto px-4 flex flex-col space-y-4">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`py-2 text-gray-700 hover:text-green-700 ${
                location.pathname === link.path ? 'font-semibold' : 'font-medium'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-2 border-t border-gray-200">
            <Link
              to="/login"
              className="py-2 flex items-center text-gray-700 hover:text-green-700"
            >
              <User size={18} className="mr-2" />
              Login / Register
            </Link>
            <Link
              to="/contact"
              className="mt-4 block text-center px-4 py-2 rounded-md bg-green-700 text-white hover:bg-green-800"
            >
              Consult Now
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;