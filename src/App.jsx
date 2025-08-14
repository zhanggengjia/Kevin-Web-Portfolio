import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import About from './components/About'
import Projects from './components/Projects'
import MainProjects from './components/MainProjects'
import ArchiProjects from './components/ArchiProjects'

const App = () => {
  return (
    <>
      <div className="main-bg main-bg-light"></div>
      <div className="main-bg main-bg-dark"></div>
      <Navbar />
      <Hero />
      <Skills />
      <About />
      <ArchiProjects />
      <MainProjects />
      <Projects />
    </>

  )
}

export default App