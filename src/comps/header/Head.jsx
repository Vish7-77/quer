import React from "react";
import logo from "../../assets/logo.png";
import "./head.css";
import robot from "../../assets/robot.png";
import beat from "../../assets/beat.png";
import login from "../../assets/login.png";

const Head = () => {
  return (
    <section className="main-head">
      <div className="in-Head">
        <div className="left">   <a href="/">        <img   src={logo} alt="hello" /></a>
          <span className="onlink" > <a className="links" href="/treatment" alt="m" > Sexual issue we treat </a></span>
          <span className="onlink" >  <a className="links" href="/doctors" alt="m" >Our sexiologist</a></span>
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
