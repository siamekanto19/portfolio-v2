import AboutMe from '@/components/about-me'
import Header from '@/components/header'
import TechStack from '@/components/tech-stack'
import { Button } from '@/components/ui/button'
import WorkExperience from '@/components/work-experience'
import { ArrowRight } from 'lucide-react'

const Home = () => {
  return (
    <div className='pt-10 lg:pt-20 w-full'>
      <Header />
      <AboutMe />
      <TechStack />
      <WorkExperience />
      <section className='py-10 w-full flex justify-center'>
        <a href='mailto:siamekanto360@gmail.com'>
          <Button size='lg' variant='gooeyLeft'>
            Contact Me
          </Button>
        </a>
      </section>
    </div>
  )
}

export default Home
