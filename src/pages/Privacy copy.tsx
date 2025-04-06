import React from 'react';

const Privacy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="font-display text-4xl mb-8">Privacy Policy</h1>
      
      <div className="prose prose-lg">
        <p className="text-muted-foreground mb-8">
          Last updated: March 15, 2025
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-display mb-4">1. Information We Collect</h2>
          <div className="space-y-4">
            <p>We collect information that you provide directly to us, including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Name and contact information</li>
              <li>Billing and shipping address</li>
              <li>Payment information</li>
              <li>Order history</li>
              <li>Communication preferences</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-display mb-4">2. How We Use Your Information</h2>
          <div className="space-y-4">
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Process your orders and payments</li>
              <li>Communicate with you about your orders</li>
              <li>Send you marketing communications (with your consent)</li>
              <li>Improve our products and services</li>
              <li>Comply with legal obligations</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-display mb-4">3. Information Sharing</h2>
          <p>We do not sell your personal information. We share your information only with:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Service providers who assist in our operations</li>
            <li>Payment processors</li>
            <li>Shipping partners</li>
            <li>Legal authorities when required by law</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-display mb-4">4. Your Rights</h2>
          <p>You have the right to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Access your personal information</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Opt-out of marketing communications</li>
            <li>Data portability</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-display mb-4">5. Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-display mb-4">6. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <div className="mt-4">
            <p>Email: privacy@beingwomen.in</p>
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

export default Privacy;