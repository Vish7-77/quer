import React from "react";
import "./Main.css";
import erc from "../../assets/erc.png"
import ls from "../../assets/ls.png"
import call from "../../assets/call.png";
import pm from "../../assets/pm.png";
import ma from "../../assets/ma.png";
import Carousel from 'react-elastic-carousel';
const Main = () => {
 
  return (
    <>
      <section className="main-01">
        <div className="main-in">
          <div className="upper">
            <div className="upper1">
              <h1 className="upperh1">Sexual issues We Treat</h1>

              <button className="upper1-btn"> view all</button>
            </div>
            <div className="upper2">
              <div className="upper2-1">
                <button className="uprbtn btt">male</button>
                <button className="uprbtn">female</button>
                <button className="uprbtn">Couple</button>
              </div>
              <div className="upper2-2">
                <img className="call" src={call} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Carousel>
      <div className="sliderone">
      <div className="cards">
  <div className="maincard">
    <img src={erc} alt="" />
    <h2 className="mainh2">Eractile Dysfunction</h2>
    <span>
      its defined by diificult in getting and keeping eraction
    </span>
  </div>
</div>
<div className="cards">
  <div className="maincard">
    <img src={erc} alt="" />
    <h2 className="mainh2">Eractile Dysfunction</h2>
    <span>
      its defined by diificult in getting and keeping eraction
    </span>
  </div>
</div>
<div className="cards">
  <div className="maincard">
    <img src={erc} alt="" />
    <h2 className="mainh2">Eractile Dysfunction</h2>
    <span>
      its defined by diificult in getting and keeping eraction
    </span>
  </div>
</div>
      </div>
      <div className="sliderone">
      <div className="cards">
  <div className="maincard">
    <img src={erc} alt="" />
    <h2 className="mainh2">Eractile Dysfunction</h2>
    <span>
      its defined by diificult in getting and keeping eraction
    </span>
  </div>
</div>
<div className="cards">
  <div className="maincard">
    <img src={erc} alt="" />
    <h2 className="mainh2">Eractile Dysfunction</h2>
    <span>
      its defined by diificult in getting and keeping eraction
    </span>
  </div>
</div>
<div className="cards">
  <div className="maincard">
    <img src={erc} alt="" />
    <h2 className="mainh2">Eractile Dysfunction</h2>
    <span>
      its defined by diificult in getting and keeping eraction
    </span>
  </div>
</div>
      </div>
       
      </Carousel>
    
    </>
  );
};

export default Main;
//  <section className="maincards">
// <div className="cards">
//   <div className="maincard">
//     <img src={erc} alt="" />
//     <h2 className="mainh2">Eractile Dysfunction</h2>
//     <span>
//       its defined by diificult in getting and keeping eraction
//     </span>
//   </div>
// </div>
// <div className="cards">
//   <div className="maincard">
//     <img src={ls} alt="" />
//     <h2 className="mainh2">Eractile Dysfunction</h2>
//     <span>
//       its defined by diificult in getting and keeping eraction
//     </span>
//   </div>
// </div>
// <div className="cards">
//   <div className="maincard">
//     <img src={pm} alt="" />
//     <h2 className="mainh2">Eractile Dysfunction</h2>
//     <span>
//       its defined by diificult in getting and keeping eraction
//     </span>
//   </div>
// </div>
// <div className="cards">
//   <div className="maincard">
//     <img src={erc} alt="" />
//     <h2 className="mainh2">Eractile Dysfunction</h2>
//     <span>
//       its defined by diificult in getting and keeping eraction
//     </span>
//   </div>
// </div>
// </section> 