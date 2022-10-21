import React,{useState} from "react";
import "./Main.css";
import erc from "../../assets/erc.png"
import ls from "../../assets/ls.png"
import call from "../../assets/call.png";
import pm from "../../assets/pm.png";
import ma from "../../assets/ma.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";

const Main = () => {

 
  const [isShown, setIsShown] = useState(true);
  const handleClick = (event) => {
    // 👇️ toggle visibility
    setIsShown(current => !current);
    if(event==="one"){

      document.getElementById('drkbl').style.background="blue"; 
      document.getElementById('drkbl01').style.background="white"; 
      document.getElementById('drkbl02').style.background="white"; 
      // document.getElementById('drkbl').style.color="white"; 
      // document.getElementsByClassName('drkbl').style.color="white" ;

    }
    if(event==="two"){

      document.getElementById('drkbl').style.background="white"; 
      document.getElementById('drkbl01').style.background="blue"; 
      document.getElementById('drkbl02').style.background="white"; 
      // document.getElementById('drkbl').style.color="white"; 
      // document.getElementsByClassName('drkbl').style.color="white" ;

    }
    if(event==="three"){

      document.getElementById('drkbl').style.background="white"; 
      document.getElementById('drkbl01').style.background="white"; 
      document.getElementById('drkbl02').style.background="blue"; 
      // document.getElementById('drkbl').style.color="white"; 
      // document.getElementsByClassName('drkbl').style.color="white" ;

    }
  };
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 4
    }
  };
  // var header = document.getElementById("upper2-1");
  // var btns = header.getElementsByClassName("uprbtn");

  const toggleItem=(elem)=>{
    for (var i = 0; i < elem.length; i++) {
      elem[i].addEventListener("click", function(e) {
        var current = this;
        for (var i = 0; i < elem.length; i++) {
          if (current !== elem[i]) {
            elem[i].classList.remove('active');
          } else if (current.classList.contains('active') === true) {
            current.classList.remove('active');
          } else {
            current.classList.add('active')
          }
        }
        e.preventDefault();
      });
    };
  }

  toggleItem(document.querySelectorAll('.link'));



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
              <div className="upper2-1 ">
              {/* <div class="parent"> */}

