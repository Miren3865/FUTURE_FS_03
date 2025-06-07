'use client';

import { useCart } from '@/contexts/CartContext';
import Image from 'next/image';
import Link from 'next/link';

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalAmount = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <div className="min-h-screen pt-20 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
        <p className="text-gray-600 mb-8">Add some amazing products to your cart!</p>
        <Link href="/" className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors">
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-8">Your Cart ({totalItems} {totalItems === 1 ? 'item' : 'items'})</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="border-t border-gray-200 divide-y divide-gray-200">
              {cart.map((item) => (
                <div key={item.id} className="flex py-6">
                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 relative">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover object-center"
                    />
                  </div>

                  <div className="ml-4 flex flex-1 flex-col">
                    <div>
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3>
                          <Link href={`/product/${item.id}`}>{item.name}</Link>
                        </h3>
                        <p className="ml-4">₹{(item.price * item.quantity).toLocaleString('en-IN')}</p>
                      </div>
                      <p className="mt-1 text-sm text-gray-500">{item.category}</p>
                      {item.selectedColor && (
                        <p className="mt-1 text-sm text-gray-500">Color: {item.selectedColor}</p>
                      )}
                      {item.selectedSize && (
                        <p className="mt-1 text-sm text-gray-500">Size: {item.selectedSize}</p>
                      )}
                    </div>
                    <div className="flex flex-1 items-end justify-between text-sm">
                      <div className="text-gray-500">Qty {item.quantity}</div>

                      <div className="flex">
                        <button
                          type="button"
                          onClick={() => removeFromCart(item.id)}
                          className="font-medium text-black hover:text-gray-600"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1 bg-gray-100 p-6 rounded-lg">
            <h2 className="text-lg font-bold mb-4">Order Summary</h2>
            <div className="flex justify-between text-base font-medium text-gray-900 mb-4">
              <p>Subtotal ({totalItems} {totalItems === 1 ? 'item' : 'items'})</p>
              <p>₹{totalAmount.toLocaleString('en-IN')}</p>
            </div>
            <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
            <div className="mt-6">
              <button
                onClick={clearCart}
                className="w-full bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors text-center"
              >
                Proceed to Checkout
              </button>
            </div>
            <div className="mt-6 flex justify-center text-sm text-center text-gray-500">
              <p>
                or{' '}
                <Link
                  href="/"
                  className="font-medium text-black hover:text-gray-600"
                >
                  Continue Shopping
                  <span aria-hidden="true"> &rarr;</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 