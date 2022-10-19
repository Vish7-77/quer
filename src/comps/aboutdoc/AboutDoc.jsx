import React from 'react'
import "./ad.css"
import cal from "../../assets/cal.png"
import globe from "../../assets/globe.png"
import hat from "../../assets/hat.png"
import call from "../../assets/call.png"
import dbqu from "../../assets/dbqu.png"
const AboutDoc = () => {
  return (
    <section className='aBoutdoc'>
 <div className="docinfoleft">

 <h2>About Anita</h2>
 <p>Dr. Anita Shyam is a well-known women’s sexual health expert. She has obtained her MBBS and DGO degrees from Netaji Subhash Chandra Bose Medical College.<b> Show More</b> </p>
 <span ><img src={cal} alt="" /><p>8+ years of experience</p></span>
 <span><img src={globe} alt="" /><p>Language known English, Tamil, Hindi</p></span>
 <span><img src={hat} alt="" /><p>MBBS, MD (Psychiatry)</p></span>
 <span><img src={cal} alt="" /><p>Available on chat, live, and voice</p></span>

 </div>
<div className="docinforight">
<div className="box">
    <img className='dbqu' src={dbqu} alt="" />
    <h6>"Sexual health encompasses a plethora of sexual problems. The stigmas associated with it limit people from seeking help.I urge people to educate themselves about intimacy-related issues and seek holistic treatment, which involves a combination of both medical and psychological approaches."</h6>
    <h3>Dr.Anita Shyam</h3>
    <img className='calldoc' src={call} alt="" />
</div>

</div>


    </section>
  )
}

export default AboutDoc