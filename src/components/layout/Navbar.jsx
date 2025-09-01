import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaGlobe, FaUserCog, FaChevronDown } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [partnerDropdownOpen, setPartnerDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Blog', path: '/blog' },
    { 
      name: 'Kasef Partner', 
      isDropdown: true,
      dropdownItems: [
        { name: 'What We Do', path: '/partner/what-we-do' },
        { name: 'Become a Partner', path: '/partner/become-partner' },
        { name: 'Learn Lead Generation', path: '/partner/lead-generation' },
      ]
    },
    { name: 'Contact', path: '/contact' },
  ];

  const navbarVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.nav 
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-sm shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center"
          >
            <img 
              src="/logo.png" 
              alt="Kesefnow Logo" 
              className="h-10 md:h-12 mr-2"
            />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hidden sm:inline-block">
              Kesefnow
            </span>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            link.isDropdown ? (
              <div key={link.name} className="relative group">
                <button
                  className="flex items-center text-gray-800 hover:text-blue-600 transition-colors"
                  onClick={() => setPartnerDropdownOpen(!partnerDropdownOpen)}
                  onMouseEnter={() => setPartnerDropdownOpen(true)}
                  onMouseLeave={() => setPartnerDropdownOpen(false)}
                >
                  {link.name}
                  <FaChevronDown className="ml-1 text-xs" />
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </button>
                <div 
                  className={`absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-md py-2 z-50 transition-all duration-300 ${
                    partnerDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                  }`}
                  onMouseEnter={() => setPartnerDropdownOpen(true)}
                  onMouseLeave={() => setPartnerDropdownOpen(false)}
                >
                  {link.dropdownItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600"
                      onClick={() => setPartnerDropdownOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link 
                key={link.name} 
                to={link.path}
                className="relative text-gray-800 hover:text-blue-600 transition-colors group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            )
          ))}
        </div>

        {/* Language Selector */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="flex items-center space-x-2 text-sm">
            <FaGlobe className="text-blue-600" />
            <select className="bg-transparent border-none outline-none cursor-pointer">
              <option value="en">English</option>
              <option value="de">Deutsch</option>
              <option value="it">Italiano</option>
            </select>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 focus:outline-none"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white shadow-lg"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              link.isDropdown ? (
                <div key={link.name} className="py-2 border-b border-gray-100">
                  <div 
                    className="flex items-center justify-between text-gray-800 hover:text-blue-600 transition-colors"
                    onClick={() => setPartnerDropdownOpen(!partnerDropdownOpen)}
                  >
                    <span>{link.name}</span>
                    <FaChevronDown className={`transition-transform ${partnerDropdownOpen ? 'transform rotate-180' : ''}`} />
                  </div>
                  {partnerDropdownOpen && (
                    <div className="mt-2 ml-4 space-y-2">
                      {link.dropdownItems.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          className="block py-2 text-gray-700 hover:text-blue-600"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link 
                  key={link.name} 
                  to={link.path}
                  className="text-gray-800 hover:text-blue-600 transition-colors py-2 border-b border-gray-100"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              )
            ))}
            <div className="flex items-center space-x-2 py-2">
              <FaGlobe className="text-blue-600" />
              <select className="bg-transparent border-none outline-none">
                <option value="en">English</option>
                <option value="de">Deutsch</option>
                <option value="it">Italiano</option>
              </select>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;