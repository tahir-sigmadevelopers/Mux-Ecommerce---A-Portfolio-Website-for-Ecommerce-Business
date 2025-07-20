import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import AdminLayout from '../layout/AdminLayout';
import Dashboard from './Dashboard';
import PortfolioManager from './PortfolioManager';
import TestimonialsManager from './TestimonialsManager';
import TeamManager from './TeamManager';
import ServicesManager from './ServicesManager';
import Login from './Login';

const isAuthenticated = () => localStorage.getItem('isAdminAuthenticated') === 'true';

const RequireAuth = ({ children }) => {
  const location = useLocation();
  if (!isAuthenticated()) {
    return <Navigate to="/admin/login" state={{ from: location }} replace />;
  }
  return children;
};

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/*"
        element={
          <RequireAuth>
            <AdminLayout>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/portfolio" element={<PortfolioManager />} />
                <Route path="/testimonials" element={<TestimonialsManager />} />
                <Route path="/team" element={<TeamManager />} />
                <Route path="/services" element={<ServicesManager />} />
              </Routes>
            </AdminLayout>
          </RequireAuth>
        }
      />
    </Routes>
  );
};

export default AdminRoutes; 