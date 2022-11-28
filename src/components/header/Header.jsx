import React from 'react'
import "./header.css"
import {BsLinkedin} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
import {MdEmail} from 'react-icons/md';

export const Header = () => {
  return (
    <div className="container alt center">
      <div className="bar">
        <div className="header">
          <p>&lt;AndyLabs /&gt;</p>
        </div>
        <div className="links">
          <a href="../Andy-Anderson-CV.pdf"  target="_blank" rel="noopener noreferrer"><div className="btn">View CV</div></a>
          <div className="social-icons">
            <a href="https://linkedin.com/in/andy-anderson4" target="_blank" rel="noopener noreferrer"><BsLinkedin /></a>
            <a href="https://github.com/AndyAnderson8" target="_blank" rel="noopener noreferrer"><BsGithub /></a>
            <a href="mailto:andy@andylabs.org" target="_blank" rel="noopener noreferrer"><MdEmail /></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header