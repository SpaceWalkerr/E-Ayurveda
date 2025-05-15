import { useEffect, useRef } from 'react';

const About = () => {
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
    <div className="pt-16 bg-cream-50">
      {/* Hero Section */}
      <div className="relative bg-green-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="none" stroke="white" strokeWidth="0.5"></path>
            <path d="M0,0 C50,50 50,50 100,0" fill="none" stroke="white" strokeWidth="0.5"></path>
            <path d="M0,100 C50,50 50,50 100,100" fill="none" stroke="white" strokeWidth="0.5"></path>
            <circle cx="50" cy="50" r="30" fill="none" stroke="white" strokeWidth="0.5"></circle>
            <circle cx="50" cy="50" r="20" fill="none" stroke="white" strokeWidth="0.5"></circle>
          </svg>
        </div>
        <div className="container mx-auto px-4 py-20 md:py-28 relative">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Our Ayurvedic Journey
            </h1>
            <p className="text-xl text-green-100 mb-6">
              Discover the ancient wisdom that forms the foundation of our approach 
              to holistic wellness and natural healing.
            </p>
            <p className="text-green-200">
              Founded on traditional principles, embracing modern science
            </p>
          </div>
        </div>
      </div>

      {/* History Section */}
      <div
        ref={el => (sectionsRef.current[0] = el)}
        className="py-16 md:py-24 opacity-0 transition-opacity duration-1000 ease-in-out"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl font-bold text-green-800 mb-6">
                The Origins of Ayurveda
              </h2>
              <p className="text-gray-700 mb-4">
                Ayurveda, meaning "knowledge of life," is one of the world's oldest holistic 
                healing systems, developed more than 5,000 years ago in India. It's based on the 
                belief that health and wellness depend on a delicate balance between the mind, 
                body, and spirit.
              </p>
              <p className="text-gray-700 mb-4">
                The primary texts of Ayurveda, the Charaka Samhita and Sushruta Samhita, 
                were written around 1000 BCE and contain detailed information on disease, 
                diagnosis, treatment, surgical techniques, and medicinal plants.
              </p>
              <p className="text-gray-700">
                At E-Ayurveda, we honor this ancient tradition while embracing modern 
                scientific understanding to bring you authentic, effective remedies for 
                contemporary health challenges.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/301599/pexels-photo-301599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Ancient Ayurvedic manuscript"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-5 -left-5 w-24 h-24 border-2 border-amber-400 rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Three Doshas Section */}
      <div
        ref={el => (sectionsRef.current[1] = el)}
        className="py-16 md:py-24 bg-green-50 opacity-0 transition-opacity duration-1000 ease-in-out"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-green-800 mb-4">
              The Three Doshas
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Ayurveda identifies three fundamental energies (doshas) that govern our 
              physical and mental processes. Each person has a unique proportion of these 
              three doshas, which defines their constitution (prakriti).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-green-600 transform hover:-translate-y-1 transition-transform duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                  <path d="M20 22v-9.5A9 9 0 0 0 7.83 4.97M10.5 2A12.2 12.2 0 0 0 2 12v10M18 20l2 2 2-2"></path>
                </svg>
              </div>
              <h3 className="font-serif text-xl font-semibold text-center text-green-800 mb-4">Vata</h3>
              <p className="text-gray-600 text-center mb-4">
                The energy of movement, composed of Space and Air elements. Controls 
                bodily functions associated with motion, including breathing and circulation.
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="bg-green-100 text-green-600 text-xs font-medium px-2 py-1 rounded mr-2">Qualities</span>
                  <span className="text-sm text-gray-600">Dry, light, cold, rough, subtle, mobile</span>
                </div>
                <div className="flex items-center">
                  <span className="bg-green-100 text-green-600 text-xs font-medium px-2 py-1 rounded mr-2">Balances</span>
                  <span className="text-sm text-gray-600">Creativity, flexibility, quickness</span>
                </div>
                <div className="flex items-center">
                  <span className="bg-green-100 text-green-600 text-xs font-medium px-2 py-1 rounded mr-2">Imbalances</span>
                  <span className="text-sm text-gray-600">Anxiety, insomnia, dry skin</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-amber-600 transform hover:-translate-y-1 transition-transform duration-300">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-600">
                  <path d="M8 15H16M8 9H16M19 2H5C3.34315 2 2 3.34315 2 5V19C2 20.6569 3.34315 22 5 22H19C20.6569 22 22 20.6569 22 19V5C22 3.34315 20.6569 2 19 2Z"></path>
                </svg>
              </div>
              <h3 className="font-serif text-xl font-semibold text-center text-amber-800 mb-4">Pitta</h3>
              <p className="text-gray-600 text-center mb-4">
                The energy of transformation, composed of Fire and Water elements. Governs 
                metabolism, digestion, and all biochemical processes.
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="bg-amber-100 text-amber-600 text-xs font-medium px-2 py-1 rounded mr-2">Qualities</span>
                  <span className="text-sm text-gray-600">Hot, sharp, light, oily, liquid, mobile</span>
                </div>
                <div className="flex items-center">
                  <span className="bg-amber-100 text-amber-600 text-xs font-medium px-2 py-1 rounded mr-2">Balances</span>
                  <span className="text-sm text-gray-600">Intelligence, courage, leadership</span>
                </div>
                <div className="flex items-center">
                  <span className="bg-amber-100 text-amber-600 text-xs font-medium px-2 py-1 rounded mr-2">Imbalances</span>
                  <span className="text-sm text-gray-600">Inflammation, irritability, acid reflux</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-blue-600 transform hover:-translate-y-1 transition-transform duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                  <path d="M20 22v-9.5A8 8 0 0 0 4 12V2m0 20v-8.5a8 8 0 0 1 16 0V22"></path>
                </svg>
              </div>
              <h3 className="font-serif text-xl font-semibold text-center text-blue-800 mb-4">Kapha</h3>
              <p className="text-gray-600 text-center mb-4">
                The energy of structure, composed of Earth and Water elements. Provides 
                stability, lubrication, and maintains body tissues.
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="bg-blue-100 text-blue-600 text-xs font-medium px-2 py-1 rounded mr-2">Qualities</span>
                  <span className="text-sm text-gray-600">Heavy, slow, cold, oily, smooth, dense</span>
                </div>
                <div className="flex items-center">
                  <span className="bg-blue-100 text-blue-600 text-xs font-medium px-2 py-1 rounded mr-2">Balances</span>
                  <span className="text-sm text-gray-600">Stability, strength, endurance</span>
                </div>
                <div className="flex items-center">
                  <span className="bg-blue-100 text-blue-600 text-xs font-medium px-2 py-1 rounded mr-2">Imbalances</span>
                  <span className="text-sm text-gray-600">Congestion, weight gain, lethargy</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Eight Specialties Section */}
      <div
        ref={el => (sectionsRef.current[2] = el)}
        className="py-16 md:py-24 opacity-0 transition-opacity duration-1000 ease-in-out"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-green-800 mb-4">
              The Eight Branches of Ayurveda
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Ayurveda has eight specialized branches of medicine, each focusing on 
              different aspects of health and healing. These branches form a comprehensive 
              system for addressing all aspects of wellbeing.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-600">
                  <path d="M21 14.5a2.5 2.5 0 0 1-2.5 2.5H5"></path>
                  <path d="M5 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path>
                  <path d="M3 5v10"></path>
                  <path d="M3 7a2 2 0 0 1 2-2h14"></path>
                  <path d="M19 5a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z"></path>
                  <path d="M3 15a3 3 0 0 0 2 2.83"></path>
                  <path d="M21 11a3 3 0 0 0-2-2.83"></path>
                </svg>
              </div>
              <h3 className="font-serif text-lg font-semibold text-green-800 mb-2">Kayachikitsa</h3>
              <p className="text-gray-600 text-sm">
                Internal medicine focusing on whole-body treatment through herbs, diet, and lifestyle
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                  <path d="M21 6v2a4 4 0 0 1-4 4h-3a4 4 0 0 1-4-4V6"></path>
                  <path d="M10 12v6"></path>
                  <path d="M3 22v-2a4 4 0 0 1 4-4c.4 0 .8.1 1.1.2"></path>
                  <path d="M14 22v-6"></path>
                  <circle cx="7" cy="6" r="3"></circle>
                  <line x1="7" y1="3" x2="7" y2="9"></line>
                  <line x1="4" y1="6" x2="10" y2="6"></line>
                </svg>
              </div>
              <h3 className="font-serif text-lg font-semibold text-green-800 mb-2">Balachikitsa</h3>
              <p className="text-gray-600 text-sm">
                Pediatrics, addressing the health needs of infants and children with gentle treatments
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                  <path d="M7.753 9.282a14.514 14.514 0 0 1 8.48 0"></path>
                  <path d="M7 19a7 7 0 0 1-7-7v-1.53a.282.282 0 0 1 .365-.268 14.482 14.482 0 0 0 3.635.48c1.908 0 3.751-.35 5.432-1a.09.09 0 0 1 .075-.006"></path>
                  <path d="M17 19a7 7 0 0 0 7-7v-1.53a.282.282 0 0 0-.365-.268 14.482 14.482 0 0 1-3.635.48c-1.908 0-3.751-.35-5.432-1a.09.09 0 0 0-.075-.006"></path>
                  <path d="M12 18a4 4 0 0 0 4-4"></path>
                  <circle cx="12" cy="18" r="4"></circle>
                  <path d="M12 18a4 4 0 0 0-4-4"></path>
                </svg>
              </div>
              <h3 className="font-serif text-lg font-semibold text-green-800 mb-2">Graha Chikitsa</h3>
              <p className="text-gray-600 text-sm">
                Psychology and spiritual healing, addressing mental health through balancing energies
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-600">
                  <path d="M15 3h6v6"></path>
                  <path d="M21 3l-7 7"></path>
                  <path d="M8 17l-5 5"></path>
                  <path d="M3 8A5 5 0 0 1 8 3"></path>
                  <path d="M19 19a16 16 0 0 1-16-16"></path>
                </svg>
              </div>
              <h3 className="font-serif text-lg font-semibold text-green-800 mb-2">Shalya Tantra</h3>
              <p className="text-gray-600 text-sm">
                Surgical procedures developed by ancient practitioners, including techniques still used today
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600">
                  <path d="M12 3v4"></path>
                  <path d="M4 7h16"></path>
                  <path d="M7 7v6a5 5 0 0 0 10 0V7"></path>
                  <path d="M5 19v.8c0 .7.58 1.2 1.22 1.2H17.78c.64 0 1.22-.59 1.22-1.28V19"></path>
                  <path d="M5 16h14"></path>
                </svg>
              </div>
              <h3 className="font-serif text-lg font-semibold text-green-800 mb-2">Shalakya Tantra</h3>
              <p className="text-gray-600 text-sm">
                Treatment of conditions above the clavicle, including eye, ear, nose and throat
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-600">
                  <path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3"></path>
                  <path d="M3 11v5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H7v-2a2 2 0 0 0-4 0Z"></path>
                  <path d="M5 18v2"></path>
                  <path d="M19 18v2"></path>
                </svg>
              </div>
              <h3 className="font-serif text-lg font-semibold text-green-800 mb-2">Vajikarana</h3>
              <p className="text-gray-600 text-sm">
                Reproductive health and aphrodisiacs, focusing on fertility and vitality
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-600">
                  <path d="M16 6H8c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h7.386a1 1 0 0 1 .857.429L19 22V15a2 2 0 0 0-2-2h-.512A1.988 1.988 0 0 0 16 10V7c0-.55.395-.968.959-.99L17 6Z"></path>
                  <path d="M9.5 10h.01"></path>
                  <path d="M12.5 10h.01"></path>
                  <path d="M15.5 10h.01"></path>
                </svg>
              </div>
              <h3 className="font-serif text-lg font-semibold text-green-800 mb-2">Rasayana</h3>
              <p className="text-gray-600 text-sm">
                Rejuvenation therapy for longevity and vitality, supporting healthy aging
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-600">
                  <path d="m13 2 9 5v10l-9 5-9-5V7l9-5Z"></path>
                  <path d="m13 7 5.5 3-5.5 3-5.5-3L13 7Z"></path>
                  <path d="M13 13v9"></path>
                  <path d="M19 10v4"></path>
                  <path d="M7 10v4"></path>
                </svg>
              </div>
              <h3 className="font-serif text-lg font-semibold text-green-800 mb-2">Agada Tantra</h3>
              <p className="text-gray-600 text-sm">
                Toxicology and detoxification, treating poisoning and supporting body purification
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div
        ref={el => (sectionsRef.current[3] = el)}
        className="py-16 md:py-24 bg-green-50 opacity-0 transition-opacity duration-1000 ease-in-out"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-green-800 mb-4">
              The Evolution of Ayurveda
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              From ancient origins to modern practice, Ayurveda has evolved while 
              maintaining its core principles of natural healing and balance.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-200"></div>

            {/* Timeline Items */}
            <div className="relative flex flex-col space-y-12 md:space-y-24">
              <div className="relative flex items-center justify-end md:justify-between md:flex-row-reverse">
                <div className="md:w-1/2 md:pl-12">
                  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 md:ml-6">
                    <span className="text-xs font-medium text-amber-600 mb-1 block">5000 BCE</span>
                    <h3 className="font-serif text-xl font-bold text-green-800 mb-2">Ancient Origins</h3>
                    <p className="text-gray-600">
                      The roots of Ayurveda are found in the Vedas, ancient Indian texts. 
                      Early healing practices begin to form into a systematic approach 
                      to wellness and disease prevention.
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <div className="w-8 h-8 bg-amber-500 rounded-full"></div>
                </div>
                <div className="md:w-1/2 hidden md:block"></div>
              </div>

              <div className="relative flex items-center justify-end md:justify-between">
                <div className="md:w-1/2 md:pr-12">
                  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 md:mr-6">
                    <span className="text-xs font-medium text-amber-600 mb-1 block">1000 BCE - 800 BCE</span>
                    <h3 className="font-serif text-xl font-bold text-green-800 mb-2">Classical Period</h3>
                    <p className="text-gray-600">
                      The fundamental texts Charaka Samhita (medicine) and Sushruta Samhita 
                      (surgery) are compiled, establishing Ayurveda as a comprehensive 
                      medical system with eight specialized branches.
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <div className="w-8 h-8 bg-green-600 rounded-full"></div>
                </div>
                <div className="md:w-1/2 hidden md:block"></div>
              </div>

              <div className="relative flex items-center justify-end md:justify-between md:flex-row-reverse">
                <div className="md:w-1/2 md:pl-12">
                  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 md:ml-6">
                    <span className="text-xs font-medium text-amber-600 mb-1 block">500 CE - 1500 CE</span>
                    <h3 className="font-serif text-xl font-bold text-green-800 mb-2">Medieval Expansion</h3>
                    <p className="text-gray-600">
                      Ayurvedic knowledge spreads throughout Asia, influencing 
                      Chinese, Tibetan, and Arabic medicine. New texts and commentaries 
                      enrich the tradition with regional herbal knowledge.
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
                </div>
                <div className="md:w-1/2 hidden md:block"></div>
              </div>

              <div className="relative flex items-center justify-end md:justify-between">
                <div className="md:w-1/2 md:pr-12">
                  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 md:mr-6">
                    <span className="text-xs font-medium text-amber-600 mb-1 block">1800s - 1900s</span>
                    <h3 className="font-serif text-xl font-bold text-green-800 mb-2">Colonial Challenge</h3>
                    <p className="text-gray-600">
                      During colonial rule in India, Western medicine is 
                      promoted over traditional practices. Ayurveda faces suppression 
                      but continues to be practiced in rural areas and by traditional families.
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <div className="w-8 h-8 bg-red-600 rounded-full"></div>
                </div>
                <div className="md:w-1/2 hidden md:block"></div>
              </div>

              <div className="relative flex items-center justify-end md:justify-between md:flex-row-reverse">
                <div className="md:w-1/2 md:pl-12">
                  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 md:ml-6">
                    <span className="text-xs font-medium text-amber-600 mb-1 block">1947 - Present</span>
                    <h3 className="font-serif text-xl font-bold text-green-800 mb-2">Modern Revival</h3>
                    <p className="text-gray-600">
                      After India's independence, efforts to revive Ayurveda lead to 
                      government recognition and funding. Research institutions, colleges, 
                      and hospitals dedicated to Ayurveda are established across India.
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <div className="w-8 h-8 bg-purple-600 rounded-full"></div>
                </div>
                <div className="md:w-1/2 hidden md:block"></div>
              </div>

              <div className="relative flex items-center justify-end md:justify-between">
                <div className="md:w-1/2 md:pr-12">
                  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 md:mr-6">
                    <span className="text-xs font-medium text-amber-600 mb-1 block">1980s - Present</span>
                    <h3 className="font-serif text-xl font-bold text-green-800 mb-2">Global Spread</h3>
                    <p className="text-gray-600">
                      Ayurveda gains popularity worldwide as interest in holistic and 
                      alternative medicine grows. Scientific research begins to validate 
                      many traditional practices, leading to integration with conventional healthcare.
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <div className="w-8 h-8 bg-green-600 rounded-full"></div>
                </div>
                <div className="md:w-1/2 hidden md:block"></div>
              </div>

              <div className="relative flex items-center justify-end md:justify-between md:flex-row-reverse">
                <div className="md:w-1/2 md:pl-12">
                  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 md:ml-6">
                    <span className="text-xs font-medium text-amber-600 mb-1 block">Present - Future</span>
                    <h3 className="font-serif text-xl font-bold text-green-800 mb-2">Digital Transformation</h3>
                    <p className="text-gray-600">
                      E-Ayurveda and similar platforms bring ancient wisdom to the digital 
                      age, making personalized Ayurvedic care accessible globally. Integration 
                      with modern science creates new possibilities for holistic healthcare.
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                  <div className="w-8 h-8 bg-amber-500 rounded-full"></div>
                </div>
                <div className="md:w-1/2 hidden md:block"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Mission Section */}
      <div
        ref={el => (sectionsRef.current[4] = el)}
        className="py-16 md:py-24 opacity-0 transition-opacity duration-1000 ease-in-out"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/6712371/pexels-photo-6712371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Ayurvedic practitioner with herbs"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -top-5 -right-5 w-24 h-24 border-2 border-green-700 rounded-lg -z-10"></div>
            </div>
            <div>
              <h2 className="font-serif text-3xl font-bold text-green-800 mb-6">
                Our Mission & Values
              </h2>
              <p className="text-gray-700 mb-6">
                At E-Ayurveda, we're dedicated to bridging ancient wisdom with modern convenience. 
                Our mission is to make authentic Ayurvedic healthcare accessible to everyone, 
                regardless of location or prior knowledge.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-4 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-700">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-green-800 mb-1">Authenticity</h3>
                    <p className="text-gray-600 text-sm">We adhere to traditional formulations and principles while integrating modern research</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-4 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-700">
                      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-green-800 mb-1">Sustainability</h3>
                    <p className="text-gray-600 text-sm">Our products use responsibly sourced ingredients that respect nature and traditional farming</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-4 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-700">
                      <path d="M12 22v-5"></path>
                      <path d="M9 8V2"></path>
                      <path d="M15 8V2"></path>
                      <path d="M12 2a3 3 0 0 1 3 3v9a1 1 0 0 1 1 1v0a1 1 0 0 1-1 1 3 3 0 0 1-6 0 1 1 0 0 1-1-1v0a1 1 0 0 1 1-1 9 9 0 0 0 3-17Z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-green-800 mb-1">Accessibility</h3>
                    <p className="text-gray-600 text-sm">We make Ayurvedic knowledge easy to understand and apply in daily life for people everywhere</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-4 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-700">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-green-800 mb-1">Community</h3>
                    <p className="text-gray-600 text-sm">We support traditional practitioners and create a global community of Ayurveda enthusiasts</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;