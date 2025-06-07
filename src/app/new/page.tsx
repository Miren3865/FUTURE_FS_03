'use client';

import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function NewPage() {
  const [sortBy, setSortBy] = useState('');
  
  const newProducts = products.filter(
    product => product.category.toLowerCase() === 'new'
  );

  const sortedProducts = [...newProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-8">New & Featured</h1>
        
        {/* Hero Section */}
        <div className="relative h-[400px] mb-12 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10" />
          <div className="absolute inset-0">
            <Image
              src="/hero-bg.jpg"
              alt="New Collection"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative z-20 h-full flex items-center px-8">
            <div className="text-white max-w-xl">
              <h2 className="text-5xl font-bold mb-4">New Arrivals</h2>
              <p className="text-xl mb-6">
                Discover our latest collection of innovative designs and cutting-edge technology.
              </p>
              <Link href="/">
                <button className="bg-white text-black px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors">
                  Shop Now
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="mb-8 flex gap-4">
          <select 
            className="border rounded-md px-4 py-2"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="">Sort By</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedProducts.slice(0, 18).map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </div>
    </div>
  );
}