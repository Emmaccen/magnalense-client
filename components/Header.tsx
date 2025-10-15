"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, Menu, X } from "lucide-react"
import MobileMenu from "./mobile-menu"
import Image from "next/image"

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header className="w-full py-4 px-4 md:px-6 bg-gray-100 shadow-sm">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="text-xl font-semibold hover:text-blue-800">
              MagnaLense.
            </Link>
            <nav className="hidden lg:flex items-center gap-6">
              <Link href="/men" className="text-sm text-gray-400 hover:text-gray-900 hover:underline">
                Men
              </Link>
              <Link href="/women" className="text-sm text-gray-400 hover:text-gray-900 hover:underline">
                Women
              </Link>
              <Link href="/kids" className="text-sm text-gray-400 hover:text-gray-900 hover:underline">
                Kids
              </Link>
              <Link href="/appointment" className="text-sm text-gray-400 hover:text-gray-900 hover:underline">
                Appointment
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Search className="h-5 w-5 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Image 
                src="/images/shopping-bag.png"
                alt="Cart Icon"
                width={20}
                height={20}
              />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full lg:hidden" onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </header>
  )
}

