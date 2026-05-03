import React from 'react'

const experiences = [
  {
    company: 'Allucent',
    role: 'Frontend Engineer',
    period: 'Jan 2025 — Present',
    location: 'Austin, TX (Remote)',
    description:
      'Optimized frontend of a Construction Scheduling Software using Vue 2. Implemented Work Book Scheduler with recursive components, improving performance by ~20%. Integrated Firebase for real-time communication and optimized Pull Plan dashboards by ~30%.',
  },
  {
    company: 'SSP Systems LTD',
    role: 'Frontend Engineer (Contractual)',
    period: 'Feb 2024 — Present',
    location: 'Ontario, Canada',
    description:
      'Improved performance of a Digital Billing Software using React Hooks and state management. Implemented WebSocket for real-time server communication (~20% improvement). Used tRPC to proxy requests through Next.js Server.',
  },
  {
    company: 'Buttercloud LLC',
    role: 'Software Developer',
    period: 'Feb 2023 — Jun 2024',
    location: 'Amman, Jordan',
    description:
      'Improved performance of an E-commerce Management Portal by ~10% using React and Valtio. Enhanced code maintainability with Custom React Hooks. Integrated Strapi CMS for a marketing website.',
  },
  {
    company: 'Evatix LTD',
    role: 'Jr. Software Developer',
    period: 'Aug 2021 — Feb 2023',
    location: 'Dhaka, Bangladesh',
    description:
      'Improved layouting system for a next-gen Server Management Platform using React and Next.js. Fixed multi-part form issues and built marketing websites with Next.js and Strapi CMS.',
  },
]

const WorkExperience = () => {
  return (
    <section className='mt-14 animate-fade-in-up delay-3'>
      <h2 className='text-xl font-heading tracking-tight'>Experience</h2>
      <div className='mt-5 space-y-0'>
        {experiences.map((exp, i) => (
          <div
            key={exp.company}
            className='relative pl-6 pb-8 last:pb-0 group'
          >
            {/* Timeline line */}
            {i < experiences.length - 1 && (
              <div className='absolute left-[4.5px] top-[10px] bottom-0 w-px bg-border' />
            )}

            {/* Timeline dot */}
            <div className='absolute left-0 top-[6px] w-[10px] h-[10px] rounded-full border-2 border-foreground/30 bg-background group-hover:border-foreground/60 transition-colors' />

            <div>
              <div className='flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5'>
                <h3 className='text-[15px] font-semibold'>{exp.company}</h3>
                <span className='text-xs text-muted-foreground shrink-0'>
                  {exp.period}
                </span>
              </div>
              <p className='text-sm text-muted-foreground mt-0.5'>
                {exp.role} · {exp.location}
              </p>
              <p className='text-[14px] leading-relaxed text-muted-foreground/80 mt-2'>
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WorkExperience
