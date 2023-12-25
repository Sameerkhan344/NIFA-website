import React from "react";

const Marque = () => {
  return (
    <>
      <div className="container marquee md:w-[768px] lg:w-[970px] xl:w-[1170px] 2xl:w-[1170px]">
        <h3 className="font-lexend font-black leading-[23px] max-md:text-[19px] 2xl:text-[20px] max-md:w-[50%] 2xl:w-[25%]  ">
          Nifa Updates::
        </h3>
        <div className="marqueeq">
          <marquee
            behavior="scroll"
            direction="left"
            scrollamount="3"
            scrolldelay="1"
            onmouseover="this.stop()"
            onmouseout="this.start()"
          >
            <p className="text-[20px] 2xl:text-[18px] text-[#b11e6f] leading-[23px] font-lexend max-md:text-[19px]">
              <strong>
                All NIFA courses are now available worldwide through our Live
                and Interactive Online Classes. Please&nbsp;download the NIFA
                app from our online classes page to register for a complimentary
                trial class.
              </strong>
            </p>
          </marquee>
        </div>
      </div>
    </>
  );
};

export default Marque;
