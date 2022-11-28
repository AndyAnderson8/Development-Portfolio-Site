import React from 'react'
import "./tilecard.css"
import {BsGithub} from 'react-icons/bs';
import {BsFillArrowUpRightCircleFill} from 'react-icons/bs';
import {motion} from "framer-motion"

export const Tilecard = (props) => {
  return (
    <motion.div className="container tilecard"
      whileHover={{y: -25, scale: 1.05}}
    >
      <img className="screenshot" src={props.image} alt="Project Screenshot" />
      <div className="information">
        <div className="headbar">
          <h4 className="name">
            {props.name}
          </h4>
          <div className="icons">
              <a className="icon" href={props.github}><BsGithub /></a>
              <a className="icon" href={props.link}><BsFillArrowUpRightCircleFill /></a>
          </div>
        </div>
        <div className="description"></div>
          <p>{props.description}</p>
      </div>
      <div className="tags">
        <p className={"tag " + props.tag1.toLowerCase()}>{props.tag1.toUpperCase()}</p>
        <p className={"tag " + props.tag2.toLowerCase()}>{props.tag2.toUpperCase()}</p>
        <p className={"tag " + props.tag3.toLowerCase()}>{props.tag3.toUpperCase()}</p>
      </div>
    </motion.div>
  )
}

export default Tilecard