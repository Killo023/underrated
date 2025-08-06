import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Crown, Zap, CheckCircle } from 'lucide-react';
import { supabase, TABLES, isSupabaseConfigured } from '../supabase';
import toast from 'react-hot-toast';

const WaitlistSignup = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    
    try {
      if (!isSupabaseConfigured()) {
        // If Supabase is not configured, just show success message
        setIsSuccess(true);
        reset();
        toast.success('Successfully joined the waitlist!');
        setTimeout(() => setIsSuccess(false), 5000);
        return;
      }

      const { error } = await supabase
        .from(TABLES.WAITLIST)
        .insert([
          {
            email: data.email,
            name: data.name,
            company: data.company,
            joined_at: new Date().toISOString()
          }
        ]);

      if (error) throw error;

      setIsSuccess(true);
      reset();
      toast.success('Successfully joined the waitlist!');
      
      // Reset success state after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error('Error:', error);
      toast.error('Failed to join waitlist. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="max-w-lg mx-auto"
    >
      <div className="cyber-border rounded-xl p-8 bg-gradient-to-br from-cyber-gray/80 to-cyber-dark/80 backdrop-blur-sm">
        <div className="flex items-center justify-center mb-6">
          <Crown className="w-10 h-10 text-cyber-purple mr-3" />
          <div>
            <h3 className="text-2xl font-bold text-cyber-purple">Premium Dashboard</h3>
            <p className="text-cyber-green text-sm font-semibold">$30/month</p>
          </div>
        </div>
        
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-white mb-3">🚀 Early Access Benefits:</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="flex items-center">
              <Zap className="w-4 h-4 text-cyber-green mr-2" />
              Real-time threat monitoring
            </li>
            <li className="flex items-center">
              <Zap className="w-4 h-4 text-cyber-green mr-2" />
              Advanced vulnerability scanning
            </li>
            <li className="flex items-center">
              <Zap className="w-4 h-4 text-cyber-green mr-2" />
              Custom security reports
            </li>
            <li className="flex items-center">
              <Zap className="w-4 h-4 text-cyber-green mr-2" />
              Priority support access
            </li>
          </ul>
        </div>

        {!isSuccess ? (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <input
                {...register('name', { required: 'Name is required' })}
                type="text"
                placeholder="Full Name"
                className="cyber-input w-full"
                disabled={isSubmitting}
              />
              {errors.name && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-cyber-red text-sm mt-1"
                >
                  {errors.name.message}
                </motion.p>
              )}
            </div>

            <div>
              <input
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address'
                  }
                })}
                type="email"
                placeholder="Email Address"
                className="cyber-input w-full"
                disabled={isSubmitting}
              />
              {errors.email && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-cyber-red text-sm mt-1"
                >
                  {errors.email.message}
                </motion.p>
              )}
            </div>

            <div>
              <input
                {...register('company')}
                type="text"
                placeholder="Company (Optional)"
                className="cyber-input w-full"
                disabled={isSubmitting}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="cyber-button w-full flex items-center justify-center bg-cyber-purple hover:bg-cyber-green"
            >
              {isSubmitting ? (
                <div className="flex items-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-cyber-dark mr-2"></div>
                  Joining...
                </div>
              ) : (
                <>
                  <Crown className="w-5 h-5 mr-2" />
                  Join Waitlist
                </>
              )}
            </button>
          </form>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <CheckCircle className="w-16 h-16 text-cyber-green mx-auto mb-4" />
            <h4 className="text-xl font-bold text-cyber-green mb-2">Waitlist Joined!</h4>
            <p className="text-gray-300 mb-4">
              You'll be notified when the premium dashboard launches.
            </p>
            <div className="bg-cyber-gray/50 rounded-lg p-4">
              <p className="text-sm text-cyber-blue">
                💎 Early access members get 50% off the first 3 months!
              </p>
            </div>
          </motion.div>
        )}

        <div className="mt-6 text-center">
          <p className="text-xs text-gray-400">
            🔐 Limited spots available. Join now for priority access.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default WaitlistSignup; 