import React from 'react';
import { motion } from 'framer-motion';
import LoadingSpinner from './LoadingSpinner';

const LoadingOverlay = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-[#F0EFF4] flex items-center justify-center"
    >
      <LoadingSpinner size="lg" message="Loading..." />
    </motion.div>
  );
};

export default LoadingOverlay;