import AboutMe from '@/components/about-me'
import Header from '@/components/header'
import { ModeToggle } from '@/components/mode-toggle'
import TechStack from '@/components/tech-stack'
import WorkExperience from '@/components/work-experience'
import React from 'react'

const Home = () => {
  return (
    <div className='pt-10 lg:pt-20 w-full'>
      <Header />
      <AboutMe />
      <TechStack />
      <WorkExperience />
    </div>
  )
}

export default Home
