import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useOrderStore } from '@/store/orderStore';
import { ArrowRight } from 'lucide-react';

const Orders = () => {
  const { orders, getOrders, loading } = useOrderStore();

  useEffect(() => {
    getOrders();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (orders.length === 0) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-display mb-4">No Orders Yet</h2>
        <p className="text-muted-foreground mb-8">
          Start shopping to create your first order
        </p>
        <Link
          to="/shop"
          className="inline-flex items-center text-primary hover:text-primary/90"
        >
          Browse Products
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-display mb-6">Order History</h2>
      <div className="space-y-4">
        {orders.map((order) => (
          <div
            key={order.id}
            className="bg-white shadow rounded-lg overflow-hidden"
          >
            <div className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-muted-foreground">
                    Order #{order.id.slice(0, 8)}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {new Date(order.created_at).toLocaleDateString()}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-semibold">₹{order.total}</p>
                  <p className="text-sm capitalize">{order.status}</p>
                </div>
              </div>
              <div className="mt-4">
                <Link
                  to={`/order/${order.id}`}
                  className="text-primary hover:text-primary/90 text-sm flex items-center"
                >
                  View Details
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;