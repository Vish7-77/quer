import React from "react";
import logo from "../../assets/logo.png";
import "./head.css";
import {Link} from "react-router-dom"
import robot from "../../assets/robot.png";
import beat from "../../assets/beat.png";
import login from "../../assets/login.png";

const Head = () => {
  return (
    <section className="main-head">
      <div className="in-Head">
        <div className="left">   <Link  to="/">        <img   src={logo} alt="hello" /></Link>
          <span className="onlink" > <Link className="links" to="/treatment" alt="m" > Sexual issue we treat </Link></span>
          <span className="onlink" >  <Link className="inks" to="/doctors" alt="m" >Our sexiologist</Link></span>
          <span>Sexual Health Guide</span>
          <span>Sex-ed(for Kids)</span>
        </div>

        <div className="right">
          <span className="dd1">
          <img src={beat} alt="" /> 
          <span>SHI</span>
          </span>
         
          <span>
            <img src={robot} alt="" />
          </span>
          <span>
            <img src={login} alt="" />
          </span>
        </div>
      </div>
    </section>
  );
};

export default Head;
