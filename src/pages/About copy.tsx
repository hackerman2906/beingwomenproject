import React from 'react';

const About = () => {
  return (
    <div className="bg-primary min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Mission Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="font-display text-4xl md:text-5xl text-secondary mb-6">The Story of Being Women</h1>
          <p className="text-xl text-secondary/90 leading-relaxed">
            Celebrating the rich heritage of Indian fashion while embracing modern elegance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="font-display text-3xl text-secondary mb-6">Our Mission</h2>
            <p className="text-secondary/80 mb-4">
              At Being Women, we are dedicated to bringing you authentic, stylish, and high-quality Indian ethnic wear. Our mission is to preserve and celebrate the rich traditions of Indian fashion while making it accessible to the modern woman.
            </p>
            <p className="text-secondary/80">
              Each garment in our collection is carefully curated, focusing on traditional craftsmanship and contemporary designs. From vibrant Navratri lehengas to elegant wedding sarees, every piece tells a story of heritage and elegance.
            </p>
          </div>
          <div className="aspect-w-4 aspect-h-5 rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1583391099680-74f7b7aa0fd1?auto=format&fit=crop&q=80"
              alt="Traditional Indian ethnic wear"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="font-display text-3xl text-secondary text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Authenticity",
                description: "Every piece in our collection reflects the true essence of Indian craftsmanship and cultural heritage."
              },
              {
                title: "Quality",
                description: "We source the finest fabrics and work with skilled artisans to create garments that last."
              },
              {
                title: "Tradition Meets Modern",
                description: "Our designs honor traditional techniques while embracing contemporary styles for today's woman."
              }
            ].map((value, index) => (
              <div key={index} className="text-center p-6 rounded-lg bg-neutral">
                <h3 className="font-display text-xl text-secondary mb-4">{value.title}</h3>
                <p className="text-secondary/80">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Founder's Message */}
        <div className="bg-neutral rounded-2xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl text-secondary mb-6">A Message from Our Founder</h2>
            <p className="text-lg text-secondary/80 mb-8">
              "Indian ethnic wear is more than just clothing – it's a celebration of our rich cultural heritage, a symbol of timeless elegance, and a way to connect with our traditions. At Being Women, we're dedicated to bringing you authentic designs that make you feel confident and beautiful, especially during festive celebrations like Navratri."
            </p>
            <div className="text-center">
              <h4 className="font-semibold text-secondary">Priya Sharma</h4>
              <p className="text-sm text-secondary/80">Founder & Creative Director</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;