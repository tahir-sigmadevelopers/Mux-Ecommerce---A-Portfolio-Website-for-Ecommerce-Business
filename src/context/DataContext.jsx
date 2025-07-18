import React, { createContext, useState, useContext, useEffect } from 'react';

// Initial data for services
const initialServices = [
  {
    id: 1,
    icon: "FaShoppingCart",
    title: 'Amazon to eBay Dropshipping',
    description: 'Leverage our expertise to seamlessly list Amazon products on eBay with optimal pricing strategies and automated order fulfillment.',
    color: 'from-blue-500 to-cyan-400'
  },
  {
    id: 2,
    icon: "FaChartLine",
    title: 'Account Audit',
    description: 'Comprehensive analysis of your e-commerce accounts to identify issues, opportunities, and actionable insights for growth.',
    color: 'from-purple-500 to-pink-400'
  },
  {
    id: 3,
    icon: "FaBoxes",
    title: 'FBA Wholesale (A-Z)',
    description: 'Complete FBA wholesale solutions including product sourcing, supplier negotiations, logistics, and inventory management.',
    color: 'from-indigo-500 to-blue-400'
  },
  {
    id: 4,
    icon: "FaSearch",
    title: 'Listing Optimization',
    description: 'Enhance your product listings with SEO-optimized content, compelling images, and compelling pricing to maximize visibility and sales.',
    color: 'from-rose-500 to-orange-400'
  },
  {
    id: 5,
    icon: "FaAd",
    title: 'PPC Management',
    description: 'Data-driven advertising campaigns to increase visibility, drive traffic, and boost sales across all your marketplace accounts.',
    color: 'from-amber-500 to-yellow-400'
  }
];

// Initial data for about page
const initialAboutContent = {
  hero: {
    title: "About Us",
    subtitle: "Your trusted e-commerce experts for UK, Germany, and Italian marketplaces"
  },
  story: {
    title: "Our Story",
    content: [
      "Founded in 2018, Kasefnow began with a simple mission: to help businesses navigate the complex world of cross-border e-commerce in Europe's most lucrative markets - the UK, Germany, and Italy.",
      "Our founder, having experienced the challenges of European marketplace expansion firsthand, assembled a team of specialists with deep expertise in each market's unique requirements, consumer behaviors, and competitive landscapes.",
      "What started as a small consultancy has grown into a comprehensive e-commerce solutions provider, helping hundreds of businesses establish and scale their operations across multiple European marketplaces.",
      "Today, we pride ourselves on our data-driven approach, localized expertise, and proven track record of success. Our team combines technical knowledge with practical experience to deliver results that exceed our clients' expectations."
    ]
  },
  values: {
    title: "Our Values",
    items: [
      {
        id: 1,
        title: "Expertise",
        description: "We maintain deep, specialized knowledge of each marketplace we operate in, staying ahead of trends and policy changes.",
        icon: "🎯"
      },
      {
        id: 2,
        title: "Transparency",
        description: "We believe in open communication and complete visibility into strategies, performance metrics, and results.",
        icon: "🔍"
      },
      {
        id: 3,
        title: "Innovation",
        description: "We continuously explore new technologies and methodologies to give our clients a competitive edge.",
        icon: "💡"
      }
    ]
  },
  cta: {
    title: "Ready to Work With Us?",
    subtitle: "Let's discuss how our team can help grow your e-commerce business across Europe.",
    buttonText: "Contact Us Today"
  }
};

// Initial data for portfolio
const initialPortfolioItems = [
  {
    id: 1,
    title: 'Amazon UK Dropshipping Store',
    category: 'dropshipping',
    image: 'https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    description: 'Automated Amazon to eBay dropshipping store generating £5,000+ monthly profit with 300+ active listings.',
    tags: ['Amazon', 'eBay', 'Dropshipping', 'UK'],
  },
  {
    id: 2,
    title: 'German Marketplace Audit',
    category: 'audit',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    description: 'Complete Amazon.de account audit that increased performance by 45% and resolved compliance issues.',
    tags: ['Account Audit', 'Germany', 'Compliance'],
  },
  {
    id: 3,
    title: 'Italian FBA Wholesale Operation',
    category: 'wholesale',
    image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    description: 'End-to-end FBA wholesale solution for Italian marketplace with €120,000 monthly revenue.',
    tags: ['FBA', 'Wholesale', 'Italy'],
  },
  {
    id: 4,
    title: 'UK Multi-Channel Integration',
    category: 'dropshipping',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1115&q=80',
    description: 'Integrated multi-channel selling across Amazon, eBay, and Shopify with centralized inventory management.',
    tags: ['Multi-channel', 'Integration', 'UK'],
  },
  {
    id: 5,
    title: 'German Brand Analytics',
    category: 'audit',
    image: 'https://images.unsplash.com/photo-1590845947670-c009801ffa74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1159&q=80',
    description: 'Comprehensive brand analytics and competitor research for a German electronics seller.',
    tags: ['Analytics', 'Germany', 'Research'],
  },
  {
    id: 6,
    title: 'UK-Italy Cross-Border FBA',
    category: 'wholesale',
    image: 'https://images.unsplash.com/photo-1632507399869-65d193b6371f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    description: 'Cross-border FBA wholesale operation between UK and Italian marketplaces with Pan-European FBA.',
    tags: ['FBA', 'Cross-border', 'UK', 'Italy'],
  }
];

