import React from "react";
// import "./styles.css";
import Carousel from "./Carousel.jsx";

export default function App() {
  return (
    <Carousel>
      <div>
        <img
          src="https://www.nifafinearts.com/banner-images/1550551577home-banner1.jpg"
          alt="img1"
        />
      </div>
      <div>
        <img
          src="https://www.nifafinearts.com/banner-images/1273170038home-banner2.jpg"
          alt="img2"
        />
      </div>
      <div>
        <img
          src="https://www.nifafinearts.com/banner-images/1922909411home-banner3.jpg"
          alt="img3"
        />
      </div>
      <div>
        <img
          src="https://www.nifafinearts.com/banner-images/1858311846home-banner4.jpg"
          alt="img4"
        />
      </div>
    </Carousel>
  );
}
