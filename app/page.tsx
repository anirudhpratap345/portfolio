import AboutSection from '@/components/AboutSection'
import ProjectsSection from '@/components/ProjectsSection'
import SkillsSection from '@/components/SkillsSection'
import Footer from '@/components/Footer'
import FloatingContact from '@/components/FloatingContact'

export default function Home() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: 'rgb(17 17 17)' }}>
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <Footer />
      <FloatingContact />
    </main>
  )
}
