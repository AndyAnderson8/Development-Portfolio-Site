import React from 'react'
import Header from "./components/header/Header"
import About from "./components/about/About"
import Projects from "./components/projects/Projects"
import Connect from "./components/connect/Connect"
import Footer from "./components/footer/Footer"

export const App = () => {
  return (
    <>
      <Header />
      <About />
      <Projects />
      <Connect />
      <Footer />
    </>
  )
}

export default App