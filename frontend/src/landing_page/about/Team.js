import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";

function Team() {
  return (
    <div className="container">
      <div className="row">
        <h2>People</h2>
      </div>
      <div className="row p-5">
        <div className="col-6 text-center">
          <img src="media/Images/nithinkamath.jpg" className="founder mr-4" />
          <h4 className="mt-3 text-muted" style={{ fontSize: "medium" }}>
            Nithin Kamath
          </h4>
          <h5 className="text-muted" style={{ fontSize: "small" }}>
            Founder, CEO
          </h5>
        </div>
        <div className="col-6 mt-2">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on{" "}
            <Link to="/" style={{ textDecoration: "none" }}>
              Homepage
            </Link>{" "}
            /{"  "}
            <a href="#" style={{ textDecoration: "none" }}>
               TradingQnA
            </a>{" "}
            /{" "}<a href="#" style={{ textDecoration: "none" }}>Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
