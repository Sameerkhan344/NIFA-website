import React from "react";
import gplay from "../assets/images/gplay.png";
import appstore from "../assets/images/appstore.png";
const Download = () => {
  return (
    <section className="my-[10px] sm:my-[20px] md:pt-[50px] md:pb-[10px] md:pt-[50px] md:pb-[10px] lg:pt-[20px] lg:pb-[10px] xl:pt-[20px] xl:pb-[10px]">
      <p className="2xl:pb-[10px] font-lexend  font-semibold text-[20px] leading-[23px] capitalize">
        Download the app
      </p>
      <ul className="nappimg flex mt-[10px]  content-center justify-start sm:content-center sm:justify-center md:content-start md:justify-start 2xl:content-start 2xl:justify-start xl:content-start xl:justify-start lg:content-start lg:justify-start">
        <li className="px-[5px]">
          <a href="https://play.google.com/store/apps/details?id=co.thanos.fljvr">
            <div>
              <img
                src={gplay}
                className="img-responsive w-[150px] rounded-[6px]"
              ></img>
            </div>
          </a>
        </li>
        <li className="px-[5px]">
          <a href="https://apps.apple.com/us/app/apple-store/id1472483563">
            <div>
              <img
                src={appstore}
                className="img-responsive w-[150px] rounded-[6px]"
              ></img>
            </div>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Download;
