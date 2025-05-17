import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './index.css'
import App from './App.jsx'

import GlobalBackground from "./component/GlobalBackground.jsx"
import NavBar from "./component/navbar.jsx"
import HeadComponent from "./component/HomePage.jsx"
import Footer from "./component/footer.jsx"
import AboutUs from "./component/AboutUs.jsx"
import Product from "./component/Product.jsx"
import ContactUs from "./component/ContactUs.jsx"
import ProductView from "./component/Product-Discription.jsx"

console.log("App Version:", __APP_VERSION__)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <GlobalBackground>
      <NavBar />
      <Routes>
        <Route path="/" element={<HeadComponent />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/product/:category" element={<Product />} />
        <Route path="/contact" element={<ContactUs/>} />
      </Routes>
      <Footer />
    </GlobalBackground>
    </BrowserRouter>
  </StrictMode>,
)
