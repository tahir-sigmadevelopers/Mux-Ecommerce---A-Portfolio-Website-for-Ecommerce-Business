import React from 'react';
import { motion } from 'framer-motion';
import { FaShoppingCart, FaChartLine, FaBoxes, FaSearch, FaAd, FaIcons } from 'react-icons/fa';
import { useData } from '../../context/DataContext';

const Services = () => {
  const { services } = useData();

  // Function to render the appropriate icon based on the icon name
  const renderIcon = (iconName) => {
    switch (iconName) {
      case 'FaShoppingCart':
        return <FaShoppingCart className="text-4xl text-blue-500" />;
      case 'FaChartLine':
        return <FaChartLine className="text-4xl text-purple-500" />;
      case 'FaBoxes':
        return <FaBoxes className="text-4xl text-indigo-500" />;
      case 'FaSearch':
        return <FaSearch className="text-4xl text-rose-500" />;
      case 'FaAd':
        return <FaAd className="text-4xl text-amber-500" />;
      default:
        return <FaIcons className="text-4xl text-gray-500" />;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    },
    hover: {
      y: -10,
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      transition: { duration: 0.3 }
    }
  };

  // Animation for icon container
  const iconContainerVariants = {
    hidden: { scale: 0, rotate: -45 },
    visible: { 
      scale: 1, 
      rotate: 0,
      transition: { 
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.3
      }
    },
    hover: {
      scale: 1.1,
      rotate: [0, -5, 5, -5, 0],
      transition: { duration: 0.5 }
    }
  };

  // Animation for the line under each service
  const lineVariants = {
    hidden: { width: 0 },
    visible: { 
      width: "100%",
      transition: { duration: 0.8, delay: 0.4 }
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Our <motion.span 
              className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent inline-block"
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
              Services
            </motion.span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 text-lg"
          >
            Comprehensive e-commerce solutions for UK, Germany, and Italy marketplaces
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="p-8">
                <motion.div 
                  className="mb-6 inline-block p-4 rounded-full bg-gray-100"
                  variants={iconContainerVariants}
                  whileHover="hover"
                >
                  {renderIcon(service.icon)}
                </motion.div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <motion.div
                  className={`h-1 rounded bg-gradient-to-r ${service.color}`}
                  variants={lineVariants}
                />
              </div>
              <motion.div 
                className="bg-gradient-to-r from-gray-50 to-gray-100 px-8 py-3"
                whileHover={{ 
                  backgroundColor: "#f9fafb",
                  transition: { duration: 0.2 }
                }}
              >
                <motion.a 
                  href="#" 
                  className="flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  Learn more
                  <motion.svg 
                    className="ml-2 w-4 h-4" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                    initial={{ x: 0 }}
                    whileHover={{ x: 3 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </motion.svg>
                </motion.a>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services; 