import { useState, useEffect, useRef } from 'react';
import { ShoppingCart, X, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const cartRef = useRef<HTMLDivElement>(null);

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={cartRef}>
      <button
        className="flex items-center space-x-2 bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-md transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <ShoppingCart size={18} />
        <span>Cart ({totalItems})</span>
      </button>

      {/* Cart Dropdown */}
      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-80 sm:w-96 bg-white rounded-lg shadow-lg z-10 border border-gray-200">
          <div className="p-4 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h3 className="font-medium">Your Cart ({totalItems})</h3>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-gray-600">
                <X size={18} />
              </button>
            </div>
          </div>

          <div className="max-h-96 overflow-y-auto">
            {cartItems.length === 0 ? (
              <div className="p-6 text-center text-gray-500">
                <div className="flex justify-center mb-4">
                  <ShoppingCart size={48} className="text-gray-300" />
                </div>
                <p>Your cart is empty</p>
                <p className="text-sm mt-1">Add products to your cart to see them here</p>
              </div>
            ) : (
              <>
                {cartItems.map((item) => (
                  <div key={item.product.id} className="p-4 border-b border-gray-100 flex">
                    <div className="w-16 h-16 flex-shrink-0 mr-4">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-full h-full object-cover rounded"
                      />
                    </div>
                    <div className="flex-grow">
                      <div className="flex justify-between items-start">
                        <h4 className="font-medium text-gray-800 text-sm line-clamp-1">
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          className="text-gray-400 hover:text-red-500"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                      <div className="text-gray-500 text-xs mb-2">${item.product.price.toFixed(2)}</div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center border border-gray-300 rounded">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="px-2 text-sm text-gray-800">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <div className="font-medium text-gray-800">
                          ${(item.product.price * item.quantity).toFixed(2)}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>

          {cartItems.length > 0 && (
            <div className="p-4 border-t border-gray-200">
              <div className="flex justify-between items-center mb-4">
                <span className="font-medium">Total:</span>
                <span className="font-bold text-gray-800">${totalPrice.toFixed(2)}</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={clearCart}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50 transition-colors"
                >
                  Clear Cart
                </button>
                <button className="px-4 py-2 bg-green-700 hover:bg-green-800 text-white rounded-md transition-colors">
                  Checkout
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;