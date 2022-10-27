import React,{useState} from "react";
import "./th.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import trtmnt01  from "../../assets/trtmnt01.png"
import call from "../../assets/call.png"
import handstouch from "../../assets/handstouch.png"
const TreatHero = () => {
  const [isShown, setIsShown] = useState(true);



  
  // setInterval(handleClick,6000);
  return (
    <section className="treathero">
      <div className="th01"></div>
      <div className="th02">
<div className="incontent">
<div className="leftcontent">


<OwlCarousel className="mobowl owl-theme" items={4} margin={10} nav>
  
<div className=" cont0001">
    <h1>
        49%
    </h1>
    <span>men over the age of 40 experiance eractile dysfunction </span>
</div>
<div className=" cont0001">
    <h1>
        97%
    </h1>
    <span>men over the age of 40 experiance eractile dysfunction </span>
</div>
<div className=" cont0001">
    <h1>
        51%
    </h1>
    <span>men over the age of 40 experiance eractile dysfunction </span>
</div>
  
  
  
    </OwlCarousel>



<div className="mobno cont0001">
    <h1>
        49%
    </h1>
    <span>men over the age of 40 experiance eractile dysfunction </span>
</div>
<div className="mobno cont0001">
    <h1>
        97%
    </h1>
    <span>men over the age of 40 experiance eractile dysfunction </span>
</div>
<div className="mobno cont0001">
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
      <div className="th03" >
        <div className="inth03" >
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
