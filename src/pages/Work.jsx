import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { projects } from '../data/projects'

export default function Work() {
  return (
    <>
      <Header />
      <main>
        <section className="mx-auto max-w-7xl px-6 pt-36 pb-16 md:px-8 md:pt-44 md:pb-20">
          <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
            Work · 2023 → 2026
          </p>
          <h1 className="mt-5 text-6xl leading-[0.98] font-semibold tracking-tight md:text-8xl">
            Selected projects,{' '}
            <em className="font-serif font-normal italic text-accent">
              shipped
            </em>{' '}
            or in orbit.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            A slower list than my full CV — the projects I'd re-do on purpose, and
            the ones I'd hand a junior designer to learn from.
          </p>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-24 md:px-8 md:pb-32">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className={i === 0 ? 'md:col-span-2' : ''}
              >
                <Link
                  to={`/work/${project.slug}`}
                  className="group block overflow-hidden rounded-3xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-2xl"
                >
                  <div
                    className={`relative overflow-hidden ${
                      i === 0 ? 'aspect-[16/8]' : 'aspect-[4/3]'
                    }`}
                  >
                    <img
                      src={project.cover}
                      alt={project.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.05]"
                    />
                    <div className="absolute top-4 left-4 flex items-center gap-2 rounded-full border border-white/25 bg-black/40 px-3 py-1 font-mono text-[11px] tracking-widest text-white uppercase backdrop-blur">
                      <span
                        className="inline-block size-1.5 rounded-full"
                        style={{ background: project.accent }}
                      />
                      {project.tag}
                    </div>
                  </div>
                  <div className="flex items-start justify-between gap-4 p-6 md:p-8">
                    <div>
                      <p className="font-mono text-[11px] tracking-widest text-muted-foreground uppercase">
                        {project.industry} · {project.year} · {project.role}
                      </p>
                      <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
                        {project.title}
                      </h2>
                      <p className="mt-1 font-serif text-lg italic text-foreground/80">
                        {project.tagline}
                      </p>
                    </div>
                    <div className="mt-1 flex size-10 shrink-0 items-center justify-center rounded-full border border-border text-foreground transition-all group-hover:rotate-45 group-hover:border-accent group-hover:text-accent">
                      <ArrowUpRight className="size-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 rounded-3xl border border-dashed border-border p-8 text-center md:p-12">
            <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
              Working on something else
            </p>
            <p className="mx-auto mt-4 max-w-xl font-serif text-2xl italic text-foreground md:text-3xl">
              Two more case studies land here in Q2. If you're hiring or curious,
              the fastest path is a short email.
            </p>
            <a
              href="mailto:koriigami@gmail.com"
              className="mt-6 inline-flex h-11 items-center gap-2 rounded-full bg-foreground px-5 text-sm text-background transition-transform hover:-translate-y-0.5"
            >
              Say hello
              <ArrowUpRight className="size-4" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
