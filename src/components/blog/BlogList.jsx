import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaTag, FaClock, FaSearch } from 'react-icons/fa';
import { useData } from '../../context/DataContext';
import SEO from '../SEO';
import ImageWithSeo from '../ui/ImageWithSeo';

const BlogList = () => {
  const { blogPosts, blogCategories, blogTags } = useData();
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedTag, setSelectedTag] = useState('');
  
  // Get filter parameters from URL
  useEffect(() => {
    const category = searchParams.get('category');
    const tag = searchParams.get('tag');
    const search = searchParams.get('search');
    
    if (category) setSelectedCategory(category);
    if (tag) setSelectedTag(tag);
    if (search) setSearchTerm(search);
  }, [searchParams]);
  
  // Filter posts based on search term, category, and tag
  useEffect(() => {
    let filtered = [...blogPosts];
    
    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.content.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Filter by category
    if (selectedCategory) {
      filtered = filtered.filter(post => 
        post.categories.includes(selectedCategory)
      );
    }
    
    // Filter by tag
    if (selectedTag) {
      filtered = filtered.filter(post => 
        post.tags.includes(selectedTag)
      );
    }
    
    // Sort by published date (newest first)
    filtered.sort((a, b) => new Date(b.publishedDate) - new Date(a.publishedDate));
    
    setFilteredPosts(filtered);
  }, [blogPosts, searchTerm, selectedCategory, selectedTag]);
  
  // Handle search form submission
  const handleSearch = (e) => {
    e.preventDefault();
    updateFilters({ search: searchTerm });
  };
  
  // Update URL with filters
  const updateFilters = (newFilters) => {
    const params = new URLSearchParams(searchParams);
    
    // Update or remove each filter
    Object.entries(newFilters).forEach(([key, value]) => {
      if (value) {
        params.set(key, value);
      } else {
        params.delete(key);
      }
    });
    
    setSearchParams(params);
  };
  
  // Handle category selection
  const handleCategorySelect = (category) => {
    if (selectedCategory === category) {
      setSelectedCategory('');
      updateFilters({ category: '' });
    } else {
      setSelectedCategory(category);
      updateFilters({ category });
    }
  };
  
  // Handle tag selection
  const handleTagSelect = (tag) => {
    if (selectedTag === tag) {
      setSelectedTag('');
      updateFilters({ tag: '' });
    } else {
      setSelectedTag(tag);
      updateFilters({ tag });
    }
  };
  
  // Clear all filters
  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('');
    setSelectedTag('');
    setSearchParams({});
  };
  
  // Format date for display
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };
  
  // Generate structured data for blog list
  const generateBlogListingSchema = () => {
    const itemListElements = filteredPosts.map((post, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "BlogPosting",
        "headline": post.title,
        "description": post.excerpt,
        "author": {
          "@type": "Person",
          "name": post.author.name
        },
        "datePublished": post.publishedDate,
        "dateModified": post.modifiedDate,
        "image": post.coverImage,
        "url": `https://kesefnow.com/blog/${post.slug}`
      }
    }));
    
    return {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "itemListElement": itemListElements
    };
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <SEO 
        title="Blog - Kesefnow | E-commerce Insights and Strategies"
        description="Explore our blog for expert insights on e-commerce, marketplace strategies, and cross-border selling in UK, German, and Italian markets."
        keywords="e-commerce blog, marketplace strategies, amazon selling, ebay dropshipping, european markets"
        ogType="blog"
        ogImage="/blog-og-image.jpg"
      >
        <script type="application/ld+json">
          {JSON.stringify(generateBlogListingSchema())}
        </script>
      </SEO>
      
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Blog</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert insights, strategies, and guides for e-commerce success in European markets
          </p>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main content */}
          <div className="lg:w-2/3">
            {/* Search results information */}
            {(searchTerm || selectedCategory || selectedTag) && (
              <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-lg font-medium">
                      {filteredPosts.length} {filteredPosts.length === 1 ? 'result' : 'results'} found
                      {selectedCategory && <span> in <span className="font-semibold">{selectedCategory}</span></span>}
                      {selectedTag && <span> tagged with <span className="font-semibold">#{selectedTag}</span></span>}
                      {searchTerm && <span> for <span className="font-semibold">"{searchTerm}"</span></span>}
                    </h2>
                  </div>
                  <button 
                    onClick={clearFilters}
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Clear filters
                  </button>
                </div>
              </div>
            )}
            
            {/* Blog posts */}
            {filteredPosts.length > 0 ? (
              <div className="space-y-8">
                {filteredPosts.map((post) => (
                  <motion.article 
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                  >
                    <Link to={`/blog/${post.slug}`} className="block">
                      <div className="h-60 overflow-hidden">
                        <ImageWithSeo
                          src={post.coverImage}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                    </Link>
                    
                    <div className="p-6">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {post.categories.map((category, index) => (
                          <button
                            key={index}
                            onClick={() => handleCategorySelect(category)}
                            className={`text-xs px-3 py-1 rounded-full ${
                              selectedCategory === category
                                ? 'bg-blue-600 text-white'
                                : 'bg-blue-100 text-blue-800 hover:bg-blue-200'
                            }`}
                          >
                            {category}
                          </button>
                        ))}
                      </div>
                      
                      <Link to={`/blog/${post.slug}`} className="block">
                        <h2 className="text-2xl font-bold mb-3 hover:text-blue-600 transition-colors">
                          {post.title}
                        </h2>
                      </Link>
                      
                      <p className="text-gray-600 mb-4">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center text-sm text-gray-500 mb-4">
                        <FaCalendarAlt className="mr-1" />
                        <span className="mr-4">{formatDate(post.publishedDate)}</span>
                        <FaClock className="mr-1" />
                        <span>{post.readTime}</span>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <img 
                            src={post.author.image} 
                            alt={post.author.name} 
                            className="w-10 h-10 rounded-full mr-3"
                          />
                          <div>
                            <p className="font-medium">{post.author.name}</p>
                            <p className="text-sm text-gray-500">{post.author.role}</p>
                          </div>
                        </div>
                        
                        <Link 
                          to={`/blog/${post.slug}`}
                          className="text-blue-600 hover:text-blue-800 font-medium"
                        >
                          Read more →
                        </Link>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            ) : (
              <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                <h3 className="text-xl font-medium mb-2">No posts found</h3>
                <p className="text-gray-600 mb-4">
                  Try adjusting your search or filter criteria.
                </p>
                <button
                  onClick={clearFilters}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
          
          {/* Sidebar */}
          <div className="lg:w-1/3 space-y-8">
            {/* Search */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-4">Search</h3>
              <form onSubmit={handleSearch}>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search blog posts..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button
                    type="submit"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-blue-600"
                  >
                    <FaSearch />
                  </button>
                </div>
              </form>
            </div>
            
            {/* Categories */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-4">Categories</h3>
              <div className="space-y-2">
                {blogCategories.map((category, index) => (
                  <button
                    key={index}
                    onClick={() => handleCategorySelect(category)}
                    className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white'
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Tags */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {blogTags.map((tag, index) => (
                  <button
                    key={index}
                    onClick={() => handleTagSelect(tag)}
                    className={`flex items-center px-3 py-1 rounded-full text-sm ${
                      selectedTag === tag
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                    }`}
                  >
                    <FaTag className="mr-1 text-xs" />
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogList; 