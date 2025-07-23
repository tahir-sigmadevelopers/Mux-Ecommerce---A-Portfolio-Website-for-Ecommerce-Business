import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  FaTachometerAlt, 
  FaFolderOpen, 
  FaComments, 
  FaUsers, 
  FaBars, 
  FaTimes,
  FaSignOutAlt,
  FaCogs,
  FaBlog
} from 'react-icons/fa';

const AdminLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { name: 'Dashboard', path: '/admin', icon: <FaTachometerAlt /> },
    { name: 'Services', path: '/admin/services', icon: <FaCogs /> },
    { name: 'Portfolio', path: '/admin/portfolio', icon: <FaFolderOpen /> },
    { name: 'Testimonials', path: '/admin/testimonials', icon: <FaComments /> },
    { name: 'Team', path: '/admin/team', icon: <FaUsers /> },
    { name: 'Blog', path: '/admin/blog', icon: <FaBlog /> },
  ];

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('isAdminAuthenticated');
    navigate('/admin/login');
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div 
        className={`bg-gray-800 text-white fixed md:static inset-y-0 left-0 z-30 w-64 transition-transform duration-300 transform ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        } md:w-64 md:flex-shrink-0`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <Link to="/admin" className="flex items-center">
            <img 
              src="/logo.png" 
              alt="Kesefnow Logo" 
              className="h-8 mr-2" 
            />
            <span className="text-xl font-bold text-white">Admin</span>
          </Link>
          <button 
            className="md:hidden text-white focus:outline-none" 
            onClick={toggleSidebar}
          >
            <FaTimes />
          </button>
        </div>
        <nav className="mt-5 px-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`group flex items-center px-4 py-3 text-sm font-medium rounded-md mb-1 ${
                (location.pathname === item.path || location.pathname.startsWith(item.path + '/'))
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              <span className="mr-3 h-4 w-4">{item.icon}</span>
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="absolute bottom-0 w-full p-4 border-t border-gray-700">
          <button
            onClick={handleLogout}
            className="flex items-center px-4 py-3 text-sm font-medium rounded-md text-gray-300 hover:bg-gray-700 hover:text-white w-full"
          >
            <span className="mr-3 h-4 w-4"><FaSignOutAlt /></span>
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header */}
        <header className="bg-white shadow-sm z-10">
          <div className="px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <button
              className="md:hidden text-gray-500 focus:outline-none"
              onClick={toggleSidebar}
            >
              <FaBars />
            </button>
            <div className="flex items-center">
              <img 
                src="/logo.png" 
                alt="Kesefnow Logo" 
                className="h-6 mr-2 md:hidden" 
              />
              <h1 className="text-lg font-semibold text-gray-900">
                Admin Dashboard
              </h1>
            </div>
            <div></div> {/* Placeholder for right side content */}
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto bg-gray-100 p-4 sm:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout; 