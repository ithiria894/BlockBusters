import React from "react";
import Image from "next/image";
import { BsCircleFill } from "react-icons/bs";

//INTERNAL IMPORT
import Style from "./Category.module.css";
import images from "../../img";

const Category = () => {
  const CategoryArray = [
    {
      images: images.creatorbackground1,
      name: "Axie Infinity",
    },
    {
      images: images.creatorbackground2,
      name: "Decentraland",
    },
    {
      images: images.creatorbackground3,
      name: "Alien Worlds",
    },
    {
      images: images.creatorbackground4,
      name: "The Sandbox",
    },
    {
      images: images.creatorbackground5,
      name: "Zed Run",
    },
    {
      images: images.creatorbackground6,
      name: "Minecraft",
    },

  ];
  return (
    <div className={Style.box_category}>
      <div className={Style.category}>
        {CategoryArray.map((el, i) => (
          <div className={Style.category_box} key={i + 1}>
            <Image
              src={el.images}
              className={Style.category_box_img}
              alt="Background image"
              width={350}
              height={150}
              objectFit="cover"
            />

            <div className={Style.category_box_title}>
              {/* <span>
                <BsCircleFill />
              </span> */}
              <div className={Style.category_box_title_info}>
                <h4>{el.name}</h4>
                <small>{i + 1}995 Game Assets </small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
