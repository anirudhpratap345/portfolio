import AboutSection from '@/components/AboutSection'
import ProjectsSection from '@/components/ProjectsSection'
import SkillsSection from '@/components/SkillsSection'
import Footer from '@/components/Footer'
import FloatingContact from '@/components/FloatingContact'
import ThemeToggle from '@/components/ThemeToggle'

export default function Home() {
  return (
    <main className="min-h-screen">
      <ThemeToggle />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <Footer />
      <FloatingContact />
    </main>
  )
}
