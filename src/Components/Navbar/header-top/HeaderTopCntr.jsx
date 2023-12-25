import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const HeaderTopCntr = () => {
  return (
    <>
      <section className="header-top flex content-center justify-center">
        <div className="text-center font-black tracking-wider lg:flex md:justify-between lg:justify-around lg:w-[970px] xl:w-[1500px] 2xl:w-[1170px]">
          <p className="top-header-text font-spartan text-center text-[13px] md:text-[15px]">
            Welcome to the National Institute of Fine Arts
          </p>
          <div className="flex flex-col sm:flex-row md:flex-row items-center">
            <div className="flex px-[15px] py-[2px]">
              <div>
                <a
                  href="tel:9555112200"
                  target="_top"
                  className="flex items-center mr-[20px]"
                >
                  <BsFillTelephoneFill className="mr-[10px]" />
                  <span>9555112200</span>
                </a>
              </div>

              <div>
                {" "}
                <a
                  href="tel:9810130552"
                  target="_top"
                  className="flex items-center"
                >
                  <BsFillTelephoneFill className="mr-[10px]" />
                  9810130552
                </a>
              </div>
            </div>
            <ul className="flex items-center px-[15px] py-[2px]">
              <li>
                <a
                  href="mailto:admission@nifafinearts.com"
                  target="_top"
                  className="flex  flex-col sm:flex-row lg:flex-row 2xl:flex-row items-center"
                >
                  <MdEmail className="mr-[10px]" />
                  admission@nifafinearts.com
                </a>
              </li>
              <ul className="header-social ml-[30px] md:ml-[20px] lg:ml-[20px] flex flex-wrap md:flex-wrap md:flex-nowrap items-center justify-center">
                <li>
                  <a
                    href="https://www.facebook.com/nifafinearts"
                    target="_blank"
                  >
                    <FaFacebookF />
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/artsnifa?lang=en"
                    target="_blank"
                  >
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/nifafinearts?igshid=9ni7d0aogzed"
                    target="_blank"
                  >
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/channel/UCud0pfiZT-Ph2JX1_tN6rbw"
                    target="_blank"
                  >
                    <FaYoutube />
                  </a>
                </li>
              </ul>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeaderTopCntr;
