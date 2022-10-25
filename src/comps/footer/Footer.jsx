import React from 'react'
import "./footer.css"
import footer01 from "../../assets/footer01.png"
import footer2 from "../../assets/footer2.png"
import footer6 from "../../assets/footer6.png"
import footer3 from "../../assets/footer3.png"
import footer4 from "../../assets/footer4.png"
import footer5 from "../../assets/footer5.png"
import andfoot from "../../assets/andfoot.png"
import iosfoot from "../../assets/iosfoot.png"
import {FaFacebookF} from "react-icons/fa"
import {AiFillInstagram} from "react-icons/ai"
import {AiOutlineTwitter} from "react-icons/ai"
import {AiFillYoutube} from "react-icons/ai" 

const Footer = () => {
  return (
   <section className='footer' id="footer">
   <div className="leftfoot">
      <div> <h2>Discreetly consult top doctors for any sexual health issue</h2></div>
<img className='f01' src={footer01} alt="" />
<img  className='f02' src={footer2} alt="" />
<img  className='f03' src={footer3} alt="" />
<img  className='f04' src={footer4} alt="" />
<img  className='f05' src={footer5} alt="" />
<img  className='f06' src={footer6} alt="" />


   </div>

   <div className="footright">
<div className='footer001'>
<h1>Quick Links</h1>

<span>sexual issues treated</span>
<span>our sexologist</span>
<span>Blogs</span>

<span>FAQ's</span>
<span>About-us</span>
<img className='and' src={andfoot} alt="" />
<dir className="footicon">  <FaFacebookF/>
<AiOutlineTwitter/>
<AiFillInstagram/>
<AiFillYoutube/></dir>

</div>

<div className='footer001'>
<h1>Policies</h1>

<span>Refund & cancellation policy</span>
<span>privacy policy</span>
<span>terms of use</span>
<img  className='ios' src={iosfoot} alt="" />



</div>
<div className='footer001'>
<h1>Contact</h1>
<span>Constact@qurex.ai</span>
<span>chat with us</span>
<span>phone number</span>



</div>


   </div>
   </section>
  )
}

export default Footer