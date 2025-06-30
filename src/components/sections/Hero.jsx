import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  
  // Track mouse position for parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  // Track scroll position for parallax effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
  
  // Floating animation for background elements
  const floatingAnimation = {
    y: ['-5%', '5%'],
    transition: {
      y: {
        duration: 6,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut'
      }
    }
  };

  return (
    <div className="relative bg-gradient-to-b pb-20 from-gray-900 to-blue-900 text-white overflow-hidden">
      {/* Background elements with parallax effect */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600 rounded-full opacity-20 blur-3xl"
          animate={floatingAnimation}
          style={{ 
            x: mousePosition.x / 50, 
            y: -scrollY / 10 - 50
          }}
        />
        <motion.div 
          className="absolute top-1/2 -left-48 w-96 h-96 bg-purple-600 rounded-full opacity-20 blur-3xl"
          animate={{
            y: ['5%', '-5%'],
            transition: {
              y: {
                duration: 7,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut'
              }
            }
          }}
          style={{ 
            x: -mousePosition.x / 50, 
            y: -scrollY / 15 + 100
          }}
        />
        <motion.div 
          className="absolute -bottom-24 right-1/3 w-96 h-96 bg-indigo-600 rounded-full opacity-20 blur-3xl"
          animate={{
            y: ['-8%', '8%'],
            transition: {
              y: {
                duration: 8,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut'
              }
            }
          }}
          style={{ 
            x: mousePosition.x / 60, 
            y: -scrollY / 20 + 50
          }}
        />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtMi4xMjIgMC00LjE1Ni44NDQtNS42NTcgMi4zNDNTMjggMjMuODc4IDI4IDI2YzAgMi4xMjIuODQ0IDQuMTU2IDIuMzQzIDUuNjU3UzMzLjg3OCAzNCAzNiAzNGMyLjEyMiAwIDQuMTU2LS44NDQgNS42NTctMi4zNDNTNDQgMjguMTIyIDQ0IDI2YzAtMi4xMjItLjg0NC00LjE1Ni0yLjM0My01LjY1N1MzOC4xMjIgMTggMzYgMTh6IiBzdHJva2U9IiNmZmYiIHN0cm9rZS1vcGFjaXR5PSIuMDUiLz48Y2lyY2xlIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjA1IiBjeD0iMzYiIGN5PSIyNiIgcj0iMSIvPjxwYXRoIGQ9Ik0xMiAxMHYxMm0tMTItNmgxMm0yMCAxMnYxMm0tMTItNmgxMm0tMTItNDh2MTJtLTEyLTZoMTJtLTEyIDMwdjEybS0xMi02aDEyIiBzdHJva2U9IiNmZmYiIHN0cm9rZS1vcGFjaXR5PSIuMDUiIHN0cm9rZS13aWR0aD0iMiIvPjwvZz48L3N2Zz4=')] opacity-10"></div>
      </div>
      
      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            variants={itemVariants}
          >
            <motion.span 
              className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent inline-block"
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ 
                duration: 15, 
                ease: 'linear', 
                repeat: Infinity 
              }}
              style={{ backgroundSize: '200% auto' }}
            >
              Transform Your E-Commerce Business
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-8"
            variants={itemVariants}
          >
            Expert Amazon to eBay dropshipping, account audits, and FBA wholesale solutions for UK, Germany, and Italy marketplaces.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4"
            variants={itemVariants}
          >
            <Link to="/services">
              <motion.button 
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-medium shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 10px 25px rgba(59, 130, 246, 0.5)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Services
              </motion.button>
            </Link>
            
            <Link to="/contact">
              <motion.button 
                className="px-8 py-3 bg-transparent border-2 border-white/30 rounded-lg font-medium hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1"
                whileHover={{ 
                  scale: 1.05,
                  borderColor: 'rgba(255, 255, 255, 0.8)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.button>
            </Link>
          </motion.div>
          
          <motion.div 
            className="mt-16 flex flex-wrap justify-center gap-8"
            variants={itemVariants}
          >
            {[
              { value: "3", label: "Countries Served" },
              { value: "150+", label: "Clients" },
              { value: "$5M+", label: "Revenue Generated" },
              { value: "98%", label: "Client Satisfaction" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="flex flex-col items-center"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  y: 0, 
                  transition: { 
                    delay: 0.6 + (index * 0.1),
                    duration: 0.5
                  } 
                }}
              >
                <motion.span 
                  className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
                  initial={{ scale: 0 }}
                  animate={{ 
                    scale: [0, 1.2, 1],
                    transition: { 
                      delay: 0.8 + (index * 0.2),
                      duration: 0.8,
                      times: [0, 0.7, 1]
                    }
                  }}
                >
                  {stat.value}
                </motion.span>
                <span className="text-gray-400">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
      
      {/* Wave shape divider */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ 
          delay: 1,
          duration: 1,
          ease: "easeOut"
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
          <path fill="#f9fafb" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,208C672,213,768,203,864,181.3C960,160,1056,128,1152,128C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </motion.div>
    </div>
  );
};

export default Hero;