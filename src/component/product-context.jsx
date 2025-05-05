"use client"
import { createContext, useContext, useState } from "react"
const ProductContext = createContext()

export function ProductProvider({ children }) {
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [showProductDetail, setShowProductDetail] = useState(false)

  const viewProductDetail = (product) => {
    setSelectedProduct(product)
    setShowProductDetail(true)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }
  const goBackToListing = () => {
    setShowProductDetail(false)
  }
  return (
    <ProductContext.Provider
      value={{
        selectedProduct,
        showProductDetail,
        viewProductDetail,
        goBackToListing,
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}
export function useProductContext() {
  return useContext(ProductContext)
}
