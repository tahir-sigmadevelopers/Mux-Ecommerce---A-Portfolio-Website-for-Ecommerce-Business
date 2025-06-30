import React from 'react';
import { motion } from 'framer-motion';
import { FaShoppingCart, FaChartLine, FaBoxes, FaSearch, FaAd, FaGlobe } from 'react-icons/fa';

const ServicesPage = () => {
  const services = [
    {
      id: 1,
      icon: <FaShoppingCart size={40} className="text-blue-600" />,
      title: 'Amazon to eBay Dropshipping',
      description: 'Our comprehensive dropshipping service helps you leverage the price differences between Amazon and eBay to generate consistent profits without holding inventory.',
      features: [
        'Automated product research and selection',
        'Optimized listing creation with SEO-friendly titles and descriptions',
        'Dynamic pricing strategies to maximize profits',
        'Order fulfillment automation and tracking',
        'Inventory and price change monitoring',
        'Account health management and protection'
      ],
      color: 'from-blue-500 to-cyan-400'
    },
    {
      id: 2,
      icon: <FaChartLine size={40} className="text-purple-600" />,
      title: 'Account Audit',
      description: 'Our thorough account audit service identifies issues, opportunities, and actionable insights to improve your marketplace performance and profitability.',
      features: [
        'Comprehensive performance analysis',
        'Policy compliance review',
        'Listing quality assessment',
        'Pricing strategy evaluation',
        'Competitor analysis',
        'Detailed recommendations and implementation plan'
      ],
      color: 'from-purple-500 to-pink-400'
    },
    {
      id: 3,
      icon: <FaBoxes size={40} className="text-indigo-600" />,
      title: 'FBA Wholesale (A-Z)',
      description: 'Our end-to-end FBA wholesale solution handles everything from product sourcing to logistics, helping you build a profitable Amazon business with minimal effort.',
      features: [
        'Product research and selection based on profitability metrics',
        'Supplier identification and relationship management',
        'Negotiation support for optimal pricing',
        'Inventory management and forecasting',
        'Shipping and logistics coordination',
        'Performance tracking and optimization'
      ],
      color: 'from-indigo-500 to-blue-400'
    },
    {
      id: 4,
      icon: <FaSearch size={40} className="text-rose-600" />,
      title: 'Listing Optimization',
      description: 'Our listing optimization service enhances your product listings to improve visibility, click-through rates, and conversion rates across all marketplaces.',
      features: [
        'Keyword research and implementation',
        'Compelling title and bullet point creation',
        'Professional product description writing',
        'Image optimization and enhancement',
        'A+ Content creation (for Amazon)',
        'Regular performance monitoring and updates'
      ],
      color: 'from-rose-500 to-orange-400'
    },
    {
      id: 5,
      icon: <FaAd size={40} className="text-amber-600" />,
      title: 'PPC Management',
      description: 'Our data-driven PPC management service maximizes your advertising ROI through strategic campaign creation, optimization, and continuous monitoring.',
      features: [
        'Campaign structure development',
        'Keyword research and selection',
        'Bid management and optimization',
        'Ad copy creation and testing',
        'Performance tracking and reporting',
        'Continuous optimization for maximum ROI'
      ],
      color: 'from-amber-500 to-yellow-400'
    },
    {
      id: 6,
      icon: <FaGlobe size={40} className="text-emerald-600" />,
      title: 'International Expansion',
      description: 'Our international expansion service helps you enter new markets in the UK, Germany, and Italy with localized strategies tailored to each region.',
      features: [
        'Market research and opportunity analysis',
        'Localization of listings and content',
        'VAT and tax compliance assistance',
        'Local customer service solutions',
        'Currency and payment processing setup',
        'Regional marketing and promotion strategies'
      ],
      color: 'from-emerald-500 to-green-400'
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
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
              Our <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Services</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-300"
            >
              Comprehensive e-commerce solutions to help your business thrive in the UK, Germany, and Italy marketplaces
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div key={service.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
                <motion.div 
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="lg:w-1/2"
                >
                  <div className={`p-8 rounded-2xl bg-gradient-to-br ${service.color} bg-opacity-10 flex justify-center items-center h-64`}>
                    <div className="bg-white rounded-full p-6 shadow-lg">
                      {service.icon}
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="lg:w-1/2"
                >
                  <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                  <div className={`h-1 w-20 rounded bg-gradient-to-r ${service.color} mb-6`}></div>
                  <p className="text-gray-700 text-lg mb-6">{service.description}</p>
                  
                  <h3 className="text-xl font-semibold mb-4">What's Included:</h3>
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <motion.li 
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.1 * i }}
                        className="flex items-start"
                      >
                        <svg className="w-5 h-5 text-green-500 mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                  
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`mt-8 px-6 py-3 bg-gradient-to-r ${service.color} text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300`}
                  >
                    Learn More
                  </motion.button>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 bg-gradient-to-br from-blue-600 to-purple-600 p-12 text-white">
                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-2xl font-bold mb-4"
                >
                  Ready to grow your e-commerce business?
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mb-6"
                >
                  Schedule a free consultation with our e-commerce experts and discover how our services can help you achieve your business goals.
                </motion.p>
                <motion.ul
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="space-y-2 mb-8"
                >
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span>Personalized strategy</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span>No obligation</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span>Expert advice</span>
                  </li>
                </motion.ul>
              </div>
              <div className="md:w-1/2 p-12">
                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-2xl font-bold mb-6"
                >
                  Contact Us
                </motion.h3>
                <motion.form
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="space-y-4"
                >
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service Interested In</label>
                    <select id="service" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                      <option value="">Select a service</option>
                      <option value="dropshipping">Amazon to eBay Dropshipping</option>
                      <option value="audit">Account Audit</option>
                      <option value="wholesale">FBA Wholesale</option>
                      <option value="listing">Listing Optimization</option>
                      <option value="ppc">PPC Management</option>
                      <option value="international">International Expansion</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea id="message" rows="3" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"></textarea>
                  </div>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Schedule Consultation
                  </motion.button>
                </motion.form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;