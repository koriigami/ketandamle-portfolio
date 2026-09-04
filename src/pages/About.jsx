import Header from '../components/Header'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

const timeline = [
  {
    when: '2024 → now',
    where: 'Kaya Finance',
    role: 'Senior Product Designer',
    what:
      'Leading design for a mobile-first banking product for freelancers. Own the home experience, income smoothing, and the onboarding funnel.',
  },
  {
    when: '2022 → 2024',
    where: 'Nova',
    role: 'Design Systems Lead',
    what:
      'Built Nova UI — the design system that now backs 7 products and a 40-person product org. Set up token architecture, component contracts, and the Figma ↔ code loop.',
  },
  {
    when: '2020 → 2022',
    where: 'Lumina',
    role: 'Product Designer',
    what:
      'Rebuilt the onboarding and first-session experience of a wellness app. Cut drop-off in half and grew day-2 retention.',
  },
  {
    when: '2019 → 2020',
    where: 'Independent',
    role: 'Freelance Designer',
    what:
      'A small run of agency and start-up work — brand systems, landing pages, and one very stubborn healthcare CRM.',
  },
]

const principles = [
  {
    n: '01',
    t: 'Ship the second release.',
    d: 'The first launch is a hypothesis. Design for the version that lands two months later.',
  },
  {
    n: '02',
    t: 'Research is a habit, not a phase.',
    d: 'Twenty small conversations beat one enormous discovery sprint. Learn continuously.',
  },
  {
    n: '03',
    t: 'Systems earn their keep.',
    d: 'A component library that is slower than copy-paste will lose. Make the right thing the easy thing.',
  },
  {
    n: '04',
    t: 'Copy is UX.',
    d: 'A well-written label removes an entire screen. Write it before you draw the layout.',
  },
]

export default function About() {
  return (
    <>
      <Header />
      <main>
        <section className="mx-auto max-w-7xl px-6 pt-36 pb-16 md:px-8 md:pt-44">
          <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
            About · Ketan Damle
          </p>
          <h1 className="mt-5 max-w-4xl text-6xl leading-[0.98] font-semibold tracking-tight md:text-8xl">
            I design software the way a{' '}
            <em className="font-serif font-normal italic text-accent">good editor</em>{' '}
            reads a manuscript.
          </h1>
          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-muted-foreground">
            Patient with the argument, ruthless with the excess. Six years of product
            design, one long apprenticeship in taking things out.
          </p>
        </section>

        <section className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 py-16 md:grid-cols-12 md:gap-16 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="md:col-span-5"
          >
            <div className="overflow-hidden rounded-[28px] shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1000&q=80"
                alt="Ketan at work"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <p className="mt-3 text-center font-mono text-xs text-muted-foreground">
              Bengaluru · Sep 2025 · shot by a very patient friend
            </p>
          </motion.div>

          <div className="md:col-span-7 space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              I grew up somewhere between engineering and art school and never
              quite picked a side. That's turned out to be useful — I spend as much
              time in a Figma file as I do in a linear ticket, a research repo, or
              a Notion doc explaining why the shipped thing looks the way it does.
            </p>
            <p>
              I care about three things in roughly this order:{' '}
              <span className="text-foreground">the person on the other end</span>,{' '}
              <span className="text-foreground">the team who has to maintain it</span>
              , and <span className="text-foreground">the version of the product two years from now</span>.
              Everything else is negotiable.
            </p>
            <p>
              Outside work I teach at MIT Institute of Design, walk more than a
              reasonable person should, and keep a running list of small
              interactions that made me smile.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-24">
          <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
            How I work
          </p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
            Four principles.
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {principles.map((p) => (
              <div
                key={p.n}
                className="rounded-3xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <div className="font-mono text-sm text-accent">{p.n}</div>
                <div className="mt-3 text-2xl font-semibold tracking-tight">{p.t}</div>
                <div className="mt-3 text-muted-foreground">{p.d}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-24">
          <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
            Timeline
          </p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
            Where I've spent my time.
          </h2>
          <ol className="mt-12 space-y-0">
            {timeline.map((t, i) => (
              <li
                key={t.where + i}
                className="grid grid-cols-1 gap-6 border-t border-border py-8 md:grid-cols-12 md:gap-10"
              >
                <div className="md:col-span-3">
                  <div className="font-mono text-sm text-muted-foreground">{t.when}</div>
                </div>
                <div className="md:col-span-3">
                  <div className="text-xl font-semibold tracking-tight">{t.where}</div>
                  <div className="text-sm text-muted-foreground">{t.role}</div>
                </div>
                <div className="md:col-span-6">
                  <p className="text-lg text-foreground/85">{t.what}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>
      </main>
      <Footer />
    </>
  )
}
