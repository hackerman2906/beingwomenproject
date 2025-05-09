import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { useOrderStore } from '@/store/orderStore';
import { Button } from '@/components/ui/button';

const OrderConfirmation = () => {
  const { id } = useParams<{ id: string }>();
  const { getOrderById, currentOrder, loading } = useOrderStore();

  useEffect(() => {
    if (id) {
      getOrderById(id);
    }
  }, [id]);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        Loading...
      </div>
    );
  }

  if (!currentOrder) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        Order not found
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
          <CheckCircle className="h-8 w-8 text-primary" />
        </div>
        <h1 className="text-3xl font-display mb-2">Thank You for Your Order!</h1>
        <p className="text-muted-foreground">
          Order #{currentOrder.id.slice(0, 8)}
        </p>
      </div>

      <div className="bg-white shadow rounded-lg overflow-hidden mb-8">
        <div className="p-6">
          <h2 className="text-lg font-semibold mb-4">Order Details</h2>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Status</span>
              <span className="capitalize">{currentOrder.status}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Order Date</span>
              <span>{new Date(currentOrder.created_at).toLocaleDateString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Total Amount</span>
              <span>₹{currentOrder.total}</span>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 p-6">
          <h2 className="text-lg font-semibold mb-4">Shipping Address</h2>
          <address className="not-italic">
            <p>{currentOrder.shipping_address.name}</p>
            <p>{currentOrder.shipping_address.address}</p>
            <p>
              {currentOrder.shipping_address.city}, {currentOrder.shipping_address.state}{' '}
              {currentOrder.shipping_address.postal_code}
            </p>
            <p>{currentOrder.shipping_address.country}</p>
            <p>{currentOrder.shipping_address.phone}</p>
          </address>
        </div>
      </div>

      <div className="text-center space-y-4">
        <Link to="/account/orders">
          <Button variant="outline" className="mr-4">
            View Order History
          </Button>
        </Link>
        <Link to="/shop">
          <Button>
            Continue Shopping
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default OrderConfirmation;