import React from 'react'

const skillGroups = [
  {
    label: 'Languages',
    items: ['TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3'],
  },
  {
    label: 'Frameworks',
    items: ['React', 'Next.js', 'Vue 2 & 3', 'Node.js'],
  },
  {
    label: 'State & Data',
    items: [
      'Vuex',
      'Valtio',
      'React Hooks',
      'tRPC',
      'WebSocket',
      'Firebase',
      'REST APIs',
    ],
  },
  {
    label: 'Styling & UI',
    items: [
      'TailwindCSS',
      'ShadCN UI',
      'Responsive Web Design',
      'Component Design Systems',
    ],
  },
  {
    label: 'Architecture',
    items: ['Strapi', 'Headless CMS', 'Jamstack', 'SSR / SSG'],
  },
  {
    label: 'Tooling',
    items: ['Git', 'GitHub', 'Vite', 'Webpack', 'npm / pnpm'],
  },
  {
    label: 'AI Workflow',
    items: ['Claude Code', 'Codex', 'OpenCode'],
  },
]

const TechStack = () => {
  return (
    <section className='mt-14 animate-fade-in-up delay-2'>
      <h2 className='text-xl font-heading tracking-tight'>Skills</h2>
      <div className='mt-5 space-y-5'>
        {skillGroups.map((group) => (
          <div
            key={group.label}
            className='sm:grid sm:grid-cols-[140px_1fr] sm:gap-4'
          >
            <p className='text-xs uppercase tracking-wider text-muted-foreground/70 sm:pt-2'>
              {group.label}
            </p>
            <div className='mt-2 sm:mt-0 flex flex-wrap gap-2'>
              {group.items.map((skill) => (
                <span
                  key={skill}
                  className='px-3.5 py-1.5 rounded-full text-[13px] font-medium bg-muted text-muted-foreground border border-transparent hover:border-border transition-colors'
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TechStack
