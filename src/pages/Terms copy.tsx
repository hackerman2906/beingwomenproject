import React from 'react';

const Terms = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="font-display text-4xl mb-8">Terms of Service</h1>
      
      <div className="prose prose-lg">
        <p className="text-muted-foreground mb-8">
          Last updated: March 15, 2025
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-display mb-4">1. Acceptance of Terms</h2>
          <p>
            By accessing and using Being Women's website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-display mb-4">2. Use of Services</h2>
          <div className="space-y-4">
            <p>You agree to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide accurate and complete information</li>
              <li>Maintain the security of your account</li>
              <li>Use the services in compliance with applicable laws</li>
              <li>Not engage in any fraudulent or harmful activities</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-display mb-4">3. Product Information</h2>
          <div className="space-y-4">
            <p>
              We strive to provide accurate product descriptions and pricing. However, we reserve the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Modify product specifications without notice</li>
              <li>Correct pricing errors</li>
              <li>Limit order quantities</li>
              <li>Discontinue products</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-display mb-4">4. Orders and Payment</h2>
          <div className="space-y-4">
            <p>
              By placing an order, you agree to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Pay the full amount when placing the order</li>
              <li>Provide valid payment information</li>
              <li>Pay any applicable taxes and shipping charges</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-display mb-4">5. Shipping and Delivery</h2>
          <div className="space-y-4">
            <p>
              We will make reasonable efforts to deliver products within the estimated timeframes. However:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Delivery times are estimates only</li>
              <li>We are not responsible for delays beyond our control</li>
              <li>Risk of loss passes to you upon delivery</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-display mb-4">6. Returns and Refunds</h2>
          <p>
            Please refer to our Returns Policy for detailed information about returns, exchanges, and refunds.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-display mb-4">7. Intellectual Property</h2>
          <p>
            All content on our website, including text, graphics, logos, and images, is our property and protected by copyright laws.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-display mb-4">8. Limitation of Liability</h2>
          <p>
            We shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-display mb-4">9. Changes to Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. Continued use of our services after changes constitutes acceptance of the modified terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-display mb-4">10. Contact Information</h2>
          <p>
            For questions about these Terms of Service, please contact us at:
          </p>
          <div className="mt-4">
            <p>Email: legal@beingwomen.in</p>
            <p>Phone: +91 98765 43210</p>
            <p>
              Address: 123 Fashion Street, Linking Road<br />
              Mumbai, Maharashtra 400050<br />
              India
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Terms;