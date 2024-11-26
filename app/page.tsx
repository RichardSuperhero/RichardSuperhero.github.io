import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Portfolio from './components/Portfolio'
import Skills from './components/Skills'
import Press from './components/Press'
import Contact from './components/Contact'
import Footer from './components/Footer'
import SpaceBackground from './components/SpaceBackground';

export default function Home() {
  return (
    <main className="relative">
      <div className="absolute inset-0 -z-10">
        <SpaceBackground />
      </div>
      <div className="relative">
        <Header />
        <div className="pt-20">
          <Hero />
          <About />
          <Experience />
          <Portfolio />
          <Skills />
          <Press />
          <Contact />
        </div>
        <Footer />
      </div>
    </main>
  )
}
