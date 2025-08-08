// // App.jsx
// import React from 'react'
// import { Routes, Route } from 'react-router-dom'
// import Homepage from './pages/Homepage/Homepage.jsx'
// import AboutUsPage from './pages/Aboutus/AboutUsPage.jsx'
// import OurSupplyProductsPage from './pages/OurSupplyProductsPage/OurSupplyProductsPage.jsx'
// import ServicesPage from './pages/Services/ServicesPage.jsx'
// import ProductDetailPage from './pages/ProductDetailPage/ProductDetailPage.jsx'
// import ScrollToTop from './components/ScrollToTop.jsx'

// const App = () => {
//   return (
//     <>
//       {/* This ensures page scroll resets when navigating */}
//       <ScrollToTop />
//       <Routes>
//         <Route path="/" element={<Homepage />} />
//         <Route path="/about-us" element={<AboutUsPage />} />
//         <Route path="/our-supply-products" element={<OurSupplyProductsPage />} />
//         <Route path="/our-services" element={<ServicesPage />} />
//         <Route path="/products/:id" element={<ProductDetailPage />} />
//       </Routes>
//     </>
//   )
// }

// export default App












// App.jsx
import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage/Homepage.jsx'
import AboutUsPage from './pages/Aboutus/AboutUsPage.jsx'
import OurSupplyProductsPage from './pages/OurSupplyProductsPage/OurSupplyProductsPage.jsx'
import ServicesPage from './pages/Services/ServicesPage.jsx'
import ProductDetailPage from './pages/ProductDetailPage/ProductDetailPage.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import Loader from './components/Loader.jsx'

const App = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500) // Loader will stay for 1.5 seconds
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <Loader />
  }

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/our-supply-products" element={<OurSupplyProductsPage />} />
        <Route path="/our-services" element={<ServicesPage />} />
        <Route path="/products/:id" element={<ProductDetailPage />} />
      </Routes>
    </>
  )
}

export default App
