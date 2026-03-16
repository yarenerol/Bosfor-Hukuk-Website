import { Playfair_Display, Raleway } from "next/font/google" 
import Image from "next/image"
import { FiShield, FiClock, FiUsers } from "react-icons/fi"

const playfair = Playfair_Display({
    subsets: ['latin'], 
    weight: ['400', '500', '600', '700'],
    style: ['normal', 'italic']
})

const raleway = Raleway({
    subsets: ['latin'], 
    weight: ['400', '500', '600'] 
})

export default function About() {
return (
    <>
    <div className="title bg-darknavy p-10 md:p-20">
        <div className="flex flex-row items-center ">
            <div className="w-11 h-px bg-gold mr-2"></div>
            <p className="text-gold font-raleway leading-none tracking-wider text-xs md:text-sm">HAKKIMIZDA</p>
        </div>
        <h1 className="font-playfair font-bold text-white text-3xl md:text-5xl my-5">Av. Mustafa Berkay <span className="italic text-gold">Yılmaz</span></h1>
    </div>
    <div className="about bg-cream p-10 md:p-20 grid grid-cols-1 md:grid-cols-2">
        <div className="flex items-start justify-center">
            <div className="bg-navy w-full max-w-lg aspect-square relative p-5 lg:m-15">
                <div className="relative w-full h-full">
                    <Image src="/MBerkayYilmaz.jpeg" alt="Mustafa Berkay Yılmaz" fill className="object-cover" />
                </div>
                <div className="absolute bottom-0 right-0 p-5 bg-gold translate-y-5 translate-x-5">
                    <span className="font-playfair block text-center font-semibold text-darknavy">Av. Mustafa Berkay Yılmaz</span>
                    <span className="font-raleway block text-center text-xs text-darknavy">Kurucu Avukat</span>
                </div>
            </div>
        </div>
        <div className="">
                <div className="flex flex-row items-center mt-20 md:mt-0">
                    <div className="w-11 h-px bg-gold mr-2"></div>
                    <p className="text-gold leading-none tracking-wider text-xs">HAKKIMIZDA</p>
                </div>
                <h1 className="font-playfair text-5xl my-5">Adalate <span className="italic text-[#4a5a7a]">Adanmış</span><br /> Bir Kariyer</h1>
                <p className="font-playfair text-[#4a5a7a] mt-10 mb-5 leading-loose text-lg lg:text-xl">Mustafa Berkay Yılmaz, tecrübe ve deneyimleri doğrultusunda, hukuk ve danışmanlık konusunda uzmanlaşmıştır. Danışmanlık görevi gereği öncelikle kamuda on sene boyunca görev yapan Mustafa Berkay Yılmaz, mali denetim, proje idareciliği, kamu yönetimi alanları başta olmak üzere, yöneticilik konusundaki pek çok alanda oldukça geniş bilgi ve deneyim sahibidir.</p>
                <p className="font-playfair text-[#4a5a7a] mb-5 leading-loose text-lg lg:text-xl">2015 yılında İstanbul Üniversitesindeki lisans eğitimini tamamlamasının ardından, tam burslu olarak Yeditepe Üniversitesinde İngilizce Hukuk eğitimi almıştır.</p>
                <p className="font-playfair text-[#4a5a7a] mb-5 leading-loose text-lg lg:text-xl">Aynı zamanda Ocak 2012’den itibaren Maliye Bakanlığı nezdinde görevlendirilmiş olup, Aralık 2018’den sonra Hazine ve Maliye Bakanlığında bakan yardımcısı ekibinin çalışmalarında görev almıştır.</p>
                <p className="font-playfair text-[#4a5a7a] mb-5 leading-loose text-lg lg:text-xl">2022 yılında kamudaki görevinden kendi isteğiyle ayrılarak özel sektörde çalışmalarına devam etmiştir.</p>
                <p className="font-playfair text-[#4a5a7a] mb-5 leading-loose text-lg lg:text-xl">Özel sektördeki görevlerinde; şirket içi ve şirket dışı tüm birimlerin denetimi, verimlilik analizi, yeni planlama analizleri ve risk yönetimi, fizibilite denetimi, mali denetim, iş ve işçi denetimi, sözleşme hazırlama ve düzenleme çalışmalarında müdürlük unvanıyla görev almıştır.</p>
                <p className="font-playfair text-[#4a5a7a] mb-5 leading-loose text-lg lg:text-xl">2023 yılından bu yana özel sektörde danışman ve avukat olarak çalışmaktadır. İcra ve iflas hukuku, borçlar hukuku, iş hukuku, ticaret hukuku, şirketler hukuku ve ceza hukuku alanlarında uzmandır.</p>
                <p className="font-playfair text-[#4a5a7a] mb-5 leading-loose text-lg lg:text-xl">Mustafa Berkay Yılmaz, iyi derecede İngilizce konuşmaktadır. Ayrıca bilirkişilik eğitimine, iş sağlığı ve güvenliği eğitimine ve e-iç ve e-dış ticaret uzmanlığı sertifikasına sahiptir.</p>
                
            </div>
    </div>
    <div className="education bg-white p-10 md:p-20">
        <div className="flex flex-row items-center ">
            <div className="w-11 h-px bg-gold mr-2"></div>
            <p className="text-gold font-raleway leading-none tracking-wider text-xs md:text-sm">Geçmiş</p>
        </div>
        <h1 className="font-playfair font-bold text-dark-navy text-5xl my-5">Eğitim & <span className="italic text-fume">Deneyim</span></h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mt-10">
            <div>
                <div className="border-b-2 border-gold/20">
                    <h1 className="font-playfair text-darknavy text-xl font-bold m-3">Mesleki deneyim</h1>
                </div>
                <div className="grid grid-row relative my-5">
                    <div className="absolute left-0 top-0 w-0.5 h-full bg-linear-to-b from-gold to-transparent"></div>
                    <div className="m-5 mb-10 relative">
                         <div className="absolute -left-5.75 top-1.5 w-2.5 h-2.5 rounded-full bg-gold"></div>
                        <p className="font-raleway text-gold text-sm">2022 Aralık - Günümüz</p>
                        <h3 className="font-playfair text-darknavy text-xl mt-2">Kurucu Ortak - Avukat</h3>
                        <h3 className="font-raleway text-fume text-md mb-2">Bosfor Hukuk & Danışmanlık</h3>
                        <p className="font-playfair text-fume text-md">Aile, ceza ve iş hukuku alanlarında müvekkil temsilciliği ve hukuki danışmanlık.</p>
                    </div>
                    <div className="m-5 mb-10 relative">
                        <div className="absolute -left-5.75 top-1.5 w-2.5 h-2.5 rounded-full bg-gold"></div>
                        <p className="font-raleway text-gold text-sm">2018 Aralık - 2021 Aralık</p>
                        <h3 className="font-playfair text-darknavy text-xl mt-2">Özel Kalem Müdürü</h3>
                        <h3 className="font-raleway text-fume text-md mb-2">İstanbul Vergi Dairesi Başkanlığı</h3>
                        <p className="font-playfair text-fume text-md">Özel kalem müdürlüğü</p>
                    </div>
                    <div className="m-5 mb-10 relative">
                        <div className="absolute -left-5.75 top-1.5 w-2.5 h-2.5 rounded-full bg-gold "></div>
                        <p className="font-raleway text-gold text-sm">2012 Ocak - 2017 Ocak</p>
                        <h3 className="font-playfair text-darknavy text-xl mt-2">Özel Büro Müdürü</h3>
                        <h3 className="font-raleway text-fume text-md mb-2">İstanbul Vergi Dairesi Başkanlığı İdari Ve Mali İşler Müdürlüğü</h3>
                        <p className="font-playfair text-fume text-md">Özel büro müdürlüğü</p>
                    </div>
                </div>
            </div>
            <div>
                <div className="border-b-2 border-gold/20">
                    <h1 className="font-playfair text-darknavy text-xl font-bold m-3">Eğitim</h1>
                </div>
                <div className="grid grid-row relative my-5">
                    <div className="absolute left-0 top-0 w-0.5 h-full bg-linear-to-b from-gold to-transparent"></div>
                    <div className="m-5 mb-10 relative">
                         <div className="absolute -left-5.75 top-1.5 w-2.5 h-2.5 rounded-full bg-gold"></div>
                        <p className="font-raleway text-gold text-sm">2017 - 2021</p>
                        <h3 className="font-playfair text-darknavy text-xl mt-2">Hukuk (İngilizce)</h3>
                        <h3 className="font-raleway text-fume text-md mb-2">Yeditepe Üniversitesi - Hukuk Fakültesi</h3>
                        <p className="font-playfair text-fume text-md">Aile, ceza ve iş hukuku alanlarında müvekkil temsilciliği ve hukuki danışmanlık.</p>
                    </div>
                    <div className="m-5 mb-10 relative">
                        <div className="absolute -left-5.75 top-1.5 w-2.5 h-2.5 rounded-full bg-gold"></div>
                        <p className="font-raleway text-gold text-sm">2011 - 2015</p>
                        <h3 className="font-playfair text-darknavy text-xl mt-2"> Siyaset Bilimi ve Uluslararası İlişkiler</h3>
                        <h3 className="font-raleway text-fume text-md mb-2">İstanbul Üniversitesi - İktisat Fakültesi</h3>
                        <p className="font-playfair text-fume text-md">Özel kalem müdürlüğü</p>
                    </div>
                    <div className="m-5 mb-10 relative">
                        <div className="absolute -left-5.75 top-1.5 w-2.5 h-2.5 rounded-full bg-gold "></div>
                        <p className="font-raleway text-gold text-sm">2012 - 2015</p>
                        <h3 className="font-playfair text-darknavy text-xl mt-2">Kamu Yönetimi</h3>
                        <h3 className="font-raleway text-fume text-md mb-2">Anadolu Üniversitesi - İktisat Fakültesi</h3>
                        <p className="font-playfair text-fume text-md">Özel büro müdürlüğü</p>
                    </div>
                </div>
            </div>
            <div>
                <div className="border-b-2 border-gold/20">
                    <h1 className="font-playfair text-darknavy text-xl font-bold m-3">Sertifikalar ve Eğitim Programları</h1>
                </div>
                <div className="grid grid-row relative my-5">
                    <div className="absolute left-0 top-0 w-0.5 h-full bg-linear-to-b from-gold to-transparent"></div>
                    <div className="m-5 relative">
                         <div className="absolute -left-5.75 top-1.5 w-2.5 h-2.5 rounded-full bg-gold"></div>
                        <h3 className="font-playfair text-darknavy text-xl mt-2">Bilirkişilik Eğitimi Başarı Sertifikası </h3>
                        <h3 className="font-raleway text-fume text-md mb-2">Yeni Yüzyıl Üniversitesi</h3>
                    </div>
                    <div className="m-5 relative">
                        <div className="absolute -left-5.75 top-1.5 w-2.5 h-2.5 rounded-full bg-gold"></div>
                        <h3 className="font-playfair text-darknavy text-xl mt-2">İş Sağlığı ve Güvenliği Eğitim Programı</h3>
                        <h3 className="font-raleway text-fume text-md mb-2">Hazine ve Maliye Bakanlığı</h3>
                    </div>
                    <div className="m-5 relative">
                        <div className="absolute -left-5.75 top-1.5 w-2.5 h-2.5 rounded-full bg-gold "></div>
                        <h3 className="font-playfair text-darknavy text-xl mt-2"> E-İç ve E-Dış Ticaret Uzmanlığı Sertifikası </h3>
                        <h3 className="font-raleway text-fume text-md mb-2">Yorktrade Foreing Trade Institute</h3>
                    </div>
                </div>
                
            </div>
        </div>


    </div>
    <div className="values bg-darknavy p-10 md:p-20" style={{
                    backgroundImage: `linear-gradient(rgba(201,168,76,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.05) 1px, transparent 1px)`,
                    backgroundSize: '50px 50px'
                }}>
        <div className="flex flex-row items-center ">
            <div className="w-11 h-px bg-gold mr-2"></div>
            <p className="text-gold font-raleway leading-none tracking-wider text-xs md:text-sm">DEĞERLERİMİZ</p>
        </div>
        <h1 className="font-playfair text-white text-5xl my-5">Bizi <span className="italic text-gold">Biz Yapan</span> İlkeler</h1>
        <div className="grid grid-col-1 lg:grid-cols-3 gap-15 my-15">
            <div className="bg-navy/20 px-10 py-15 md:px-15 border border-px border-gold/10 hover:border-gold/30 hover:bg-navy/40 hover:-translate-y-1 hover:shadow-xl duration-300">
                <div className="text-4xl text-gold pb-5"><FiShield /></div>
                <h1 className="font-playfair text-white text-2xl pb-5">Güven</h1>
                <p className="text-fume text-lg font-raleway">Bosfor Hukuk’un temel felsefesi, müvekkil ve müşterilerimiz ile uzun vadeli ve güvene dayalı bir ilişki kurmaktır</p>
            </div>
            <div className="bg-navy/20 px-10 py-15 md:px-15 border border-px border-gold/10 hover:border-gold/30 hover:bg-navy/40 hover:-translate-y-1 hover:shadow-xl duration-300">
                <div className="text-4xl text-gold pb-5"><FiClock /></div>
                <h1 className="font-playfair text-white text-2xl pb-5">Kararlılık</h1>
                <p className="text-fume text-lg font-raleway">Her davada sonuca ulaşmak için azimle çalışır, müvekkilimizin haklarını kararlılıkla savunuruz.</p>
            </div>
            <div className="bg-navy/20 px-10 py-15 md:px-15 border border-px border-gold/10 hover:border-gold/30 hover:bg-navy/40 hover:-translate-y-1 hover:shadow-xl duration-300">
                <div className="text-4xl text-gold pb-5"><FiUsers /></div>
                <h1 className="font-playfair text-white text-2xl pb-5">Müvekkil Odaklılık</h1>
                <p className="text-fume text-lg font-raleway">Her müvekkilimizin ihtiyacını dinler, kişisel ve özgün çözümler üretiriz.</p>
            </div>
        </div>
    </div>
    </>
)
}