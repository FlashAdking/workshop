import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './Navbar'
import Hero from './Hero'
import Footer from './Footer'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero />
      <Footer />
      <p className="min-h-screen bg-slate-900 text-white flex items-center p-10 text-center backdrop-blur-0 font-bold justify-center sty">
        Tailwind is officially active!
      </p>
    </>
  )
}

export default App
