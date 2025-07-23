import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaClock, FaTag, FaShare, FaFacebook, FaTwitter, FaLinkedin, FaUser, FaComment } from 'react-icons/fa';
import { useData } from '../../context/DataContext';
import SEO from '../SEO';
import ImageWithSeo from '../ui/ImageWithSeo';

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { getBlogPostBySlug, getRelatedPosts, addComment } = useData();
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [comment, setComment] = useState({ name: '', email: '', content: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [commentError, setCommentError] = useState('');
  const [commentSuccess, setCommentSuccess] = useState('');
  
  // Load post and related posts
  useEffect(() => {
    const foundPost = getBlogPostBySlug(slug);
    
    if (foundPost) {
      setPost(foundPost);
      setRelatedPosts(getRelatedPosts(foundPost.id, 3));
    } else {
      // Redirect to blog list if post not found
      navigate('/blog');
    }
  }, [slug, getBlogPostBySlug, getRelatedPosts, navigate]);
  
  // Format date for display
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };
  
  // Handle comment form submission
  const handleCommentSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setCommentError('');
    setCommentSuccess('');
    
    // Validate comment
    if (!comment.name.trim() || !comment.email.trim() || !comment.content.trim()) {
      setCommentError('All fields are required.');
      setIsSubmitting(false);
      return;
    }
    
    // Add comment to post
    try {
      addComment(post.id, comment);
      setComment({ name: '', email: '', content: '' });
      setCommentSuccess('Your comment has been submitted and is awaiting moderation.');
      
      // Update post data
      const updatedPost = getBlogPostBySlug(slug);
      setPost(updatedPost);
    } catch (error) {
      setCommentError('There was an error submitting your comment. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Handle comment input changes
  const handleCommentChange = (e) => {
    const { name, value } = e.target;
    setComment(prev => ({ ...prev, [name]: value }));
  };
  
  // Generate structured data for blog post
  const generateBlogPostSchema = () => {
    if (!post) return null;
    
    return {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "image": post.coverImage,
      "author": {
        "@type": "Person",
        "name": post.author.name
      },
      "publisher": {
        "@type": "Organization",
        "name": "Kesefnow",
        "logo": {
          "@type": "ImageObject",
          "url": "https://kesefnow.com/logo.png"
        }
      },
      "datePublished": post.publishedDate,
      "dateModified": post.modifiedDate,
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://kesefnow.com/blog/${post.slug}`
      },
      "keywords": post.tags.join(", ")
    };
  };
  
  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <SEO 
        title={`${post.title} - Kesefnow Blog`}
        description={post.excerpt}
        keywords={post.tags.join(', ')}
        ogType="article"
        ogImage={post.coverImage}
        publishedTime={post.publishedDate}
        modifiedTime={post.modifiedDate}
        author={post.author.name}
      >
        <script type="application/ld+json">
          {JSON.stringify(generateBlogPostSchema())}
        </script>
      </SEO>
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumbs */}
          <nav className="flex mb-8 text-sm">
            <Link to="/" className="text-gray-500 hover:text-blue-600">Home</Link>
            <span className="mx-2 text-gray-500">/</span>
            <Link to="/blog" className="text-gray-500 hover:text-blue-600">Blog</Link>
            <span className="mx-2 text-gray-500">/</span>
            <span className="text-gray-900">{post.title}</span>
          </nav>
          
          {/* Post header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="flex flex-wrap gap-2 mb-4">
              {post.categories.map((category, index) => (
                <Link 
                  key={index}
                  to={`/blog?category=${category}`}
                  className="text-sm px-3 py-1 rounded-full bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors"
                >
                  {category}
                </Link>
              ))}
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{post.title}</h1>
            
            <div className="flex items-center mb-6">
              <img 
                src={post.author.image} 
                alt={post.author.name} 
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <p className="font-medium">{post.author.name}</p>
                <p className="text-sm text-gray-500">{post.author.role}</p>
              </div>
            </div>
            
            <div className="flex flex-wrap items-center text-sm text-gray-500 mb-6">
              <div className="flex items-center mr-6">
                <FaCalendarAlt className="mr-2" />
                <span>{formatDate(post.publishedDate)}</span>
              </div>
              <div className="flex items-center mr-6">
                <FaClock className="mr-2" />
                <span>{post.readTime}</span>
              </div>
              <div className="flex items-center">
                <FaComment className="mr-2" />
                <span>{post.comments.length} comments</span>
              </div>
            </div>
          </motion.div>
          
          {/* Featured image */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-10 rounded-xl overflow-hidden shadow-lg"
          >
            <ImageWithSeo
              src={post.coverImage}
              alt={post.title}
              className="w-full h-auto"
              structuredData={{
                "caption": post.title,
                "contentLocation": "Kesefnow Blog"
              }}
            />
          </motion.div>
          
          {/* Post content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="prose prose-lg max-w-none mb-12"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          {/* Tags */}
          <div className="flex flex-wrap items-center gap-2 mb-10 pb-10 border-b border-gray-200">
            <span className="font-medium">Tags:</span>
            {post.tags.map((tag, index) => (
              <Link 
                key={index}
                to={`/blog?tag=${tag}`}
                className="flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
              >
                <FaTag className="mr-1 text-xs" />
                {tag}
              </Link>
            ))}
          </div>
          
          {/* Share buttons */}
          <div className="mb-12">
            <h3 className="text-lg font-bold mb-4 flex items-center">
              <FaShare className="mr-2" /> Share this post
            </h3>
            <div className="flex gap-3">
              <a 
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                aria-label="Share on Facebook"
              >
                <FaFacebook />
              </a>
              <a 
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(post.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-400 text-white hover:bg-blue-500 transition-colors"
                aria-label="Share on Twitter"
              >
                <FaTwitter />
              </a>
              <a 
                href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(post.title)}&summary=${encodeURIComponent(post.excerpt)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-800 text-white hover:bg-blue-900 transition-colors"
                aria-label="Share on LinkedIn"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
          
          {/* Comments section */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6">Comments ({post.comments.length})</h3>
            
            {post.comments.length > 0 ? (
              <div className="space-y-6 mb-10">
                {post.comments.map((comment) => (
                  <div key={comment.id} className="bg-white p-6 rounded-xl shadow-sm">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3">
                        <FaUser />
                      </div>
                      <div>
                        <p className="font-medium">{comment.name}</p>
                        <p className="text-sm text-gray-500">{formatDate(comment.date)}</p>
                      </div>
                    </div>
                    <p className="text-gray-700">{comment.content}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-600 mb-8">No comments yet. Be the first to comment!</p>
            )}
            
            {/* Comment form */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h4 className="text-xl font-bold mb-4">Leave a comment</h4>
              
              {commentSuccess ? (
                <div className="bg-green-100 text-green-700 p-4 rounded-lg mb-6">
                  {commentSuccess}
                </div>
              ) : (
                <form onSubmit={handleCommentSubmit}>
                  {commentError && (
                    <div className="bg-red-100 text-red-700 p-4 rounded-lg mb-6">
                      {commentError}
                    </div>
                  )}
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={comment.name}
                        onChange={handleCommentChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email * (will not be published)
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={comment.email}
                        onChange={handleCommentChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
                      Comment *
                    </label>
                    <textarea
                      id="content"
                      name="content"
                      value={comment.content}
                      onChange={handleCommentChange}
                      rows="4"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
                  >
                    {isSubmitting ? 'Submitting...' : 'Post Comment'}
                  </button>
                </form>
              )}
            </div>
          </div>
          
          {/* Related posts */}
          {relatedPosts.length > 0 && (
            <div>
              <h3 className="text-2xl font-bold mb-6">Related Posts</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link 
                    key={relatedPost.id} 
                    to={`/blog/${relatedPost.slug}`}
                    className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="h-40 overflow-hidden">
                      <img 
                        src={relatedPost.coverImage} 
                        alt={relatedPost.title} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-bold mb-2 hover:text-blue-600 transition-colors">
                        {relatedPost.title}
                      </h4>
                      <div className="flex items-center text-xs text-gray-500">
                        <FaCalendarAlt className="mr-1" />
                        <span>{formatDate(relatedPost.publishedDate)}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPost; 