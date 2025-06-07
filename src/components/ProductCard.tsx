'use client';

import { useCart } from '@/contexts/CartContext';
import { Product } from '@/data/products';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface ProductCardProps {
  product: Product; // Pass the whole product object now
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { id, name, price, image, category } = product;
  const { addToCart } = useCart();
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart(product, undefined, undefined, quantity);
  };

  const handleBuyNow = () => {
    addToCart(product, undefined, undefined, quantity);
    router.push('/cart'); // Redirect to cart page after adding
  };

  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col"
    >
      <Link href={`/product/${id}`} className="block">
        <div className="aspect-square relative">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-4 flex-grow">
          <h3 className="text-lg font-semibold mb-1">{name}</h3>
          <p className="text-gray-600 text-sm mb-2">{category}</p>
          <p className="font-bold">₹{price.toLocaleString('en-IN')}</p>
        </div>
      </Link>
      <div className="p-4 pt-0 flex justify-between gap-2 items-center">
        <select 
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="border rounded-md px-2 py-1 text-sm"
        >
          {[...Array(10)].map((_, i) => (
            <option key={i + 1} value={i + 1}>
              Qty: {i + 1}
            </option>
          ))}
        </select>
        <button 
          onClick={handleAddToCart}
          className="flex-1 bg-gray-200 text-black py-2 px-4 rounded-full text-sm font-semibold hover:bg-gray-300 transition-colors"
        >
          Add to Cart
        </button>
        <button 
          onClick={handleBuyNow}
          className="flex-1 bg-black text-white py-2 px-4 rounded-full text-sm font-semibold hover:bg-gray-800 transition-colors"
        >
          Buy Now
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCard; 