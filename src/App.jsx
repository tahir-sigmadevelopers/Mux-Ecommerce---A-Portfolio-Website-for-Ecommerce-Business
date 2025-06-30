import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './components/Home'
import About from './components/About'
import ServicesPage from './components/ServicesPage'
import Contact from './components/Contact'


const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<ServicesPage />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Layout>
    </div>
  )
}

export default App