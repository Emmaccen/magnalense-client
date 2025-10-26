"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

export interface CartItem {
  id: string
  name: string
  price: number
  color: string
  size: string
  quantity: number
  image: string
}

interface CartContextType {
  items: CartItem[]
  isOpen: boolean
  addItem: (item: CartItem) => void
  removeItem: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  openCart: () => void
  closeCart: () => void
  getSubtotal: () => number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([])
  const [isOpen, setIsOpen] = useState(false)

  const addItem = (newItem: CartItem) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.id === newItem.id && item.color === newItem.color && item.size === newItem.size,
      )

      if (existingItem) {
        return prevItems.map((item) =>
          item.id === newItem.id && item.color === newItem.color && item.size === newItem.size
            ? { ...item, quantity: item.quantity + newItem.quantity }
            : item,
        )
      }

      return [...prevItems, newItem]
    })
    setIsOpen(true)
  }

  const removeItem = (id: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id))
  }

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id)
      return
    }
    setItems((prevItems) => prevItems.map((item) => (item.id === id ? { ...item, quantity } : item)))
  }

  const getSubtotal = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  return (
    <CartContext.Provider
      value={{
        items,
        isOpen,
        addItem,
        removeItem,
        updateQuantity,
        openCart: () => setIsOpen(true),
        closeCart: () => setIsOpen(false),
        getSubtotal,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error("useCart must be used within CartProvider")
  }
  return context
}
