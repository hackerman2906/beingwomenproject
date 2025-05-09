import React from 'react';

const Wedding = () => {
  const collections = [
    {
      title: "Bridal Couture",
      items: [
        {
          name: "Royal Zari Work Bridal Lehenga",
          price: "₹85,999",
          description: "Heavy zari embroidery with crystal embellishments",
          image: "https://images.unsplash.com/photo-1610117238596-8b1636d3d003?auto=format&fit=crop&q=80"
        },
        {
          name: "Pearl Embellished Bridal Lehenga",
          price: "₹95,999",
          description: "Traditional red lehenga with pearl and mirror work",
          image: "https://images.unsplash.com/photo-1583391099995-0e67401bf5cc?auto=format&fit=crop&q=80"
        },
        {
          name: "Designer Bridal Saree",
          price: "₹75,999",
          description: "Handcrafted with premium silk and zari",
          image: "https://images.unsplash.com/photo-1583391099680-74f7b7aa0fd1?auto=format&fit=crop&q=80"
        }
      ]
    },
    {
      title: "Reception & Sangeet",
      items: [
        {
          name: "Designer Indo-Western Gown",
          price: "₹45,999",
          description: "Modern silhouette with traditional embroidery",
          image: "https://images.unsplash.com/photo-1583391099784-4faa8e565c91?auto=format&fit=crop&q=80"
        },
        {
          name: "Embellished Anarkali Suit",
          price: "₹38,999",
          description: "Perfect for reception celebrations",
          image: "https://images.unsplash.com/photo-1610117238596-8b1636d3d003?auto=format&fit=crop&q=80"
        },
        {
          name: "Contemporary Lehenga",
          price: "₹42,999",
          description: "Modern design for evening celebrations",
          image: "https://images.unsplash.com/photo-1583391099995-0e67401bf5cc?auto=format&fit=crop&q=80"
        }
      ]
    },
    {
      title: "Pre-Wedding Ceremonies",
      items: [
        {
          name: "Mehendi Green Sharara Set",
          price: "₹28,999",
          description: "Embroidered sharara with matching dupatta",
          image: "https://images.unsplash.com/photo-1583391099680-74f7b7aa0fd1?auto=format&fit=crop&q=80"
        },
        {
          name: "Haldi Ceremony Outfit",
          price: "₹18,999",
          description: "Traditional yellow ensemble",
          image: "https://images.unsplash.com/photo-1583391099784-4faa8e565c91?auto=format&fit=crop&q=80"
        },
        {
          name: "Sangeet Special Lehenga",
          price: "₹35,999",
          description: "Perfect for dance celebrations",
          image: "https://images.unsplash.com/photo-1610117238596-8b1636d3d003?auto=format&fit=crop&q=80"
        }
      ]
    }
  ];

  return (
    <div className="bg-primary min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="font-display text-4xl md:text-5xl text-secondary mb-6">
            Wedding Collection
          </h1>
          <p className="text-xl text-secondary/90 leading-relaxed">
            Make your special day even more memorable with our exquisite collection of bridal wear
          </p>
        </div>

        <div className="space-y-20">
          {collections.map((collection, index) => (
            <section key={index}>
              <h2 className="text-3xl font-display text-secondary text-center mb-12">
                {collection.title}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {collection.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="group bg-neutral rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="aspect-w-1 aspect-h-1.3 w-full overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover object-center transform transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-medium text-secondary">{item.name}</h3>
                      <p className="mt-1 text-sm text-secondary/80">{item.description}</p>
                      <p className="mt-2 text-lg font-semibold text-secondary">{item.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wedding;