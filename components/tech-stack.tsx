import Image from 'next/image'
import React from 'react'

const TechStack = () => {
  return (
    <div className='pt-10 w-full'>
      <h2 className='text-xl lg:text-2xl font-semibold font-dm-serif'>
        Tech Stack
      </h2>
      <div className='pt-6 flex items-center gap-5 flex-wrap justify-around md:justify-start'>
        <div className='h-24 w-24 flex justify-center items-center bg-muted rounded-lg'>
          <Image
            src='/images/typescript.svg'
            width={40}
            height={40}
            alt='Typescript'
          />
        </div>
        <div className='h-24 w-24 flex justify-center items-center bg-muted rounded-lg'>
          <Image src='/images/react.svg' width={40} height={40} alt='React' />
        </div>
        <div className='h-24 w-24 flex justify-center items-center bg-muted rounded-lg'>
          <Image
            src='/images/tailwind.svg'
            width={40}
            height={40}
            alt='Tailwind'
          />
        </div>
        <div className='h-24 w-24 flex justify-center items-center bg-muted rounded-lg'>
          <Image src='/images/nextjs.svg' width={40} height={40} alt='Nextjs' />
        </div>

        <div className='h-24 w-24 flex justify-center items-center bg-muted rounded-lg'>
          <Image
            src='/images/jamstack.svg'
            width={40}
            height={40}
            alt='JamStack'
          />
        </div>
        <div className='h-24 w-24 flex justify-center items-center bg-muted rounded-lg'>
          <Image src='/images/node.svg' width={40} height={40} alt='Nodejs' />
        </div>
      </div>
    </div>
  )
}

export default TechStack
