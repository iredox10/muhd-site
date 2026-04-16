import { Route, Link, useNavigate } from '@tanstack/react-router'
import { rootRoute } from './__root'
import { useCartStore } from '../store/cartStore'
import { ArrowLeft, CheckCircle2, Lock } from 'lucide-react'
import { useState } from 'react'

export const checkoutRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/checkout',
  component: Checkout,
})

function Checkout() {
  const { items, getCartTotal, clearCart } = useCartStore();
  const navigate = useNavigate();
  const [step, setStep] = useState(1); // 1: Info, 2: Payment, 3: Success

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 2) {
      clearCart();
    }
    setStep(step + 1);
  };

  if (items.length === 0 && step !== 3) {
    return (
      <div className="min-h-screen bg-neutral-50 flex flex-col items-center justify-center p-6 text-center">
        <h1 className="font-serif text-3xl text-neutral-900 mb-4">Your cart is empty</h1>
        <p className="text-neutral-500 mb-8 max-w-md">Looks like you haven't added any premium products to your cart yet.</p>
        <Link to="/catalog" className="bg-neutral-900 text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-neutral-800 transition-colors">
          Return to Catalog
        </Link>
      </div>
    );
  }

  if (step === 3) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 text-center pt-24 pb-32">
        <CheckCircle2 className="w-24 h-24 text-green-500 mb-8 mx-auto" />
        <h1 className="font-serif text-5xl text-neutral-900 mb-6">Order Confirmed</h1>
        <p className="text-xl text-neutral-500 mb-12 max-w-xl mx-auto font-light">
          Thank you for choosing AS Design Craft. Your order is being processed and a confirmation email has been sent.
        </p>
        <Link to="/" className="bg-neutral-900 text-white px-10 py-5 rounded-full font-bold uppercase tracking-wider hover:bg-neutral-800 transition-colors inline-block">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-50 pt-24 pb-32">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Left Col - Form */}
        <div>
          <button onClick={() => navigate({ to: '/catalog' })} className="inline-flex items-center text-sm font-medium text-neutral-500 hover:text-neutral-900 mb-10 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Shopping
          </button>
          
          <div className="flex items-center gap-4 mb-12">
            <div className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold ${step === 1 ? 'bg-neutral-900 text-white' : 'bg-green-500 text-white'}`}>1</div>
            <div className="h-px bg-neutral-300 flex-1"></div>
            <div className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold ${step === 2 ? 'bg-neutral-900 text-white' : 'bg-neutral-200 text-neutral-500'}`}>2</div>
          </div>
          
          <h2 className="font-serif text-3xl font-bold text-neutral-900 mb-8">
            {step === 1 ? 'Shipping Information' : 'Payment Details'}
          </h2>

          <form onSubmit={handleNext} className="space-y-6">
            {step === 1 ? (
              <>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-neutral-900 mb-2 uppercase tracking-wider">First Name</label>
                    <input required type="text" className="w-full bg-white border border-neutral-200 rounded-xl px-4 py-3 focus:outline-none focus:border-rose-600 focus:ring-1 focus:ring-rose-600 transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-neutral-900 mb-2 uppercase tracking-wider">Last Name</label>
                    <input required type="text" className="w-full bg-white border border-neutral-200 rounded-xl px-4 py-3 focus:outline-none focus:border-rose-600 focus:ring-1 focus:ring-rose-600 transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-neutral-900 mb-2 uppercase tracking-wider">Email Address</label>
                  <input required type="email" className="w-full bg-white border border-neutral-200 rounded-xl px-4 py-3 focus:outline-none focus:border-rose-600 focus:ring-1 focus:ring-rose-600 transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-neutral-900 mb-2 uppercase tracking-wider">Shipping Address</label>
                  <input required type="text" className="w-full bg-white border border-neutral-200 rounded-xl px-4 py-3 focus:outline-none focus:border-rose-600 focus:ring-1 focus:ring-rose-600 transition-colors" />
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-neutral-900 mb-2 uppercase tracking-wider">City</label>
                    <input required type="text" className="w-full bg-white border border-neutral-200 rounded-xl px-4 py-3 focus:outline-none focus:border-rose-600 focus:ring-1 focus:ring-rose-600 transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-neutral-900 mb-2 uppercase tracking-wider">Phone</label>
                    <input required type="tel" className="w-full bg-white border border-neutral-200 rounded-xl px-4 py-3 focus:outline-none focus:border-rose-600 focus:ring-1 focus:ring-rose-600 transition-colors" />
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-sm relative overflow-hidden mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-bold text-neutral-900">Credit Card</span>
                    <Lock className="w-5 h-5 text-neutral-400" />
                  </div>
                  <div className="space-y-4">
                    <input required type="text" placeholder="Card Number" className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 focus:outline-none focus:border-rose-600 focus:ring-1 focus:ring-rose-600 transition-colors" />
                    <div className="grid grid-cols-2 gap-4">
                      <input required type="text" placeholder="MM/YY" className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 focus:outline-none focus:border-rose-600 focus:ring-1 focus:ring-rose-600 transition-colors" />
                      <input required type="text" placeholder="CVC" className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 focus:outline-none focus:border-rose-600 focus:ring-1 focus:ring-rose-600 transition-colors" />
                    </div>
                  </div>
                </div>
                <p className="text-sm text-neutral-500 mb-6 flex items-center gap-2">
                  <Lock className="w-4 h-4" /> Secure, encrypted transaction.
                </p>
              </>
            )}

            <button type="submit" className="w-full py-5 rounded-full bg-neutral-900 text-white font-bold uppercase tracking-wider hover:bg-neutral-800 transition-colors flex items-center justify-center gap-3">
              {step === 1 ? 'Continue to Payment' : `Pay ₦${getCartTotal().toLocaleString()}`}
            </button>
          </form>
        </div>

        {/* Right Col - Order Summary */}
        <div className="bg-white p-8 md:p-12 rounded-3xl border border-neutral-200 shadow-xl h-fit sticky top-32">
          <h3 className="font-serif text-2xl font-bold text-neutral-900 mb-8">Order Summary</h3>
          
          <div className="space-y-6 mb-8 max-h-[40vh] overflow-y-auto pr-4">
            {items.map((item) => (
              <div key={item.id} className="flex gap-4">
                <div className={`w-20 h-20 rounded-xl ${item.imgColor} flex-shrink-0 flex items-center justify-center p-2`}>
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover rounded-lg" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-neutral-900 text-sm">{item.title}</h4>
                  <p className="text-neutral-500 text-xs mt-1">Qty: {item.quantity}</p>
                </div>
                <div className="text-right font-medium text-neutral-900">
                  {item.price}
                </div>
              </div>
            ))}
          </div>
          
          <div className="space-y-4 pt-8 border-t border-neutral-200 text-sm">
            <div className="flex justify-between text-neutral-500">
              <span>Subtotal</span>
              <span>₦{getCartTotal().toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-neutral-500">
              <span>Shipping</span>
              <span>Calculated at next step</span>
            </div>
          </div>
          
          <div className="flex justify-between pt-8 mt-8 border-t border-neutral-900 text-xl font-bold text-neutral-900">
            <span>Total</span>
            <span>₦{getCartTotal().toLocaleString()}</span>
          </div>
        </div>

      </div>
    </div>
  )
}
