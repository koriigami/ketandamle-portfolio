import Header from '../components/Header'
import Hero from '../components/Hero'
import Marquee from '../components/Marquee'
import FeaturedWork from '../components/FeaturedWork'
import About from '../components/About'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <FeaturedWork />
        <About />
      </main>
      <Footer />
    </>
  )
}
