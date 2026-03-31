import React from 'react';
import { motion } from 'motion/react';
import { Leaf } from 'lucide-react';

export const LoadingSpinner: React.FC = () => (
  <div className="flex items-center justify-center py-12">
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full"
    />
  </div>
);

export const LoadingPage: React.FC = () => (
  <div className="min-h-screen flex items-center justify-center bg-paper">
    <div className="text-center space-y-6">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        className="mx-auto w-16 h-16"
      >
        <Leaf className="w-full h-full text-primary" />
      </motion.div>
      <h2 className="text-2xl font-serif font-bold text-slate-900">Loading...</h2>
      <p className="text-slate-600">Preparing your fresh harvest experience</p>
    </div>
  </div>
);

export const ErrorMessage: React.FC<{ message: string; onRetry?: () => void }> = ({ message, onRetry }) => (
  <div className="text-center py-12 space-y-4">
    <div className="text-red-500 text-6xl">⚠️</div>
    <h3 className="text-xl font-serif font-bold text-slate-900">Something went wrong</h3>
    <p className="text-slate-600">{message}</p>
    {onRetry && (
      <button onClick={onRetry} className="btn-primary">
        Try Again
      </button>
    )}
  </div>
);