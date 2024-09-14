import ContactSection from "@/components/sections/Contact";
import FooterSection from "@/components/sections/Footer";
import HomeSection from "@/components/sections/Home";
import ProjectsSection from "@/components/sections/Projects";
import TechnologiesSection from "@/components/sections/Technologies";
import WorksSection from "@/components/sections/Works";


export default function root() {

  return (
    <main className="px-[120px] flex items-center justify-center flex-col">
      <HomeSection />
      <WorksSection />
      <ProjectsSection />
      <TechnologiesSection />
      <ContactSection />
      <FooterSection />
    </main>
  )
}