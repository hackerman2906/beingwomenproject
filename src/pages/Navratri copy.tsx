import React from 'react';

const Navratri = () => {
  const collections = [
    {
      title: "Traditional Navratri Elegance",
      items: [
        {
          name: "Red Mirror Work Chaniya Choli",
          price: "₹8,999",
          description: "Handcrafted mirror work on traditional Gujarat-style chaniya choli",
          image: "https://images.unsplash.com/photo-1583391099995-0e67401bf5cc?auto=format&fit=crop&q=80"
        },
        {
          name: "Red Embroidered Lehenga",
          price: "₹12,999",
          description: "Zari work lehenga with traditional motifs",
          image: "https://images.unsplash.com/photo-1583391099680-74f7b7aa0fd1?auto=format&fit=crop&q=80"
        },
        {
          name: "Blue Silk Chaniya Choli",
          price: "₹9,999",
          description: "Pure silk chaniya choli with traditional Kutch embroidery",
          image: "https://images.unsplash.com/photo-1583391099784-4faa8e565c91?auto=format&fit=crop&q=80"
        }
      ]
    },
    {
      title: "Contemporary Festival Wear",
      items: [
        {
          name: "Designer Fusion Lehenga",
          price: "₹15,999",
          description: "Modern take on traditional Navratri wear",
          image: "https://images.unsplash.com/photo-1610117238596-8b1636d3d003?auto=format&fit=crop&q=80"
        },
        {
          name: "Embellished Crop Top Set",
          price: "₹7,999",
          description: "Contemporary two-piece with traditional embroidery",
          image: "https://images.unsplash.com/photo-1583391099995-0e67401bf5cc?auto=format&fit=crop&q=80"
        },
        {
          name: "Mirror Work Palazzo Set",
          price: "₹8,999",
          description: "Modern silhouette with traditional mirror work",
          image: "https://images.unsplash.com/photo-1583391099680-74f7b7aa0fd1?auto=format&fit=crop&q=80"
        }
      ]
    },
    {
      title: "Limited Edition Designs",
      items: [
        {
          name: "Designer Collection Lehenga",
          price: "₹18,999",
          description: "Exclusive design with premium craftsmanship",
          image: "https://images.unsplash.com/photo-1583391099784-4faa8e565c91?auto=format&fit=crop&q=80"
        },
        {
          name: "Luxury Chaniya Choli",
          price: "₹21,999",
          description: "Hand-embroidered with premium materials",
          image: "https://images.unsplash.com/photo-1610117238596-8b1636d3d003?auto=format&fit=crop&q=80"
        },
        {
          name: "Heritage Collection Set",
          price: "₹16,999",
          description: "Inspired by traditional Gujarati craftsmanship",
          image: "https://images.unsplash.com/photo-1583391099995-0e67401bf5cc?auto=format&fit=crop&q=80"
        }
      ]
    }
  ];

  return (
    <div className="bg-primary min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="font-display text-4xl md:text-5xl text-secondary mb-6">
            Navratri Collection 2025
          </h1>
          <p className="text-xl text-secondary/90 leading-relaxed">
            Celebrate the nine divine nights with our exclusive collection of traditional Chaniya Cholis and Lehengas
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

export default Navratri;