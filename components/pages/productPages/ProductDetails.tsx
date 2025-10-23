"use client"

import { Star } from "lucide-react"

interface ProductDetailsProps {
  selectedColor: string
  setSelectedColor: (color: string) => void
  selectedSize: string
  setSelectedSize: (size: string) => void
  quantity: number
  setQuantity: (quantity: number) => void
}

const ProductDetails = ({
  selectedColor,
  setSelectedColor,
  selectedSize,
  quantity,
  setQuantity,
}: ProductDetailsProps) => {
  const colors = [
    { name: "white", hex: "#FFFFFF", border: "#E5E5E5" },
    { name: "black", hex: "#000000", border: "#000000" },
    { name: "tan", hex: "#C9A961", border: "#C9A961" },
    { name: "blue", hex: "#0000FF", border: "#0000FF" },
  ]

  const handleAddToCart = () => {
    console.log("Added to cart:", {
      product: "Juliet Stylish",
      color: selectedColor,
      size: selectedSize,
      quantity,
    })
  }

  return (
    <div className="space-y-6">
      {/* Title */}
      <div>
        <h1 className="text-[32px] lg:text-[36px] font-bold text-[#1a1a1a] leading-tight">Juliet Stylish</h1>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-2">
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-[#FFD700] text-[#FFD700]" />
          ))}
        </div>
        <span className="text-[14px] text-[#666666]">4.88 (121 Reviews)</span>
      </div>

      {/* Price */}
      <div>
        <p className="text-[32px] font-bold text-[#1a1a1a]">₦15,000.00</p>
      </div>

      {/* Frame Color */}
      <div className="space-y-3">
        <label className="text-[14px] font-semibold text-[#666666]">Frame Color</label>
        <div className="flex gap-3">
          {colors.map((color) => (
            <button
              key={color.name}
              onClick={() => setSelectedColor(color.name)}
              className={`w-[40px] h-[40px] rounded-full transition-all duration-200 cursor-pointer ${
                selectedColor === color.name
                  ? "ring-2 ring-offset-2 ring-[#333333]"
                  : "hover:ring-2 hover:ring-offset-2 hover:ring-[#999999]"
              }`}
              style={{
                backgroundColor: color.hex,
                border: color.name === "white" ? `2px solid ${color.border}` : "none",
              }}
              aria-label={`Select ${color.name} color`}
            />
          ))}
        </div>
      </div>

      {/* Size Selection */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <label className="text-[14px] font-semibold text-[#666666]">
            Select Size: <span className="font-bold text-[#1a1a1a]">{selectedSize}</span>
          </label>
          <button className="text-[14px] text-gray-400 underline hover:no-underline cursor-pointer transition-all duration-200">
            Size Guide
          </button>
        </div>
      </div>

      {/* Quantity */}
      <div className="space-y-3">
        <label className="text-[14px] font-semibold text-[#666666]">Quantity</label>
        <div className="flex items-center gap-4">
          <div className="flex items-center bg-[#F5F5F5] rounded-full w-fit">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="px-4 py-2 text-[18px] text-[#1a1a1a] hover:bg-[#E5E5E5] transition-all duration-200 cursor-pointer"
              aria-label="Decrease quantity"
            >
              −
            </button>
            <span className="px-4 py-2 text-[16px] font-semibold text-[#1a1a1a] min-w-[40px] text-center">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="px-4 py-2 text-[18px] text-[#1a1a1a] hover:bg-[#E5E5E5] transition-all duration-200 cursor-pointer"
              aria-label="Increase quantity"
            >
              +
            </button>

            
          </div>
           {/* Add to Cart Button */}
      <button
        onClick={handleAddToCart}
        className="w-full bg-[#000000] hover:bg-[#1a1a1a] text-white font-semibold py-3 px-6 rounded-full transition-all duration-200 cursor-pointer text-[16px] active:scale-95"
      >
        Add to Cart
      </button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
