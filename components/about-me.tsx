import React from 'react'

const AboutMe = () => {
  return (
    <section className='mt-14 animate-fade-in-up delay-1'>
      <h2 className='text-xl font-heading tracking-tight'>About</h2>
      <div className='mt-3 space-y-4 text-[15px] leading-relaxed text-muted-foreground'>
        <p>
          Frontend engineer with five years of experience building and
          optimizing production web applications in React, Vue, and Next.js.
        </p>
        <p>
          Most of that work has focused on performance in data-heavy interfaces
          such as large tables, real-time dashboards, and multi-step forms, with
          additional experience in real-time communication and headless CMS
          architecture. AI coding agents (Claude Code, Codex, OpenCode) are a
          routine part of how I work.
        </p>
      </div>
    </section>
  )
}

export default AboutMe
