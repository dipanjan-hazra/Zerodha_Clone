import React, {useState} from "react";
import {Link} from  "react-router-dom";


const Menu = () => {
  const  [selectOption, setSelectOption] =useState(0);
  const [isProDorpDownOpen,setisProDropDownOpen] = useState(false);

  const  handelMenueclick = (index)=>{
    setSelectOption(index);
  };

const  handelProclick = (index)=>{
    setSelectOption(!isProDorpDownOpen);
  };

  const menueClass = "menue";
  const Activemenue ="menue selected";

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link style={{textDecoration:"none"}} to ="/" onClick={()=> handelMenueclick(0)}><p className={selectOption === 0 ? Activemenue:menueClass }>Dashboard</p></Link>
            
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to ="/orders" onClick={()=> handelMenueclick(1)}><p className={selectOption === 1 ? Activemenue:menueClass }>Orders</p></Link> 
          
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to ="/holdings" onClick={()=> handelMenueclick(2)}><p className={selectOption === 2 ? Activemenue:menueClass }>Holdings</p></Link>
         
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to ="/positions" onClick={()=> handelMenueclick(3)}><p className={selectOption === 3 ? Activemenue:menueClass }>Positions</p></Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to ="funds/" onClick={()=> handelMenueclick(4)}><p className={selectOption === 4 ? Activemenue:menueClass }>Funds</p></Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to ="/apps" onClick={()=> handelMenueclick(5)}><p className={selectOption === 5 ? Activemenue:menueClass }>Apps</p></Link>
            
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handelProclick}>
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
