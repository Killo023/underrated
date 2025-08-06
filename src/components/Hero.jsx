import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, ArrowRight, Shield, Zap } from 'lucide-react';
import EmailSignup from './EmailSignup';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-cyber-blue/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-cyber-green/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-cyber-purple/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center space-x-2 bg-cyber-red/20 border border-cyber-red/30 rounded-full px-4 py-2 mb-6"
              >
                <AlertTriangle className="w-4 h-4 text-cyber-red" />
                <span className="text-cyber-red text-sm font-semibold">
                  New Threat Detection
                </span>
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
              >
                Are You Missing These{' '}
                <span className="cyber-gradient bg-clip-text text-transparent">
                  Hidden Cyber Threats?
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
              >
                Traditional security tools miss 73% of advanced threats. 
                Get weekly alerts on the underrated security risks that could 
                <span className="text-cyber-red font-semibold"> destroy your business</span>.
              </motion.p>

              {/* Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6 mb-8"
              >
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-cyber-green" />
                  <span className="text-gray-300">Free Weekly Alerts</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Zap className="w-5 h-5 text-cyber-blue" />
                  <span className="text-gray-300">Advanced Detection</span>
                </div>
                <div className="flex items-center space-x-2">
                  <AlertTriangle className="w-5 h-5 text-cyber-red" />
                  <span className="text-gray-300">Zero False Positives</span>
                </div>
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4"
              >
                <a href="#hero" className="cyber-button text-lg px-8 py-4 flex items-center">
                  Get Free Alerts
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a href="#pricing" className="text-cyber-blue hover:text-cyber-green transition-colors font-semibold">
                  View Premium Dashboard →
                </a>
              </motion.div>
            </motion.div>

            {/* Right Column - Signup Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex justify-center lg:justify-end"
            >
              <EmailSignup />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="text-gray-400 text-sm">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-cyber-blue rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-cyber-blue rounded-full mt-2"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero; 