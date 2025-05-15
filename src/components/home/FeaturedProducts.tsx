import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingCart } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { products } from '../../data/products';

const FeaturedProducts = () => {
  const { addToCart } = useCart();
  const featuredProducts = products.filter(product => product.featured).slice(0, 4);

  return (
    <section className="py-16 md:py-24 bg-cream-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-green-800 mb-2">
              Featured Products
            </h2>
            <p className="text-gray-700 max-w-2xl">
              Discover our bestselling herbal remedies crafted from the finest natural ingredients, 
              following traditional Ayurvedic formulations.
            </p>
          </div>
          <Link 
            to="/store" 
            className="hidden md:flex items-center text-green-700 font-medium mt-4 md:mt-0 group hover:text-green-800 transition-colors"
          >
            View all products
            <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100 transition-transform hover:-translate-y-1 duration-300">
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-56 object-cover"
                />
                {product.discount > 0 && (
                  <div className="absolute top-3 right-3 bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded">
                    {product.discount}% OFF
                  </div>
                )}
              </div>
              
              <div className="p-4">
                <div className="text-xs text-green-600 font-medium mb-1">{product.category}</div>
                <h3 className="font-medium text-gray-800 mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-baseline">
                    <span className="text-lg font-bold text-gray-800">${product.price.toFixed(2)}</span>
                    {product.oldPrice > 0 && (
                      <span className="text-sm text-gray-400 line-through ml-2">${product.oldPrice.toFixed(2)}</span>
                    )}
                  </div>
                  
                  <button 
                    onClick={() => addToCart(product)}
                    className="bg-green-700 hover:bg-green-800 text-white p-2 rounded-full transition-colors"
                    aria-label={`Add ${product.name} to cart`}
                  >
                    <ShoppingCart size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10 md:hidden">
          <Link 
            to="/store" 
            className="inline-flex items-center text-green-700 font-medium group hover:text-green-800 transition-colors"
          >
            View all products
            <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;