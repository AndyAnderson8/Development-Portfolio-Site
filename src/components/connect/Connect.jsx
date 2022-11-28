import React from 'react'
import "./connect.css"
import {motion} from "framer-motion"

export const Connect = () => {
  return (
    <div className="container">
      <div className="title">
        <h1>Let's Connect!</h1>
      </div>
      <div className="content center">
        <motion.div className="box" whileHover={{y: -15, scale: 1.05}}>
          <form className="contact-form" action="https://formsubmit.co/37311b2ff2312891a5e69a852c0b3bd4" method="POST">
            <input className="name input" type="text" name="Name" placeholder="Name"></input>
            <input className="email input" type="email" name="Email" placeholder="Email Address"></input>
            <textarea className="message input" type="text" name="Message" placeholder="Message"></textarea>
            <button className="submit" type="submit">Send Message</button>
          </form>
        </motion.div>
      </div>
    </div>
  )
}

export default Connect