import React from 'react';
import { RefreshCw, Package, CreditCard, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Returns = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="font-display text-4xl mb-4">Returns & Exchanges</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          We want you to be completely satisfied with your purchase. Learn about our hassle-free returns and exchanges process.
        </p>
      </div>

      {/* Return Process Steps */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {[
          {
            icon: Package,
            title: "Initiate Return",
            description: "Log into your account and select the item you wish to return within 7 days of delivery"
          },
          {
            icon: RefreshCw,
            title: "Pack & Ship",
            description: "Pack the item in its original packaging and ship it back using our return label"
          },
          {
            icon: CreditCard,
            title: "Get Refund",
            description: "Once we receive and inspect the item, we'll process your refund within 3-5 business days"
          }
        ].map((step, index) => (
          <div key={index} className="text-center p-6 bg-muted rounded-lg">
            <step.icon className="h-8 w-8 text-primary mx-auto mb-4" />
            <h3 className="font-display text-xl mb-2">{step.title}</h3>
            <p className="text-muted-foreground">{step.description}</p>
          </div>
        ))}
      </div>

      {/* Return Policy Details */}
      <div className="space-y-8">
        <section>
          <h2 className="font-display text-2xl mb-6">Return Policy</h2>
          <div className="bg-muted p-6 rounded-lg space-y-4">
            <p className="text-muted-foreground">
              Items can be returned within 7 days of delivery if they are:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Unused and unworn</li>
              <li>In original packaging with tags attached</li>
              <li>Free from any damage or alterations</li>
              <li>Accompanied by the original invoice</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="font-display text-2xl mb-6">Exchange Process</h2>
          <div className="bg-muted p-6 rounded-lg space-y-4">
            <p className="text-muted-foreground">
              We offer size exchanges subject to availability. To request an exchange:
            </p>
            <ol className="list-decimal list-inside text-muted-foreground space-y-2">
              <li>Log into your account and select "Request Exchange"</li>
              <li>Choose the new size you want</li>
              <li>Print the return label and ship the original item back</li>
              <li>Once we receive the item, we'll ship your exchange</li>
            </ol>
          </div>
        </section>

        <section>
          <h2 className="font-display text-2xl mb-6">Refund Information</h2>
          <div className="bg-muted p-6 rounded-lg space-y-4">
            <div className="space-y-2">
              <h3 className="font-semibold">Processing Time</h3>
              <p className="text-muted-foreground">
                Refunds are processed within 3-5 business days after we receive and inspect the returned item.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">Refund Methods</h3>
              <p className="text-muted-foreground">
                Refunds will be issued to the original payment method used for the purchase.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="font-display text-2xl mb-6">Non-Returnable Items</h2>
          <div className="bg-muted p-6 rounded-lg">
            <div className="flex items-start gap-4">
              <AlertCircle className="h-5 w-5 text-primary mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Please Note</h3>
                <p className="text-muted-foreground">
                  The following items cannot be returned or exchanged:
                </p>
                <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
                  <li>Custom-stitched or altered items</li>
                  <li>Sale or discounted items</li>
                  <li>Intimate wear and accessories</li>
                  <li>Items marked as "Final Sale"</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Have questions about returns or exchanges?
          </p>
          <Link
            to="/contact"
            className="text-primary hover:text-primary/80"
          >
            Contact our customer support team →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Returns;