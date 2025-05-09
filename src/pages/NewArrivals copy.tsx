import React from 'react';
import { Link } from 'react-router-dom';

const NewArrivals = () => {
  const collections = [
    {
      title: "Navratri Collection",
      items: [
        {
          name: "Embroidered Chaniya Choli",
          price: "₹8,999",
          image: "https://images.unsplash.com/photo-1583391099995-0e67401bf5cc?auto=format&fit=crop&q=80",
          category: "Navratri"
        },
        {
          name: "Mirror Work Lehenga",
          price: "₹12,999",
          image: "https://images.unsplash.com/photo-1583391099680-74f7b7aa0fd1?auto=format&fit=crop&q=80",
          category: "Navratri"
        }
      ]
    },
    {
      title: "Wedding Collection",
      items: [
        {
          name: "Bridal Lehenga",
          price: "₹45,999",
          image: "https://images.unsplash.com/photo-1610117238596-8b1636d3d003?auto=format&fit=crop&q=80",
          category: "Wedding"
        },
        {
          name: "Designer Saree",
          price: "₹25,999",
          image: "https://images.unsplash.com/photo-1583391099784-4faa8e565c91?auto=format&fit=crop&q=80",
          category: "Wedding"
        }
      ]
    },
    {
      title: "Casual Collection",
      items: [
        {
          name: "Printed Kurti Set",
          price: "₹2,999",
          image: "https://images.unsplash.com/photo-1583391099995-0e67401bf5cc?auto=format&fit=crop&q=80",
          category: "Casual"
        },
        {
          name: "Cotton Anarkali",
          price: "₹3,999",
          image: "https://images.unsplash.com/photo-1583391099680-74f7b7aa0fd1?auto=format&fit=crop&q=80",
          category: "Casual"
        }
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-display mb-4">New Arrivals</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover our latest collections featuring traditional craftsmanship with contemporary designs
        </p>
      </div>

      <div className="space-y-16">
        {collections.map((collection, index) => (
          <section key={index}>
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-display">{collection.title}</h2>
              <Link 
                to={`/${collection.title.split(' ')[0].toLowerCase()}`}
                className="text-primary hover:text-primary/80 font-medium"
              >
                View Collection
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {collection.items.map((item, itemIndex) => (
                <div key={itemIndex} className="group">
                  <div className="aspect-w-1 aspect-h-1.3 w-full overflow-hidden rounded-xl bg-gray-100 mb-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover object-center transform transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 group-hover:text-primary transition-colors">
                      {item.name}
                    </h3>
                    <p className="mt-1 text-lg font-semibold text-primary">{item.price}</p>
                    <span className="inline-block mt-2 text-xs px-3 py-1 bg-primary/10 text-primary rounded-full">
                      New Arrival
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;