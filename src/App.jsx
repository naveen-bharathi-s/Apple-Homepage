import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import Navbar from "./components/Navbar"
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import HeroSection from './components/HeroSection'
import HeroSectionOne from './components/HeroSectionOne'
import TableSection from './components/TableSection'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Header />
      <Hero />
      <HeroSection />
      <HeroSectionOne />
      <TableSection />
      <Footer />
    </>
  )
}

export default App
