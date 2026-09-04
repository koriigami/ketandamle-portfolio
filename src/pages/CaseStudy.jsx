import { useParams, Link } from 'react-router-dom'
import Header from '../components/Header'
import { projectBySlug } from '../data/projects'

export default function CaseStudy() {
  const { slug } = useParams()
  const project = projectBySlug(slug)

  if (!project) {
    return (
      <>
        <Header />
        <main className="mx-auto max-w-3xl px-6 pt-40 pb-24 text-center">
          <p className="font-mono text-sm text-muted-foreground">no case study</p>
          <h1 className="mt-4 font-serif text-5xl italic tracking-tight">
            couldn't find "{slug}"
          </h1>
          <Link to="/work" className="mt-8 inline-block underline">
            Back to work
          </Link>
        </main>
      </>
    )
  }

  return (
    <>
      <Header />
      <main className="mx-auto max-w-4xl px-6 pt-40 pb-24">
        <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
          {project.tag} · {project.industry} · {project.year}
        </p>
        <h1 className="mt-4 text-5xl leading-[1.02] font-semibold tracking-tight md:text-7xl">
          {project.title}
        </h1>
        <p className="mt-4 max-w-2xl text-xl text-muted-foreground">{project.tagline}</p>
        <p className="mt-16 text-muted-foreground">Full case study coming soon.</p>
      </main>
    </>
  )
}
