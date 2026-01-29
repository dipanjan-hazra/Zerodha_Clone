import React from "react";

function Award() {
    return ( 
      <div className="container">
        <div className="row">
          <div className="col-6 p-5">
            <img src="media/Images/largestBroker.svg"/>
          </div>
        
         <div className="col-6 p-5 mt-5">
            <h1>Largest stock broker in India</h1>
            <p className="mb-5">2+ million zerodha clients contributes to over 15% of all retail order volumes in india daily by trading and investing in:</p>
            <div className="row">
                <div className="col-6">
                <ul >
                     <li><p>Futures and Options</p></li>
                    <li><p>commodity derivatives</p></li>
                    <li><p>Currency derivatives</p></li> 
                </ul>
                </div>
                <div className="col-6">
                <ul>
                    <li><p>Futures & Ipos</p></li>
                     <li><p>Direct mutual funds</p></li>
                    <li><p>Bonds and Govt. Securities</p></li> 
                </ul>
                </div>
            </div> 

            <img src="media\Images\pressLogos.png" alt="pressLogos" style={{width:"90%"}}/> 
        </div>
        </div>
      </div>
     );
}

export default Award;