import React from "react";
import Button from "./Button/Button";
// import bgimg from "../assets/images/appbg.jpg"

import gplay from "../assets/images/gplay.png";
import appstore from "../assets/images/appstore.png";
import Download from "./Download";

const Onlinecls = () => {
  return (
    <>
      <section className="downapp xl:flex 2xl:flex 2xl:justify-center 2xl:text-center  lg:flex lg:justify-center lg:text-center xl:flex xl:justify-center xl:text-center">
        <div className="2xl:flex lg:flex xl:flex md:w-[768px] lg:w-[970px] xl:w-[1170px] 2xl:w-[1170px] lg:text-center lg:justify-center lg:items-center 2xl:text-center 2xl:justify-center 2xl:items-center xl:text-center xl:justify-center xl:items-center">
          <div className="container text-center lg:text-left xl:text-left 2xl:text-left">
            <div className="">
              <h2 className="font-lexend text-[30px] 2xl:mb-[10px]">
                Online Classes
              </h2>
            </div>
            <p className="font-black text-[15px] leading-[23px]  2xl:mb-[10px]">
              Dear Students/Parents, Nifa presents its Learning App for your
              regular art practice in which we have added many amazing features
              Like: Step-by-step recorded demo videos prepared by your faculty
              members. Regular assessment of your practise through assignment
              section. Live class section from same app. Attendance, payment
              invoice, art news, <br /> announcements, important information and
              direct connect with the management team are some more features. So
              hurry up n join now to experience personalised coaching by experts
              sitting at your home.
            </p>
            <p className="font-black text-[15px] leading-[23px]  2xl:mb-[10px]">
              We wish u Happy Learning. Stay Safe n Healthy.
            </p>
            <Button />
            <Download />
          </div>
          <div className="embed-responsive container">
            <div className="embed-responsive-16by9 border-[5px solid white]">
              <iframe
                className="h-[29vh] md:h-[50vh]  lg:h-[40vh] xl:h-[50vh] 2xl:h-[50vh] w-full"
                src="https://www.youtube.com/embed/-9cJjaLXKqE?rel=0"
                frameborder="0"
                allowfullscreen=""
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Onlinecls;
