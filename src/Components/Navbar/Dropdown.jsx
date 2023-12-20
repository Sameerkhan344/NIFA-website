import React, { useState } from "react";

const Dropdown = () => {
  return (
    <div className="responsive-menu md:hidden lg:fidden xl:hidden 2xl:hidden">
      <select
        name="page_name"
        onchange="location = this.options[this.selectedIndex].value;"
      >
        <option selected="selected">
          Home
        </option>
        <option>About us</option>
        <option>&nbsp;-Facilities</option>

        <option>Courses</option>
        <option>&nbsp;-B.F.A from UGC Recognised University</option>
        <option>&nbsp;-M.A from UGC Recognised University </option>
        <option>&nbsp;-Two years Advance Diploma in Fine Arts</option>
        <option>&nbsp;-One Year Diploma in Fine Arts</option>
        <option>&nbsp;-6 Months Diploma in Fine Arts</option>
        <option>&nbsp;-Entrance Preparation For N.I.D</option>
        <option>&nbsp;-Entrance Preparation for NIFT</option>
        <option>&nbsp;-Animation Sketching</option>
        <option>&nbsp;-Entrance Preparation for B.F.A</option>
        <option>&nbsp;- 1 to 3 Months Certificate Hobby Course </option>
        <option>&nbsp;-Kids Diploma (L-2)</option>
        <option>&nbsp;-Kids Diploma (L-1)</option>
        <option>&nbsp;-Hobby Certificate Course For Kids</option>

        <option>Activities</option>
        <option>&nbsp;-Workshops</option>
        <option>&nbsp;-Outdoor</option>
        <option>&nbsp;-National Art Seminar &amp; Award Show, 2018</option>
        <option>&nbsp;-Media Coverage</option>
        <option>&nbsp;-Judging Art Events</option>
        <option>&nbsp;-Exhibition</option>
        <option>&nbsp;-Daily Activities</option>

        <option>Admission</option>
        <option>Art Gallery</option>
        <option>&nbsp;-Work by Kids Level-2</option>
        <option>&nbsp;-Work by Kids Level-1</option>
        <option>&nbsp;-Sketching</option>
        <option>&nbsp;-Paintings done by Students of Level-3</option>

        <option>Franchisee</option>
        <option>Online Namees</option>
        <option>Videos</option>
        <option>Pay Fee</option>
        <option>Contact Us</option>
      </select>
    </div>
  );
};

export default Dropdown;
