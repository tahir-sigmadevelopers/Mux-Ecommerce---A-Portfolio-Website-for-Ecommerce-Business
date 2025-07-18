import React from 'react';
import { FaFolderOpen, FaComments, FaUsers, FaChartLine, FaCogs } from 'react-icons/fa';

const Dashboard = () => {
  // Mock data for the dashboard
  const stats = [
    { id: 1, name: 'Services', value: '5', icon: <FaCogs className="text-purple-500" />, change: 'No change' },
    { id: 2, name: 'Portfolio Items', value: '6', icon: <FaFolderOpen className="text-blue-500" />, change: '+2 this month' },
    { id: 3, name: 'Testimonials', value: '4', icon: <FaComments className="text-green-500" />, change: '+1 this month' },
    { id: 4, name: 'Team Members', value: '3', icon: <FaUsers className="text-amber-500" />, change: 'No change' },
    { id: 5, name: 'Website Visits', value: '1,254', icon: <FaChartLine className="text-indigo-500" />, change: '+18% this week' },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard Overview</h1>
        <p className="mt-1 text-sm text-gray-600">Welcome to your website admin dashboard.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="bg-white overflow-hidden shadow rounded-lg"
          >
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-gray-100 rounded-md p-3">
                  {stat.icon}
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">{stat.name}</dt>
                    <dd>
                      <div className="text-lg font-semibold text-gray-900">{stat.value}</div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-5 py-2">
              <div className="text-sm text-gray-500">{stat.change}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="bg-white shadow rounded-lg mb-8">
        <div className="px-5 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
        </div>
        <div className="p-5">
          <ul className="divide-y divide-gray-200">
            <li className="py-3">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <span className="bg-purple-100 text-purple-600 p-2 rounded-full">
                    <FaCogs />
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    New service added: "PPC Management"
                  </p>
                  <p className="text-sm text-gray-500">
                    1 day ago
                  </p>
                </div>
              </div>
            </li>
            <li className="py-3">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <span className="bg-blue-100 text-blue-600 p-2 rounded-full">
                    <FaFolderOpen />
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    New portfolio item added: "UK Multi-Channel Integration"
                  </p>
                  <p className="text-sm text-gray-500">
                    2 days ago
                  </p>
                </div>
              </div>
            </li>
            <li className="py-3">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <span className="bg-green-100 text-green-600 p-2 rounded-full">
                    <FaComments />
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    New testimonial from "James Wilson"
                  </p>
                  <p className="text-sm text-gray-500">
                    5 days ago
                  </p>
                </div>
              </div>
            </li>
            <li className="py-3">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <span className="bg-amber-100 text-amber-600 p-2 rounded-full">
                    <FaUsers />
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    Team member profile updated: "Sarah Johnson"
                  </p>
                  <p className="text-sm text-gray-500">
                    1 week ago
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white shadow rounded-lg">
        <div className="px-5 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Quick Actions</h3>
        </div>
        <div className="p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <button className="bg-purple-50 hover:bg-purple-100 text-purple-700 py-3 px-4 rounded-lg text-sm font-medium flex items-center justify-center">
            <FaCogs className="mr-2" /> Add New Service
          </button>
          <button className="bg-blue-50 hover:bg-blue-100 text-blue-700 py-3 px-4 rounded-lg text-sm font-medium flex items-center justify-center">
            <FaFolderOpen className="mr-2" /> Add New Portfolio Item
          </button>
          <button className="bg-green-50 hover:bg-green-100 text-green-700 py-3 px-4 rounded-lg text-sm font-medium flex items-center justify-center">
            <FaComments className="mr-2" /> Add New Testimonial
          </button>
          <button className="bg-amber-50 hover:bg-amber-100 text-amber-700 py-3 px-4 rounded-lg text-sm font-medium flex items-center justify-center">
            <FaUsers className="mr-2" /> Add Team Member
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 