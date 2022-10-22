import React,{useState} from "react";
import lock from "../../assets/lock.png";
import downarrow from "../../assets/downarrow.png";
import "./hero.css";
import ImageSlider, { Slide } from "react-auto-image-slider";
import varifuser from "../../assets/varifuser.png";
import priv from "../../assets/priv.png";
import herobg from "../../assets/herobg.png";
import cartoonhome from "../../assets/cartoonhome.png";
import allgroup from "../../assets/allgroup.png";
const Hero = () => {

  const [isShown, setIsShown] = useState(true);
  const handleClick = event => {
    // 👇️ toggle visibility
    setIsShown(current => !current);
  };



  // const two = () => {
  //   document.getElementById("myDIV").style.display = "block";
  //   document.getElementById("meDIV").style.display = "none";

  // }
//   const one = () => {
//     // document.getElementById("#meDIV").style.display = "none";
//     // document.getElementById("#myDIV").style.display = "block";
//   //  alert("hello")
//   if(  document.getElementById("myDIV").style.display ==="block" ||  document.getElementById("meDIV").style.display === "none")
//   {
//     document.getElementById("myDIV").style.display = "none";
//     document.getElementById("meDIV").style.display = "block";
//   }
// else if(document.getElementById("myDIV").style.display ==="none" ||  document.getElementById("meDIV").style.display === "block"){
//   document.getElementById("myDIV").style.display = "block";
//   document.getElementById("meDIV").style.display = "none";


// }
  
  setInterval(handleClick,10000);


  return (
    <section className="hero">
  
<div className="contnr">
<div style={{display: isShown ? 'block' : 'none'}} className="slide-cont ">
  <div className="slide">
    <div className="slide-left" style={{marginRight:"22px"}}>
    <img className="roundefct" src={herobg} alt="" />
    <img className="alldocs" src={allgroup} alt="" />
  
   
    </div>
    <div className="slide-right" >
      <div style={{marginTop:"-10%"}}>
        <h1 className="homeh1"> <b>Sexual issues are normal</b></h1>
        <h3 className="homeh3">
          1 out of 5 indians encouter sexual health issue in their
          lifetime
        </h3>
        <button className="consultnow">consult now</button>
        <img className="arrdw" src={downarrow} alt="" />
        <img className="private " src={priv} alt="" />
      </div>
    </div>
  </div>
</div>
<div style={{display: isShown ? 'none' : 'block'}} className="slide-cont ">
  <div className="slide">
    <div className="slide-left">
    <img className="roundefc" src={herobg} alt="" />
    <img className="catoonhome" src={cartoonhome} alt="" />
  
   
    </div>
    <div className="slide-right padbot">
      <div>
        <h1 className="homeh1"><b>Sex-Ed </b>Courses for your Young ones </h1>
        <h3 className="homeh3">
          1 out of 5 indians encouter sexual health issue in their
          lifetime
        </h3>
        <button className="consultnow">consult now</button>
        <img className="arrdw" src={downarrow} alt="" />
        <img className="private " src={priv} alt="" />
      </div>
    </div>
  </div>
</div>

<button onClick={handleClick} id="ri">{"<"}</button>
<button onClick={handleClick} id="le"> {">"} </button>
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
{
  /* <div className="inhero">
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
</div>  */
}




// <ImageSlider   autoPlayDelay={4000}>
// <Slide>
// <div className="inhero">
// <div className="heroleft">
// <img style={{scale:"1.1",left:"22px",bottom:"22px"}} className="bghroleft" src={herobg} alt="bgc" />
// <img style={{width:"600px", height:"480px"}} className="bghroleftup" src={allgroup} alt="" />
// </div>
// <div className="heroright">
// <div className="inheroright">
// <h1 className="hek"><b>Sexual issues</b> are Normal</h1>
// <h3  className="hteen">
// 1 out of 5 indians encounters sexual health issue in their
// lifetime
// </h3>
// <button className="btt">Consult an Expert</button>
// <img style={{width:"78px",height:"54px",bottom:"-42px"}} className="arrow" src={downarrow} alt="tt" />
// <img style={{width:"78px",height:"34px",bottom:"-52px",right:"73%"}} className="arrow2" src={priv} alt="tt" />
// </div>
// </div>
// </div> 
// </Slide>
// <Slide>
// <div className="inhero">
// <div className="heroleft">
// <img style={{scale:"1.1",left:"22px",bottom:"22px"}} className="bghroleft" src={herobg} alt="bgc" />
// <img style={{width:"350px", height:"420px", left:"36%",bottom:"10%"}} className="bghroleftup" src={cartoonhome} alt="" />
// </div>
// <div className="heroright">
// <div className="inheroright">
// <h1 className="hek"><b>Sex-Ed Course</b> for Your Young Once </h1>
// <h3  className="hteen">
// 1 out of 5 indians encounters sexual health issue in their
// lifetime
// </h3>
// <button className="btt">Consult an Expert</button>
// <img style={{width:"78px",height:"54px",bottom:"-42px"}} className="arrow" src={downarrow} alt="tt" />
// <img style={{width:"78px",height:"34px",bottom:"-52px",right:"73%"}} className="arrow2" src={priv} alt="tt" />
// </div>
// </div>
// </div> 
// </Slide>

// </ImageSlider> 