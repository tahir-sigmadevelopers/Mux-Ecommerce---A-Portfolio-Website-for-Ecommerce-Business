import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './components/Home'
import About from './components/About'
import ServicesPage from './components/ServicesPage'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'
import AdminRoutes from './components/admin/AdminRoutes'


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
            </Routes>
          </Layout>
        } />
      </Routes>
    </div>
  )
}

export default App