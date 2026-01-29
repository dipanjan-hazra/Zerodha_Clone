import React from 'react';
import AccountOpen from './AccoutOpen';
import YourZirodha from './YourZirodha';
import Console from './Console';
import Kite from './Kite';
import Funds from './Funds';
import Coin from './Coin';


function CreateTicket() {
    return ( 
    <div>
    <div className='row p-5'>
        <div className='col-8'>
            <AccountOpen/>
            <YourZirodha/>
            <Kite/>
            <Funds/>
            <Console/>
            <Coin/>
        </div>
        <div className='col-4 mt-3 p-3'>
         <div style={{borderLeft:"9px solid #ffcc66"}}>
            <div className="p-4"style={{ backgroundColor:"color-mix(in oklab,var(--color-art-yellow)40%,transparent)"}}>
                <ul style={{listStyleType:"disc"}}>
                    <li><a href='#' style={{fontSize:"1.1rem"}}>Latest Intraday leverages and Square-off timings</a></li>
                    <li className='mt-2'><a href='#' style={{fontSize:"1.1rem"}}>Offer for sale (OFS) – November 2025</a></li>
                </ul>
            </div>
         </div>
         <div className="mt-5">
    <div className="table-container mb-5" style={{ marginTop: "2rem" }}>
  <table
    className="charges-table"
    style={{
      width: "100%",
      borderCollapse: "collapse",
      fontFamily: "'Inter', sans-serif",
      fontSize: "0.95rem",
      border: "1px solid #e0e0e0",
      backgroundColor: "#fff",
    }}
  >
    <thead>
      <tr>
        <th
          style={{
            border: "1px solid #e0e0e0",
            backgroundColor: "#fafafa",
            textAlign: "left",
            padding: "14px 20px",
            fontSize: "1.1rem",
            fontWeight: 600,
            color: "#333",
          }}
        >
          Quick links
        </th>
      </tr>
    </thead>

    <tbody>
      {[
        "1. Track Account Opening",
        "2. Download Forms",
        "3. Check Brokerage Charges",
        "4. Learn About Demat",
        "5. Zerodha Support Portal",
      ].map((text, i) => (
        <tr key={i}>
          <td
            style={{
              border: "1px solid #e0e0e0",
              padding: "12px 20px",
              color: "#2e7dff",
              lineHeight: "1.8",
            }}
          >
            <a
              href="#"
              style={{
                textDecoration: "none",
                color: "#2e7dff",
                fontWeight: 500,
              }}
            >
              {text}
            </a>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

         </div>
        </div>
    </div>
    </div>    
    
    );
}

export default CreateTicket;