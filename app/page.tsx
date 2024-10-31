import AboutMe from '@/components/about-me'
import Header from '@/components/header'
import TechStack from '@/components/tech-stack'
import Image from 'next/image'
import React from 'react'

const Home = () => {
  return (
    <div className='pt-10 lg:pt-20 w-full'>
      <Header />
      <AboutMe />
      <TechStack />
    </div>
  )
}

export default Home
