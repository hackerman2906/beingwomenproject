import React from 'react';
import { Truck, Package, Globe, Clock } from 'lucide-react';

const ShippingInfo = () => {
  return (
    <div className="bg-primary min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl md:text-5xl text-secondary mb-6">Shipping & Delivery</h1>
          <p className="text-xl text-secondary/90 max-w-2xl mx-auto">
            Learn about our shipping policies, delivery times, and tracking information.
          </p>
        </div>

        {/* Shipping Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            {
              icon: Truck,
              title: "Free Shipping",
              description: "On orders above ₹2,999 within India"
            },
            {
              icon: Package,
              title: "Secure Packaging",
              description: "Premium packaging for all orders"
            },
            {
              icon: Globe,
              title: "Global Delivery",
              description: "We ship to over 50 countries"
            },
            {
              icon: Clock,
              title: "Fast Processing",
              description: "Orders processed within 24 hours"
            }
          ].map((feature, index) => (
            <div key={index} className="text-center p-6 bg-neutral rounded-lg">
              <feature.icon className="h-8 w-8 text-secondary mx-auto mb-4" />
              <h3 className="font-display text-xl text-secondary mb-2">{feature.title}</h3>
              <p className="text-secondary/80">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Shipping Details */}
        <div className="space-y-12">
          {/* Domestic Shipping */}
          <section>
            <h2 className="font-display text-2xl text-secondary mb-6">Domestic Shipping (Within India)</h2>
            <div className="bg-neutral p-6 rounded-lg">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-secondary/20">
                    <th className="text-left py-2 text-secondary">Shipping Method</th>
                    <th className="text-left py-2 text-secondary">Delivery Time</th>
                    <th className="text-left py-2 text-secondary">Cost</th>
                  </tr>
                </thead>
                <tbody className="text-secondary/80">
                  <tr className="border-b border-secondary/20">
                    <td className="py-3">Standard Shipping</td>
                    <td>5-7 business days</td>
                    <td>₹99</td>
                  </tr>
                  <tr className="border-b border-secondary/20">
                    <td className="py-3">Express Shipping</td>
                    <td>2-3 business days</td>
                    <td>₹199</td>
                  </tr>
                  <tr>
                    <td className="py-3">Same Day Delivery</td>
                    <td>Within 24 hours</td>
                    <td>₹399</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* International Shipping */}
          <section>
            <h2 className="font-display text-2xl text-secondary mb-6">International Shipping</h2>
            <div className="bg-neutral p-6 rounded-lg">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-secondary/20">
                    <th className="text-left py-2 text-secondary">Region</th>
                    <th className="text-left py-2 text-secondary">Delivery Time</th>
                    <th className="text-left py-2 text-secondary">Cost</th>
                  </tr>
                </thead>
                <tbody className="text-secondary/80">
                  <tr className="border-b border-secondary/20">
                    <td className="py-3">USA & Canada</td>
                    <td>7-10 business days</td>
                    <td>₹2,499</td>
                  </tr>
                  <tr className="border-b border-secondary/20">
                    <td className="py-3">UK & Europe</td>
                    <td>7-10 business days</td>
                    <td>₹2,999</td>
                  </tr>
                  <tr>
                    <td className="py-3">Rest of World</td>
                    <td>10-15 business days</td>
                    <td>₹3,499</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Shipping Policies */}
          <section>
            <h2 className="font-display text-2xl text-secondary mb-6">Shipping Policies</h2>
            <div className="space-y-4">
              <div className="bg-neutral p-6 rounded-lg">
                <h3 className="font-semibold text-secondary mb-2">Order Processing</h3>
                <p className="text-secondary/80">
                  All orders are processed within 24 hours of being placed. Orders placed after 2 PM IST may be processed the next business day.
                </p>
              </div>
              <div className="bg-neutral p-6 rounded-lg">
                <h3 className="font-semibold text-secondary mb-2">Tracking Information</h3>
                <p className="text-secondary/80">
                  A tracking number will be provided via email once your order has been shipped. You can track your order status through our website using this number.
                </p>
              </div>
              <div className="bg-neutral p-6 rounded-lg">
                <h3 className="font-semibold text-secondary mb-2">Customs & Import Duties</h3>
                <p className="text-secondary/80">
                  International orders may be subject to customs and import duties upon arrival in the destination country. These charges are the responsibility of the customer.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ShippingInfo;