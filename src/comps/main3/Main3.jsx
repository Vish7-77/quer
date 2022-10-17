import React from 'react'
import cursor from "../../assets/cursor.png"
import rx from "../../assets/rx.png"
import chatt from "../../assets/chatt.png"
import "./main.css"


const Main3 = () => {
  return (
 <section className="main3">
    <div className="uph">
        <h1>How it Works</h1>
        <h3>Cure your sexual issues in 3 easy steps</h3>
    </div>

    <div className="downrow">
<div className="work1">
<img src={cursor} alt="" />
<h2>Choose your own sexologiest</h2>
<span>let us help you choose your sexologiest or choose your own sexologiest.There are many varieties of passage of lorem ipsum </span>


</div>
<div className="work1">
<img src={chatt} alt="" />
<h2>Consult your sexologiest</h2>
<span>let us help you choose your sexologiest or choose your own sexologiest.There are many varieties of passage of lorem ipsum </span>


</div>
<div className="work1">
<img src={rx} alt="" />
<h2>Choose your own sexologiest</h2>
<span>let us help you choose your sexologiest or choose your own sexologiest.There are many varieties of passage of lorem ipsum </span>


</div>



    </div>




 </section>
  )
}

export default Main3