// Initial data for testimonials
const initialTestimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'eBay Dropshipper',
    location: 'London, UK',
    image: 'https://randomuser.me/api/portraits/women/32.jpg',
    content: 'Kasefnow transformed my dropshipping business. Their Amazon to eBay strategies increased my profit margins by 35% while reducing the time I spent managing listings. Exceptional service!',
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
    content: 'Working with Kasefnow has been a game-changer. Their expertise across multiple marketplaces helped me expand internationally with confidence. The results speak for themselves!',
    rating: 5
  }
];

// Initial data for team members
const initialTeamMembers = [
  {
    id: 1,
    name: 'John Doe',
    role: 'CEO & Founder',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
    bio: 'E-commerce expert with 10+ years of experience in Amazon and eBay marketplaces. Specialized in UK and German markets.',
    email: 'john@kasefnow.com',
    linkedin: 'https://linkedin.com/in/johndoe'
  },
  {
    id: 2,
    name: 'Emma Wilson',
    role: 'Head of Operations',
    image: 'https://randomuser.me/api/portraits/women/2.jpg',
    bio: 'Operations specialist with expertise in streamlining e-commerce processes across multiple platforms.',
    email: 'emma@kasefnow.com',
    linkedin: 'https://linkedin.com/in/emmawilson'
  },
  {
    id: 3,
    name: 'Alessandro Rossi',
    role: 'Italian Market Specialist',
    image: 'https://randomuser.me/api/portraits/men/3.jpg',
    bio: 'Native Italian with deep knowledge of the Italian e-commerce landscape and FBA operations.',
    email: 'alessandro@kaasefnow.com',
    linkedin: 'https://linkedin.com/in/alessandrorossi'
  }
];

// Create the context
const DataContext = createContext();

// Create a provider component
export const DataProvider = ({ children }) => {
  // State for services
  const [services, setServices] = useState(() => {
    const savedServices = localStorage.getItem('services');
    return savedServices ? JSON.parse(savedServices) : initialServices;
  });

  // State for about content
  const [aboutContent, setAboutContent] = useState(() => {
    const savedAboutContent = localStorage.getItem('aboutContent');
    return savedAboutContent ? JSON.parse(savedAboutContent) : initialAboutContent;
  });

  // State for portfolio items
  const [portfolioItems, setPortfolioItems] = useState(() => {
    const savedPortfolioItems = localStorage.getItem('portfolioItems');
    return savedPortfolioItems ? JSON.parse(savedPortfolioItems) : initialPortfolioItems;
  });

  // State for testimonials
  const [testimonials, setTestimonials] = useState(() => {
    const savedTestimonials = localStorage.getItem('testimonials');
    return savedTestimonials ? JSON.parse(savedTestimonials) : initialTestimonials;
  });

  // State for team members
  const [teamMembers, setTeamMembers] = useState(() => {
    const savedTeamMembers = localStorage.getItem('teamMembers');
    return savedTeamMembers ? JSON.parse(savedTeamMembers) : initialTeamMembers;
  });

  // Save services to localStorage when they change
  useEffect(() => {
    localStorage.setItem('services', JSON.stringify(services));
  }, [services]);

  // Save about content to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('aboutContent', JSON.stringify(aboutContent));
  }, [aboutContent]);

  // Save portfolio items to localStorage when they change
  useEffect(() => {
    localStorage.setItem('portfolioItems', JSON.stringify(portfolioItems));
  }, [portfolioItems]);

  // Save testimonials to localStorage when they change
  useEffect(() => {
    localStorage.setItem('testimonials', JSON.stringify(testimonials));
  }, [testimonials]);

  // Save team members to localStorage when they change
  useEffect(() => {
    localStorage.setItem('teamMembers', JSON.stringify(teamMembers));
  }, [teamMembers]);

  return (
    <DataContext.Provider value={{
      services, setServices,
      aboutContent, setAboutContent,
      portfolioItems, setPortfolioItems,
      testimonials, setTestimonials,
      teamMembers, setTeamMembers
    }}>
      {children}
    </DataContext.Provider>
  );
};

// Custom hook to use the context
export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};

export default DataContext; 