import React from "react";
import "./main4.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import prnch01 from "../../assets/prnch01.png"
import yellowstar from "../../assets/yellowstar.png"
import prnch02 from "../../assets/prnch02.png"
const Main4 = () => {
  return (
    <section style={{marginBottom:"4rem"}} className="main4">
      <div className="uppermain4">
        <h1>Sex-Ed Courses for Kids</h1>
        <span>First time in india in Animated Story format</span>
      </div>
      <div className="lowermain4">

      <OwlCarousel className="mobowl moreh owl-theme" items={1} margin={10} nav>
      <div className="cardmain4">
            <img src={prnch01} alt="" />
          <span className="childprn"><img src={yellowstar} alt=""/> 4.2 </span>
          <h3>How to Quit Looking at pornography...  </h3>
          <p   className="childprn0122">  oriented sexual knowledge. The importance of Love and its interrational</p>
  <div className="childprn02">
    <span className="author" >By Henry King</span>
    <span className="reader">  124 read this</span>
  </div>
<div className="fadeline"></div>
  <div className="price">
    <span className="doller">$1099</span>
  <a href="/">  <span className="buynow">Buy Now{">"}</span></a>
  </div>
    
        </div>
        <div className="cardmain4 ">
            <img src={prnch02} alt="" />
          <span className="childprn"><img src={yellowstar} alt=""/> 4.2 </span>
          <h3>How to Quit Looking at pornography...  </h3>
          <p className="childprn0122">  oriented sexual knowledge. The importance of Love and its interrational</p>
  <div className="childprn02">
    <span className="author" >By Henry King</span>
    <span className="reader">  124 read this</span>
  </div>
<div className="fadeline"></div>
  <div className="price">
    <span className="doller">$1099</span>
  <a href="/">  <span className="buynow">Buy Now{">"}</span></a>
  </div>
    
        </div>

        </OwlCarousel>
        <div className="mobno cardmain4">
            <img src={prnch01} alt="" />
          <span className="childprn"><img src={yellowstar} alt=""/> 4.2 </span>
          <h3>How to Quit Looking at pornography...  </h3>
          <p   className="childprn0122">  oriented sexual knowledge. The importance of Love and its interrational</p>
  <div className="childprn02">
    <span className="author" >By Henry King</span>
    <span className="reader">  124 read this</span>
  </div>
<div className="fadeline"></div>
  <div className="price">
    <span className="doller">$1099</span>
  <a href="/">  <span className="buynow">Buy Now{">"}</span></a>
  </div>
    
        </div>
        <div className="mobno cardmain4">
            <img src={prnch02} alt="" />
          <span className="childprn"><img src={yellowstar} alt=""/> 4.2 </span>
          <h3>How to Quit Looking at pornography...  </h3>
          <p className="childprn0122">  oriented sexual knowledge. The importance of Love and its interrational</p>
  <div className="childprn02">
    <span className="author" >By Henry King</span>
    <span className="reader">  124 read this</span>
  </div>
<div className="fadeline"></div>
  <div className="price">
    <span className="doller">$1099</span>
  <a href="/">  <span className="buynow">Buy Now{">"}</span></a>
  </div>
    
        </div>
      </div>
    </section>
  );
};

export default Main4;
