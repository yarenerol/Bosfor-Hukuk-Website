'use client'

import { Playfair_Display, Raleway } from "next/font/google"
import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"

const playfair = Playfair_Display({
    subsets: ['latin'], 
    weight: ['400', '500', '600', '700'],
    style: ['normal', 'italic']
})

const raleway = Raleway({
    subsets: ['latin'], 
    weight: ['400', '500', '600'] 
})

const Hero = ()=>{

    return(
        <>
        <div id="hero" className="grid grid-cols-1 md:grid-cols-2 w-full min-h-[calc(100vh-6.25rem)]">
            <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="p-10 md:p-20 grow flex flex-col justify-center">
                <div className="flex flex-row items-center">
                    <div className="w-11 h-px bg-gold mr-2"></div>
                    <p className="text-gold leading-none tracking-wider text-xs">BOSFOR HUKUK & DANIŞMANLIK</p>
                </div>
                <h1 className="font-playfair text-5xl my-10 text-navy font-normal">Haklarınızı <span className="italic block text-gold">Kararlılıkla</span> Savunuyoruz</h1>
                <p className="font-playfair text-xl mb-5">İstanbul&apos;un köklü hukuk geleneğinden ilham alan, modern ve güvenilir hukuki danışmanlık hizmeti.</p>
                <div className="flex flex-row">
                    <Link href="/#contact" className="bg-navy mr-5 text-white font-bold py-2 px-6 font-raleway hover:bg-gold hover:text-navy hover:cursor-pointer duration-300">İletişime geçin</Link>
                    <Link href="/#services" className="bg-white mx-5 text-navy py-2 px-6 border border-navy font-raleway hover:cursor-pointer hover:text-gold hover:border-gold duration-300">Hizmetlerimiz</Link>
                </div>

            </motion.div>
            <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="hidden md:flex flex-col bg-darknavy p-20 grow overflow-hidden items-center justify-center" 
                style={{
                    backgroundImage: `linear-gradient(rgba(201,168,76,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.05) 1px, transparent 1px)`,
                    backgroundSize: '50px 50px'
                }}>
                <div className="rounded-full border border-gold/20 w-56 h-56 flex items-center justify-center">
                    <div className="rounded-full border border-gold/10 w-50 h-50 flex items-center justify-center">
                        <Image src="/kopru.png" alt="Köprü" width={150} height={150} />
                    </div>
                </div>
                <div className="w-px h-20 bg-linear-to-b from-transparent via-gold to-transparent my-10"></div>
            <p className="font-playfair italic font-semibold text-white/30 text-center">&quot;İki kıtayı birleştiren köprü gibi, sizi hukuka bağlıyoruz.&quot;</p>
            </motion.div>
        </div>
        </>
    )
}
export default Hero