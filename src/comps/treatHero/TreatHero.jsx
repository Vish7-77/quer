import React from "react";
import "./th.css";
import trtmnt01  from "../../assets/trtmnt01.png"
import call from "../../assets/call.png"
const TreatHero = () => {
  return (
    <section className="treathero">
      <div className="th01"></div>
      <div className="th02">
<div className="incontent">
<div className="leftcontent">
<div className="cont0001">
    <h1>
        49%
    </h1>
    <span>men over the age of 40 experiance eractile dysfunction </span>
</div>
<div className="cont0001">
    <h1>
        97%
    </h1>
    <span>men over the age of 40 experiance eractile dysfunction </span>
</div>
<div className="cont0001">
    <h1>
        51%
    </h1>
    <span>men over the age of 40 experiance eractile dysfunction </span>
</div>


</div>
<div className="rightcont">
    <img src={call} alt=""/>
</div>



</div>


      </div>
      <div className="th03">
        <div className="inth03">
<div className="leftheroth03">
<h1>what is</h1>
<h2>Eractile Dysfunction?</h2>
<span>ED is defined as the ability  to sustain an eraction  sufficient  for sexual intercourse. The condition  can effect anyone at any age  </span>

<button className="consult">Consult Now</button> 
</div>

<div className="rightheroth03">
<img src={trtmnt01} alt="" />
    
</div>


        </div>
      </div>
    </section>
  );
};

export default TreatHero;
