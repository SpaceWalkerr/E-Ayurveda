import { useState, useEffect, useRef } from 'react';
import { Search, Leaf } from 'lucide-react';
import { remedies } from '../../data/remedies';

const SearchSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<typeof remedies>([]);
  const [selectedRemedy, setSelectedRemedy] = useState<typeof remedies[0] | null>(null);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const searchResultsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setSearchResults([]);
      return;
    }

    const filteredResults = remedies.filter(remedy => 
      remedy.condition.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredResults.slice(0, 5)); // Limit to 5 results
  }, [searchTerm]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchResultsRef.current && !searchResultsRef.current.contains(event.target as Node)) {
        setIsSearchFocused(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSelectRemedy = (remedy: typeof remedies[0]) => {
    setSelectedRemedy(remedy);
    setSearchTerm('');
    setSearchResults([]);
    setIsSearchFocused(false);
  };

  return (
    <section className="py-16 md:py-24 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-green-800 mb-4">
            Find Natural Remedies
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Search for common conditions to discover powerful Ayurvedic herbs and remedies 
            that have been used for centuries to support healing and wellness.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="relative" ref={searchResultsRef}>
            <div className="flex items-center bg-white rounded-lg shadow-md p-2 border border-gray-200">
              <Search size={20} className="text-gray-400 ml-2 mr-3" />
              <input
                type="text"
                placeholder="Type a condition (e.g., cold, stress, digestion)..."
                className="w-full py-2 focus:outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
              />
            </div>

            {/* Search Results Dropdown */}
            {isSearchFocused && searchResults.length > 0 && (
              <div className="absolute w-full mt-2 bg-white rounded-lg shadow-lg border border-gray-200 z-10">
                {searchResults.map((remedy) => (
                  <div
                    key={remedy.id}
                    className="p-3 hover:bg-green-50 cursor-pointer border-b border-gray-100 last:border-b-0"
                    onClick={() => handleSelectRemedy(remedy)}
                  >
                    <p className="font-medium text-gray-800">{remedy.condition}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Selected Remedy Result */}
          {selectedRemedy && (
            <div className="mt-8 bg-white p-6 rounded-lg shadow-md border border-green-100 animate-fade-in">
              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <Leaf size={24} className="text-green-600" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-green-800 mb-2">
                    {selectedRemedy.condition}
                  </h3>
                  <p className="text-gray-700 mb-4">{selectedRemedy.description}</p>
                  
                  <h4 className="font-medium text-green-700 mb-2">Recommended Herbs:</h4>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {selectedRemedy.herbs.map((herb, index) => (
                      <span 
                        key={index}
                        className="bg-amber-50 text-amber-700 px-3 py-1 rounded-full text-sm"
                      >
                        {herb}
                      </span>
                    ))}
                  </div>
                  
                  <h4 className="font-medium text-green-700 mb-2">Usage:</h4>
                  <p className="text-gray-600 text-sm">{selectedRemedy.usage}</p>
                </div>
              </div>
            </div>
          )}

          {!selectedRemedy && (
            <div className="mt-8 bg-white p-6 rounded-lg shadow-md border border-gray-200 text-center">
              <p className="text-gray-500">
                Search for a condition above to discover natural Ayurvedic remedies
              </p>
            </div>
          )}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            Note: These remedies are based on traditional Ayurvedic practices. 
            Please consult with a healthcare professional before starting any treatment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SearchSection;