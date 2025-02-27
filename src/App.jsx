import BlurBackground from "./components/BlurBackground"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import About from "./components/About"
import Experience from "./components/Experience"
import Contact from "./components/Contact"

const App = () => {
  return (
    <>
     <BlurBackground/>
     <Navbar/>
     <main className="antialiased overflow-x-hidden max-w-full max-auto
     relative z-10">
      <Navbar/>
      <Hero/>
      <Projects/>
      <About/>
      <Experience/>
      <Contact/>
     </main>
    </>
  )
}

export default App
