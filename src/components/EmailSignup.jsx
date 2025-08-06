import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Mail, Shield, CheckCircle } from 'lucide-react';
import { supabase, TABLES, isSupabaseConfigured } from '../supabase';
import toast from 'react-hot-toast';

const EmailSignup = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const sendNotificationEmail = async (subscriberEmail) => {
    try {
      // Send notification to admin via API
      const response = await fetch('/api/notify-subscription', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          subscriberEmail,
          type: 'free_alerts',
          timestamp: new Date().toISOString()
        }),
      });

      if (!response.ok) {
        console.warn('Failed to send notification email');
      }
    } catch (error) {
      console.warn('Error sending notification email:', error);
    }
  };

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    
    try {
      if (!isSupabaseConfigured()) {
        // If Supabase is not configured, just show success message and send notification
        setIsSuccess(true);
        reset();
        toast.success('Successfully subscribed to security alerts!');
        
        // Send notification email
        await sendNotificationEmail(data.email);
        
        setTimeout(() => setIsSuccess(false), 3000);
        return;
      }

      const { error } = await supabase
        .from(TABLES.EMAIL_SIGNUPS)
        .insert([
          {
            email: data.email,
            subscribed_at: new Date().toISOString()
          }
        ]);

      if (error) throw error;

      // Send notification email
      await sendNotificationEmail(data.email);

      setIsSuccess(true);
      reset();
      toast.success('Successfully subscribed to security alerts!');
      
      // Reset success state after 3 seconds
      setTimeout(() => setIsSuccess(false), 3000);
    } catch (error) {
      console.error('Error:', error);
      toast.error('Failed to subscribe. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-md mx-auto"
    >
      <div className="cyber-border rounded-xl p-6 bg-cyber-gray/50 backdrop-blur-sm">
        <div className="flex items-center justify-center mb-4">
          <Shield className="w-8 h-8 text-cyber-blue mr-3" />
          <h3 className="text-xl font-bold text-cyber-blue">Free Security Alerts</h3>
        </div>
        
        <p className="text-gray-300 text-center mb-6">
          Get weekly underrated security threats delivered to your inbox
        </p>

        {!isSuccess ? (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address'
                  }
                })}
                type="email"
                placeholder="Enter your email"
                className="cyber-input w-full pl-10"
                disabled={isSubmitting}
              />
            </div>
            
            {errors.email && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-cyber-red text-sm"
              >
                {errors.email.message}
              </motion.p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="cyber-button w-full flex items-center justify-center"
            >
              {isSubmitting ? (
                <div className="flex items-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-cyber-dark mr-2"></div>
                  Subscribing...
                </div>
              ) : (
                <>
                  <Shield className="w-5 h-5 mr-2" />
                  Get Free Alerts
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
            <h4 className="text-xl font-bold text-cyber-green mb-2">Subscribed!</h4>
            <p className="text-gray-300">
              You'll receive your first security alert within 24 hours.
            </p>
          </motion.div>
        )}

        <div className="mt-6 text-center">
          <p className="text-xs text-gray-400">
            🔒 We respect your privacy. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default EmailSignup; 