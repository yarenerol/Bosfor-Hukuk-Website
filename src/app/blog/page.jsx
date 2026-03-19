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


export default function Blog(){
    return (
        <>
        <div className="w-screen h-screen text-center bg-cream flex justify-center items-center">
            <h1 className="font-playfair text-3xl"> Şu anda sayfamız yapım aşamasındadır <br /> Anlayışınız için teşekkür ederiz.</h1>
        </div>
        </>
    )
} 