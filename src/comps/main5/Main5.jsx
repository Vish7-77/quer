import React from "react";
// import "./Main.css";
import erc from "../../assets/erc.png"
import ls from "../../assets/ls.png"
import call from "../../assets/call.png";
import pm from "../../assets/pm.png";
import "./main5.css"

const Main = () => {
  return (
    <>
      <section className="main-01">
        <div className="main-in">
          <div className="upper">
            <div className="upper1">
              <h1 className="upperh1">Frequently Asked Questions</h1>

              <button className="upper1-btn" style={{visibility:"hidden"}}> view all</button>
            </div>
            <div className="upper2">
              <div className="upper2-1">
                <button className="uprbtn btt">male</button>
                <button className="uprbtn">female</button>
                <button className="uprbtn">Couple</button>
              </div>
              <div className="upper2-2">
                <img style={{visibility:"hidden"}} className="call" src={call} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="maincards">
        <div className="cards01">
          <div className="maincard01">
           <div className="blueline"></div>
            <h2 className="mainh21">what is sexology?</h2>
            <span>
            our experiance in developing healthcare chabots gives us  an edge in understanding industry specific challanges
            </span>
          
          </div>
          <span className="round"> X </span>
        </div>
        <div className="cards01">
          <div className="maincard">
          <div className="blueline"></div>
            <h2 className="cardo mainh21">Can i give my baby food and vegitable during weaning?</h2>
           
          </div>
          <span className="roundgry"> + </span>
        </div>
        <div className="cards01">
          <div className="maincard">
          <div className="blueline"></div>
            <h2 className="cardo mainh21">Do potatos counts my 5A day?</h2>
            
          </div>
          <span className="roundgry"> + </span>
        </div>
        <div className="cards01">
          <div className="maincard">
          <div className="blueline"></div>
     
            <h2 className="cardo mainh21">can i just eat five portion of my fav. food?</h2>
          
          </div>
          <span className="roundgry"> +</span>
        </div>
      </section>
    </>
  );
};

export default Main;
