"use client"

import { Beaker } from "lucide-react"
import { useState } from "react"

export default function ProductCard({ product }) {
  const [expanded, setExpanded] = useState(false)

  const toggleDescription = () => {
    setExpanded(!expanded)
  }

  // Truncate description if not expanded
  const displayDescription = expanded
    ? product.description || ""
    : product.description && product.description.length > 150
      ? `${product.description.substring(0, 150)}...`
      : product.description || ""

  return (
    <div className="rounded-lg overflow-hidden bg-sky-50/80 shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="p-6">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold text-blue-800">{product.name}</h3>
          <div className="bg-blue-700 text-white rounded-full p-1">
            <Beaker className="h-5 w-5" />
          </div>
        </div>

        <div className="mt-4 space-y-2 text-sm">
          <div className="flex">
            <span className="font-medium text-gray-700 min-w-[80px]">CAS No. :</span>
            <span className="text-gray-600">{product.cas_number || ""}</span>
          </div>

          <div className="flex">
            <span className="font-medium text-gray-700 min-w-[80px]">Category :</span>
            <span className="text-gray-600">Industrial Chemicals</span>
          </div>

          <div className="flex">
            <span className="font-medium text-gray-700 min-w-[80px]">Sub-Category :</span>
            <span className="text-gray-600">
              {product.sub_categories && product.sub_categories.length > 0 ? product.sub_categories.join(", ") : ""}
            </span>
          </div>
        </div>

        <div className="mt-4">
          <div className="font-medium text-gray-700 mb-1">Description:</div>
          <p className="text-gray-600 text-sm">{displayDescription}</p>
          {product.description && product.description.length > 150 && (
            <button onClick={toggleDescription} className="text-blue-600 text-sm font-medium mt-1 hover:text-blue-800">
              {expanded ? "Read Less" : "Read More+"}
            </button>
          )}
        </div>

        <div className="mt-6 flex gap-3">
          <button className="bg-blue-800 hover:bg-blue-900 text-white rounded-md py-2 px-4 text-sm font-medium">
            View Product
          </button>
          <button className="border border-blue-800 text-blue-800 hover:bg-blue-50 rounded-md py-2 px-4 text-sm font-medium">
            Request a Quote
          </button>
        </div>
      </div>
    </div>
  )
}
