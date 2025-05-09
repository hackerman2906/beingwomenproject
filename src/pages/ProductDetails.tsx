import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Heart, ShoppingBag, Star } from 'lucide-react';
import { Button } from '../components/ui/button';

const ProductDetails = () => {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);

  // Mock product data
  const product = {
    id: 1,
    name: "Embroidered Anarkali Suit",
    price: "₹4,999",
    description: "Elegant Anarkali suit with intricate embroidery work, perfect for festive occasions. Made with premium quality fabric and detailed craftsmanship.",
    images: [
      "https://images.unsplash.com/photo-1585351650024-8e333a17aeff?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1610117238596-8b1636d3d003?auto=format&fit=crop&q=80",
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    fabric: "Georgette",
    care: ["Dry clean only", "Do not bleach", "Iron on medium heat"],
    reviews: {
      average: 4.5,
      count: 128,
    },
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Image Gallery */}
        <div className="space-y-4">
          {product.images.map((image, index) => (
            <div key={index} className="aspect-w-3 aspect-h-4 rounded-lg overflow-hidden">
              <img
                src={image}
                alt={`${product.name} - View ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-display mb-2">{product.name}</h1>
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${i < Math.floor(product.reviews.average) ? 'text-accent fill-current' : 'text-gray-300'}`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                {product.reviews.count} reviews
              </span>
            </div>
            <p className="text-2xl font-semibold mt-4">{product.price}</p>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Size</h3>
              <div className="flex gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 border rounded-md ${
                      selectedSize === size
                        ? 'border-primary bg-primary/5 text-primary'
                        : 'border-border hover:border-primary'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Quantity</h3>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-1 border rounded-md"
                >
                  -
                </button>
                <span className="w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-1 border rounded-md"
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex gap-4">
              <Button className="flex-1 bg-primary hover:bg-primary/90">
                <ShoppingBag className="h-4 w-4 mr-2" />
                Add to Cart
              </Button>
              <Button variant="outline" className="flex-1">
                <Heart className="h-4 w-4 mr-2" />
                Add to Wishlist
              </Button>
            </div>
          </div>

          <div className="space-y-4 border-t border-border pt-6">
            <div>
              <h3 className="font-semibold mb-2">Description</h3>
              <p className="text-muted-foreground">{product.description}</p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Fabric</h3>
              <p className="text-muted-foreground">{product.fabric}</p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Care Instructions</h3>
              <ul className="list-disc list-inside text-muted-foreground">
                {product.care.map((instruction, index) => (
                  <li key={index}>{instruction}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;