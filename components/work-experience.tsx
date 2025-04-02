import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card'

const WorkExperience = () => {
  return (
    <div className='pt-10 w-full'>
      <h2 className='text-2xl xl:text-3xl font-semibold font-dm-serif tracking-wide'>
        Work Experience
      </h2>
      <div className='pt-6 w-full flex flex-col gap-5'>
        <p>
          My professional career has been started during August 2021. Since
          then, I have worked with various Software Development companies and
          worked on numerous exciting Web Development Projects. Here are the
          positions I have worked on for the past few years.
        </p>
        <Card className='mt-4 shadow-none border-0 bg-muted'>
          <CardHeader className='p-5'>
            <CardTitle className='text-xl font-semibold'>Green Pants Studio</CardTitle>
            <CardDescription>Frontend Engineer</CardDescription>
            <CardDescription>January 20, 2025 - Present</CardDescription>
          </CardHeader>
        </Card>
        <Card className='shadow-none border-0 bg-muted'>
          <CardHeader className='p-5'>
            <CardTitle className='text-xl font-semibold'>
              Scan Split Pay
            </CardTitle>
            <CardDescription>Frontend Developer (Contractual)</CardDescription>
            <CardDescription>March 01, 2024 - Present</CardDescription>
          </CardHeader>
        </Card>
        <Card className='shadow-none border-0 bg-muted'>
          <CardHeader className='p-5'>
            <CardTitle className='text-xl font-semibold'>
              Buttercloud LLC
            </CardTitle>
            <CardDescription>Software Developer</CardDescription>
            <CardDescription>February 20, 2023 - July 31, 2024</CardDescription>
          </CardHeader>
        </Card>
        <Card className='shadow-none border-0 bg-muted'>
          <CardHeader className='p-5'>
            <CardTitle className='text-xl font-semibold'>Evatix LTD</CardTitle>
            <CardDescription>Jr. Software Developer</CardDescription>
            <CardDescription>
              August 01, 2021 - February 14, 2023
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  )
}

export default WorkExperience
