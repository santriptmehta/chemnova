"use client"

import { Routes, Route } from "react-router-dom"
import "./App.css"
import GlobalBackground from "./component/GlobalBackground.jsx"
import NavBar from "./component/navbar.jsx"
import HeadComponent from "./component/HomePage.jsx"
import Footer from "./component/footer.jsx"
import AboutUs from "./component/AboutUs.jsx"
import Product from "./component/Product.jsx"
import ContactUs from "./component/ContactUs.jsx"
import ProductView from "./component/Product-Discription.jsx"

function App() {
  return (
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
  )
}

export default App
