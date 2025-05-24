"use client"

import { useState, useEffect } from "react"
import {
  ArrowLeft,
  Clock,
  FileText,
  Globe,
  Download,
  CheckCircle2,
  Star,
  ChevronRight,
  AlertCircle,
  Beaker,
  Sparkles,
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import emailjs from '@emailjs/browser';

export default function ProductDescription({ product, onBack }) {
  // If no product is provided, use a default example product
  const productData = product || {
    name: "Aluminum Chlorohydrate 50%",
    cas_no: "12042-91-0",
    cins_no: "",
    molecular_formula: "Al2 (OH)5ClnH2O or Al₂Cl₅OH·2H₂O",
    discription:
      "Aluminum Chlorohydrate 50% Solution is an aqueous solution used predominantly in water treatment processes as a coagulant. It is also used in cosmetic formulations, especially in antiperspirants. This compound has high efficiency in removing impurities and suspended solids from water, and it acts as an essential component in flocculation.",
    typical_properties:
      "Color: Clear to slightly haze; Odor: Odorless; Ph value: 4.0 - 4.4 (30% w/v); Solubility: Soluble in water",
    packing:
      "Available in 600 lb drums and bulk quantities, suitable for both small-scale and industrial applications.",
    food_idustry: "",
    pharmaceutical_industry: "",
    other_industries: "",
  }

  // Extract properties from the product data for the new JSON structure
  const extractProperties = () => {
    const properties = []

    // Add molecular formula if available
    if (productData.molecular_formula) {
      properties.push({
        key: "Molecular Formula",
        value: productData.molecular_formula,
      })
    }

    // Add CAS number if available
    if (productData.cas_no) {
      properties.push({
        key: "CAS Number",
        value: productData.cas_no,
      })
    }

    // Add CINS number if available
    if (productData.cins_no && productData.cins_no.trim() !== "") {
      properties.push({
        key: "CINS Number",
        value: productData.cins_no,
      })
    }

    // Add typical properties if available
    if (productData.typical_properties) {
      // Split by semicolon if it's a string
      if (typeof productData.typical_properties === "string") {
        const propertiesList = productData.typical_properties.split(";").map((prop) => prop.trim())
        propertiesList.forEach((prop) => {
          if (prop.includes(":")) {
            const [key, value] = prop.split(":").map((item) => item.trim())
            properties.push({ key, value })
          } else if (prop.trim() !== "") {
            properties.push({ key: "Property", value: prop })
          }
        })
      }
    }

    return properties
  }

  // Extract applications from the product data
  const extractApplications = () => {
    if (product && product.applications) {
      if (Array.isArray(product.applications)) {
        return product.applications
      } else if (typeof product.applications === "string") {
        // If applications is a string, convert it to our expected format
        return [{ key: "General Application", value: product.applications }]
      }
    }
    return productData.applications
  }

  // Extract safety information from the product data
  const extractSafety = () => {
    if (product && product.safety) {
      if (Array.isArray(product.safety)) {
        return product.safety
      } else if (typeof product.safety === "string") {
        // If safety is a string, convert it to our expected format
        return [{ key: "Safety Information", value: product.safety }]
      }
    }
    return productData.safety
  }

  const extractPacking = () => {
    if (productData.packing && productData.packing.trim() !== "") {
      return [{ key: "Packaging", value: productData.packing }]
    }
    return []
  }

  const extractIndustries = () => {
    const industries = []

    if (productData.food_idustry && productData.food_idustry.trim() !== "") {
      industries.push({ key: "Food Industry", value: productData.food_idustry })
    }

    if (productData.pharmaceutical_industry && productData.pharmaceutical_industry.trim() !== "") {
      industries.push({ key: "Pharmaceutical Industry", value: productData.pharmaceutical_industry })
    }

    if (productData.other_industries && productData.other_industries.trim() !== "") {
      industries.push({ key: "Other Industries", value: productData.other_industries })
    }

    return industries
  }

  const [activeTab, setActiveTab] = useState("description")
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    quantity: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [showTooltip, setShowTooltip] = useState(null)
  const [properties, setProperties] = useState([])
  const [applications, setApplications] = useState([])
  const [safety, setSafety] = useState([])
  const [packing, setPacking] = useState([])
  const [industries, setIndustries] = useState([])

  // Generate features based on product data
  const generateFeatures = () => {
    const features = []

    // Add CAS number as a feature if available
    if (productData.cas_no) {
      features.push(`CAS: ${productData.cas_no}`)
    }

    // Add molecular formula as a feature if available
    if (productData.molecular_formula) {
      features.push("Has Molecular Formula")
    }

    // Add packaging as a feature if available
    if (productData.packing && productData.packing.trim() !== "") {
      features.push("Packaging Available")
    }

    // If we couldn't generate enough features, use some defaults
    if (features.length < 3) {
      features.push("High quality product")
      features.push("Multiple applications")
      features.push("Industry standard specifications")
    }

    return features
  }

  const features = generateFeatures()

  const handleFormChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    emailjs.send(
      'service_gy3iygv',
      'template_z0l9ze5',
      {
        from_name : formData.name,
        from_email : formData.email,
        product_name : productData.name,
        product_casno : (productData.cas_no == "") ? "CAS NO not available" : productData.cas_no,
        company : formData.company,
        quantity : formData.quantity,
        message : formData.message
      },
      'ieS7UQCYWheobj8fc'
    )
    .then((result) =>{
      console.log("Email Sent", result.text);
      setIsSubmitting(false)
      setSubmitSuccess(true)

      setTimeout(() =>{
        setIsQuoteFormOpen(false);
        setSubmitSuccess(false);
        setFormData({
          name : "",
          email : "",
          company : "",
          quantity : "",
          message : "",
        });
      }, 3000);
    })
  }

  // Initialize properties, applications, and safety data
  useEffect(() => {
    setProperties(extractProperties())
    setApplications(extractApplications())
    setSafety(extractSafety())
    setPacking(extractPacking())
    setIndustries(extractIndustries())
  }, [product])

  // Simulate loading state
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 800)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-indigo-600 flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-4 text-white text-lg">Loading product information...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 to-indigo-800">
      <div className="container mx-auto px-4 py-6">
        {/* Back button */}
        <motion.button
          onClick={onBack}
          className="flex items-center text-white mb-4 hover:underline group"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <ArrowLeft className="h-4 w-4 mr-1 group-hover:-translate-x-1 transition-transform" />
          Back to Products
        </motion.button>

        {/* Product Title */}
        <motion.h1
          className="text-white text-2xl md:text-3xl font-bold mb-6"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          {productData.name} {productData.cas_no && `(CAS NO: ${productData.cas_no})`}
        </motion.h1>

        {/* Feature Pills */}
        <div className="flex flex-wrap gap-3 mb-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-indigo-400/80 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg hover:shadow-indigo-500/30 transition-all cursor-default"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.1 + index * 0.1 }}
              whileHover={{ y: -2, backgroundColor: "rgba(129, 140, 248, 0.9)" }}
            >
              {feature}
            </motion.div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Left Column - Product Description */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white p-6 rounded-xl shadow-xl h-full border border-indigo-100">
              <div className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed">{productData.discription}</p>
              </div>

              <div className="mt-8 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-indigo-600 text-white p-3 rounded-full shadow-md">
                    <Beaker className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Industries</h3>
                    <p className="text-gray-600">
                      {product?.industry || productData.industries?.join(", ") || "Industrial Chemicals"}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-indigo-600 text-white p-3 rounded-full shadow-md">
                    <Beaker className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Category</h3>
                    <p className="text-gray-600">
                      {product?.categories
                        ? Array.isArray(product.categories)
                          ? product.categories.join(", ")
                          : product.categories
                        : productData.categories?.join(", ") || "Inorganic Chemicals"}
                    </p>
                  </div>
                </div>

                {product?.sub_categories && (
                  <div className="flex items-center gap-4">
                    <div className="bg-indigo-600 text-white p-3 rounded-full shadow-md">
                      <Beaker className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Sub-Category</h3>
                      <p className="text-gray-600">
                        {Array.isArray(product.sub_categories)
                          ? product.sub_categories.join(", ")
                          : product.sub_categories}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Quote Box */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="bg-indigo-900 text-white p-6 rounded-xl shadow-xl">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Get a Quote</h2>
                <div className="bg-indigo-400 text-indigo-900 px-3 py-1 rounded-full text-sm font-medium flex items-center shadow-md">
                  <Clock className="h-4 w-4 mr-1" />
                  Fast Response
                </div>
              </div>

              <AnimatePresence mode="wait">
                {!isQuoteFormOpen ? (
                  <motion.div
                    key="quote-buttons"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-4"
                  >
                    <button
                      onClick={() => setIsQuoteFormOpen(true)}
                      className="w-full bg-indigo-400 hover:bg-indigo-500 text-white font-medium py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 group"
                    >
                      Request a Quote
                      <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <button className="w-full bg-transparent hover:bg-indigo-800 border border-indigo-400 text-indigo-400 font-medium py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg">
                      Request a Sample
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="quote-form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    {submitSuccess ? (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-green-500/20 border border-green-500 rounded-lg p-4 flex items-start gap-3"
                      >
                        <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <p>
                          Thank you! Your quote request has been submitted successfully. We'll get back to you shortly.
                        </p>
                      </motion.div>
                    ) : (
                      <>
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium mb-1">
                            Your Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleFormChange}
                            required
                            className="w-full bg-indigo-800/50 border border-indigo-700 rounded-lg px-3 py-2 text-white placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            placeholder="John Doe"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium mb-1">
                            Email Address
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleFormChange}
                            required
                            className="w-full bg-indigo-800/50 border border-indigo-700 rounded-lg px-3 py-2 text-white placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            placeholder="your@email.com"
                          />
                        </div>
                        <div>
                          <label htmlFor="company" className="block text-sm font-medium mb-1">
                            Company
                          </label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleFormChange}
                            className="w-full bg-indigo-800/50 border border-indigo-700 rounded-lg px-3 py-2 text-white placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            placeholder="Your Company"
                          />
                        </div>
                        <div>
                          <label htmlFor="quantity" className="block text-sm font-medium mb-1">
                            Estimated Quantity
                          </label>
                          <input
                            type="text"
                            id="quantity"
                            name="quantity"
                            value={formData.quantity}
                            onChange={handleFormChange}
                            className="w-full bg-indigo-800/50 border border-indigo-700 rounded-lg px-3 py-2 text-white placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            placeholder="e.g., 500 kg"
                          />
                        </div>
                        <div>
                          <label htmlFor="message" className="block text-sm font-medium mb-1">
                            Additional Details
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleFormChange}
                            rows={3}
                            className="w-full bg-indigo-800/50 border border-indigo-700 rounded-lg px-3 py-2 text-white placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 resize-none"
                            placeholder="Any specific requirements or questions..."
                          />
                        </div>
                        <div className="flex gap-3">
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`flex-1 bg-indigo-400 hover:bg-indigo-500 text-white font-medium py-2 rounded-lg transition-all duration-300 flex items-center justify-center ${
                              isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                            }`}
                          >
                            {isSubmitting ? (
                              <>
                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                                Processing...
                              </>
                            ) : (
                              "Submit Request"
                            )}
                          </button>
                          <button
                            type="button"
                            onClick={() => setIsQuoteFormOpen(false)}
                            className="px-4 py-2 bg-transparent hover:bg-indigo-800 border border-indigo-700 rounded-lg transition-colors"
                          >
                            Cancel
                          </button>
                        </div>
                      </>
                    )}
                  </motion.form>
                )}
              </AnimatePresence>

              <div className="mt-8">
                <h3 className="font-semibold mb-4">Details add in quote!</h3>

                <div className="space-y-4">
                  {[
                    { icon: FileText, title: "Minimum Order Quantity" },
                    { icon: Clock, title: "Lead Time" },
                    { icon: Globe, title: "Regional Availability" },
                    { icon: FileText, title: "Incoterms" },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-3 group relative"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      onMouseEnter={() => setShowTooltip(index)}
                      onMouseLeave={() => setShowTooltip(null)}
                    >
                      <div className="bg-indigo-800 p-2 rounded-lg group-hover:bg-indigo-400 group-hover:text-indigo-900 transition-colors">
                        <item.icon className="h-5 w-5 text-indigo-400 group-hover:text-indigo-900" />
                      </div>
                      <div>
                        <h4 className="font-medium">{item.title}</h4>
                        <p className="text-indigo-300 text-sm">Included in Quote</p>
                      </div>

                      {showTooltip === index && (
                        <motion.div
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="absolute left-0 -top-12 bg-white text-indigo-900 text-xs p-2 rounded shadow-lg z-10 w-48"
                        >
                          This information will be provided in your personalized quote
                        </motion.div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Product Details Tabs */}
        <motion.div
          className="mt-8 bg-white rounded-xl shadow-xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex flex-wrap border-b">
            {[
              { id: "description", label: "Description" },
              { id: "properties", label: "Properties" },
              { id: "safety", label: "Safety & Handling" },
              { id: "industries", label: "Industries" },
            ].map((tab) => (
              <button
                key={tab.id}
                className={`px-6 py-4 font-medium transition-colors relative ${
                  activeTab === tab.id ? "text-indigo-700" : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600" layoutId="activeTab" />
                )}
              </button>
            ))}
          </div>

          <div className="p-6">
            <AnimatePresence mode="wait">
              {activeTab === "description" && (
                <motion.div
                  key="description"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <div className="bg-indigo-100 p-2 rounded-full">
                      <FileText className="h-5 w-5 text-indigo-700" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">Product Description</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{productData.discription}</p>
                  <p className="text-gray-700 leading-relaxed mt-4">
                    {productData.name} is widely used in industrial applications.
                    {productData.discription
                      ? ""
                      : " The high quality formulation provides excellent performance with minimal impact on surrounding environments, making it ideal for applications where quality and reliability are critical."}
                  </p>

                  <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded-r-lg mt-6">
                    <div className="flex gap-3">
                      <Star className="h-5 w-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700">
                        For detailed specifications and technical information, please request a Technical Data Sheet.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "properties" && (
                <motion.div
                  key="properties"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center gap-2 mb-6">
                    <div className="bg-indigo-100 p-2 rounded-full">
                      <Beaker className="h-5 w-5 text-indigo-700" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">Physical & Chemical Properties</h3>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {properties.map((prop, index) => (
                      <motion.div
                        key={index}
                        className="bg-gray-50 p-4 rounded-lg border border-gray-100 hover:border-indigo-200 hover:shadow-md transition-all group"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        whileHover={{ y: -2 }}
                      >
                        <h4 className="text-indigo-700 font-medium mb-1 group-hover:text-indigo-800 transition-colors">
                          {prop.key}
                        </h4>
                        <p className="text-gray-700">{prop.value}</p>
                      </motion.div>
                    ))}
                  </div>

                  {packing.length > 0 && (
                    <div className="mt-8">
                      <h4 className="text-lg font-semibold text-gray-800 mb-4">Packaging Information</h4>
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        {packing.map((pack, index) => (
                          <p key={index} className="text-gray-700">
                            {pack.value}
                          </p>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              )}


            

              {activeTab === "industries" && (
                <motion.div
                  key="industries"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center gap-2 mb-6">
                    <div className="bg-indigo-100 p-2 rounded-full">
                      <Globe className="h-5 w-5 text-indigo-700" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">Industry Applications</h3>
                  </div>

                  {industries.length > 0 ? (
                    <div className="grid md:grid-cols-2 gap-6">
                      {industries.map((industry, index) => (
                        <motion.div
                          key={index}
                          className="bg-gray-50 p-5 rounded-lg border border-gray-100 hover:border-indigo-200 hover:shadow-md transition-all group"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          whileHover={{ y: -2 }}
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <Sparkles className="h-4 w-4 text-indigo-600" />
                            <h4 className="text-indigo-700 font-medium group-hover:text-indigo-800 transition-colors">
                              {industry.key}
                            </h4>
                          </div>
                          <p className="text-gray-700">{industry.value}</p>
                        </motion.div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-500">No industry-specific information available.</p>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
