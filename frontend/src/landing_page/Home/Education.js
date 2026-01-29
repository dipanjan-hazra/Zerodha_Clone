import React from "react";

function Education() {
    return ( 
        <div className="container mt-5">
            <div className="row">
                <div className="col-6 p-5 ">
                    <img src="media/Images/education.svg" alt="education vercity " style={{width:"85%"}}/>
                </div>
                 <div className="col-6 p-5">
                    <h3 className="fs-3 mb-3">Free and open market education</h3>
                    <p className="mt-5">Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>

                    <a className="mb-3" style={{textDecoration:"none"}} href="">Varsity <i class="fa fa-long-arrow-right" aria-hidden="true"></i> </a>

                    <p className="mt-4">TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>

                      <a  className="mt-3" style={{textDecoration:"none"}} href="">TradingQ&A  <i class="fa fa-long-arrow-right" aria-hidden="true"></i> </a>
                 </div>

            </div>

        </div>
     );
}

export default Education;