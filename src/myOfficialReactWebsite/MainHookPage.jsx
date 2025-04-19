import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Courosel from '../components/Courosel'
import Services from '../components/Services'
// import Products from '../components/Products'
import Freshoffers from '../components/Freshoffers'
import ShoppingVIew from '../components/ShoppingVIew'

export default function MainHookPage() {
  return (
    <>
    <div style={{
        minHeight: '100vh'
      }}>
      <Router>
        <Header />
        <Navbar />
        <Routes>
          <Route path='/' element={<><Courosel /></>} />
          <Route path='/shopproducts' element={<ShoppingVIew />} />
          <Route path='/services' element={<Services style={{margin:'auto'}}/>} />
        </Routes>
      </Router>
    </div>
    </>
  )
}
