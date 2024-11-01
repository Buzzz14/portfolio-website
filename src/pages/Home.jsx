import React from 'react'

import Hero from "../components/Hero"
import About from '../components/About/About'
import Projects from '../components/Project'

const Home = ({mode}) => {
  return (
    <div>
      <Hero mode={mode}/>
      <About mode={mode}/>
      <Projects mode={mode}/>
    </div>
  )
}

export default Home