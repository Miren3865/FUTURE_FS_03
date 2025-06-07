'use client';

import { useCart } from '@/contexts/CartContext';
import { products } from '@/data/products';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useState } from 'react';

export default function ProductDetailPage() {
  const params = useParams();
  const productId = params.id as string;

  const product = products.find(p => p.id === productId);
  const { addToCart } = useCart();

  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | number | null>(null);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <div className="min-h-screen pt-20 flex items-center justify-center text-xl">Product not found.</div>;
  }

  const handleAddToCart = () => {
    // Ensure a color and size are selected before adding to cart
    if (!selectedColor) {
      alert('Please select a color.');
      return;
    }
    if (!selectedSize) {
      alert('Please select a size.');
      return;
    }
    addToCart(product, selectedColor, selectedSize as number, quantity);
  };

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-5xl font-bold mb-8">{product.name}</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative w-full h-[500px] bg-gray-100 rounded-lg overflow-hidden"
          >
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Product Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-gray-700 text-lg">{product.description}</p>
            <p className="text-3xl font-bold text-black">₹{product.price.toLocaleString('en-IN')}</p>

            <div>
              <h3 className="text-lg font-semibold mb-2">Available Colors:</h3>
              <div className="flex gap-2">
                {product.colorOptions.map(color => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 border rounded-full text-sm transition-colors duration-200
                    ${selectedColor === color ? 'bg-black text-white border-black' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Available Sizes:</h3>
              <div className="flex gap-2 flex-wrap">
                {product.availableSizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 border rounded-full text-sm transition-colors duration-200
                    ${selectedSize === size ? 'bg-black text-white border-black' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Quantity:</h3>
              <select
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="border rounded-md px-4 py-2 text-sm"
              >
                {[...Array(10)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Materials:</h3>
              <ul className="list-disc list-inside text-gray-700">
                {product.materials.map(material => (
                  <li key={material}>{material}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Features:</h3>
              <ul className="list-disc list-inside text-gray-700">
                {product.features.map(feature => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Care Instructions:</h3>
              <p className="text-gray-700">{product.careInstructions}</p>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleAddToCart}
              className="w-full bg-black text-white py-3 px-6 rounded-full text-lg font-semibold flex items-center justify-center gap-2 mt-8"
            >
              <ShoppingCartIcon className="h-6 w-6" /> Add to Cart
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}