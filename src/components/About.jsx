import React from 'react';
import { motion } from 'framer-motion';
import { FaGlobe, FaUsers, FaChartLine } from 'react-icons/fa';

const About = () => {
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
              About <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">mux-ECommerce</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-300"
            >
              Your premier e-commerce agency specializing in Amazon to eBay dropshipping, account audits, and FBA wholesale solutions across UK, Germany, and Italy.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <div className="h-1 w-20 bg-blue-600 mx-auto"></div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="prose prose-lg max-w-none text-gray-700"
            >
              <p>
                Founded in 2018, mux-ECommerce began with a simple mission: to help e-commerce entrepreneurs navigate the complex world of online marketplaces and achieve sustainable growth. What started as a small consultancy has grown into a comprehensive agency serving clients across the UK, Germany, and Italy.
              </p>
              <p>
                Our founder, having experienced the challenges of e-commerce firsthand, recognized the need for specialized expertise in dropshipping, account management, and wholesale strategies. This insight led to the development of our core services, which have helped hundreds of businesses scale their operations and increase profitability.
              </p>
              <p>
                Today, mux-ECommerce is recognized as a leader in the e-commerce service industry, known for our data-driven approach, personalized strategies, and exceptional results. Our team of experts combines years of marketplace experience with cutting-edge techniques to deliver solutions that drive real business growth.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-lg shadow-lg text-center"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaGlobe className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-3">Global Expertise</h3>
              <p className="text-gray-600">
                We understand the nuances of different marketplaces and provide localized strategies for each region we serve.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white p-8 rounded-lg shadow-lg text-center"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaUsers className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-3">Client Partnership</h3>
              <p className="text-gray-600">
                We see ourselves as partners in your success, working closely with you to achieve your business goals.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white p-8 rounded-lg shadow-lg text-center"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaChartLine className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-3">Results-Driven</h3>
              <p className="text-gray-600">
                We measure our success by your success, focusing on tangible results and continuous improvement.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our team of e-commerce experts combines years of marketplace experience with innovative strategies to help your business thrive.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: 'Alex Thompson',
                role: 'Founder & CEO',
                image: 'https://randomuser.me/api/portraits/men/32.jpg'
              },
              {
                name: 'Emma Roberts',
                role: 'Head of Operations',
                image: 'https://randomuser.me/api/portraits/women/44.jpg'
              },
              {
                name: 'Michael Chen',
                role: 'Lead Strategist',
                image: 'https://randomuser.me/api/portraits/men/36.jpg'
              },
              {
                name: 'Sophia Garcia',
                role: 'Client Success Manager',
                image: 'https://randomuser.me/api/portraits/women/65.jpg'
              }
            ].map((member, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="text-center"
              >
                <div className="mb-4 relative mx-auto w-48 h-48 overflow-hidden rounded-full">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-blue-600">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;