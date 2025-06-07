'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-bg.jpg"
            alt="Nike Hero Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white px-4"
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            JUST DO IT
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Experience the future of sport with Nike&apos;s latest innovations
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-black px-8 py-3 rounded-full font-semibold text-lg"
          >
            Shop Now
          </motion.button>
        </motion.div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              id: 'mens-air-max-270',
              name: "Nike Air Max 270",
              price: "₹14,995",
              image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/przhlilttuqiis7no3rr/W+AIR+MAX+270.png",
              description: "Nike's first lifestyle Air Max"
            },
            {
              id: 'mens-air-force-1-07',
              name: "Nike Air Force 1 '07",
              price: "₹8,195",
              image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a42a5d53-2f99-4e78-a081-9d07a2d0774a/AIR+FORCE+1+%2707.png",
              description: "The classic white sneaker"
            },
            {
              id: 'mens-jordan-1-high',
              name: "Air Jordan 1 Retro High OG",
              price: "₹16,995",
              image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/a92219ed-b339-46d0-958c-531b76fced10/WMNS+AIR+JORDAN+1+RETRO+HI+OG.png",
              description: "Iconic basketball heritage"
            },
            {
              id: 'mens-dunk-low',
              name: "Nike Dunk Low",
              price: "₹9,995",
              image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/4f37fca8-6bce-43e7-ad07-f57ae3c13142/dunk-low-mens-shoes-86f1ZW.png",
              description: "Timeless street style"
            },
            {
              id: 'mens-air-max-90',
              name: "Nike Air Max 90",
              price: "₹12,295",
              image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8e124331-e1cc-40cf-bc67-4112b91e2ce0/WMNS+AIR+MAX+90.png",
              description: "Classic comfort and style"
            },
            {
              id: 'mens-blazer-mid-77',
              name: "Nike Blazer Mid '77 Vintage",
              price: "₹7,995",
              image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/389b709e-5102-4e55-aa5d-07099b500831/BLAZER+MID+%2777+VNTG.png",
              description: "Vintage basketball design"
            }
          ].map((shoe) => (
            <motion.div
              key={shoe.id}
              whileHover={{ y: -10 }}
              className="bg-gray-100 rounded-lg overflow-hidden"
            >
              <div className="aspect-square relative">
                <Image
                  src={shoe.image}
                  alt={shoe.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{shoe.name}</h3>
                <p className="text-gray-600 mb-2">{shoe.description}</p>
                <p className="text-lg font-bold mb-4">{shoe.price}</p>
                <Link
                  href={`/product/${shoe.id}`}
                  className="text-black font-semibold hover:underline"
                >
                  Learn More →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}