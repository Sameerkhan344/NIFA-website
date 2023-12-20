import Data from "./data.jsx";
import React, { useEffect } from "react";
import { Card } from "antd";
import Button from "../Button/Button.jsx";
const { Meta } = Card;

const Card1 = () => {
  return (
    <section className="background">
      <div className="container lg:w-[970px] xl:w-[970px] 2xl:w-[1170px] text-center max-md:pt-[50px] max-md:pb-[70px] lg:pt-[50px] lg:pb-[70px] xl:pt-[50px] xl:pb-[70px] 2xl:pt-[50px] 2xl:pb-[70px]">
        <h2 className="font-lexend text-[30px] md:text-[30px] lg:text-[30px] xl:text-[30px] 2xl:text-[30px] font-semibold">
          Our Courses
        </h2>
        <div className="rounded-t-lg my-1 px-1 grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4  gap-6 place-content-center place-items-center max-md:grid-cols-1">
          {Data.map((val, i) => {
            return (
              <ul key={i}>
                <li className="card">
                  <img src={val.image} alt="" className="w-full" />

                  <div className="py-[10px] px-[20px]">
                    <p className="text-sm font-spartan font-semibold text-center">
                      {val.para}
                    </p>
                    <Button />
                  </div>
                </li>
              </ul>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Card1;
