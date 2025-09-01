import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
  
  // Form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    service: '',
    message: '',
    consent: false
  });
  
  // Form validation state
  const [errors, setErrors] = useState({});
  
  // Success message state
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Handle input changes
  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when field is edited
    if (errors[id]) {
      setErrors(prev => ({
        ...prev,
        [id]: null
      }));
    }
  };
  
  // Validate form
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }
    
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  // Send data to WhatsApp
  const sendToWhatsApp = () => {
    // WhatsApp phone number (with country code)
    const whatsappNumber = '+923241553013'; // Replace with your actual WhatsApp number
    // const whatsappNumber = '+923200602522'; // Replace with your actual WhatsApp number
    
    // Format the message
    const message = `
*New Contact Form Submission*
---------------------------
*Name:* ${formData.firstName} ${formData.lastName}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Subject:* ${formData.subject}
*Service:* ${formData.service || 'Not specified'}
*Message:* ${formData.message}
*Marketing Consent:* ${formData.consent ? 'Yes' : 'No'}
    `.trim();
    
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
    
    // Reset form and show success message
    setIsSubmitted(true);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      subject: '',
      service: '',
      message: '',
      consent: false
    });
  };
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      sendToWhatsApp();
    } else {
      // Scroll to the first error
      const firstErrorField = Object.keys(errors)[0];
      const errorElement = document.getElementById(firstErrorField);
      if (errorElement) {
        errorElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        errorElement.focus();
      }
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
                  Fill out the form, and our team will get back to you within 24 hours.
                </p>
                
                <div className="p-6 bg-gray-50 rounded-lg mb-8">
                  <div className="space-y-3 text-gray-600">
                    <div className="flex items-center">
                      <FaPhone className="text-blue-600 mr-3" />
                      <a href="tel:+923200602522" className="hover:text-blue-600 transition-colors">
                        +92 320 0602522
                      </a>
                    </div>
                    <div className="flex items-center">
                      <FaEnvelope className="text-blue-600 mr-3" />
                      <a href="mailto:info@Kesefnow.com" className="hover:text-blue-600 transition-colors">
                        info@kesefnow.com
                      </a>
                    </div>
                  </div>
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
                  
                  {isSubmitted ? (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                      <div className="text-green-500 text-5xl mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">Message Sent!</h3>
                      <p className="text-gray-600 mb-4">Your message has been sent to our WhatsApp. We'll get back to you shortly.</p>
                      <button
                        onClick={() => setIsSubmitted(false)}
                        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        Send Another Message
                      </button>
                    </div>
                  ) : (
                    <form className="space-y-6" onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name*</label>
                          <input 
                            type="text" 
                            id="firstName" 
                            value={formData.firstName}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 border ${errors.firstName ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors`} 
                            placeholder="Your first name"
                          />
                          {errors.firstName && <p className="mt-1 text-sm text-red-500">{errors.firstName}</p>}
                        </div>
                        <div>
                          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name*</label>
                          <input 
                            type="text" 
                            id="lastName" 
                            value={formData.lastName}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 border ${errors.lastName ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors`} 
                            placeholder="Your last name"
                          />
                          {errors.lastName && <p className="mt-1 text-sm text-red-500">{errors.lastName}</p>}
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address*</label>
                          <input 
                            type="email" 
                            id="email" 
                            value={formData.email}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors`} 
                            placeholder="Your email address"
                          />
                          {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number*</label>
                          <input 
                            type="tel" 
                            id="phone" 
                            value={formData.phone}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors`} 
                            placeholder="Your phone number"
                          />
                          {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject*</label>
                        <input 
                          type="text" 
                          id="subject" 
                          value={formData.subject}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 border ${errors.subject ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors`} 
                          placeholder="How can we help you?"
                        />
                        {errors.subject && <p className="mt-1 text-sm text-red-500">{errors.subject}</p>}
                      </div>
                      
                      <div>
                        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service Interested In</label>
                        <select 
                          id="service" 
                          value={formData.service}
                          onChange={handleChange}
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
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message*</label>
                        <textarea 
                          id="message" 
                          rows="5" 
                          value={formData.message}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors`} 
                          placeholder="Tell us about your project or inquiry..."
                        ></textarea>
                        {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
                      </div>
                      
                      <div className="flex items-center">
                        <input 
                          type="checkbox" 
                          id="consent" 
                          checked={formData.consent}
                          onChange={handleChange}
                          className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" 
                        />
                        <label htmlFor="consent" className="ml-2 block text-sm text-gray-700">
                          I agree to receive communications from Kesefnow
                        </label>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-gray-500">* Required fields</p>
                        <div className="flex items-center">
                          <FaWhatsapp className="text-green-500 mr-2" size={20} />
                          <span className="text-sm text-gray-500">Sends to WhatsApp</span>
                        </div>
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
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default Contact;