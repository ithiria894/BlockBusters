import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

//INTERNAL IMPORT
import Style from "./HeroSection.module.css";
import { Button } from "../componentsindex";
import images from "../../img";

//SMART CONTRACT IMPORT
import { NFTMarketplaceContext } from "../../Context/NFTMarketplaceContext";

const HeroSection = () => {
  const { titleData } = useContext(NFTMarketplaceContext);
  const router = useRouter();
  return (
    <div className={Style.heroSection}>
      <div className={Style.heroSection_box}>
        <div className={Style.heroSection_box_left}>
          <h1> Welcome to BlockBuster!</h1>

          <div className={Style.heroSection_box_left_h2}>Online Game Assets Custody and Trading Platform
          </div>
          <p>Revolutionizing In Game Asset Trading with Web3 Technology</p>

          <Button
            btnName="Start your search"
            handleClick={() => router.push("/searchPage")}
          />
        </div>
        <div className={Style.heroSection_box_right}>
          <Image
            className={Style.heroSection_box_right}
            src={images.hero3}
            alt="Hero section"
            // width={600}
            // height={600}
            // border-radius="2rem"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
