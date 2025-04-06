import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Back to Top */}
        <div className="text-center mb-8">
          <a href="#" className="text-secondary/70 text-sm hover:text-secondary transition">
            ↑ Back to top
          </a>
        </div>

        {/* Grid Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 text-center md:text-left">
          
          {/* Brand & Social */}
          <div>
            <Link to="/" className="font-display text-2xl text-secondary mb-6 inline-block">
              Being Women
            </Link>
            <p className="text-secondary/80 mb-6">
              Celebrating traditional Indian fashion with modern elegance.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              {[
                ['https://instagram.com/beingwomen', <Instagram className="h-6 w-6" />],
                ['https://facebook.com/beingwomen', <Facebook className="h-6 w-6" />],
                ['https://twitter.com/beingwomen', <Twitter className="h-6 w-6" />],
              ].map(([url, icon], idx) => (
                <a
                  key={idx}
                  href={url as string}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-secondary/80 transition-colors transform hover:scale-110"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Collections */}
          <div>
            <h3 className="font-semibold text-secondary mb-6">Collections</h3>
            <ul className="space-y-4">
              <li><Link to="/navratri" className="text-secondary/80 hover:text-secondary transition-colors">Navratri Collection</Link></li>
              <li><Link to="/wedding" className="text-secondary/80 hover:text-secondary transition-colors">Wedding Collection</Link></li>
              <li><Link to="/casual" className="text-secondary/80 hover:text-secondary transition-colors">Casual Wear</Link></li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="font-semibold text-secondary mb-6">Information</h3>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-secondary/80 hover:text-secondary transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-secondary/80 hover:text-secondary transition-colors">Contact Us</Link></li>
              <li><Link to="/shipping" className="text-secondary/80 hover:text-secondary transition-colors">Shipping Information</Link></li>
              <li><Link to="/faq" className="text-secondary/80 hover:text-secondary transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Contact / Newsletter */}
          <div>
            <h3 className="font-semibold text-secondary mb-6">Stay in Touch</h3>
            <form className="flex flex-col items-center md:items-start space-y-3">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-full bg-white text-primary text-sm w-full md:w-60"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-secondary text-primary text-sm rounded-full hover:bg-secondary/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
            <ul className="mt-6 space-y-2 text-secondary/80 text-sm">
              <li>Email: support@beingwomen.com</li>
              <li>Phone: +91 98765 43210</li>
              <li>Address: 123 Fashion Street, Mumbai</li>
              <li>Hours: Mon - Sat, 10 AM - 7 PM IST</li>
            </ul>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="border-t border-secondary/20 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <p className="text-secondary/70 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Being Women. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-secondary/70 hover:text-secondary transition-colors text-sm">Privacy Policy</Link>
              <Link to="/terms" className="text-secondary/70 hover:text-secondary transition-colors text-sm">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
