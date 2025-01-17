
import About from "./components/About"
import Features from "./components/Features"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Menu from "./components/Menu"

function App() {
  return (
    <>
    <div className="bg-hero-pattern bg-cover bg-no-repeat w-full h-full md:px-4">      
      <Header />
      <Hero  />
      <Features />
      <Menu />
      <About />
            
    </div>
    </>
  )
}

export default App