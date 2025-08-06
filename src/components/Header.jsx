import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Shield } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cyber-dark/90 backdrop-blur-md border-b border-cyber-blue/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-2"
          >
            <Shield className="w-8 h-8 text-cyber-blue" />
            <span className="text-xl font-bold text-white font-cyber">
              Underrated Security
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#threats" className="text-gray-300 hover:text-cyber-blue transition-colors">
              Threats
            </a>
            <a href="#stats" className="text-gray-300 hover:text-cyber-blue transition-colors">
              Stats
            </a>
            <a href="#pricing" className="text-gray-300 hover:text-cyber-blue transition-colors">
              Pricing
            </a>
            <button className="cyber-button text-sm">
              Get Started
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-cyber-blue transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-cyber-blue/20 bg-cyber-gray/95 backdrop-blur-md"
          >
            <div className="px-4 py-6 space-y-4">
              <a
                href="#threats"
                className="block text-gray-300 hover:text-cyber-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Threats
              </a>
              <a
                href="#stats"
                className="block text-gray-300 hover:text-cyber-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Stats
              </a>
              <a
                href="#pricing"
                className="block text-gray-300 hover:text-cyber-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </a>
              <button className="cyber-button w-full">
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header; 