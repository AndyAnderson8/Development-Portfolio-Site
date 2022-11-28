import React from 'react'
import "./about.css"
import propic from "../../assets/propic.png"
import Particles from "../particles/Particles"

export const About = () => {
  return (
    <div className="container tsparticles">
      <Particles />
      <div className="content">
        <div className="text" whileHover={{scale: 1.05}}>
          <h3>Hello!👋 My name is</h3>
          <h1>Andy Anderson</h1>
          <p className="text-light">I’m a computer science student at the University of Washington studying to become a software engineer.</p>
        </div>
        <div className="image" whileHover={{scale: 1.05}}>
          <img className="propic" src={propic} alt="Me" />
        </div>
      </div>
    </div>
  )
}

export default About