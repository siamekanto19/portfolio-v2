import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row items-center gap-5'>
      <div>
        <div className='w-[110px] h-[110px] rounded-full border flex justify-center items-center'>
          <Image
            src='/images/siam.jpg'
            width={100}
            height={100}
            className='rounded-full'
            alt='Siam'
          />
        </div>
      </div>
      <div className='flex flex-col text-center md:text-left'>
        <h1 className='text-4xl xl:text-6xl font-bold font-dm-serif tracking-wide'>
          Hi, I&apos;m Siam
        </h1>
        <p className='px-16 md:px-0 pt-2 xl:text-lg text-muted-foreground'>
          Web Application Developer based in Khulna, Bangladesh
        </p>
      </div>
    </div>
  )
}

export default Header
