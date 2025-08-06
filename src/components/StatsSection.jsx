import React from 'react';
import { motion } from 'framer-motion';
import { Users, Shield, Zap, Target } from 'lucide-react';

const stats = [
  {
    icon: Users,
    number: "50,000+",
    label: "Security Professionals",
    color: "text-cyber-blue"
  },
  {
    icon: Shield,
    number: "2,500+",
    label: "Threats Detected",
    color: "text-cyber-green"
  },
  {
    icon: Zap,
    number: "99.7%",
    label: "Detection Rate",
    color: "text-cyber-purple"
  },
  {
    icon: Target,
    number: "24/7",
    label: "Real-time Monitoring",
    color: "text-cyber-red"
  }
];

const StatCard = ({ stat, index }) => {
  const IconComponent = stat.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      className="text-center p-6 cyber-border rounded-xl bg-cyber-gray/30 backdrop-blur-sm"
    >
      <div className="flex justify-center mb-4">
        <div className={`p-4 rounded-full bg-cyber-gray/50 ${stat.color}`}>
          <IconComponent className="w-8 h-8" />
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 + index * 0.1 }}
      >
        <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2`}>
          {stat.number}
        </div>
        <div className="text-gray-300 text-sm font-medium">
          {stat.label}
        </div>
      </motion.div>
    </motion.div>
  );
};

const StatsSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-cyber-dark to-cyber-gray">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Trusted by Security Leaders
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Join thousands of security professionals who rely on our advanced threat detection
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <div className="bg-cyber-gray/50 rounded-xl p-6 cyber-border">
            <h3 className="text-xl font-bold text-cyber-green mb-2">
              🚀 Early Access Program
            </h3>
            <p className="text-gray-300">
              Be among the first 1,000 users to get lifetime 20% discount
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection; 