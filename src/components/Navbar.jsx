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
        <div className="w-full h-25 flex justify-between items-center bg-lightcream px-10 md:px-20 fixed z-50">
            <Link href="/"><Image src="/bosfor-logo.png" alt="Bosfor Hukuk ve Danışmanlık" width={500} height={500} loading="eager" className="h-30 w-auto cursor-pointer" /></Link>
            
            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center">
                <Link href="/#hero" className="font-raleway mx-5 hover:text-gold duration-300 relative cursor-pointer group">
                    Ana sayfa
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gold transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
                </Link>
                <Link href="/about" className="font-raleway mx-5 hover:text-gold duration-300 relative cursor-pointer group">
                    Hakkımızda
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gold transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
                </Link>
                <Link href="/#services" className="font-raleway mx-5 hover:text-gold duration-300 relative cursor-pointer group">
                    Hizmetler
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gold transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
                </Link>
                <Link href="/blog" className="font-raleway mx-5 hover:text-gold duration-300 relative cursor-pointer group">
                    Blog
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gold transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
                </Link>
                <Link href="/#contact" className="font-raleway ml-5 bg-navy text-white px-7 py-1 cursor-pointer hover:bg-gold duration-300">İletişim</Link>
            </nav>

            {/* Hamburger Butonu */}
            <button 
                className="md:hidden flex flex-col gap-1.5"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className={`block w-6 h-0.5 bg-navy transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-navy transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-navy transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
        </div>

        {/* Mobile Panel */}
        <div className={`fixed top-0 right-0 h-full w-full bg-navy z-40 flex flex-col justify-center items-center gap-10 transition-transform duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <a className="font-raleway text-white text-2xl hover:text-gold duration-300" onClick={() => setIsOpen(false)}>Hakkımızda</a>
            <a className="font-raleway text-white text-2xl hover:text-gold duration-300" onClick={() => setIsOpen(false)}>Blog</a>
            <button className="font-raleway bg-gold text-navy px-10 py-3 text-lg font-semibold hover:bg-white duration-300" onClick={() => setIsOpen(false)}>İletişim</button>
        </div>
        </>
    )
}

export default Navbar