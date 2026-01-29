import React from "react";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <div className="container text-center mt-5 p-5 mb-5 border-bottom">
      <h1 className="fs-3" style={{ color: "#424242" }}>
        Zerodha Products
      </h1>
      <p className="fs-4 " style={{ color: "#424242" }}>
        Sleek, modern, and intuitive trading platforms
      </p>
      <p style={{ color: "#424242" }}className="mb-5">
        Check out our{" "}
        <Link to="/" style={{textDecoration:"none"}}>
          investment offerings{" "}
          <i class="fa fa-long-arrow-right" aria-hidden="true"></i>{" "}
        </Link>
      </p>
    </div>
  );
}

export default Hero;
