import Navbar from "./components/Navbar"
import HeroSection from "./sections/HeroSection"
import AboutSection from "./sections/AboutSection"
import StatsSection from "./sections/StatsSection"
import SkillsSection from "./sections/SkillsSection"
import ProjectsSection from "./sections/ProjectsSection"
import PatentsSection from "./sections/PatentsSection"
import CertificatesSection from "./sections/CertificatesSection"
import AIESECSection from "./sections/AIESECSection"
import ContactSection from "./sections/ContactSection"

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <SkillsSection />
      <ProjectsSection />
      <PatentsSection />
      <CertificatesSection />
      <AIESECSection />
      <ContactSection />
    </>
  )
}