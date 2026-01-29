import React from "react";

function Hero() {
  return (
    <div className="container mt-5 text-center">
      <h2 style={{ fontSize: "2rem" }}>Charges</h2>
      <p
        className="mt-2"
        style={{
          color: "#9b9b9b",
          fontSize: "1.55rem",
          fontWeight: "400",
          marginBottom: "10rem",
        }}
      >
        List of all charges and taxes
      </p>

      <div className="row mt-5 p-3">
        <div className="col-4">
          <img
            src="media/Images/pricing0.svg"
            className="mb-4"
            style={{ width: "70%", marginBottom: "0rem" }}
          />
          <h1 style={{ fontSize: "1.7rem", lineHeight: "1.6rem",color: "#424242", }}>
            Free equity delivery
          </h1>
          <p
            className="mt-4 text-center"
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.8",
              fontWeight: "400px",
              color: "#666666",
            }}
          >
            All equity delivery investments (NSE, BSE),
            <br /> are absolutely free — ₹ 0 brokerage.
          </p>
        </div>
        <div className="col-4">
          <img
            src="media/Images/20Rs.svg"
            className="mb-4"
            style={{ width: "70%", marginBottom: "0rem" }}
          />
          <h1 style={{ fontSize: "1.7rem", lineHeight: "1.6rem",color: "#424242",  }}>
            Intraday and F&O trades
          </h1>
          <p
            className="mt-4 text-center"
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.8",
              fontWeight: "400px",
              color: "#666666",
            }}
          >
            Flat ₹ 20 or 0.03% (whichever is lower) per <br /> executed order on
            intraday trades across
            <br /> equity, currency, and commodity trades. Flat <br /> ₹20 on
            all option trades.
          </p>
        </div>
        <div className="col-4">
          <img
            src="media/Images/pricing0.svg"
            className="mb-4"
            style={{ width: "70%", marginBottom: "0rem" }}
          />
          <h1
            style={{
              fontSize: "1.7rem",
              lineHeight: "1.6rem",
              fontWeight: "400px",
              color: "#666666",
            }}
          >
            Free direct MF
          </h1>
          <p
            className="mt-4 text-center"
            style={{ fontSize: "1.1rem", lineHeight: "1.8" }}
          >
            All direct mutual fund investments are
            <br /> absolutely free — ₹ 0 commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
