import React from 'react'

const details = [
  {
    label: 'Certification',
    value: 'EF SET English Certificate — 72/100 (C2 Proficient)',
  },
  {
    label: 'Languages',
    value: 'English (Professional Working Proficiency), Bengali (Native)',
  },
]

const Education = () => {
  return (
    <section className='mt-14 animate-fade-in-up delay-5'>
      <h2 className='text-xl font-heading tracking-tight'>Education</h2>
      <div className='mt-5'>
        <div className='flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5'>
          <h3 className='text-[15px] font-semibold'>
            Diploma in Computer Science and Engineering
          </h3>
          <span className='text-xs text-muted-foreground shrink-0'>
            Jul 2019 — Jul 2023
          </span>
        </div>
        <p className='text-sm text-muted-foreground mt-0.5'>
          Mangrove Institute of Science and Technology · Khulna, Bangladesh
        </p>
      </div>

      <div className='mt-8 space-y-3'>
        {details.map((detail) => (
          <div
            key={detail.label}
            className='sm:grid sm:grid-cols-[140px_1fr] sm:gap-4'
          >
            <p className='text-xs uppercase tracking-wider text-muted-foreground/70'>
              {detail.label}
            </p>
            <p className='mt-1 sm:mt-0 text-[14px] leading-relaxed text-muted-foreground/80'>
              {detail.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education
