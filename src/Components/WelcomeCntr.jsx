import React from "react";
import Button from "./Button/Button";
import Marque from "./Marque";

const WelcomeCntr = () => {
  return (
    <section className="bg-white">
      <Marque />
      <div className="container font-spartan font-bold text-center mt-[20px] flex-wrap pb-[25px] text-[13px] lg:w-[970px] xl:w-[1170px] 2xl:w-[1170px] 2xl:pt-[50px] 2xl:pb-[70px]">
        <div id="heading">
          <h1 className="font-lexend text-[19px] mt-[5px] mb-[20px] lg:text-[36px] xl:text-[36px]  2xl:text-[36px]">
            Welcome To <span>National Institute of Fine Arts </span>
          </h1>
        </div>
        <p className="text-[15px] mb-[20px] leading-[23px]">
          National Institute of Fine Arts (NIFA) is a national center for
          education in arts, fostering the excellence of emerging and
          established artists and advancing art to create a more human world.
          National Institute of Fine Arts (NIFA) was established by MRS RENU
          KHERA in Delhi and NCR of Delhi on July 2005. Institute established
          another unit in Panna (M.P) which is affiliated to Raja Mansingh Music
          and Arts University (Gwalior). Its aim is to provide education and
          training to students on a wide spectrum of Fine Arts.
        </p>
        <p className="text-[15px] mb-[20px] leading-[23px]">
          National Institute of Fine Arts is a place where the creative
          expression of individuals is nurtured and a sense of community
          flourishes. We seek to shape the global future of arts with an
          emphasis on excellence that allows its members to reach for the
          highest artistic standards as individuals while recognizing that the
          Art is one of the foundations of a healthy and creative society. This
          is a place where national and international leaders in the arts
          gather, teach, show and perform their work. The institute prides
          itself on its openness and on creating an environment that is safe,
          welcoming, and built on mutual respect.
        </p>
        <p className="bold font-bold font-lexend text-black leading-[23px] text-[16px]">
          <strong>
            National Institute of Fine Arts&nbsp;is a place where the creative
            expression of individuals is nurtured and a sense of community
            flourishes.
          </strong>
        </p>
        <Button />
      </div>
    </section>
  );
};

export default WelcomeCntr;
