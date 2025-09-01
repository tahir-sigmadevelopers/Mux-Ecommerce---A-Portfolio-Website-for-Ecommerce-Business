import React from 'react';
import { motion } from 'framer-motion';
import { FaCheck, FaRocket, FaHandshake, FaChartLine, FaGlobe } from 'react-icons/fa';

const BecomePartner = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const benefits = [
    "Access to exclusive resources and tools",
    "Dedicated partnership manager",
    "Co-marketing opportunities",
    "Revenue sharing programs",
    "Priority technical support",
    "Regular business growth consultations",
    "Access to partner community events",
    "Early access to new features and products"
  ];

  const partnerTypes = [
    {
      icon: <FaRocket className="text-4xl text-blue-600 mb-4" />,
      title: "Technology Partners",
      description: "For software and technology companies looking to integrate with our platform and expand their market reach."
    },
    {
      icon: <FaHandshake className="text-4xl text-blue-600 mb-4" />,
      title: "Solution Partners",
      description: "For consultants and agencies who implement our solutions and provide value-added services to their clients."
    },
    {
      icon: <FaChartLine className="text-4xl text-blue-600 mb-4" />,
      title: "Channel Partners",
      description: "For businesses that resell our products and services to their customer base."
    },
    {
      icon: <FaGlobe className="text-4xl text-blue-600 mb-4" />,
      title: "Strategic Partners",
      description: "For enterprises seeking long-term collaboration on joint ventures and market expansion initiatives."
    }
  ];

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
              Become a <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Partner</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-300"
            >
              Join our partner ecosystem and unlock new opportunities for growth and success.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold mb-4">Partner Benefits</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our partnership program offers a wide range of benefits designed to help you grow your business and deliver exceptional value to your customers.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start"
                >
                  <div className="flex-shrink-0 mt-1">
                    <FaCheck className="text-green-500" />
                  </div>
                  <p className="ml-3 text-gray-700">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Partnership Types</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer different types of partnerships to suit your business model and goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnerTypes.map((type, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow"
              >
                {type.icon}
                <h3 className="text-xl font-bold mb-3">{type.title}</h3>
                <p className="text-gray-600">{type.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Apply to Become a Partner</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Fill out the form below to start your partnership journey with us. Our team will review your application and get back to you within 48 hours.
              </p>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                    <input 
                      type="text" 
                      id="firstName" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" 
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                    <input 
                      type="text" 
                      id="lastName" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" 
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" 
                      placeholder="Your email address"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" 
                      placeholder="Your phone number"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                  <input 
                    type="text" 
                    id="company" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" 
                    placeholder="Your company name"
                  />
                </div>
                
                <div>
                  <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">Company Website</label>
                  <input 
                    type="url" 
                    id="website" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" 
                    placeholder="https://example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="partnerType" className="block text-sm font-medium text-gray-700 mb-1">Partnership Type</label>
                  <select 
                    id="partnerType" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  >
                    <option value="">Select a partnership type</option>
                    <option value="technology">Technology Partner</option>
                    <option value="solution">Solution Partner</option>
                    <option value="channel">Channel Partner</option>
                    <option value="strategic">Strategic Partner</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Why do you want to partner with us?</label>
                  <textarea 
                    id="message" 
                    rows="5" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" 
                    placeholder="Tell us about your business and partnership goals..."
                  ></textarea>
                </div>
                
                <div className="flex items-center">
                  <input type="checkbox" id="consent" className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                  <label htmlFor="consent" className="ml-2 block text-sm text-gray-700">
                    I agree to receive communications about the partnership program
                  </label>
                </div>
                
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Submit Application
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">What Our Partners Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from businesses that have joined our partner ecosystem and experienced growth and success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold mr-4">
                  JD
                </div>
                <div>
                  <h4 className="font-bold">John Doe</h4>
                  <p className="text-gray-600 text-sm">CEO, Tech Solutions Inc.</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Partnering with Kesefnow has been a game-changer for our business. We've seen a 40% increase in revenue and expanded our customer base significantly."
              </p>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold mr-4">
                  JS
                </div>
                <div>
                  <h4 className="font-bold">Jane Smith</h4>
                  <p className="text-gray-600 text-sm">Director, Digital Agency</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "The support and resources provided through the partnership program have helped us deliver better solutions to our clients and grow our agency."
              </p>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold mr-4">
                  RJ
                </div>
                <div>
                  <h4 className="font-bold">Robert Johnson</h4>
                  <p className="text-gray-600 text-sm">Founder, Growth Partners</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "The collaborative approach and innovative solutions have made this partnership incredibly valuable. We've been able to offer unique services to our clients."
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BecomePartner;
