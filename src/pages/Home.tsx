import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Contact } from 'lucide-react';

const galleryItems = [
  {
    image: "/assets/dress2.jpg",
    label: "Bridal Lehenga",
    description: "Exquisite bridal wear with intricate embroidery"
  },
  {
    image: "/assets/dress3.jpg",
    label: "Festive Kurti Set",
    description: "Perfect for special occasions"
  },
  {
    image: "/assets/dress4.jpeg",
    label: "Elegant Saree",
    description: "Traditional elegance meets modern style"
  },
  {
    image: "/assets/dress5.jpg",
    label: "Contemporary Anarkali",
    description: "Modern silhouettes with traditional touches"
  },
  {
    image: "/assets/dress6.jpg",
    label: "Designer Lehenga",
    description: "Handcrafted with premium fabrics"
  },
  {
    image: "/assets/dress7.jpg",
    label: "Chaniya Choli",
    description: "Traditional Gujarati attire"
  }
];

const Home = () => {
  return (
    <div className="bg-primary">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] md:min-h-[85vh] bg-[url('/assets/hero.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-primary/90" />
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center pt-40 md:pt-64">
          {/* Hero Text */}
          <div className="w-full md:w-1/2 max-w-xl mb-10 md:mb-0">
            <h1 className="font-display text-5xl md:text-7xl text-secondary mb-6 leading-tight">
              Timeless Elegance, Modern Spirit
            </h1>
            <p className="text-xl text-secondary/90 mb-8 leading-relaxed max-w-2xl">
              Discover our exquisite collection of Indian ethnic wear, where tradition meets contemporary design.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-secondary text-primary rounded-full hover:bg-secondary/90 transition-colors text-lg font-medium shadow-md"
            >
              Customize Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>

          {/* Hero Side Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="/assets/hero1.jpg"
              alt="Model in traditional wear"
              className="rounded-lg shadow-xl w-full max-w-sm"
            />
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="font-display text-4xl text-secondary mb-4">Our Collection</h2>
            <p className="text-secondary/80">
              Explore our curated selection of traditional and contemporary Indian wear
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className="group bg-neutral rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.label}
                    loading="lazy"
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium text-secondary mb-2">{item.label}</h3>
                  <p className="text-secondary/80 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-section" className="py-24 bg-primary border-t border-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl text-secondary mb-4">Get in Touch</h2>
            <p className="text-secondary/80 max-w-2xl mx-auto">
              Have questions about our collections or interested in custom designs? We're here to help.
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <Link
              to="/contact"
              className="block w-full text-center py-4 bg-gradient-to-r from-secondary to-yellow-400 text-primary font-semibold rounded-full shadow-md hover:brightness-110 transition text-lg"
            >
              Contact Us Now
              <Contact className="inline ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
