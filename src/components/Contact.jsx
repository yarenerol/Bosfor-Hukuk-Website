'use client'

import { Playfair_Display, Raleway } from "next/font/google" 
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi'
import Link from "next/link"
import emailjs from '@emailjs/browser'
import { useState } from "react"

const playfair = Playfair_Display({
    subsets: ['latin'], 
    weight: ['400', '500', '600', '700'],
    style: ['normal', 'italic']
})

const raleway = Raleway({
    subsets: ['latin'], 
    weight: ['400', '500', '600'] 
})

const Contact = ()=>{
    const [status, setStatus] = useState('');
    
    const sendEmail = (e) => {
        e.preventDefault()
        setStatus('loading')
        emailjs.sendForm(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
            e.target,
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        ).then(() => {
            setStatus('success')
        }).catch(() => {
            setStatus('error')
        })
    }
    return(
        <>
        <div className="bg-[#0F1A3D] p-10 md:p-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 ">
                <div className="sol">
                    <div className="flex flex-row items-center">
                        <div className="w-11 h-px bg-[#c9a84c] mr-2"></div>
                        <p className={`${raleway.className} text-[#c9a84c] leading-none tracking-wider text-xs`}>İletişim</p>
                    </div>
                    <h1 className={`${playfair.className} text-white text-5xl my-5`}>Hukuki <span className="italic text-[#E2C07A]">Destek</span><br />İçin Ulaşın</h1>
                    <p className={`${playfair.className} text-[#8a9bbf]`}>Sorularınız hakkında öngörüşme için bizimle iletişime geçin.</p>
                    <div className="flex flex-row my-5">
                        <div className="text-[#E2C07A] border border-pc border-[#E2C07A]/30 p-4 shrink-0 self-start"><FiPhone /></div>
                        <div className={`${raleway.className} text-[#E2C07A] mx-4`}>
                            <p>Telefon</p>
                            <p className="text-white/60">5324668817</p>
                        </div>
                    </div>
                    <div className="flex flex-row mb-5">
                        <div className="text-[#E2C07A] border border-pc border-[#E2C07A]/30 p-4 shrink-0 self-start"><FiMail /></div>
                        <div className={`${raleway.className} text-[#E2C07A] mx-4`}>
                            <p>E-posta</p>
                            <p className="text-white/60">info@bosforhukuk.com</p>
                        </div>
                    </div>
                    <div className="flex flex-row mb-5">
                        <div className="text-[#E2C07A] border border-pc border-[#E2C07A]/30 p-4 shrink-0 self-start"><FiMapPin /></div>
                        <div className={`${raleway.className} text-[#E2C07A] mx-4`}>
                            <p>Adres</p>
                            <p className="text-white/60">Gayrettepe Mah. Yıldız Posta Cad. No:14 Emel Apt. D:505 Beşiktaş/İstanbul</p>
                        </div>
                    </div>
                    
                </div>
                <div className="py-10 lg:px-20">
                    <form onSubmit={sendEmail} className="">
                        <div className="grid grid-cols-2 gap-1">
                        <input type="text" name="name" required placeholder="*Adınız" className="border border-px bg-[#182345] border-white/30 p-3 text-white/30 mr-3 mb-3 " />
                        <input type="text" name="surname" required placeholder="*Soyadınız" className="border border-px bg-[#182345] border-white/30 p-3 text-white/30 mb-3" />
                        </div>
                        
                        <input type="email" name="email" required placeholder="*E-posta adresiniz" className="border border-px bg-[#182345] border-white/30 p-3 text-white/30 block w-full mb-3" />
                        <input type="tel" name="phone" required placeholder="*Telefon numaranız" className="border border-px bg-[#182345] border-white/30 p-3 text-white/30 block w-full mb-3" />
                        <textarea name="message" id="" required placeholder="*Hukuki sorunuzu kısaca açıklayın..."  className="border border-px bg-[#182345] border-white/30 p-3 text-white/30 placeholder:text-white/20 min-h-30 block w-full mb-3"></textarea>

                        <p className={`${raleway.className} text-white/30 text-xs`}>
                        <Link href="/kvkk" className="underline hover:text-[#c9a84c] duration-300">*KVKK metnimizi okumak için tıklayın.</Link>
                        </p>
                        <button type="submit" className={`${raleway.className} text-white bg-[#1a2a5e] hover:bg-[#c9a84c] hover:text-[#1a2a5e] py-3 w-full my-3 duration-300`}>  {status === 'loading' ? 'Gönderiliyor...' : 'Mesaj Gönder'}</button>
                        {status === 'success' && <p className={`${raleway.className} text-[#c9a84c] text-sm mt-3`}>✓ Mesajınız başarıyla iletildi.</p>}
                        {status === 'error' && <p className={`${raleway.className} text-red-400 text-sm mt-3`}>✗ Bir hata oluştu, lütfen tekrar deneyin.</p>}
                    </form>
                </div>
            </div>
            <div className="w-full h-100 md:h-96">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.130642913045!2d29.002527975284742!3d41.066136871342394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab65152bb7c53%3A0x19b99e4f49be7ae0!2zRXNlbnRlcGUsIFnEsWxkxLF6IFBvc3RhIENkLiBObzoxNCwgMzQzOTQgxZ5pxZ9saS_EsHN0YW5idWw!5e0!3m2!1str!2str!4v1773491975916!5m2!1str!2str" width="100%" height="100%" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
        </>
    )
}
export default Contact