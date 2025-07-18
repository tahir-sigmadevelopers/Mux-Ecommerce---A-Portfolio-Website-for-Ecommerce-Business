import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminLayout from '../layout/AdminLayout';
import Dashboard from './Dashboard';
import PortfolioManager from './PortfolioManager';
import TestimonialsManager from './TestimonialsManager';
import TeamManager from './TeamManager';
import ServicesManager from './ServicesManager';

const AdminRoutes = () => {
  return (
    <AdminLayout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/portfolio" element={<PortfolioManager />} />
        <Route path="/testimonials" element={<TestimonialsManager />} />
        <Route path="/team" element={<TeamManager />} />
        <Route path="/services" element={<ServicesManager />} />
      </Routes>
    </AdminLayout>
  );
};

export default AdminRoutes; 