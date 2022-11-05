import React from "react";

const Marquee = () => {
  return (
    <div>
      <marquee
        width="100%"
        direction="right"
        height="70px"
        style={{
          backgroundColor: "#000",
        }}
      >
        <ul
          style={{
            display: "flex",
            justifyContent: "space-between",
            color: "white",
            backgroundColor: "black",
            padding: "0.5rem 0",
            fontSize: "1.1rem",
            fontWidth: "700",
          }}
        >
          <li>design</li>
          <li>develop</li>
          <li>product</li>
          <li>webapp</li>
          <li>animation</li>
        </ul>
      </marquee>
    </div>
  );
};

export default Marquee;
