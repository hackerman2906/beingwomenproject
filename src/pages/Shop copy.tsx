import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Filter, X } from 'lucide-react';
import { Button } from '../components/ui/button';

interface FilterState {
  price: string[];
  size: string[];
  fabric: string[];
  occasion: string[];
  color: string[];
}

const Shop = () => {
  const { category } = useParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
    price: [],
    size: [],
    fabric: [],
    occasion: [],
    color: [],
  });

  const products = [
    {
      id: 1,
      name: "Zari Embroidered Bridal Lehenga",
      price: "₹45,999",
      image: "https://images.unsplash.com/photo-1585595751864-6e8db677932e?auto=format&fit=crop&q=80",
      category: "Wedding",
      fabric: "Raw Silk",
      occasion: "Wedding",
    },
    {
      id: 2,
      name: "Designer Banarasi Silk Saree",
      price: "₹12,999",
      image: "https://images.unsplash.com/photo-1583391099995-0e67401bf5cc?auto=format&fit=crop&q=80",
      category: "Wedding",
      fabric: "Banarasi Silk",
      occasion: "Wedding",
    },
    {
      id: 3,
      name: "Floral Print Anarkali Suit",
      price: "₹8,999",
      image: "https://images.unsplash.com/photo-1583391099680-74f7b7aa0fd1?auto=format&fit=crop&q=80",
      category: "Festive",
      fabric: "Georgette",
      occasion: "Navratri",
    },
    {
      id: 4,
      name: "Cotton Chanderi Kurti",
      price: "₹1,999",
      image: "https://images.unsplash.com/photo-1583391099784-4faa8e565c91?auto=format&fit=crop&q=80",
      category: "Casual",
      fabric: "Cotton",
      occasion: "Casual",
    },
  ];

  const filterOptions = {
    price: ['Under ₹2,000', '₹2,000 - ₹5,000', '₹5,000 - ₹15,000', 'Above ₹15,000'],
    size: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    fabric: ['Cotton', 'Silk', 'Georgette', 'Chiffon', 'Crepe', 'Raw Silk', 'Banarasi Silk'],
    occasion: ['Wedding', 'Navratri', 'Festive', 'Casual', 'Party'],
    color: ['Red', 'Pink', 'Blue', 'Green', 'Yellow', 'Purple', 'Gold', 'Silver'],
  };

  const toggleFilter = (category: keyof FilterState, value: string) => {
    setFilters(prev => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter(item => item !== value)
        : [...prev[category], value],
    }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-display">
          {category ? `${category.charAt(0).toUpperCase() + category.slice(1)} Collection` : 'All Collections'}
        </h1>
        <Button
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          variant="outline"
          className="flex items-center gap-2 md:hidden"
        >
          <Filter className="h-4 w-4" />
          Filters
        </Button>
      </div>

      <div className="flex gap-8">
        {/* Filters Sidebar */}
        <div className={`w-64 shrink-0 transition-all duration-300 ${isFilterOpen ? 'block absolute inset-0 bg-white z-50 p-4 md:relative md:p-0' : 'hidden md:block'}`}>
          {isFilterOpen && (
            <button
              onClick={() => setIsFilterOpen(false)}
              className="md:hidden absolute top-4 right-4 p-2"
            >
              <X className="h-6 w-6" />
            </button>
          )}
          <div className="sticky top-4 space-y-6">
            {Object.entries(filterOptions).map(([category, options]) => (
              <div key={category} className="border-b border-border pb-4">
                <h3 className="font-semibold mb-3 capitalize">{category}</h3>
                <div className="space-y-2">
                  {options.map((option) => (
                    <label key={option} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={filters[category as keyof FilterState].includes(option)}
                        onChange={() => toggleFilter(category as keyof FilterState, option)}
                        className="rounded border-gray-300 text-primary focus:ring-primary"
                      />
                      <span className="text-sm">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="group">
                <div className="aspect-w-1 aspect-h-1.3 w-full overflow-hidden rounded-lg bg-gray-200 mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover object-center group-hover:opacity-75 transition-opacity"
                  />
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
                  <p className="text-lg font-semibold text-primary">{product.price}</p>
                  <div className="flex gap-2">
                    <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                      {product.fabric}
                    </span>
                    <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                      {product.occasion}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;