import React from "react";
import Image from "next/image";
import { BsCircleFill } from "react-icons/bs";

//INTERNAL IMPORT
import Style from "./Category.module.css";
import images from "../../img";

const Category = () => {
  const CategoryArray = [
    {
      images: images.game1,
      name: "MineCraft",
    },
    {
      images: images.game2,
      name: "MineCraft",
    },
    {
      images: images.game3,
      name: "MineCraft",
    },
    {
      images: images.game4,
      name: "MineCraft",
    },
    {
      images: images.game5,
      name: "MineCraft",
    },
    {
      images: images.game,
      name: "MineCraft",
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
              width={400}
              height={350}
              objectFit="cover"
            />

            <div className={Style.category_box_title}>
              {/* <span>
                <BsCircleFill />
              </span> */}
              <div className={Style.category_box_title_info}>
                <h4>{el.name}</h4>
                <small>{i + 1}995 NFTS</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
