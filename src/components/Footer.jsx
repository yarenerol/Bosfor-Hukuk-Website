import Image from "next/image"
import { Raleway } from "next/font/google"

const raleway = Raleway({
    subsets: ['latin'], 
    weight: ['400', '500', '600'] 
})

const Footer = ()=>{
    return (
        <>
        <div className="w-full h-25 flex justify-between items-center bg-[#0f1a3d] px-10 sm:px-20 ">
            <Image src="/bosfor-logo.jpeg" alt="Bosfor Hukuk ve Danışmanlık" width={100} height={100}/>
            <p className={`${raleway.className} text-white/20 hidden md:flex text-sm`}>© 2026 Bosfor Hukuk & Danışmanlık. Tüm hakları saklıdır.</p>
            <div>
                <button className={`${raleway.className} text-white/20 mx-10 hover:text-[#c9a84c] duration-300 text-sm`}>GİZLİLİK</button>
                <button className={`${raleway.className} text-white/20 hover:text-[#c9a84c] duration-300 text-sm`}>KVKK</button>
            </div>
        </div>
        </>
    )
}
export default Footer