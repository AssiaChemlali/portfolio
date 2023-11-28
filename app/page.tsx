import About from "@/components/About";
import Contact from "@/components/Contact";
import DividerSection from "@/components/DividerSection";
import Experience from "@/components/Experience";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";


export default function Home() {
  return (
    <main className="flex items-center justify-center flex-col">
        <Intro/>
        <DividerSection/>
        <About/>
        <Projects/>
        <Skills/>
        <Experience/>
        <Contact/>
    </main>
  )
}
