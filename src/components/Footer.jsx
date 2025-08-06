import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Mail, Twitter, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-cyber-dark border-t border-cyber-blue/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2"
          >
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="w-8 h-8 text-cyber-blue" />
              <span className="text-xl font-bold text-white font-cyber">
                Underrated Security
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Advanced threat detection for the modern digital landscape. 
              We uncover the security risks that traditional tools miss.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com/underratedsec" className="text-gray-400 hover:text-cyber-blue transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/company/underrated-security" className="text-gray-400 hover:text-cyber-blue transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://github.com/underrated-security" className="text-gray-400 hover:text-cyber-blue transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="mailto:contact@underratedsecurity.com" className="text-gray-400 hover:text-cyber-blue transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Product */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <a href="/free-alerts" className="text-gray-400 hover:text-cyber-blue transition-colors">
                  Free Alerts
                </a>
              </li>
              <li>
                <a href="/premium-dashboard" className="text-gray-400 hover:text-cyber-blue transition-colors">
                  Premium Dashboard
                </a>
              </li>
              <li>
                <a href="/api-access" className="text-gray-400 hover:text-cyber-blue transition-colors">
                  API Access
                </a>
              </li>
              <li>
                <a href="/integrations" className="text-gray-400 hover:text-cyber-blue transition-colors">
                  Integrations
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-gray-400 hover:text-cyber-blue transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/blog" className="text-gray-400 hover:text-cyber-blue transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="/careers" className="text-gray-400 hover:text-cyber-blue transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-cyber-blue transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-cyber-blue/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Underrated Security. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="/privacy" className="text-gray-400 hover:text-cyber-blue transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="text-gray-400 hover:text-cyber-blue transition-colors">
              Terms of Service
            </a>
            <a href="/security" className="text-gray-400 hover:text-cyber-blue transition-colors">
              Security
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 