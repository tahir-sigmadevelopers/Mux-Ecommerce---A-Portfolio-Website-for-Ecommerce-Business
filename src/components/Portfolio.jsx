import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLink, FaSearch, FaShoppingCart, FaChartLine, FaBoxes } from 'react-icons/fa';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');

  // Portfolio projects data
  const projects = [
    {
      id: 1,
      title: 'Amazon UK Dropshipping Store',
      category: 'dropshipping',
      image: 'https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      description: 'Automated Amazon to eBay dropshipping store generating £5,000+ monthly profit with 300+ active listings.',
      tags: ['Amazon', 'eBay', 'Dropshipping', 'UK'],
      icon: <FaShoppingCart className="text-blue-500" />
    },
    {
      id: 2,
      title: 'German Marketplace Audit',
      category: 'audit',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      description: 'Complete Amazon.de account audit that increased performance by 45% and resolved compliance issues.',
      tags: ['Account Audit', 'Germany', 'Compliance'],
      icon: <FaChartLine className="text-purple-500" />
    },
    {
      id: 3,
      title: 'Italian FBA Wholesale Operation',
      category: 'wholesale',
      image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      description: 'End-to-end FBA wholesale solution for Italian marketplace with €120,000 monthly revenue.',
      tags: ['FBA', 'Wholesale', 'Italy'],
      icon: <FaBoxes className="text-indigo-500" />
    },
    {
      id: 4,
      title: 'UK Multi-Channel Integration',
      category: 'dropshipping',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1115&q=80',
      description: 'Integrated multi-channel selling across Amazon, eBay, and Shopify with centralized inventory management.',
      tags: ['Multi-channel', 'Integration', 'UK'],
      icon: <FaLink className="text-green-500" />
    },
    {
      id: 5,
      title: 'German Brand Analytics',
      category: 'audit',
      image: 'https://images.unsplash.com/photo-1590845947670-c009801ffa74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1159&q=80',
      description: 'Comprehensive brand analytics and competitor research for a German electronics seller.',
      tags: ['Analytics', 'Germany', 'Research'],
      icon: <FaSearch className="text-amber-500" />
    },
    {
      id: 6,
      title: 'UK-Italy Cross-Border FBA',
      category: 'wholesale',
      image: 'https://images.unsplash.com/photo-1632507399869-65d193b6371f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      description: 'Cross-border FBA wholesale operation between UK and Italian marketplaces with Pan-European FBA.',
      tags: ['FBA', 'Cross-border', 'UK', 'Italy'],
      icon: <FaBoxes className="text-rose-500" />
    }
  ];

  // Filter projects based on selected category
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Our <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Portfolio</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-300"
            >
              Showcasing our successful e-commerce projects across UK, Germany, and Italy
            </motion.p>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center mb-12 gap-4">
            {['all', 'dropshipping', 'audit', 'wholesale'].map((category) => (
              <motion.button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full transition-all ${
                  filter === category 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg' 
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </motion.button>
            ))}
          </div>

          {/* Projects Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
                variants={projectVariants}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-6">
                      <span className="inline-block bg-blue-600 text-white text-xs font-medium px-2 py-1 rounded-md mb-2">
                        {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                      </span>
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      {project.icon}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, index) => (
                        <span 
                          key={index} 
                          className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <motion.button
                    className="text-blue-600 font-medium flex items-center"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    View Case Study
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '50+', label: 'Projects Completed' },
              { value: '£2.5M+', label: 'Revenue Generated' },
              { value: '3', label: 'Countries Served' },
              { value: '98%', label: 'Client Satisfaction' }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="flex flex-col items-center"
              >
                <motion.span 
                  className="text-4xl md:text-5xl font-bold"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: 0.2 + index * 0.1, 
                    duration: 0.6,
                    type: "spring",
                    stiffness: 100
                  }}
                >
                  {stat.value}
                </motion.span>
                <span className="text-blue-100">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold mb-6"
            >
              Ready to Start Your E-commerce Success Story?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 mb-8"
            >
              Let's discuss how we can help grow your business across UK, Germany, and Italian marketplaces.
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
            >
              Schedule a Consultation
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
