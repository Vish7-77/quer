import React from 'react'
import "./hr.css"
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import erc from "../../assets/erc.png"
import ls from "../../assets/ls.png"
import pm from "../../assets/pm.png"
const HighRec = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
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
          items: 1
        }
      };
  return (
   <section className="highrec">
<div className="innerhighrec">
 <div className="upperinnerhr">
<h1>Highly Recommended For</h1>

 </div>
 <OwlCarousel   className="owl-theme"  margin={10} nav>
        <div className="cards">
            <div className="maincard">
              <img src={ls} alt="" />
              <h2 className="mainh2"> Low-Sex Drive</h2>
              <h5>its defined by diificult in getting and keeping eraction</h5>
            </div>
          </div>

          <div className="cards">
            <div className="maincard">
              <img src={pm} alt="" />
              <h2 className="mainh2">Premature Ejaculation</h2>
              <h5>its defined by diificult in getting and keeping eraction</h5>
            </div>
          </div>
          <div className="cards">
            <div className="maincard">
              <img src={erc} alt="" />
              <h2 className="mainh2">Eractile Dysfunction</h2>
              <h5>its defined by diificult in getting and keeping eraction</h5>
            </div>
          </div>
          <div className="cards">
            <div className="maincard">
              <img src={erc} alt="" />
              <h2 className="mainh2">Eractile Dysfunction</h2>
              <h5>its defined by diificult in getting and keeping eraction</h5>
            </div>
          </div>
          <div className="cards">
            <div className="maincard">
              <img src={ls} alt="" />
              <h2 className="mainh2">Low-Sex Drive</h2>
              <h5>its defined by diificult in getting and keeping eraction</h5>
            </div>
          </div>
          <div className="cards">
            <div className="maincard">
              <img src={pm} alt="" />
              <h2 className="mainh2">Premature Ejaculation</h2>
              <h5>its defined by diificult in getting and keeping eraction</h5>
            </div>
          </div>
        </OwlCarousel>



</div>

   </section>
  )
}

export default HighRec