'use client'

import { Playfair_Display,Raleway } from "next/font/google"
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

const ServiceCard = ({hizmet})=>{
    return(
        <>
        <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
        className="bg-white border border-darknavy/10 p-10 hover:-translate-y-1 hover:shadow-xl duration-400 relative group">
        <div className="absolute left-0 top-0 w-0.5 h-0 bg-gold group-hover:h-full transition-all duration-400"></div>
            <h1 className="font-playfair text-8xl text-darknavy/5">{hizmet.id}</h1>
            <h2 className="font-playfair text-3xl my-5 text-darknavy">{hizmet.service}</h2>
            <p className="font-playfair text-lightblue`">{hizmet.desc}</p>
        </motion.div>
        </>
    )

}

export default ServiceCard