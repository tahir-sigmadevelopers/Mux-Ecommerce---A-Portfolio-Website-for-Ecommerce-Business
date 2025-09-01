import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './components/Home'
import About from './components/About'
import ServicesPage from './components/ServicesPage'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'
import BlogList from './components/blog/BlogList'
import BlogPost from './components/blog/BlogPost'
import AdminRoutes from './components/admin/AdminRoutes'
import WhatWeDo from './components/partner/WhatWeDo'
import BecomePartner from './components/partner/BecomePartner'
import LeadGeneration from './components/partner/LeadGeneration'


const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Routes>
        {/* Admin Routes */}
        <Route path="/admin/*" element={<AdminRoutes />} />
        
        {/* Public Routes */}
        <Route path="/*" element={
          <Layout>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/services' element={<ServicesPage />} />
              <Route path='/portfolio' element={<Portfolio />} />
              <Route path='/contact' element={<Contact />} />
              
              {/* Blog Routes */}
              <Route path='/blog' element={<BlogList />} />
              <Route path='/blog/:slug' element={<BlogPost />} />
              
              {/* Partner Routes */}
              <Route path='/partner/what-we-do' element={<WhatWeDo />} />
              <Route path='/partner/become-partner' element={<BecomePartner />} />
              <Route path='/partner/lead-generation' element={<LeadGeneration />} />
            </Routes>
          </Layout>
        } />
      </Routes>
    </div>
  )
}

export default App