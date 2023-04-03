import React from "react";
import Image from "next/image";
import { DiJqueryLogo } from "react-icons/di";
import { useRouter } from "next/router";

//INTERNAL IMPORT
import Style from "./Brand.module.css";
import images from "../../img";
import { Button } from "../../components/componentsindex.js";

const Brand = () => {
  const router = useRouter();
  return (
    <div className={Style.Brand}>
      <div className={Style.Brand_box}>
        <div className={Style.Brand_box_left}>
          {/* <Image src={images.logo} alt="brand logo" width={100} height={100} /> */}
          <a href="/">
            {/* <DiJqueryLogo className={Style.Brand_box_left_logo} /> */}
            <Image
            src={images.ust}
            alt="logo"
            width={50}
            // height={60}
            className={Style.Brand_box_left_logo}
          />
          </a>
          <h1>We Are Block Busters</h1>
          <p>A group of UST students that lead and inspire.</p>

          <div className={Style.Brand_box_left_btn}>
            <Button
              btnName="Create"
              handleClick={() => router.push("/uploadNFT")}
            />
            <Button
              btnName="Discover"
              handleClick={() => router.push("/searchPage")}
            />
          </div>
        </div>
        <div className={Style.Brand_box_right}>
          <Image src={images.hero} alt="brand logo" 
          // width={700} 
          // height={600} 
          />
        </div>
      </div>
    </div>
  );
};

export default Brand;
