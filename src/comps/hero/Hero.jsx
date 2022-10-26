import React,{useState,useEffect} from "react";
import locksv from "../../assets/locksv.svg";
import dwar from "../../assets/dwar.svg";
import "./hero.css";
// import ImageSlider, { Slide } from "react-auto-image-slider";
import varifsv from "../../assets/varifsv.svg";
import privsv from "../../assets/privsv.svg";
import silensv from "../../assets/silensv.svg";
import herobg from "../../assets/herobg.png";
import cartoonhome from "../../assets/cartoonhome.png";
import allgroup from "../../assets/allgroup.png";
const Hero = () => {
  const Func01=()=>{
    document.getElementById("header").style.display="flex"
    document.getElementById("footer").style.display="flex"
  }
     
  useEffect(() => {
   Func01()
  })
  

  const [isShown, setIsShown] = useState(true);

  const handleClick = event => {
    // 👇️ toggle visibility
    setIsShown(current => !current);
  
    if(event==="two"){
      document.getElementById('ri').style.background="gray"
      document.getElementById('le').style.background="white"

    }  
    if(event==="one"){
      document.getElementById('le').style.background="gray"
      document.getElementById('ri').style.background="white"

    }  
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
  
  // setInterval(handleClick,9000);


  return (
    <section className="hero">
  
<div className="contnr">
<div style={{display: isShown ? 'block' : 'none'}} className="slide-cont slideee ">
  <div className="slide">
    <div className="slide-left" style={{marginRight:"22px"}}>
    <img className="roundefct" src={herobg} alt="" />
    <img className="alldocs" src={allgroup} alt="" />
  
   
    </div>
    <div className="slide-right" >
      <div style={{marginTop:"-10%"}}>
        <h1 className="homeh1"> <b>Sexual issues are normal</b></h1>
        <h3 style={{}} className="homeh3">
          1 out of 5 indians encouter sexual health issue in their
          lifetime
        </h3>
        <button className="consultnow">Consult an expert</button>
        <img className="arrdw" src={dwar} alt="" />
        <img className="private " src={privsv} alt="" />
      </div>
    </div>
  </div>
</div>
<div style={{display: isShown ? 'none' : 'block'}} className="slide-cont slideee">
  <div className="slide">
    <div className="slide-left">
    <img  className="roundefc" src={herobg} alt="" />
    <img className="catoonhome" src={cartoonhome} alt="" />
  
   
    </div>
    <div className="slide-right padbot">
      <div>
        <h1 style={{width:"80%", marginBottom:"21px"}} className="homeh1"><b>Sex-Ed </b>Courses for your Young ones </h1>
        <h3 className="homeh3">
          1 out of 5 indians encouter sexual health issue in their
          lifetime
        </h3>
        <button style={{marginBottom:"11px",right:"28%"}}className="consultnow">Consult an expert</button>
        <img style={{right:"26.5%",bottom:"29%"}} className="arrdw" src={dwar} alt="" />
        <img style={{right:"31%", bottom:"27%"}} className="private " src={privsv} alt="" />
      </div>
    </div>
  </div>
</div>

<button onClick={()=>handleClick('one')} id="ri"> </button>
<button onClick={()=>handleClick('two')} id="le"> </button>
</div>



      <div className="heo">
        <div className="heodown">
          <div className="heodown1">
            {" "}
            <img src={locksv} alt="" /> <span>Personalized treatment plans</span>{" "}
          </div>
          <div className="heodown2">
            {" "}
            <img src={varifsv} alt="" />{" "}
            <span>Backed by best sexologist from india & USA</span>{" "}
          </div>
          <div className="heodown1">
            {" "}
            <img src={silensv} alt="" /> <span>100% confidential</span>{" "}
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