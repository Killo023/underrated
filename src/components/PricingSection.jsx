import React from 'react';
import { motion } from 'framer-motion';
import { Crown, Check, Star, Zap } from 'lucide-react';
import WaitlistSignup from './WaitlistSignup';

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-cyber-gray to-cyber-dark">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Choose Your Security Level
          </h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Start with free alerts or unlock our advanced dashboard for comprehensive threat protection
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Free Tier */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="cyber-border rounded-2xl p-8 bg-cyber-gray/50 backdrop-blur-sm"
          >
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-cyber-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-cyber-blue" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Free Alerts</h3>
              <p className="text-gray-400">Perfect for getting started</p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-cyber-green" />
                <span className="text-gray-300">Weekly security threat alerts</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-cyber-green" />
                <span className="text-gray-300">Basic threat analysis</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-cyber-green" />
                <span className="text-gray-300">Email notifications</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-cyber-green" />
                <span className="text-gray-300">Community access</span>
              </div>
            </div>

            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">$0</div>
              <div className="text-gray-400 mb-6">Forever free</div>
              <a href="#hero" className="cyber-button w-full block text-center">
                Get Free Alerts
              </a>
            </div>
          </motion.div>

          {/* Premium Tier */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="cyber-border rounded-2xl p-8 bg-gradient-to-br from-cyber-purple/20 to-cyber-blue/20 backdrop-blur-sm relative overflow-hidden"
          >
            {/* Popular Badge */}
            <div className="absolute top-4 right-4">
              <div className="bg-cyber-green text-cyber-dark px-3 py-1 rounded-full text-sm font-bold flex items-center">
                <Star className="w-4 h-4 mr-1" />
                Popular
              </div>
            </div>

            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-cyber-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Crown className="w-8 h-8 text-cyber-purple" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Premium Dashboard</h3>
              <p className="text-gray-400">Advanced threat protection</p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-cyber-green" />
                <span className="text-gray-300">Everything in Free +</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-cyber-green" />
                <span className="text-gray-300">Real-time threat monitoring</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-cyber-green" />
                <span className="text-gray-300">Advanced vulnerability scanning</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-cyber-green" />
                <span className="text-gray-300">Custom security reports</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-cyber-green" />
                <span className="text-gray-300">Priority support access</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-cyber-green" />
                <span className="text-gray-300">API access & integrations</span>
              </div>
            </div>

            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">$30</div>
              <div className="text-gray-400 mb-6">per month</div>
              <div className="bg-cyber-green/20 border border-cyber-green/30 rounded-lg p-4 mb-6">
                <p className="text-cyber-green text-sm font-semibold">
                  🚀 Early access members get 50% off first 3 months!
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Waitlist Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16"
        >
          <WaitlistSignup />
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="cyber-border rounded-lg p-6 bg-cyber-gray/30">
              <div className="text-cyber-green text-2xl font-bold mb-2">30-Day</div>
              <div className="text-gray-300">Money-back guarantee</div>
            </div>
            <div className="cyber-border rounded-lg p-6 bg-cyber-gray/30">
              <div className="text-cyber-blue text-2xl font-bold mb-2">99.9%</div>
              <div className="text-gray-300">Uptime guarantee</div>
            </div>
            <div className="cyber-border rounded-lg p-6 bg-cyber-gray/30">
              <div className="text-cyber-purple text-2xl font-bold mb-2">24/7</div>
              <div className="text-gray-300">Security monitoring</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection; 