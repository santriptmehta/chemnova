"use client"

import { useState, useEffect } from "react"
import {
  ArrowLeft,
  Clock,
  FileText,
  Globe,
  Download,
  Share2,
  CheckCircle2,
  Star,
  ChevronRight,
  AlertCircle,
  Beaker,
  Sparkles,
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function ProductDescription({ product, onBack }) {
  // If no product is provided, use a default example product
  const productData = product || {
    name: "Aluminum Chlorohydrate 50% solution",
    cas_number: "12042-91-0",
    description:
      "Aluminum Chlorohydrate 50% Solution is an aqueous solution used predominantly in water treatment processes as a coagulant. It is also used in cosmetic formulations, especially in antiperspirants. This compound has high efficiency in removing impurities and suspended solids from water, and it acts as an essential component in flocculation.",
    industries: ["Industrial Chemicals"],
    categories: ["Inorganic Chemicals"],
    properties: [
      { key: "Appearance", value: "Clear, colorless to pale yellow liquid" },
      { key: "Al2O3 Content", value: "23.0-24.0%" },
      { key: "Specific Gravity", value: "1.32-1.35" },
      { key: "pH (1% solution)", value: "4.0-4.5" },
      { key: "Basicity", value: "83-84%" },
    ],
    applications: [
      { key: "Water Treatment", value: "Used as a coagulant in drinking water and wastewater treatment" },
      { key: "Personal Care", value: "Used in antiperspirants and deodorants" },
      { key: "Paper Industry", value: "Used as a sizing agent and retention aid" },
    ],
    safety: [
      {
        key: "Storage",
        value: "Store in a cool, dry place in tightly closed containers. Keep away from incompatible materials.",
      },
      {
        key: "Handling",
        value:
          "Avoid contact with eyes, skin, and clothing. Use with adequate ventilation. Wear appropriate personal protective equipment.",
      },
      {
        key: "Disposal",
        value: "Dispose of contents/container in accordance with local/regional/national/international regulations.",
      },
    ],
    keyBenefits: [
      "Superior coagulation performance",
      "Minimal impact on pH",
      "Effective across a wide range of water conditions",
      "Regulatory approved for drinking water applications",
    ],
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

  const features = [
    "High Basicity",
    "Effective coagulation and flocculation performance",
    "FDA EU regulated : cosmetic formulations and water treatment applications",
    "Multirole water purification systems : Drinking water and wastewater",
  ]

  const handleFormChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)

      // Reset after showing success message
      setTimeout(() => {
        setIsQuoteFormOpen(false)
        setSubmitSuccess(false)
        setFormData({
          name: "",
          email: "",
          company: "",
          quantity: "",
          message: "",
        })
      }, 3000)
    }, 1500)
  }

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
          {productData.name} {productData.cas_number && `(CAS NO : ${productData.cas_number})`}
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
                <p className="text-gray-700 leading-relaxed">{productData.description}</p>
              </div>

              <div className="mt-8 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-indigo-600 text-white p-3 rounded-full shadow-md">
                    <Beaker className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Industries</h3>
                    <p className="text-gray-600">{productData.industries?.join(", ") || "Industrial Chemicals"}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-indigo-600 text-white p-3 rounded-full shadow-md">
                    <Beaker className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Category</h3>
                    <p className="text-gray-600">{productData.categories?.join(", ") || "Inorganic Chemicals"}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <button className="flex items-center gap-2 text-sm bg-indigo-100 hover:bg-indigo-200 text-indigo-700 px-4 py-2 rounded-lg transition-colors">
                  <Download className="h-4 w-4" />
                  Download SDS
                </button>
                <button className="flex items-center gap-2 text-sm bg-indigo-100 hover:bg-indigo-200 text-indigo-700 px-4 py-2 rounded-lg transition-colors">
                  <Share2 className="h-4 w-4" />
                  Share Product
                </button>
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
              { id: "applications", label: "Applications" },
              { id: "safety", label: "Safety & Handling" },
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
                  <p className="text-gray-700 leading-relaxed">{productData.description}</p>
                  <p className="text-gray-700 leading-relaxed mt-4">
                    {productData.name} is widely used in municipal and industrial water treatment as a primary
                    coagulant. It effectively removes turbidity, color, and organic matter from water supplies. The high
                    basicity formulation provides excellent performance with minimal impact on pH, making it ideal for
                    applications where pH control is critical.
                  </p>

                  <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded-r-lg mt-6">
                    <div className="flex gap-3">
                      <Star className="h-5 w-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                      
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
                    {productData.properties?.map((prop, index) => (
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
                </motion.div>
              )}

              {activeTab === "applications" && (
                <motion.div
                  key="applications"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center gap-2 mb-6">
                    <div className="bg-indigo-100 p-2 rounded-full">
                      <Globe className="h-5 w-5 text-indigo-700" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">Applications</h3>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {productData.applications?.map((app, index) => (
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
                            {app.key}
                          </h4>
                        </div>
                        <p className="text-gray-700">{app.value}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === "safety" && (
                <motion.div
                  key="safety"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <div className="bg-indigo-100 p-2 rounded-full">
                      <AlertCircle className="h-5 w-5 text-indigo-700" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">Safety & Handling</h3>
                  </div>

                  <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
                    <p className="text-amber-800 font-medium">Important Safety Information</p>
                    <p className="text-gray-700 mt-1">
                      Always refer to the Safety Data Sheet (SDS) before handling this product. Proper personal
                      protective equipment should be worn at all times.
                    </p>
                  </div>

                  <div className="space-y-4">
                    {productData.safety?.map((item, index) => (
                      <motion.div
                        key={index}
                        className="bg-gray-50 p-4 rounded-lg border border-gray-100 hover:border-indigo-200 transition-all"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        whileHover={{ y: -2 }}
                      >
                        <h4 className="font-medium text-gray-800 mb-1">{item.key}</h4>
                        <p className="text-gray-700">{item.value}</p>
                      </motion.div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between bg-indigo-50 p-4 rounded-lg mt-4">
                    <div className="flex items-center gap-3">
                      <Download className="h-5 w-5 text-indigo-700" />
                      <span className="font-medium text-gray-800">Need more information?</span>
                    </div>
                    <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors">
                      Download Full SDS
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
