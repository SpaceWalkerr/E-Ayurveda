import { useState } from 'react';
import { ShoppingCart, Heart, Info } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Product } from '../../types';

interface ProductGridProps {
  products: Product[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  const { addToCart } = useCart();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <>
      {products.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500">No products match your filters. Try adjusting your criteria.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100 transition-transform hover:-translate-y-1 duration-300"
            >
              <div 
                className="relative cursor-pointer"
                onClick={() => handleProductClick(product)}
              >
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
                <button 
                  className="absolute bottom-3 right-3 bg-white p-1.5 rounded-full shadow-md hover:bg-gray-100 transition-colors"
                  aria-label="Product details"
                >
                  <Info size={16} className="text-gray-600" />
                </button>
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
                  
                  <div className="flex space-x-2">
                    <button 
                      className="bg-white border border-gray-200 text-gray-500 hover:bg-gray-50 p-2 rounded-full transition-colors"
                      aria-label="Add to wishlist"
                    >
                      <Heart size={16} />
                    </button>
                    <button 
                      onClick={() => addToCart(product)}
                      className="bg-green-700 hover:bg-green-800 text-white p-2 rounded-full transition-colors"
                      aria-label={`Add ${product.name} to cart`}
                    >
                      <ShoppingCart size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={closeModal}>
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6">
                <img 
                  src={selectedProduct.image} 
                  alt={selectedProduct.name}
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
              
              <div className="p-6">
                <button 
                  onClick={closeModal}
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
                
                <div className="text-sm text-green-600 font-medium mb-1">{selectedProduct.category}</div>
                <h2 className="font-serif text-2xl font-bold text-gray-800 mb-2">{selectedProduct.name}</h2>
                
                <div className="flex items-baseline mb-4">
                  <span className="text-2xl font-bold text-gray-800">${selectedProduct.price.toFixed(2)}</span>
                  {selectedProduct.oldPrice > 0 && (
                    <span className="text-lg text-gray-400 line-through ml-2">${selectedProduct.oldPrice.toFixed(2)}</span>
                  )}
                </div>
                
                <p className="text-gray-600 mb-6">{selectedProduct.description}</p>
                
                <div className="mb-6">
                  <h3 className="font-medium text-gray-800 mb-2">Benefits</h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    {selectedProduct.benefits && selectedProduct.benefits.map((benefit, index) => (
                      <li key={index}>{benefit}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h3 className="font-medium text-gray-800 mb-2">Ingredients</h3>
                  <p className="text-gray-600">{selectedProduct.ingredients || 'Natural Ayurvedic herbs and ingredients.'}</p>
                </div>
                
                <div className="mb-6">
                  <h3 className="font-medium text-gray-800 mb-2">Usage Instructions</h3>
                  <p className="text-gray-600">{selectedProduct.usage || 'Please refer to package for detailed usage instructions.'}</p>
                </div>
                
                <button 
                  onClick={() => {
                    addToCart(selectedProduct);
                    closeModal();
                  }}
                  className="w-full bg-green-700 hover:bg-green-800 text-white py-3 rounded-md transition-colors flex items-center justify-center"
                >
                  <ShoppingCart size={18} className="mr-2" />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductGrid;