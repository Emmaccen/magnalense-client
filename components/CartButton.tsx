"use client"

import { ShoppingCart } from "lucide-react"
import { useCart } from "@/context/CartContext"

const CartButton = () => {
  const { items, openCart } = useCart()

  // Calculate total number of items in cart
  const totalItems = items.reduce((total, item) => total + item.quantity, 0)

  return (
    <button
      onClick={openCart}
      className="relative p-2 hover:bg-[#F5F5F5] rounded-full transition-all duration-200 cursor-pointer"
      aria-label="Open shopping cart"
    >
      <ShoppingCart className="w-5 h-5 text-gray-600" />
      
      {/* Item Count Badge */}
      {totalItems > 0 && (
        <span className="absolute -top-1 -right-1 bg-[#1a1a1a] text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center">
          {totalItems > 99 ? '99+' : totalItems}
        </span>
      )}
    </button>
  )
}

export default CartButton