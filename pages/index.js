import React from "react"
import Style from "../styles/index.module.css"
import { HeroSection } from "../components/componentsindex"

const Home = () => {
  return (
    <div className={Style.homePage}>
      {/* <h1>Home</h1> */}
      <HeroSection />
      
    </div>
  )
}
export default Home
