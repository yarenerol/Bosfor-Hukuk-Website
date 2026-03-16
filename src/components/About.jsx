'use client'

import Image from "next/image"
import { Playfair_Display, Raleway } from "next/font/google" 
import Link from "next/link"
import { motion } from "framer-motion"

const playfair = Playfair_Display({
    subsets: ['latin'], 
    weight: ['400', '500', '600', '700'],
    style: ['normal', 'italic']
})

const raleway = Raleway({
    subsets: ['latin'], 
    weight: ['400', '500', '600'] 
})

const About = ()=>{
    return (
        <>
        <div id="about" className="bg-cream grid grid-cols-1 gap-20 md:grid-cols-2 p-10 md:p-20 lg:p-35">
            <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center justify-center ">
                <div className="bg-darknavy w-full max-w-lg aspect-square relative p-5 lg:m-15">
                    <div className="relative w-full h-full">
                        <Image src="/MBerkayYilmaz.jpeg" alt="Mustafa Berkay Yılmaz" fill className="object-cover" />
                    </div>
                        <div className="absolute bottom-0 right-0 p-5 bg-gold translate-y-5 translate-x-5">
                            <span className="font-playfair block text-center font-semibold text-darknavy">Av. Mustafa Berkay Yılmaz</span>
                            <span className="font-raleway block text-center text-xs text-darknavy">Kurucu Avukat</span>
                        </div>
                    
                </div>
            </motion.div>
            <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="md:pt-20">
                <div className="flex flex-row items-center ">
                    <div className="w-11 h-px bg-gold mr-2"></div>
                    <p className="text-gold leading-none tracking-wider text-xs">HAKKIMIZDA</p>
                </div>
                <h1 className="font-playfair text-5xl my-5">Adalate <span className="italic text-fume">Adanmış</span><br /> Bir Kariyer</h1>
                <p className="font-playfair text-fume my-10 leading-loose text-lg lg:text-2xl">15 yılı aşkın hukuki deneyimimizle, her müvekkilimizin davasını kendi davamız gibi ele alıyoruz. Hukuki süreçlerde şeffaflık, güven ve kararlılık temel değerlerimizdir.</p>
                <Link href="/about" className="font-raleway bg-darknavy text-white font-semibold py-3 px-6 hover:bg-gold hover:text-darknavy duration-300 mb-10">Özgeçmişimizi inceleyin</Link>
            </motion.div>
        </div>
        </>
    )
}

export default About