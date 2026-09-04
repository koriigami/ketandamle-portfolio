import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function About() {
  return (
    <section className="px-6 py-24 md:px-12 lg:px-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
        <div className="mx-auto w-full max-w-md">
          <div className="aspect-[4/5] w-full overflow-hidden rounded-3xl shadow-2xl">
            <img
              src="/about.jpg"
              alt="Ketan Damle"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <h2 className="text-3xl font-black tracking-tight text-foreground sm:text-4xl">
            About me
          </h2>
          <p className="max-w-lg text-lg leading-relaxed text-muted-foreground">
            I'm Ketan, a product designer who cares more about outcomes than pixels.
            Over the past few years I've worked across fintech, healthcare, and SaaS —
            leading research, shaping systems, and shipping features real people use
            every day. I like ambiguous problems, tight feedback loops, and decisions
            backed by evidence, not opinion. When I'm not designing, I'm probably
            outdoors, chasing mountains or bad coffee.
          </p>
          <Link
            to="/about"
            className="group inline-flex w-fit items-center gap-1.5 text-base font-medium text-foreground"
          >
            <span className="underline decoration-primary decoration-2 underline-offset-4">
              Read the full story
            </span>
            <ArrowRight className="size-4 transition-transform duration-200 ease-out group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
