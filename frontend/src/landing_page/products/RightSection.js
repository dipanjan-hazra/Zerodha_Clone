import React from "react";

function RightSection({ Name, Des, linkName, link, image }) {
  return (
    <div
      className="container-fluid p-3"
      style={{
        backgroundColor: "#ffffff",
        overflow: "hidden",
      }}
    >
      <div
        className="row align-items-center justify-content-center"
      >
        {/* LEFT TEXT SECTION */}
        <div className="col-md-5 " style={{paddingRight: "50px" }}>
          <h2
            className="fw-semibold mb-3"
            style={{
              textAlign: "left",
              fontSize: "1.7rem",
              color: "#424242",
            }}
          >
            {Name}
          </h2>

          <p
            style={{
              fontSize: "1.15rem",
              lineHeight: "1.8",
              textAlign: "left",
              color: "#555",
            }}
          >
            {Des}
          </p>

          <a
            href={link}
            className="text-primary fw-semibold text-decoration-none"
            style={{ fontSize: "1.1rem" }}
          >
            {linkName} <span style={{ fontSize: "1.2rem" }}>→</span>
          </a>
        </div>

        {/* RIGHT IMAGE SECTION */}
        <div className="col-md-6 d-flex justify-content-left">
          <img
            src={image}
            alt={Name}
            style={{
              width: "100%",
              maxWidth: "850px",
              marginRight: "-80px",
              borderRadius: "8px",
              objectFit: "contain",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
