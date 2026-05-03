import React from 'react'

const skills = [
  'TypeScript',
  'React',
  'Next.js',
  'Vue.js',
  'Node.js',
  'TailwindCSS',
  'ShadCN UI',
  'Responsive Design',
]

const TechStack = () => {
  return (
    <section className='mt-14 animate-fade-in-up delay-2'>
      <h2 className='text-xl font-heading tracking-tight'>Skills</h2>
      <div className='mt-4 flex flex-wrap gap-2'>
        {skills.map((skill) => (
          <span
            key={skill}
            className='px-3.5 py-1.5 rounded-full text-[13px] font-medium bg-muted text-muted-foreground border border-transparent hover:border-border transition-colors'
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}

export default TechStack
