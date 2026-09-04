import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { projects } from '../data/projects'

export default function FeaturedWork() {
  return (
    <section id="work" className="relative px-6 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 md:mb-20 md:flex-row md:items-end">
          <div>
            <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
              Selected work · 2023–2026
            </p>
            <h2 className="mt-3 text-4xl leading-[1.02] font-semibold tracking-tight md:text-6xl">
              Three projects,{' '}
              <em className="font-serif text-[1.05em] font-normal italic text-accent">
                one thread
              </em>
              :<br />
              take the friction out.
            </h2>
          </div>
          <Link
            to="/work"
            className="group inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 font-mono text-sm text-foreground transition-all hover:-translate-y-0.5 hover:shadow-md"
          >
            All work
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="flex flex-col gap-8 md:gap-14">
          {projects.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                to={`/work/${project.slug}`}
                className="group grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-10"
              >
                <div className={`md:col-span-8 ${i % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="relative aspect-[16/10] overflow-hidden rounded-3xl bg-muted md:aspect-[16/9]">
                    <img
                      src={project.cover}
                      alt={project.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
                    />
                    <div className="absolute top-4 left-4 flex items-center gap-2 rounded-full border border-white/25 bg-black/35 px-3 py-1 font-mono text-[11px] tracking-widest text-white uppercase backdrop-blur">
                      <span
                        className="inline-block size-1.5 rounded-full"
                        style={{ background: project.accent }}
                      />
                      {project.tag}
                    </div>
                    <div className="absolute right-4 bottom-4 flex size-11 items-center justify-center rounded-full bg-white text-foreground shadow-lg transition-transform duration-500 group-hover:rotate-45">
                      <ArrowUpRight className="size-5" />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-center md:col-span-4">
                  <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
                    0{i + 1} · {project.industry} · {project.year}
                  </p>
                  <h3 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                    {project.title}
                  </h3>
                  <p className="mt-2 font-serif text-xl italic text-foreground/85">
                    {project.tagline}
                  </p>
                  <p className="mt-4 text-muted-foreground">{project.description}</p>

                  <div className="mt-6 flex items-baseline gap-6">
                    {project.metrics.slice(0, 2).map((m) => (
                      <div key={m.label}>
                        <div className="text-2xl font-semibold tracking-tight text-foreground">
                          {m.value}
                        </div>
                        <div className="mt-1 font-mono text-[11px] tracking-wide text-muted-foreground uppercase">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-foreground">
                    <span className="underline decoration-accent decoration-2 underline-offset-4">
                      Read the case study
                    </span>
                    <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
