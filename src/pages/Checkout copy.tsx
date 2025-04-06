import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { useCartStore } from '@/store/cartStore';
import { useOrderStore } from '@/store/orderStore';
import { useAuthStore } from '@/store/authStore';
import { Button } from '@/components/ui/button';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

const Checkout = () => {
  const navigate = useNavigate();
  const { items, total, clearCart } = useCartStore();
  const { createOrder } = useOrderStore();
  const { user } = useAuthStore();
  const [loading, setLoading] = useState(false);
  const [shippingAddress, setShippingAddress] = useState({
    name: '',
    address: '',
    city: '',
    state: '',
    postal_code: '',
    country: 'India',
    phone: '',
  });

  if (!user) {
    navigate('/auth');
    return null;
  }

  if (items.length === 0) {
    navigate('/cart');
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const stripe = await stripePromise;
      if (!stripe) throw new Error('Stripe failed to load');

      // Create order in database
      const order = await createOrder({
        user_id: user.id,
        status: 'pending',
        total: total,
        shipping_address: shippingAddress,
        payment_intent: null,
      });

      // Create payment intent
      const response = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: total,
          orderId: order.id,
        }),
      });

      const { clientSecret } = await response.json();

      // Confirm payment
      const result = await stripe.confirmPayment({
        clientSecret,
        confirmParams: {
          return_url: `${window.location.origin}/order-confirmation/${order.id}`,
        },
      });

      if (result.error) {
        throw new Error(result.error.message);
      }

      // Clear cart and redirect
      clearCart();
      navigate(`/order-confirmation/${order.id}`);
    } catch (error) {
      console.error('Checkout error:', error);
      // Handle error appropriately
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Shipping Form */}
        <div>
          <h2 className="text-2xl font-display mb-6">Shipping Information</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-1">Full Name</label>
              <input
                type="text"
                required
                value={shippingAddress.name}
                onChange={(e) => setShippingAddress({ ...shippingAddress, name: e.target.value })}
                className="w-full rounded-md border border-gray-300 px-4 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Address</label>
              <input
                type="text"
                required
                value={shippingAddress.address}
                onChange={(e) => setShippingAddress({ ...shippingAddress, address: e.target.value })}
                className="w-full rounded-md border border-gray-300 px-4 py-2"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">City</label>
                <input
                  type="text"
                  required
                  value={shippingAddress.city}
                  onChange={(e) => setShippingAddress({ ...shippingAddress, city: e.target.value })}
                  className="w-full rounded-md border border-gray-300 px-4 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">State</label>
                <input
                  type="text"
                  required
                  value={shippingAddress.state}
                  onChange={(e) => setShippingAddress({ ...shippingAddress, state: e.target.value })}
                  className="w-full rounded-md border border-gray-300 px-4 py-2"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Postal Code</label>
                <input
                  type="text"
                  required
                  value={shippingAddress.postal_code}
                  onChange={(e) => setShippingAddress({ ...shippingAddress, postal_code: e.target.value })}
                  className="w-full rounded-md border border-gray-300 px-4 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Phone</label>
                <input
                  type="tel"
                  required
                  value={shippingAddress.phone}
                  onChange={(e) => setShippingAddress({ ...shippingAddress, phone: e.target.value })}
                  className="w-full rounded-md border border-gray-300 px-4 py-2"
                />
              </div>
            </div>
            <Button
              type="submit"
              className="w-full"
              disabled={loading}
            >
              {loading ? 'Processing...' : 'Place Order'}
            </Button>
          </form>
        </div>

        {/* Order Summary */}
        <div>
          <h2 className="text-2xl font-display mb-6">Order Summary</h2>
          <div className="bg-gray-50 rounded-lg p-6">
            {items.map((item) => (
              <div key={item.id} className="flex justify-between py-2">
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-gray-500">
                    Size: {item.size} × {item.quantity}
                  </p>
                </div>
                <p className="font-medium">₹{item.price * item.quantity}</p>
              </div>
            ))}
            <div className="border-t border-gray-200 mt-4 pt-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{total}</span>
              </div>
              <div className="flex justify-between mt-2">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between mt-2 font-semibold">
                <span>Total</span>
                <span>₹{total}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;