import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { projects, projectBySlug } from '../data/projects'

export default function CaseStudy() {
  const { slug } = useParams()
  const project = projectBySlug(slug)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [slug])

  if (!project) {
    return (
      <>
        <Header />
        <main className="mx-auto max-w-3xl px-6 pt-40 pb-24 text-center">
          <p className="font-mono text-sm text-muted-foreground">no case study</p>
          <h1 className="mt-4 font-serif text-5xl italic tracking-tight">
            couldn't find "{slug}"
          </h1>
          <Link to="/work" className="mt-8 inline-flex items-center gap-2 underline">
            <ArrowLeft className="size-4" /> Back to work
          </Link>
        </main>
        <Footer />
      </>
    )
  }

  const idx = projects.findIndex((p) => p.slug === slug)
  const next = projects[(idx + 1) % projects.length]

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="mx-auto max-w-7xl px-6 pt-36 pb-14 md:px-8 md:pt-44 md:pb-20">
          <Link
            to="/work"
            className="group inline-flex items-center gap-2 font-mono text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-0.5" />
            All work
          </Link>

          <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-12">
            <div className="md:col-span-8">
              <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
                <span
                  className="mr-2 inline-block size-1.5 rounded-full align-middle"
                  style={{ background: project.accent }}
                />
                {project.tag} · {project.industry} · {project.year}
              </p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="mt-5 text-6xl leading-[0.98] font-semibold tracking-tight md:text-8xl"
              >
                {project.title}
              </motion.h1>
              <p className="mt-6 max-w-2xl font-serif text-2xl italic text-foreground/85 md:text-3xl">
                {project.tagline}
              </p>
              <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
                {project.description}
              </p>
            </div>

            <div className="md:col-span-4">
              <dl className="grid grid-cols-2 gap-x-6 gap-y-6 md:grid-cols-1">
                {[
                  { k: 'Role', v: project.role },
                  { k: 'Team', v: project.team },
                  { k: 'Duration', v: project.duration },
                  { k: 'Year', v: project.year },
                ].map(({ k, v }) => (
                  <div key={k} className="border-t border-border pt-3">
                    <dt className="font-mono text-[11px] tracking-widest text-muted-foreground uppercase">
                      {k}
                    </dt>
                    <dd className="mt-1 text-sm text-foreground">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* Hero image */}
        <section className="mx-auto max-w-7xl px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden rounded-3xl bg-muted shadow-2xl"
          >
            <img
              src={project.cover}
              alt={`${project.title} cover`}
              className="aspect-[16/9] w-full object-cover"
            />
          </motion.div>
        </section>

        {/* Metrics band */}
        <section className="mx-auto mt-20 max-w-7xl px-6 md:mt-28 md:px-8">
          <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
            Impact
          </p>
          <div className="mt-6 grid grid-cols-1 gap-8 border-t border-border pt-8 md:grid-cols-3 md:gap-16">
            {project.metrics.map((m) => (
              <div key={m.label}>
                <div className="text-5xl font-semibold tracking-tight md:text-6xl">
                  {m.value}
                </div>
                <div className="mt-2 text-base text-muted-foreground">{m.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Problem + Approach + Outcome */}
        <section className="mx-auto mt-24 max-w-7xl px-6 md:mt-32 md:px-8">
          <div className="grid grid-cols-1 gap-14 md:grid-cols-12 md:gap-20">
            <div className="md:col-span-4">
              <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
                01 · The problem
              </p>
              <h3 className="mt-3 text-3xl leading-tight font-semibold tracking-tight md:text-4xl">
                What made this hard.
              </h3>
            </div>
            <p className="md:col-span-8 text-xl leading-relaxed text-foreground/85">
              {project.problem}
            </p>
          </div>

          <div className="mt-24 grid grid-cols-1 gap-14 md:grid-cols-12 md:gap-20">
            <div className="md:col-span-4">
              <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
                02 · The approach
              </p>
              <h3 className="mt-3 text-3xl leading-tight font-semibold tracking-tight md:text-4xl">
                How we got moving.
              </h3>
            </div>
            <ul className="md:col-span-8 space-y-4">
              {project.approach.map((step, i) => (
                <li key={i} className="flex gap-4 border-t border-border pt-4">
                  <span className="mt-1 font-mono text-sm text-accent">
                    0{i + 1}
                  </span>
                  <span className="text-lg text-foreground/85">{step}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-24 grid grid-cols-1 gap-14 md:grid-cols-12 md:gap-20">
            <div className="md:col-span-4">
              <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
                03 · The outcome
              </p>
              <h3 className="mt-3 text-3xl leading-tight font-semibold tracking-tight md:text-4xl">
                What shipped, and why it mattered.
              </h3>
            </div>
            <p className="md:col-span-8 text-xl leading-relaxed text-foreground/85">
              {project.outcome}
            </p>
          </div>
        </section>

        {/* Gallery */}
        <section className="mx-auto mt-24 max-w-7xl px-6 md:mt-32 md:px-8">
          <p className="mb-6 font-mono text-xs tracking-widest text-muted-foreground uppercase">
            Selected screens
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {project.gallery.map((src, i) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className={`overflow-hidden rounded-2xl bg-muted ${
                  i === 0 ? 'md:col-span-2' : ''
                }`}
              >
                <img
                  src={src}
                  alt={`${project.title} — ${i + 1}`}
                  loading="lazy"
                  className={`w-full object-cover ${
                    i === 0 ? 'aspect-[16/9]' : 'aspect-[4/3]'
                  }`}
                />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Pull quote */}
        <section className="mx-auto mt-24 max-w-4xl px-6 md:mt-32 md:px-8">
          <div
            className="rounded-3xl border border-border p-10 md:p-14"
            style={{ background: 'color-mix(in oklch, var(--accent) 8%, var(--card))' }}
          >
            <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
              A line I kept coming back to
            </p>
            <blockquote className="mt-4 font-serif text-3xl leading-[1.15] italic text-foreground md:text-5xl">
              "Design isn't the moment of the reveal — it's the six weeks of quiet
              decisions that led there."
            </blockquote>
          </div>
        </section>

        {/* Next project */}
        <section className="mx-auto mt-24 max-w-7xl px-6 pb-24 md:mt-32 md:px-8 md:pb-32">
          <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
            Next up
          </p>
          <Link
            to={`/work/${next.slug}`}
            className="group mt-6 grid grid-cols-1 items-center gap-6 rounded-3xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-xl md:grid-cols-12 md:gap-10 md:p-8"
          >
            <div className="md:col-span-4">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={next.cover}
                  alt={next.title}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </div>
            </div>
            <div className="md:col-span-8">
              <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
                {next.tag} · {next.industry}
              </p>
              <h3 className="mt-2 text-4xl font-semibold tracking-tight md:text-5xl">
                {next.title}
              </h3>
              <p className="mt-2 font-serif text-xl italic text-foreground/85">
                {next.tagline}
              </p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium">
                <span className="underline decoration-accent decoration-2 underline-offset-4">
                  Read next case study
                </span>
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>
          </Link>
        </section>
      </main>
      <Footer />
    </>
  )
}
