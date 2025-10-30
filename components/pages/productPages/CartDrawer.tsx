"use client"

import { X, Trash2 } from "lucide-react"
import { useCart } from "@/context/CartContext"
import Image from "next/image"

const CartDrawer = () => {
  const { items, isOpen, closeCart, removeItem, updateQuantity, getSubtotal } = useCart()

  if (!isOpen) return null

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-[#03071226] bg-opacity-50 z-40 transition-opacity duration-200"
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-[400px] bg-white shadow-lg z-50 flex flex-col overflow-hidden transition-transform duration-300">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#F5F5F5]">
          <div className="flex items-center gap-2">
            <h2 className="text-[18px] font-bold text-[#1a1a1a]">My Cart</h2>
            {items.length > 0 && (
              <span className="bg-[#1a1a1a] text-white text-[12px] font-bold rounded-full w-6 h-6 flex items-center justify-center">
                {items.length}
              </span>
            )}
          </div>
          <button
            onClick={closeCart}
            className="p-1 hover:bg-[#F5F5F5] rounded-full transition-all duration-200 cursor-pointer"
            aria-label="Close cart"
          >
            <X className="w-6 h-6 text-[#1a1a1a]" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            // Empty State
            <div className="flex flex-col items-center justify-center h-full gap-6 p-6">
              <p className="text-[16px] text-[#666666] text-center">Your cart is empty</p>
              <button
                onClick={closeCart}
                className="bg-[#000000] hover:bg-[#1a1a1a] text-white font-semibold py-3 px-8 rounded-full transition-all duration-200 cursor-pointer text-[14px] active:scale-95 w-full"
              >
                Start Shopping
              </button>
            </div>
          ) : (
            // Cart Items
            <div className="space-y-4 p-6">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 pb-4 border-b border-[#F5F5F5]">
                  {/* Product Image */}
                  <div className="w-20 h-20 rounded-[8px] flex-shrink-0 overflow-hidden">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      width={80}
                      height={80}
                      className="object-cover"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-[14px] font-semibold text-[#1a1a1a] truncate">{item.name}</h3>
                    <p className="text-[12px] text-[#666666] mt-1">
                      Color: <span className="font-medium capitalize">{item.color}</span>
                    </p>
                    <p className="text-[12px] text-[#666666]">
                      Size: <span className="font-medium">{item.size}</span>
                    </p>
                    <p className="text-[14px] font-bold text-[#1a1a1a] mt-2">
                      ₦{(item.price * item.quantity).toLocaleString()}
                    </p>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2 mt-3">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="px-2 py-1 bg-[#F5F5F5] hover:bg-[#E5E5E5] rounded text-[12px] transition-all duration-200 cursor-pointer"
                        aria-label="Decrease quantity"
                      >
                        −
                      </button>
                      <span className="px-2 py-1 text-[12px] font-semibold min-w-[24px] text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="px-2 py-1 bg-[#F5F5F5] hover:bg-[#E5E5E5] rounded text-[12px] transition-all duration-200 cursor-pointer"
                        aria-label="Increase quantity"
                      >
                        +
                      </button>

                      {/* Delete Button */}
                      <button
                        onClick={() => removeItem(item.id)}
                        className="ml-auto p-1 hover:bg-[#F5F5F5] rounded transition-all duration-200 cursor-pointer"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-4 h-4 text-[#666666] hover:text-[#1a1a1a]" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-[#F5F5F5] p-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[14px] text-[#666666]">Subtotal:</span>
              <span className="text-[18px] font-bold text-[#1a1a1a]">₦{getSubtotal().toLocaleString()}</span>
            </div>
            <button className="w-full bg-[#000000] hover:bg-[#1a1a1a] text-white font-semibold py-3 px-6 rounded-full transition-all duration-200 cursor-pointer text-[14px] active:scale-95">
              Add to Cart
            </button>
          </div>
        )}
      </div>
    </>
  )
}

export default CartDrawer
