import React from 'react';

const Casual = () => {
  const collections = [
    {
      title: "Everyday Essentials",
      items: [
        {
          name: "Cotton Printed Kurti",
          price: "₹1,999",
          description: "Breathable cotton with traditional block prints",
          image: "https://images.unsplash.com/photo-1583391099995-0e67401bf5cc?auto=format&fit=crop&q=80"
        },
        {
          name: "Embroidered A-Line Kurti",
          price: "₹2,499",
          description: "Light embroidery work on premium cotton",
          image: "https://images.unsplash.com/photo-1583391099680-74f7b7aa0fd1?auto=format&fit=crop&q=80"
        },
        {
          name: "Palazzo Set",
          price: "₹3,499",
          description: "Contemporary palazzo set with ethnic prints",
          image: "https://images.unsplash.com/photo-1583391099784-4faa8e565c91?auto=format&fit=crop&q=80"
        }
      ]
    },
    {
      title: "Office & Work Wear",
      items: [
        {
          name: "Formal Kurti Set",
          price: "₹2,799",
          description: "Sophisticated design for professional settings",
          image: "https://images.unsplash.com/photo-1610117238596-8b1636d3d003?auto=format&fit=crop&q=80"
        },
        {
          name: "Straight Cut Pants Set",
          price: "₹3,299",
          description: "Modern silhouette with ethnic touches",
          image: "https://images.unsplash.com/photo-1583391099995-0e67401bf5cc?auto=format&fit=crop&q=80"
        },
        {
          name: "Indo-Western Tunic",
          price: "₹2,799",
          description: "Contemporary fusion of styles",
          image: "https://images.unsplash.com/photo-1583391099680-74f7b7aa0fd1?auto=format&fit=crop&q=80"
        }
      ]
    },
    {
      title: "Weekend Collection",
      items: [
        {
          name: "Casual Cotton Dress",
          price: "₹2,599",
          description: "Comfortable daily wear with elegant details",
          image: "https://images.unsplash.com/photo-1583391099784-4faa8e565c91?auto=format&fit=crop&q=80"
        },
        {
          name: "Printed Anarkali",
          price: "₹3,999",
          description: "Floral prints on flowing silhouette",
          image: "https://images.unsplash.com/photo-1610117238596-8b1636d3d003?auto=format&fit=crop&q=80"
        },
        {
          name: "Draped Dress",
          price: "₹2,999",
          description: "Modern drape with traditional embellishments",
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
            Casual Collection
          </h1>
          <p className="text-xl text-secondary/90 leading-relaxed">
            Everyday elegance with our comfortable and stylish ethnic wear
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

export default Casual;