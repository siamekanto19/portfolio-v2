import React from 'react'
import { Github, Linkedin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className='mt-20 pt-8 border-t animate-fade-in-up delay-5'>
      <div className='flex flex-col sm:flex-row items-center justify-between gap-4'>
        <p className='text-sm text-muted-foreground'>
          © {new Date().getFullYear()} SK Siam Rouf
        </p>
        <div className='flex items-center gap-4'>
          <a
            href='https://www.linkedin.com/in/siamekanto19'
            target='_blank'
            rel='noopener noreferrer'
            className='text-muted-foreground hover:text-foreground transition-colors'
            aria-label='LinkedIn'
          >
            <Linkedin size={18} strokeWidth={1.5} />
          </a>
          <a
            href='https://github.com/siamekanto19'
            target='_blank'
            rel='noopener noreferrer'
            className='text-muted-foreground hover:text-foreground transition-colors'
            aria-label='GitHub'
          >
            <Github size={18} strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
