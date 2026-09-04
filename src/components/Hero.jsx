import { Link } from 'react-router-dom'
import { ArrowDown, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import HeroBlob from './three/HeroBlob'

export default function Hero() {
  return (
    <section className="relative flex min-h-svh items-center overflow-hidden pt-24 pb-16">
      {/* Three.js blob, right-anchored on desktop */}
      <div className="pointer-events-none absolute inset-0 opacity-90 md:right-[-6%] md:left-1/2">
        <HeroBlob />
      </div>

      {/* Soft radial fade so text stays readable */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(60% 60% at 20% 40%, var(--background) 0%, transparent 70%)',
        }}
      />

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-6 md:grid-cols-2 md:px-8">
        <div className="relative z-10 flex flex-col gap-8">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 font-mono text-xs text-muted-foreground backdrop-blur"
          >
            <span className="inline-block size-1.5 rounded-full bg-accent" />
            Portfolio · 2026
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="text-[clamp(2.75rem,7vw,5.5rem)] leading-[0.98] font-semibold tracking-[-0.035em] text-foreground"
          >
            Product design that
            <br />
            reads like a{' '}
            <em className="font-serif text-[1.08em] font-normal not-italic italic tracking-tight text-accent">
              conversation
            </em>
            ,
            <br />
            not a specification.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-lg text-lg leading-relaxed text-muted-foreground"
          >
            I'm Ketan — a product designer working at the seam of research, systems,
            and taste. Six years shipping calm, useful software across fintech,
            wellness, and B2B SaaS.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap items-center gap-3 pt-2"
          >
            <Link
              to="/work"
              className="group inline-flex h-12 items-center gap-2 rounded-full bg-foreground px-6 text-sm font-medium text-background transition-all hover:-translate-y-0.5 hover:shadow-xl"
            >
              See selected work
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/about"
              className="inline-flex h-12 items-center gap-2 rounded-full border border-border bg-card/60 px-6 text-sm font-medium text-foreground backdrop-blur transition-all hover:bg-card"
            >
              About me
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-6 flex items-center gap-2 font-mono text-xs text-muted-foreground"
          >
            <ArrowDown className="size-3 animate-bounce" />
            <span>scroll for selected work</span>
          </motion.div>
        </div>

        {/* Reserve right-column space so blob and copy don't collide */}
        <div className="hidden h-[520px] md:block" aria-hidden="true" />
      </div>
    </section>
  )
}
