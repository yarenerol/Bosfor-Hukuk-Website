import Image from "next/image"
import { Raleway } from "next/font/google"

const raleway = Raleway({
    subsets: ['latin'], 
    weight: ['400', '500', '600'] 
})

const Footer = ()=>{
    return (
        <>
        <div className="w-full h-25 flex justify-between items-center bg-footerblue px-10 md:px-20 ">
            <Image src="/new.png" alt="Bosfor Hukuk ve Danışmanlık" width={100} height={100} style={{width:'auto'}} />
            <p className="font-raleway text-white/20 hidden md:flex text-sm">© 2026 Bosfor Hukuk & Danışmanlık. Tüm hakları saklıdır.</p>
            <div>
                <button className="font-raleway text-white/20 cursor-pointer mx-10 hover:text-gold duration-300 text-sm">GİZLİLİK</button>
                <button className="font-raleway text-white/20 cursor-pointer hover:text-gold duration-300 text-sm">KVKK</button>
            </div>
        </div>
        </>
    )
}
export default Footer