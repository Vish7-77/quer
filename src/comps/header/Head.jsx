import React,{useState} from "react";
import mainlogo from "../../assets/mainlogo.svg";
import "./head.css";

import {Link} from "react-router-dom"
import robosv from "../../assets/robosv.svg";
import hamburg from "../../assets/hamburg.svg";
import beat from "../../assets/beat.png";
import newsv from "../../assets/newsv.svg";

const Head = () => {
const[isham,setisham]=useState(true)
  const hamburger=()=>{
setisham((crr)=>!crr)
  }


  
  return (
    <section className="main-head" id="header">
      <div className="in-Head">
        <div className="left">   <Link  to="/">        <img   src={mainlogo} alt="hello" /></Link>
          <span className="onlink" > <Link className="links" to="/treatment" alt="m" > Sexual issue we treat </Link></span>
          <span className="onlink" >  <Link className="links" to="/doctor" alt="m" >Our sexiologist</Link></span>
          <span><Link className="links mobno" to="/doctors" alt="m" >Sexual Health Guide</Link></span>
          <span className="mobno">Sex-ed(for Kids)</span>
        </div>

        <div className=" right01 ">
          <span className="dd1">
          <img className="zin" src={beat} alt="" /> 
          <img className="newsv" src={newsv} alt="" /> 
          <span className="shin">SHI</span>
          </span>
         
          <span>
            <img className="mobno" src={robosv} alt="" />
          </span>
          <span>
           <button  className="mobno headbtn"><Link className="links" to="/login" alt="m" >Login</Link></button>
           <button onClick={hamburger} className="hamburg"> <img src={hamburg} alt="" /></button>
          </span>
        </div>
      </div>
<div className="hamburgmenu" style={{display:isham ?'none':'block'}}>

</div>
    </section>
    
    
  );
};

export default Head;
