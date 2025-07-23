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
      "Founded in 2018, Kesefnow began with a simple mission: to help businesses navigate the complex world of cross-border e-commerce in Europe's most lucrative markets - the UK, Germany, and Italy.",
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
    content: 'Kesefnow transformed my dropshipping business. Their Amazon to eBay strategies increased my profit margins by 35% while reducing the time I spent managing listings. Exceptional service!',
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
    content: 'Working with Kesefnow has been a game-changer. Their expertise across multiple marketplaces helped me expand internationally with confidence. The results speak for themselves!',
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
    email: 'john@Kesefnow.com',
    linkedin: 'https://linkedin.com/in/johndoe'
  },
  {
    id: 2,
    name: 'Emma Wilson',
    role: 'Head of Operations',
    image: 'https://randomuser.me/api/portraits/women/2.jpg',
    bio: 'Operations specialist with expertise in streamlining e-commerce processes across multiple platforms.',
    email: 'emma@Kesefnow.com',
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

// Initial data for blog posts
const initialBlogPosts = [
  {
    id: 1,
    slug: 'getting-started-with-ecommerce',
    title: 'Getting Started with E-commerce: A Beginner\'s Guide',
    excerpt: 'Learn the essentials of starting your e-commerce business, from choosing platforms to setting up your first store.',
    content: `
      <h2>Getting Started with E-commerce: A Beginner's Guide</h2>
      
      <p>E-commerce has transformed the retail landscape, offering entrepreneurs unprecedented opportunities to reach global markets with minimal startup costs. If you're looking to start your own online business, this guide will walk you through the essential steps.</p>
      
      <h3>Choose the Right E-commerce Platform</h3>
      
      <p>Selecting the right platform is crucial for your success. Popular options include:</p>
      
      <ul>
        <li><strong>Shopify</strong>: Easy to use with many templates and apps</li>
        <li><strong>WooCommerce</strong>: Great for WordPress users seeking customization</li>
        <li><strong>Amazon & eBay</strong>: Established marketplaces with built-in traffic</li>
      </ul>
      
      <p>Consider your technical skills, budget, and specific needs when making this choice.</p>
      
      <h3>Define Your Niche</h3>
      
      <p>Successful e-commerce businesses typically focus on specific market segments. Research potential niches by analyzing:</p>
      
      <ul>
        <li>Market demand and competition</li>
        <li>Profit margins and shipping logistics</li>
        <li>Your personal interests and expertise</li>
      </ul>
      
      <h3>Set Up Your Online Store</h3>
      
      <p>Once you've chosen your platform and niche:</p>
      
      <ol>
        <li>Select and customize a responsive theme</li>
        <li>Create compelling product descriptions and high-quality images</li>
        <li>Set up secure payment gateways</li>
        <li>Establish shipping options and return policies</li>
      </ol>
      
      <h3>Market Your Store</h3>
      
      <p>Even the best products won't sell without proper marketing:</p>
      
      <ul>
        <li>Implement SEO best practices for organic traffic</li>
        <li>Utilize social media marketing and content creation</li>
        <li>Consider PPC advertising for immediate visibility</li>
        <li>Build an email list for ongoing customer engagement</li>
      </ul>
      
      <h3>Analyze and Optimize</h3>
      
      <p>Use analytics tools to track:</p>
      
      <ul>
        <li>Traffic sources and user behavior</li>
        <li>Conversion rates and average order values</li>
        <li>Cart abandonment and product performance</li>
      </ul>
      
      <p>Use these insights to continuously refine your store and marketing strategy.</p>
      
      <h3>Conclusion</h3>
      
      <p>Starting an e-commerce business requires careful planning and ongoing optimization. Begin with these fundamentals, and remember that success typically comes from consistent improvement rather than overnight perfection.</p>
      
      <p>Need help setting up your e-commerce business? <a href="/contact">Contact our team</a> for personalized guidance.</p>
    `,
    author: {
      name: 'John Doe',
      image: 'https://randomuser.me/api/portraits/men/1.jpg',
      role: 'CEO & Founder'
    },
    categories: ['E-commerce', 'Getting Started', 'Business Tips'],
    tags: ['ecommerce', 'beginners', 'online business', 'shopify', 'amazon', 'ebay'],
    coverImage: 'https://images.unsplash.com/photo-1661956602868-6ae368943878?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    publishedDate: '2025-06-15T08:00:00Z',
    modifiedDate: '2025-07-01T10:15:00Z',
    readTime: '8 min read',
    comments: []
  },
  {
    id: 2,
    slug: 'amazon-marketplace-strategies',
    title: 'Amazon Marketplace Strategies for 2025',
    excerpt: 'Discover the latest strategies for success on Amazon, including keyword optimization, PPC campaigns, and inventory management.',
    content: `
      <h2>Amazon Marketplace Strategies for 2025</h2>
      
      <p>As Amazon continues to evolve, sellers must adapt their strategies to stay competitive. Here are the most effective approaches for success on Amazon in 2025.</p>
      
      <h3>Keyword Optimization and Listing Quality</h3>
      
      <p>Amazon's A10 algorithm prioritizes relevance and customer experience:</p>
      
      <ul>
        <li>Conduct thorough keyword research using tools like Helium 10 and Jungle Scout</li>
        <li>Strategically place keywords in titles, bullets, and backend search terms</li>
        <li>Use high-quality images with zoom capability and lifestyle context</li>
        <li>Create detailed, benefit-focused product descriptions</li>
      </ul>
      
      <h3>Advertising Strategy</h3>
      
      <p>PPC campaigns are increasingly essential for visibility:</p>
      
      <ul>
        <li>Implement a balanced approach to Sponsored Products, Brands, and Display</li>
        <li>Use negative keywords to eliminate wasteful ad spend</li>
        <li>Target competitors strategically with product targeting campaigns</li>
        <li>Leverage brand analytics for data-driven optimization</li>
      </ul>
      
      <h3>Inventory Management</h3>
      
      <p>Proper inventory management is crucial for maintaining the Buy Box and profitability:</p>
      
      <ul>
        <li>Use forecasting tools to prevent stockouts and overstock situations</li>
        <li>Implement just-in-time inventory practices where appropriate</li>
        <li>Consider Amazon's restock limits in your planning</li>
        <li>Diversify suppliers to mitigate supply chain disruptions</li>
      </ul>
      
      <h3>Customer Engagement</h3>
      
      <p>Building brand loyalty within Amazon's ecosystem:</p>
      
      <ul>
        <li>Enroll in Amazon's Brand Registry and utilize Brand Store</li>
        <li>Implement A+ Content to enhance product descriptions</li>
        <li>Use Amazon Posts to connect with shoppers through lifestyle content</li>
        <li>Respond promptly to customer questions and reviews</li>
      </ul>
      
      <h3>Cross-Border Expansion</h3>
      
      <p>Expanding to international Amazon marketplaces:</p>
      
      <ul>
        <li>Research market-specific regulations and consumer preferences</li>
        <li>Utilize Amazon Global Selling tools for simplified expansion</li>
        <li>Consider FBA Export for testing international demand</li>
        <li>Adapt listings for local languages and cultural nuances</li>
      </ul>
      
      <h3>Conclusion</h3>
      
      <p>Success on Amazon in 2025 requires a comprehensive approach that balances visibility, operational excellence, and customer experience. By implementing these strategies, sellers can position themselves for sustainable growth in an increasingly competitive marketplace.</p>
      
      <p>Need expert guidance for your Amazon business? <a href="/contact">Contact our team</a> for specialized Amazon marketplace consulting.</p>
    `,
    author: {
      name: 'Emma Wilson',
      image: 'https://randomuser.me/api/portraits/women/2.jpg',
      role: 'Head of Operations'
    },
    categories: ['Amazon', 'Marketplace Strategy', 'E-commerce'],
    tags: ['amazon', 'fba', 'ppc', 'keywords', 'inventory management', 'cross-border'],
    coverImage: 'https://images.unsplash.com/photo-1614849286521-4c58b2f0ff15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    publishedDate: '2025-07-10T09:30:00Z',
    modifiedDate: '2025-07-15T14:20:00Z',
    readTime: '10 min read',
    comments: []
  },
  {
    id: 3,
    slug: 'european-ecommerce-markets-guide',
    title: 'A Complete Guide to European E-commerce Markets',
    excerpt: 'Explore the unique characteristics of UK, German, and Italian e-commerce markets and how to succeed in each region.',
    content: `
      <h2>A Complete Guide to European E-commerce Markets</h2>
      
      <p>European e-commerce presents lucrative opportunities for sellers looking to expand internationally. This guide focuses on three key markets: the UK, Germany, and Italy.</p>
      
      <h3>United Kingdom Market Overview</h3>
      
      <p>The UK is one of Europe's most mature e-commerce markets:</p>
      
      <ul>
        <li>85% of the population shops online regularly</li>
        <li>Mobile commerce accounts for over 60% of online transactions</li>
        <li>Amazon and eBay dominate, but specialized marketplaces are growing</li>
        <li>English language content eliminates translation requirements</li>
      </ul>
      
      <p><strong>Key Success Factors:</strong></p>
      <ul>
        <li>Strong customer service with rapid delivery options</li>
        <li>Clear pricing (including VAT) and transparent policies</li>
        <li>Local payment methods including PayPal and credit cards</li>
      </ul>
      
      <h3>German Market Overview</h3>
      
      <p>Germany has Europe's largest e-commerce market by revenue:</p>
      
      <ul>
        <li>Consumers prioritize quality, security, and detailed product information</li>
        <li>Strong preference for local payment methods like SEPA and Klarna</li>
        <li>High return rates (up to 50% in some categories)</li>
        <li>Amazon.de dominates, but Otto and Zalando hold significant market share</li>
      </ul>
      
      <p><strong>Key Success Factors:</strong></p>
      <ul>
        <li>High-quality, detailed German language listings</li>
        <li>Excellent customer service with German-speaking support</li>
        <li>Generous return policies and free shipping options</li>
        <li>Local business entity or fiscal representation recommended</li>
      </ul>
      
      <h3>Italian Market Overview</h3>
      
      <p>Italy offers significant growth potential with less competition:</p>
      
      <ul>
        <li>E-commerce adoption growing rapidly (15% annual growth)</li>
        <li>Cash on delivery still popular in some regions</li>
        <li>Amazon.it is dominant, with local players like ePRICE and Zalando</li>
        <li>Mobile commerce gaining significant traction</li>
      </ul>
      
      <p><strong>Key Success Factors:</strong></p>
      <ul>
        <li>Italian language content essential for trust and conversions</li>
        <li>Multiple payment options including PayPal and COD</li>
        <li>Attention to regional preferences (North vs. South)</li>
        <li>Competitive pricing due to price-sensitive consumer base</li>
      </ul>
      
      <h3>Cross-Border Logistics</h3>
      
      <p>Efficient logistics are critical for European success:</p>
      
      <ul>
        <li>Consider Amazon's European Fulfillment Network for simplified operations</li>
        <li>Local warehousing solutions for faster delivery in each market</li>
        <li>Navigate country-specific customs and VAT requirements</li>
        <li>Partner with carriers familiar with local delivery preferences</li>
      </ul>
      
      <h3>Conclusion</h3>
      
      <p>Success in European e-commerce requires understanding each market's unique characteristics and consumer preferences. By adapting your approach to meet local expectations while leveraging cross-border efficiencies, you can effectively expand your e-commerce business across these lucrative markets.</p>
      
      <p>Need specialized guidance for European marketplace expansion? <a href="/contact">Contact our team</a> for expert consulting services.</p>
    `,
    author: {
      name: 'Alessandro Rossi',
      image: 'https://randomuser.me/api/portraits/men/3.jpg',
      role: 'Italian Market Specialist'
    },
    categories: ['International E-commerce', 'European Markets', 'Cross-Border Selling'],
    tags: ['europe', 'uk', 'germany', 'italy', 'cross-border', 'international'],
    coverImage: 'https://images.unsplash.com/photo-1485081669829-bacb8c7bb1f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    publishedDate: '2025-06-28T10:45:00Z',
    modifiedDate: '2025-07-05T11:30:00Z',
    readTime: '12 min read',
    comments: []
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

  // State for blog posts
  const [blogPosts, setBlogPosts] = useState(() => {
    const savedBlogPosts = localStorage.getItem('blogPosts');
    return savedBlogPosts ? JSON.parse(savedBlogPosts) : initialBlogPosts;
  });

  // Blog categories derived from blog posts
  const blogCategories = [...new Set(blogPosts.flatMap(post => post.categories))];
  
  // Blog tags derived from blog posts
  const blogTags = [...new Set(blogPosts.flatMap(post => post.tags))];

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
  
  // Save blog posts to localStorage when they change
  useEffect(() => {
    localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
  }, [blogPosts]);

  // Function to get a blog post by slug
  const getBlogPostBySlug = (slug) => {
    return blogPosts.find(post => post.slug === slug);
  };

  // Function to get related blog posts
  const getRelatedPosts = (currentPostId, limit = 3) => {
    return blogPosts
      .filter(post => post.id !== currentPostId)
      .sort(() => 0.5 - Math.random())
      .slice(0, limit);
  };

  // Function to get posts by category
  const getPostsByCategory = (category) => {
    return blogPosts.filter(post => post.categories.includes(category));
  };

  // Function to get posts by tag
  const getPostsByTag = (tag) => {
    return blogPosts.filter(post => post.tags.includes(tag));
  };

  // Function to add a new blog post
  const addBlogPost = (newPost) => {
    const postWithId = {
      ...newPost,
      id: blogPosts.length > 0 ? Math.max(...blogPosts.map(post => post.id)) + 1 : 1,
      publishedDate: new Date().toISOString(),
      modifiedDate: new Date().toISOString(),
      comments: []
    };
    setBlogPosts([...blogPosts, postWithId]);
    return postWithId;
  };

  // Function to update a blog post
  const updateBlogPost = (updatedPost) => {
    const updatedPosts = blogPosts.map(post => 
      post.id === updatedPost.id 
        ? { ...updatedPost, modifiedDate: new Date().toISOString() } 
        : post
    );
    setBlogPosts(updatedPosts);
    return updatedPost;
  };

  // Function to delete a blog post
  const deleteBlogPost = (postId) => {
    const updatedPosts = blogPosts.filter(post => post.id !== postId);
    setBlogPosts(updatedPosts);
  };

  // Function to add a comment to a blog post
  const addComment = (postId, comment) => {
    const updatedPosts = blogPosts.map(post => {
      if (post.id === postId) {
        const commentWithId = {
          ...comment,
          id: post.comments.length > 0 ? Math.max(...post.comments.map(c => c.id)) + 1 : 1,
          date: new Date().toISOString()
        };
        return {
          ...post,
          comments: [...post.comments, commentWithId]
        };
      }
      return post;
    });
    setBlogPosts(updatedPosts);
  };

  return (
    <DataContext.Provider value={{
      services, setServices,
      aboutContent, setAboutContent,
      portfolioItems, setPortfolioItems,
      testimonials, setTestimonials,
      teamMembers, setTeamMembers,
      blogPosts, setBlogPosts,
      blogCategories,
      blogTags,
      getBlogPostBySlug,
      getRelatedPosts,
      getPostsByCategory,
      getPostsByTag,
      addBlogPost,
      updateBlogPost,
      deleteBlogPost,
      addComment
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