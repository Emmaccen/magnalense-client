"use client"

import type React from "react"

import { useState } from "react"
import { Mail } from "lucide-react"

export default function NewsletterSignup() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter signup
    console.log("Newsletter signup:", email)
  }

  return (
    <div className="bg-[#F5F5F5] py-[60px] px-[40px]">
      <div className="max-w-[400px] mx-auto text-center">
        <h2 className="text-[28px] font-bold text-black mb-[16px] leading-tight">10% Off Your First Order!</h2>

        <p className="text-[#666666] text-[16px] mb-[32px] leading-relaxed">
          Stay updated on our latest collections, exclusive offers, and special promotions by signing up for our newsletter.
        </p>

        <form onSubmit={handleSubmit} className="flex items-center bg-white p-1 pl-6 pr-4 py-4 rounded-full max-w-md mx-auto">
          
            <Mail className="h-5 w-5 text-gray-500 mr-2" />
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow bg-transparent outline-none text-sm text-gray-700 placeholder-gray-500"
              required
            />
      
          <button
            type="submit"
            className="bg-black text-white text-sm px-5 py-2 rounded-full hover:bg-gray-900 transition"
          >
            Subscribe
          </button>
        </form>

      </div>
    </div>
  )
}
