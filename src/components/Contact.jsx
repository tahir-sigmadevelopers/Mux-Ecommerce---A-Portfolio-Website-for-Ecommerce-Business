import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const offices = [
    {
      country: 'United Kingdom',
      address: '123 E-Commerce Street, London, EC1A 1BB',
      phone: '+92 320 0602522',
      email: 'info@Kesefnow.com',
      flag: '🇬🇧'
    },
    {
      country: 'Germany',
      address: '456 Digital Avenue, Berlin, 10115',
      phone: '+49 30 1234 5678',
      email: 'info@Kesefnow.com',
      flag: '🇩🇪'
    },
    {
      country: 'Italy',
      address: '789 Online Plaza, Milan, 20121',
      phone: '+39 02 1234 5678',
      email: 'info@Kesefnow.com',
      flag: '🇮🇹'
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
              Get in <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Touch</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-300"
            >
              Have questions about our services? Ready to start your e-commerce journey? Contact our team today.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Contact Info */}
              <motion.div 
                className="lg:w-1/3"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                <p className="text-gray-600 mb-8">
                  Reach out to us through any of our offices or fill out the form, and our team will get back to you within 24 hours.
                </p>
                
                <div className="space-y-8">
                  {offices.map((office, index) => (
                    <motion.div 
                      key={index}
                      className="p-6 bg-gray-50 rounded-lg"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.1 * index }}
                    >
                      <div className="flex items-center mb-4">
                        <span className="text-2xl mr-2">{office.flag}</span>
                        <h3 className="text-xl font-semibold">{office.country}</h3>
                      </div>
                      <div className="space-y-3 text-gray-600">
                        <div className="flex items-start">
                          <FaMapMarkerAlt className="text-blue-600 mt-1 mr-3" />
                          <span>{office.address}</span>
                        </div>
                        <div className="flex items-center">
                          <FaPhone className="text-blue-600 mr-3" />
                          <a href={`tel:${office.phone.replace(/\s/g, '')}`} className="hover:text-blue-600 transition-colors">
                            {office.phone}
                          </a>
                        </div>
                        <div className="flex items-center">
                          <FaEnvelope className="text-blue-600 mr-3" />
                          <a href={`mailto:${office.email}`} className="hover:text-blue-600 transition-colors">
                            {office.email}
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <motion.a 
                      whileHover={{ scale: 1.2 }} 
                      href="#" 
                      className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-colors"
                    >
                      <FaFacebook size={20} />
                    </motion.a>
                    <motion.a 
                      whileHover={{ scale: 1.2 }} 
                      href="#" 
                      className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-blue-400 hover:bg-blue-400 hover:text-white transition-colors"
                    >
                      <FaTwitter size={20} />
                    </motion.a>
                    <motion.a 
                      whileHover={{ scale: 1.2 }} 
                      href="#" 
                      className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-pink-600 hover:bg-pink-600 hover:text-white transition-colors"
                    >
                      <FaInstagram size={20} />
                    </motion.a>
                    <motion.a 
                      whileHover={{ scale: 1.2 }} 
                      href="#" 
                      className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-blue-700 hover:bg-blue-700 hover:text-white transition-colors"
                    >
                      <FaLinkedin size={20} />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
              
              {/* Contact Form */}
              <motion.div 
                className="lg:w-2/3"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="bg-white rounded-2xl shadow-xl p-8">
                  <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
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
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                      <input 
                        type="text" 
                        id="subject" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" 
                        placeholder="How can we help you?"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service Interested In</label>
                      <select 
                        id="service" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      >
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
                      <textarea 
                        id="message" 
                        rows="5" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" 
                        placeholder="Tell us about your project or inquiry..."
                      ></textarea>
                    </div>
                    
                    <div className="flex items-center">
                      <input type="checkbox" id="consent" className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                      <label htmlFor="consent" className="ml-2 block text-sm text-gray-700">
                        I agree to receive communications from Kesefnow
                      </label>
                    </div>
                    
                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Send Message
                    </motion.button>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Our Global Presence</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              With offices across the UK, Germany, and Italy, we provide localized e-commerce expertise for businesses of all sizes.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="aspect-w-16 aspect-h-9">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9931.221252756262!2d-0.12301236442974554!3d51.51486797963491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b900d26973%3A0x4291f3172409ea92!2slondon!5e0!3m2!1sen!2suk!4v1656426599273!5m2!1sen!2suk" 
                width="100%" 
                height="500" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Kesefnow Office Locations"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;