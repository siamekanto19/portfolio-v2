import React from 'react'
import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    name: 'Rivlet',
    description:
      'A free download manager for Windows with no accounts or ads. Go and Wails v2 underneath, Vue 3 and TypeScript for the interface. It splits downloads across parallel connections and handles queues, scheduling, bandwidth caps, and torrents, plus a Chrome and Edge extension that catches downloads straight from the browser. Built it on my own in four days, running AI agents across the Go, Vue, and extension code at once.',
    url: 'https://github.com/siamekanto19/rivlet',
    period: 'Jul 2026',
  },
  {
    name: 'OpenFlow',
    description:
      'A macOS dictation app that runs entirely on the device, so audio never leaves the machine. Written in Swift, using whisper.cpp through SwiftWhisper. It sits in the menu bar, records on a global push-to-talk shortcut, uses the GPU on Apple Silicon, handles ten languages, and keeps transcripts and replacement rules in SQLite through GRDB. Built in a day, in a language and on a platform I had not used before, working through AI agents.',
    url: 'https://github.com/siamekanto19/openflow',
    period: 'Mar 2026',
  },
  {
    name: 'Invoice Wizard',
    description:
      'A small React app for putting invoices together. Everything runs in the browser, so there is no account and nothing goes to a server. Fill in the client, line items, and prices, and it hands back a PDF straight away. Posted on Product Hunt.',
    url: 'https://invoicewizard.app',
    period: 'Aug — Sep 2025',
  },
]

const Projects = () => {
  return (
    <section className='mt-14 animate-fade-in-up delay-4'>
      <h2 className='text-xl font-heading tracking-tight'>Projects</h2>
      <div className='mt-5 grid gap-3'>
        {projects.map((project) => (
          <div
            key={project.name}
            className='group rounded-xl p-4 -mx-4 hover:bg-muted/60 transition-colors'
          >
            <div className='flex items-start justify-between gap-3'>
              <div className='min-w-0'>
                <div className='flex items-center gap-2'>
                  {project.url ? (
                    <a
                      href={project.url}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-[15px] font-semibold inline-flex items-center gap-1 hover:underline underline-offset-4'
                    >
                      {project.name}
                      <ArrowUpRight
                        size={14}
                        strokeWidth={2}
                        className='opacity-50 group-hover:opacity-100 transition-opacity'
                      />
                    </a>
                  ) : (
                    <span className='text-[15px] font-semibold'>
                      {project.name}
                    </span>
                  )}
                </div>
                <p className='text-[14px] leading-relaxed text-muted-foreground mt-1'>
                  {project.description}
                </p>
              </div>
              <span className='text-xs text-muted-foreground shrink-0 mt-1'>
                {project.period}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
