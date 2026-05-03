import Header from '@/components/header'
import AboutMe from '@/components/about-me'
import TechStack from '@/components/tech-stack'
import WorkExperience from '@/components/work-experience'
import Projects from '@/components/projects'
import Footer from '@/components/footer'
import { ModeToggle } from '@/components/mode-toggle'

const Home = () => {
  return (
    <>
      <ModeToggle />
      <div className='w-11/12 md:w-2/3 xl:w-[680px] mx-auto pt-12 lg:pt-24 pb-12'>
        <Header />
        <AboutMe />
        <TechStack />
        <WorkExperience />
        <Projects />
        <Footer />
      </div>
    </>
  )
}

export default Home
