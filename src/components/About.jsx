import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

const facts = [
  { k: 'Based in', v: 'Bengaluru, India — remote-first' },
  { k: 'Currently', v: 'Product Designer @ Kaya Finance' },
  { k: 'Before', v: 'Nova, Meru, Lumina, a few good agencies' },
  { k: 'Teaches', v: 'UX & product design at MIT ID · MDes' },
]

export default function About() {
  return (
    <section id="about" className="relative px-6 py-24 md:px-8 md:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 md:grid-cols-12 md:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="md:col-span-5"
        >
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[28px] shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?auto=format&fit=crop&w=1000&q=80"
              alt="Ketan Damle"
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <div className="absolute right-3 bottom-3 rounded-full border border-white/30 bg-black/40 px-3 py-1.5 font-mono text-[11px] tracking-widest text-white uppercase backdrop-blur">
              hi, ketan here
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="md:col-span-7"
        >
          <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
            About
          </p>
          <h2 className="mt-3 text-4xl leading-[1.05] font-semibold tracking-tight md:text-5xl">
            I care more about the{' '}
            <em className="font-serif font-normal italic text-accent">second</em>{' '}
            release than the first.
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
            <p>
              I'm a product designer who's spent the last six years shipping — not
              just pitching — software across fintech, wellness, and B2B SaaS. The
              projects I'm proudest of aren't the flashiest; they're the ones
              still running.
            </p>
            <p>
              I run tight research loops, keep a healthy respect for systems, and
              write copy that survives handoff. I also teach the next lot of
              designers at MIT Institute of Design, because paying it forward
              tends to keep you honest.
            </p>
          </div>

          <dl className="mt-10 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            {facts.map(({ k, v }) => (
              <div
                key={k}
                className="flex flex-col border-t border-border pt-3"
              >
                <dt className="font-mono text-[11px] tracking-widest text-muted-foreground uppercase">
                  {k}
                </dt>
                <dd className="mt-1 text-base text-foreground">{v}</dd>
              </div>
            ))}
          </dl>

          <Link
            to="/about"
            className="group mt-10 inline-flex items-center gap-2 text-base font-medium text-foreground"
          >
            <span className="underline decoration-accent decoration-2 underline-offset-4">
              More about how I work
            </span>
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
