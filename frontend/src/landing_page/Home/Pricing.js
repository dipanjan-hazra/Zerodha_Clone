import React from "react";

function Pricing() {
  return (
    <div className="container mt-5 mb-5 ">
      <div className="row align-items-center">
        {/* Left text side */}
        <div className="col-md-6">
          <h3 className="mb-2 fs-4 fw-semibold">Unbeatable pricing</h3>
          <p className="text-muted">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a
            href="#"
            style={{ textDecoration: "none", color: "#0066ff", fontWeight: 500 }}
          >
            See pricing{" "}
            <i className="fa fa-long-arrow-right ms-1" aria-hidden="true"></i>
          </a>
        </div>

        {/* Right pricing boxes */}
        <div className="col-md-6">
          <div className="d-flex justify-content-between text-center">
            <div>
              <img
                src="media/images/pricingZero.svg"
                alt="Zero price"
                style={{ width: "60%" }}
              />
              <p className="mt-2 text-muted small">Free account opening</p>
            </div>

            <div>
              <img
                src="media/images/pricingZero.svg"
                alt="Zero price"
                style={{ width: "60%" }}
              />
              <p className="mt-2 text-muted small">
                Free equity delivery <br /> and direct mutual funds
              </p>
            </div>

            <div>
              <img src="media/images/20Rs.svg" style={{ width: "60%" }}/>
              <p className="mt-2 text-muted small">Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
