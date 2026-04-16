import { ShoppingBag, X, Plus, Minus, Trash2 } from 'lucide-react';
import { useCartStore } from '../store/cartStore';
import { useNavigate } from '@tanstack/react-router';

export function Cart() {
  const { items, isOpen, toggleCart, updateQuantity, removeItem, getCartTotal } = useCartStore();
  const navigate = useNavigate();

  const total = getCartTotal();
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN', maximumFractionDigits: 0 }).format(amount);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-neutral-900/40 backdrop-blur-sm transition-opacity"
        onClick={toggleCart}
      />
      
      {/* Sidebar */}
      <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col transform transition-transform">
        <div className="flex items-center justify-between px-6 py-6 border-b border-neutral-100">
          <h2 className="font-serif text-2xl font-bold text-neutral-900 flex items-center gap-2">
            <ShoppingBag className="w-6 h-6" /> Your Cart
          </h2>
          <button 
            onClick={toggleCart}
            className="text-neutral-500 hover:text-neutral-900 bg-neutral-100 hover:bg-neutral-200 p-2 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-neutral-400 space-y-4">
              <ShoppingBag className="w-16 h-16 opacity-20" />
              <p className="text-lg">Your cart is empty.</p>
              <button 
                onClick={toggleCart}
                className="text-rose-600 font-medium hover:underline underline-offset-4"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="space-y-6">
              {items.map((item) => (
                <li key={item.id} className="flex gap-4">
                  <div className={`w-24 h-24 rounded-xl ${item.imgColor} flex-shrink-0 overflow-hidden`}>
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                  </div>
                  
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-medium text-neutral-900 line-clamp-1">{item.title}</h3>
                      <p className="text-sm text-neutral-500">{item.price}</p>
                    </div>
                    
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border border-neutral-200 rounded-lg">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-3 py-1 text-neutral-500 hover:text-neutral-900 hover:bg-neutral-50 rounded-l-lg"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-3 py-1 text-sm font-medium w-8 text-center">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-3 py-1 text-neutral-500 hover:text-neutral-900 hover:bg-neutral-50 rounded-r-lg"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      
                      <button 
                        onClick={() => removeItem(item.id)}
                        className="text-neutral-400 hover:text-rose-600 transition-colors p-2"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-neutral-100 px-6 py-6 bg-neutral-50">
            <div className="flex justify-between items-center mb-6">
              <span className="text-neutral-600 font-medium">Subtotal</span>
              <span className="font-serif text-2xl font-bold text-neutral-900">{formatCurrency(total)}</span>
            </div>
            <button 
              onClick={() => {
                toggleCart();
                navigate({ to: '/checkout' });
              }}
              className="w-full bg-neutral-900 hover:bg-rose-600 text-white py-4 rounded-xl font-bold uppercase tracking-wider transition-colors shadow-lg flex items-center justify-center gap-2"
            >
              Proceed to Checkout
            </button>
            <p className="text-xs text-center text-neutral-500 mt-4">
              Taxes and shipping calculated at checkout.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
