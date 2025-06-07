import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">NIKE</h3>
            <p className="text-gray-400 text-sm">
              Just Do It. The future of sport is here.
            </p>
          </div>

          {/* Find a Store */}
          <div>
            <h3 className="text-lg font-semibold mb-4">FIND A STORE</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/store-locator" className="hover:text-white transition-colors">
                  Store Locator
                </Link>
              </li>
              <li>
                <Link href="/become-a-member" className="hover:text-white transition-colors">
                  Become a Member
                </Link>
              </li>
              <li>
                <Link href="/send-us-feedback" className="hover:text-white transition-colors">
                  Send Us Feedback
                </Link>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-lg font-semibold mb-4">HELP</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/order-status" className="hover:text-white transition-colors">
                  Order Status
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="hover:text-white transition-colors">
                  Shipping & Delivery
                </Link>
              </li>
              <li>
                <Link href="/returns" className="hover:text-white transition-colors">
                  Returns
                </Link>
              </li>
              <li>
                <Link href="/payment-options" className="hover:text-white transition-colors">
                  Payment Options
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* About Nike */}
          <div>
            <h3 className="text-lg font-semibold mb-4">ABOUT NIKE</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/news" className="hover:text-white transition-colors">
                  News
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/investors" className="hover:text-white transition-colors">
                  Investors
                </Link>
              </li>
              <li>
                <Link href="/sustainability" className="hover:text-white transition-colors">
                  Sustainability
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col items-center space-y-6">
            <div className="text-sm text-gray-400 text-center">
              © {new Date().getFullYear()} Nike-Rebrand, Inc. All Rights Reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}