import React from "react"
import Style from "../styles/index.module.css"
import { Button, Footer, NavBar, HeroSection, HeroSection_slider, BigNFTSilder, Service, Title, Category ,Filter, NFTCard, Brand} from "../components/componentsindex"



const Home = () => {
  return (
    <div className={Style.homePage}>
      {/* <h1>Home</h1> */}
      <HeroSection />
      {/* <HeroSection_slider /> */}
      {/* <Service /> */}
      {/* <Title
        heading="Game Assets"
        // paragraph="Discover the most popular game assets in all kinds of games."
      /> */}
      <BigNFTSilder />
      <Title
        heading="Category"
      />
      <Category />
      <Filter />
      <NFTCard />
      <Brand/>

    </div>
  )
}
export default Home
