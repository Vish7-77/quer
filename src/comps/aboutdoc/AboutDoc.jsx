import React,{useState} from 'react'
import "./ad.css"
import cal from "../../assets/cal.png"
import globe from "../../assets/globe.png"
import hat from "../../assets/hat.png"
import call from "../../assets/call.png"
import dbqu from "../../assets/dbqu.png"
import docbag from "../../assets/docbag.png"
const AboutDoc = () => {
  const [isShown, setIsShown] = useState(true);
  const handleClick = (event) => {
    // 👇️ toggle visibility
    setIsShown(current => !current);}

  return (
    <section className='aBoutdoc'>
 <div className="docinfoleft" style={{height:isShown ?'180vh':'30vh' }}>

 <h2>About Anita</h2>
 <p>Dr. Anita Shyam is a well-known women’s sexual health expert. She has obtained her MBBS and DGO degrees from Netaji Subhash Chandra Bose Medical College.<button onClick={handleClick}> <b style={{opacity : isShown ?"0.5":'1'}}> Show More </b></button>  </p>
<div className='onshow' style={{display: isShown ? 'flex':'none'}}>
<div className='onshowup'>

<div className='onshowup01'> 
<h1 className='exp'>Experience</h1>
<div className='docmore'>
  <img  style={{ width:"40px", height:"40px"}}src={docbag} alt="" />
  <div className='docmorein'>
    <h1>clinical Observer</h1>
    <h4>
    Boston Medical Center (BMC), Sexual Medicine Department  
    </h4>
    <h5>since 2013</h5>
  </div>
</div>
<div className='docmore'>
  <img  style={{ width:"40px", height:"40px"}}src={docbag} alt="" />
  <div className='docmorein'>
    <h1>clinical Observer</h1>
    <h4>
    Boston Medical Center (BMC), Sexual Medicine Department  
    </h4>
    <h5>since 2013</h5>
  </div>
</div>
<div className='docmore'>
  <img  style={{ width:"40px", height:"40px"}}src={docbag} alt="" />
  <div className='docmorein'>
    <h1>clinical Observer</h1>
    <h4>
    Boston Medical Center (BMC), Sexual Medicine Department  
    </h4>
    <h5>since 2013</h5>
  </div>
</div>
</div>

<div className='onshowup01'> 
<h1 className='exp'>Experience</h1>
<div className='docmore'>
  <img  style={{ width:"40px", height:"40px"}}src={docbag} alt="" />
  <div className='docmorein'>
    <h1>clinical Observer</h1>
    <h4>
    Boston Medical Center (BMC), Sexual Medicine Department  
    </h4>
    <h5>since 2013</h5>
  </div>
</div>
<div className='docmore'>
  <img  style={{ width:"40px", height:"40px"}}src={docbag} alt="" />
  <div className='docmorein'>
    <h1>clinical Observer</h1>
    <h4>
    Boston Medical Center (BMC), Sexual Medicine Department  
    </h4>
    <h5>since 2013</h5>
  </div>
</div>
<div className='docmore'>
  <img  style={{ width:"40px", height:"40px"}}src={docbag} alt="" />
  <div className='docmorein'>
    <h1>clinical Observer</h1>
    <h4>
    Boston Medical Center (BMC), Sexual Medicine Department  
    </h4>
    <h5>since 2013</h5>
  </div>
</div>
</div>

</div>
<div className='onshowdown'>
  <h1 className='avail'>Availabilities</h1>
  <div className='sched'>
  <div className="days"><h1>Monday</h1> <h3>10:00 AM - 10.30 AM  &  02:00 PM - 04:45 PM</h3></div>
  <div className="days"><h1>Tuesday</h1> <h3>10:00 AM - 10.30 AM  &  02:00 PM - 04:45 PM</h3></div>
  <div className="days"><h1>Wednesday</h1> <h3>10:00 AM - 10.30 AM  &  02:00 PM - 04:45 PM</h3></div>
  <div className="days"><h1>Thursday</h1> <h3>10:00 AM - 10.30 AM  &  02:00 PM - 04:45 PM</h3></div>
  <div className="days"><h1>Friday</h1> <h3>10:00 AM - 10.30 AM  &  02:00 PM - 04:45 PM</h3></div>
  <div className="days"><h1>Saturday</h1> <h3>10:00 AM - 10.30 AM  &  02:00 PM - 04:45 PM</h3></div>

  </div>
</div>

</div>

 <span className='martop04'><img src={cal} alt="" /><p>8+ years of experience</p></span>
 <span className='martop04'><img src={globe} alt="" /><p>Language known English, Tamil, Hindi</p></span>
 <span className='martop04'><img src={hat} alt="" /><p>MBBS, MD (Psychiatry)</p></span>
 <span className='martop04'><img src={cal} alt="" /><p>Available on chat, live, and voice</p></span>

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