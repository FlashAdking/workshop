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
    let [click , setclick] = useState(false)
  return (
    <>
      <Navbar />
      <Hero />
      <div className="py-20 text-center">
        {/* 'text-black' ensures it shows up on the white background */}
        <p className="text-black text-3xl font-bold mb-6">
          The value is: {click ? "TRUE" : "FALSE"}
        </p>

        {/* Added styling and text so the button is visible and clickable */}
        <button 
          onClick={() => setclick(!click)}
          className="px-8 py-3 bg-slate-200 text-black border-2 border-black font-bold rounded-md hover:bg-slate-300 transition-all"
        >
          Click to Toggle
        </button>
      </div>
      <Footer />
    </>
  )
}

export default App
