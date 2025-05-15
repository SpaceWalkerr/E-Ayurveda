import { useEffect, useRef } from 'react';
import Hero from '../components/home/Hero';
import IntroSection from '../components/home/IntroSection';
import SearchSection from '../components/home/SearchSection';
import VideoSection from '../components/home/VideoSection';
import NewsletterSection from '../components/home/NewsletterSection';
import FeaturedProducts from '../components/home/FeaturedProducts';

const Home = () => {
  // Ref for scroll animations
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="bg-cream-50">
      <Hero />
      
      <div
        ref={(el) => (sectionsRef.current[0] = el)}
        className="opacity-0 transition-opacity duration-1000 ease-in-out"
      >
        <IntroSection />
      </div>
      
      <div
        ref={(el) => (sectionsRef.current[1] = el)}
        className="opacity-0 transition-opacity duration-1000 ease-in-out"
      >
        <SearchSection />
      </div>
      
      <div
        ref={(el) => (sectionsRef.current[2] = el)}
        className="opacity-0 transition-opacity duration-1000 ease-in-out"
      >
        <FeaturedProducts />
      </div>
      
      <div
        ref={(el) => (sectionsRef.current[3] = el)}
        className="opacity-0 transition-opacity duration-1000 ease-in-out"
      >
        <VideoSection />
      </div>
      
      <div
        ref={(el) => (sectionsRef.current[4] = el)}
        className="opacity-0 transition-opacity duration-1000 ease-in-out"
      >
        <NewsletterSection />
      </div>
    </div>
  );
};

export default Home;