{/* <div class="switch_3_ways">
  <div id="monthly" classNam="switch monthly" onclick={change_period('monthly')}>Mensuel</div>
  <div id="semester" className="switch semester active" onclick={change_period('semester')}>Semestriel</div>
  <div id="annual" className="switch annual" onclick={change_period('annual')}>Annuel</div>
</div>

</div> */}
                <button id="drkbl" onClick={()=>handleClick('one')} className=" uprbtn ">male</button>
                <button id="drkbl01" onClick={()=>handleClick('two')} className=" uprbtn">female</button>
                <button id="drkbl02" onClick={()=>handleClick('three')} className=" uprbtn">couple</button>
              </div>
              <div className="upper2-2">
                <img className="call" src={call} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    <div className="sec10" style={{display: isShown ? 'none' : 'block'}}>
      <Carousel responsive={responsive} >
      
      <div className="cards">
   <div className="maincard">
     <img src={erc} alt="" />
   <h2 className="mainh2">Eractile Dysfunction</h2>
     <h5>
       its defined by diificult in getting and keeping eraction
     </h5>
   </div>
   </div>
     
   <div className="cards">
   <div className="maincard">
     <img src={erc} alt="" />
   <h2 className="mainh2">Eractile Dysfunction</h2>
     <h5>
       its defined by diificult in getting and keeping eraction
     </h5>
   </div>
   </div>
   <div className="cards">
   <div className="maincard">
     <img src={erc} alt="" />
   <h2 className="mainh2">Eractile Dysfunction</h2>
     <h5>
       its defined by diificult in getting and keeping eraction
     </h5>
   </div>
   </div>
   <div className="cards">
   <div className="maincard">
     <img src={erc} alt="" />
   <h2 className="mainh2">Eractile Dysfunction</h2>
     <h5>
       its defined by diificult in getting and keeping eraction
     </h5>
   </div>
   </div>
   <div className="cards">
   <div className="maincard">
     <img src={erc} alt="" />
   <h2 className="mainh2">Eractile Dysfunction</h2>
     <h5>
       its defined by diificult in getting and keeping eraction
     </h5>
   </div>
   </div>
   <div className="cards">
   <div className="maincard">
     <img src={erc} alt="" />
   <h2 className="mainh2">Eractile Dysfunction</h2>
     <h5>
       its defined by diificult in getting and keeping eraction
     </h5>
   </div>
   </div>


        </Carousel>
        </div>
          <div className="sec10" style={{display: isShown ? 'block' : 'none'}}>
      <Carousel responsive={responsive} >
      
      <div className="cards">
   <div className="maincard">
     <img src={erc} alt="" />
   <h2 className="mainh2"> Dysfunction</h2>
     <h5>
       its defined by diificult in getting and keeping eraction
     </h5>
   </div>
   </div>
     
   <div className="cards">
   <div className="maincard">
     <img src={erc} alt="" />
   <h2 className="mainh2">Eractile Dysfunction</h2>
     <h5>
       its defined by diificult in getting and keeping eraction
     </h5>
   </div>
   </div>
   <div className="cards">
   <div className="maincard">
     <img src={erc} alt="" />
   <h2 className="mainh2">Eractile Dysfunction</h2>
     <h5>
       its defined by diificult in getting and keeping eraction
     </h5>
   </div>
   </div>
   <div className="cards">
   <div className="maincard">
     <img src={erc} alt="" />
   <h2 className="mainh2">Eractile Dysfunction</h2>
     <h5>
       its defined by diificult in getting and keeping eraction
     </h5>
   </div>
   </div>
   <div className="cards">
   <div className="maincard">
     <img src={erc} alt="" />
   <h2 className="mainh2">Eractile Dysfunction</h2>
     <h5>
       its defined by diificult in getting and keeping eraction
     </h5>
   </div>
   </div>
   <div className="cards">
   <div className="maincard">
     <img src={erc} alt="" />
   <h2 className="mainh2">Eractile Dysfunction</h2>
     <h5>
       its defined by diificult in getting and keeping eraction
     </h5>
   </div>
   </div>


        </Carousel>
        </div>
    </>
  );
};

export default Main;


{/* <div className="sliderone">
       <div className="cards">
   <div className="maincard">
     <img src={erc} alt="" />
   <h2 className="mainh2">Eractile Dysfunction</h2>
     <h5>
       its defined by diificult in getting and keeping eraction
     </h5>
   </div>
 </div>
 <div className="cards">
   <div className="maincard">
     <img src={ls} alt="" />
     <h2 className="mainh2">Eractile Dysfunction</h2>
     <h5>
       its defined by diificult in getting and keeping eraction
     </h5>
   </div>
 </div>
 <div className="cards">
   <div className="maincard">
     <img src={pm} alt="" />
     <h2 className="mainh2">Eractile Dysfunction</h2>
     <h5>
       its defined by diificult in getting and keeping eraction
     </h5>
   </div>
 </div>
    </div> */}
//       <div className="sliderone">
//       <div className="cards">
//   <div className="maincard">
//     <img src={erc} alt="" />
//     <h2 className="mainh2">Eractile Dysfunction</h2>
//     <h5>
//       its defined by diificult in getting and keeping eraction
//     </h5>
//   </div>
// </div>
// <div className="cards">
//   <div className="maincard">
//     <img src={pm} alt="" />
//     <h2 className="mainh2">Eractile Dysfunction</h2>
//     <h5>
//       its defined by diificult in getting and keeping eraction
//     </h5>
//   </div>
// </div>
// <div className="cards">
//   <div className="maincard">
//     <img src={erc} alt="" />
//     <h2 className="mainh2">Eractile Dysfunction</h2>
//     <h5>
//       its defined by diificult in getting and keeping eraction
//     </h5>
//   </div>
// </div>
//       </div>
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