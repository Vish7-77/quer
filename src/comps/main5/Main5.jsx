import React, { useState } from "react";
// import "./Main.css";
import erc from "../../assets/erc.png";
import ls from "../../assets/ls.png";
import call from "../../assets/call.png";
import pm from "../../assets/pm.png";
import "./main5.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Main = () => {
  const [showbtn, setshowbtn] = useState(true);
  const handleClick = (event) => {
    // 👇️ toggle visibility
    setshowbtn((current) => !current);
    if (event === "one") {
      document.getElementById("drkbll").style.background = "#0D5DA7";
      document.getElementById("drkbll").style.color = "white";
      document.getElementById("drkbll01").style.background = "white";
      document.getElementById("drkbll01").style.color = "#0D5DA7";
      document.getElementById("drkbll02").style.background = "white";
      document.getElementById("drkbll02").style.color = "#0D5DA7";
      // document.getElementById('drkbl').style.color="white";
      // document.getElementsByClassName('drkbl').style.color="white" ;
    }
    if (event === "two") {
      document.getElementById("drkbll").style.background = "white";
      document.getElementById("drkbll").style.color = "#0D5DA7";
      document.getElementById("drkbll01").style.background = "#0D5DA7";
      document.getElementById("drkbll01").style.color = "white";
      document.getElementById("drkbll02").style.background = "white";
      document.getElementById("drkbll02").style.color = "#0D5DA7";
      // document.getElementById('drkbl').style.color="white";
      // document.getElementsByClassName('drkbl').style.color="white" ;
    }
    if (event === "three") {
      document.getElementById("drkbll").style.background = "white";
      document.getElementById("drkbll").style.color = "#0D5DA7";
      document.getElementById("drkbll01").style.background = "white";
      document.getElementById("drkbll01").style.color = "#0D5DA7";
      document.getElementById("drkbll02").style.background = "#0D5DA7";
      document.getElementById("drkbll02").style.color = "white";
      // document.getElementById('drkbl').style.color="white";
      // document.getElementsByClassName('drkbl').style.color="white" ;
    }
  };
  const [flip, setflip] = useState(false);
  const [nonflip, setnonflip] = useState(false);
  const [nonflip01, setnonflip01] = useState(false);
  const [nonflip02, setnonflip02] = useState(false);

  const [isShown, setIsShown] = useState(true);
  const [non, setnon] = useState(true);
  const [non01, setnon01] = useState(true);
  const [non02, setnon02] = useState(true);
  // const handleClick = (event) => {
  //   // 👇️ toggle visibility
  //   setIsShown((current) => !current);
  // };

  return (
    <>
      <section className="main-01">
        <div className="main-in">
          <div className="upper">
            <div className="upper1">
              <h1 className="upperh1">Frequently Asked Questions</h1>

              <button className="upper1-btn" style={{ visibility: "hidden" }}>
                {" "}
                view all
              </button>
            </div>
            <div className="upper2">
              <div className="upper2-1">
                <button
                  id="drkbll"
                  onClick={() => handleClick("one")}
                  className=" upbt "
                >
                  Male
                </button>
                <button
                  id="drkbll01"
                  onClick={() => handleClick("two")}
                  className="upbt"
                >
                  Female
                </button>
                <button
                  id="drkbll02"
                  onClick={() => handleClick("three")}
                  className="upbt"
                >
                  Couple
                </button>
              </div>
              <div className="upper2-2">
                <img
                  style={{ visibility: "hidden" }}
                  className="call"
                  src={call}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section  style={{ display: showbtn ? "none" : "flex" }} className="deskcard">



        <div className={`cardo ${flip ? "flip" : ""} mobno` } >
        <div
          onClick={() => {
            setflip(!flip);
            setIsShown((current) => !current);
          }}
          className="front"
        >
          <div
            style={{
              display: isShown ? "none" : "block",
              transform: "rotateY(180deg)",
            }}
          >
            <span style={{marginLeft:"2px"}} className="bll"></span>
            <h1 style={{textAlign:"left" , fontSize:"20px",fontWeight:'700'}} className="h111">what is sexology?</h1>
            <h3 className="fulldet">
              Our experience in deploying healthcare chabots give us an edge
              in understanding industry specific challenges.
            </h3>
            <button className="cross01">
              X
            </button>
          </div>
          <div style={{ display: isShown ? "block" : "none",marginTop:"-20%" }}>
            <span className="bll"></span>
            <h1 className="h111">what is sexology?</h1>
            <button className="cross">
              +
            </button>
            
          </div>

          <span className="back" onClick={() => setflip(!flip)}>
            {" "}
          </span>
          {/* <button >hello</button> */}
        </div>
      </div>

      <div className={`cardo ${nonflip ? "flip" : ""} mobno`}>
        <div
          onClick={() => {
            setnonflip(!nonflip);
            setnon((current) => !current);
          }}
          className="front"
        >
          <div
            style={{
              display: non ? "none" : "block",
              transform: "rotateY(180deg)",
            }}
          >
              <span style={{marginLeft:"2px"}} className="bll"></span>
            <h1 style={{textAlign:"left" , fontSize:"20px",fontWeight:'700'}} className="h111">what is sexology?</h1>
            <h3 className="fulldet">
              Our experience in deploying healthcare chabots give us an edge
              in understanding industry specific challenges.
            </h3>
            <button className="cross01">
              X
            </button>
          </div>
          <div style={{ display: non ? "block" : "none",marginTop:"-20%" }}>
          <span className="bll"></span>
            <h1 className="h111">Can I give my  weaning?</h1>
            <button className="cross">
              +
            </button>
          </div>

          {/* <span className="back" onClick={() => setflip(!flip)}>
            {" "}
          </span> */}
          {/* <button >hello</button> */}
        </div>
      </div>

      <div className={`cardo ${nonflip01 ? "flip" : ""} mobno`}>
        <div
          onClick={() => {
            setnonflip01(!nonflip01);
            setnon01((current) => !current);
          }}
          className="front"
        >
          <div
            style={{
              display: non01 ? "none" : "block",
              transform: "rotateY(180deg)",
            }}
          >
            <span style={{marginLeft:"2px"}} className="bll"></span>
            <h1 style={{textAlign:"left" , fontSize:"20px",fontWeight:'700'}} className="h111">what is sexology?</h1>
            <h3 className="fulldet">
              Our experience in deploying healthcare chabots give us an edge
              in understanding industry specific challenges.
            </h3>
            <button className="cross01">
              X
            </button>
          </div>
          <div style={{ display: non01 ? "block" : "none",marginTop:"-20%" }}>
          <span className="bll"></span>
            <h1 className="h111">Do potatoes count as one of my 5 A Day?</h1>
            <button className="cross">
              +
            </button>
          </div>

          {/* <span className="back" onClick={() => setflip(!flip)}>
            {" "}
          </span> */}
          {/* <button >hello</button> */}
        </div>
      </div>

      <div className={`cardo ${nonflip02 ? "flip" : ""} mobno` }>
        <div
          onClick={() => {
            setnonflip02(!nonflip02);
            setnon02((current) => !current);
          }}
          className="front"
        >
          <div
            style={{
              display: non02 ? "none" : "block",
              transform: "rotateY(180deg)",
            }}
          >
             <span style={{marginLeft:"2px"}} className="bll"></span>
            <h1 style={{textAlign:"left" , fontSize:"20px",fontWeight:'700'}} className="h111">what is sexology?</h1>
            <h3 className="fulldet">
              Our experience in deploying healthcare chabots give us an edge
              in understanding industry specific challenges.
            </h3>
            <button className="cross01">
              X
            </button>
          </div>
          <div style={{ display: non02 ? "block" : "none",marginTop:"-20%" }}>
          <span className="bll"></span>
            <h1 className="h111">Can I just eat five portions of my favourite fruit or vegetable?</h1>
            <button className="cross">
              +
            </button>
          </div>

        
        </div>
      </div>



        
      
              <OwlCarousel className="mobowl owl-theme" items={1.5} margin={100} nav>
        <div className={`cardo ${flip ? "flip" : ""}`}>
          <div
            onClick={() => {
              setflip(!flip);
              setIsShown((current) => !current);
            }}
            className="front"
          >
            <div
              style={{
                display: isShown ? "none" : "block",
                transform: "rotateY(180deg)",
              }}
            >
              <span style={{marginLeft:"2px"}} className="bll"></span>
              <h1 style={{textAlign:"left" , fontSize:"20px",fontWeight:'700'}} className="h111">what is sexology?</h1>
              <h3 className="fulldet">
                Our experience in deploying healthcare chabots give us an edge
                in understanding industry specific challenges.
              </h3>
              <button className="cross01">
                X
              </button>
            </div>
            <div style={{ display: isShown ? "block" : "none",marginTop:"-20%" }}>
              <span className="bll"></span>
              <h1 className="h111">what is sexology?</h1>
              <button className="cross">
                +
              </button>
              
            </div>

            <span className="back" onClick={() => setflip(!flip)}>
              {" "}
            </span>
            {/* <button >hello</button> */}
          </div>
        </div>

        <div className={`cardo ${nonflip ? "flip" : ""}`}>
          <div
            onClick={() => {
              setnonflip(!nonflip);
              setnon((current) => !current);
            }}
            className="front"
          >
            <div
              style={{
                display: non ? "none" : "block",
                transform: "rotateY(180deg)",
              }}
            >
                <span style={{marginLeft:"2px"}} className="bll"></span>
              <h1 style={{textAlign:"left" , fontSize:"20px",fontWeight:'700'}} className="h111">what is sexology?</h1>
              <h3 className="fulldet">
                Our experience in deploying healthcare chabots give us an edge
                in understanding industry specific challenges.
              </h3>
              <button className="cross01">
                X
              </button>
            </div>
            <div style={{ display: non ? "block" : "none",marginTop:"-20%" }}>
            <span className="bll"></span>
              <h1 className="h111">Can I give my baby fruit and vegetables during weaning?</h1>
              <button className="cross">
                +
              </button>
            </div>

            {/* <span className="back" onClick={() => setflip(!flip)}>
              {" "}
            </span> */}
            {/* <button >hello</button> */}
          </div>
        </div>

        <div className={`cardo ${nonflip01 ? "flip" : ""}`}>
          <div
            onClick={() => {
              setnonflip01(!nonflip01);
              setnon01((current) => !current);
            }}
            className="front"
          >
            <div
              style={{
                display: non01 ? "none" : "block",
                transform: "rotateY(180deg)",
              }}
            >
              <span style={{marginLeft:"2px"}} className="bll"></span>
              <h1 style={{textAlign:"left" , fontSize:"20px",fontWeight:'700'}} className="h111">what is sexology?</h1>
              <h3 className="fulldet">
                Our experience in deploying healthcare chabots give us an edge
                in understanding industry specific challenges.
              </h3>
              <button className="cross01">
                X
              </button>
            </div>
            <div style={{ display: non01 ? "block" : "none",marginTop:"-20%" }}>
            <span className="bll"></span>
              <h1 className="h111">Do potatoes count as one of my 5 A Day?</h1>
              <button className="cross">
                +
              </button>
            </div>

            {/* <span className="back" onClick={() => setflip(!flip)}>
              {" "}
            </span> */}
            {/* <button >hello</button> */}
          </div>
        </div>

        <div className={`cardo ${nonflip02 ? "flip" : ""}`}>
          <div
            onClick={() => {
              setnonflip02(!nonflip02);
              setnon02((current) => !current);
            }}
            className="front"
          >
            <div
              style={{
                display: non02 ? "none" : "block",
                transform: "rotateY(180deg)",
              }}
            >
               <span style={{marginLeft:"2px"}} className="bll"></span>
              <h1 style={{textAlign:"left" , fontSize:"20px",fontWeight:'700'}} className="h111">what is sexology?</h1>
              <h3 className="fulldet">
                Our experience in deploying healthcare chabots give us an edge
                in understanding industry specific challenges.
              </h3>
              <button className="cross01">
                X
              </button>
            </div>
            <div style={{ display: non02 ? "block" : "none",marginTop:"-20%" }}>
            <span className="bll"></span>
              <h1 className="h111">Can I just eat five portions of my favourite fruit or vegetable?</h1>
              <button className="cross">
                +
              </button>
            </div>

            {/* <span className="back" onClick={() => setflip(!flip)}>
              {" "}
            </span> */}
            {/* <button >hello</button> */}
          </div>
        </div>
        </OwlCarousel>

        {/* <div className={`cardo ${flip01 ? "flip" : ""}`}>
          <div
            onClick={() => {
              setflip01(!flip01);
              setIsShown01((current) => !current);
            }}
            className="front"
          >
            <h1 id="name">hello</h1>
            <h2 id="bb">bisc</h2>
            <span className="back" onClick={() => setflip01(!flip01)}>
              {" "}
              this is me hello
            </span>
          </div>
        </div> */}
      </section>
      <section
        style={{ display: showbtn ? "flex" : "none" }}
        className="deskcard"
      >
            <div className={`cardo ${flip ? "flip" : ""}mobno`}>
          <div
            onClick={() => {
              setflip(!flip);
              setIsShown((current) => !current);
            }}
            className="front"
          >
            <div
              style={{
                display: isShown ? "none" : "block",
                transform: "rotateY(180deg)",
              }}
            >
              <span style={{marginLeft:"2px"}} className="bll"></span>
              <h1 style={{textAlign:"left" , fontSize:"20px",fontWeight:'700'}} className="h111">what is sexology?</h1>
              <h3 className="fulldet">
                Our experience in deploying healthcare chabots give us an edge
                in understanding industry specific challenges.
              </h3>
              <button className="cross01">
                X
              </button>
            </div>
            <div style={{ display: isShown ? "block" : "none",marginTop:"-20%" }}>
              <span className="bll"></span>
              <h1 className="h111">what is sexology?</h1>
              <button className="cross">
                +
              </button>
              
            </div>

            <span className="back" onClick={() => setflip(!flip)}>
              {" "}
            </span>
            {/* <button >hello</button> */}
          </div>
        </div>

        <div className={`cardo ${nonflip ? "flip" : ""} mobno`}>
          <div
            onClick={() => {
              setnonflip(!nonflip);
              setnon((current) => !current);
            }}
            className="front"
          >
            <div
              style={{
                display: non ? "none" : "block",
                transform: "rotateY(180deg)",
              }}
            >
                <span style={{marginLeft:"2px"}} className="bll"></span>
              <h1 style={{textAlign:"left" , fontSize:"20px",fontWeight:'700'}} className="h111">what is sexology?</h1>
              <h3 className="fulldet">
                Our experience in deploying healthcare chabots give us an edge
                in understanding industry specific challenges.
              </h3>
              <button className="cross01">
                X
              </button>
            </div>
            <div style={{ display: non ? "block" : "none",marginTop:"-20%" }}>
            <span className="bll"></span>
              <h1 className="h111">Can I give my baby fruit and vegetables during weaning?</h1>
              <button className="cross">
                +
              </button>
            </div>

            {/* <span className="back" onClick={() => setflip(!flip)}>
              {" "}
            </span> */}
            {/* <button >hello</button> */}
          </div>
        </div>

        <div className={`cardo ${nonflip01 ? "flip" : ""} mobno`}>
          <div
            onClick={() => {
              setnonflip01(!nonflip01);
              setnon01((current) => !current);
            }}
            className="front"
          >
            <div
              style={{
                display: non01 ? "none" : "block",
                transform: "rotateY(180deg)",
              }}
            >
              <span style={{marginLeft:"2px"}} className="bll"></span>
              <h1 style={{textAlign:"left" , fontSize:"20px",fontWeight:'700'}} className="h111">what is sexology?</h1>
              <h3 className="fulldet">
                Our experience in deploying healthcare chabots give us an edge
                in understanding industry specific challenges.
              </h3>
              <button className="cross01">
                X
              </button>
            </div>
            <div style={{ display: non01 ? "block" : "none",marginTop:"-20%" }}>
            <span className="bll"></span>
              <h1 className="h111">Do potatoes count as one of my 5 A Day?</h1>
              <button className="cross">
                +
              </button>
            </div>

            {/* <span className="back" onClick={() => setflip(!flip)}>
              {" "}
            </span> */}
            {/* <button >hello</button> */}
          </div>
        </div>

        <div className={`cardo ${nonflip02 ? "flip" : ""} mobno`}>
          <div
            onClick={() => {
              setnonflip02(!nonflip02);
              setnon02((current) => !current);
            }}
            className="front"
          >
            <div
              style={{
                display: non02 ? "none" : "block",
                transform: "rotateY(180deg)",
              }}
            >
               <span style={{marginLeft:"2px"}} className="bll"></span>
              <h1 style={{textAlign:"left" , fontSize:"20px",fontWeight:'700'}} className="h111">what is sexology?</h1>
              <h3 className="fulldet">
                Our experience in deploying healthcare chabots give us an edge
                in understanding industry specific challenges.
              </h3>
              <button className="cross01">
                X
              </button>
            </div>
            <div style={{ display: non02 ? "block" : "none",marginTop:"-20%" }}>
            <span className="bll"></span>
              <h1 className="h111">Can I just eat five portions of my favourite fruit or vegetable?</h1>
              <button className="cross">
                +
              </button>
            </div>

            {/* <span className="back" onClick={() => setflip(!flip)}>
              {" "}
            </span> */}
            {/* <button >hello</button> */}
          </div>
        </div>
        <OwlCarousel className="mobowl owl-theme" items={1.5} margin={100} nav>
        <div className={`cardo ${flip ? "flip" : ""}`}>
          <div
            onClick={() => {
              setflip(!flip);
              setIsShown((current) => !current);
            }}
            className="front"
          >
            <div
              style={{
                display: isShown ? "none" : "block",
              
              }}
            >
              <span style={{marginLeft:"2px"}} className="bll"></span>
              <h1 style={{textAlign:"left" , fontSize:"20px",fontWeight:'700'}} className="h111">what is sexology?</h1>
              <h3 className="fulldet">
                Our experience in deploying healthcare chabots give us an edge
                in understanding industry specific challenges.
              </h3>
              <button className="cross01">
                X
              </button>
            </div>
            <div style={{ display: isShown ? "block" : "none",marginTop:"-20%" }}>
            <span className="bll"></span>
              <h1 className="h111">Can I just eat five portions of my favourite fruit or vegetable?</h1>
              <button className="cross">
                +
              </button>
            </div>

            <span className="back" onClick={() => setflip(!flip)}>
              {" "}
            </span>
            {/* <button >hello</button> */}
          </div>
        </div>

        <div className={`cardo ${nonflip ? "flip" : ""}`}>
          <div
            onClick={() => {
              setnonflip(!nonflip);
              setnon((current) => !current);
            }}
            className="front"
          >
            <div
              style={{
                display: non ? "none" : "block",
               
              }}
            >
               <span style={{marginLeft:"2px"}} className="bll"></span>
              <h1 style={{textAlign:"left" , fontSize:"20px",fontWeight:'700'}} className="h111">what is sexology?</h1>
              <h3 className="fulldet">
                Our experience in deploying healthcare chabots give us an edge
                in understanding industry specific challenges.
              </h3>
              <button className="cross01">
                X
              </button>
            </div>
            <div style={{ display: non ? "block" : "none",marginTop:"-20%" }}>
            <span className="bll"></span>
              <h1 className="h111">Can I give my baby fruit and vegetables during weaning?</h1>
              <button className="cross">
                +
              </button>
            </div>

            {/* <span className="back" onClick={() => setflip(!flip)}>
              {" "}
            </span> */}
            {/* <button >hello</button> */}
          </div>
        </div>

        <div className={`cardo ${nonflip01 ? "flip" : ""}`}>
          <div
            onClick={() => {
              setnonflip01(!nonflip01);
              setnon01((current) => !current);
            }}
            className="front"
          >
            <div
              style={{
                display: non01 ? "none" : "block",
              
              }}
            >
               <span style={{marginLeft:"2px"}} className="bll"></span>
              <h1 style={{textAlign:"left" , fontSize:"20px",fontWeight:'700'}} className="h111">what is sexology?</h1>
              <h3 className="fulldet">
                Our experience in deploying healthcare chabots give us an edge
                in understanding industry specific challenges.
              </h3>
              <button className="cross01">
                X
              </button>
            </div>
            <div style={{ display: non01 ? "block" : "none",marginTop:"-20%"}}>
            <span className="bll"></span>
              <h1 className="h111">Do potatoes count as one of my 5 A Day?</h1>
              <button className="cross">
                +
              </button>
            </div>

            {/* <span className="back" onClick={() => setflip(!flip)}>
              {" "}
            </span> */}
            {/* <button >hello</button> */}
          </div>
        </div>

        <div className={`cardo ${nonflip02 ? "flip" : ""}`}>
          <div
            onClick={() => {
              setnonflip02(!nonflip02);
              setnon02((current) => !current);
            }}
            className="front"
          >
            <div
              style={{
                display: non02 ? "none" : "block",
               
              }}
            >
              <span style={{marginLeft:"2px"}} className="bll"></span>
              <h1 style={{textAlign:"left" , fontSize:"20px",fontWeight:'700'}} className="h111">what is sexology?</h1>
              <h3 className="fulldet">
                Our experience in deploying healthcare chabots give us an edge
                in understanding industry specific challenges.
              </h3>
              <button className="cross01">
                X
              </button>
            </div>
            <div style={{ display: non02 ? "block" : "none",marginTop:"-20%" }}>
            <span className="bll"></span>
              <h1 className="h111">what is sexology?</h1>
              <button className="cross">
                +
              </button>
            </div>

            {/* <span className="back" onClick={() => setflip(!flip)}>
              {" "}
            </span> */}
            {/* <button >hello</button> */}
          </div>
        </div>

        {/* <div className={`cardo ${flip01 ? "flip" : ""}`}>
          <div
            onClick={() => {
              setflip01(!flip01);
              setIsShown01((current) => !current);
            }}
            className="front"
          >
            <h1 id="name">hello</h1>
            <h2 id="bb">bisc</h2>
            <span className="back" onClick={() => setflip01(!flip01)}>
              {" "}
              this is me hello
            </span>
          </div>
        </div> */}
        </OwlCarousel>
      </section>
    </>
  );
};

export default Main;

{
  /* <div class="scene scene--card">
  <div class="card">
    <div class="card__face card__face--front">front</div>
    <div class="card__face card__face--back">back</div>
  </div>
</div>  */
}
