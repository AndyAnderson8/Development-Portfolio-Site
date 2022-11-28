import React from 'react'
import "./projects.css"
import Tilecard from "../tilecard/Tilecard"
import ttm from "../../assets/ToTheMoon.png"
import ds from "../../assets/DaytradingSimulator.png"
import urb from "../../assets/UWRegistrationBot.png"

export const Projects = () => {
  return (
    <div className="container alt">
      <div className="title">
        <h1>Projects</h1>
      </div>
      <div className="content">
        <div className="grid">
          <Tilecard 
            image={ttm}
            name="To The Moon" 
            description="Cookie Clicker-esque game with the primary game mechanic being repeatedly throwing your phone into the air. Gained points can be spent on upgrades increasing active and passive earnings."
            github="https://github.com/AndyAnderson8/ToTheMoon" 
            link="https://github.com/AndyAnderson8/ToTheMoon/releases/tag/alpha"
            tag1="Android"
            tag2="Lua"
            tag3="Solar2D"
          />
          <Tilecard 
            image={ds}
            name="Daytrading Simulator" 
            description="Stock market trading simulator game to test your daytrading abilities. Utilizes real-time price data from Alphavantage's API to generate candlestick charts for various securities over different time intervals."
            github="https://github.com/AndyAnderson8/DaytradingSimulator" 
            link="https://www.roblox.com/games/6910260668/Daytrading-Simulator"
            tag1="Roblox"
            tag2="Lua"
            tag3="Hidden"
          />
          <Tilecard 
            image={urb}
            name="UW Registration Bot" 
            description="Automated tool to monitor the availability of specified classes at UW. Automatically registers for all available classes once registration begins, and continuously monitors closed classes until a seat opens."
            github="https://github.com/AndyAnderson8/UWRegistrationBot" 
            link="https://github.com/AndyAnderson8/UWRegistrationBot"
            tag1="Python"
            tag2="Selenium"
            tag3="Hidden"
          />
        </div>
      </div>
    </div>
  )
}

export default Projects