import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Hero from './sections/Hero';
import Services from './sections/Services';
import Features from './sections/Features';
import Testimonials from './sections/Testimonials';
import CTA from './sections/CTA';
import SEO from './SEO';

// ScrollReveal component for animation on scroll
const ScrollReveal = ({ children, threshold = 0.1 }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { 
          opacity: 1, 
          y: 0, 
          transition: { 
            duration: 0.8,
            ease: "easeOut"
          } 
        }
      }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
};

const Home = () => {
  // Define homepage-specific SEO data
  const homeSeoData = {
    title: 'Kesefnow - Professional Web Development & Design Solutions',
    description: 'Transform your online presence with Kesefnow\'s professional web development, design, and digital marketing services. Get a custom website that converts visitors into customers.',
    keywords: 'web development, web design, professional website, digital marketing, SEO, custom website, web development services',
    ogType: 'website',
    ogImage: '/homepage-og-image.jpg' // Make sure this image exists in public folder
  };
  
  // Structured data for LocalBusiness - helps with local SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Kesefnow",
    "description": "Professional web development, design, and digital marketing services",
    "url": "https://kesefnow.com",
    "logo": "https://kesefnow.com/logo.png",
    "image": "https://kesefnow.com/homepage-og-image.jpg",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Your City",
      "addressRegion": "Your Region",
      "postalCode": "Your Postal Code",
      "addressCountry": "Your Country"
    },
    "telephone": "+923200602522",
    "priceRange": "$$",
    "sameAs": [
      "https://www.facebook.com/kesefnow",
      "https://www.instagram.com/kesefnow",
      "https://twitter.com/kesefnow",
      "https://www.linkedin.com/company/kesefnow"
    ],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "17:00"
    }
  };
  
  return (
    <div>
      {/* Add custom SEO for homepage */}
      <SEO {...homeSeoData}>
        {/* Add JSON-LD structured data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </SEO>
      
      {/* Hero doesn't need ScrollReveal as it already has its own animations */}
      <Hero />
      
      <ScrollReveal>
        <Services />
      </ScrollReveal>
      
      <ScrollReveal>
        <Features />
      </ScrollReveal>
      
      <ScrollReveal>
        <Testimonials />
      </ScrollReveal>
      
      <ScrollReveal>
        <CTA />
      </ScrollReveal>
    </div>
  );
};

export default Home;