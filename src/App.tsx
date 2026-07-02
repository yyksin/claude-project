import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { Menu } from './components/Menu'
import { Story } from './components/Story'
import { Testimonials } from './components/Testimonials'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Menu />
        <Story />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
