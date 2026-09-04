import { Link } from 'react-router-dom'
import { ArrowRight, MapPin } from 'lucide-react'
import { Button } from './ui/button'

export default function Hero() {
  return (
    <section className="flex min-h-[calc(100vh-80px)] items-center px-6 pt-20 md:px-12 lg:px-20">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
        <div className="flex flex-col gap-6">
          <h1 className="text-5xl leading-[1.05] font-black tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Good ideas are common.
            <br />
            Good execution isn't.
          </h1>
          <p className="max-w-md text-lg text-foreground">
            I design and ship real products,{' '}
            <span className="text-muted-foreground">not just polished mockups.</span>
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Button
              render={<Link to="/work" />}
              nativeButton={false}
              className="h-11 gap-2 rounded-xl px-6 text-base"
            >
              See selected work
              <ArrowRight className="size-4" />
            </Button>
            <Button
              variant="outline"
              render={<a href="/resume.pdf" download />}
              nativeButton={false}
              className="h-11 rounded-xl px-6 text-base"
            >
              Download Resume
            </Button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="aspect-[4/5] w-full overflow-hidden rounded-3xl shadow-2xl">
            <img
              src="/hero.jpg"
              alt="Ketan Damle"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute bottom-4 left-4 flex items-center gap-1.5 rounded-full border border-border/50 bg-background/90 px-3 py-1.5 text-xs font-medium text-foreground shadow-md backdrop-blur">
            <MapPin className="size-3.5 text-rose-500" />
            India &middot; Remote
          </div>
        </div>
      </div>
    </section>
  )
}
