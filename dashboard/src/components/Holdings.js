import React ,{useState,useEffect} from "react";

import axios from 'axios'
import { Vertical_Chart } from "./Vertical_Chart";
const Holdings = () => {

  const [allholdings,setallholdings ]= useState([]);
  useEffect(()=>{
    axios.get("http://localhost:8080/allHoldings").then((res)=>{
      setallholdings(res.data);
      console.log(res.data);
    })
  },[]);

  //chart ---
  const labels = allholdings.map((subArray)=>subArray['name']);

  const data = {
    labels,
    datasets:[
       {  
      label: 'Stock Price',
      data: allholdings.map((stock)=>
         stock.price
       ),
      backgroundColor: 'rgba(54, 140, 53, 0.73)',
    }
    ],
  }


  return (
    <>
      <h3 className="title">Holdings ({allholdings.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg. cost</th>
            <th>LTP</th>
            <th>Cur. val</th>
            <th>P&L</th>
            <th>Net chg.</th>
            <th>Day chg.</th>
          </tr>
          {allholdings.map((stock,index)=>{
            const curValue = stock.price *stock.qty;
            const isProfit = curValue - stock.avg *stock.qty >=0.0;
            const profitclass = isProfit?"profit":"loss";
            const dayClass= stock.isLoss?"loss":"profit";
 
            return(
               <tr key={index}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td>{curValue.toFixed(2)}</td>
                  <td className={profitclass}>{(curValue-stock.avg*stock.qty).toFixed(2)}</td>
                  <td className={profitclass}>{stock.net}</td>
                  <td className={dayClass}>{stock.day}</td>
              </tr>
            )
          })}
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>
            29,875.<span>55</span>{" "}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            31,428.<span>95</span>{" "}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>1,553.40 (+5.20%)</h5>
          <p>P&L</p>
        </div>
      </div>
      <Vertical_Chart data={data}/>
    </>
  );
};

export default Holdings;
