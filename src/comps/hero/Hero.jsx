import React from "react";
import lock from "../../assets/lock.png";
import downarrow from "../../assets/downarrow.png";
import "./hero.css";
import varifuser from "../../assets/varifuser.png";
import priv from "../../assets/priv.png";
import herobg from "../../assets/herobg.png";

import allgroup from "../../assets/allgroup.png";
const Hero = () => {
  return (
    <section className="hero">
      <div className="inhero">
        <div className="heroleft">
          <img className="bghroleft" src={herobg} alt="bgc" />
          <img className="bghroleftup" src={allgroup} alt="" />
        </div>
        <div className="heroright">
          <div className="inheroright">
            <h1 className="hek">Sexual issues are Normal</h1>
            <h3 className="hteen">
              1 out of 5 indians encounters sexual health issue in their
              lifetime
            </h3>
            <button className="btt">Consult an Expert</button>
            <img className="arrow" src={downarrow} alt="tt" />
            <img className="arrow2" src={priv} alt="tt" />
          </div>
        </div>
      </div>
      <div className="heo">
        <div className="heodown">
          <div className="heodown1">
            {" "}
            <img src={lock} alt="" /> <span>Personalized treatment plans</span>{" "}
          </div>
          <div className="heodown2">
            {" "}
            <img src={varifuser} alt="" />{" "}
            <span>Backed by best sexologist from india & USA</span>{" "}
          </div>
          <div className="heodown1">
            {" "}
            <img src={varifuser} alt="" /> <span>100% confidential</span>{" "}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
