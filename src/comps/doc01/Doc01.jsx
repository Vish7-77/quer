import React, { useEffect } from 'react'
import "./doc01.css"
import dranita from "../../assets/dranita.png"
import playblu from "../../assets/playblu.png"
const Doc01 = () => {

// const nofoot =()=>{
//   document.getElementById('footer').style.display="none"
//   document.querySelectorAll('.footer').style.display="none"
// }
const Func01=()=>{

if(document.documentElement.clientWidth ==="1263")


{  // document.getElementById("header").style.display="none"
  document.getElementById("footer").style.display="flex"}
  else{

  }
}
   
useEffect(() => {
 Func01()
})

// useEffect(() => {
//   nofoot()
// }, [])



  return (
   <section className="doc01">
    <div className="doc01-in">
    <img src={dranita} alt="" />
    <div className="doc-in-right">
<div className="mainheadingdocin">

<h1>Dr. Anita Shyam</h1>
<span>Gynecologist</span>

</div>
<h3 className='deskt01 expdoc'>Expert in Obstetrician, Gynaecologist, Infertility</h3>
<h3 className=' deskt01 expdoc'>100+ Cases Solved</h3>
<h3 className='expdoc'>  ₹ 1500 Consulting Fee</h3>
<span className='expdoc01'>( 30% Discount for Qurex User)</span>
<div className="watchvid">
    <button className="watch">
  <img src={playblu} alt="" /> Watch now
    </button>
<button className="cons">
Consult now
</button>
</div>
    </div>


    </div>




   </section>
  )
}

export default Doc01