"use client"

import { useState, useEffect } from "react"
import { ChevronDown, ChevronUp, Search, ChevronLeft, ChevronRight } from "lucide-react"
import ProductCard from "./Product-CardView.jsx"
import ProductDescription from "./Product-Discription.jsx"
import { ProductProvider, useProductContext } from "./product-context"
import IndustrialData from "../data/Transformed_IndustrialChemicals.json"
import FoodAndFeedData from "../data/Transformed_FoodFeedAddatives.json"
import PharmIntermediates from "../data/Pharm_Intermediates.json"
import Beauty from "../data/beauty.json"
import OtherTradingChemical from "../data/other_Trading_Chemicals.json"
import ConstructionChemical from "../data/Construction_Chemical.json"
export default function ProductListing() {
  return (
    <ProductProvider>
      <ProductListingContent />
    </ProductProvider>
  )
}

function ProductListingContent() {
  const { showProductDetail, selectedProduct, goBackToListing } = useProductContext()

  const [expandedAccordions, setExpandedAccordions] = useState({
    industry: true,
  })

  const [products, setProducts] = useState([])
  const [allProducts, setAllProducts] = useState([])
  const [industries, setIndustries] = useState([])
  const [categories, setCategories] = useState([])
  const [subCategories, setSubCategories] = useState([])
  const [selectedIndustries, setSelectedIndustries] = useState([])
  const [selectedCategories, setSelectedCategories] = useState([])
  const [selectedSubCategories] = useState([])
  const [searchQuery, setSearchQuery] = useState("")
  const [pageTitle, setPageTitle] = useState("Our Products")

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1)
  const productsPerPage = 21

  const DATA_SOURCES = {
    "Industrial Chemicals": {
      data: IndustrialData,
    },
    "Food and Feed Additives": {
      data: FoodAndFeedData,
    },
    "Pharm and Intermediates": {
      data: PharmIntermediates,
    },
    "Beauty and Personal Care" : {
      data : Beauty,
    },
    "Other Trading Chemicals" : {
      data : OtherTradingChemical
    },
    "Construction Chemicals" :{
      data : ConstructionChemical
    },
    // Add other data sources here as needed
  }

  useEffect(() => {
    // Reset states when component mounts
    setCurrentPage(1)
    loadAllProducts()
  }, [])

  const loadAllProducts = () => {
    let combinedProducts = []
    const allIndustries = []
    const allCategories = []
    const allSubCategories = []

    // Process each data source
    Object.keys(DATA_SOURCES).forEach((industryName) => {
      const { data } = DATA_SOURCES[industryName]

      if (data && Array.isArray(data)) {
        try {
          // Add industry to each product for filtering
          const industryProducts = data.map((product) => {
            return {
              ...product,
              industry: industryName,
            }
          })

          combinedProducts = [...combinedProducts, ...industryProducts]
          if (!allIndustries.includes(industryName)) {
            allIndustries.push(industryName)
          }

          // Collect unique categories and sub-categories
          data.forEach((product) => {
            if (product.categories && Array.isArray(product.categories)) {
              product.categories.forEach((category) => {
                if (!allCategories.includes(category)) {
                  allCategories.push(category)
                }
              })
            }

            if (product.sub_categories && Array.isArray(product.sub_categories)) {
              product.sub_categories.forEach((subCategory) => {
                if (!allSubCategories.includes(subCategory)) {
                  allSubCategories.push(subCategory)
                }
              })
            }
          })
        } catch (error) {
          console.error(`Error processing data for ${industryName}:`, error)
        }
      }
    })

    // Update state with all data
    setAllProducts(combinedProducts)
    setProducts(combinedProducts)
    setIndustries(allIndustries)
    setCategories(allCategories)
    setSubCategories(allSubCategories)
  }

  const toggleAccordion = (accordion) => {
    setExpandedAccordions({
      ...expandedAccordions,
      [accordion]: !expandedAccordions[accordion],
    })
  }

  const handleIndustryChange = (industry) => {
    let updatedIndustries

    if (selectedIndustries.includes(industry)) {
      updatedIndustries = selectedIndustries.filter((item) => item !== industry)
    } else {
      updatedIndustries = [...selectedIndustries, industry]
    }

    setSelectedIndustries(updatedIndustries)
    setCurrentPage(1)
  }

  const handleSelectAllIndustries = (isSelected) => {
    if (isSelected) {
      setSelectedIndustries(industries)
    } else {
      setSelectedIndustries([])
    }
    setCurrentPage(1)
  }

  const filteredProducts = allProducts.filter((product) => {
    const matchesIndustry =
      selectedIndustries.length === 0 || (product.industry && selectedIndustries.includes(product.industry))

    const matchesCategory =
      selectedCategories.length === 0 ||
      (product.categories && product.categories.some((cat) => selectedCategories.includes(cat)))

    const matchesSubCategory =
      selectedSubCategories.length === 0 ||
      (product.sub_categories && product.sub_categories.some((subCat) => selectedSubCategories.includes(subCat)))

    const matchesSearch =
      searchQuery === "" ||
      (product.name && product.name.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (product.cas_number && product.cas_number.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (product.description && product.description.toLowerCase().includes(searchQuery.toLowerCase()))

    return matchesIndustry && matchesCategory && matchesSubCategory && matchesSearch
  })

  //products for pagination
  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct)
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage)

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }
  const pageNumbers = []
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i)
  }
  if (showProductDetail && selectedProduct) {
    return <ProductDescription product={selectedProduct} onBack={goBackToListing} />
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <h1 className="text-3xl font-bold text-center mb-6">{pageTitle}</h1>

      {/* Product Categories Title Bar */}
      <div className="p-4 rounded-lg  mb-6">
        <div className="flex flex-wrap justify-center gap-2 md:gap-4">
          {industries.map((industry) => (
            <div
              key={industry}
              className={`px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition-all ${
                selectedIndustries.includes(industry)
                  ? "bg-blue-900 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
              }`}
              onClick={() => handleIndustryChange(industry)}
            >
              {industry}
            </div>
          ))}
        </div>

        {selectedIndustries.length > 0 && (
          <div className="mt-3 text-center text-sm text-gray-600">
            <p>Showing products from: {selectedIndustries.join(", ")}</p>
          </div>
        )}
      </div>

      {/* Search Bar */}
      <div className="relative mb-8 max-w-3xl mx-auto">
        <input
          type="text"
          placeholder="Enter CAS Number, Product name"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value)
            setCurrentPage(1) // Reset to first page when searching
          }}
        />
        <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
          <Search className="h-5 w-5 text-gray-500" />
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Left Sidebar - Filters */}
        <div className="w-full md:w-64 shrink-0">
          <h2 className="text-xl font-bold mb-4">Filters</h2>

          {/* Industry Accordion */}
          <div className="mb-4 border-b pb-2">
            <button
              className="flex justify-between items-center w-full text-left font-semibold py-2"
              onClick={() => toggleAccordion("industry")}
            >
              <span>Industry</span>
              {expandedAccordions.industry ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
            </button>

            {expandedAccordions.industry && (
              <div className="py-2 space-y-2">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="rounded"
                    checked={selectedIndustries.length === industries.length}
                    onChange={(e) => handleSelectAllIndustries(e.target.checked)}
                  />
                  <span>Select All</span>
                </label>

                {industries.map((industry) => (
                  <label key={industry} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="rounded"
                      checked={selectedIndustries.includes(industry)}
                      onChange={() => handleIndustryChange(industry)}
                    />
                    <span>{industry}</span>
                  </label>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right Side - Product Cards */}
        <div className="flex-1">
          {/* Product count and pagination info */}
          {filteredProducts.length > 0 && (
            <div className="mb-4 flex justify-between items-center">
              <p className="text-gray-600">
                Showing {indexOfFirstProduct + 1}-{Math.min(indexOfLastProduct, filteredProducts.length)} of{" "}
                {filteredProducts.length} products
              </p>
            </div>
          )}

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentProducts.length > 0 ? (
              currentProducts.map((product, index) => <ProductCard key={product.id || index} product={product} />)
            ) : (
              <div className="col-span-full text-center py-10">
                <p className="text-lg text-gray-500">No products found matching your criteria.</p>
              </div>
            )}
          </div>

          {/* Pagination */}
          {filteredProducts.length > 0 && totalPages > 1 && (
            <div className="mt-8 flex justify-center">
              <nav className="flex items-center gap-1">
                <button
                  onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className={`p-2 rounded-md ${currentPage === 1 ? "text-gray-400 cursor-not-allowed" : "text-blue-900 hover:bg-blue-100"}`}
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>

                {pageNumbers.map((number) => (
                  <button
                    key={number}
                    onClick={() => handlePageChange(number)}
                    className={`px-3 py-1 rounded-md ${
                      currentPage === number ? "bg-blue-900 text-white" : "text-blue-900 hover:bg-blue-100"
                    }`}
                  >
                    {number}
                  </button>
                ))}

                <button
                  onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className={`p-2 rounded-md ${currentPage === totalPages ? "text-gray-400 cursor-not-allowed" : "text-blue-900 hover:bg-blue-100"}`}
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </nav>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
