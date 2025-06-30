import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'eBay Dropshipper',
      location: 'London, UK',
      image: 'https://randomuser.me/api/portraits/women/32.jpg',
      content: 'mux-ECommerce transformed my dropshipping business. Their Amazon to eBay strategies increased my profit margins by 35% while reducing the time I spent managing listings. Exceptional service!',
      rating: 5
    },
    {
      id: 2,
      name: 'Marco Bianchi',
      role: 'FBA Seller',
      location: 'Milan, Italy',
      image: 'https://randomuser.me/api/portraits/men/45.jpg',
      content: 'The FBA wholesale program was exactly what my business needed. They handled everything from sourcing to logistics, and my sales have doubled in just three months. Highly recommended!',
      rating: 5
    },
    {
      id: 3,
      name: 'Anna Schmidt',
      role: 'E-commerce Entrepreneur',
      location: 'Berlin, Germany',
      image: 'https://randomuser.me/api/portraits/women/68.jpg',
      content: 'Their account audit saved my Amazon business. They identified critical issues I wasn\'t aware of and implemented solutions that not only resolved them but improved my overall performance.',
      rating: 5
    },
    {
      id: 4,
      name: 'James Wilson',
      role: 'Multi-channel Seller',
      location: 'Manchester, UK',
      image: 'https://randomuser.me/api/portraits/men/22.jpg',
      content: 'Working with mux-ECommerce has been a game-changer. Their expertise across multiple marketplaces helped me expand internationally with confidence. The results speak for themselves!',
      rating: 5
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length, isPaused]);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const slideVariants = {
    hiddenRight: {
      x: 300,
      opacity: 0,
      scale: 0.8
    },
    hiddenLeft: {
      x: -300,
      opacity: 0,
      scale: 0.8
    },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    },
    exit: (direction) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.4
      }
    })
  };
  
  // Animation for the quote icon
  const quoteIconVariants = {
    initial: { opacity: 0, scale: 0, rotate: -45 },
    animate: { 
      opacity: 1, 
      scale: 1, 
      rotate: 0,
      transition: { 
        delay: 0.3, 
        duration: 0.5,
        type: "spring",
        stiffness: 200
      }
    }
  };
  
  // Animation for the stars
  const starVariants = {
    initial: { opacity: 0, y: -10 },
    animate: (index) => ({
      opacity: 1,
      y: 0,
      transition: { 
        delay: 0.4 + (index * 0.1), 
        duration: 0.3 
      }
    })
  };
  
  // Animation for the text content
  const contentVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { 
        delay: 0.5, 
        duration: 0.6 
      }
    }
  };
  
  // Animation for the profile image
  const imageVariants = {
    initial: { opacity: 0, scale: 0.5, borderRadius: "100%" },
    animate: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        delay: 0.2, 
        duration: 0.5,
        type: "spring",
        stiffness: 200
      }
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)",
      transition: { duration: 0.3 }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            What Our <motion.span 
              className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent inline-block"
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ 
                duration: 15, 
                ease: 'linear', 
                repeat: Infinity 
              }}
              style={{ backgroundSize: '200% auto' }}
            >
              Clients
            </motion.span> Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 text-lg"
          >
            Success stories from e-commerce entrepreneurs across UK, Germany, and Italy
          </motion.p>
        </div>

        <div 
          className="max-w-4xl mx-auto relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Testimonial Carousel */}
          <div className="relative h-[400px] md:h-[300px]">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial={direction > 0 ? "hiddenRight" : "hiddenLeft"}
                animate="visible"
                exit="exit"
                className="absolute w-full"
              >
                <motion.div 
                  className="bg-white rounded-2xl shadow-xl p-8 md:p-10"
                  whileHover={{
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
                    y: -5,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                    <motion.div 
                      className="flex-shrink-0"
                      variants={imageVariants}
                      initial="initial"
                      animate="animate"
                      whileHover="hover"
                    >
                      <div className="w-20 h-20 rounded-full overflow-hidden shadow-lg">
                        <motion.img 
                          src={testimonials[currentIndex].image} 
                          alt={testimonials[currentIndex].name} 
                          className="w-full h-full object-cover"
                          layoutId={`testimonial-image-${testimonials[currentIndex].id}`}
                        />
                      </div>
                    </motion.div>
                    <div className="flex-grow">
                      <div className="mb-4 text-yellow-400 flex">
                        {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                          <motion.div
                            key={i}
                            custom={i}
                            variants={starVariants}
                            initial="initial"
                            animate="animate"
                          >
                            <FaStar />
                          </motion.div>
                        ))}
                      </div>
                      <div className="relative">
                        <motion.div
                          variants={quoteIconVariants}
                          initial="initial"
                          animate="animate"
                          className="absolute -top-4 -left-2 text-blue-100 text-4xl"
                        >
                          <FaQuoteLeft />
                        </motion.div>
                        <motion.p 
                          variants={contentVariants}
                          initial="initial"
                          animate="animate"
                          className="text-gray-700 italic mb-6 relative z-10"
                        >
                          "{testimonials[currentIndex].content}"
                        </motion.p>
                      </div>
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.4 }}
                      >
                        <h4 className="font-bold text-lg">{testimonials[currentIndex].name}</h4>
                        <p className="text-gray-600">
                          {testimonials[currentIndex].role} • {testimonials[currentIndex].location}
                        </p>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-blue-600 w-8" : "bg-gray-300"
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Arrow Controls */}
          <motion.button
            onClick={handlePrev}
            className="absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg z-10 hover:bg-gray-100 transition-colors"
            whileHover={{ 
              scale: 1.1, 
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" 
            }}
            whileTap={{ scale: 0.95 }}
            aria-label="Previous testimonial"
          >
            <motion.svg 
              className="w-6 h-6 text-gray-800" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
              whileHover={{ x: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </motion.svg>
          </motion.button>
          <motion.button
            onClick={handleNext}
            className="absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg z-10 hover:bg-gray-100 transition-colors"
            whileHover={{ 
              scale: 1.1, 
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" 
            }}
            whileTap={{ scale: 0.95 }}
            aria-label="Next testimonial"
          >
            <motion.svg 
              className="w-6 h-6 text-gray-800" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
              whileHover={{ x: 2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </motion.svg>
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;