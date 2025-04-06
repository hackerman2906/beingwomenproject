import React, { useEffect, useState } from 'react';
import { useOrderStore } from '@/store/orderStore';
import { useProductStore } from '@/store/productStore';
import { Package, ShoppingBag, Users, DollarSign } from 'lucide-react';

const Dashboard = () => {
  const { orders, getOrders } = useOrderStore();
  const { products, fetchProducts } = useProductStore();
  const [stats, setStats] = useState({
    totalOrders: 0,
    totalRevenue: 0,
    totalProducts: 0,
    pendingOrders: 0,
  });

  useEffect(() => {
    getOrders();
    fetchProducts();
  }, []);

  useEffect(() => {
    if (orders && products) {
      setStats({
        totalOrders: orders.length,
        totalRevenue: orders.reduce((sum, order) => sum + order.total, 0),
        totalProducts: products.length,
        pendingOrders: orders.filter(order => order.status === 'pending').length,
      });
    }
  }, [orders, products]);

  const cards = [
    {
      title: 'Total Orders',
      value: stats.totalOrders,
      icon: Package,
      color: 'bg-blue-500',
    },
    {
      title: 'Total Revenue',
      value: `₹${stats.totalRevenue}`,
      icon: DollarSign,
      color: 'bg-green-500',
    },
    {
      title: 'Total Products',
      value: stats.totalProducts,
      icon: ShoppingBag,
      color: 'bg-purple-500',
    },
    {
      title: 'Pending Orders',
      value: stats.pendingOrders,
      icon: Users,
      color: 'bg-yellow-500',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-display mb-8">Admin Dashboard</h1>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {cards.map((card) => (
          <div
            key={card.title}
            className="bg-white rounded-lg shadow p-6"
          >
            <div className="flex items-center">
              <div className={`p-3 rounded-lg ${card.color}`}>
                <card.icon className="h-6 w-6 text-white" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-500">{card.title}</p>
                <p className="text-2xl font-semibold">{card.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Orders */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold">Recent Orders</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Order ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Total
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {orders.slice(0, 5).map((order) => (
                <tr key={order.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    #{order.id.slice(0, 8)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    {order.shipping_address.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs rounded-full capitalize
                      ${order.status === 'completed' ? 'bg-green-100 text-green-800' :
                        order.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-gray-100 text-gray-800'}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    ₹{order.total}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(order.created_at).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;