import Features from "./components/Features"
import Header from "./components/Header"
import Hero from "./components/Hero"

function App() {
  return (
    <>
    <div className="bg-hero-pattern bg-cover bg-no-repeat w-full h-full">      
      <Header />
      <Hero  />
      <Features />
      
    </div>
    </>
  )
}

export default App