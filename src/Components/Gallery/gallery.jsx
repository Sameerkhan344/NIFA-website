import React from "react";

import apple from "../../assets/images/apple.jpeg";
import bottle from "../../assets/images/bottle.jpg";
import boy from "../../assets/images/boy.jpeg";
import chai from "../../assets/images/chai.jpg";
import chair from "../../assets/images/chair.jpg";
import cock from "../../assets/images/cock.jpg";
import cow from "../../assets/images/cow.jpg";
import eye from "../../assets/images/eye.jpeg";
import flower from "../../assets/images/flower.jpg";
import ganesh from "../../assets/images/ganesh.jpeg";
import girl from "../../assets/images/girl.jpg";
import god from "../../assets/images/god.jpg";
import harry from "../../assets/images/harry.jpeg";
import krishna from "../../assets/images/krishna.jpg";
import meera from "../../assets/images/meera.jpg";
import pakshi from "../../assets/images/pakshi.jpeg";
import pillar from "../../assets/images/pillar.jpg";
import pink from "../../assets/images/pink.jpg";
import sun from "../../assets/images/pink.jpg";
import think from "../../assets/images/think.jpg";
import topi from "../../assets/images/topi.jpg";
import women from "../../assets/images/women.jpg";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

const itemData = [
  {
    img: girl,
    title: "Bed",
  },
  {
    img: bottle,
    title: "Books",
  },
  {
    img: think,
    title: "Sink",
  },
  {
    img: god,
    title: "Kitchen",
  },
  {
    img: sun,
    title: "Blinds",
  },
  {
    img: topi,
    title: "Chairs",
  },
  {
    img: krishna,
    title: "Laptop",
  },
  {
    img: pink,
    title: "Doors",
  },
  {
    img: chair,
    title: "Coffee",
  },
  {
    img: cock,
    title: "Storage",
  },
  {
    img: cow,
    title: "Candle",
  },
  {
    img: meera,
    title: "Coffee table",
  },
  {
    img: chai,
    title: "Coffee",
  },
  {
    img: boy,
    title: "Storage",
  },
  {
    img: eye,
    title: "Candle",
  },
  {
    img: apple,
    title: "Coffee table",
  },
  {
    img: pillar,
    title: "Candle",
  },
  {
    img: ganesh,
    title: "Coffee table",
  },
  {
    img: harry,
    title: "Storage",
  },
  {
    img: pakshi,
    title: "Candle",
  },
  {
    img: flower,
    title: "Flower",
  },
  {
    img: women,
    title: "Women",
  },
];

const gallery = () => {
  return (
    <section className="bg-white">
      <div className="container lg:w-[970px] xl:w-[1000px] 2xl:w-[1200px] text-center 2xl:pt-[50px] 2xl:pb-[70px]">
        <h2 className="font-lexend md:text-[30px] lg:text-[30px] xl:text-[30px] 2xl:text-[30px] font-semibold">
          Students Work
        </h2>
        <ul className="sm:columns-2 md:columns-3 lg:columns-3  2xl:columns-3 xl:col-start-4 2xl:col-span-5 my-[50px]">
          {itemData.map((val, i) => {
            return (
              <li key={i} className="rounded-2xl mt-5">
                <img src={val.img} alt="" className="rounded-[15px]" />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default gallery;
