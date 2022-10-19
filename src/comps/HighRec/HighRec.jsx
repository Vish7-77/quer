import React from 'react'
import "./hr.css"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
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
 <Carousel responsive={responsive}>

<div className="cardhighrec">
<img src={erc} alt="" />
<h2>Erectile Dysfunction</h2>
<span>It is defined by difficulty getting and keeping an erection.</span>
</div>
<div className="cardhighrec">
<img src={ls} alt="" />
<h2>Erectile Dysfunction</h2>
<span>It is defined by difficulty getting and keeping an erection.</span>
</div>
<div className="cardhighrec">
<img src={pm} alt="" />
<h2>Erectile Dysfunction</h2>
<span>It is defined by difficulty getting and keeping an erection.</span>



 </div>
 <div className="cardhighrec">
<img src={erc} alt="" />
<h2>Erectile Dysfunction</h2>
<span>It is defined by difficulty getting and keeping an erection.</span>



 </div>
 <div className="cardhighrec">
<img src={erc} alt="" />
<h2>Erectile Dysfunction</h2>
<span>It is defined by difficulty getting and keeping an erection.</span>



 </div>
 <div className="cardhighrec">
<img src={ls} alt="" />
<h2>Erectile Dysfunction</h2>
<span>It is defined by difficulty getting and keeping an erection.</span>



 </div>
 <div className="cardhighrec">
<img src={pm} alt="" />
<h2>Erectile Dysfunction</h2>
<span>It is defined by difficulty getting and keeping an erection.</span>



 </div>

 <div className="cardhighrec">
<img src={ls} alt="" />
<h2>Erectile Dysfunction</h2>
<span>It is defined by difficulty getting and keeping an erection.</span>



 </div>

 </Carousel>



</div>

   </section>
  )
}

export default HighRec