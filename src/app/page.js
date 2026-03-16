import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero id="hero" />
      <Services id="services" />
      <About id="about" />
      <Contact id="contact" />
    </>
  );
}
