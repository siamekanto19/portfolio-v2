import React from 'react'
import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    name: 'Invoice Wizard',
    description:
      'A fully free, minimal offline invoice generator built with React. Generate PDF invoices instantly with a clean interface.',
    url: 'https://invoicewizard.app',
    period: 'Aug — Sep 2025',
  },
  {
    name: 'Tizmos Lesson Planner',
    description:
      'Frontend for an AI-based Ed-Tech platform where teachers create, share, and collaborate on lesson plans with rich content and AI assistance.',
    period: 'Oct — Dec 2024',
  },
  {
    name: 'Scan Split Pay',
    description:
      'Digital bill splitting system for restaurants using TypeScript, React, tRPC, and WebSocket for real-time bill splitting and waiter/customer interfaces.',
    url: 'https://ssppos.com',
    period: 'Jan — Mar 2024',
  },
  {
    name: 'Pio-tech Website',
    description:
      'Multi-page marketing website for a banking solutions company, built with Strapi CMS and Next.js Jamstack deployment.',
    url: 'https://pio-tech.com',
    period: 'Dec 2022 — Jan 2023',
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
