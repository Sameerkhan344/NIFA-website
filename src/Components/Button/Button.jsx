import React from "react";

const Button = () => {
  return (
    <>
      <button
        type="button"
        className="btn btn-outline"
        onclick="window.location.href='about-us.php'"
      >
        Read More
      </button>
    </>
  );
};

export default Button;
