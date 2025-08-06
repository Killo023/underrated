import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Eye, Lock, Shield } from 'lucide-react';

const threats = [
  {
    icon: Eye,
    title: "Shadow IT",
    description: "Unauthorized cloud services and apps bypassing security controls",
    color: "text-cyber-red",
    bgColor: "bg-cyber-red/10",
    borderColor: "border-cyber-red"
  },
  {
    icon: Lock,
    title: "Supply Chain Attacks",
    description: "Malicious code injected through trusted third-party vendors",
    color: "text-cyber-purple",
    bgColor: "bg-cyber-purple/10",
    borderColor: "border-cyber-purple"
  },
  {
    icon: Shield,
    title: "Insider Threats",
    description: "Disgruntled employees with access to sensitive systems",
    color: "text-cyber-blue",
    bgColor: "bg-cyber-blue/10",
    borderColor: "border-cyber-blue"
  },
  {
    icon: AlertTriangle,
    title: "Zero-Day Exploits",
    description: "Unknown vulnerabilities before patches are available",
    color: "text-cyber-green",
    bgColor: "bg-cyber-green/10",
    borderColor: "border-cyber-green"
  }
];

const ThreatCard = ({ threat, index }) => {
  const IconComponent = threat.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, y: -5 }}
      className={`cyber-border rounded-lg p-6 ${threat.bgColor} hover:shadow-lg transition-all duration-300`}
    >
      <div className="flex items-start space-x-4">
        <div className={`p-3 rounded-lg ${threat.bgColor} ${threat.borderColor} border`}>
          <IconComponent className={`w-6 h-6 ${threat.color}`} />
        </div>
        <div className="flex-1">
          <h3 className={`text-lg font-bold ${threat.color} mb-2`}>
            {threat.title}
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            {threat.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const ThreatSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Hidden Threats We Detect
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            While traditional security focuses on obvious attacks, we uncover the threats that fly under the radar
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {threats.map((threat, index) => (
            <ThreatCard key={index} threat={threat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThreatSection; 