import React, { useState, useEffect } from "react";

const Carousel = ({ children }) => {
  const [counter, setCounter] = useState(1);
  const [pause, setPause] = useState(false);
  const content = children;

  const handleNext = () => {
    if (counter !== content.length) {
      setCounter(counter + 1);
    } else {
      setCounter(1);
    }
  };

  const handlePre = () => {
    if (counter !== 1) {
      setCounter(counter - 1);
    } else {
      setCounter(content.length);
    }
  };

  const handlePage = (page) => {
    setCounter(page);
  };

  const handleMouse = () => {
    setPause(!pause);
  };

  useEffect(() => {
    let interval = setInterval(() => {
      if (!pause) {
        handleNext();
      } else {
        clearInterval(interval);
      }
    }, 3000);
    return () => clearInterval(interval);
  });

  return (
    <div className="App">
      <div
        className="slide max-md:h-[40vh] lg:h-[80vh] xl:h-[80vh] 2xl:h-[80vh]"
        onMouseEnter={handleMouse}
        onMouseLeave={handleMouse}
      >
        {content.map((item, index) => (
          <div
            className={counter - 1 === index ? "show" : "not-show"}
            key={index}
          >
            {item}
          </div>
        ))}

        <button className="prev" onClick={handlePre}>
          &#10094;
        </button>
        <button className="next" onClick={handleNext}>
          &#10095;
        </button>
      </div>
      {/* <div id="markque-container">
        <div className="container">
          <div id="para-marq">
            <div id="headingdd">
              <h3 style="font-weight:bold;">Nifa Updates:: </h3>
            </div>
          </div>
          <div id="marqueeq">
            <marquee
              behavior="scroll"
              direction="left"
              scrollamount="3"
              scrolldelay="1"
              onmouseover="this.stop()"
              onmouseout="this.start()"
            >
              <p>
                <strong>
                  All NIFA courses are now available worldwide through our Live
                  and Interactive Online Classes. Please&nbsp;download the NIFA
                  app from our online classes page to register for a
                  complimentary trial class.
                </strong>
              </p>
            </marquee>
          </div>
        </div>
      </div> */}
      {/* <div className="page">
        {content.map((item, index) => (
          <span
            key={index}
            className={counter - 1 === index ? "dot active" : "dot"}
            onClick={() => handlePage(index + 1)}
          />
        ))}
      </div> */}
    </div>
  );
};

export default Carousel;
