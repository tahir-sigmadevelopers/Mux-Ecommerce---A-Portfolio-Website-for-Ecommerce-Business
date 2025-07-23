import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FaPlus, FaEdit, FaTrash, FaSave, FaTimes, FaImage } from 'react-icons/fa';
import { useData } from '../../context/DataContext';

const BlogAdmin = () => {
  const { blogPosts, blogCategories, blogTags, addBlogPost, updateBlogPost, deleteBlogPost } = useData();
  const [posts, setPosts] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentPost, setCurrentPost] = useState({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    coverImage: '',
    categories: [],
    tags: [],
    author: { name: '', image: '', role: '' },
    readTime: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [confirmDelete, setConfirmDelete] = useState(null);
  const navigate = useNavigate();
  const { action, id } = useParams();
  
  // Load posts and check for edit/new actions
  useEffect(() => {
    setPosts(blogPosts);
    
    if (action === 'edit' && id) {
      const postToEdit = blogPosts.find(post => post.id === parseInt(id));
      if (postToEdit) {
        setCurrentPost(postToEdit);
        setIsEditing(true);
      } else {
        navigate('/admin/blog');
      }
    } else if (action === 'new') {
      setIsEditing(true);
      setCurrentPost({
        title: '',
        slug: '',
        excerpt: '',
        content: '',
        coverImage: '',
        categories: [],
        tags: [],
        author: { 
          name: 'John Doe', // Default author
          image: 'https://randomuser.me/api/portraits/men/1.jpg',
          role: 'CEO & Founder'
        },
        readTime: '5 min read'
      });
    }
  }, [blogPosts, action, id, navigate]);
  
  // Generate slug from title
  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^\w\s]/gi, '')
      .replace(/\s+/g, '-');
  };
  
  // Handle title change and auto-generate slug
  const handleTitleChange = (e) => {
    const title = e.target.value;
    setCurrentPost(prev => ({
      ...prev,
      title,
      slug: generateSlug(title)
    }));
  };
  
  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentPost(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  // Handle category selection
  const handleCategoryChange = (e) => {
    const { value, checked } = e.target;
    setCurrentPost(prev => {
      if (checked) {
        return { ...prev, categories: [...prev.categories, value] };
      } else {
        return { ...prev, categories: prev.categories.filter(cat => cat !== value) };
      }
    });
  };
  
  // Handle tags input
  const handleTagsChange = (e) => {
    const tagsString = e.target.value;
    const tagsArray = tagsString.split(',').map(tag => tag.trim().toLowerCase()).filter(Boolean);
    setCurrentPost(prev => ({
      ...prev,
      tags: tagsArray
    }));
  };
  
  // Handle author selection
  const handleAuthorChange = (e) => {
    const authorName = e.target.value;
    // Simplified example - in a real app, you'd fetch author details from a database
    const authorDetails = {
      'John Doe': {
        name: 'John Doe',
        image: 'https://randomuser.me/api/portraits/men/1.jpg',
        role: 'CEO & Founder'
      },
      'Emma Wilson': {
        name: 'Emma Wilson',
        image: 'https://randomuser.me/api/portraits/women/2.jpg',
        role: 'Head of Operations'
      },
      'Alessandro Rossi': {
        name: 'Alessandro Rossi',
        image: 'https://randomuser.me/api/portraits/men/3.jpg',
        role: 'Italian Market Specialist'
      }
    };
    
    setCurrentPost(prev => ({
      ...prev,
      author: authorDetails[authorName] || { name: authorName, image: '', role: '' }
    }));
  };
  
  // Validate form
  const validateForm = () => {
    const errors = {};
    
    if (!currentPost.title.trim()) errors.title = 'Title is required';
    if (!currentPost.slug.trim()) errors.slug = 'Slug is required';
    if (!currentPost.excerpt.trim()) errors.excerpt = 'Excerpt is required';
    if (!currentPost.content.trim()) errors.content = 'Content is required';
    if (!currentPost.coverImage.trim()) errors.coverImage = 'Cover image URL is required';
    if (currentPost.categories.length === 0) errors.categories = 'At least one category is required';
    if (currentPost.tags.length === 0) errors.tags = 'At least one tag is required';
    if (!currentPost.author.name.trim()) errors.author = 'Author is required';
    if (!currentPost.readTime.trim()) errors.readTime = 'Read time is required';
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  
  // Save post
  const handleSave = () => {
    if (!validateForm()) return;
    
    if (currentPost.id) {
      // Update existing post
      updateBlogPost(currentPost);
    } else {
      // Add new post
      addBlogPost(currentPost);
    }
    
    setIsEditing(false);
    navigate('/admin/blog');
  };
  
  // Cancel editing
  const handleCancel = () => {
    setIsEditing(false);
    setFormErrors({});
    navigate('/admin/blog');
  };
  
  // Delete post
  const handleDelete = (postId) => {
    deleteBlogPost(postId);
    setConfirmDelete(null);
  };
  
  // Calculate read time based on content length
  const calculateReadTime = () => {
    const wordCount = currentPost.content.trim().split(/\s+/).length;
    const readTime = Math.ceil(wordCount / 200); // Assuming 200 words per minute reading speed
    setCurrentPost(prev => ({
      ...prev,
      readTime: `${readTime} min read`
    }));
  };
  
  // Format date for display
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };
  
  // If editing, show the edit form
  if (isEditing) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-2xl font-bold">
                {currentPost.id ? 'Edit Post' : 'Create New Post'}
              </h1>
              <div className="flex space-x-4">
                <button
                  onClick={handleSave}
                  className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <FaSave className="mr-2" /> Save
                </button>
                <button
                  onClick={handleCancel}
                  className="flex items-center px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
                >
                  <FaTimes className="mr-2" /> Cancel
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Title *
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={currentPost.title}
                    onChange={handleTitleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      formErrors.title ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {formErrors.title && (
                    <p className="mt-1 text-sm text-red-500">{formErrors.title}</p>
                  )}
                </div>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Slug *
                  </label>
                  <input
                    type="text"
                    name="slug"
                    value={currentPost.slug}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      formErrors.slug ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {formErrors.slug && (
                    <p className="mt-1 text-sm text-red-500">{formErrors.slug}</p>
                  )}
                </div>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Excerpt * (Brief summary of the post)
                  </label>
                  <textarea
                    name="excerpt"
                    value={currentPost.excerpt}
                    onChange={handleInputChange}
                    rows="3"
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      formErrors.excerpt ? 'border-red-500' : 'border-gray-300'
                    }`}
                  ></textarea>
                  {formErrors.excerpt && (
                    <p className="mt-1 text-sm text-red-500">{formErrors.excerpt}</p>
                  )}
                </div>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Cover Image URL *
                  </label>
                  <div className="flex">
                    <input
                      type="text"
                      name="coverImage"
                      value={currentPost.coverImage}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        formErrors.coverImage ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    <div className="bg-gray-100 px-3 py-2 border border-l-0 border-gray-300 rounded-r-lg flex items-center">
                      <FaImage className="text-gray-500" />
                    </div>
                  </div>
                  {formErrors.coverImage && (
                    <p className="mt-1 text-sm text-red-500">{formErrors.coverImage}</p>
                  )}
                  {currentPost.coverImage && (
                    <div className="mt-2">
                      <img 
                        src={currentPost.coverImage} 
                        alt="Cover preview" 
                        className="h-20 object-cover rounded"
                      />
                    </div>
                  )}
                </div>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Categories *
                  </label>
                  <div className="max-h-40 overflow-y-auto p-2 border border-gray-300 rounded-lg">
                    {/* Existing categories */}
                    {blogCategories.map((category, index) => (
                      <div key={index} className="flex items-center mb-2">
                        <input
                          type="checkbox"
                          id={`category-${index}`}
                          value={category}
                          checked={currentPost.categories.includes(category)}
                          onChange={handleCategoryChange}
                          className="mr-2"
                        />
                        <label htmlFor={`category-${index}`}>{category}</label>
                      </div>
                    ))}
                    {/* New category */}
                    <div className="mt-2 pt-2 border-t border-gray-200">
                      <input
                        type="text"
                        placeholder="Add new category"
                        className="w-full px-2 py-1 border border-gray-300 rounded"
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' && e.target.value.trim()) {
                            setCurrentPost(prev => ({
                              ...prev,
                              categories: [...prev.categories, e.target.value.trim()]
                            }));
                            e.target.value = '';
                          }
                        }}
                      />
                    </div>
                  </div>
                  {formErrors.categories && (
                    <p className="mt-1 text-sm text-red-500">{formErrors.categories}</p>
                  )}
                </div>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Tags * (comma separated)
                  </label>
                  <input
                    type="text"
                    name="tags"
                    value={currentPost.tags.join(', ')}
                    onChange={handleTagsChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      formErrors.tags ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {formErrors.tags && (
                    <p className="mt-1 text-sm text-red-500">{formErrors.tags}</p>
                  )}
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Author *
                    </label>
                    <select
                      name="author"
                      value={currentPost.author.name}
                      onChange={handleAuthorChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        formErrors.author ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Select author</option>
                      <option value="John Doe">John Doe</option>
                      <option value="Emma Wilson">Emma Wilson</option>
                      <option value="Alessandro Rossi">Alessandro Rossi</option>
                    </select>
                    {formErrors.author && (
                      <p className="mt-1 text-sm text-red-500">{formErrors.author}</p>
                    )}
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Read Time *
                    </label>
                    <div className="flex">
                      <input
                        type="text"
                        name="readTime"
                        value={currentPost.readTime}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                          formErrors.readTime ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      <button
                        type="button"
                        onClick={calculateReadTime}
                        className="bg-gray-100 px-3 py-2 border border-l-0 border-gray-300 rounded-r-lg text-sm"
                      >
                        Calculate
                      </button>
                    </div>
                    {formErrors.readTime && (
                      <p className="mt-1 text-sm text-red-500">{formErrors.readTime}</p>
                    )}
                  </div>
                </div>
              </div>
              
              <div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Content * (HTML allowed)
                  </label>
                  <textarea
                    name="content"
                    value={currentPost.content}
                    onChange={handleInputChange}
                    rows="25"
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono text-sm ${
                      formErrors.content ? 'border-red-500' : 'border-gray-300'
                    }`}
                  ></textarea>
                  {formErrors.content && (
                    <p className="mt-1 text-sm text-red-500">{formErrors.content}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  // Show the list of posts
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold">Blog Management</h1>
            <button
              onClick={() => navigate('/admin/blog/new')}
              className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <FaPlus className="mr-2" /> New Post
            </button>
          </div>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Title
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Author
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Categories
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Published
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {posts.map(post => (
                  <tr key={post.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-10 w-10 flex-shrink-0">
                          <img className="h-10 w-10 rounded object-cover" src={post.coverImage} alt="" />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{post.title}</div>
                          <div className="text-sm text-gray-500">{post.slug}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{post.author.name}</div>
                      <div className="text-sm text-gray-500">{post.author.role}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex flex-wrap gap-1">
                        {post.categories.map((category, index) => (
                          <span key={index} className="px-2 py-0.5 text-xs rounded-full bg-blue-100 text-blue-800">
                            {category}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {formatDate(post.publishedDate)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex justify-end space-x-2">
                        <button
                          onClick={() => navigate(`/admin/blog/edit/${post.id}`)}
                          className="text-blue-600 hover:text-blue-900"
                        >
                          <FaEdit />
                        </button>
                        <button
                          onClick={() => setConfirmDelete(post.id)}
                          className="text-red-600 hover:text-red-900"
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
      {/* Confirmation modal */}
      {confirmDelete && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md mx-4">
            <h3 className="text-lg font-bold mb-4">Confirm Deletion</h3>
            <p className="mb-6 text-gray-700">
              Are you sure you want to delete this post? This action cannot be undone.
            </p>
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setConfirmDelete(null)}
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDelete(confirmDelete)}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogAdmin; 