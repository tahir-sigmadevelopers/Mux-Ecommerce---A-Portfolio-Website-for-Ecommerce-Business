import React, { useState } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const CTA = () => {
  const [hovered, setHovered] = useState(false);
  
  // Background gradient animation
  const gradientControls = useAnimation();
  
  const startGradientAnimation = () => {
    gradientControls.start({
      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
      transition: {
        duration: 8,
        ease: 'linear',
        repeat: Infinity
      }
    });
  };
  
  React.useEffect(() => {
    startGradientAnimation();
  }, []);

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Animated background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"
        animate={gradientControls}
        style={{ backgroundSize: '200% 200%' }}
      />
      
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute -top-24 -right-24 w-96 h-96 bg-white rounded-full opacity-10 blur-3xl"
          animate={{ 
            y: ['-5%', '5%'],
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut'
          }}
        />
        <motion.div 
          className="absolute top-1/2 -left-48 w-96 h-96 bg-white rounded-full opacity-10 blur-3xl"
          animate={{ 
            y: ['5%', '-5%'],
            scale: [1, 1.2, 1],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut'
          }}
        />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtMi4xMjIgMC00LjE1Ni44NDQtNS42NTcgMi4zNDNTMjggMjMuODc4IDI4IDI2YzAgMi4xMjIuODQ0IDQuMTU2IDIuMzQzIDUuNjU3UzMzLjg3OCAzNCAzNiAzNGMyLjEyMiAwIDQuMTU2LS44NDQgNS42NTctMi4zNDNTNDQgMjguMTIyIDQ0IDI2YzAtMi4xMjItLjg0NC00LjE1Ni0yLjM0My01LjY1N1MzOC4xMjIgMTggMzYgMTh6IiBzdHJva2U9IiNmZmYiIHN0cm9rZS1vcGFjaXR5PSIuMDUiLz48Y2lyY2xlIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjA1IiBjeD0iMzYiIGN5PSIyNiIgcj0iMSIvPjxwYXRoIGQ9Ik0xMiAxMHYxMm0tMTItNmgxMm0yMCAxMnYxMm0tMTItNmgxMm0tMTItNDh2MTJtLTEyLTZoMTJtLTEyIDMwdjEybS0xMi02aDEyIiBzdHJva2U9IiNmZmYiIHN0cm9rZS1vcGFjaXR5PSIuMDUiIHN0cm9rZS13aWR0aD0iMiIvPjwvZz48L3N2Zz4=')] opacity-10"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-white mb-6"
          >
            <motion.span
              animate={{ 
                textShadow: hovered 
                  ? ['0 0 8px rgba(255,255,255,0.5)', '0 0 16px rgba(255,255,255,0.3)', '0 0 8px rgba(255,255,255,0.5)'] 
                  : '0 0 0px rgba(255,255,255,0)'
              }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: 'reverse' }}
              onHoverStart={() => setHovered(true)}
              onHoverEnd={() => setHovered(false)}
            >
              Ready to Transform Your E-Commerce Business?
            </motion.span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/80 mb-10 max-w-3xl mx-auto"
          >
            Join hundreds of successful e-commerce entrepreneurs across UK, Germany, and Italy who have partnered with us to scale their businesses.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link to="/contact">
              <motion.button 
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 0 25px rgba(255, 255, 255, 0.5)'
                }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-blue-600 font-medium rounded-lg shadow-lg hover:shadow-white/30 transition-all duration-300 flex items-center justify-center group"
              >
                Schedule a Free Consultation
                <motion.div
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity,
                    repeatType: 'loop',
                    ease: 'easeInOut'
                  }}
                >
                  <FaArrowRight />
                </motion.div>
              </motion.button>
            </Link>
            
            <Link to="/services">
              <motion.button 
                whileHover={{ 
                  scale: 1.05,
                  borderColor: 'rgba(255, 255, 255, 1)',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)'
                }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent border-2 border-white/50 text-white font-medium rounded-lg transition-all duration-300 flex items-center justify-center"
              >
                Explore Our Services
              </motion.button>
            </Link>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 text-white/70 text-sm"
          >
            No long-term contracts. Cancel anytime.
          </motion.p>
          
          {/* Floating particles for visual effect */}
          <AnimatePresence>
            {[...Array(6)].map((_, index) => (
              <motion.div
                key={index}
                className="absolute rounded-full bg-white/20"
                initial={{ 
                  opacity: 0.3,
                  scale: 0,
                  x: Math.random() * 800 - 400,
                  y: Math.random() * 400 - 200
                }}
                animate={{ 
                  opacity: [0.3, 0.8, 0.3],
                  scale: [0, Math.random() * 2 + 0.5, 0],
                  x: Math.random() * 800 - 400,
                  y: Math.random() * 400 - 200
                }}
                transition={{ 
                  duration: Math.random() * 8 + 6,
                  repeat: Infinity,
                  delay: Math.random() * 5
                }}
                style={{
                  width: Math.random() * 40 + 10,
                  height: Math.random() * 40 + 10,
                  filter: 'blur(8px)'
                }}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default CTA; 