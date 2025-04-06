import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navItems: [string, string][] = [
  ['Home', '/'],
  ['Navratri Collection', '/navratri'],
  ['Wedding', '/wedding'],
  ['Casual', '/casual'],
  ['About', '/about'],
  ['Contact', '/contact'],
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="bg-primary-navbar text-secondary sticky top-0 z-50 shadow-lg border-b border-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo with Text */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="font-display text-3xl font-bold text-secondary tracking-wide">
              being
            </span>
            <img
              src="/assets/logo1.jpg"
              alt="Logo Icon"
              className="h-10 w-auto"
            />
            <span className="font-display text-3xl font-bold text-secondary tracking-wide">
              women
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map(([name, path]) => (
              <Link
                key={path}
                to={path}
                className={`text-secondary relative group py-2 text-lg font-medium ${
                  location.pathname === path ? 'font-semibold underline underline-offset-4' : ''
                }`}
              >
                {name}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-secondary transform scale-x-0 transition-transform group-hover:scale-x-100" />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-secondary hover:text-secondary/80 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-primary-navbar border-t border-secondary/20">
            <div className="px-2 pt-2 pb-4 space-y-2">
              {navItems.map(([name, path]) => (
                <Link
                  key={path}
                  to={path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium text-secondary hover:bg-secondary/10 ${
                    location.pathname === path ? 'font-semibold underline underline-offset-4' : ''
                  }`}
                >
                  {name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
