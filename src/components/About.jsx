import Image from "next/image"
import { Playfair_Display, Raleway } from "next/font/google" 

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
        <div className="bg-[#f0ece2] grid grid-cols-1 gap-20 md:grid-cols-2 p-10 md:p-20 lg:p-35">
            <div className="flex items-center justify-center ">
                <div className="bg-[#162050] w-full max-w-lg aspect-square relative p-5 lg:m-15">
                    <div className="relative w-full h-full">
                        <Image src="/MBerkayYilmaz.jpeg" alt="Mustafa Berkay Yılmaz" fill className="object-cover" />
                    </div>
                        <div className="absolute bottom-0 right-0 p-5 bg-[#c9a84c] translate-y-5 translate-x-5">
                            <span className={`${playfair.className} block text-center font-semibold text-[#162050]`}>Av. Mustafa Berkay Yılmaz</span>
                            <span className={`${raleway.className} block text-center text-xs text-[#162050]`}>Kurucu Avukat</span>
                        </div>
                    
                </div>
            </div>
            <div className="sağ">
                <div className="flex flex-row items-center md:py-10">
                    <div className="w-11 h-px bg-[#c9a84c] mr-2"></div>
                    <p className="text-[#c9a84c] leading-none tracking-wider text-xs">HAKKIMIZDA</p>
                </div>
                <h1 className={`${playfair.className} text-5xl`}>Adalate <span className="italic text-[#4a5a7a]">Adanmış</span><br /> Bir Kariyer</h1>
                <p className={`${playfair.className} text-[#4a5a7a] my-10 leading-loose text-lg lg:text-2xl`}>15 yılı aşkın hukuki deneyimimizle, her müvekkilimizin davasını kendi davamız gibi ele alıyoruz. Hukuki süreçlerde şeffaflık, güven ve kararlılık temel değerlerimizdir.</p>
                <button className={`${raleway.className} bg-[#162050] text-white font-semibold py-2 px-6 hover:bg-[#c9a84c] hover:text-[#162050] duration-300`}>Özgeçmişimizi inceleyin</button>
            </div>
        </div>
        </>
    )
}

export default About