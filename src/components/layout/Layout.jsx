import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppButton from '../ui/WhatsAppButton';
import SEO from '../SEO';
import { useLocation } from 'react-router-dom';

const Layout = ({ children, customSeo }) => {
  const location = useLocation();
  
  // Define default SEO props based on current route
  const getDefaultSeoProps = () => {
    const path = location.pathname;
    
    // Default SEO data
    let seoProps = {
      title: 'Kesefnow - Professional Web Development Services',
      description: 'Kesefnow provides professional web development, design, and digital marketing services to help your business grow online.',
    };
    
    // Route-specific SEO data
    switch (path) {
      case '/about':
        seoProps = {
          title: 'About Us - Kesefnow',
          description: 'Learn about Kesefnow, our mission, vision, and the team behind our professional web development services.',
        };
        break;
      case '/services':
        seoProps = {
          title: 'Our Services - Kesefnow',
          description: 'Explore our comprehensive web development, design, and digital marketing services tailored for your business needs.',
        };
        break;
      case '/portfolio':
        seoProps = {
          title: 'Portfolio - Kesefnow',
          description: 'View our portfolio of successful web development and design projects for various clients and industries.',
        };
        break;
      case '/contact':
        seoProps = {
          title: 'Contact Us - Kesefnow',
          description: 'Get in touch with Kesefnow for professional web development and design services. Request a quote today.',
        };
        break;
      default:
        break;
    }
    
    return seoProps;
  };
  
  const defaultSeoProps = getDefaultSeoProps();
  
  // Generate BreadcrumbList structured data
  const generateBreadcrumbSchema = () => {
    const path = location.pathname;
    const pathSegments = path.split('/').filter(Boolean);
    
    // Start with homepage
    const breadcrumbItems = [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://kesefnow.com"
      }
    ];
    
    // Add path segments as breadcrumbs
    if (pathSegments.length > 0) {
      pathSegments.forEach((segment, index) => {
        const position = index + 2;
        const name = segment.charAt(0).toUpperCase() + segment.slice(1);
        const item = `https://kesefnow.com/${pathSegments.slice(0, index + 1).join('/')}`;
        
        breadcrumbItems.push({
          "@type": "ListItem",
          "position": position,
          "name": name,
          "item": item
        });
      });
    }
    
    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbItems
    };
  };
  
  const breadcrumbSchema = generateBreadcrumbSchema();
  
  return (
    <div className="flex flex-col min-h-screen">
      {/* Apply default SEO or custom SEO if provided */}
      {customSeo ? (
        <SEO {...customSeo}>
          <script type="application/ld+json">
            {JSON.stringify(breadcrumbSchema)}
          </script>
        </SEO>
      ) : (
        <SEO {...defaultSeoProps}>
          <script type="application/ld+json">
            {JSON.stringify(breadcrumbSchema)}
          </script>
        </SEO>
      )}
      <Navbar />
      <main className="flex-grow pt-16">
        {children}
      </main>
      <Footer />
      <WhatsAppButton phoneNumber="923200602522" />
    </div>
  );
};

export default Layout; 