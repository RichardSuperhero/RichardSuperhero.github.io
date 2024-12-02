import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Portfolio from './components/Portfolio'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'
import PageLayout from './components/PageLayout'

export default function Home() {
  return (
    <PageLayout>
      <Header />
      <div className="pt-20">
        <Hero />
        <About />
        <Experience />
        <Services />
        <Portfolio />
        <Contact />
      </div>
      <Footer />
    </PageLayout>
  )
}
