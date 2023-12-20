import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { Typography } from "@material-tailwind/react";
import Download from "../Download";
const SITEMAP = [
  {
    title: "Company",
    links: [
      "About",
      "Facilities",
      "Career",
      "Contact us",
      "Terms & Conditions",
      "Refund Policy",
      "Privacy Policy",
    ],
  },
  {
    title: "Activities",
    links: [
      "Art Gallery",
      "Workshops",
      "Outdoor Activities",
      "Media Coverage",
      "Art Events",
      "Exhibition",
      "Daily Activities",
    ],
  },
  {
    title: "Popular Course",
    links: [
      "Diploma in Fine Arts",
      "Certificate Hobby Course",
      "Entrance Preparation",
      "BFA",
      "Animation Sketching",
      "Kids Diploma",
    ],
  },
  {
    title: "Our Locations",
    links: ["Gurgaon (Dlf Phase - 4)", "South Delhi (Kailash Colony)"],
  },
  {
    title: "International Branches",
    links: ["London", "USA", "Dubai, UAE"],
  },
];
const currentYear = new Date().getFullYear();
const Footer = () => {
  return (
    <footer className="relative w-full">
      {/* <div className="nfotcont">
        <div className="">
          <div className="row1 flex container ">
            <div className="flex">
              <div className="company container">
                <p className="font-lexend font-black text-[18px] capitalize text-black mb-[1rem] leading-[23px]">
                  Company
                </p>
                <ul className="list-group mb-[20px] pl-[0px] font-lexend text-[16px] py-[3px]">
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Facilities</a>
                  </li>
                  <li>
                    <a href="#">Career</a>
                  </li>
                  <li>
                    <a href="#">Contact us</a>
                  </li>
                  <li>
                    <a href="#">Terms & Conditions</a>
                  </li>
                  <li>
                    <a href="#">Refund Policy</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                </ul>
              </div>
              <div className="Activities container">
                <p className="font-lexend font-black text-[18px] capitalize text-black mb-[1rem] leading-[23px]">
                  Activities
                </p>
                <ul className="list-group mb-[20px] pl-[0px] font-lexend text-[16px] py-[3px]">
                  <li>
                    <a href="#">Art Gallery</a>
                  </li>
                  <li>
                    <a href="#">Workshops</a>
                  </li>
                  <li>
                    <a href="#">Outdoor Activities</a>
                  </li>
                  <li>
                    <a href="#">Media Coverage</a>
                  </li>
                  <li>
                    <a href="#">Art Events</a>
                  </li>
                  <li>
                    <a href="#">Exhibition</a>
                  </li>
                  <li>
                    <a href="#">Daily Activities</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex container">
              <div className="Popular Course">
                <p className="font-lexend font-black text-[18px] capitalize text-black mb-[1rem] leading-[23px]">
                  Popular Course
                </p>
                <ul className="list-group mb-[20px] pl-[0px] font-lexend text-[16px] py-[3px]">
                  <li>
                    <a href="#">Diploma in Fine Arts</a>
                  </li>
                  <li>
                    <a href="#">Certificate Hobby Course</a>
                  </li>
                  <li>
                    <a href="#">Entrance Preparation</a>
                  </li>
                  <li>
                    <a href="#">BFA</a>
                  </li>
                  <li>
                    <a href="#">Animation Sketching</a>
                  </li>
                  <li>
                    <a href="#">Kids Diploma</a>
                  </li>
                </ul>
              </div>
              <div className="">
                <div className="Our Locations">
                  <p className="font-lexend font-black text-[18px] capitalize text-black mb-[1rem] leading-[23px]">
                    Our Locations
                  </p>
                  <ul className="list-group mb-[20px] pl-[0px] font-lexend text-[16px] py-[3px]">
                    <li>
                      <a href="#">Gurgaon (Dlf Phase - 4)</a>
                    </li>
                    <li>
                      <a href="#">Mumbai (Andheri West)</a>
                    </li>
                    <li>
                      <a href="#">South Delhi (Kailash Colony)</a>
                    </li>
                  </ul>
                </div>
                <div className="International Branches">
                  <p className="font-lexend font-black text-[18px] capitalize text-black mb-[1rem] leading-[23px]">
                    International Branches
                  </p>
                  <ul className="list-group mb-[20px] pl-[0px] font-lexend text-[16px] py-[3px]">
                    <li>
                      <a href="#">London</a>
                    </li>
                    <li>
                      <a href="#">USA</a>
                    </li>
                    <li>
                      <a href="#">Dubai, UAE</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row2"></div>
        </div>
      </div> */}
      <div className="mx-auto w-full max-w-7xl px-8 lg:w-[970px] xl:w-[970px] 2xl:w-[1170px]">
        <div className="mx-auto grid w-full grid-cols-2 gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
          {SITEMAP.map(({ title, links }, key) => (
            <div key={key} className="w-full">
              {/* <Typography
                variant="small"
                color="blue-gray"
                className="mb-4 font-bold uppercase opacity-50"
              > */}
              <h1 className="font-lexend font-black text-[18px] capitalize text-black mb-[1rem] leading-[23px]">
                {title}
              </h1>
              {/* </Typography> */}
              <ul className="space-y-1">
                {links.map((link, key) => (
                  <Typography
                    key={key}
                    as="li"
                    color="blue-gray"
                    className="font-normal"
                  >
                    <a
                      href="#"
                      //   className="inline-block py-1 pr-2 transition-transform hover:scale-105"
                      className="list-group mb-[20px] pl-[0px] font-lexend text-[16px] py-[3px]"
                    >
                      {link}
                    </a>
                  </Typography>
                ))}
              </ul>
            </div>
          ))}
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
                <a href="https://www.facebook.com/nifafinearts" target="_blank">
                  <FaFacebookF />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://twitter.com/artsnifa?lang=en" target="_blank">
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
    </footer>
  );
};

export default Footer;
