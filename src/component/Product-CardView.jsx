"use client"

import { Beaker } from "lucide-react"
import { useState } from "react"
import { useProductContext } from "./product-context"

export default function ProductCard({ product }) {
  const [expanded, setExpanded] = useState(false)
  const { viewProductDetail } = useProductContext()

  const toggleDescription = () => {
    setExpanded(!expanded)
  }

  return (
    <div
      onClick={() => viewProductDetail(product)}
      className="cursor-pointer rounded-lg overflow-hidden bg-sky-50/80 shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      <div className="p-6">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold text-blue-800">{product.name}</h3>
          <div className="bg-blue-700 text-white rounded-full p-1">
            <Beaker className="h-5 w-5" />
          </div>
        </div>
      </div>
    </div>
  )
}
