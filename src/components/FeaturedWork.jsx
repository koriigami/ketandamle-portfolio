import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    image: '/work/01.jpg',
    tag: 'Product Design',
    industry: 'Fintech',
    year: '2023',
    role: 'Product Designer',
    title: 'Project One',
    description: 'A one-line description of what this project solved.',
  },
  {
    image: '/work/02.jpg',
    tag: 'Product Design',
    industry: 'Healthcare',
    year: '2022',
    role: 'UX Researcher & Designer',
    title: 'Project Two',
    description: 'A one-line description of what this project solved.',
  },
  {
    image: '/work/03.jpg',
    tag: 'Design Systems',
    industry: 'SaaS',
    year: '2022–23',
    role: 'Design Lead',
    title: 'Project Three',
    description: 'A one-line description of what this project solved.',
  },
  {
    image: '/work/04.jpg',
    tag: 'Product Design',
    industry: 'E-commerce',
    year: '2021',
    role: 'Product Designer',
    title: 'Project Four',
    description: 'A one-line description of what this project solved.',
  },
]

export default function FeaturedWork() {
  return (
    <section className="px-6 py-24 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 text-3xl font-black tracking-tight text-foreground sm:text-4xl">
          Selected work
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <Link
              key={project.title}
              to="/work"
              className="group overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-xl active:scale-[0.98] active:duration-150"
            >
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col gap-2 border-t border-border p-5">
                <p className="text-xs font-medium tracking-wider text-muted-foreground uppercase">
                  {project.tag} &middot; {project.industry} &middot; {project.year}
                </p>
                <h3 className="flex items-center gap-1 text-lg font-semibold text-foreground">
                  {project.title}
                  <ArrowUpRight className="size-4 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </h3>
                <p className="text-sm font-medium text-foreground/70">Role &mdash; {project.role}</p>
                <p className="text-sm text-muted-foreground">{project.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
