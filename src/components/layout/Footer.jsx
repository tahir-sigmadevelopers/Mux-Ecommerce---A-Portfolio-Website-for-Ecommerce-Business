import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Kesefnow</h3>
            <p className="text-gray-300 max-w-xs">
              Your premier e-commerce agency specializing in Amazon to eBay dropshipping, account audits, and FBA wholesale solutions across UK, Germany, and Italy.
            </p>
            <div className="flex space-x-4">
              <motion.a whileHover={{ scale: 1.2 }} href="#" className="text-blue-400 hover:text-white transition-colors">
                <FaFacebook size={20} />
              </motion.a>
              <motion.a whileHover={{ scale: 1.2 }} href="#" className="text-blue-400 hover:text-white transition-colors">
                <FaTwitter size={20} />
              </motion.a>
              <motion.a whileHover={{ scale: 1.2 }} href="#" className="text-blue-400 hover:text-white transition-colors">
                <FaInstagram size={20} />
              </motion.a>
              <motion.a whileHover={{ scale: 1.2 }} href="#" className="text-blue-400 hover:text-white transition-colors">
                <FaLinkedin size={20} />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-blue-400 transition-colors flex items-center"
                  >
                    <span className="mr-2">›</span> {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold">Our Services</h3>
            <ul className="space-y-2">
              {[
                'Amazon to eBay Dropshipping', 
                'Account Audit', 
                'FBA Wholesale (A-Z)', 
                'Listing Optimization',
                'PPC Management'
              ].map((service) => (
                <li key={service}>
                  <Link 
                    to="/services"
                    className="text-gray-300 hover:text-blue-400 transition-colors flex items-center"
                  >
                    <span className="mr-2">›</span> {service}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-blue-400 mt-1 mr-3" />
                <span className="text-gray-300">123 E-Commerce Street, London, UK</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-blue-400 mr-3" />
                <a href="mailto:info@Kesefnow.com" className="text-gray-300 hover:text-blue-400 transition-colors">
                  info@Kesefnow.com
                </a>
              </li>
              <li className="flex items-center">
                <FaPhone className="text-blue-400 mr-3" />
                <a href="tel:923200602522" className="text-gray-300 hover:text-blue-400 transition-colors">
                  +92 320 0602522
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Kesefnow. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;