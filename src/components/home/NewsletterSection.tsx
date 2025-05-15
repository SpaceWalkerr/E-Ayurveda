import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    // Basic validation
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    // Simulate API call
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setEmail('');
    }, 1500);
  };

  return (
    <section className="py-16 md:py-24 bg-green-800 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="relative inline-block mb-6">
            <Send size={32} className="text-amber-400" />
            <div className="absolute top-0 left-0 animate-ping opacity-30">
              <Send size={32} className="text-amber-400" />
            </div>
          </div>
          
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Join Our Wellness Journey
          </h2>
          <p className="text-green-100 mb-8 max-w-xl mx-auto">
            Subscribe to our newsletter for seasonal health tips, exclusive remedies, 
            and special offers on our Ayurvedic products.
          </p>
          
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="relative max-w-md mx-auto">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your email address"
                  className={`w-full px-4 py-3 pr-12 rounded-full bg-white/10 backdrop-blur-sm border ${
                    error ? 'border-red-400' : 'border-green-600'
                  } focus:outline-none focus:ring-2 focus:ring-amber-400 text-white placeholder-green-200`}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="absolute right-1 top-1 h-[calc(100%-8px)] aspect-square rounded-full bg-amber-500 hover:bg-amber-600 transition-colors duration-300 flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : (
                    <Send size={18} className="text-white" />
                  )}
                </button>
              </div>
              {error && <p className="text-red-300 text-sm mt-2 text-left pl-4">{error}</p>}
            </form>
          ) : (
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg max-w-md mx-auto animate-fade-in">
              <CheckCircle size={48} className="text-amber-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Thank You for Subscribing!</h3>
              <p className="text-green-100">
                You've successfully joined our wellness community. Look out for 
                our next newsletter in your inbox.
              </p>
            </div>
          )}
          
          <div className="mt-8 text-green-200 text-sm">
            <p>
              We respect your privacy and will never share your information.
              You can unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;