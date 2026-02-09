"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="fixed w-full top-0 z-50 bg-white bg-opacity-90 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold font-playfair text-gradient">
          Tarida
        </Link>
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="text-gray-900 hover:text-blue-600 transition-colors font-medium">
            Home
          </Link>
          <Link href="/about" className="text-gray-900 hover:text-blue-600 transition-colors font-medium">
            About Us
          </Link>
          <Link href="/focus-areas" className="text-gray-900 hover:text-blue-600 transition-colors font-medium">
            Focus Areas
          </Link>
          <Link href="/contact" className="text-gray-900 hover:text-blue-600 transition-colors font-medium">
            Contact
          </Link>
        </nav>
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white py-2">
          <Link href="/" className="block px-4 py-2 text-gray-900 hover:bg-blue-100 hover:text-blue-600 font-medium">
            Home
          </Link>
          <Link
            href="/about"
            className="block px-4 py-2 text-gray-900 hover:bg-blue-100 hover:text-blue-600 font-medium"
          >
            About Us
          </Link>
          <Link
            href="/focus-areas"
            className="block px-4 py-2 text-gray-900 hover:bg-blue-100 hover:text-blue-600 font-medium"
          >
            Focus Areas
          </Link>
          <Link
            href="/contact"
            className="block px-4 py-2 text-gray-900 hover:bg-blue-100 hover:text-blue-600 font-medium"
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  )
}

export default Header

