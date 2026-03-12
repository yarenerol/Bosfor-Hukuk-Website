import { Playfair_Display, Raleway } from "next/font/google"
import Image from "next/image"

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
        <div className="grid grid-cols-1 md:grid-cols-2 w-full min-h-[calc(100vh-6.25rem)] overflow-hidden">
            <div className="p-10 md:p-20 grow flex flex-col justify-center">
                <div className="flex flex-row items-center">
                    <div className="w-11 h-px bg-[#c9a84c] mr-2"></div>
                    <p className="text-[#c9a84c] leading-none tracking-wider text-xs">BOSFOR HUKUK & DANIŞMANLIK</p>
                </div>
                <h1 className={`${playfair.className} text-5xl my-10 text-[#1a2a5e] font-normal`}>Haklarınızı <span className="italic block text-[#c9a84c]">Kararlılıkla</span> Savunuyoruz</h1>
                <p className={`${playfair.className} text-xl mb-5`}>İstanbul'un köklü hukuk geleneğinden ilham alan, modern ve güvenilir hukuki danışmanlık hizmeti.</p>
                <div className="flex flex-row">
                    <button className={`bg-[#1a2a5e] mr-5 text-white font-bold py-2 px-6 ${raleway.className} hover:bg-[#c9a84c] hover:text-[#1a2a5e] hover:cursor-pointer duration-300`}>İletişime geçin</button>
                    <button className={`bg-white mx-5 text-[#1a2a5e] py-2 px-6 border border-[#1a2a5e] ${raleway.className} hover:cursor-pointer hover:text-[#c9a84c] hover:border-[#c9a84c] duration-300`}>Hizmetlerimiz</button>
                </div>

            </div>
            <div className="hidden md:flex flex-col bg-[#1D2549] p-20 grow overflow-hidden items-center justify-center" 
                style={{
                    backgroundImage: `linear-gradient(rgba(201,168,76,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.05) 1px, transparent 1px)`,
                    backgroundSize: '50px 50px'
                }}>
                <div className="rounded-full border border-[#c9a84c]/20 w-56 h-56 flex items-center justify-center">
                    <div className="rounded-full border border-[#c9a84c]/10 w-50 h-50 flex items-center justify-center">
                        <Image src="/kopru.png" alt="Köprü" width={150} height={150} />
                    </div>
                </div>
                <div className="w-px h-20 bg-gradient-to-b from-transparent via-[#c9a84c] to-transparent my-10"></div>
            <p className={`${playfair.className} italic font-semibold text-white/30 text-center`}>"İki kıtayı birleştiren köprü gibi, sizi hukuka bağlıyoruz."</p>
            </div>
        </div>
        </>
    )
}
export default Hero