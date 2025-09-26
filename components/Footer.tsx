"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter signup
    console.log("MagnaLense newsletter signup:", email)
  }

  // get full year
    const currentYear = new Date().getFullYear()


  return (
    <div className="bg-[#111827] text-white">

      {/* Main Hero Section */}
      <div className="px-[40px] py-[80px]">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-[60px] items-center">
            {/* Left Content */}
            <div>
              <h1 className="text-[42px] font-bold leading-tight mb-[24px]">
                Your eyes are magnificent.
                <br />
                Dress them accordingly
              </h1>

              <p className="text-[#B8C5D1] text-[18px] leading-relaxed">
                With Hand-crafted, Detail-oriented frames, add colors, light and clarity to your Vision.
              </p>
            </div>

            {/* Right Email Signup */}
            <div className="flex justify-end">
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
        </div>
      </div>
      
      {/* Footer */}
<div className="border-t border-[#334155] px-[40px] py-[24px]">
  <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center sm:justify-between bg-white rounded-lg px-[24px] py-[16px] gap-4 sm:gap-0">
    {/* Social Icons */}
    <div className="flex items-center gap-[16px]">
      <button className="text-black transition-colors">
        <Twitter className="w-[20px] h-[20px]" />
      </button>
      <button className="text-black transition-colors">
        <Instagram className="w-[20px] h-[20px]" />
      </button>
      <button className="text-black transition-colors">
        <Linkedin className="w-[20px] h-[20px]" />
      </button>
    </div>

    {/* Copyright */}
    <div className="text-black text-[14px] text-center sm:text-left">&copy; {currentYear} MagnaLense. All rights reserved.</div>

    {/* Brand */}
    <div className="text-black text-[18px] font-bold text-center sm:text-left">MagnaLense.</div>
  </div>
</div>

    </div>
  )
}
