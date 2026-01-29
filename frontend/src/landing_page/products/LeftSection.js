import React from "react";

function LeftSection({
  imgUrl,
  productName,
  productDes,
  tryDemo,
  learnMore,
  playStore,
  appStore,
}) {
  return (
    <div className="container mt-3 my-5 py-5">
      <div className="row align-items-center" style={{ columnGap: "50px" }}>
        {/* LEFT IMAGE */}
        <div className="col-md-6 text-center">
          <img
            src={imgUrl}
            alt={productName}
            style={{
              width: "95%", // larger image
              maxWidth: "700px", // limit so it doesn’t overflow on large screens
              borderRadius: "12px",
              objectFit: "cover",
              marginLeft:"80px"
            }}
          />
        </div>

        {/* RIGHT TEXT SECTION */}
        <div className="col-md-4 " style={{marginLeft:"140px"}}>
          <h2
            className="fw-semibold mb-3"
            style={{ textAlign: "left", fontSize: "1.75rem" }}
          >
            {productName}
          </h2>

          <p
            className="text-muted mb-4"
            style={{ fontSize: "1.1rem", lineHeight: "1.6", textAlign: "left" }}
          >
            {productDes}
          </p>

          {/* LINKS */}
          <div className="d-flex align-items-center mb-4">
            <a
              href={tryDemo}
              className="text-primary fw-semibold text-decoration-none"
            >
              Try demo <i className="fa fa-long-arrow-right ms-1"></i>
            </a>

            <a
              href={learnMore}
              className="text-primary fw-semibold text-decoration-none ms-5"
            >
              Learn more <i className="fa fa-long-arrow-right ms-1"></i>
            </a>
          </div>

          {/* STORE BADGES */}
          <div className="d-flex align-items-center">
            <a href={playStore}>
              <img
                src="media/Images/googlePlayBadge.svg"
                alt="Google Play"
                style={{ height: "45px" }}
              />
            </a>
            <a href={appStore} className="ms-4">
              <img
                src="media/Images/appstoreBadge.svg"
                alt="App Store"
                style={{ height: "45px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
