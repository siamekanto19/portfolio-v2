import React from 'react'

const experiences = [
  {
    company: 'Allucent',
    role: 'Frontend Engineer',
    period: 'Jan 2025 — Present',
    location: 'Austin, Texas (Remote) · Full-time',
    highlights: [
      'Rebuilt the Work Book Scheduler using recursive Vue components and a Vuex store. Render time dropped about 20%.',
      'Cut load time on the Pull Plan dashboard by roughly 30%.',
      'Wired up Firebase to keep the frontend and backend in sync in real time.',
    ],
  },
  {
    company: 'SSP Systems LTD',
    role: 'Frontend Engineer',
    period: 'Feb 2024 — Apr 2026',
    location: 'Ontario, Canada (Remote) · Contract',
    highlights: [
      'Traced the performance problems in a digital billing platform to its hooks and state handling, then reworked both.',
      'Swapped HTTP polling for a WebSocket connection. Responsiveness improved about 20%.',
      'Put a tRPC layer on the Next.js server so client-to-backend requests were type-checked end to end.',
      'Pulled repeated logic into a shared custom hooks library and cleared out the duplication.',
    ],
  },
  {
    company: 'Buttercloud LLC',
    role: 'Software Developer',
    period: 'Feb 2023 — Jun 2024',
    location: 'Amman, Jordan (Remote)',
    highlights: [
      'Sped up an e-commerce management portal by about 10% using React hooks and Valtio for state.',
      'Moved shared logic into custom hooks and utilities, which made the codebase easier to work in.',
      'Set up Strapi CMS behind a marketing site so non-technical staff could edit content themselves.',
    ],
  },
  {
    company: 'Evatix LTD',
    role: 'Jr. Software Developer',
    period: 'Aug 2021 — Feb 2023',
    location: 'Dhaka, Bangladesh',
    highlights: [
      'Rebuilt the layout system for a server management platform in React and Next.js. Roughly 10% faster.',
      "Fixed bugs in the app's multi-step forms by moving them onto a proper form library.",
      "Built marketing sites on Next.js and Strapi, which cleared up the client's load-time issues.",
    ],
  },
]

const WorkExperience = () => {
  return (
    <section className='mt-14 animate-fade-in-up delay-3'>
      <h2 className='text-xl font-heading tracking-tight'>Experience</h2>
      <div className='mt-5 space-y-0'>
        {experiences.map((exp, i) => (
          <div key={exp.company} className='relative pl-6 pb-8 last:pb-0 group'>
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
              <ul className='mt-2 space-y-1.5'>
                {exp.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className='relative pl-4 text-[14px] leading-relaxed text-muted-foreground/80 before:absolute before:left-0 before:top-[9px] before:w-[3px] before:h-[3px] before:rounded-full before:bg-muted-foreground/50'
                  >
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WorkExperience
