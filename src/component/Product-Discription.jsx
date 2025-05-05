"use client"

import { useState } from "react"
import { ArrowLeft, Clock, Globe, FileText, Beaker } from "lucide-react"

export default function ProductDescription({ product }) {
  // If no product is provided, use a default example product
  const productData = product || {
    name: "Aluminum Chlorohydrate (ACH) 50% solution",
    cas_number: "1327-41-9 and 12042-91-0",
    description:
      "Aluminum Chlorohydrate 50% Solution is an aqueous solution used predominantly in water treatment processes as a coagulant. It is also used in cosmetic formulations, especially in antiperspirants. This compound has high efficiency in removing impurities and suspended solids from water, and it acts as an essential component in flocculation. It also has cas number 1327-41-9 = General PAC and ACH.",
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
  }

  const [activeTab, setActiveTab] = useState("description")

  const features = [
    "High Basicity",
    "Effective coagulation and flocculation performance",
    "FDA EU regulated : cosmetic formulations and water treatment applications",
    "Multirole water purification systems : Drinking water and wastewater",
  ]

  return (
    <div className="min-h-screen bg-teal-700">
      <div className="container mx-auto px-4 py-6">
        {/* Back button */}
        <button className="flex items-center text-white mb-4 hover:underline">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to Products
        </button>

        {/* Product Title */}
        <h1 className="text-white text-2xl md:text-3xl font-bold mb-6">
          {productData.name} (CAS NO : {productData.cas_number})
        </h1>

        {/* Feature Pills */}
        <div className="flex flex-wrap gap-3 mb-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-teal-400 text-teal-900 px-4 py-2 rounded-full text-sm">
              {feature}
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-3 gap-6">

          {/* Middle Column - Product Description */}
          <div className="md:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-md h-full">
              <div className="prose">
                <p className="text-gray-700">{productData.description}</p>
              </div>

              <div className="mt-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-teal-700 text-white p-2 rounded-full">
                    <Beaker className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Industries</h3>
                    <p className="text-gray-600">{productData.industries?.join(", ") || "Industrial Chemicals"}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-teal-700 text-white p-2 rounded-full">
                    <Beaker className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Category</h3>
                    <p className="text-gray-600">{productData.categories?.join(", ") || "Inorganic Chemicals"}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Quote Box */}
          <div className="md:col-span-1">
            <div className="bg-blue-950 text-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Get a Quote</h2>
                <div className="bg-teal-400 text-blue-950 px-3 py-1 rounded-full text-sm font-medium flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  Fast Response
                </div>
              </div>

              <div className="space-y-4">
                <button className="w-full bg-teal-400 hover:bg-teal-500 text-blue-950 font-medium py-3 rounded-md transition">
                  Request a Quote
                </button>

                <button className="w-full bg-transparent hover:bg-blue-900 border border-teal-400 text-teal-400 font-medium py-3 rounded-md transition">
                  Request a Sample
                </button>
              </div>

              <div className="mt-8">
                <h3 className="font-semibold mb-4">Details add in quote!</h3>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <FileText className="h-5 w-5 text-teal-400" />
                    <div>
                      <h4 className="font-medium">Minimum Order Quantity</h4>
                      <p className="text-gray-300 text-sm">Included in Quote</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-teal-400" />
                    <div>
                      <h4 className="font-medium">Lead Time</h4>
                      <p className="text-gray-300 text-sm">Included in Quote</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Globe className="h-5 w-5 text-teal-400" />
                    <div>
                      <h4 className="font-medium">Regional Availability</h4>
                      <p className="text-gray-300 text-sm">Included in Quote</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <FileText className="h-5 w-5 text-teal-400" />
                    <div>
                      <h4 className="font-medium">Incoterms</h4>
                      <p className="text-gray-300 text-sm">Included in Quote</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-8 bg-white rounded-lg shadow-md overflow-hidden">
          <div className="flex border-b">
            <button
              className={`px-6 py-3 font-medium ${activeTab === "description" ? "bg-teal-700 text-white" : "text-gray-700 hover:bg-gray-100"}`}
              onClick={() => setActiveTab("description")}
            >
              Description
            </button>
            <button
              className={`px-6 py-3 font-medium ${activeTab === "properties" ? "bg-teal-700 text-white" : "text-gray-700 hover:bg-gray-100"}`}
              onClick={() => setActiveTab("properties")}
            >
              Properties
            </button>
            <button
              className={`px-6 py-3 font-medium ${activeTab === "applications" ? "bg-teal-700 text-white" : "text-gray-700 hover:bg-gray-100"}`}
              onClick={() => setActiveTab("applications")}
            >
              Applications
            </button>
            <button
              className={`px-6 py-3 font-medium ${activeTab === "safety" ? "bg-teal-700 text-white" : "text-gray-700 hover:bg-gray-100"}`}
              onClick={() => setActiveTab("safety")}
            >
              Safety & Handling
            </button>
          </div>

          <div className="p-6">
            {activeTab === "description" && (
              <div>
                <h3 className="text-xl font-semibold mb-4">Product Description</h3>
                <p className="text-gray-700">{productData.description}</p>
                <p className="text-gray-700 mt-4">
                  Aluminum Chlorohydrate is widely used in municipal and industrial water treatment as a primary
                  coagulant. It effectively removes turbidity, color, and organic matter from water supplies. The high
                  basicity formulation provides excellent performance with minimal impact on pH, making it ideal for
                  applications where pH control is critical.
                </p>
              </div>
            )}

            {activeTab === "properties" && (
              <div>
                <h3 className="text-xl font-semibold mb-4">Physical & Chemical Properties</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {productData.properties?.map((prop, index) => (
                    <div key={index} className="border-b pb-2">
                      <span className="font-medium">{prop.key}: </span>
                      <span className="text-gray-700">{prop.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "applications" && (
              <div>
                <h3 className="text-xl font-semibold mb-4">Applications</h3>
                <div className="space-y-4">
                  {productData.applications?.map((app, index) => (
                    <div key={index}>
                      <h4 className="font-medium text-teal-700">{app.key}</h4>
                      <p className="text-gray-700">{app.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "safety" && (
              <div>
                <h3 className="text-xl font-semibold mb-4">Safety & Handling</h3>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    <span className="font-medium">Storage: </span>
                    Store in a cool, dry place in tightly closed containers. Keep away from incompatible materials.
                  </p>
                  <p className="text-gray-700">
                    <span className="font-medium">Handling: </span>
                    Avoid contact with eyes, skin, and clothing. Use with adequate ventilation. Wear appropriate
                    personal protective equipment.
                  </p>
                  <p className="text-gray-700">
                    <span className="font-medium">Disposal: </span>
                    Dispose of contents/container in accordance with local/regional/national/international regulations.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
