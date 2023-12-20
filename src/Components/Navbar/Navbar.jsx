import React from "react";
import HeaderTopCntr from "./header-top/HeaderTopCntr";
import IMAGES from "../../assets/images/nifa-new-logo.png";
import email from "../../assets/images/email.png";
import phone from "../../assets/images/phone.png";
import Dropdown from "./Dropdown";

const Navbar = () => {
  return (
    <>
      <HeaderTopCntr />
      <nav className="flex content-center container lg:w-[1070px] xl:w-[1170px] md:w-[768px] 2xl:w-[1170px] flex content-center 2xl:justify-between  xl:justify-between text-center md:justify-center justify-center lg:flex-row xl:flex-row 2xl:flex-row md:flex-col">
        <div className="">
          <div id="logo">
            <a href="./">
              <div>
                <img src={IMAGES} class="img-responsive"></img>
              </div>
            </a>
          </div>

          <div className="responsive max-md:block xl:hidden 2xl:hidden lg:hidden">
            <ul className="flex flex-col content-center justify-center">
              <li className="font-lexend text-[18px] flex justify-center content-center">
                <img src={email} alt="" className="w-[16px]" />
                <a href="mailto:admission@nifafinearts.com">
                  admission@nifafinearts.com
                </a>
              </li>
              <li className="font-lexend text-[18px] flex content-center justify-center">
                <img src={phone} alt="" className="w-[10px]" />
                <a href="#">+91-9555112200/9810130552</a>
              </li>
            </ul>
          </div>
          <Dropdown />
        </div>

        <div className="flex content-center justify-center">
          <div className="menu flex content-center justify-center items-center max-md:hidden">
            <ul className="nav font-lexend text-[15px] font-bold flex">
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Courses</a>
              </li>
              <li>
                <a href="">Activities</a>
              </li>
              <li>
                <a href="">Admission</a>
              </li>
              <li>
                <a href="">Art Gallery</a>
              </li>
              <li>
                <a href="">Franchise</a>
              </li>
              <li>
                <a href="">Online Classes</a>
              </li>
              <li>
                <a href="">Videos</a>
              </li>
              <li>
                <a href="">Pay Fee</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
