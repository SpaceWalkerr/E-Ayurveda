import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen pt-16 bg-cream-50 flex items-center justify-center">
      <div className="container mx-auto px-4 py-12 text-center">
        <div className="mb-8">
          <div className="inline-block p-6 bg-green-100 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-700">
              <rect x="3" y="3" width="7" height="7"></rect>
              <rect x="14" y="3" width="7" height="7"></rect>
              <rect x="14" y="14" width="7" height="7"></rect>
              <rect x="3" y="14" width="7" height="7"></rect>
            </svg>
          </div>
        </div>
        <h1 className="font-serif text-6xl md:text-8xl font-bold text-green-800 mb-4">404</h1>
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-700 mb-6">Page Not Found</h2>
        <p className="text-gray-600 max-w-md mx-auto mb-8">
          The page you are looking for might have been removed, had its name changed, 
          or is temporarily unavailable.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            to="/"
            className="bg-green-700 hover:bg-green-800 text-white py-2 px-6 rounded-md transition-colors flex items-center"
          >
            <Home size={18} className="mr-2" />
            Go to Homepage
          </Link>
          <button 
            onClick={() => window.history.back()}
            className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 py-2 px-6 rounded-md transition-colors flex items-center"
          >
            <ArrowLeft size={18} className="mr-2" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;