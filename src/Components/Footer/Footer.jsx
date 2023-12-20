import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { Typography } from "@material-tailwind/react";
import Download from "../Download";

const currentYear = new Date().getFullYear();
const Footer = () => {
  return (
    <footer className="ft-bg">
      <section className="relative w-full">
        <div className="mx-auto w-full max-w-7xl px-8 md:w-[768px] lg:w-[970px] xl:w-[970px] 2xl:w-[1170px]">
          <div className="mx-auto grid w-full grid-cols-2 gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <h1 className="font-lexend font-black text-[18px] capitalize text-black mb-[1rem] leading-[23px]">
                Company
              </h1>
              <ul className="space-y-1">
                <li>
                  <a
                    href="#"
                    className="list-group mb-[20px] pl-[0px] font-lexend text-[16px] py-[3px]"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="list-group mb-[20px] pl-[0px] font-lexend text-[16px] py-[3px]"
                  >
                    Facilities
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="list-group mb-[20px] pl-[0px] font-lexend text-[16px] py-[3px]"
                  >
                    Career
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="list-group mb-[20px] pl-[0px] font-lexend text-[16px] py-[3px]"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="list-group mb-[20px] pl-[0px] font-lexend text-[16px] py-[3px]"
                  >
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="list-group mb-[20px] pl-[0px] font-lexend text-[16px] py-[3px]"
                  >
                    Refund Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="list-group mb-[20px] pl-[0px] font-lexend text-[16px] py-[3px]"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h1 className="font-lexend font-black text-[18px] capitalize text-black mb-[1rem] leading-[23px]">
                Activities
              </h1>
              <ul className="space-y-1">
                <li>
                  <a
                    href="#"
                    className="list-group mb-[20px] pl-[0px] font-lexend text-[16px] py-[3px]"
                  >
                    Art Gallery{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="list-group mb-[20px] pl-[0px] font-lexend text-[16px] py-[3px]"
                  >
                    Workshops
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="list-group mb-[20px] pl-[0px] font-lexend text-[16px] py-[3px]"
                  >
                    Outdoor Activities
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="list-group mb-[20px] pl-[0px] font-lexend text-[16px] py-[3px]"
                  >
                    Media Coverage
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="list-group mb-[20px] pl-[0px] font-lexend text-[16px] py-[3px]"
                  >
                    Art Events
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="list-group mb-[20px] pl-[0px] font-lexend text-[16px] py-[3px]"
                  >
                    Exhibition
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="list-group mb-[20px] pl-[0px] font-lexend text-[16px] py-[3px]"
                  >
                    Daily Activities
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h1 className="font-lexend font-black text-[18px] capitalize text-black mb-[1rem] leading-[23px]">
                Popular Course
              </h1>
              <ul className="space-y-1">
                <li>
                  <a
                    href="#"
                    className="list-group mb-[20px] pl-[0px] font-lexend text-[16px] py-[3px]"
                  >
                    Diploma In Fine Arts
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="list-group mb-[20px] pl-[0px] font-lexend text-[16px] py-[3px]"
                  >
                    Certificate Hobby Course
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="list-group mb-[20px] pl-[0px] font-lexend text-[16px] py-[3px]"
                  >
                    Entrance Preparation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="list-group mb-[20px] pl-[0px] font-lexend text-[16px] py-[3px]"
                  >
                    BFA
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="list-group mb-[20px] pl-[0px] font-lexend text-[16px] py-[3px]"
                  >
                    Animation Sketching
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="list-group mb-[20px] pl-[0px] font-lexend text-[16px] py-[3px]"
                  >
                    Kids Diploma
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h1 className="font-lexend font-black text-[18px] capitalize text-black mb-[1rem] leading-[23px]">
                Our Locations
              </h1>
              <ul className="space-y-1">
                <li>
                  <a
                    href="#"
                    className="list-group mb-[20px] pl-[0px] font-lexend text-[16px] py-[3px]"
                  >
                    Gurgaon (Dlf Phase - 4)
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="list-group mb-[20px] pl-[0px] font-lexend text-[16px] py-[3px]"
                  >
                    Mumbai (Andheri West)
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="list-group mb-[20px] pl-[0px] font-lexend text-[16px] py-[3px]"
                  >
                    South Delhi (Kailash Colony)
                  </a>
                </li>
                <li className="pt-[10px]">
                  <h1 className="font-lexend font-black text-[18px] capitalize text-black mb-[1rem] leading-[23px]">
                    International Branches
                  </h1>
                </li>
                <li>
                  <a
                    href="#"
                    className="list-group mb-[20px] pl-[0px] font-lexend text-[16px] py-[3px]"
                  >
                    London
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="list-group mb-[20px] pl-[0px] font-lexend text-[16px] py-[3px]"
                  >
                    USA
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="list-group mb-[20px] pl-[0px] font-lexend text-[16px] py-[3px]"
                  >
                    Dubai, UAE
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex w-full flex-col  justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
            <Typography variant="small" className="mb-4 md:mb-0">
              <p className="nfothed mt-4 mt-sm-0 font-lexend font-black text-xl">
                NIFA is a unit of Nifaedutech Pvt Ltd.
              </p>
              <p className="nfothed mt-4 mt-sm-0 font-lexend font-black text-xl">
                Connect with us
              </p>
              <p className="font-lexend text-[18px] leading-[23px]">
                <a href="tel:9555112200" target="_top">
                  9555112200
                </a>
                ,
                <a href="tel:9810130552" target="_top">
                  9810130552
                </a>{" "}
              </p>
              <p className="font-lexend text-[18px] leading-[23px]">
                <a href="mailto:admission@nifafinearts.com" target="_top">
                  admission@nifafinearts.com
                </a>
              </p>
              <ul className="list-inline nfot-soclist flex">
                <li className="list-inline-item">
                  <a
                    href="https://www.facebook.com/nifafinearts"
                    target="_blank"
                  >
                    <FaFacebookF />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="https://twitter.com/artsnifa?lang=en"
                    target="_blank"
                  >
                    <FaTwitter />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="https://instagram.com/nifafinearts?igshid=9ni7d0aogzed"
                    target="_blank"
                  >
                    <FaInstagram />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="https://www.youtube.com/channel/UCud0pfiZT-Ph2JX1_tN6rbw"
                    target="_blank"
                  >
                    <FaYoutube />
                  </a>
                </li>
              </ul>
            </Typography>

            <div className=" gap-4 sm:justify-center">
              <Download />
              <Typography
                variant="small"
                className="mb-4 text-center font-normal text-black font-bold text-[11px] mt-[2rem] md:mb-0"
              >
                &copy; copyright {currentYear}{" "}
                <a href="https://material-tailwind.com/">
                  NIFA Fine Arts. All Rights Reserved
                </a>
              </Typography>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
