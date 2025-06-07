'use client';

import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';
import { useParams } from 'next/navigation';
import { useMemo, useState } from 'react';

export default function CategoryPage() {
  const params = useParams();
  const category = params.category as string;
  const [sortBy, setSortBy] = useState('');
  const [selectedCategory] = useState('all');
  
  const categoryProducts = useMemo(() => {
    return products.filter(
      product => {
        const matchesMainCategory = product.category.toLowerCase() === category.toLowerCase();
        if (selectedCategory === 'all') return matchesMainCategory;
        
        const categoryMap: { [key: string]: string[] } = {
          'dunk': ['dunk low', 'dunk high'],
          'blazer': ['blazer'],
          'air-max': ['air max'],
          'air-jordan-1': ['jordan 1', 'air jordan 1'],
          'air-force-1': ['air force 1'],
          'lifestyle-running': ['react', 'pegasus', 'zoomx', 'infinity']
        };
        
        const searchTerms = categoryMap[selectedCategory] || [];
        return matchesMainCategory && searchTerms.some(term => 
          product.name.toLowerCase().includes(term)
        );
      }
    );
  }, [category, selectedCategory]);

  const sortedProducts = useMemo(() => {
    const products = [...categoryProducts];
    if (sortBy === 'price-low') {
      return products.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      return products.sort((a, b) => b.price - a.price);
    }
    return products;
  }, [categoryProducts, sortBy]);

  const categoryTitle = category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-8">{categoryTitle}</h1>
        
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