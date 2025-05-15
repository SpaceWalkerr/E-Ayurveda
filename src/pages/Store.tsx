import { useState } from 'react';
import { products } from '../data/products';
import ProductGrid from '../components/store/ProductGrid';
import Cart from '../components/store/Cart';
import { Filter, SlidersHorizontal } from 'lucide-react';

const Store = () => {
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100]);
  const [sortBy, setSortBy] = useState<string>('default');
  const [showFilters, setShowFilters] = useState(false);

  const categories = ['all', ...Array.from(new Set(products.map(p => p.category)))];

  const filteredProducts = products.filter(product => {
    if (categoryFilter !== 'all' && product.category !== categoryFilter) return false;
    if (product.price < priceRange[0] || product.price > priceRange[1]) return false;
    return true;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low-high':
        return a.price - b.price;
      case 'price-high-low':
        return b.price - a.price;
      case 'name-a-z':
        return a.name.localeCompare(b.name);
      case 'name-z-a':
        return b.name.localeCompare(a.name);
      default:
        return 0;
    }
  });

  return (
    <div className="pt-16 bg-cream-50 min-h-screen">
      <div className="bg-green-800 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="font-serif text-3xl md:text-4xl font-bold mb-2">Ayurvedic Store</h1>
          <p className="text-green-100 max-w-2xl">
            Explore our collection of premium Ayurvedic products, herbal remedies, 
            and wellness essentials for your holistic health journey.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row">
          {/* Filters (Sidebar) */}
          <div className="md:w-1/4 lg:w-1/5">
            <div className="md:sticky md:top-20">
              <div className="flex justify-between items-center mb-4 md:mb-6">
                <h2 className="font-serif font-bold text-xl flex items-center">
                  <Filter size={18} className="mr-2" />
                  Filters
                </h2>
                <button 
                  className="md:hidden bg-gray-200 p-2 rounded-md"
                  onClick={() => setShowFilters(!showFilters)}
                >
                  <SlidersHorizontal size={18} />
                </button>
              </div>

              <div className={`space-y-6 ${showFilters ? 'block' : 'hidden md:block'}`}>
                {/* Categories */}
                <div>
                  <h3 className="font-medium text-gray-700 mb-3">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <label key={category} className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="category"
                          checked={categoryFilter === category}
                          onChange={() => setCategoryFilter(category)}
                          className="form-radio text-green-700 focus:ring-green-700"
                        />
                        <span className="ml-2 text-gray-700 capitalize">
                          {category === 'all' ? 'All Products' : category}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div>
                  <h3 className="font-medium text-gray-700 mb-3">Price Range</h3>
                  <div className="px-2">
                    <div className="flex justify-between text-xs text-gray-500 mb-1">
                      <span>${priceRange[0]}</span>
                      <span>${priceRange[1]}</span>
                    </div>
                    <input
                      type="range"
                      min={0}
                      max={100}
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                      className="w-full h-1 bg-gray-300 rounded-lg appearance-none cursor-pointer"
                    />
                    <input
                      type="range"
                      min={0}
                      max={100}
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                      className="w-full h-1 bg-gray-300 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>
                </div>

                {/* Sort By */}
                <div>
                  <h3 className="font-medium text-gray-700 mb-3">Sort By</h3>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-700"
                  >
                    <option value="default">Default</option>
                    <option value="price-low-high">Price: Low to High</option>
                    <option value="price-high-low">Price: High to Low</option>
                    <option value="name-a-z">Name: A to Z</option>
                    <option value="name-z-a">Name: Z to A</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="md:w-3/4 lg:w-4/5 md:pl-8 mt-6 md:mt-0">
            <div className="flex justify-between items-center mb-6">
              <div>
                <span className="text-gray-600">{sortedProducts.length} products</span>
              </div>
              <Cart />
            </div>
            <ProductGrid products={sortedProducts} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store;