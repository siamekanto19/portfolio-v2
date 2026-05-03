import React from 'react'
import Image from 'next/image'
import { Download, Mail, MapPin } from 'lucide-react'

const Header = () => {
  return (
    <section className='animate-fade-in-up'>
      <div className='flex flex-col sm:flex-row items-center sm:items-start gap-6'>
        {/* Avatar */}
        <div className='shrink-0'>
          <div className='w-[100px] h-[100px] rounded-full ring-2 ring-border ring-offset-2 ring-offset-background overflow-hidden'>
            <Image
              src='/images/siam.jpg'
              width={100}
              height={100}
              className='rounded-full object-cover'
              alt='SK Siam Rouf'
              priority
            />
          </div>
        </div>

        {/* Info */}
        <div className='flex flex-col text-center sm:text-left'>
          <h1 className='text-3xl lg:text-4xl font-heading tracking-tight'>
            SK Siam Rouf
          </h1>
          <p className='mt-1 text-base text-muted-foreground'>
            Full Stack Developer · Frontend Focused
          </p>
          <div className='mt-3 flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-2 text-sm text-muted-foreground'>
            <span className='inline-flex items-center gap-1.5'>
              <MapPin size={14} strokeWidth={1.5} />
              Khulna, Bangladesh
            </span>
            <a
              href='mailto:siamekanto360@gmail.com'
              className='inline-flex items-center gap-1.5 hover:text-foreground transition-colors'
            >
              <Mail size={14} strokeWidth={1.5} />
              siamekanto360@gmail.com
            </a>
          </div>

          {/* Action Buttons */}
          <div className='mt-5 flex flex-wrap items-center justify-center sm:justify-start gap-3'>
            <a
              href='mailto:siamekanto360@gmail.com'
              className='inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-foreground text-background text-sm font-medium hover:opacity-90 transition-opacity'
            >
              <Mail size={15} strokeWidth={1.5} />
              Get in Touch
            </a>
            <a
              href='/siam_resume.pdf'
              download
              className='inline-flex items-center gap-2 px-5 py-2.5 rounded-full border text-sm font-medium hover:bg-muted transition-colors'
            >
              <Download size={15} strokeWidth={1.5} />
              Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header
