import React from 'react';
import { motion } from 'framer-motion';
import { FaGlobe, FaUserShield, FaRocket, FaHeadset, FaChartBar, FaTools } from 'react-icons/fa';

const Features = () => {
  const features = [
    {
      id: 1,
      icon: <FaGlobe className="text-blue-600" size={24} />,
      title: 'Multi-Country Support',
      description: 'Specialized expertise in UK, Germany, and Italy marketplaces with localized strategies for each region.'
    },
    {
      id: 2,
      icon: <FaUserShield className="text-blue-600" size={24} />,
      title: 'Account Protection',
      description: 'Advanced techniques to maintain account health and prevent suspensions across all marketplace platforms.'
    },
    {
      id: 3,
      icon: <FaRocket className="text-blue-600" size={24} />,
      title: 'Scaling Strategies',
      description: 'Proven methods to scale your e-commerce business from startup to enterprise-level operations.'
    },
    {
      id: 4,
      icon: <FaHeadset className="text-blue-600" size={24} />,
      title: '24/7 Support',
      description: 'Round-the-clock assistance for urgent account issues and business-critical situations.'
    },
    {
      id: 5,
      icon: <FaChartBar className="text-blue-600" size={24} />,
      title: 'Data-Driven Approach',
      description: 'Comprehensive analytics and reporting to make informed decisions and optimize performance.'
    },
    {
      id: 6,
      icon: <FaTools className="text-blue-600" size={24} />,
      title: 'Custom Solutions',
      description: 'Tailored strategies and solutions designed specifically for your unique business needs.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  // Animation for icon background
  const iconBgVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    },
    hover: {
      scale: 1.1,
      backgroundColor: "#dbeafe", // Light blue background on hover
      transition: { duration: 0.3 }
    }
  };

  // Animation for icon
  const iconVariants = {
    hidden: { rotate: -45, opacity: 0 },
    visible: {
      rotate: 0,
      opacity: 1,
      transition: { delay: 0.2, duration: 0.4 }
    },
    hover: {
      rotate: [0, -10, 10, -10, 0],
      color: "#2563eb", // Darker blue on hover
      transition: { duration: 0.5 }
    }
  };

  // Text reveal animation
  const textRevealVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, delay: 0.2 }
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Why Choose <motion.span
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
              Kasefnow
            </motion.span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 text-lg"
          >
            We deliver exceptional results through our specialized expertise and client-focused approach
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              className="flex items-start"
              variants={itemVariants}
              whileHover="hover"
              custom={index}
            >
              <div className="flex-shrink-0 mr-4">
                <motion.div
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100"
                  variants={iconBgVariants}
                >
                  <motion.div variants={iconVariants}>
                    {feature.icon}
                  </motion.div>
                </motion.div>
              </div>
              <div>
                <motion.h3
                  className="text-xl font-semibold mb-2"
                  variants={textRevealVariants}
                >
                  {feature.title}
                </motion.h3>
                <motion.p
                  className="text-gray-600"
                  variants={textRevealVariants}
                >
                  {feature.description}
                </motion.p>
                <motion.div
                  className="h-1 w-0 bg-blue-600 mt-3 rounded"
                  initial={{ width: 0 }}
                  whileHover={{ width: "50%" }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.a
            href="#"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More About Our Approach
            <motion.svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              initial={{ x: 0 }}
              animate={{ x: [0, 5, 0] }}
              transition={{
                duration: 1.5,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 1
              }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </motion.svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Features; 