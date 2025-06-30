import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Hero from './sections/Hero';
import Services from './sections/Services';
import Features from './sections/Features';
import Testimonials from './sections/Testimonials';
import CTA from './sections/CTA';

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
  return (
    <div>
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