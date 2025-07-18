import React, { useState } from 'react';
import { FaEdit, FaTrash, FaPlus, FaSearch, FaShoppingCart, FaChartLine, FaBoxes, FaSearch as FaSearchIcon, FaAd, FaIcons } from 'react-icons/fa';
import { useData } from '../../context/DataContext';

const ServicesManager = () => {
  const { services, setServices } = useData();
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentService, setCurrentService] = useState({
    id: null,
    icon: '',
    title: '',
    description: '',
    color: 'from-blue-500 to-cyan-400'
  });
  const [isEditing, setIsEditing] = useState(false);

  // Available icons for selection
  const availableIcons = [
    { name: "FaShoppingCart", component: <FaShoppingCart /> },
    { name: "FaChartLine", component: <FaChartLine /> },
    { name: "FaBoxes", component: <FaBoxes /> },
    { name: "FaSearch", component: <FaSearchIcon /> },
    { name: "FaAd", component: <FaAd /> },
  ];

  // Available color gradients for selection
  const availableColors = [
    { name: "Blue to Cyan", value: "from-blue-500 to-cyan-400" },
    { name: "Purple to Pink", value: "from-purple-500 to-pink-400" },
    { name: "Indigo to Blue", value: "from-indigo-500 to-blue-400" },
    { name: "Rose to Orange", value: "from-rose-500 to-orange-400" },
    { name: "Amber to Yellow", value: "from-amber-500 to-yellow-400" },
    { name: "Green to Teal", value: "from-green-500 to-teal-400" },
    { name: "Red to Pink", value: "from-red-500 to-pink-400" },
  ];

  // Filter services based on search term
  const filteredServices = services.filter(service =>
    service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle opening the modal for adding a new service
  const handleAddNew = () => {
    setIsEditing(false);
    setCurrentService({
      id: services.length > 0 ? Math.max(...services.map(service => service.id)) + 1 : 1,
      icon: "FaShoppingCart",
      title: '',
      description: '',
      color: 'from-blue-500 to-cyan-400'
    });
    setIsModalOpen(true);
  };

  // Handle opening the modal for editing an existing service
  const handleEdit = (service) => {
    setIsEditing(true);
    setCurrentService({ ...service });
    setIsModalOpen(true);
  };

  // Handle deleting a service
  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this service?')) {
      setServices(services.filter(service => service.id !== id));
    }
  };

  // Handle input changes in the modal form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentService({ ...currentService, [name]: value });
  };

  // Render the icon component based on icon name
  const renderIcon = (iconName) => {
    const icon = availableIcons.find(icon => icon.name === iconName);
    return icon ? icon.component : <FaIcons />;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      setServices(services.map(service =>
        service.id === currentService.id ? currentService : service
      ));
    } else {
      setServices([...services, currentService]);
    }
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Services Management</h1>
          <p className="mt-1 text-sm text-gray-600">Add, edit, or remove services.</p>
        </div>
        <button
          onClick={handleAddNew}
          className="mt-4 sm:mt-0 inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <FaPlus className="-ml-1 mr-2 h-5 w-5" />
          Add New Service
        </button>
      </div>

      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative rounded-md shadow-sm">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaSearch className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 pr-12 sm:text-sm border-gray-300 rounded-md py-2"
            placeholder="Search services..."
          />
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredServices.length > 0 ? (
          filteredServices.map((service) => (
            <div key={service.id} className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-full bg-gray-100">
                    {renderIcon(service.icon)}
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleEdit(service)}
                      className="inline-flex items-center p-2 border border-transparent rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      <FaEdit className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(service.id)}
                      className="inline-flex items-center p-2 border border-transparent rounded-full shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                    >
                      <FaTrash className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className={`h-1 rounded bg-gradient-to-r ${service.color}`}></div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-10 text-gray-500">
            No services found.
          </div>
        )}
      </div>

      {/* Modal for Add/Edit */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center">
            {/* Backdrop */}
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
            
            {/* Modal position helper */}
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            
            {/* Modal panel */}
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full relative z-[110]">
              <form onSubmit={handleSubmit}>
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                      <h3 className="text-lg leading-6 font-medium text-gray-900">
                        {isEditing ? 'Edit Service' : 'Add New Service'}
                      </h3>
                      <div className="mt-6 space-y-4">
                        <div>
                          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                            Title
                          </label>
                          <input
                            type="text"
                            name="title"
                            id="title"
                            value={currentService.title}
                            onChange={handleInputChange}
                            className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                            Description
                          </label>
                          <textarea
                            id="description"
                            name="description"
                            rows="3"
                            value={currentService.description}
                            onChange={handleInputChange}
                            className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            required
                          ></textarea>
                        </div>
                        <div>
                          <label htmlFor="icon" className="block text-sm font-medium text-gray-700">
                            Icon
                          </label>
                          <div className="mt-1 grid grid-cols-5 gap-2">
                            {availableIcons.map((icon) => (
                              <div
                                key={icon.name}
                                onClick={() => setCurrentService({ ...currentService, icon: icon.name })}
                                className={`flex items-center justify-center p-3 rounded-md cursor-pointer ${
                                  currentService.icon === icon.name
                                    ? 'bg-blue-100 ring-2 ring-blue-500'
                                    : 'bg-gray-100 hover:bg-gray-200'
                                }`}
                              >
                                {icon.component}
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <label htmlFor="color" className="block text-sm font-medium text-gray-700">
                            Color Gradient
                          </label>
                          <select
                            id="color"
                            name="color"
                            value={currentService.color}
                            onChange={handleInputChange}
                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                          >
                            {availableColors.map((color) => (
                              <option key={color.value} value={color.value}>
                                {color.name}
                              </option>
                            ))}
                          </select>
                          <div className={`h-2 rounded mt-2 bg-gradient-to-r ${currentService.color}`}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="submit"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    {isEditing ? 'Update' : 'Create'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServicesManager; 