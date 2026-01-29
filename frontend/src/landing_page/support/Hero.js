import React from "react";

function Hero() {
  return (
    <div style={{ backgroundColor: "#f6f6f6"}}>
      <div className="row text-center mt-2">
        <div className="col-3 p-3">
          {" "}
          <h1 style={{ fontSize: "2rem", color:"#424242" }}>Support Portal</h1>
        </div>
        <div className="col-6"></div>
        <div className="col-3 p-3">
          <button
            className=" btn fs-5"
            style={{
              margin: "0 auto",
              backgroundColor: "#397DD0",
              fontSize: "1.2rem",
              color: "White",
            }}
          >
            My tickets
          </button> 
        </div>
      </div>
      <div className="container-fluid px-5 py-3">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              border: "1px solid #dcdcdc",
              borderRadius: "6px",
              backgroundColor: "#fff",
              padding: "15px 25px",
              boxShadow: "0 0 2px rgba(0,0,0,0.05)",
            }}
          >
            <i
              className="fa fa-search"
              aria-hidden="true"
              style={{
                color: "#757575",
                fontSize: "1.2rem",
                marginRight: "10px",
              }}
            ></i>
            <input
              type="text"
              placeholder="Eg: How do I open my account, How do I activate F&O..."
              style={{
                border: "none",
                outline: "none",
                flexGrow: 1,
                fontSize: "1rem",
                color: "#333",
              }}
            />
          </div>
          <div className="mt-5"></div>
        </div>
    </div>
  );
}

export default Hero;
