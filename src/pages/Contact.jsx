import { useState } from 'react'
import { ArrowUpRight, Check, Copy } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const EMAIL = 'koriigami@gmail.com'

const opts = [
  { k: 'A short project', v: '2–6 weeks, sharp scope' },
  { k: 'An audit', v: 'Product review or design-system health check' },
  { k: 'A talk / workshop', v: 'Design systems, portfolios, research' },
  { k: 'A coffee', v: "If you're in Bengaluru, I usually say yes" },
]

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 1600)
    } catch {}
  }

  return (
    <>
      <Header />
      <main>
        <section className="mx-auto max-w-7xl px-6 pt-36 pb-16 md:px-8 md:pt-44">
          <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
            Contact
          </p>
          <h1 className="mt-5 max-w-4xl text-6xl leading-[0.98] font-semibold tracking-tight md:text-8xl">
            Let's write a short{' '}
            <em className="font-serif font-normal italic text-accent">first email</em>.
          </h1>
          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-muted-foreground">
            The best briefs start with what you're trying to change and who you're
            trying to change it for. Two paragraphs is plenty.
          </p>
        </section>

        <section className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 pb-24 md:grid-cols-12 md:gap-16 md:px-8 md:pb-32">
          <div className="md:col-span-7">
            <div className="rounded-3xl border border-border bg-card p-8 md:p-10">
              <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
                Email
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-4">
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-3xl font-semibold tracking-tight underline decoration-accent decoration-2 underline-offset-8 md:text-5xl"
                >
                  {EMAIL}
                </a>
                <button
                  onClick={copy}
                  aria-label="Copy email"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 font-mono text-xs text-muted-foreground transition-all hover:text-foreground"
                >
                  {copied ? (
                    <>
                      <Check className="size-3.5 text-emerald-600" /> copied
                    </>
                  ) : (
                    <>
                      <Copy className="size-3.5" /> copy
                    </>
                  )}
                </button>
              </div>
              <p className="mt-6 text-muted-foreground">
                I read every one, and reply within two working days — often the same
                day if it's short.
              </p>

              <div className="mt-10 space-y-4">
                <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
                  Elsewhere
                </p>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {[
                    { l: 'LinkedIn', h: 'https://linkedin.com/in/ketandamle' },
                    { l: 'Read.cv', h: 'https://read.cv/ketandamle' },
                    { l: 'Twitter / X', h: 'https://twitter.com/ketandamle' },
                    { l: 'Instagram', h: 'https://instagram.com/ketandamle' },
                  ].map((s) => (
                    <a
                      key={s.l}
                      href={s.h}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center justify-between rounded-2xl border border-border px-4 py-3 text-sm transition-all hover:-translate-y-0.5 hover:border-accent"
                    >
                      <span className="font-medium">{s.l}</span>
                      <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-5">
            <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
              Good fits
            </p>
            <ul className="mt-6 divide-y divide-border border-y border-border">
              {opts.map((o) => (
                <li key={o.k} className="flex items-baseline justify-between gap-4 py-4">
                  <span className="text-lg font-medium text-foreground">{o.k}</span>
                  <span className="text-right text-sm text-muted-foreground">{o.v}</span>
                </li>
              ))}
            </ul>

            <div
              className="mt-8 rounded-3xl border border-border p-6"
              style={{ background: 'color-mix(in oklch, var(--accent) 8%, var(--card))' }}
            >
              <p className="font-serif text-xl italic text-foreground md:text-2xl">
                "The best clients I've had told me what they'd already tried
                before they told me what they wanted next."
              </p>
              <p className="mt-3 font-mono text-xs tracking-widest text-muted-foreground uppercase">
                — a small ask
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
