import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaTimes } from 'react-icons/fa';

const WhatsAppButton = ({ phoneNumber = "+447123456789" }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Format the phone number for WhatsApp link
  const formattedPhoneNumber = phoneNumber.replace(/\D/g, '');
  const whatsappUrl = `https://wa.me/${formattedPhoneNumber}`;
  
  return (
    <div className="fixed bottom-6 left-6 z-50">
      <div className="relative">
        {/* Pulse Effect */}
        <motion.div
          className="absolute inset-0 rounded-full bg-green-500 opacity-70"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.7, 0, 0.7]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatType: "loop"
          }}
        />
        
        {/* Main Button */}
        <motion.button
          className="flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-lg relative z-10"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onMouseEnter={() => !isExpanded && setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <motion.div
            animate={{ 
              rotate: isExpanded ? 45 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            {isExpanded ? (
              <FaTimes className="text-white text-2xl" />
            ) : (
              <FaWhatsapp className="text-white text-3xl" />
            )}
          </motion.div>
        </motion.button>
        
        {/* Tooltip */}
        <AnimatePresence>
          {showTooltip && !isExpanded && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="absolute left-16 top-1/2 transform -translate-y-1/2 bg-white py-2 px-4 rounded-lg shadow-lg whitespace-nowrap"
            >
              <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45 w-3 h-3 bg-white"></div>
              <p className="text-gray-800 text-sm font-medium">Chat with us on WhatsApp!</p>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Expanded Chat Box */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              className="absolute bottom-20 left-0 bg-white rounded-lg shadow-xl w-72"
            >
              <div className="p-4 border-b">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="bg-green-500 p-2 rounded-full mr-3">
                      <FaWhatsapp className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800">WhatsApp Chat</h3>
                      <p className="text-xs text-gray-500">Online | Typically replies instantly</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-600 mb-4">Hi there! 👋 How can we help you today?</p>
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-2 px-4 bg-green-500 hover:bg-green-600 text-white text-center rounded-md transition-colors"
                >
                  Start Chat
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default WhatsAppButton; 