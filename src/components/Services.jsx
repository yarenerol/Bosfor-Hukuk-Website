import { Playfair_Display, Raleway } from "next/font/google"
import ServiceCard from "./ServiceCard"


const playfair = Playfair_Display({
    subsets: ['latin'], 
    weight: ['400', '500', '600', '700'],
    style: ['normal', 'italic']
})

const raleway = Raleway({
    subsets: ['latin'], 
    weight: ['400', '500', '600'] 
})

const hizmetler = [
    {id: 1, service: "Aile Hukuku", desc: "Boşanma, velayet, nafaka ve aile içi hukuki sorunlarınızda uzman danışmanlık hizmeti sunuyoruz."},
    {id: 2, service: "İş & Ticaret Hukuku", desc: "Şirket kuruluşu, sözleşme hazırlama ve ticari uyuşmazlıklarda profesyonel hukuki destek."},
    {id: 3, service: "Ceza Hukuku", desc: "Ceza davalarında etkin savunma stratejileri ile haklarınızı en üst düzeyde koruyoruz."},
    {id: 4, service: "Gayrimenkul Hukuku", desc: "Devlet kurumlarına karşı hak arama süreçlerinde deneyimli ve kararlı temsil."},
    {id: 5, service: "İdare Hukuku", desc: "Devlet kurumlarına karşı hak arama süreçlerinde deneyimli ve kararlı temsil."},
    {id: 6, service: "Miras Hukuku", desc: "Miras planlaması, vasiyet düzenleme ve miras uyuşmazlıklarında güvenilir rehberlik."},
]
const Hizmetler = ()=>{
    return (
        <>
        <div className="bg-[#FAF8F3] w-full p-10 md:p-20">
            <div className="flex flex-row items-center">
                <div className="w-11 h-px bg-[#c9a84c] mr-2"></div>
                <p className="text-[#c9a84c] leading-none tracking-wider text-xs">UZMANLIK ALANLARI</p>
            </div>
            <h1 className={`${playfair.className} text-[#1a2a5e] text-5xl my-5`}>Hukuki <span className="italic text-[#4a5a7a]">Hizmetlerimiz</span></h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-15">{
                hizmetler.map((hizmet)=>(
                    <ServiceCard key={hizmet.id} hizmet={hizmet}/>
                ))
            }</div>
        </div>
        </>
    )

}

export default Hizmetler