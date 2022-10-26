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
   <div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
      Quick Links
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
       Policies
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
      Contact
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div>
</div>

<img className="andfootmob" src={andfoot} alt="" />
<img className='iosmobfoot' src={iosfoot} alt="" />



      
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

   <div className="footmob">
   <div> <h2>Discreetly consult top doctors for any sexual health issue</h2></div>
<img className='f001' src={footer01} alt="" />
<img  className='f002' src={footer2} alt="" />
<img  className='f003' src={footer3} alt="" />
<img  className='f004' src={footer4} alt="" />
<img  className='f005' src={footer5} alt="" />
<img  className='f006' src={footer6} alt="" />
<div className="graylinemob"></div>
<div className="mobsoical">

<FaFacebookF/>
<AiOutlineTwitter/>
<AiFillInstagram/>
<AiFillYoutube/>

</div>


   </div>
   </section>
  )
}

export default Footer