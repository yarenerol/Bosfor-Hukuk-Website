import { Playfair_Display,Raleway } from "next/font/google"

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
        <div className="bg-white border border-[#1a2a5e]/10 p-10 hover:-translate-y-1 hover:shadow-xl duration-400 relative group">
        <div className="absolute left-0 top-0 w-0.5 h-0 bg-[#c9a84c] group-hover:h-full transition-all duration-400"></div>
            <h1 className={`${playfair.className} text-8xl text-[#1a2a5e]/5 `}>{hizmet.id}</h1>
            <h2 className={`${playfair.className} text-3xl my-5 text-[#1a2a5e]`}>{hizmet.service}</h2>
            <p className={`${raleway.className} text-[#4a5a7a]`}>{hizmet.desc}</p>
        </div>
        </>
    )

}

export default ServiceCard