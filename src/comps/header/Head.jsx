import React from "react";
import mainlogo from "../../assets/mainlogo.svg";
import "./head.css";

import {Link} from "react-router-dom"
import robosv from "../../assets/robosv.svg";
import beat from "../../assets/beat.png";
import newsv from "../../assets/newsv.svg";

const Head = () => {


  return (
    <section className="main-head" id="header">
      <div className="in-Head">
        <div className="left">   <Link  to="/">        <img   src={mainlogo} alt="hello" /></Link>
          <span className="onlink" > <Link className="links" to="/treatment" alt="m" > Sexual issue we treat </Link></span>
          <span className="onlink" >  <Link className="links" to="/doctor" alt="m" >Our sexiologist</Link></span>
          <span><Link className="links" to="/doctors" alt="m" >Sexual Health Guide</Link></span>
          <span>Sex-ed(for Kids)</span>
        </div>

        <div className="right01">
          <span className="dd1">
          <img className="zin" src={beat} alt="" /> 
          <img className="newsv" src={newsv} alt="" /> 
          <span className="shin">SHI</span>
          </span>
         
          <span>
            <img src={robosv} alt="" />
          </span>
          <span>
           <button  className="headbtn"><Link className="links" to="/login" alt="m" >Login</Link></button>
          </span>
        </div>
      </div>

    </section>
    
  );
};

export default Head;
