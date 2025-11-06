"use client"

import { useState } from "react"
import ProductCarousel from "./ProductCarousel"
import ProductDetails from "./ProductDetails"

const ProductSection = () => {
  const [selectedColor, setSelectedColor] = useState("black")
  const [selectedSize, setSelectedSize] = useState("Medium")
  const [quantity, setQuantity] = useState(1)

  return (
    <div className="min-h-screen bg-white font-raleway">
      {/* Main Product Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Left: Thumbnails and Carousel */}
          <div className="lg:col-span-2">
            <ProductCarousel />
          </div>

          {/* Right: Product Details */}
          <div className="lg:col-span-1">
            <ProductDetails
              selectedColor={selectedColor}
              setSelectedColor={setSelectedColor}
              selectedSize={selectedSize}
              setSelectedSize={setSelectedSize}
              quantity={quantity}
              setQuantity={setQuantity}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductSection
