import React from 'react'
import "./trtmain6.css"
import dbqu from "../../assets/dbqu.png"
import client01 from "../../assets/client01.png"
const Main6 = () => {
  return (
  <section className="main6">

<section className='feedback'>
<div className="upperfeed">
 <h1>Patient's Feedback</h1>
 <span>View All</span>

</div>

<div className="lowerfeed">
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

    




</div>


</section>

  </section>
  )
}

export default Main6