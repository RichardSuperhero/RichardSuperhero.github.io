'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
  <header className={`fixed w-full z-10 transition-all duration-300 ${isScrolled ? 'bg-[#212a32] shadow-md' : 'bg-transparent'}`}>
    <nav className="container mx-auto px-6 py-4 relative">
      <ul className="flex space-x-6 justify-end">
        <li><a href="/" className="text-white hover:text-[#c55e73] transition-colors duration-300">Home</a></li>
        <li><a href="#about" className="text-white hover:text-[#c55e73] transition-colors duration-300">About</a></li>
        <li><a href="#experience" className="text-white hover:text-[#c55e73] transition-colors duration-300">Experience</a></li>
        <li><a href="#portfolio" className="text-white hover:text-[#c55e73] transition-colors duration-300">Portfolio</a></li>
        <li><a href="#press" className="text-white hover:text-[#c55e73] transition-colors duration-300">Press</a></li>
        <li><a href="/web-app-gallery" className="text-white hover:text-[#c55e73] transition-colors duration-300">Gallery</a></li>
        <li><a href="#contact" className="text-white hover:text-[#c55e73] transition-colors duration-300">Contact</a></li>
      </ul>
      <div className="h-1 w-full bg-gradient-to-r from-[#b66091] via-[#c55e73] to-[#54626f] absolute bottom-0 left-0"></div>
    </nav>
  </header>
  )
}
