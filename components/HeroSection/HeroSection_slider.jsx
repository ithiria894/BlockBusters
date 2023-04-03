import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { BigNFTSilder } from "../componentsindex";

//INTERNAL IMPORT
import Style from "./HeroSection_slider.module.css";
import { Button } from "../componentsindex";
import images from "../../img";

//SMART CONTRACT IMPORT
// import { NFTMarketplaceContext } from "../../Context/NFTMarketplaceContext";

const HeroSection_slider = () => {
  // const { titleData } = useContext(NFTMarketplaceContext);
  const router = useRouter();
  return (
    <div className={Style.heroSection}>
      <div className={Style.heroSection_box}>
        <div className={Style.heroSection_box_left}>
          <h2> Welcome to BlockBuster!</h2>
          
          <p>
            Discover the most popular Game Assets in all kinds of Games. Creative
            your item and sell them.
          </p>
          <Button
            btnName="Start your search"
            handleClick={() => router.push("/searchPage")}
          />
        </div>
        <div className={Style.heroSection_box_right}>

          <BigNFTSilder />
        </div>
      </div>
    </div>
  );
};

export default HeroSection_slider;
