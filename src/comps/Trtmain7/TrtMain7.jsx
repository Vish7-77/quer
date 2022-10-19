import React from 'react'
import "./trtmain6.css"
import dbqu from "../../assets/dbqu.png"
import client01 from "../../assets/client01.png"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const Main6 = () => {
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
  <section className="main6" style={{marginBottom:"-10%"}}>

<section className='feedback'>
<div className="upperfeed">
 <h1>Patient's Feedback</h1>
 <span>View All</span>

</div>


{/* <div className="lowerfeed" style={{height:"400px"}}> */}

<Carousel responsive={responsive}>
<div className="feed01">
      <img src={dbqu} alt=""/>

<h3> Very Helpful</h3>
<span>far easier than doing something on computer. allows quick and aesy search with speedy booking.even maintains history of doctors visited</span>
<div className='gryline'></div>
<div className='clientdet'>

    <img src={client01} alt="" />
   <div>
   <h1>indujha</h1>
    <h2>chennai</h2>
   </div>
</div>

    </div>

    <div className="feed01">
      <img src={dbqu} alt=""/>

<h3> Very Helpful</h3>
<span>far easier than doing something on computer. allows quick and aesy search with speedy booking.even maintains history of doctors visited</span>
<div className='gryline'></div>
<div className='clientdet'>

    <img src={client01} alt="" />
   <div>
   <h1>indujha</h1>
    <h2>chennai</h2>
   </div>
</div>

    </div>
    <div className="feed01">
      <img src={dbqu} alt=""/>

<h3> Very Helpful</h3>
<span>far easier than doing something on computer. allows quick and aesy search with speedy booking.even maintains history of doctors visited</span>
<div className='gryline'></div>
<div className='clientdet'>

    <img src={client01} alt="" />
   <div>
   <h1>indujha</h1>
    <h2>chennai</h2>
   </div>
</div>

    </div>
    <div className="feed01">
      <img src={dbqu} alt=""/>

<h3> Very Helpful</h3>
<span>far easier than doing something on computer. allows quick and aesy search with speedy booking.even maintains history of doctors visited</span>
<div className='gryline'></div>
<div className='clientdet'>

    <img src={client01} alt="" />
   <div>
   <h1>indujha</h1>
    <h2>chennai</h2>
   </div>
</div>

    </div>
    <div className="feed01">
      <img src={dbqu} alt=""/>

<h3> Very Helpful</h3>
<span>far easier than doing something on computer. allows quick and aesy search with speedy booking.even maintains history of doctors visited</span>
<div className='gryline'></div>
<div className='clientdet'>

    <img src={client01} alt="" />
   <div>
   <h1>indujha</h1>
    <h2>chennai</h2>
   </div>
</div>

    </div>
    <div className="feed01">
      <img src={dbqu} alt=""/>

<h3> Very Helpful</h3>
<span>far easier than doing something on computer. allows quick and aesy search with speedy booking.even maintains history of doctors visited</span>
<div className='gryline'></div>
<div className='clientdet'>

    <img src={client01} alt="" />
   <div>
   <h1>indujha</h1>
    <h2>chennai</h2>
   </div>
</div>

    </div>



    </Carousel>
    




{/* </div> */}




</section>

  </section>
  )
}

export default Main6