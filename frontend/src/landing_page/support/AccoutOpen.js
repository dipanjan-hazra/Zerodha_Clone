import React, { useState } from "react";



function AccountOpen() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="container mt-4"
      style={{
        fontFamily: "'Inter', sans-serif",
        color: "#212121",
        border: "1px solid #e6e6e6",
        borderRadius: "4px",
        overflow: "hidden",
        backgroundColor: "#fff",
      }}
    >
    


      <div
        className="row align-items-center py-3 px-2"
        onClick={() => setIsOpen(!isOpen)}
        style={{
          borderBottom: "1px solid #e6e6e6",
          cursor: "pointer",
          backgroundColor: "#fff",
        }}
      >
        {/* Left Icon */}
        <div className="col-1 d-flex justify-content-center">
          <div
            style={{
              width: "35px",
              height: "35px",
              borderRadius: "50%",
              backgroundColor: "#f2f8fe",
              border: "1.5px solid #397dd0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <i
              className="fa fa-plus"
              aria-hidden="true"
              style={{ color: "#397dd0", fontSize: "14px" }}
            ></i>
          </div>
        </div>

        {/* Title */}
        <div className="col-9">
          <p
            className="m-0"
            style={{ fontSize: "1.05rem", fontWeight: 600, color: "#333" }}
          >
            Account Opening
          </p>
        </div>

        {/* Right Chevron */}
        <div className="col-2 text-end">
          {isOpen ? (
            <i
              className="fa fa-chevron-up"
              aria-hidden="true"
              style={{ color: "#397dd0" }}
            ></i>
          ) : (
            <i
              className="fa fa-chevron-down"
              aria-hidden="true"
              style={{ color: "#397dd0" }}
            ></i>
          )}
        </div>
      </div>

      {/* Accordion Body */}
      {isOpen && (
        <div className="row px-5 py-4">
          <div className="col">
            <ul
              style={{
                listStyleType: "disc",
                color: "#2e7dff",
                fontSize: "0.95rem",
                paddingLeft: "1.2rem",
                margin: 0,
              }}
            >
              <li style={{ marginTop:"1rem", marginBottom: "8px", cursor: "pointer", fontSize:"1rem" }}><a href="#" style={{color:"#397DD0" , textDecoration:"none"}}>
                Resident individual
              </a></li>
              <li style={{ marginTop:"1rem", marginBottom: "8px", cursor: "pointer", fontSize:"1rem" }}><a href="#" style={{color:"#397DD0" , textDecoration:"none"}}>Minor</a></li>
              <li style={{ marginTop:"1rem", marginBottom: "8px", cursor: "pointer", fontSize:"1rem" }}><a href="#" style={{color:"#397DD0" , textDecoration:"none"}}>
                Non Resident Indian (NRI)
              </a></li>
              <li style={{ marginTop:"1rem", marginBottom: "8px", cursor: "pointer", fontSize:"1rem" }}><a href="#" style={{color:"#397DD0" , textDecoration:"none"}}>
                Company, Partnership, HUF and LLP
              </a></li>
              <li style={{ marginTop:"1rem", marginBottom: "8px", cursor: "pointer", fontSize:"1rem"}}><a href="#" style={{color:"#397DD0", textDecoration:"none"}}>Glossary</a></li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default AccountOpen;
