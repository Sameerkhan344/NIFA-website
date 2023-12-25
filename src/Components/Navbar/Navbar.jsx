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
      <nav className="flex content-center container lg:w-[1070px] xl:w-[1170px] md:w-[768px] 2xl:w-[1170px] flex content-center 2xl:justify-between  xl:justify-between text-center md:justify-center justify-center lg:flex-row xl:flex-row 2xl:flex-row md:flex-col flex-wrap">
        <div className="dropnav-full-width">
          <div id="logo">
            <a href="./">
              <div>
                <img src={IMAGES} class="img-responsive"></img>
              </div>
            </a>
          </div>

          <div className="responsive max-md:block xl:hidden 2xl:hidden lg:hidden">
            <ul className="flex flex-col content-center justify-center">
              <li className="tel-em font-lexend text-[18px] flex justify-center content-center">
                <img src={email} alt="" className="w-[16px]" />
                <a href="mailto:admission@nifafinearts.com">
                  admission@nifafinearts.com
                </a>
              </li>
              <li className="tel-em font-lexend text-[18px] flex content-center justify-center">
                <img src={phone} alt="" className="w-[10px]" />
                <a href="#">+91-9555112200/9810130552</a>
              </li>
            </ul>
          </div>
          <Dropdown />
        </div>

        <div className="flex content-center justify-center">
          <div className="menu flex content-center justify-center items-center max-md:hidden">
            <ul
              className="nav font-lexend text-[15px] font-bold flex flex-wrap md:py-[10px]"
              id="nav"
            >
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">About</a>
                <ul>
                  <li>
                    <a href="/facility">Facilities</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="">Courses</a>
                <ul>
                  <li>
                    <a href="course.php?id=38">
                      B.F.A from UGC Recognised University
                    </a>
                  </li>
                  <li>
                    <a href="course.php?id=40">
                      M.A from UGC Recognised University{" "}
                    </a>
                  </li>
                  <li>
                    <a href="course.php?id=24">
                      Two years Advance Diploma in Fine Arts
                    </a>
                  </li>
                  <li>
                    <a href="course.php?id=29">One Year Diploma in Fine Arts</a>
                  </li>
                  <li>
                    <a href="course.php?id=12">6 Months Diploma in Fine Arts</a>
                  </li>
                  <li>
                    <a href="course.php?id=35">
                      Entrance Preparation For N.I.D
                    </a>
                  </li>
                  <li>
                    <a href="course.php?id=32">Entrance Preparation for NIFT</a>
                  </li>
                  <li>
                    <a href="course.php?id=31">Animation Sketching</a>
                  </li>
                  <li>
                    <a href="course.php?id=16">
                      Entrance Preparation for B.F.A
                    </a>
                  </li>
                  <li>
                    <a href="course.php?id=30">
                      {" "}
                      1 to 3 Months Certificate Hobby Course{" "}
                    </a>
                  </li>
                  <li>
                    <a href="course.php?id=25">Kids Diploma (L-2)</a>
                  </li>
                  <li>
                    <a href="course.php?id=39">Kids Diploma (L-1)</a>
                  </li>
                  <li>
                    <a href="course.php?id=36">
                      Hobby Certificate Course For Kids
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="">Activities</a>
                <ul>
                  <li>
                    <a href="activity-page.php?id=8">Workshops</a>
                  </li>
                  <li>
                    <a href="activity-page.php?id=2">Outdoor</a>
                  </li>
                  <li>
                    <a href="activity-page.php?id=10">
                      National Art Seminar &amp; Award Show, 2018
                    </a>
                  </li>
                  <li>
                    <a href="activity-page.php?id=4">Media Coverage</a>
                  </li>
                  <li>
                    <a href="activity-page.php?id=9">Judging Art Events</a>
                  </li>
                  <li>
                    <a href="activity-page.php?id=5">Exhibition</a>
                  </li>
                  <li>
                    <a href="activity-page.php?id=7">Daily Activities</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="">Admission</a>
              </li>
              <li>
                <a href="">Art Gallery</a>
                <ul>
                  <li>
                    <a href="students-area.php?id=4">Work by Kids Level-2</a>
                  </li>
                  <li>
                    <a href="students-area.php?id=3">Work by Kids Level-1</a>
                  </li>
                  <li>
                    <a href="students-area.php?id=1">Sketching</a>
                  </li>
                  <li>
                    <a href="students-area.php?id=2">
                      Paintings done by Students of Level-3
                    </a>
                  </li>
                </ul>
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
