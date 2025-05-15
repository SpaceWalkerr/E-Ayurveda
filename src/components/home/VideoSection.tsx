import { useState, useRef, useEffect } from 'react';
import { Play } from 'lucide-react';

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLIFrameElement>(null);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handlePlayVideo = () => {
    setIsPlaying(true);
  };

  return (
    <section 
      ref={sectionRef}
      className={`py-16 md:py-24 bg-cream-50 transition-opacity duration-1000 ${
        isInView ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-green-800 mb-4">
            Discover the Ancient Wisdom
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Learn about the foundational principles of Ayurveda and how they can be applied
            to your modern lifestyle for optimal health and wellbeing.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video bg-black rounded-xl overflow-hidden shadow-xl">
            {!isPlaying ? (
              <>
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: "url('https://images.pexels.com/photos/6476116/pexels-photo-6476116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')"
                  }}
                >
                  <div className="absolute inset-0 bg-black/40"></div>
                </div>
                <button 
                  onClick={handlePlayVideo}
                  className="absolute inset-0 flex items-center justify-center group"
                >
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-5 group-hover:bg-white/30 transition-all duration-300 group-hover:scale-110">
                    <Play size={40} fill="white" className="text-white ml-1" />
                  </div>
                </button>
                <div className="absolute bottom-8 left-8 right-8 text-white text-left">
                  <h3 className="font-serif text-2xl font-bold mb-2">
                    Introduction to Ayurveda
                  </h3>
                  <p className="text-gray-200">
                    Understand the three doshas and how they influence your health and personality
                  </p>
                </div>
              </>
            ) : (
              <iframe
                ref={videoRef}
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/uQlJEZOUKpw?autoplay=1"
                title="Introduction to Ayurveda"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0"
              ></iframe>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2a4.4 4.4 0 0 0-4 6.9V12a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V8.9A4.4 4.4 0 0 0 12 2" />
                  <path d="M18 19a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4" />
                </svg>
              </div>
              <h3 className="font-serif text-lg font-semibold text-green-800 mb-2">Vata Dosha</h3>
              <p className="text-gray-600 text-sm">
                Associated with air and space, governs movement and change. When balanced, creativity and vitality flourish.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-600">
                  <path d="M15 5.9A4 4 0 0 0 12 4a4 4 0 0 0-3 5.9V22h6V5.9Z" />
                  <path d="M15 9H9" />
                  <path d="M9 6c0-1.7 1.3-3 3-3h0c1.7 0 3 1.3 3 3s-1.3 3-3 3h0c-1.7 0-3-1.3-3-3Z" />
                </svg>
              </div>
              <h3 className="font-serif text-lg font-semibold text-amber-800 mb-2">Pitta Dosha</h3>
              <p className="text-gray-600 text-sm">
                Related to fire and water, regulates metabolism and transformation. When balanced, intelligence and courage thrive.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                  <path d="M4 14.9Q4 11.9 5.75 9.2 7.5 6.5 10.6 5.2 13.7 3.9 17.1 4.4 20.5 4.8 21.9 7.1 23.3 9.4 21.9 12 20.5 14.5 17.1 15.1 13.7 15.7 10.6 14.4 7.5 13.1 5.75 10.4 4 7.7 4 4.7" />
                  <path d="M15 18a6 6 0 0 1-6 6" />
                </svg>
              </div>
              <h3 className="font-serif text-lg font-semibold text-blue-800 mb-2">Kapha Dosha</h3>
              <p className="text-gray-600 text-sm">
                Connected to earth and water, maintains structure and lubrication. When balanced, strength and stability prevail.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;