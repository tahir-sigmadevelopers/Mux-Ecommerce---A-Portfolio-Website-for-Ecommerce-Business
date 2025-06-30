import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaTimes } from 'react-icons/fa';

const WhatsAppButton = ({ phoneNumber = "+447123456789" }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  
  // Format the phone number for WhatsApp link
  const formattedPhoneNumber = phoneNumber.replace(/\D/g, '');
  const whatsappUrl = `https://wa.me/${formattedPhoneNumber}`;
  
  return (
    <div className="fixed bottom-6 left-6 z-50">
      <div className="relative">
        {/* Main Button */}
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatType: "loop"
            }}
          >
            <FaWhatsapp className="text-white text-3xl" />
          </motion.div>
        </motion.a>
        
        {/* Tooltip */}
        <AnimatePresence>
          {showTooltip && (
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
      </div>
    </div>
  );
};

export default WhatsAppButton; 