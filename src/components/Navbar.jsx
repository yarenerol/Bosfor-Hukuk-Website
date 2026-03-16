'use client'

import Image from "next/image"
import { Raleway } from "next/font/google"
import { useState } from "react"
import Link from "next/link"

const raleway = Raleway({
    subsets: ['latin'], 
    weight: ['400', '500', '600'] 
})

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
        <div className="w-full h-25 flex justify-between items-center bg-[#FAF8F3] px-10 md:px-20 fixed z-50">
            <Link href="/"><Image src="/bosfor-logo.png" alt="Bosfor Hukuk ve Danışmanlık" width={500} height={500} loading="eager" className="h-30 w-auto cursor-pointer" /></Link>
            
            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center">
                <Link href="#hero" className={`${raleway.className} mx-5 hover:text-gold duration-300 relative cursor-pointer group`}>
                    Ana sayfa
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gold transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
                </Link>
                <Link href="/about" className={`${raleway.className} mx-5 hover:text-gold duration-300 relative cursor-pointer group`}>
                    Hakkımızda
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gold transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
                </Link>
                <a className={`${raleway.className} mx-5 hover:text-gold duration-300 relative cursor-pointer group`}>
                    Hizmetler
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gold transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
                </a>
                <a className={`${raleway.className} mx-5 hover:text-gold duration-300 relative cursor-pointer group`}>
                    Blog
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gold transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
                </a>
                <button className={`${raleway.className} ml-5 bg-navy text-white px-7 py-1 cursor-pointer hover:bg-gold duration-300`}>İletişim</button>
            </nav>

            {/* Hamburger Butonu */}
            <button 
                className="md:hidden flex flex-col gap-1.5"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className={`block w-6 h-0.5 bg-[#1a2a5e] transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-[#1a2a5e] transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-[#1a2a5e] transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
        </div>

        {/* Mobile Panel */}
        <div className={`fixed top-0 right-0 h-full w-full bg-[#1a2a5e] z-40 flex flex-col justify-center items-center gap-10 transition-transform duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <a className={`${raleway.className} text-white text-2xl hover:text-[#c9a84c] duration-300`} onClick={() => setIsOpen(false)}>Ana sayfa</a>
            <a className={`${raleway.className} text-white text-2xl hover:text-[#c9a84c] duration-300`} onClick={() => setIsOpen(false)}>Hakkımızda</a>
            <a className={`${raleway.className} text-white text-2xl hover:text-[#c9a84c] duration-300`} onClick={() => setIsOpen(false)}>Hizmetler</a>
            <a className={`${raleway.className} text-white text-2xl hover:text-[#c9a84c] duration-300`} onClick={() => setIsOpen(false)}>Blog</a>
            <button className={`${raleway.className} bg-[#c9a84c] text-[#1a2a5e] px-10 py-3 text-lg font-semibold hover:bg-white duration-300`} onClick={() => setIsOpen(false)}>İletişim</button>
        </div>
        </>
    )
}

export default Navbar