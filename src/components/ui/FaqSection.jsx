import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

/**
 * FAQ Section with schema.org structured data for SEO
 * @param {Array} faqs - Array of FAQ objects with question and answer properties
 */
const FaqSection = ({ 
  title = 'Frequently Asked Questions',
  faqs = [],
  className = ''
}) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Generate FAQPage structured data for SEO
  const generateFaqSchema = () => {
    const faqItems = faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }));

    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqItems
    };
  };

  return (
    <section className={`py-12 ${className}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">{title}</h2>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="mb-4 border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="flex items-center justify-between w-full p-5 text-left bg-white hover:bg-gray-50 transition-colors"
                aria-expanded={activeIndex === index}
                aria-controls={`faq-content-${index}`}
              >
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                <FaChevronDown 
                  className={`transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`} 
                />
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    id={`faq-content-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-5 bg-gray-50 border-t border-gray-200">
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Add structured data for SEO */}
        {faqs.length > 0 && (
          <script type="application/ld+json">
            {JSON.stringify(generateFaqSchema())}
          </script>
        )}
      </div>
    </section>
  );
};

export default FaqSection; 