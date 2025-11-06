"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const ProductCarousel = () => {
  const [mainImageIndex, setMainImageIndex] = useState(0)

  const thumbnails = [
    "/images/js1.png",
    "/images/js2.png",
    "/images/js3.png",
    "/images/js4.png",
  ]

  const mainImages = [
    "/images/js1.png",
    "/images/js2.png",
    "/images/js3.png",
    "/images/js4.png",
  ]

  const handlePrevious = () => {
    setMainImageIndex((prev) => (prev === 0 ? mainImages.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setMainImageIndex((prev) => (prev === mainImages.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="flex flex-col-reverse lg:flex-row gap-4">
      {/* Thumbnails - Left on desktop, Bottom on mobile */}
      <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-x-visible">
        {thumbnails.map((thumb, index) => (
          <button
            key={index}
            onClick={() => setMainImageIndex(index)}
            className={`flex-shrink-0 w-[80px] h-[80px] rounded-[12px] border-2 transition-all duration-200 cursor-pointer ${
              mainImageIndex === index ? "border-[#333333]" : "border-[#E5E5E5] hover:border-[#999999]"
            }`}
          >
            <Image
              src={thumb || "/placeholder.svg"}
              alt={`Product view ${index + 1}`}
              width={80}
              height={80}
              className="rounded-[10px]"
            />
          </button>
        ))}
      </div>

      {/* Main Image with Navigation */}
      <div className="flex-1 relative">
          <div className="relative w-full aspect-square bg-[#F9F9F9] rounded-[16px] overflow-hidden flex items-center justify-center">
  <Image
    src={mainImages[mainImageIndex] || "/placeholder.svg"}
    alt="Product main view"
    fill
    className="object-contain p-4"
    priority
  />




          {/* Navigation Arrows */}
          <button
            onClick={handlePrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-[48px] h-[48px] bg-[#333333] hover:bg-[#1a1a1a] rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer z-10"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-[48px] h-[48px] bg-[#333333] hover:bg-[#1a1a1a] rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer z-10"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCarousel
